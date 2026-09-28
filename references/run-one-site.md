# Running one site

Generalized step-by-step for taking a single directory/launch-platform
submission from "open the tab" to "recorded in `sites/<domain>.md`". Budget:
**5 minutes per site.** If you haven't submitted or clearly identified a
blocker by then, mark it "needs a human" with the reason and move on.

## Steps

1. **Open a tab** in a background browser session:
   `bsk session start --browser <ID> --no-focus`, then
   `bsk tab create --session <S> --url "<submission URL>"`.

2. **Read the form without changing anything** —
   `bsk evaluate --session <S> --tab-id <T>` with the contents of
   `scripts/read-form.js` as the code. Returns a JSON snapshot of every
   field (tag/type/name/id/label/options) in one call, so you can plan the
   field map before touching the page.

3. **Check the login requirement.**
   - No account needed → skip to step 4.
   - Google OAuth → usually works on the user's logged-in profile. The
     account-chooser and consent screens **do not respond to a synthetic
     click fired through `evaluate`** — real clicks only. Take a
     `bsk snapshot --session <S> --tab-id <T>`, find the `@eN` ref for the
     account or "Continue" button, then `bsk click --session <S> --tab-id <T> <ref>`.
   - GitHub/X/other third-party login → only works if the user is already
     logged into that provider in this browser profile. If not, mark the
     site "needs a human" immediately — don't try to log an account in for
     them.

4. **Fill the form** — take the field map from `references/product-card.md`
   (one source of truth for every site) and plug it into
   `scripts/fill-form.js` (replace the `__MAP__` placeholder), then run it
   through `evaluate`. Map format: `[{selector, value, kind}]`, where `kind`
   is `value` (default), `select`, `check`, `labelClick`, or
   `contenteditable`.
   - Checkboxes and radios in modern frameworks are often controlled
     components where clicking by index drifts after a re-render. Find the
     `<label>` by its exact trimmed text and click the label itself, not the
     input — that's what `kind: "labelClick"` does.
   - A search-as-you-type tag combobox needs a fill, a short wait for
     results, then a **fresh** `bsk snapshot` (refs go stale after every
     click/fill) before clicking the matching option by ref.

5. **Logo upload** — a direct click on `input[type=file]` through `evaluate`
   commonly fails with "Not allowed" / `{"code":-32000}` (a Chrome
   file-input permission quirk, not a bug in the site). Work around it with
   `scripts/upload-logo.js` (fetch → `File` → `DataTransfer`, no OS file
   dialog): fill in the `__SELECTOR__` (the file input's CSS selector) and
   `__DATAURI__` (the logo, as a data URI), then run through `evaluate`.
   - **Exception: FilePond widgets.** FilePond-based upload widgets don't
     react to a `DataTransfer`-assigned `files` list — their internal
     upload logic needs a real drag-and-drop event. Those need a human, or
     a `bsk` drag-and-drop primitive if the wrapper skill exposes one.
   - The logo file is always "the logo file from the product card" —
     `references/product-card.md` names it; never substitute the site's own
     favicon or an old/unapproved logo.
   - Verify the upload by screenshot, not by the JS return value or an API
     response — a 200-ish return can still mean the preview never rendered.

6. **Screenshot before submitting** —
   `bsk screenshot --session <S> --tab-id <T> --out <path>`. Compare it
   against the product card field-by-field, then press submit.

7. **Budget check.** If you're past 5 minutes and not done, stop, write
   "needs a human" with the specific blocker (captcha, dead-end login,
   ambiguous pricing question), and move to the next site rather than
   grinding on one form.

8. **Write `sites/<domain>.md`** right after the site (1-2 minutes), using
   the template below. Never put passwords, codes, or tokens in the file —
   only the name of the credential's env var, kept in a local file outside
   this repo.

## Site note template

```
# <domain>

- **Submit URL:** ...
- **Login:** email / Google / GitHub / none — and any login gotchas
- **Captcha:** yes/no, which kind
- **Bot protection:** yes/no, which kind (Cloudflare challenge, etc.)
- **Price:** what's actually free, what's paid
- **Link type:** dofollow / nofollow / unknown, and how you confirmed it
- **Form fields:** table of selector → product-card field
- **Logo & limits:** required size/format, text length limits
- **Email confirmation:** who the email is from, what to click
- **Moderation:** typical wait
- **Pitfalls:** what broke and how it was worked around
- **Last checked:** status and date
```
