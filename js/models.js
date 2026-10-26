/* =====================================================================
   MODELS — video demos of models, data-driven and easy to grow.
   To add a model, append an object to MODELS below.
   Keep summaries/docs GENERAL — no industrial-confidential detail.
   ===================================================================== */
(function () {
  "use strict";

  /* area: vad | multimodal | safety | behavior
     status: production | research | prototype | dev
     media resolution order: video → demoUrl (external) → poster only ("demo soon") */
  const MODELS = [
    {
      area: "vad",
      status: "production",
      title: "TransLowNet",
      video: "videos/video_1.mp4",
      poster: "img_John/TransLowNEt.png",
      summary: {
        en: "Efficient, online modular framework for anomaly detection and anomalous human-action recognition in public-transport surveillance — designed to work without large labeled datasets.",
        es: "Marco modular en línea y eficiente para detección de anomalías y reconocimiento de acciones humanas anómalas en videovigilancia del transporte público — diseñado para operar sin grandes conjuntos de datos etiquetados.",
      },
      doc: {
        en: "General overview: a modular pipeline (feature extraction → temporal modeling → classification) built for real-time video and low-light conditions, dockerized and deployed on AWS EC2. The methodology was adopted as the basis of a public-safety detection system (C5). Confidential model and deployment details are omitted.",
        es: "Resumen general: pipeline modular (extracción de características → modelado temporal → clasificación) pensado para video en tiempo real y baja iluminación, dockerizado y desplegado en AWS EC2. La metodología se adoptó como base de un sistema de detección de seguridad pública (C5). Se omiten detalles confidenciales de modelo y despliegue.",
      },
      tags: ["X3D", "I3D", "Transformer", "PyTorch", "Docker", "AWS EC2"],
      metrics: [
        { label: { en: "False positives (night)", es: "Falsos positivos (noche)" }, value: "−15%" },
        { label: { en: "Inference", es: "Inferencia" }, value: { en: "Real-time", es: "Tiempo real" } },
        { label: { en: "Deployment", es: "Despliegue" }, value: "C5" },
      ],
      links: [
        { label: { en: "Paper (MDPI)", es: "Artículo (MDPI)" }, url: "https://www.mdpi.com/2076-3417/15/17/9249" },
        { label: { en: "Talk", es: "Charla" }, url: "https://2026.talent-land.mx/eventos/translownet-ia-embebida-para-deteccion-de-violencia-en-transporte-publico-jonathan-mauricio-flores-monroy-instituto-politecnico-nacional/" },
        { label: { en: "Repo", es: "Repo" }, url: "https://github.com/JonathanFlores2503/TransLowNet_V2.git" },
      ],
    },
    {
      area: "safety",
      status: "production",
      title: "SOMN-IA",
      demoUrl: "https://www.youtube.com/watch?v=035Qq5egiS8",
      poster: "img_John/Somn_IA.png",
      summary: {
        en: "Portable vision system that detects driver drowsiness and distraction in real time, running on mobile and edge devices to support accident prevention.",
        es: "Sistema de visión portátil que detecta somnolencia y distracción del conductor en tiempo real, ejecutándose en dispositivos móviles y de borde para apoyar la prevención de accidentes.",
      },
      doc: {
        en: "General overview: a CNN-based vision system optimized for real-time inference under compute constraints, with a mobile implementation. Registered as a patent (MX/a/2022/015919).",
        es: "Resumen general: sistema de visión basado en CNN optimizado para inferencia en tiempo real bajo restricciones de cómputo, con implementación móvil. Registrado como patente (MX/a/2022/015919).",
      },
      tags: ["CNN", "MobileNet", "Edge", "Mobile"],
      metrics: [
        { label: { en: "Patent", es: "Patente" }, value: "MX/a/2022/015919" },
        { label: { en: "Inference", es: "Inferencia" }, value: { en: "Real-time", es: "Tiempo real" } },
      ],
      links: [
        { label: { en: "Paper (Electronics)", es: "Artículo (Electronics)" }, url: "https://www.mdpi.com/2079-9292/11/16/2558" },
        { label: { en: "Patent", es: "Patente" }, url: "https://vidoc.impi.gob.mx/busquedarapida" },
      ],
    },
    {
      area: "multimodal",
      status: "dev",
      title: "Vision–Audio Sentiment",
      // TODO: add demo video + shareable metrics when available.
      poster: "figuresPapers/fig3.png",
      summary: {
        en: "Multimodal inference that combines computer vision and audio with LLMs to infer sentiment in mass-media content.",
        es: "Inferencia multimodal que combina visión por computadora y audio con LLMs para inferir el sentimiento en contenido de medios masivos.",
      },
      doc: {
        en: "General overview: visual understanding + speech transcription (Faster Whisper) fused with LLM reasoning for sentiment inference. Currently in active development; specifics are confidential.",
        es: "Resumen general: comprensión visual + transcripción de voz (Faster Whisper) fusionadas con razonamiento por LLM para inferencia de sentimiento. Actualmente en desarrollo activo; los detalles son confidenciales.",
      },
      tags: ["CLIP", "ImageBind", "Faster Whisper", "LLaMA 3", "Qwen", "Ollama"],
      metrics: [],
      links: [],
    },
    {
      area: "behavior",
      status: "prototype",
      title: "Behavior-based Anomaly Detection",
      // TODO: add demo video + links when shareable.
      poster: "figuresPapers/fig4.png",
      summary: {
        en: "Behavior-based anomaly detection for closed environments such as retail and controlled-access spaces.",
        es: "Detección de anomalías basada en comportamiento para entornos cerrados como retail y espacios de acceso controlado.",
      },
      doc: {
        en: "General overview: models scene behavior to flag anomalous patterns in closed environments. In active development; confidential details are omitted.",
        es: "Resumen general: modela el comportamiento de la escena para señalar patrones anómalos en entornos cerrados. En desarrollo activo; se omiten detalles confidenciales.",
      },
      tags: ["Computer Vision", "Behavior analysis", "Anomaly detection"],
      metrics: [],
      links: [],
    },
    {
      area: "security",
      status: "research",
      title: "NoiseHashGAN",
      // TODO: add a short demo video when shareable.
      poster: "figuresPapers/fig2.png",
      summary: {
        en: "Ownership authentication and integrity verification for digital images, using generative models and a custom signature to detect tampering.",
        es: "Autenticación de propiedad y verificación de integridad de imágenes digitales, usando modelos generativos y una firma personalizada para detectar manipulaciones.",
      },
      doc: {
        en: "General overview: a generative approach (VQGAN-based) that embeds and verifies a custom signature so image ownership can be proven and tampering flagged. Published at IEEE TSP 2024; a reference implementation is public.",
        es: "Resumen general: enfoque generativo (basado en VQGAN) que incrusta y verifica una firma personalizada para comprobar la propiedad de la imagen y detectar manipulaciones. Publicado en IEEE TSP 2024; hay una implementación de referencia pública.",
      },
      tags: ["VQGAN", "Generative", "CLIP", "PyTorch"],
      metrics: [
        { label: { en: "Venue", es: "Publicación" }, value: "IEEE TSP 2024" },
      ],
      links: [
        { label: { en: "Paper (PDF)", es: "Artículo (PDF)" }, url: "pdfPapers/Paper_3.pdf" },
        { label: { en: "Repo", es: "Repo" }, url: "https://github.com/JonathanFlores2503/NoiseHashGAN" },
      ],
    },
  ];

  let activeFilter = "all";

  document.addEventListener("DOMContentLoaded", () => {
    render();
    initFilters();
    document.addEventListener("langchange", render);
  });

  function L() { return window.i18n ? window.i18n.lang : "en"; }
  function t(k) { return window.i18n ? window.i18n.t(k) : k; }
  function loc(v) { return v && typeof v === "object" ? (v[L()] || v.en) : v; }

  function render() {
    const grid = document.getElementById("modelsGrid");
    if (!grid) return;

    grid.innerHTML = MODELS.map((m) => {
      const hidden = activeFilter !== "all" && m.area !== activeFilter ? " hidden" : "";

      let media;
      if (m.video) {
        media = `
          <video class="model-video" muted loop playsinline preload="metadata" poster="${m.poster}">
            <source src="${m.video}" type="video/mp4" />
          </video>
          <button class="model-play" type="button" aria-label="Play demo"><i data-lucide="play"></i></button>`;
      } else if (m.demoUrl) {
        media = `
          <img src="${m.poster}" alt="${m.title}" loading="lazy" />
          <a class="model-play as-link" href="${m.demoUrl}" target="_blank" rel="noopener">
            <i data-lucide="play"></i><span>${t("m.watch")}</span>
          </a>`;
      } else {
        media = `
          <img src="${m.poster}" alt="${m.title}" loading="lazy" />
          <span class="model-soon"><i data-lucide="clapperboard"></i>${t("m.demo.soon")}</span>`;
      }

      const tags = m.tags.map((x) => `<li>${x}</li>`).join("");

      const metrics = m.metrics && m.metrics.length
        ? `<div class="model-metrics">
             <span class="model-block-label">${t("m.metrics")}</span>
             <div class="metric-row">${m.metrics
               .map((mt) => `<div class="metric"><span class="metric-val">${loc(mt.value)}</span><span class="metric-lab">${loc(mt.label)}</span></div>`)
               .join("")}</div>
           </div>`
        : "";

      const links = m.links && m.links.length
        ? `<div class="model-links">${m.links
            .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${loc(l.label)}</a>`)
            .join("")}</div>`
        : "";

      return `
        <article class="model-card" data-area="${m.area}"${hidden}>
          <div class="model-media">
            ${media}
            <span class="model-status status-${m.status}">${t("m.status." + m.status)}</span>
          </div>
          <div class="model-body">
            <h3>${m.title}</h3>
            <p class="model-summary">${loc(m.summary)}</p>
            <ul class="model-tags"><span class="model-block-label">${t("m.stack")}</span>${tags}</ul>
            ${metrics}
            <details class="model-doc">
              <summary><i data-lucide="file-lock-2"></i>${t("m.doc")}</summary>
              <p>${loc(m.doc)}</p>
            </details>
            ${links}
          </div>
        </article>`;
    }).join("");

    if (window.lucide) window.lucide.createIcons();
    wireVideos();
  }

  /* Play on hover / tap; pause on leave — keeps many videos light. */
  function wireVideos() {
    document.querySelectorAll(".model-card").forEach((card) => {
      const video = card.querySelector(".model-video");
      const btn = card.querySelector(".model-play");
      if (!video) return;

      const play = () => { video.play().then(() => card.classList.add("is-playing")).catch(() => {}); };
      const pause = () => { video.pause(); card.classList.remove("is-playing"); };

      card.addEventListener("mouseenter", play);
      card.addEventListener("mouseleave", pause);
      if (btn) btn.addEventListener("click", (e) => {
        e.preventDefault();
        video.paused ? play() : pause();
      });
    });
  }

  function initFilters() {
    const bar = document.getElementById("modelFilters");
    if (!bar) return;
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.getAttribute("data-filter");
      document.querySelectorAll(".model-card").forEach((card) => {
        card.hidden = !(activeFilter === "all" || card.dataset.area === activeFilter);
      });
    });
  }
})();
