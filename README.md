# launch-directories

A Claude Code skill for submitting a product to launch platforms, AI-tool
directories, SaaS directories, and GitHub awesome-lists — from one
canonical product card, with per-site tracking and backlink-badge
verification.

78 directories tried in September 2026. 40 submitted: 9 listed, 28 pending review, 3 scheduled launches. The rest: 9 need a human (bot protection, passkey, owner-only action), 10 paid only, 18 dead, sales-only or not a fit, 1 not pursued. Full table: [sites/INDEX.md](sites/INDEX.md).

## Install

1. Copy this folder into `~/.claude/skills/launch-directories/`.
2. Install BrowserSkill (the `bsk` CLI + browser extension):
   https://github.com/Tencent/BrowserSkill/blob/main/AGENT_INSTALL.md
3. Fill in `references/product-card.md` for your own product — copy the
   ReelsCut example's structure, not its text.

## Usage

Point Claude Code at it with a prompt like:

> Using the launch-directories skill, fill in the product card for
> <product>, then run the first 10 free sites from sites/INDEX.md and
> record the results.

Claude works through `references/run-one-site.md` per site, respects the
hard rules in `SKILL.md` (no paying, no captcha-solving, no unauthorized
newsletter signups), and hands off anything it can't finish to you with the
exact URL and field values to paste.

## Layout

- `SKILL.md` — entry point: requirements, workflow, hard rules.
- `sites/` — one file per directory, plus `sites/INDEX.md`.
- `references/` — how-to guides for running a site, the product card,
  badges, cross-site pitfalls, and the GitHub awesome-list PR flow.
- `scripts/` — the browser-automation helpers `bsk evaluate` runs.

Built while launching ReelsCut (https://reelscut.ai) — an editor for
talking-head vertical video shorts.

## License

MIT — see `LICENSE`.
