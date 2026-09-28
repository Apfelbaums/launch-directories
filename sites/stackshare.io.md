# stackshare.io

- **Submit URL:** https://stackshare.io/ → "List a Tool" button under the Tools tab. The old `/vendors` path no longer exists (redirects to `/stacks`).
- **Login:** Google OAuth
- **Captcha / bot protection:** no visible captcha, but strong server-side bot detection on the submit action (see Pitfalls).
- **Price:** free, no tier shown on the form.
- **Link type:** unknown
- **Form fields:** two-step wizard. Step 1 is just the Website URL — the site then AI-autofills name, logo, description and tags from the domain; that generated copy needs manual replacement with the product's real one-liner, short description and 3-4 factual features. Also fills: Tool Name, Website URL, Docs URL (site's own URL works if there's no separate docs domain), one-line description, short description, semicolon-separated features.
- **Logo & limits:** square logo, accepts jpeg/jpg/png/webp; uploads fine via a fetch→File→DataTransfer workaround, confirmed by reading back the resulting `<img>` src.
- **Email confirmation:** not required.
- **Moderation:** never reached — blocked at Submit (see Pitfalls).
- **Pitfalls:** Submit consistently returns "Error: Bot access denied" — confirmed across a synthetic click, a real ref-based click, and repeated on a second, completely different browser session that was already logged into the same Google account. This is server-side automation/fingerprint detection, not a solvable captcha, and bypassing it is out of scope. A human submitting from a normal, non-automated browser session does get through cleanly.
- **Last checked:** 2026-09-28 — Pending review; automated submit is blocked by bot protection, a human click works. The owner submitted manually from a normal browser and it went through.
