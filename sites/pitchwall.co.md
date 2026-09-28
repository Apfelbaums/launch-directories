# pitchwall.co

- **Submit URL:** https://pitchwall.co/submit → pick a plan → `https://pitchwall.co/product/submit?plan=free`
- **Login:** Google/GitHub/Microsoft/Discord OAuth. Google's account-chooser and consent screens don't respond to a synthetic click — workaround: `bsk snapshot` then `bsk click --ref @eN`. After login, an account profile step (`/account/profile`) is mandatory before continuing — Name, Username, Avatar, About.
- **Captcha / bot protection:** none.
- **Price:** Free Launch gives one day on the homepage and a dofollow DR70 link, but with a minimum ~30-day queue wait and no guarantee of a newsletter/tweet mention. Premium $99 / Pro $49 are faster and guaranteed.
- **Link type:** dofollow (DR70) on the free tier.
- **Form fields:** Title → Name; Summary — has BOTH a minimum (100 chars) and maximum (160 chars), unusually tight — use a trimmed, sentence-boundary cut of the one-liner rather than inventing new copy; Description (up to 3000 chars); Tags — searchable combobox, pick close matches from the site's own list (its options don't include niche terms like "talking head" or "9:16"); Logo — standard file input.
- **Logo & limits:** logo uploads fine as a data-URI-to-File-to-DataTransfer workaround (plain square PNG, no strict size limit found). Separate "Product Images" field uses a FilePond widget.
- **Email confirmation:** none, OAuth-based.
- **Moderation:** "Submit for Review" is blocked until the Product Images gallery has at least one image — the logo doesn't count for this requirement.
- **Pitfalls:** the tags combobox is a Reka UI component whose element refs go stale after every click/fill — re-snapshot before each interaction with it. FilePond (the drag-drop image widget) does not accept a programmatic `.files` assignment or a synthetic `drop` DragEvent — both were tried and failed; it needs a real drag-and-drop from a human. Everything else (text fields, logo, tags) can be automated and survives a page reload once saved.
- **Last checked:** 2026-09-28 — Pending review: submitted; the site quotes 30+ days for review.
