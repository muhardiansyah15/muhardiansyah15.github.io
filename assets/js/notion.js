/* muhardiansyah.dev — Notion-style theme. Minimal by design: no animations. */
(function () {
  "use strict";

  /* Preloader */
  window.addEventListener("load", function () {
    var pre = document.getElementById("preloader");
    if (pre) setTimeout(function () { pre.classList.add("fini"); }, 350);
  });

  /* Footer year */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* Gallery view picker (All / Apps / Art) */
  var buttons = document.querySelectorAll(".seg button");
  var cards = document.querySelectorAll(".g-card");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      var f = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        card.classList.toggle("hidden", f !== "*" && card.getAttribute("data-cat") !== f);
      });
    });
  });
})();
