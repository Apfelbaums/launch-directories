#!/usr/bin/env python3
"""Bulk-edit a file in GitHub's web editor (CodeMirror), then leave it ready
to commit as a PR. Used for awesome-list submissions — see
references/awesome-lists.md for the full flow.

Fetches the raw file, finds your marker text, splices in your insertion
(before/after/replace), and writes the whole result into the page's
CodeMirror editor in one shot via `bsk evaluate`. A line-by-line `fill`
into `.cm-content` is not reliable enough for this (it tends to only
confirm the first character), so this always does a single bulk replace.

Usage:
  github-edit.py <session> <tab-id> <raw-url> <ops.json>

ops.json: a JSON list of {"marker": "...", "insert": "...", "position": "before"|"after"|"replace"}
applied in order against the same fetched document. A single-point edit is
just a one-element list.

No SSH, no hardcoded paths or machine names — <session>/<tab-id> come from
your own `bsk session start` / `bsk tab create` calls, and the JS template
below is embedded in this file rather than loaded from elsewhere.
"""
import json
import subprocess
import sys
import tempfile

JS_TEMPLATE = """
(async () => {
  const RAW_URL = __RAW_URL__;
  const OPS = __OPS__; // [{marker, insert, position}]
  const res = await fetch(RAW_URL, {cache: 'no-store'});
  let text = await res.text();
  const report = [];
  for (const op of OPS) {
    const idx = text.indexOf(op.marker);
    if (idx === -1) { report.push({error: 'marker-not-found', marker: op.marker.slice(0, 60)}); continue; }
    let newText;
    if (op.position === 'after') {
      const at = idx + op.marker.length;
      newText = text.slice(0, at) + op.insert + text.slice(at);
    } else if (op.position === 'replace') {
      newText = text.slice(0, idx) + op.insert + text.slice(idx + op.marker.length);
    } else {
      newText = text.slice(0, idx) + op.insert + text.slice(idx);
    }
    text = newText;
    report.push({ok: true, at: idx});
  }
  const contentEl = document.querySelector('.cm-content');
  if (!contentEl) return {error: 'no-cm-content'};
  contentEl.focus();
  let method = 'none';
  try {
    const view = contentEl.cmView && contentEl.cmView.view;
    if (view) {
      view.dispatch({changes: {from: 0, to: view.state.doc.length, insert: text}});
      method = 'cmView';
    }
  } catch (e) {}
  if (method === 'none') {
    document.execCommand('selectAll');
    const okIns = document.execCommand('insertText', false, text);
    method = okIns ? 'execCommand' : 'execCommand-failed';
  }
  return {method, newLen: text.length, report};
})()
"""


def main():
    if len(sys.argv) != 5:
        sys.exit(__doc__)
    session, tab_id, raw_url, ops_file = sys.argv[1:5]
    with open(ops_file, encoding="utf-8") as f:
        ops = json.load(f)
    js = JS_TEMPLATE.replace("__RAW_URL__", json.dumps(raw_url)).replace("__OPS__", json.dumps(ops))
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
        f.write(js)
        js_path = f.name
    result = subprocess.run(
        ["bsk", "evaluate", "--session", session, "--tab-id", tab_id, "--json", js],
        capture_output=True, text=True,
    )
    print("script saved at:", js_path)
    print("STDOUT:", result.stdout)
    print("STDERR:", result.stderr)


def _demo():
    """Self-check: the splice logic used inside JS_TEMPLATE, mirrored in
    Python so it can be asserted without a browser."""
    def splice(text, ops):
        for op in ops:
            idx = text.index(op["marker"])
            if op["position"] == "after":
                at = idx + len(op["marker"])
                text = text[:at] + op["insert"] + text[at:]
            elif op["position"] == "replace":
                text = text[:idx] + op["insert"] + text[idx + len(op["marker"]):]
            else:
                text = text[:idx] + op["insert"] + text[idx:]
        return text

    src = "- [A](https://a.example)\n- [C](https://c.example)\n"
    out = splice(src, [{"marker": "- [C]", "insert": "- [B](https://b.example)\n", "position": "before"}])
    assert out == "- [A](https://a.example)\n- [B](https://b.example)\n- [C](https://c.example)\n", out
    print("demo ok")


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--demo":
        _demo()
    else:
        main()
