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
      "footer.role": "AI Researcher & Engineer",
      "footer.built": "Built with care · Mexico City",

      /* hero */
      "hero.role": "AI Researcher & Engineer",
      "hero.tagline": "Teaching machines to protect people",
      "hero.subtitle": "PhD candidate in Artificial Intelligence and Technical Lead working across computer vision, edge ML, LLMs and knowledge graphs — author of 12+ international publications and focused on turning research into production systems.",
      "hero.quote": "“Technology gains meaning when grounded in human needs.”",
      "hero.cta.research": "View research",
      "hero.cta.contact": "Get in touch",

      /* about */
      "about.eyebrow": "About me",
      "about.title": "From research to production AI — from the edge to the data center.",
      "about.lead": "AI researcher and engineer with computer vision at the core, extending into edge ML, LLMs, RAG and knowledge graphs — combining scientific rigor with technical leadership and deployment from embedded devices to GPU servers.",
      "about.card1.title": "Technical Leadership",
      "about.card1.desc": "Lead AI and perception teams end to end — architecture, numerical acceptance criteria, benchmarks and production deployment.",
      "about.card2.title": "AI Researcher",
      "about.card2.desc": "PhD research in video anomaly detection and anomalous human-action recognition for public safety.",
      "about.card3.title": "Edge & Production ML",
      "about.card3.desc": "Model optimization and quantization (ONNX, INT8, SmoothQuant), reproducible benchmarks and deployment from NPUs and SoCs to H100-class servers.",
      "about.card4.title": "LLMs, RAG & Knowledge Graphs",
      "about.card4.desc": "Ontology-driven knowledge graphs, Graph RAG and LLM agents with guardrails and LLM-as-judge evaluation, plus vision–audio multimodal inference.",
      "about.link.projects": "Projects",
      "about.link.papers": "Papers",
      "about.link.patents": "Patents",

      /* experience */
      "exp.eyebrow": "Career",
      "exp.title": "Experience",
      "exp.novus.company": "Novus Tech Systems",
      "exp.novus.role": "Technical Lead · Computer Vision / Edge ML Engineer",
      "exp.novus.period": "Oct 2026 – Present",
      "exp.novus.p1": "Lead the technical direction of perception systems, defining the architecture of each vision capability (detection, tracking, recognition, attributes, license-plate reading) and where it runs: device, site edge or server.",
      "exp.novus.p2": "Select, train and fine-tune vision models and optimize them for edge deployment on cameras, SoCs and NPU accelerators (ONNX, INT8 quantization).",
      "exp.novus.p3": "Design reproducible benchmarks — accuracy, p50/p95 latency, throughput, power and thermal behavior — and document hardware fit / no-fit against product targets.",
      "exp.novus.p4": "Define numerical acceptance criteria with product and golden-set requirements with the data team (domain, taxonomy, failure cases, validation protocol).",
      "exp.novus.p5": "Integrate model outputs with the backend through structured events, video streams and versioned artifacts, with runbooks so any engineer can reproduce compile, bench and deploy.",
      "exp.novus.p6": "Oversee responsible handling of sensitive image data (faces, identifiers, video) in coordination with compliance.",
      "exp.cdl.company": "Celestial Dynamics Lab",
      "exp.cdl.role": "Computer Vision Projects Lead · Data & Knowledge Graphs",
      "exp.cdl.period": "Feb 2026 – Oct 2026",
      "exp.cdl.p1": "Led a multidisciplinary computer-vision team (3 direct, ~7 indirect engineers) across data curation, model development and production deployment.",
      "exp.cdl.p2": "Directed computer-vision models for anomalous-event detection in public safety (C5), validated in real environments on NVIDIA Enterprise infrastructure.",
      "exp.cdl.p3": "Owned the end-to-end R&D process — architecture, data curation, training and deployment — which became the basis of a scientific paper in preparation.",
      "exp.cdl.p4": "Built multimodal solutions integrating computer vision and audio for sentiment inference in mass media, using multimodal models and LLMs.",
      "exp.cdl.p6": "Developed ~80% of the models of the Arconte platform — from face recognition to semantic search, plus heuristic models — optimized and quantized for deployment from embedded devices to industrial pods (NVIDIA H100, RTX PRO 6000 Blackwell).",
      "exp.cdl.p7": "Optimized inference to an average of ~1.5 GB of VRAM per video stream through quantization from FP16 to INT8 and more aggressive schemes such as SmoothQuant for LLMs.",
      "exp.cdl.arconte": "Explore the Arconte platform →",
      "exp.cdl.p5": "Designed behavior-based anomaly detection for closed environments (retail, controlled-access spaces).",
      "exp.cdl.sub.cv": "Computer Vision",
      "exp.cdl.sub.data": "Data & Knowledge Graphs — foundation of MATRIA AI",
      "exp.cdl.d1": "Designed the ontologies to represent large-scale relational data at a national level and built the knowledge graph on top of them, from entity modeling to database integration.",
      "exp.cdl.d2": "Built a Graph RAG pipeline and architected the end-to-end conversational assistant on top of the knowledge graph, powered by open-source LLMs.",
      "exp.cdl.d3": "Developed retrieval agents with guardrails and question-handling rules, raising answer accuracy from 23% to 70%.",
      "exp.cdl.d4": "Led graph-quality audits, identifying and creating missing connections to strengthen data coverage.",
      "exp.cdl.d5": "Defined the evaluation framework, benchmarking performance with LLM-as-judge and retrieval / answer-quality metrics.",
      "exp.cdl.matria": "Learn about MATRIA AI →",
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
      "skills.cat.kg": "Knowledge Graphs & RAG",
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
      "r.hero.sub": "Online detection, classification and localization of anomalous events — built to run on edge devices.",
      "r.objective": "My research asks a practical question: can a camera tell us, in real time, when something abnormal happens, where it happens and what it is — on hardware small enough to live inside a bus or a station? Each paper below answers part of it.",
      "r.qn.line": "Research line",
      "r.qn.line.sub": "From backbones to edge systems",
      "r.qn.current": "Current work",
      "r.qn.current.sub": "GA-VAD · in preparation",
      "r.qn.pubs": "Publications",
      "r.qn.pubs.sub": "Full archive",
      "r.qn.db": "Dataset",
      "r.qn.db.sub": "Trans-IPN",
      "r.qn.awards": "Achievements",
      "r.qn.awards.sub": "Patents & awards",
      "r.line.eyebrow": "Research line",
      "r.line.title": "How the work has evolved",
      "r.line.lead": "Every step adds one capability while keeping the system online and efficient enough for the edge.",
      "r.line.s1.tag": "2024 · IOS Press",
      "r.line.s1.title": "Choosing the right backbone",
      "r.line.s1.text": "Benchmarked five video feature extractors (I3D, C3D, UniFormer-S/B, TSM) inside a BERT + MIL detector on a Jetson Orin NX (8 GB, 20 W).",
      "r.line.s1.m1": "79.74% AUC",
      "r.line.s1.m2": "4.64 clips/s on Jetson",
      "r.line.s2.tag": "2025 · Applied Sciences (MDPI)",
      "r.line.s2.title": "From detection to classification",
      "r.line.s2.text": "A modular framework — feature extractor, detector and classifier — that labels the type of anomaly clip by clip, online, instead of analysing the whole video.",
      "r.line.s2.m1": "74.77% clip-level accuracy",
      "r.line.s2.m2": "58.96% video-level accuracy",
      "r.line.s3.tag": "2025 · IEEE",
      "r.line.s3.title": "Running on the edge",
      "r.line.s3.text": "Joint detection and classification of abnormal human actions evaluated end to end on an edge device.",
      "r.line.s3.m1": "80.0% AUC",
      "r.line.s3.m2": "283.49 FPS on Jetson Orin NX",
      "r.line.s4.tag": "2026 · Engineering Proceedings (MDPI)",
      "r.line.s4.title": "TransLowNet: when, what and where",
      "r.line.s4.text": "Adds spatial localization of the anomalous region to the online detector and classifier, using an X3D-S backbone.",
      "r.line.s4.m1": "80.0% AUC · 54.5% accuracy",
      "r.line.s4.m2": "20.3% mAP@0.5 localization",
      "r.line.s5.tag": "Under review",
      "r.line.s5.title": "Learning from noisy labels",
      "r.line.s5.text": "Heuristic-guided representation learning: expert rules plus statistical modeling of frozen VideoMAE V2 features produce noise-tolerant pseudo-labels for weakly supervised detection.",
      "r.results.title": "Deep dive: TransLowNet",
      "r.results.r1.title": "One stream, three answers",
      "r.results.r1.text": "The video stream is split into short clips. Each clip is encoded once; the detector decides whether it is anomalous, and only then the localization and classifier modules run — so the expensive parts work only when they are needed.",
      "r.results.r2.title": "Built for constrained hardware",
      "r.results.r2.text": "Lightweight X3D backbones keep the whole pipeline in real time on a Jetson Orin NX, with a fraction of the compute of I3D or UniFormer and competitive detection and classification.",
      "r.results.cta": "Read the paper (Applied Sciences)",
      "r.results.code": "Source code",
      "r.cur.eyebrow": "Current research · Paper in preparation",
      "r.cur.title": "GA-VAD: when, where and what — in a single online pass",
      "r.cur.lead": "My doctoral work unifies the three questions in one lightweight model: a guided spatial-attention head on top of a video backbone, trained with weak (video-level) supervision and designed to run online on edge hardware.",
      "r.cur.when": "When",
      "r.cur.when.text": "Temporal detection of the anomalous segment as the video streams in — no need to wait for the whole video.",
      "r.cur.where": "Where",
      "r.cur.where.text": "Spatial localization of the region where the event happens, learned without manual bounding boxes.",
      "r.cur.what": "What",
      "r.cur.what.text": "Classification of the anomaly type (fight, robbery, shooting, theft…) in the same forward pass.",
      "r.cur.note": "Two variants are being benchmarked — an Edge model for embedded devices and a Pro model for servers — across four video backbones (CNN and Transformer) on UCF-Crime and XD-Violence.",
      "r.cur.cta": "Explore GA-VAD: demos, tables and architecture",
      "r.pubs.title": "Scientific publications",
      "r.pubs.sub": "Peer-reviewed work in Computer Vision, anomaly detection and intelligent systems.",
      "r.search.placeholder": "Search by topic (e.g. X3D, edge, drowsiness)…",
      "r.filter.all": "All",
      "r.filter.journal": "Journals",
      "r.filter.conference": "Conferences",
      "r.filter.book": "Books & chapters",
      "r.filter.review": "Under review",
      "r.filter.thesis": "Thesis",
      "r.db.eyebrow": "Data",
      "r.db.title": "Trans-IPN: anomalies in public transportation",
      "r.db.text": "A dataset curated for my doctoral research: real incidents recorded by public-transport and street CCTV, plus broadcast news footage, labeled by anomaly type.",
      "r.db.videos": "videos",
      "r.db.classes": "anomaly classes",
      "r.db.size": "of video",
      "r.db.dist": "Videos per class",
      "r.db.mixed": "Mixed (multi-label)",
      "r.db.privacy": "Because it contains real people and third-party footage, the dataset is used for research only and is not publicly distributed. Models are also benchmarked on the public UCF-Crime and XD-Violence datasets.",
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
      "footer.role": "Investigador e Ingeniero en IA",
      "footer.built": "Hecho con dedicación · Ciudad de México",

      "hero.role": "Investigador e Ingeniero en IA",
      "hero.tagline": "Enseñando a las máquinas a proteger personas",
      "hero.subtitle": "Candidato a Doctor en Inteligencia Artificial y Líder Técnico en visión por computadora, edge ML, LLMs y knowledge graphs — autor de más de 12 publicaciones internacionales y enfocado en llevar la investigación a sistemas en producción.",
      "hero.quote": "“La tecnología cobra sentido cuando responde a necesidades humanas.”",
      "hero.cta.research": "Ver investigación",
      "hero.cta.contact": "Contactar",

      "about.eyebrow": "Sobre mí",
      "about.title": "De la investigación a la IA en producción, del borde a la nube.",
      "about.lead": "Investigador e ingeniero en IA con la visión por computadora como base, extendida a edge ML, LLMs, RAG y knowledge graphs — combinando rigor científico con liderazgo técnico y despliegue desde dispositivos embebidos hasta servidores GPU.",
      "about.card1.title": "Liderazgo Técnico",
      "about.card1.desc": "Lidero equipos de IA y percepción de extremo a extremo: arquitectura, criterios numéricos de aceptación, benchmarks y despliegue en producción.",
      "about.card2.title": "Investigador en IA",
      "about.card2.desc": "Investigación doctoral en detección de anomalías en video y reconocimiento de acciones humanas anómalas para seguridad pública.",
      "about.card3.title": "Edge ML y Producción",
      "about.card3.desc": "Optimización y cuantización de modelos (ONNX, INT8, SmoothQuant), benchmarks reproducibles y despliegue desde NPUs y SoCs hasta servidores clase H100.",
      "about.card4.title": "LLMs, RAG y Knowledge Graphs",
      "about.card4.desc": "Knowledge graphs basados en ontologías, Graph RAG y agentes LLM con guardrails y evaluación LLM-as-judge, además de inferencia multimodal visión–audio.",
      "about.link.projects": "Proyectos",
      "about.link.papers": "Artículos",
      "about.link.patents": "Patentes",

      "exp.eyebrow": "Trayectoria",
      "exp.title": "Experiencia",
      "exp.novus.company": "Novus Tech Systems",
      "exp.novus.role": "Líder Técnico · Computer Vision / Edge ML Engineer",
      "exp.novus.period": "Oct 2026 – Actualidad",
      "exp.novus.p1": "Lidero la dirección técnica de los sistemas de percepción, definiendo la arquitectura de cada capacidad de visión (detección, seguimiento, reconocimiento, atributos, lectura de placas) y dónde se ejecuta: dispositivo, edge de sitio o servidor.",
      "exp.novus.p2": "Selecciono, entreno y hago fine-tuning de modelos de visión y los optimizo para despliegue en el borde: cámaras, SoCs y aceleradores NPU (ONNX, cuantización INT8).",
      "exp.novus.p3": "Diseño bancos de prueba reproducibles — accuracy, latencia p50/p95, throughput, potencia y comportamiento térmico — y documento el fit / no-fit del hardware frente a los objetivos de producto.",
      "exp.novus.p4": "Defino con producto criterios numéricos de aceptación y con el equipo de datos los requisitos del golden set (dominio, taxonomía, casos de falla, protocolo de validación).",
      "exp.novus.p5": "Integro la salida de los modelos con el backend mediante eventos estructurados, streams de video y artefactos versionados, con runbooks para que cualquier ingeniero repita compilación, benchmark y despliegue.",
      "exp.novus.p6": "Superviso el manejo responsable de datos sensibles de imagen (rostros, identificadores, video) en coordinación con cumplimiento.",
      "exp.cdl.company": "Celestial Dynamics Lab",
      "exp.cdl.role": "Líder de Proyectos de Visión por Computadora · Datos y Knowledge Graphs",
      "exp.cdl.period": "Feb 2026 – Oct 2026",
      "exp.cdl.p1": "Lideré un equipo multidisciplinario de visión por computadora (3 personas directas, ~7 ingenieros indirectos) en curación de datos, desarrollo de modelos y despliegue en producción.",
      "exp.cdl.p2": "Dirigí modelos de visión por computadora para la detección de eventos anómalos en seguridad pública (C5), validados en entornos reales sobre infraestructura NVIDIA Enterprise.",
      "exp.cdl.p3": "Fui responsable del proceso de I+D de extremo a extremo — arquitectura, curación de datos, entrenamiento y despliegue — que se convirtió en la base de una publicación científica en preparación.",
      "exp.cdl.p4": "Desarrollé soluciones multimodales que integran visión y audio para la inferencia de sentimiento en medios masivos, usando modelos multimodales y LLMs.",
      "exp.cdl.p6": "Desarrollé ~80% de los modelos de la plataforma Arconte — desde reconocimiento facial hasta búsqueda semántica, además de modelos heurísticos — optimizados y cuantizados para su integración desde dispositivos embebidos hasta pods industriales (NVIDIA H100, RTX PRO 6000 Blackwell).",
      "exp.cdl.p7": "Optimicé la inferencia a un consumo promedio de ~1.5 GB de VRAM por flujo de video mediante cuantización de FP16 a INT8 y esquemas más agresivos como SmoothQuant para LLMs.",
      "exp.cdl.arconte": "Conoce la plataforma Arconte →",
      "exp.cdl.p5": "Diseñé la detección de anomalías basada en comportamiento para entornos cerrados (retail, espacios de acceso controlado).",
      "exp.cdl.sub.cv": "Visión por Computadora",
      "exp.cdl.sub.data": "Datos y Knowledge Graphs — base de MATRIA AI",
      "exp.cdl.d1": "Diseñé las ontologías para representar datos relacionales masivos a nivel nacional y construí sobre ellas el knowledge graph, desde el modelado de entidades hasta su integración en base de datos.",
      "exp.cdl.d2": "Construí un pipeline de Graph RAG y diseñé la arquitectura end-to-end del asistente conversacional sobre el knowledge graph, impulsado por LLMs open-source.",
      "exp.cdl.d3": "Desarrollé agentes de recuperación con guardrails y reglas de manejo de preguntas, elevando la precisión de las respuestas de 23% a 70%.",
      "exp.cdl.d4": "Lideré auditorías de calidad del grafo, identificando y creando las conexiones faltantes para fortalecer la cobertura de datos.",
      "exp.cdl.d5": "Definí el marco de evaluación, midiendo el rendimiento con LLM-as-judge y métricas de recuperación y calidad de respuesta.",
      "exp.cdl.matria": "Conoce MATRIA AI →",
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
      "skills.cat.kg": "Knowledge Graphs y RAG",
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
      "r.hero.sub": "Detección, clasificación y localización en línea de eventos anómalos — diseñadas para correr en dispositivos edge.",
      "r.objective": "Mi investigación responde una pregunta práctica: ¿puede una cámara decirnos, en tiempo real, cuándo ocurre algo anómalo, dónde ocurre y qué es — en un hardware tan pequeño que quepa dentro de un autobús o una estación? Cada artículo de abajo responde una parte.",
      "r.qn.line": "Línea de investigación",
      "r.qn.line.sub": "De backbones a sistemas edge",
      "r.qn.current": "Trabajo actual",
      "r.qn.current.sub": "GA-VAD · en preparación",
      "r.qn.pubs": "Publicaciones",
      "r.qn.pubs.sub": "Archivo completo",
      "r.qn.db": "Dataset",
      "r.qn.db.sub": "Trans-IPN",
      "r.qn.awards": "Logros",
      "r.qn.awards.sub": "Patentes y premios",
      "r.line.eyebrow": "Línea de investigación",
      "r.line.title": "Cómo ha evolucionado el trabajo",
      "r.line.lead": "Cada paso agrega una capacidad sin dejar de ser en línea y lo bastante eficiente para el borde.",
      "r.line.s1.tag": "2024 · IOS Press",
      "r.line.s1.title": "Elegir el backbone correcto",
      "r.line.s1.text": "Comparé cinco extractores de características de video (I3D, C3D, UniFormer-S/B, TSM) dentro de un detector BERT + MIL en una Jetson Orin NX (8 GB, 20 W).",
      "r.line.s1.m1": "79.74% AUC",
      "r.line.s1.m2": "4.64 clips/s en Jetson",
      "r.line.s2.tag": "2025 · Applied Sciences (MDPI)",
      "r.line.s2.title": "De la detección a la clasificación",
      "r.line.s2.text": "Un marco modular — extractor, detector y clasificador — que etiqueta el tipo de anomalía clip por clip, en línea, en lugar de analizar el video completo.",
      "r.line.s2.m1": "74.77% de accuracy por clip",
      "r.line.s2.m2": "58.96% de accuracy por video",
      "r.line.s3.tag": "2025 · IEEE",
      "r.line.s3.title": "Corriendo en el borde",
      "r.line.s3.text": "Detección y clasificación conjunta de acciones humanas anómalas, evaluada de extremo a extremo en un dispositivo edge.",
      "r.line.s3.m1": "80.0% AUC",
      "r.line.s3.m2": "283.49 FPS en Jetson Orin NX",
      "r.line.s4.tag": "2026 · Engineering Proceedings (MDPI)",
      "r.line.s4.title": "TransLowNet: cuándo, qué y dónde",
      "r.line.s4.text": "Agrega la localización espacial de la región anómala al detector y clasificador en línea, con un backbone X3D-S.",
      "r.line.s4.m1": "80.0% AUC · 54.5% accuracy",
      "r.line.s4.m2": "20.3% mAP@0.5 en localización",
      "r.line.s5.tag": "En revisión",
      "r.line.s5.title": "Aprender con etiquetas ruidosas",
      "r.line.s5.text": "Aprendizaje de representaciones guiado por heurísticas: reglas expertas y modelado estadístico de características congeladas de VideoMAE V2 generan pseudoetiquetas tolerantes al ruido para detección débilmente supervisada.",
      "r.results.title": "A fondo: TransLowNet",
      "r.results.r1.title": "Un flujo, tres respuestas",
      "r.results.r1.text": "El video se divide en clips cortos. Cada clip se codifica una sola vez; el detector decide si es anómalo y solo entonces se ejecutan la localización y el clasificador — así, las partes costosas trabajan solo cuando hace falta.",
      "r.results.r2.title": "Hecho para hardware limitado",
      "r.results.r2.text": "Los backbones X3D ligeros mantienen todo el pipeline en tiempo real en una Jetson Orin NX, con una fracción del cómputo de I3D o UniFormer y un desempeño competitivo en detección y clasificación.",
      "r.results.cta": "Leer el artículo (Applied Sciences)",
      "r.results.code": "Código fuente",
      "r.cur.eyebrow": "Investigación actual · Artículo en preparación",
      "r.cur.title": "GA-VAD: cuándo, dónde y qué — en una sola pasada en línea",
      "r.cur.lead": "Mi trabajo doctoral une las tres preguntas en un solo modelo ligero: una cabeza de atención espacial guiada sobre un backbone de video, entrenada con supervisión débil (a nivel de video) y diseñada para correr en línea en hardware edge.",
      "r.cur.when": "Cuándo",
      "r.cur.when.text": "Detección temporal del segmento anómalo conforme llega el video, sin esperar a que termine.",
      "r.cur.where": "Dónde",
      "r.cur.where.text": "Localización espacial de la región donde ocurre el evento, aprendida sin cajas anotadas a mano.",
      "r.cur.what": "Qué",
      "r.cur.what.text": "Clasificación del tipo de anomalía (pelea, asalto, disparo, robo…) en la misma pasada.",
      "r.cur.note": "Se evalúan dos variantes — un modelo Edge para dispositivos embebidos y un modelo Pro para servidor — con cuatro backbones de video (CNN y Transformer) en UCF-Crime y XD-Violence.",
      "r.cur.cta": "Explora GA-VAD: demos, tablas y arquitectura",
      "r.pubs.title": "Publicaciones científicas",
      "r.pubs.sub": "Trabajo arbitrado en Visión por Computadora, detección de anomalías y sistemas inteligentes.",
      "r.search.placeholder": "Busca por tema (ej. X3D, edge, somnolencia)…",
      "r.filter.all": "Todos",
      "r.filter.journal": "Revistas",
      "r.filter.conference": "Congresos",
      "r.filter.book": "Libros y capítulos",
      "r.filter.review": "En revisión",
      "r.filter.thesis": "Tesis",
      "r.db.eyebrow": "Datos",
      "r.db.title": "Trans-IPN: anomalías en el transporte público",
      "r.db.text": "Un dataset curado para mi investigación doctoral: incidentes reales grabados por cámaras de transporte público y de calle, además de material de noticieros, etiquetados por tipo de anomalía.",
      "r.db.videos": "videos",
      "r.db.classes": "clases de anomalía",
      "r.db.size": "de video",
      "r.db.dist": "Videos por clase",
      "r.db.mixed": "Mixtos (multietiqueta)",
      "r.db.privacy": "Como contiene personas reales y material de terceros, el dataset se usa solo para investigación y no se distribuye públicamente. Los modelos también se evalúan en los datasets públicos UCF-Crime y XD-Violence.",
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

  // Page-specific strings: window.i18n.extend({ en: {...}, es: {...} })
  function extend(extra) {
    SUPPORTED.forEach((l) => Object.assign(DICT[l], (extra && extra[l]) || {}));
    if (document.readyState !== "loading") apply();
  }

  window.i18n = {
    get lang() { return current; },
    get other() { return current === "en" ? "es" : "en"; },
    t,
    apply,
    setLang,
    toggle,
    extend,
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
