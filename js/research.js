/* =====================================================================
   RESEARCH — data-driven publications + awards
   One data model → rendered cards, single copyBib(), search & filter.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------------- Publications ---------------- */
  const PAPERS = [
    {
      type: "conference",
      venue: "IEEE Xplore · 2025",
      title: "Detection and Classification of Abnormal Human Actions for Video Surveillance on Edge Devices",
      keywords: "detection classification ieee vad var edge surveillance",
      links: { pdf: "pdfPapers/Paper_1.pdf", code: "https://github.com/JonathanFlores2503/TransLowNET_FinalVersion" },
    },
    {
      type: "journal",
      venue: "Applied Sciences (MDPI) · 2025",
      title: "TransLowNet: An Online Modular Framework for Anomaly Detection in Public Transportation",
      keywords: "translownet anomaly detection vad var mdpi modular",
      links: { pdf: "pdfPapers/Paper_2.pdf", url: "https://www.mdpi.com/2076-3417/15/17/9249", code: "https://github.com/JonathanFlores2503/TransLowNET_FinalVersion" },
      bib: `@article{flores2025online,
  title={An Online Modular Framework for Anomaly Detection and Multiclass Classification in Video Surveillance},
  author={Flores-Monroy, Jonathan and Benitez-Garcia, Gibran and Nakano-Miyatake, Mariko and Takahashi, Hiroki},
  journal={Applied Sciences}, volume={15}, number={17}, pages={9249}, year={2025}, publisher={MDPI}
}`,
    },
    {
      type: "conference",
      venue: "IEEE Xplore · 2024",
      title: "Ownership Authentication and Integrity Verification of Digital Images Using Generative Models and Custom Signature",
      keywords: "ownership authentication clip vqgan generative signature integrity",
      links: { pdf: "pdfPapers/Paper_3.pdf", code: "https://github.com/JonathanFlores2503/NoiseHashGAN" },
      bib: `@inproceedings{flores2024ownership,
  title={Ownership Authentication and Integrity Verification of Digital Images Using Generative Models and Custom Signature},
  author={Flores-Monroy, Jonathan and Cedillo-Hernandez, Manuel and Nakano-Miyatake, Mariko and Perez-Meana, Hector},
  booktitle={2024 47th International Conference on Telecommunications and Signal Processing (TSP)},
  pages={101--106}, year={2024}, organization={IEEE}
}`,
    },
    {
      type: "book",
      venue: "IOS Press · 2024",
      title: "Optimal Feature Extractor for Video Anomaly Detection in Public Transportation Applications",
      keywords: "feature extractor vad ios press book chapter",
      links: { pdf: "pdfPapers/Paper_4.pdf" },
      bib: `@incollection{flores2024optimal,
  title={Optimal Feature Extractor for Video Anomaly Detection in Public Transportation Applications},
  author={Flores-Monroy, Jonathan and Benitez-Garcia, Gibran and Nakano, Mariko and Takahashi, Hiroki},
  booktitle={New Trends in Intelligent Software Methodologies, Tools and Techniques},
  pages={249--262}, year={2024}, publisher={IOS Press}
}`,
    },
    {
      type: "journal",
      venue: "Información Tecnológica · 2023",
      title: "Detección de somnolencia y distracción en conductores y su implementación en dispositivos móviles",
      keywords: "somnolencia distraccion drowsiness distraction somn_ia mobile",
      links: { pdf: "pdfPapers/Paper_5.pdf" },
      bib: `@article{flores2023deteccion,
  title={Detecci\\'on de somnolencia y distracci\\'on en conductores y su implementaci\\'on en dispositivos m\\'oviles},
  author={Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Escamilla-Hern\\'andez, Enrique and P\\'erez-Meana, H\\'ector},
  journal={Informaci\\'on tecnol\\'ogica}, volume={34}, number={4}, pages={1--12}, year={2023}, publisher={SciELO Chile}
}`,
    },
    {
      type: "conference",
      venue: "IEEE Xplore · 2023",
      title: "Face Expression Recognition using Recurrent Neural Networks",
      keywords: "face expression recognition rnn emotions ieee",
      links: { url: "https://ieeexplore.ieee.org/abstract/document/10197740" },
      bib: `@inproceedings{sanchez2023face,
  title={Face Expression Recognition using Recurrent Neural Networks},
  author={Sanchez-Ruiz, Marcos and Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Escamilla-Hernandez, Enrique and Perez-Meana, Hector},
  booktitle={2023 46th International Conference on Telecommunications and Signal Processing (TSP)},
  pages={148--153}, year={2023}, organization={IEEE}
}`,
    },
    {
      type: "journal",
      venue: "Pädi · 2022",
      title: "Detección de estados de ánimo en ambientes no restringidos",
      keywords: "deteccion estados de animo emotions mood padi",
      links: { pdf: "pdfPapers/Paper_7.pdf" },
      bib: `@article{sanchez2022deteccion,
  title={Detecci\\'on de estados de \\'animo en ambientes no restringidos},
  author={S\\'anchez-Ruiz, Marcos and Flores-Monroy, Jonathan and Escamilla-Hern\\'andez, Enrique and Nakano-Miyatake, Mariko and Perez-Meana, Hector},
  journal={P\\"adi Bolet\\'in Cient\\'ifico de Ciencias B\\'asicas e Ingenier\\'ias del ICBI}, volume={10}, pages={110--115}, year={2022}
}`,
    },
    {
      type: "journal",
      venue: "Electronics (MDPI) · 2022",
      title: "SOMN_IA: Portable and universal device for real-time detection of driver’s drowsiness and distraction levels",
      keywords: "somn_ia drowsiness distraction somnolencia electronics device",
      links: { pdf: "pdfPapers/Paper_8.pdf", url: "https://www.mdpi.com/2079-9292/11/16/2558" },
      bib: `@article{flores2022somn_ia,
  title={SOMN\\_IA: Portable and universal device for real-time detection of driver's drowsiness and distraction levels},
  author={Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Escamilla-Hernandez, Enrique and Sanchez-Perez, Gabriel and Perez-Meana, Hector},
  journal={Electronics}, volume={11}, number={16}, pages={2558}, year={2022}, publisher={MDPI}
}`,
    },
    {
      type: "conference",
      venue: "Springer · 2022",
      title: "A CNN-based driver’s drowsiness and distraction detection system",
      keywords: "cnn drowsiness distraction somn_ia springer",
      links: { url: "https://link.springer.com/chapter/10.1007/978-3-031-07750-0_8" },
      bib: `@inproceedings{flores2022cnn,
  title={A CNN-based driver's drowsiness and distraction detection system},
  author={Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Perez-Meana, Hector and Escamilla-Hernandez, Enrique and Sanchez-Perez, Gabriel},
  booktitle={Mexican Conference on Pattern Recognition}, pages={83--93}, year={2022}, organization={Springer}
}`,
    },
    {
      type: "book",
      venue: "IOS Press · 2022",
      title: "Implementation of a CNN-Based Driver Drowsiness and Distraction Detector in Mobile Devices",
      keywords: "cnn drowsiness distraction mobile ios press implementation",
      links: { url: "https://ebooks.iospress.nl/doi/10.3233/FAIA220258" },
      bib: `@incollection{flores2022implementation,
  title={Implementation of a CNN-Based Driver Drowsiness and Distraction Detector in Mobile Devices},
  author={Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Perez-Meana, Hector and Escamilla-Hernandez, Enrique and Sanchez-Perez, Gabriel},
  booktitle={New Trends in Intelligent Software Methodologies, Tools and Techniques}, pages={272--285}, year={2022}, publisher={IOS Press}
}`,
    },
    {
      type: "conference",
      venue: "IEEE Xplore · 2021",
      title: "Visual-based real time driver drowsiness detection system using CNN",
      keywords: "visual real time drowsiness cnn cce ieee",
      links: { url: "https://ieeexplore.ieee.org/abstract/document/9633082" },
      bib: `@inproceedings{flores2021visual,
  title={Visual-based real time driver drowsiness detection system using CNN},
  author={Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Sanchez-Perez, Gabriel and Perez-Meana, Hector},
  booktitle={2021 18th International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE)},
  pages={1--5}, year={2021}, organization={IEEE}
}`,
    },
  ];

  /* ---------------- Awards (TODO: complete real titles) ---------------- */
  const AWARDS = [
    { year: "2024", title: { en: "Best of the Generation — Mexico–Japan Integration", es: "Mejor de la Generación — Integración México–Japón" },
      text: { en: "Recognition for academic and research performance during the research stay in Japan.", es: "Reconocimiento al desempeño académico y de investigación durante la estancia en Japón." } },
    { year: "2022", title: { en: "Honorable Mention — MSc Defense", es: "Mención Honorífica — Defensa de Maestría" },
      text: { en: "Awarded for academic excellence and scientific contribution in Computer Vision.", es: "Otorgada por excelencia académica y aporte científico en Visión por Computadora." } },
    { year: "2022", title: { en: "Patent — Portable AI-Based Driver Monitoring System (MX/a/2022/015919)", es: "Patente — Sistema portátil de monitoreo del conductor basado en IA (MX/a/2022/015919)" },
      text: { en: "Industrial property registration before IMPI (Mexico).", es: "Registro de propiedad industrial ante el IMPI (México)." } },
    // TODO: add / verify the remaining awards below before publishing.
    { year: "2027", title: { en: "TODO: award name", es: "TODO: nombre del premio" }, todo: true,
      text: { en: "TODO: short description and status.", es: "TODO: descripción breve y estatus." } },
  ];

  document.addEventListener("DOMContentLoaded", () => {
    renderPapers();
    renderAwards();
    initControls();
    document.addEventListener("langchange", () => { renderPapers(); renderAwards(); applyFilters(); });
  });

  function L() { return window.i18n ? window.i18n.lang : "en"; }
  function t(k) { return window.i18n ? window.i18n.t(k) : k; }

  /* ---------------- Render publications ---------------- */
  function renderPapers() {
    const box = document.getElementById("papersContainer");
    if (!box) return;

    box.innerHTML = PAPERS.map((p, i) => {
      const primary = p.links.url || p.links.pdf || "#";
      const actions = [];
      if (p.links.pdf) actions.push(`<a class="paper-link pdf" href="${p.links.pdf}" target="_blank" rel="noopener">${t("r.paper.pdf")}</a>`);
      else if (p.links.url) actions.push(`<a class="paper-link pdf" href="${p.links.url}" target="_blank" rel="noopener">${t("r.paper.pdf")}</a>`);
      if (p.links.code) actions.push(`<a class="paper-link code" href="${p.links.code}" target="_blank" rel="noopener">${t("r.paper.code")}</a>`);
      if (p.bib) actions.push(`<button type="button" class="paper-link bib" data-bib="${i}">${t("r.paper.bib")}</button>`);

      return `
        <article class="paper-card" data-type="${p.type}" data-keywords="${p.keywords}">
          <div class="paper-info">
            <span class="paper-venue">${p.venue}</span>
            <h3><a href="${primary}" target="_blank" rel="noopener">${p.title}</a></h3>
            <div class="paper-actions">${actions.join("")}</div>
          </div>
          <div class="paper-type"><span class="type-badge type-${p.type}">${t("r.filter." + p.type)}</span></div>
        </article>`;
    }).join("");

    box.querySelectorAll("[data-bib]").forEach((btn) => {
      btn.addEventListener("click", () => copyBib(PAPERS[+btn.getAttribute("data-bib")].bib));
    });
  }

  /* ---------------- Render awards ---------------- */
  function renderAwards() {
    const box = document.getElementById("awardsContainer");
    if (!box) return;
    const lang = L();
    box.innerHTML = AWARDS.map((a) => `
      <div class="award-item${a.todo ? " is-todo" : ""}">
        <div class="award-date">${a.year}</div>
        <div class="award-info">
          <h3>${a.title[lang] || a.title.en}</h3>
          <p>${a.text[lang] || a.text.en}</p>
        </div>
      </div>`).join("");
  }

  /* ---------------- Search + filter ---------------- */
  let activeFilter = "all";

  function initControls() {
    const search = document.getElementById("paperSearch");
    const tags = document.getElementById("filterTags");
    if (search) search.addEventListener("input", applyFilters);
    if (tags) {
      tags.addEventListener("click", (e) => {
        const btn = e.target.closest(".tag");
        if (!btn) return;
        tags.querySelectorAll(".tag").forEach((t) => t.classList.remove("is-active"));
        btn.classList.add("is-active");
        activeFilter = btn.getAttribute("data-filter");
        applyFilters();
      });
    }
  }

  function applyFilters() {
    const search = document.getElementById("paperSearch");
    const q = (search ? search.value : "").trim().toLowerCase();
    document.querySelectorAll(".paper-card").forEach((card) => {
      const typeOk = activeFilter === "all" || card.dataset.type === activeFilter;
      const haystack = (card.dataset.keywords + " " + card.textContent).toLowerCase();
      const textOk = !q || haystack.includes(q);
      card.style.display = typeOk && textOk ? "" : "none";
    });
  }

  /* ---------------- BibTeX copy (single function) ---------------- */
  function copyBib(bib) {
    if (!bib) return;
    const done = () => toast(L() === "es" ? "BibTeX copiado. ¡Gracias por citar!" : "BibTeX copied. Thanks for citing!");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(bib).then(done).catch(() => fallbackCopy(bib, done));
    } else {
      fallbackCopy(bib, done);
    }
  }

  function fallbackCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (_) {}
    document.body.removeChild(ta);
  }

  let toastTimer;
  function toast(msg) {
    let el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
  }
})();
