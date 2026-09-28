# Cross-site pitfalls

Lessons that keep recurring across unrelated directories. Read this before
a long run to avoid re-discovering the same dead end on a new site.

- **Google's account-chooser and consent screens don't respond to a
  synthetic click fired through `evaluate`.** Every site using Google OAuth
  hits this the same way — use `bsk snapshot` to get a real `@eN` ref for
  the account/consent button, then `bsk click` on that ref. A click
  dispatched via JS in the page's own context is silently ignored here.

- **GitHub and X logins don't work on a fresh browser profile.** Unlike
  Google, they need the user to have actually logged in on this profile
  before. If the site only offers GitHub/X auth and the profile isn't
  already logged into it, mark it "needs a human" immediately rather than
  trying to complete a login flow on their behalf.

- **Modern comboboxes (Radix, Reka UI, and similar) need fresh refs.**
  Typing into a search-as-you-type tag/category picker re-renders the
  option list; the ref from your last `snapshot` is stale the moment you
  filled the input. Fill, wait briefly, take a new `snapshot`, then click
  the option by its fresh ref.

- **"Chrome blocked CDP access to another extension's content"** usually
  means the current tab is fighting another extension's injected content
  script for automation access. Don't retry in place — open the page in a
  brand-new tab and re-run from there.

- **Daily free-submission quotas exist and reset unpredictably.** A site
  that worked yesterday can refuse a new free submission today purely on a
  quota, with no error message that says so explicitly. If a form that
  should be free suddenly behaves like it's blocked, check for a quota
  message before assuming the site broke.

- **Free-tier queues can run months ahead.** Some "free listing" options
  are free in name only — the actual publish date is scheduled 60+ weeks
  out, or every date on the calendar shows as full. Read the actual
  calendar/queue state before recording a site as "free and submitted";
  note the real wait in `sites/<domain>.md` so the tracking reflects
  reality, not the marketing copy.

- **Some directories are simply down.** An origin returning 5xx twice in a
  session, or a company shown as defunct in a public registry, isn't worth
  retrying — record it and move on rather than burning the 5-minute budget
  on a dead site.

- **Bot protection (CAPTCHA, Cloudflare challenge, etc.) means a human, not
  a puzzle to solve.** This isn't a workaround-able pitfall — it's a hard
  stop. See the hard rules in `SKILL.md`.
