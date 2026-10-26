/* =====================================================================
   MAIN — Shared behavior across all pages
   Mobile nav drawer · language toggle · active link · scroll reveal
   ===================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    initMobileNav();
    initLangToggle();
    markActiveLink();
    initReveal();
    if (window.lucide) window.lucide.createIcons();
  });

  /* ---- Mobile navigation drawer ---- */
  function initMobileNav() {
    const burger = document.getElementById("navBurger");
    const links = document.getElementById("navLinks");
    if (!burger || !links) return;

    const setOpen = (open) => {
      links.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    };

    burger.addEventListener("click", () =>
      setOpen(!links.classList.contains("open"))
    );
    links.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) setOpen(false);
    });
  }

  /* ---- Language toggle ---- */
  function initLangToggle() {
    const btn = document.getElementById("langToggle");
    if (!btn || !window.i18n) return;

    const render = () => {
      const label = btn.querySelector(".lang-current");
      if (label) label.textContent = window.i18n.other.toUpperCase();
      btn.setAttribute(
        "aria-label",
        window.i18n.other === "es" ? "Cambiar a español" : "Switch to English"
      );
    };

    render();
    btn.addEventListener("click", () => window.i18n.toggle());
    document.addEventListener("langchange", render);
  }

  /* ---- Highlight current page / section in nav ---- */
  function markActiveLink() {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((a) => {
      const href = a.getAttribute("href") || "";
      const file = href.split("#")[0];
      if (file === path && !href.includes("#")) {
        a.setAttribute("aria-current", "page");
      }
    });
  }

  /* ---- Scroll reveal — "scene change", re-triggers on scroll up & down ---- */
  function initReveal() {
    const items = Array.from(document.querySelectorAll(".reveal"));
    if (!items.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Assign a direction per section (alternating = scene change) and a
    // stagger index so children of the same block cascade in.
    const sections = Array.from(document.querySelectorAll("section"));
    items.forEach((el) => {
      if (!el.classList.contains("reveal--from-left") &&
          !el.classList.contains("reveal--from-right") &&
          !el.classList.contains("reveal--zoom")) {
        const sec = el.closest("section");
        const idx = sec ? sections.indexOf(sec) : 0;
        el.classList.add(idx % 2 === 0 ? "reveal--from-left" : "reveal--from-right");
      }
      const sibs = Array.from(el.parentElement.children).filter((c) =>
        c.classList.contains("reveal")
      );
      el.style.setProperty("--reveal-i", Math.max(0, sibs.indexOf(el)));
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => io.observe(el));
  }
})();
