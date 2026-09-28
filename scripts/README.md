# scripts/

Browser-automation helpers, all meant to run through `bsk evaluate` (see
https://github.com/Tencent/BrowserSkill). None of them touch the network or
filesystem on their own except `github-edit.py`, which shells out to `bsk`.

| Script | What it does | How to run |
|---|---|---|
| `read-form.js` | Reads every field on the page (tag/type/name/id/label/options) without changing anything. | `bsk evaluate --session <S> --tab-id <T> "$(cat scripts/read-form.js)"` |
| `fill-form.js` | Fills a form from a `selector -> value` map (`__MAP__` placeholder). Copy the file, substitute the real JSON map, run the result. | `bsk evaluate --session <S> --tab-id <T> "$(cat filled-copy.js)"` |
| `upload-logo.js` | Loads an image into a file input via `DataTransfer`, working around the Chrome CDP "Not allowed" file-input bug. Substitute `__SELECTOR__` and `__DATAURI__` first. Doesn't work on FilePond widgets. | `bsk evaluate --session <S> --tab-id <T> "$(cat filled-copy.js)"` |
| `github-edit.py` | Bulk-edits a file open in GitHub's web CodeMirror editor: fetches the raw file, splices in your marker-based insertion(s), writes the result back in one shot. See `references/awesome-lists.md`. | `python3 scripts/github-edit.py <session> <tab-id> <raw-url> <ops.json>` (self-check: `python3 scripts/github-edit.py --demo`) |

For `fill-form.js` and `upload-logo.js`, don't edit the placeholders in
place in this directory — copy the file elsewhere (or pipe it through a
one-liner substitution) so the checked-in template stays generic for the
next product/site.
