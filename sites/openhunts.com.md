# openhunts.com

- **Submit URL:** https://openhunts.com/submit — a two-step wizard (Project Info → Launch & Submit).
- **Login:** Google OAuth. Sign-in has gotten stuck on the account picker behind a browser extension/passkey overlay on at least one attempt (Chrome blocked CDP access to another extension's content in that tab) — retry from a clean profile if this happens.
- **Captcha / bot protection:** none.
- **Price:** Free ($0/launch) exists but the queue is a structural dead end — every week shown all the way out to roughly a year ahead is marked "Full". Premium is $9.9–19/launch, Highlight $20–59/week.
- **Link type:** dofollow only conditionally on Free — a badge unlocks open weeks in the queue, but a backlink itself is only granted "if top 3" for the week, not guaranteed. Weaker guarantee than most directories.
- **Form fields:** Website URL, Project Name, Tagline, Description (rich-text field — needs `execCommand("insertText", …)` rather than a plain fill), Categories (no dedicated Video/Content category — closest matches: SaaS + Productivity), Platforms (Web + Mobile), Pricing (Paid), Logo (file input, index 0), Product image (file input, index 2 — required even though not visually marked with an asterisk; the form blocks "Next" without it).
- **Logo & limits:** logo and product image both upload via a standard file input; a data-URI-to-File workaround works.
- **Email confirmation:** unknown.
- **Moderation:** Free-tier queue is full through the visible calendar; the only way in without paying is the badge, which trades a site-footer badge install for open weeks — and even then the backlink itself isn't guaranteed, only a shot at top-3.
- **Pitfalls:** badge code (captured via a clipboard-write intercept on "Copy HTML"): `<a href="https://openhunts.com" target="_blank" title="OpenHunts Club"><img alt="OpenHunts Club Member" height="105" src="https://cdn.openhunts.com/badges/club.webp" style="width: 195px; height: auto;" width="486"></a>`. This is a product/site decision, not something to install unilaterally.
- **Last checked:** 2026-09-28 — Needs a human: sign-in blocked by a browser extension overlay; separately, the free queue needs either the badge (backlink not guaranteed) or a paid plan to actually publish.
