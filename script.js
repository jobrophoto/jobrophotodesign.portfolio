/* ==========================================================================
   JOBRO PHOTO DESIGN — shared scripts
   Everything is optional: each feature only runs if its markup is on the page.
   Plain vanilla JavaScript, no libraries.
   ========================================================================== */
(function () {
  "use strict";

  /* ---- 1. Mobile navigation (hamburger) -------------------------------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links  = document.getElementById("navLinks");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  /* ---- 2. Typewriter (home hero) --------------------------------------- */
  /* Markup: <span class="type-line" data-words="A|B|C"></span>            */
  function initTypewriter() {
    var el = document.querySelector("[data-words]");
    if (!el) return;
    var words = el.getAttribute("data-words").split("|");
    var w = 0, i = 0, erasing = false;

    function tick() {
      var full = words[w];
      if (!erasing) {
        i++; el.textContent = full.slice(0, i);
        if (i === full.length) { erasing = true; return setTimeout(tick, 1400); }
        setTimeout(tick, 95);
      } else {
        i--; el.textContent = full.slice(0, i);
        if (i === 0) { erasing = false; w = (w + 1) % words.length; return setTimeout(tick, 350); }
        setTimeout(tick, 45);
      }
    }
    setTimeout(tick, 600);
  }

  /* ---- 3. Hero carousel (home) ----------------------------------------- */
  function initCarousel() {
    var root = document.querySelector("[data-carousel]");
    if (!root) return;

    var track = root.querySelector(".carousel-track");
    var slides = Array.prototype.slice.call(root.querySelectorAll(".carousel-slide"));
    var segs = Array.prototype.slice.call(root.querySelectorAll(".carousel-prog .seg"));
    var n = slides.length;
    var i = 0, timer = null, paused = false;
    var interval = (parseFloat(root.getAttribute("data-interval")) || 4.5) * 1000;

    function render() {
      track.style.transform = "translateX(" + (-i * 100) + "%)";
      segs.forEach(function (s, k) { s.classList.toggle("on", k === i); });
    }
    function go(k) { i = (k + n) % n; render(); restart(); }
    function next() { go(i + 1); }
    function prev() { go(i - 1); }
    function restart() {
      clearInterval(timer);
      if (!paused) timer = setInterval(next, interval);
    }

    root.querySelector(".carousel-ctrl .next").addEventListener("click", next);
    root.querySelector(".carousel-ctrl .prev").addEventListener("click", prev);
    segs.forEach(function (s, k) { s.addEventListener("click", function () { go(k); }); });

    var stage = root.querySelector(".carousel-stage");
    stage.addEventListener("mouseenter", function () { paused = true; clearInterval(timer); });
    stage.addEventListener("mouseleave", function () { paused = false; restart(); });

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    });

    render();
    restart();
  }

  /* ---- 4. Work: filter tabs + lightbox --------------------------------- */
  function initWork() {
    var grid = document.querySelector(".wgrid");
    if (!grid) return;

    var tabs  = Array.prototype.slice.call(document.querySelectorAll(".ftab"));
    var cells = Array.prototype.slice.call(grid.querySelectorAll(".cell"));

    /* -- filtering -- */
    function applyFilter(cat) {
      cells.forEach(function (cell) {
        var match = (cat === "all" || cell.getAttribute("data-cat") === cat);
        cell.classList.toggle("hidden", !match);
      });
      rebuildLightboxList();
    }
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("on"); });
        tab.classList.add("on");
        applyFilter(tab.getAttribute("data-filter"));
      });
    });

    /* -- lightbox -- */
    var lb = document.querySelector(".lb");
    if (!lb) return;
    var lbImg   = lb.querySelector(".lbimg");
    var lbNo    = lb.querySelector("[data-lb-no]");
    var lbTitle = lb.querySelector("[data-lb-title]");
    var lbCat   = lb.querySelector("[data-lb-cat]");
    var visible = [];   // currently-visible photo tiles, in order
    var cur = 0;

    function rebuildLightboxList() {
      visible = cells.filter(function (c) {
        return !c.classList.contains("hidden") && c.querySelector(".tile[data-img]");
      }).map(function (c) { return c.querySelector(".tile[data-img]"); });
    }

    function show(k) {
      if (!visible.length) return;
      cur = (k + visible.length) % visible.length;
      var t = visible[cur];
      lbImg.style.backgroundImage = "url(" + t.getAttribute("data-img") + ")";
      if (lbNo)    lbNo.textContent = "FIG." + String(cur + 1).padStart(2, "0");
      if (lbTitle) lbTitle.textContent = t.getAttribute("data-title") || "";
      if (lbCat)   lbCat.textContent = t.getAttribute("data-cat-label") || "";
    }
    function open(tile) {
      rebuildLightboxList();
      var k = visible.indexOf(tile);
      if (k < 0) return;
      show(k); lb.classList.add("open");
    }
    function close() { lb.classList.remove("open"); }

    grid.addEventListener("click", function (e) {
      var tile = e.target.closest(".tile[data-img]");
      if (tile) open(tile);
    });
    lb.querySelector(".lbx").addEventListener("click", close);
    lb.querySelector(".lbnav.next").addEventListener("click", function () { show(cur + 1); });
    lb.querySelector(".lbnav.prev").addEventListener("click", function () { show(cur - 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });

    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(cur + 1);
      else if (e.key === "ArrowLeft") show(cur - 1);
    });

    rebuildLightboxList();
  }

  /* ---- boot ------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initTypewriter();
    initCarousel();
    initWork();
  });
})();
