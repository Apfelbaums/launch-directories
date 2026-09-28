---
name: launch-directories
description: |
  Submit a SaaS product to launch platforms, AI-tool directories, SaaS
  directories, and GitHub awesome-lists; track submission results per site;
  place and verify "featured on" badges. Use when asked to submit a product
  to directories, run a directory-launch campaign, check submission status,
  or refresh a required backlink badge.
---

# launch-directories

Submits one product to many launch platforms, AI-tool directories, SaaS
directories, and GitHub awesome-lists, using one canonical product card as
the single source of truth for form copy. Tracks per-site results and keeps
"featured on" badges verifiable.

## Requirements

- **BrowserSkill** — the `bsk` CLI plus its browser extension.
  Repo: https://github.com/Tencent/BrowserSkill
  Install guide: https://github.com/Tencent/BrowserSkill/blob/main/AGENT_INSTALL.md
- The `browser-skill` agent skill (or an equivalent wrapper around `bsk`) for
  session/tab management, `observe`/`snapshot`, `click`, `fill`, `evaluate`
  and screenshots.
- Run sessions in the background (`--no-focus`) and against the user's own
  logged-in browser profile — directory forms lean on real Google/GitHub
  logins, and a fresh headless profile fails most OAuth flows outright.

## Workflow

1. **Fill the product card** — `references/product-card.md`. One source of
   truth for Name, URL, descriptions, category, tags, pricing. Never write
   new marketing copy per form; a form asking for content outside the card
   (long "Key Features", "Use Cases", "Security" essays) is a reason to skip
   that site, not a reason to invent text.
2. **Pick sites** from `sites/INDEX.md` — free listings first, skip anything
   paid-only or sales-lead-only (phone number, "book a call", budget
   questions) unless the user asked for paid submissions.
3. **Run each site** per `references/run-one-site.md`, with a hard 5-minute
   budget per site.
4. **Record the result** in `sites/<domain>.md` under "Last checked" —
   status, date, and anything that will save the next run time.
5. **Badge or backlink required for the free tier** — follow
   `references/badges.md` before promising the free path is done.
6. **Blocked** (captcha, human login, paid-only, ambiguous) — hand off to a
   human with the exact submission URL and the field values to paste, rather
   than stopping silently.

## Hard rules

- **Never pay.** A paid-only path is a reason to skip the site, not a reason
  to ask for a card number.
- **Never bypass captchas or bot protection.** That is the signal to stop
  and hand off to a human, not a puzzle to solve.
- **Never post on social networks or subscribe to newsletters** in the
  user's name without their explicit, per-site consent — even when a site
  makes that a condition of a free listing.
- **One-time codes read from the user's own mailbox are fine** (email
  verification links, magic-link codes). Never extract cookies, session
  tokens, or passwords from the browser or a password manager.
- **Keep credentials in a local env file outside this repo** — never write
  emails, passwords, API keys or account handles into `sites/*.md` notes.
  Reference the env var name only.
- **Don't hand a filled-in form in the agent's browser window to the user.**
  Agent windows close with the session, so the user can never actually see
  it. Give them a link plus the exact field values to paste instead.

## Layout

- `sites/` — one file per directory/platform (submission notes, status,
  pitfalls) plus `sites/INDEX.md` (the master list with current status).
- `references/` — how-to guides: `product-card.md` (canonical copy),
  `run-one-site.md` (step-by-step), `badges.md` (backlink badges),
  `pitfalls.md` (cross-site lessons), `awesome-lists.md` (GitHub PR flow).
- `scripts/` — browser-automation helpers meant to run through
  `bsk evaluate`; see `scripts/README.md`.
