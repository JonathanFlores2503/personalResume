/* =====================================================================
   i18n — Bilingual EN / ES engine
   - Static strings: mark elements with [data-i18n="key"] (textContent)
     or [data-i18n-html="key"] (innerHTML) or [data-i18n-attr="attr:key"].
   - Dynamic content (JS-rendered lists) should read window.i18n.lang and
     listen for the "langchange" event to re-render.
   ===================================================================== */
(function () {
  "use strict";

  const DICT = {
    en: {
      /* nav / footer */
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.research": "Research",
      "nav.publications": "Publications",
      "nav.gallery": "Gallery",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.home": "Home",
      "nav.databases": "Databases",
      "nav.menu": "Open menu",
      "footer.role": "Computer Vision Research Lead · AI Engineer",
      "footer.built": "Built with care · Mexico City",

      /* hero */
      "hero.role": "Computer Vision Research Lead & AI Engineer",
      "hero.tagline": "Teaching machines to protect people",
      "hero.subtitle": "PhD candidate in Artificial Intelligence and author of 12+ international publications on video anomaly detection — translating research into production systems.",
      "hero.quote": "“Technology gains meaning when grounded in human needs.”",
      "hero.cta.research": "View research",
      "hero.cta.contact": "Get in touch",

      /* about */
      "about.eyebrow": "About me",
      "about.title": "From scientific research to computer-vision systems running in production.",
      "about.lead": "AI researcher and engineer leading computer-vision projects — combining scientific rigor with the ability to deploy real systems on local and cloud infrastructure (AWS, NVIDIA Enterprise).",
      "about.card1.title": "Research Lead",
      "about.card1.desc": "Lead a multidisciplinary computer-vision team, directing end-to-end R&D from architecture to production deployment.",
      "about.card2.title": "AI Researcher",
      "about.card2.desc": "PhD research in video anomaly detection and anomalous human-action recognition for public safety.",
      "about.card3.title": "AI Engineer",
      "about.card3.desc": "Dockerized pipelines, cloud (AWS EC2) and edge deployment of efficient, real-time models.",
      "about.card4.title": "Multimodal & LLMs",
      "about.card4.desc": "Vision–audio multimodal inference and LLMs for sentiment analysis and behavior understanding.",
      "about.link.projects": "Projects",
      "about.link.papers": "Papers",
      "about.link.patents": "Patents",

      /* experience */
      "exp.eyebrow": "Career",
      "exp.title": "Experience",
      "exp.cdl.company": "Celestial Dynamics Lab",
      "exp.cdl.role": "Computer Vision Projects Lead",
      "exp.cdl.period": "Feb 2026 – Present",
      "exp.cdl.p1": "Lead a multidisciplinary computer-vision team (3 direct, ~7 indirect engineers) across data curation, model development and production deployment.",
      "exp.cdl.p2": "Direct computer-vision models for anomalous-event detection in public safety (C5), validated in real environments on NVIDIA Enterprise infrastructure.",
      "exp.cdl.p3": "Own the end-to-end R&D process — architecture, data curation, training and deployment — now the basis of a scientific paper in preparation.",
      "exp.cdl.p4": "Build multimodal solutions integrating computer vision and audio for sentiment inference in mass media, using multimodal models and LLMs.",
      "exp.cdl.p5": "Design behavior-based anomaly detection for closed environments (retail, controlled-access spaces), in active development.",
      "exp.ipn.company": "Instituto Politécnico Nacional (IPN)",
      "exp.ipn.role": "AI Researcher",
      "exp.ipn.period": "Feb 2023 – Present",
      "exp.ipn.p1": "Research in video anomaly detection and anomalous human-action recognition for video surveillance and public safety.",
      "exp.ipn.p2": "Developed TransLowNet, an efficient modular framework that works without large datasets — adopted as the basis of the C5 detection system.",
      "exp.ipn.p3": "Implemented 2D/3D CNN and Transformer architectures for real-time video analysis, with pipeline dockerization and AWS EC2 deployment.",
      "exp.ipn.p4": "Author of 12+ international conference and journal publications on Computer Vision and Artificial Intelligence.",
      "exp.solera.company": "Solera",
      "exp.solera.role": "Software Development Engineer in Test I",
      "exp.solera.period": "Aug 2022 – Jan 2023",
      "exp.solera.p1": "Built test automation in Python (Selenium) for web and mobile flows, including REST API verification and integration testing.",
      "exp.solera.p2": "Integrated automated test suites into CI/CD pipelines (Jenkins) for automatic execution within deployment flows.",
      "exp.solera.p3": "Collaborated in Agile/Scrum teams using Git and Jira for version control, traceability and issue management.",

      /* skills */
      "skills.eyebrow": "Toolbox",
      "skills.title": "Skills & stack",
      "skills.lead": "Tools and models I use across research, engineering and deployment.",
      "skills.cat.systems": "Programming & Systems",
      "skills.cat.cv": "Computer Vision",
      "skills.cat.ml": "ML, NLP & Multimodal",
      "skills.cat.deploy": "Training & Deployment",
      "skills.cat.languages": "Languages",
      "skills.lang.es": "Spanish (Native)",
      "skills.lang.en": "English (Technical / Conversational)",

      /* education */
      "edu.eyebrow": "Academic path",
      "edu.title": "Education",
      "edu.phd.title": "PhD in Communications & Electronics Engineering (Artificial Intelligence)",
      "edu.phd.place": "Instituto Politécnico Nacional (IPN) · 2023 – 2027",
      "edu.stay.title": "Visiting Research Student — Computer Vision & Intelligent Systems",
      "edu.stay.place": "The University of Electro-Communications (UEC) · Tokyo, Japan · 2023 – 2024",
      "edu.msc.title": "MSc in Microelectronics Engineering",
      "edu.msc.place": "Instituto Politécnico Nacional (IPN) · 2020 – 2022",
      "edu.bsc.title": "BSc in Automotive Systems Engineering",
      "edu.bsc.place": "UPIITA – IPN · 2015 – 2019",

      /* projects */
      "projects.eyebrow": "Selected work",
      "projects.title": "Projects",
      "projects.lead": "Applied AI systems built to protect people and solve real problems.",
      "projects.cta": "Explore models & demos",

      /* papers (index preview) */
      "papers.eyebrow": "Research output",
      "papers.title": "Publications & recognition",
      "papers.lead": "Author of 12+ peer-reviewed works in Computer Vision, anomaly detection and intelligent systems.",
      "papers.cta": "See all publications",

      /* contact */
      "contact.eyebrow": "Contact",
      "contact.title": "Let’s build together",
      "contact.text": "Science grows stronger when it’s shared. If you’re interested in collaboration, research projects or exchanging ideas, let’s get in touch.",
      "contact.shortcv": "Short CV",
      "contact.fullcv": "Full CV",

      /* ---- research page ---- */
      "r.hero.title": "Video Anomaly Detection",
      "r.hero.sub": "From data-efficient models to real-time systems deployed in public-safety production.",
      "r.objective": "My research focuses on efficient deep-learning architectures that model complex behavior in dynamic environments — balancing accuracy with computational efficiency and reducing the dependency on large labeled datasets.",
      "r.qn.results": "Latest results",
      "r.qn.results.sub": "State-of-the-art metrics",
      "r.qn.pubs": "Publications",
      "r.qn.pubs.sub": "Full archive",
      "r.qn.db": "Databases",
      "r.qn.db.sub": "Custom datasets",
      "r.qn.awards": "Achievements",
      "r.qn.awards.sub": "Patents & awards",
      "r.results.title": "Deep dive: TransLowNet",
      "r.results.r1.title": "Efficiency in low light",
      "r.results.r1.text": "Using X3D as backbone, we reduced false positives in night-time scenarios by 15% versus conventional models.",
      "r.results.r2.title": "Graph-attention architecture",
      "r.results.r2.text": "Graph Attention Networks capture relationships between multiple actors in the scene, improving violence-event detection.",
      "r.results.cta": "Read the full paper (MDPI)",
      "r.pubs.title": "Scientific publications",
      "r.pubs.sub": "Peer-reviewed work in Computer Vision, anomaly detection and intelligent systems.",
      "r.search.placeholder": "Search by topic (e.g. GNN, X3D, drowsiness)…",
      "r.filter.all": "All",
      "r.filter.journal": "Journals",
      "r.filter.conference": "Conferences",
      "r.filter.book": "Books & chapters",
      "r.db.title": "Custom dataset development",
      "r.db.text": "Curation of 500+ hours of video for anomaly detection in Mexican public transportation.",
      "r.awards.title": "Awards & honors",
      "r.paper.pdf": "PDF",
      "r.paper.code": "Code",
      "r.paper.bib": "BibTeX",

      /* ---- gallery page ---- */
      "g.back": "Back to home",
      "g.title": "Trajectory & evidence",
      "g.lead": "Visual records of international conferences, recognitions and field work.",
      "g.filter.all": "All",
      "g.filter.conferences": "Conferences",
      "g.filter.awards": "Awards",
      "g.filter.field": "Field work",

      /* ---- models page ---- */
      "nav.models": "Models",
      "m.eyebrow": "Models & demos",
      "m.title": "Models that prove the work",
      "m.lead": "Video demos of models I’ve built — with a general overview of what each one does. Summaries are intentionally high-level and respect industrial confidentiality.",
      "m.filter.all": "All",
      "m.filter.vad": "Anomaly detection",
      "m.filter.multimodal": "Multimodal & LLMs",
      "m.filter.safety": "Driver safety",
      "m.filter.behavior": "Behavior analysis",
      "m.filter.security": "Image security",
      "m.status.production": "In production",
      "m.status.research": "Research",
      "m.status.prototype": "Prototype",
      "m.status.dev": "In development",
      "m.doc": "Documentation — overview",
      "m.stack": "Stack",
      "m.metrics": "Highlights",
      "m.demo.soon": "Demo coming soon",
      "m.watch": "Watch demo",
      "m.note": "What’s shown here is a general summary of each model. Technical details under industrial confidentiality are omitted.",
      "m.growing": "This section keeps growing — new models are added over time.",
    },

    es: {
      "nav.about": "Sobre mí",
      "nav.experience": "Experiencia",
      "nav.skills": "Habilidades",
      "nav.research": "Investigación",
      "nav.publications": "Publicaciones",
      "nav.gallery": "Galería",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",
      "nav.home": "Inicio",
      "nav.databases": "Bases de datos",
      "nav.menu": "Abrir menú",
      "footer.role": "Líder de Investigación en Visión por Computadora · Ingeniero de IA",
      "footer.built": "Hecho con dedicación · Ciudad de México",

      "hero.role": "Líder de Investigación en Visión por Computadora e Ingeniero de IA",
      "hero.tagline": "Enseñando a las máquinas a proteger personas",
      "hero.subtitle": "Candidato a Doctor en Inteligencia Artificial y autor de más de 12 publicaciones internacionales sobre detección de anomalías en video — llevando la investigación a sistemas en producción.",
      "hero.quote": "“La tecnología cobra sentido cuando responde a necesidades humanas.”",
      "hero.cta.research": "Ver investigación",
      "hero.cta.contact": "Contactar",

      "about.eyebrow": "Sobre mí",
      "about.title": "De la investigación científica a sistemas de visión por computadora en producción.",
      "about.lead": "Investigador e ingeniero en IA que lidera proyectos de visión por computadora, combinando rigor científico con la capacidad de desplegar sistemas reales en infraestructura local y en la nube (AWS, NVIDIA Enterprise).",
      "about.card1.title": "Líder de Investigación",
      "about.card1.desc": "Lidero un equipo multidisciplinario de visión por computadora, dirigiendo el I+D de extremo a extremo: de la arquitectura al despliegue en producción.",
      "about.card2.title": "Investigador en IA",
      "about.card2.desc": "Investigación doctoral en detección de anomalías en video y reconocimiento de acciones humanas anómalas para seguridad pública.",
      "about.card3.title": "Ingeniero de IA",
      "about.card3.desc": "Pipelines dockerizados, despliegue en la nube (AWS EC2) y en el borde de modelos eficientes en tiempo real.",
      "about.card4.title": "Multimodal y LLMs",
      "about.card4.desc": "Inferencia multimodal visión–audio y LLMs para análisis de sentimiento y comprensión de comportamiento.",
      "about.link.projects": "Proyectos",
      "about.link.papers": "Artículos",
      "about.link.patents": "Patentes",

      "exp.eyebrow": "Trayectoria",
      "exp.title": "Experiencia",
      "exp.cdl.company": "Celestial Dynamics Lab",
      "exp.cdl.role": "Líder de Proyectos de Visión por Computadora",
      "exp.cdl.period": "Feb 2026 – Actualidad",
      "exp.cdl.p1": "Lidero un equipo multidisciplinario de visión por computadora (3 personas directas, ~7 ingenieros indirectos) en curación de datos, desarrollo de modelos y despliegue en producción.",
      "exp.cdl.p2": "Dirijo modelos de visión por computadora para la detección de eventos anómalos en seguridad pública (C5), validados en entornos reales sobre infraestructura NVIDIA Enterprise.",
      "exp.cdl.p3": "Responsable del proceso de I+D de extremo a extremo — arquitectura, curación de datos, entrenamiento y despliegue — base de una publicación científica en preparación.",
      "exp.cdl.p4": "Desarrollo soluciones multimodales que integran visión y audio para la inferencia de sentimiento en medios masivos, usando modelos multimodales y LLMs.",
      "exp.cdl.p5": "Diseño detección de anomalías basada en comportamiento para entornos cerrados (retail, espacios de acceso controlado), en desarrollo activo.",
      "exp.ipn.company": "Instituto Politécnico Nacional (IPN)",
      "exp.ipn.role": "Investigador en IA",
      "exp.ipn.period": "Feb 2023 – Actualidad",
      "exp.ipn.p1": "Investigación en detección de anomalías en video y reconocimiento de acciones humanas anómalas para videovigilancia y seguridad pública.",
      "exp.ipn.p2": "Desarrollé TransLowNet, un marco modular eficiente que opera sin grandes conjuntos de datos — adoptado como base del sistema de detección C5.",
      "exp.ipn.p3": "Implementé arquitecturas CNN 2D/3D y Transformer para análisis de video en tiempo real, con dockerización del pipeline y despliegue en AWS EC2.",
      "exp.ipn.p4": "Autor de más de 12 publicaciones en congresos y revistas internacionales sobre Visión por Computadora e Inteligencia Artificial.",
      "exp.solera.company": "Solera",
      "exp.solera.role": "Ingeniero de Desarrollo de Software en Pruebas I",
      "exp.solera.period": "Ago 2022 – Ene 2023",
      "exp.solera.p1": "Automatización de pruebas en Python (Selenium) para flujos web y móviles, incluyendo verificación de APIs REST y pruebas de integración.",
      "exp.solera.p2": "Integré suites de pruebas automatizadas en pipelines de CI/CD (Jenkins) para su ejecución automática dentro de los flujos de despliegue.",
      "exp.solera.p3": "Colaboré en equipos Ágiles/Scrum usando Git y Jira para control de versiones, trazabilidad y gestión de incidencias.",

      "skills.eyebrow": "Herramientas",
      "skills.title": "Habilidades y stack",
      "skills.lead": "Herramientas y modelos que uso en investigación, ingeniería y despliegue.",
      "skills.cat.systems": "Programación y Sistemas",
      "skills.cat.cv": "Visión por Computadora",
      "skills.cat.ml": "ML, PLN y Multimodal",
      "skills.cat.deploy": "Entrenamiento y Despliegue",
      "skills.cat.languages": "Idiomas",
      "skills.lang.es": "Español (Nativo)",
      "skills.lang.en": "Inglés (Técnico / Conversacional)",

      "edu.eyebrow": "Formación",
      "edu.title": "Educación",
      "edu.phd.title": "Doctorado en Ingeniería en Comunicaciones y Electrónica (Inteligencia Artificial)",
      "edu.phd.place": "Instituto Politécnico Nacional (IPN) · 2023 – 2027",
      "edu.stay.title": "Estudiante de Investigación — Visión por Computadora y Sistemas Inteligentes",
      "edu.stay.place": "The University of Electro-Communications (UEC) · Tokio, Japón · 2023 – 2024",
      "edu.msc.title": "Maestría en Ciencias en Ingeniería en Microelectrónica",
      "edu.msc.place": "Instituto Politécnico Nacional (IPN) · 2020 – 2022",
      "edu.bsc.title": "Ingeniería en Sistemas Automotrices",
      "edu.bsc.place": "UPIITA – IPN · 2015 – 2019",

      "projects.eyebrow": "Trabajo destacado",
      "projects.title": "Proyectos",
      "projects.lead": "Sistemas de IA aplicada creados para proteger personas y resolver problemas reales.",
      "projects.cta": "Explorar modelos y demos",

      "papers.eyebrow": "Producción científica",
      "papers.title": "Publicaciones y reconocimientos",
      "papers.lead": "Autor de más de 12 trabajos arbitrados en Visión por Computadora, detección de anomalías y sistemas inteligentes.",
      "papers.cta": "Ver todas las publicaciones",

      "contact.eyebrow": "Contacto",
      "contact.title": "Construyamos juntos",
      "contact.text": "La ciencia se fortalece cuando se comparte. Si te interesa colaborar, en proyectos de investigación o intercambiar ideas, hablemos.",
      "contact.shortcv": "CV corto",
      "contact.fullcv": "CV completo",

      "r.hero.title": "Detección de Anomalías en Video",
      "r.hero.sub": "De modelos eficientes en datos a sistemas en tiempo real desplegados en producción de seguridad pública.",
      "r.objective": "Mi investigación se centra en arquitecturas de aprendizaje profundo eficientes que modelan comportamientos complejos en entornos dinámicos, equilibrando precisión y eficiencia computacional y reduciendo la dependencia de grandes conjuntos de datos etiquetados.",
      "r.qn.results": "Últimos resultados",
      "r.qn.results.sub": "Métricas de vanguardia",
      "r.qn.pubs": "Publicaciones",
      "r.qn.pubs.sub": "Archivo completo",
      "r.qn.db": "Bases de datos",
      "r.qn.db.sub": "Datasets propios",
      "r.qn.awards": "Logros",
      "r.qn.awards.sub": "Patentes y premios",
      "r.results.title": "A fondo: TransLowNet",
      "r.results.r1.title": "Eficiencia en baja iluminación",
      "r.results.r1.text": "Usando X3D como backbone, redujimos los falsos positivos en escenarios nocturnos en un 15% frente a modelos convencionales.",
      "r.results.r2.title": "Arquitectura basada en grafos",
      "r.results.r2.text": "Las Graph Attention Networks capturan la relación entre múltiples actores en la escena, mejorando la detección de eventos de violencia.",
      "r.results.cta": "Leer el artículo completo (MDPI)",
      "r.pubs.title": "Publicaciones científicas",
      "r.pubs.sub": "Trabajo arbitrado en Visión por Computadora, detección de anomalías y sistemas inteligentes.",
      "r.search.placeholder": "Busca por tema (ej. GNN, X3D, somnolencia)…",
      "r.filter.all": "Todos",
      "r.filter.journal": "Revistas",
      "r.filter.conference": "Congresos",
      "r.filter.book": "Libros y capítulos",
      "r.db.title": "Desarrollo de datasets propios",
      "r.db.text": "Curación de más de 500 horas de video para detección de anomalías en el transporte público mexicano.",
      "r.awards.title": "Premios y reconocimientos",
      "r.paper.pdf": "PDF",
      "r.paper.code": "Código",
      "r.paper.bib": "BibTeX",

      "g.back": "Volver al inicio",
      "g.title": "Trayectoria y evidencia",
      "g.lead": "Registros visuales de congresos internacionales, reconocimientos y trabajo de campo.",
      "g.filter.all": "Todo",
      "g.filter.conferences": "Congresos",
      "g.filter.awards": "Premios",
      "g.filter.field": "Trabajo de campo",

      /* ---- models page ---- */
      "nav.models": "Modelos",
      "m.eyebrow": "Modelos y demos",
      "m.title": "Modelos que demuestran el trabajo",
      "m.lead": "Demos en video de modelos que he construido — con un resumen general de lo que hace cada uno. Los resúmenes son deliberadamente generales y respetan la confidencialidad industrial.",
      "m.filter.all": "Todos",
      "m.filter.vad": "Detección de anomalías",
      "m.filter.multimodal": "Multimodal y LLMs",
      "m.filter.safety": "Seguridad del conductor",
      "m.filter.behavior": "Análisis de comportamiento",
      "m.filter.security": "Seguridad de imagen",
      "m.status.production": "En producción",
      "m.status.research": "Investigación",
      "m.status.prototype": "Prototipo",
      "m.status.dev": "En desarrollo",
      "m.doc": "Documentación — resumen",
      "m.stack": "Stack",
      "m.metrics": "Puntos clave",
      "m.demo.soon": "Demo próximamente",
      "m.watch": "Ver demo",
      "m.note": "Lo que se muestra aquí es un resumen general de cada modelo. Se omiten los detalles técnicos bajo confidencialidad industrial.",
      "m.growing": "Esta sección sigue creciendo — se agregan nuevos modelos con el tiempo.",
    },
  };

  const STORAGE_KEY = "jfm-lang";
  const SUPPORTED = ["en", "es"];

  function detectInitial() {
    let saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (_) {}
    if (SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : "en";
  }

  let current = detectInitial();

  function t(key) {
    const table = DICT[current] || DICT.en;
    return (key in table) ? table[key] : (DICT.en[key] != null ? DICT.en[key] : key);
  }

  function apply(root) {
    const scope = root || document;

    scope.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    scope.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    scope.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      // format: "attr:key, attr2:key2"
      el.getAttribute("data-i18n-attr").split(",").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });

    document.documentElement.lang = current;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang) || lang === current) {
      if (lang === current) apply();
      return;
    }
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
    apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function toggle() {
    setLang(current === "en" ? "es" : "en");
  }

  window.i18n = {
    get lang() { return current; },
    get other() { return current === "en" ? "es" : "en"; },
    t,
    apply,
    setLang,
    toggle,
    SUPPORTED,
  };

  // Apply as early as possible.
  document.documentElement.lang = current;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => apply());
  } else {
    apply();
  }
})();
