/* =====================================================================
   GALLERY — data-driven, filterable masonry
   Uses real images from /img_John. Captions are editable placeholders —
   replace the { en, es } text with the real event, place and date.
   ===================================================================== */
(function () {
  "use strict";

  // TODO: adjust category and replace captions with real event details.
  const ITEMS = [
    { img: "img_John/img_1.jpg",  cat: "conferences", title: { en: "International conference", es: "Congreso internacional" }, text: { en: "TODO: event · place · year", es: "TODO: evento · lugar · año" } },
    { img: "img_John/img_7.jpg",  cat: "conferences", title: { en: "Technical presentation", es: "Presentación técnica" }, text: { en: "TODO: talk title · venue", es: "TODO: título de la charla · sede" } },
    { img: "img_John/img_12.jpg", cat: "conferences", title: { en: "Research stay — Japan", es: "Estancia de investigación — Japón" }, text: { en: "UEC Tokyo, 2023–2024", es: "UEC Tokio, 2023–2024" } },
    { img: "img_John/img_4.jpg",  cat: "awards", title: { en: "Recognition", es: "Reconocimiento" }, text: { en: "TODO: award name · year", es: "TODO: nombre del premio · año" } },
    { img: "img_John/img_9.jpg",  cat: "awards", title: { en: "Patent registration", es: "Registro de patente" }, text: { en: "MX/a/2022/015919 · IMPI", es: "MX/a/2022/015919 · IMPI" } },
    { img: "img_John/img_16.jpg", cat: "awards", title: { en: "Academic honor", es: "Distinción académica" }, text: { en: "TODO: institution · year", es: "TODO: institución · año" } },
    { img: "img_John/img_18.jpg", cat: "field", title: { en: "Dataset collection", es: "Recolección de datos" }, text: { en: "Public transportation, Mexico City", es: "Transporte público, Ciudad de México" } },
    { img: "img_John/img_21.jpg", cat: "field", title: { en: "Field testing", es: "Pruebas de campo" }, text: { en: "Real-time model evaluation", es: "Evaluación de modelos en tiempo real" } },
    { img: "img_John/img_24.jpg", cat: "field", title: { en: "On-site deployment", es: "Despliegue en sitio" }, text: { en: "TODO: location · context", es: "TODO: lugar · contexto" } },
  ];

  let activeFilter = "all";

  document.addEventListener("DOMContentLoaded", () => {
    render();
    initFilters();
    document.addEventListener("langchange", render);
  });

  function L() { return window.i18n ? window.i18n.lang : "en"; }

  function render() {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;
    const lang = L();
    grid.innerHTML = ITEMS.map((it) => `
      <figure class="gallery-item" data-cat="${it.cat}"${activeFilter !== "all" && it.cat !== activeFilter ? ' hidden' : ''}>
        <img src="${it.img}" alt="${it.title[lang] || it.title.en}" loading="lazy" />
        <figcaption class="gallery-overlay">
          <h3>${it.title[lang] || it.title.en}</h3>
          <p>${it.text[lang] || it.text.en}</p>
        </figcaption>
      </figure>`).join("");
  }

  function initFilters() {
    const bar = document.getElementById("galleryFilters");
    if (!bar) return;
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.getAttribute("data-filter");
      applyFilter();
    });
  }

  function applyFilter() {
    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.hidden = !(activeFilter === "all" || item.dataset.cat === activeFilter);
    });
  }
})();
