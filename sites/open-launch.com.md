# open-launch.com

- **Submit URL:** https://open-launch.com/dashboard → "Submit a Project" (there is no direct `/submit` URL).
- **Login:** Google OAuth or GitHub OAuth only, no email option. Google login worked cleanly on a clean browser profile (no password manager extension conflicts).
- **Captcha / bot protection:** none.
- **Price:** a "Free Launch $0" tier is shown, but it has no real queue or date — the only action available on that path is "Notify me when free reopens" (an email subscription, not a queue slot). Only Premium ($12, launches next day) and an SEO Growth Package ($59) show real dates.
- **Link type:** unknown (not reached — blocked before publish).
- **Form fields:** Name, URL, description (rich-text field, needs `execCommand("insertText", …)` rather than a plain fill), logo upload (square icon, file input accepts a programmatically-set `.files` with a data URI — no special upload tool needed), Categories (checkboxes, max 3 — closest matches when "Video Editing" isn't listed: Artificial Intelligence, Productivity, SaaS), Tech Stack (free-text tag input, Enter to add — e.g. Python, FFmpeg), Platforms (checkboxes — Web), Pricing Model (radio — Paid), and a Details step with separate name/email fields for the submitter.
- **Logo & limits:** square, ideally 256×256; no explicit weight limit found. An optional 16:9 product image is separate from the logo.
- **Email confirmation:** not required at submission; only used for the "notify me" waitlist.
- **Moderation:** never reached — blocked at payment, not moderation.
- **Pitfalls:** the checkboxes/radios are controlled React components — clicking the raw `<input>` by DOM index is unreliable because indexes shift after each re-render (e.g. after adding a tech-stack tag). Reliable approach: find the `<label>` by its exact text content and click the label itself, not the input. "Next" buttons are plain `<button>` elements found by text content. Drafts don't persist reliably across sessions — a re-login showed 0 saved projects, so the whole form had to be redone from scratch. Don't reuse the site's own favicon as the product logo — always use the product's actual logo file.
- **Last checked:** 2026-09-27 — Needs a human: no real free-tier queue exists on this site, only an email waitlist for when it reopens; form is filled and left at the Review step pending an owner decision on paying ($12 Premium or $59 SEO package) or waiting.
