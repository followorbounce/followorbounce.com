/* THE BUTTON — a repair story
   Interaction layer: scroll reveals, the system readout, the loop counter,
   the road progress track. No animation here that doesn't carry meaning. */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------
     1. Generic reveal-on-scroll for any [data-reveal] element
  --------------------------------------------------------------------- */
  var revealTargets = document.querySelectorAll(".reveal-up, .confidence, .reveal-word");
  if ("IntersectionObserver" in window && revealTargets.length) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.25 }
    );
    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  /* ---------------------------------------------------------------------
     2. Hero title line reveal on load
  --------------------------------------------------------------------- */
  var heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    requestAnimationFrame(function () {
      setTimeout(function () {
        heroTitle.classList.add("reveal");
      }, 120);
    });
  }

  /* ---------------------------------------------------------------------
     3. The system readout — a fixed instrument strip that reports which
        stage of the investigation the reader is currently inside, plus a
        fake-diagnostic code per stage. This is the signature element.
  --------------------------------------------------------------------- */
  var stages = Array.prototype.slice.call(document.querySelectorAll("[data-stage]"));
  var sysBar = document.getElementById("systemBar");
  var sbStage = document.getElementById("sbStage");
  var sbCode = document.getElementById("sbCode");
  var sbProgress = document.getElementById("sbProgress");

  if (stages.length && sysBar) {
    var stageObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var label = entry.target.getAttribute("data-stage-label") || "";
            var code = entry.target.getAttribute("data-stage-code") || "";
            var fault = entry.target.getAttribute("data-stage-fault") === "true";
            sbStage.textContent = label;
            sbCode.textContent = code;
            sysBar.classList.toggle("is-fault", fault);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    stages.forEach(function (s) {
      stageObserver.observe(s);
    });
  }

  /* Overall scroll progress bar under the system readout */
  function updateProgress() {
    var doc = document.documentElement;
    var scrollTop = doc.scrollTop || document.body.scrollTop;
    var height = doc.scrollHeight - doc.clientHeight;
    var pct = height > 0 ? (scrollTop / height) * 100 : 0;
    if (sbProgress) sbProgress.style.width = pct + "%";
  }
  document.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ---------------------------------------------------------------------
     4. Stage 03 — the loop counter. Counts the repair attempts as the
        ring comes into view: it should feel mechanical, not decorative.
  --------------------------------------------------------------------- */
  var loopCount = document.getElementById("loopCount");
  var loopRing = document.querySelector(".loop-ring");
  if (loopCount && loopRing) {
    var counted = false;
    var loopObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !counted) {
            counted = true;
            var target = 3;
            var current = 0;
            if (reduceMotion) {
              loopCount.textContent = target;
              return;
            }
            var timer = setInterval(function () {
              current += 1;
              loopCount.textContent = current;
              if (current >= target) clearInterval(timer);
            }, 550);
          }
        });
      },
      { threshold: 0.6 }
    );
    loopObs.observe(loopRing);
  }

  /* ---------------------------------------------------------------------
     5. Stage 05 — the road. As the section scrolls through the viewport,
        fill the horizontal track and light up each waypoint in order.
  --------------------------------------------------------------------- */
  var roadSection = document.querySelector("[data-road]");
  var roadFill = document.getElementById("roadFill");
  var roadStops = document.querySelectorAll(".road-stop");
  var odoValue = document.getElementById("odoValue");

  function updateRoad() {
    if (!roadSection || !roadFill) return;
    var rect = roadSection.getBoundingClientRect();
    var vh = window.innerHeight;
    var total = rect.height - vh;
    var scrolled = -rect.top;
    var pct = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
    roadFill.style.width = pct * 100 + "%";

    var n = roadStops.length;
    roadStops.forEach(function (stop, i) {
      var threshold = n > 1 ? i / (n - 1) : 0;
      stop.classList.toggle("hit", pct >= threshold - 0.02);
    });

    if (odoValue) {
      var km = Math.round(pct * 200);
      odoValue.textContent = km.toString().padStart(3, "0") + " KM";
    }
  }
  document.addEventListener("scroll", updateRoad, { passive: true });
  window.addEventListener("resize", updateRoad);
  updateRoad();

  /* ---------------------------------------------------------------------
     6. Stage 02 — confidence meter fill is handled by .in-view via CSS
        (see .confidence.in-view .fill), already wired through the
        generic reveal observer above.
  --------------------------------------------------------------------- */
})();
