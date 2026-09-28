// read-form.js — one snapshot of every field on the page's form(s).
// Run: bsk evaluate --session <S> --tab-id <T> "$(cat scripts/read-form.js)"
// Returns a JSON string: an array of fields (tag/type/name/id/placeholder/
// required/label/options). Read-only — changes nothing on the page.
(function () {
  function labelOf(e) {
    var byFor = e.id && document.querySelector('label[for="' + e.id + '"]');
    var wrap = e.closest("label");
    var l = byFor || wrap;
    return l ? l.textContent.trim().replace(/\s+/g, " ").slice(0, 120) : null;
  }
  var fields = [...document.querySelectorAll("input,textarea,select,[contenteditable=true]")].map(function (e) {
    return {
      tag: e.tagName,
      type: e.type || (e.getAttribute("contenteditable") ? "contenteditable" : null),
      name: e.name || null,
      id: e.id || null,
      placeholder: e.placeholder || null,
      required: !!e.required,
      label: labelOf(e),
      options: e.tagName === "SELECT" ? [...e.options].map(function (o) { return o.text; }) : undefined,
    };
  });
  return JSON.stringify(fields);
})();
