// Honeypot logger — deploy this as a Cloudflare Worker (free tier is plenty).
// It is NOT part of the static site build; it runs on Cloudflare's edge, separately,
// and only exists to log whoever requests the hidden trap link in index.html.
//
// What it captures per hit: timestamp, source IP, User-Agent, referer, country.
// What it does with it: logs to the Worker's live tail, optionally posts to a Discord
// webhook for a real-time ping, and optionally persists to Workers KV so you have a
// browsable history in the Cloudflare dashboard.
//
// See HONEYPOT.md in this repo for step-by-step deployment instructions.

export default {
  async fetch(request, env, ctx) {
    const ip = request.headers.get('cf-connecting-ip') || 'unknown';
    const ua = request.headers.get('user-agent') || 'unknown';
    const referer = request.headers.get('referer') || 'none';
    const country = (request.cf && request.cf.country) || 'unknown';
    const asn = (request.cf && request.cf.asn) || 'unknown';
    const time = new Date().toISOString();

    const entry = { time, ip, ua, referer, country, asn, url: request.url };

    // Always visible in `wrangler tail` / the dashboard's live Logs panel.
    console.log(JSON.stringify(entry));

    // Optional: instant push notification via a Discord webhook.
    // Set as a secret: `wrangler secret put DISCORD_WEBHOOK_URL`
    if (env.DISCORD_WEBHOOK_URL) {
      ctx.waitUntil(
        fetch(env.DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            content:
              `**Honeypot hit**\n` +
              `Time: ${time}\n` +
              `IP: ${ip}  (ASN ${asn}, ${country})\n` +
              `User-Agent: ${ua}\n` +
              `Referer: ${referer}`
          })
        }).catch(() => {})
      );
    }

    // Optional: persistent log you can browse later.
    // Bind a KV namespace named HONEYPOT_LOG to this Worker.
    if (env.HONEYPOT_LOG) {
      ctx.waitUntil(
        env.HONEYPOT_LOG.put(`${time}_${crypto.randomUUID()}`, JSON.stringify(entry))
      );
    }

    // Give whoever/whatever hit this nothing interesting back.
    return new Response('Not found', {
      status: 404,
      headers: { 'content-type': 'text/plain' }
    });
  }
};
