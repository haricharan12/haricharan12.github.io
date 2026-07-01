# Haricharan S — Portfolio

A modern, editorial-style personal portfolio (hero, about, experience timeline, project showcase, skills,
contact) with a Linux-terminal easter egg tucked behind a toggle for anyone who wants the original CLI
experience.

## Features

- Narrative single-page layout designed to be scannable in seconds, not just to technical visitors
- Scroll-triggered reveal animations (Intersection Observer, respects `prefers-reduced-motion`)
- Dark/light theme toggle with persisted preference
- Legacy terminal interface preserved as an opt-in overlay (click the terminal icon, or press `` ` ``)
- Structured data (schema.org `Person`/`ProfilePage` JSON-LD), Open Graph/Twitter meta tags, `llms.txt`,
  `robots.txt`, and `sitemap.xml` so search engines and AI agents can accurately parse and cite the page
- Security-conscious by default: strict `Content-Security-Policy` meta tag, no inline event handlers,
  `textContent`/DOM APIs preferred over `innerHTML` for anything not hand-authored static content

## Files

- `index.html` — structure, meta/SEO/AI-crawler tags, JSON-LD
- `styles.css` — design system (CSS variables, layout, animations)
- `script.js` — theme toggle, scroll reveal, mobile nav, terminal overlay (all via `addEventListener`)
- `llms.txt`, `robots.txt`, `sitemap.xml` — crawler/AI-agent discovery files

**Built with ❤️ by Haricharan Sethuseetharaman**
