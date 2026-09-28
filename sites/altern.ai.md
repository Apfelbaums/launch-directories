# altern.ai

- **Submit URL:** https://altern.ai/maker/submit (full form); a shorter "quick submit" path skips logo/categories/description
- **Login:** Google or GitHub OAuth only (no email option). Google sign-in works cleanly on a clean browser profile. First login triggers a mandatory short profile questionnaire (username/name/bio/socials) before reaching the dashboard.
- **Captcha / bot protection:** none
- **Price:** listed as "FREE TO SUBMIT," but the free plan at the review step actually requires ALL of: a site badge (or a public social post about the listing), a newsletter subscription, and following the site's social account. Paid plans: Base $29, Featured $49.
- **Link type:** unknown
- **Form fields:** Name → name; URL → website; a product-type radio ("Tools") — click the label text, not the input; One line → tagline (61-char canonical fits); Description → canonical ~150-word description; a platform checkbox ("Web App") — also click the label; Category checkboxes — closest matches are "Video Editor" and "Video" (no exact video-editing category exists among ~180 categories)
- **Logo & limits:** not confirmed to completion — a multi-step form with an autosaved draft; logo uploads on a separate "Media" step through a standard file input, but the page can render two file inputs (logo vs. screenshots) whose DOM order shifts between renders — match by field label each time, not by index.
- **Email confirmation:** not required — login is OAuth-only
- **Moderation:** not reached — blocked at the plan-selection step (badge/subscription requirements)
- **Pitfalls:** the form renders all 5 steps into the DOM at once instead of per-step, so a full-page field read mixes fields from every step, including hidden badge/follow verification checkboxes — expected, not a bug. Checkboxes/radios are controlled components: click the matching `<label>` text, not the underlying input, which doesn't always register. No exact "video editing" category exists. The free plan's three gating conditions (badge, social follow, newsletter) are not disclosed until the final review step.
- **Last checked:** 2026-09-28 — Needs a human: after placing the site badge, the free plan still requires a social-account follow and a newsletter subscription (both against submission rules to do unilaterally); the listing sits as a Free-plan draft pending those two items, or a $29 paid plan.
