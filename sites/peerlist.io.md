# peerlist.io

- **Submit URL:** https://peerlist.io/launchpad/2026/week/<n> — there's no static `/submit` URL, the week number changes. Direct URLs like `/settings/profile` and `/launchpad/create` 404; navigate via in-page links instead (your name/avatar in the header → your profile page; "Launchpad" in the left menu → current week).
- **Login:** Google, GitHub, or email OAuth. On a clean Chrome profile, Google login itself completes without errors, but the Google account-chooser and consent screens don't respond to a synthetic `element.click()` — workaround: take a snapshot and click by element ref (`bsk snapshot` then `bsk click --ref @eN`).
- **Captcha / bot protection:** none directly, but a heavy identity gate instead (see Pitfalls).
- **Price:** free, but this isn't a one-off submission form — Peerlist requires a full LinkedIn-style profile (photo, headline, work experience, links). Below roughly 40% profile completeness the site blocks interaction ("You can't interact yet").
- **Link type:** unknown (never reached publish).
- **Form fields:** profile settings, not a listing form — first/last name, headline, website, social links.
- **Logo & limits:** avatar 400×400, not uploaded (profile never completed).
- **Email confirmation:** not required, OAuth-based.
- **Moderation:** never reached — blocked well before moderation, at the profile-completeness gate and then a second, harder gate.
- **Pitfalls:** completeness is scored by section — Basic Details, Username, Social Links, Job Preferences, Profile Picture, Profile Tags, plus two large chunks (Add Resume, Add Integrations/Projects, ~30% each) that need data this kind of listing pass doesn't have. Beyond the 40% wall, the "Launch" button on Launchpad opens a second, harder gate: "Get verified to Launch" requiring a government-issued ID upload. That's a KYC step, not a form field, and isn't something to do without the site owner's direct say-so.
- **Last checked:** 2026-09-27 — Not a fit: declined at the government-ID verification requirement; the owner chose not to complete KYC for a directory listing. Don't retry without explicit owner sign-off.
