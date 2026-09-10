/* p-chrome.js — shared chrome for standalone /p/ artifact pages.
   Adds a small "home" link back to followorbounce.com and a one-line
   footer credit. Neutral styling; sits above page content. */
(function () {
  "use strict";
  if (window.__pchrome) return;
  window.__pchrome = true;

  var HOME = "https://followorbounce.com/";
  var css = [
    ".pchrome-home{position:fixed;left:12px;bottom:12px;z-index:2147483000;",
    "font:500 11px/1 ui-monospace,'DM Mono',Menlo,monospace;letter-spacing:.04em;",
    "text-decoration:none;color:#fff;background:rgba(13,12,10,.78);",
    "padding:7px 11px;border:1px solid rgba(255,255,255,.22);border-radius:2px;",
    "backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);transition:background .15s;}",
    ".pchrome-home:hover{background:#c0390b;border-color:#c0390b;}",
    ".pchrome-foot{margin:0;padding:26px 16px;text-align:center;",
    "font:400 11px/1.5 ui-monospace,'DM Mono',Menlo,monospace;letter-spacing:.06em;",
    "color:#8a857a;background:transparent;}",
    ".pchrome-foot a{color:inherit;}",
    "@media print{.pchrome-home{display:none;}}"
  ].join("");

  function mount() {
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    var a = document.createElement("a");
    a.className = "pchrome-home";
    a.href = HOME;
    a.textContent = "← followorbounce.com";
    a.setAttribute("aria-label", "Back to followorbounce.com");
    document.body.appendChild(a);

    var foot = document.createElement("p");
    foot.className = "pchrome-foot";
    var y = new Date().getFullYear();
    foot.innerHTML = "© " + y + ' Follow or Bounce · <a href="' + HOME + '">followorbounce.com</a>';
    document.body.appendChild(foot);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
