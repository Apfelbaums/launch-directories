# alternativeto.net

- **Submit URL:** https://alternativeto.net/account-info/ (password reset) → login → https://alternativeto.net/suggest-app/
- **Login:** email/password, pre-existing account (years old — no new-account waiting period applied). Password reset via "Forgot password," which required solving an hCaptcha on the reset form (done manually) before the reset email arrived.
- **Captcha / bot protection:** hCaptcha on the password-reset form only; the submission form itself has no captcha
- **Price:** no listing price from the site; the submission form is free
- **Link type:** unknown
- **Form fields:** App Name; Website; Short Description → standard tagline; Full Description → canonical long description; Pricing → native select has no "Paid" option, closest honest choice is "Commercial"; Tags → autocomplete against existing tags only — pick an established, high-usage tag (this auto-derives App Type and category) rather than inventing a fresh unused tag; Platforms → Online; Company/Author → create new via "Create company / author"
- **Logo & limits:** two separate file inputs — icon (required, square 128×128+ recommended, transparent background preferred) and screenshot (up to 3MB, JPEG/PNG/WebP). A standard file-input upload technique worked on the first try.
- **Email confirmation:** only for the password reset, not for the submission itself
- **Moderation:** the listing page goes live immediately after submit (title reflects the submitted tagline); any further moderation, if it exists, happens after publication
- **Pitfalls:** the "Forgot password?" link inside the login modal is a plain anchor to a different route — a synthetic click leaves the modal visually open without navigating, so grab the href directly and open it in a new tab. After logging back in, the password field sometimes has no accessible reference in a page snapshot even though it exists in the DOM — fill it by CSS selector as a fallback. An ad modal can appear after login and needs closing before continuing. The listing needs at least one "alternative" added via the built-in search, or it shows as having none and is nearly unfindable in search.
- **Human step:** a person solved the captcha.
- **Last checked:** 2026-09-27 — Listed (live listing page, with icon, two screenshots, and one alternative product added)
