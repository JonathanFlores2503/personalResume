/* =====================================================================
   INDEX — page behavior
   Hero carousel · photo coverflow (Swiper) · projects carousel · logos
   All lookups are guarded so a missing node never breaks the page.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------------- Projects data (bilingual) ---------------- */
  const PROJECTS = [
    {
      img: "img_John/TransLowNEt.png",
      title: "TransLowNet",
      desc: {
        en: "AI framework to identify violent and abnormal events in public-transport surveillance — supporting early awareness, improved safety and informed decisions to help protect passengers.",
        es: "Framework de IA para identificar eventos violentos y anómalos en la videovigilancia del transporte público, apoyando la alerta temprana, la seguridad y la toma de decisiones para proteger a los pasajeros.",
      },
      links: [
        { text: { en: "Video", es: "Video" }, url: "https://www.youtube.com/watch?v=Lf5jlRM7C8A" },
        { text: { en: "Official site", es: "Sitio oficial" }, url: "https://www.ipn.mx/gacetapolitecnica/ver-detalle.html?g=195" },
        { text: { en: "Demo", es: "Demo" }, url: "https://github.com/JonathanFlores2503/TransLowNet_V2.git" },
      ],
    },
    {
      img: "img_John/Somn_IA.png",
      title: "SOMN-IA",
      desc: {
        en: "Vision-based system to detect driver drowsiness and distraction, supporting accident prevention and road safety in real driving conditions.",
        es: "Sistema de visión para detectar somnolencia y distracción del conductor, apoyando la prevención de accidentes y la seguridad vial en condiciones reales de manejo.",
      },
      links: [
        { text: { en: "Video", es: "Video" }, url: "https://www.youtube.com/watch?v=035Qq5egiS8" },
        { text: { en: "Paper", es: "Artículo" }, url: "https://www.mdpi.com/2079-9292/11/16/2558" },
        { text: { en: "Patent MX/a/2022/015919", es: "Patente MX/a/2022/015919" }, url: "https://vidoc.impi.gob.mx/busquedarapida" },
      ],
    },
    {
      img: "img_John/img_6.jpg",
      title: "PJ-System",
      desc: {
        en: "Embedded security system to prevent motorcycle theft and enhance rider safety by automatically disabling critical vehicle functions in unauthorized situations.",
        es: "Sistema de seguridad embebido para prevenir el robo de motocicletas y mejorar la seguridad del conductor, desactivando funciones críticas del vehículo ante situaciones no autorizadas.",
      },
      links: [
        { text: { en: "Video", es: "Video" }, url: "https://youtu.be/_nhffUBDrV0" },
        { text: { en: "Report", es: "Reportaje" }, url: "https://www.facebook.com/share/v/1D7zPTeu6G/" },
        { text: { en: "News", es: "Noticia" }, url: "https://www.excelsior.com.mx/nacional/disena-el-ipn-un-sistema-antirrobo-de-motocicletas/1394040" },
      ],
    },
  ];

  document.addEventListener("DOMContentLoaded", () => {
    initIntro();
    initHeroCarousel();
    initPhotoSwiper();
    initProjects();
    initLogos();
  });

  /* ---------------- Intro / welcome curtain ---------------- */
  function initIntro() {
    const intro = document.getElementById("intro");
    if (!intro) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: skip the intro, hero shows normally.
    if (reduce) { intro.remove(); return; }

    document.body.classList.add("intro-play");   // hides hero content underneath
    intro.classList.add("is-playing");

    // Lift the curtain and reveal the hero.
    window.setTimeout(() => {
      intro.classList.add("intro--out");
      document.body.classList.add("hero-in");
    }, 1250);

    // Remove the curtain once it has slid away.
    intro.addEventListener("transitionend", (e) => {
      if (e.propertyName === "transform" && intro.isConnected) intro.remove();
    });

    // Safety net: never leave the hero hidden if something stalls.
    window.setTimeout(() => {
      document.body.classList.add("hero-in");
      if (intro.isConnected) intro.remove();
    }, 3000);
  }

  /* ---------------- Hero carousel ---------------- */
  function initHeroCarousel() {
    const root = document.getElementById("heroCarousel");
    const dotsBox = document.getElementById("heroDots");
    if (!root) return;
    const slides = Array.from(root.querySelectorAll(".carousel-img"));
    if (slides.length < 2) return;

    let index = 0;
    let timer;

    const dots = slides.map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.addEventListener("click", () => { show(i); restart(); });
      dotsBox && dotsBox.appendChild(b);
      return b;
    });

    function show(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("is-active", k === index));
      dots.forEach((d, k) => d.classList.toggle("is-active", k === index));
    }
    function next() { show(index + 1); }
    function restart() { clearInterval(timer); timer = setInterval(next, 4500); }

    show(0);
    restart();
  }

  /* ---------------- Photo coverflow (Swiper) ---------------- */
  function initPhotoSwiper() {
    const el = document.querySelector(".photo-swiper");
    if (!el || typeof window.Swiper === "undefined") return;

    // Fisher–Yates shuffle before init
    const wrapper = document.getElementById("swiperRandom");
    if (wrapper) {
      const slides = Array.from(wrapper.children);
      for (let i = slides.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [slides[i], slides[j]] = [slides[j], slides[i]];
      }
      slides.forEach((s) => wrapper.appendChild(s));
    }

    new window.Swiper(".photo-swiper", {
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      grabCursor: true,
      coverflowEffect: { rotate: 0, stretch: 0, depth: 150, modifier: 2, slideShadows: false },
      autoplay: { delay: 2200, disableOnInteraction: false },
      speed: 1200,
    });
  }

  /* ---------------- Projects carousel ---------------- */
  function initProjects() {
    const stage = document.getElementById("projectStage");
    const prev = document.getElementById("projPrev");
    const next = document.getElementById("projNext");
    const dotsBox = document.getElementById("projectDots");
    if (!stage) return;

    let index = 0;

    function lang() { return window.i18n ? window.i18n.lang : "en"; }

    function render() {
      const p = PROJECTS[index];
      const L = lang();
      stage.innerHTML = `
        <article class="project-card">
          <img class="project-image" src="${p.img}" alt="${p.title}" />
          <div class="project-body">
            <h3>${p.title}</h3>
            <p>${p.desc[L] || p.desc.en}</p>
            <div class="project-links">
              ${p.links
                .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.text[L] || l.text.en}</a>`)
                .join("")}
            </div>
          </div>
        </article>`;
      dots.forEach((d, k) => d.classList.toggle("is-active", k === index));
    }

    const dots = PROJECTS.map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.addEventListener("click", () => { index = i; render(); });
      dotsBox && dotsBox.appendChild(b);
      return b;
    });

    prev && prev.addEventListener("click", () => { index = (index - 1 + PROJECTS.length) % PROJECTS.length; render(); });
    next && next.addEventListener("click", () => { index = (index + 1) % PROJECTS.length; render(); });
    document.addEventListener("langchange", render);

    render();
  }

  /* ---------------- Logos marquee ---------------- */
  function initLogos() {
    const track = document.getElementById("logosTrack");
    if (!track) return;

    const originals = Array.from(track.children);
    const viewport = track.parentElement.offsetWidth || window.innerWidth;

    // Duplicate until the track comfortably covers 2× the viewport.
    let guard = 0;
    while (track.scrollWidth < viewport * 2 && guard < 12) {
      originals.forEach((logo) => track.appendChild(logo.cloneNode(true)));
      guard++;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let x = 0;
    const speed = 0.5;
    const resetAt = track.scrollWidth / 2;

    function step() {
      x -= speed;
      if (Math.abs(x) >= resetAt) x = 0;
      track.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
})();
