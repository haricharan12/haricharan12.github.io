# Honeypot setup

This site has a hidden link (see `index.html`, near the closing `</body>`) that no human visitor
and no well-behaved crawler will ever request: it's excluded from the accessible DOM
(`aria-hidden`, `tabindex="-1"`), marked `rel="nofollow"`, visually hidden via `.visually-hidden`
in `styles.css`, and its would-be path is disallowed in `robots.txt`. Anything that fetches it
anyway is, by definition, an automated crawler that isn't respecting normal signals.

`honeypot-worker.js` is the logging endpoint the hidden link points to. It's a Cloudflare Worker,
not part of the static site, so you deploy it separately under your own (free) Cloudflare account —
I can't create that account or deploy it for you, but it's a 5-minute copy/paste job:

1. Go to dash.cloudflare.com, sign up free, open **Workers & Pages → Create → Worker**.
2. Replace the default code with the contents of `honeypot-worker.js` and deploy.
3. Note the URL Cloudflare gives you, something like
   `https://honeypot.<your-subdomain>.workers.dev`.
4. Open `index.html` and replace `https://REPLACE-WITH-YOUR-WORKER-URL.workers.dev/checkpoint`
   with that URL (keep a path like `/checkpoint` on the end, or change it to whatever you like).
5. (Optional, recommended) For real-time alerts: create a Discord server, **Server Settings →
   Integrations → Webhooks → New Webhook**, copy the URL, then in your Worker's settings add it as
   a secret named `DISCORD_WEBHOOK_URL` (`wrangler secret put DISCORD_WEBHOOK_URL`, or via the
   dashboard's Settings → Variables). Every hit will post to that channel with IP, User-Agent,
   country, and timestamp.
6. (Optional) For a browsable history instead of just live logs: create a KV namespace called
   `HONEYPOT_LOG` (**Workers & Pages → KV**) and bind it to the Worker under the same name.

Once deployed, every hit on the hidden link gets you the requester's IP, User-Agent string,
referer, and rough geolocation — enough to identify which crawler (or human oddly poking around
your HTML source) ignored the signals telling it not to go there.

Nothing about this is designed to disrupt or break whatever hits it — it just returns a plain
404 and quietly logs who asked.
