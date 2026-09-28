# GitHub awesome-lists

Most "AI tools" / "video tools" curated lists on GitHub take additions only
as a pull request against their `README.md`. No web form, no account beyond
GitHub itself — but each list has its own rules, and skipping the
reconnaissance step is the most common way to burn a PR for nothing.

## Recon, before touching anything

1. **Read `CONTRIBUTING.md` first**, and check the repo's actual default
   branch (`gh api repos/<owner>/<repo> --jq .default_branch`) — some lists
   still use `master`. If there's no `CONTRIBUTING.md`, read the "How to
   contribute" section of the README itself. Look for hard disqualifiers
   stated up front: "must be open source", "must have N GitHub stars",
   "API-only tools" — any of these is a reason to skip the list outright,
   not a rule to argue with.
2. **Check you're not already listed** — `grep -i <product>` over the
   README (and any per-category files the list splits into), plus
   `gh pr list -R <owner>/<repo> --search <product> --state all` for an
   already-open or already-merged PR.
3. **Check for a PR template before writing anything** — pinned issues
   (`gh api graphql` with `pinnedIssues`) and
   `gh api repos/<owner>/<repo>/contents/.github` for
   `PULL_REQUEST_TEMPLATE*` / `ISSUE_TEMPLATE*`. If a template exists, fill
   it in field by field with facts taken only from the product card
   (`references/product-card.md`) — never invent a differentiator or a
   pricing claim the card doesn't already state.

## Editing through GitHub's web editor (no token needed)

`gh` write access is unreliable for this — fine-grained PATs commonly can't
fork or push to a repo they don't own, and the interactive device-flow auth
doesn't fit an agent session. The web editor works without any token and is
2-3 minutes per repository:

1. Open `https://github.com/<owner>/<repo>/edit/<branch>/<path>` directly.
   If the repo isn't yours, the page offers "You need to fork this
   repository to propose changes" — click it (via a snapshot ref, not a
   text selector: GitHub's editor doesn't expose stable CSS hooks for this
   button). One click both forks and drops you into edit mode on the fork's
   copy of the same file. If the fork name collides with an existing repo
   of yours, GitHub appends a numeric suffix — read the actual fork path
   back from the page rather than guessing it.
2. Use `scripts/github-edit.py` to make the edit: it fetches the file's raw
   content, finds your marker text, splices in the insertion (`before`,
   `after`, or `replace`), and writes the whole document into the page's
   CodeMirror editor in one shot via `bsk evaluate`. A line-by-line `fill`
   into the editor is not reliable enough to use here — CodeMirror only
   reliably accepts a bulk `insertText`/dispatch replace.
3. **Verify by content, not by screenshot.** After the edit runs, check
   `newLen - oldLen` equals the length of the inserted text (in UTF-16 code
   units — multi-byte characters like em dashes shift byte length
   predictably, that's expected, not corruption). After committing, `curl`
   the raw file on your fork and `grep` around the insertion to see the
   exact position with your own eyes, rather than trusting the editor's
   in-page state (large files can show a CodeMirror-virtualized, partial
   `innerText` well before the commit — that's a viewport quirk, not proof
   the document is wrong).
4. **Commit**: the "Commit changes..." dialog. Replace any
   auto-generated commit message with something plain and factual (e.g.
   "Add <product>"), then "Propose changes" → "Create pull request".
5. **PR body**: if recon found a template, paste it in filled out, field by
   field. Otherwise, two or three plain sentences in English: what you
   added and why it fits the list's scope. A neutral, factual title beats a
   promotional one — most maintainers reject anything that reads like an ad.
   Read `location.href` after the click to get the actual PR URL — a
   "temporary browser state could not be restored" warning at this point is
   a browser-UI hiccup, not a failed submission; the PR is usually already
   created by then, so confirm by URL, not by the warning text.
6. **Record it** in `sites/github-<owner>-<repo>.md` — which section you
   added to, the format that section expects, anything `CONTRIBUTING.md`
   demanded, and a link to the PR (or the reason you skipped the repo).
