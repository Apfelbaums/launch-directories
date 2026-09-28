# launchvault.dev

- **Submit URL:** https://www.launchvault.dev (button: "Submit Your Product Now")
- **Login:** Google OAuth. A Cloudflare Turnstile widget appears on the email/password login form but was not encountered via Google login. Sign-in has occasionally gotten stuck on the account picker behind a browser extension/passkey overlay — if that happens, retry from a clean profile.
- **Captcha / bot protection:** none observed via Google login; Turnstile on the email/password path.
- **Price:** Free tier available; Premium $9.99–19.99 gives a guaranteed dofollow link (no badge required).
- **Link type:** dofollow (Premium); Free tier is dofollow but gated behind a badge (see Pitfalls).
- **Form fields:** two-step wizard — Project Details (Project Name, Tagline, Short Description, Categories — pick 2 of 3, Platforms, Pricing Model, Logo — required) → Launch & Submit (plan selection).
- **Logo & limits:** logo upload is required; a plain `fetch(dataURI)` upload failed (looked like a CSP block) — decoding the image to bytes and building a `File`/`DataTransfer` object worked.
- **Email confirmation:** unknown.
- **Moderation:** Free plan requires a dofollow backlink badge installed on your own site BEFORE you can pick a launch date. There is a third option: "Save Project" stores the card as a draft with status "Needs backlink" without a link or date yet.
- **Pitfalls:** the site's own badge asset filename has a typo (`launch-valut-badge.svg` instead of `vault`) — reproduce the badge code exactly as given, don't "fix" the typo. Badge code: `<a href="https://www.launchvault.dev" target="_blank" title="Feature On Launch Vault"><img src="https://www.launchvault.dev/images/badges/launch-valut-badge.svg" alt="Feature On Launch Vault" style="width: 195px; height: auto;" /></a>`. Installing the badge is a product/site decision, not something to do unilaterally.
- **Last checked:** 2026-09-28 — Needs a human: badge must be installed on the product's own site, then verified in the Launch Vault dashboard ("Add backlink" → "Verify badge") to pick a free-queue date, or pay $9.99+ for Premium.
