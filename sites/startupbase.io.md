# startupbase.io

- **Submit URL:** https://startupbase.io/submit → a per-listing dashboard at `/submissions/<slug>` with tabs (General/Media/Makers/Extras/Launch Checklist).
- **Login:** Google OAuth. First login requires a one-time personal profile onboarding (name/username pulled from Google; also fill Headline, X handle, LinkedIn, Website, Country, avatar). Onboarding also prompts to upvote other people's launches — skip that with the "Skip for now" button, it's not part of a submission.
- **Captcha / bot protection:** none.
- **Price:** filling out the product card is free; publishing ("launching") has a paid fast-path (see Pitfalls).
- **Form fields:** the wizard AI-autofills a tagline, description and tags from the domain — that generated copy needs manual replacement with the real one-liner (~60 chars), a longer markdown description, X handle, and Product URL. Tags come from a fixed taxonomy (no free-text tags) — pick the closest matches and drop any that don't fit the facts. Pricing field, Country field. The "maker" is the logged-in account, populated automatically from OAuth login — not separately editable from the submission text.
- **Logo & limits:** listing logo 512×512, JPG/PNG/WebP/GIF, ≤2MB, uploads via a fetch→File→DataTransfer workaround. Product screenshot is pulled automatically from the live landing page.
- **Email confirmation:** not required.
- **Moderation:** the Launch Checklist can reach 100% (name/tagline/tags/description/logo/screenshot/price/location/makers all green) with the listing saved as a Draft.
- **Pitfalls:** the free launch path has a gate before scheduling — "One quick step before you launch" requires giving 3 upvotes and 1 comment/review on other people's launches first, or paying $39 (or $99 for a Boost plan) for an immediate/guaranteed launch. Voting/reviewing other products on the owner's behalf is out of scope for an automated submission pass.
- **Last checked:** 2026-09-28 — Pending review: submitted free; badge installed and verified, which moves the listing to the priority queue (~4–5 weeks).
