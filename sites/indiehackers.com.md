# indiehackers.com

- **Submit URL:** https://www.indiehackers.com/products → "ADD YOUR PRODUCT"
- **Login:** Google-only ("accounts are created with Google"); works cleanly on a clean browser profile — the account chooser needs a real click on the referenced element, not a synthetic one. The OAuth flow can open in a separate popup window outside the main automation window; if so it needs to be picked up as a separate tab, though with only one Google account signed in the popup often closes itself before you can — check the parent tab's state either way.
- **Captcha / bot protection:** none
- **Price:** free
- **Link type:** unknown
- **Form fields:** Tagline — hard 60-character limit via an unlabeled length attribute (not shown in the UI) — a standard 61-character tagline (with a trailing period) needs the period dropped to fit
- **Logo & limits:** logo must be a dedicated logo file, not the site's own outdated icon asset
- **Email confirmation:** unknown
- **Moderation:** unknown
- **Pitfalls:** after a failed submit, the logo field shows a message suggesting you re-choose the file — this is generic browser behavior (any file input clears on page reload), not necessarily about the logo; check the whole page's error text for the real validation failure (in one pass, the real blocker was the 60-character tagline limit, not the file field). An extended founder-profile section (motivation, business model, funding, founder/employee counts) should be left blank where no real fact is available, rather than invented. A later check found a first submission was incomplete — the product page needs sign-in-free public access, and a "Fill in missing information" checklist item (a required Motivation field, plus a required Start Date) had been silently skipped; both should be filled with real facts (a short honest description of the product's value proposition; a start date based on the actual first commit date) and the page reverified as publicly reachable without login.
- **Last checked:** 2026-09-27 — Listed (public product page reachable without login, confirmed via a direct HTTP check)
