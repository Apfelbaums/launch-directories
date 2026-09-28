# saashub.com

- **Submit URL:** https://www.saashub.com/register → "Submit Product" → a multi-step wizard (Website → Tagline → Categories → Competitors → Pricing tier → Select Competitors → Select relevant categories) → then an images page at `/manage/<slug>/images`.
- **Login:** email/password. Account creation needs email + username + password; email verification is not required to use the account.
- **Captcha / bot protection:** hCaptcha on registration only — needs a human to solve it once; the rest of the submission wizard has no captcha.
- **Price:** free tier is usable end-to-end. A paid "Priority+" tier ($75) is offered but optional.
- **Link type:** unknown (not stated in the source note).
- **Form fields:** Website → product URL; Tagline → one-liner; Categories → pick 1-2 closest matches (e.g. Video Editing, Content Creation); Competitor search → add relevant competitor names; a later step re-confirms competitors and relevant categories from the site's own taxonomy (don't invent new tags, pick from the list).
- **Logo & limits:** the images page has two separate file inputs — a square logo (.png/.jpg) and a screenshot with its own title text field. Both upload via a fetch→Blob→File→DataTransfer workaround and confirm with an "uploaded successfully" message.
- **Email confirmation:** not required to complete the flow.
- **Moderation:** the product page goes live and gets indexed immediately after submission, marked "Pending approval" — visible to the public right away, actual approval/rating is a separate flag that lands later.
- **Pitfalls:** the "Proceed with selection" confirm buttons on the competitor/category steps can visually shift after checkboxes are toggled, so clicking a stale element ref misses — more reliable to select the button by its form/value attribute directly (e.g. via a JS `querySelector` on `input[value="Proceed with selection"]`) rather than a cached ref. There are unrelated decoy Cancel/Confirm buttons from a different modal on the same page — match by the surrounding form, not by first text match. Re-snapshot before each upload click since prior checkbox clicks invalidate refs.
- **Last checked:** 2026-09-27 — Pending review; product page live and indexed with logo, one-liner, categories, competitors and screenshot, awaiting approval.
