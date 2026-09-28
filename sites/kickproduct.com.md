# kickproduct.com

- **Submit URL:** https://kickproduct.com → "It's Free Forever" → "Get Started"
- **Login:** Google OAuth, clean sign-in on a clean profile
- **Captcha / bot protection:** none
- **Price:** free ("Free Forever"); a paid pricing option can also be entered as the product's own pricing model (not the listing fee)
- **Link type:** unknown
- **Form fields (3-step wizard):** Basic Info → Product Name, Short Description, Image URL (an existing public og-image URL works fine instead of uploading a file), Website; Metadata → Tags (e.g. talking head, vertical video, 9:16, captions, shorts), Tech Stack tag (e.g. "video editing"), Category (AI); Pricing → Free / Paid / Freemium via a native select element — needs a direct value-set plus a change-event dispatch, since a standard fill tool doesn't handle this select correctly; "Free trial" isn't an option, only those three.
- **Logo & limits:** image supplied via URL, not file upload
- **Email confirmation:** unknown
- **Moderation:** none — published immediately as "Active," no review step
- **Pitfalls:** after publishing, the listing shows a "Verify your listing" prompt requiring a badge on your own site to keep the listing active — this applies after publication, doesn't block the initial submission, and is a site-content decision outside submission scope. The account's author display name can default to something you didn't intend — check profile settings, which also has a separate required Username field that isn't obvious at signup. A later attempt to verify the badge was blocked by the same browser extension/passkey overlay problem seen elsewhere during Google sign-in — and structurally the badge can't be verified yet regardless, since "Verify" only activates once the badge is actually live on the product's own site. The listing itself remains live and published throughout.
- **Human step:** a person signed in to the account; the agent did the rest.
- **Last checked:** 2026-09-28 — Listed (published, "Active" status; badge installed and verified).
