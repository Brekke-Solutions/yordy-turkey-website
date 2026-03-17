/* =============================================================================
   Yordy Turkey Farm – Main JavaScript
   ============================================================================= */

(function () {
  "use strict";

  /* ---- Footer: dynamic year ---- */
  var yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- Mobile navigation toggle ---- */
  var navToggle = document.querySelector(".nav__toggle");
  var navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    /* Close nav when a link is clicked */
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Smooth-scroll offset for sticky header ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href").slice(1);
      var target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      var headerHeight = document.querySelector(".site-header")
        ? document.querySelector(".site-header").offsetHeight
        : 0;
      var targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    });
  });
})();
