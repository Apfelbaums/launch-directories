// upload-logo.js — loads an image into an input[type=file] without going
// through the OS file picker.
// Works around a Chrome bug where a direct click on a file input via CDP
// automation returns "Not allowed" / {"code":-32000}: instead of touching
// the input's picker, we assign its .files via DataTransfer directly.
// Does NOT work on FilePond-based upload widgets — those need a real
// drag-and-drop event; see references/run-one-site.md for that exception.
//
// Prepare once, locally:
//   curl -s <logo URL> -o /tmp/logo.png
//   printf 'data:image/png;base64,%s' "$(base64 -w0 /tmp/logo.png)" > /tmp/logo-datauri.txt
// Then substitute the content of /tmp/logo-datauri.txt for __DATAURI__ below
// (e.g. with `python3 -c "...str.replace(...)"`) and run the result through
// bsk evaluate.
//
// SELECTOR is the CSS selector of the target <input type=file>. If a page
// has more than one file input, check scripts/read-form.js output first to
// find the right one by its label.
(async function () {
  try {
    var SELECTOR = "__SELECTOR__"; // e.g. 'input[type=file]' or '[data-testid=logo-input]'
    var dataUri = "__DATAURI__";
    var resp = await fetch(dataUri);
    var blob = await resp.blob();
    var file = new File([blob], "logo.png", { type: blob.type || "image/png" });
    var dt = new DataTransfer();
    dt.items.add(file);
    var input = document.querySelector(SELECTOR);
    if (!input) throw new Error("file input not found: " + SELECTOR);
    input.files = dt.files;
    input.dispatchEvent(new Event("change", { bubbles: true }));
    input.dispatchEvent(new Event("input", { bubbles: true }));
    return "ok:" + input.files.length + ":" + blob.size;
  } catch (e) {
    return "ERROR:" + e.message;
  }
})();
