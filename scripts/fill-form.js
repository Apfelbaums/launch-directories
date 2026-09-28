// fill-form.js — fills a form from a selector -> value map.
// Before running, replace __MAP__ below with your real JSON map (copy this
// file, do the replace, run the result through a single bsk evaluate call).
// Supports: text/url/email/number/textarea (native setter + input/change),
// select (native setter on HTMLSelectElement + change), checkbox/radio
// (click on the found input, or on its <label> when matching by visible
// text is more reliable than a selector), contenteditable (execCommand
// insertText, for React/ProseMirror-style rich text editors).
//
// MAP format: [{selector, value, kind}], kind one of "value" (default),
// "select", "check", "labelClick", "contenteditable".
// selector is a normal document.querySelector(...) target; for labelClick,
// `value` is the label's exact visible text instead.
(function () {
  var MAP = __MAP__;
  function setNativeValue(el, val) {
    var proto = el.tagName === "TEXTAREA" ? window.HTMLTextAreaElement.prototype
      : el.tagName === "SELECT" ? window.HTMLSelectElement.prototype
      : window.HTMLInputElement.prototype;
    var setter = Object.getOwnPropertyDescriptor(proto, "value").set;
    setter.call(el, val);
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
  }
  var results = [];
  MAP.forEach(function (item) {
    try {
      if (item.kind === "labelClick") {
        var lab = [...document.querySelectorAll("label")].find(function (l) {
          return l.textContent.trim().toLowerCase() === item.value.toLowerCase();
        });
        if (!lab) throw new Error("label not found: " + item.value);
        lab.click();
        results.push(item.selector + ":clicked");
        return;
      }
      var el = document.querySelector(item.selector);
      if (!el) throw new Error("not found: " + item.selector);
      if (item.kind === "contenteditable") {
        el.focus();
        document.execCommand("selectAll", false, null);
        document.execCommand("insertText", false, item.value);
      } else if (item.kind === "check") {
        if (el.checked !== !!item.value) el.click();
      } else {
        setNativeValue(el, item.value);
      }
      results.push(item.selector + ":ok");
    } catch (e) {
      results.push(item.selector + ":ERROR:" + e.message);
    }
  });
  return results.join("|");
})();
