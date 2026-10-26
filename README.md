# Jonathan Flores Monroy — Personal site

Personal portfolio and academic site for **Jonathan Flores Monroy**, PhD candidate in
Artificial Intelligence (Computer Vision, NLP and Intelligent Systems).

Static site — plain **HTML + CSS + JavaScript**, no build step. Deployable as-is
(e.g. GitHub Pages).

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Landing: hero, about, experience, education, projects, publications preview, contact |
| `research.html` | Research: video hero, results, full publications list, datasets, awards |
| `ga-vad.html` | GA-VAD doctoral project: demos, architecture, results tables, edge deployment |
| `models.html` | Models & demos (video cards, filterable) |
| `gallery.html` | Filterable photo gallery (conferences / awards / field work) |

## Structure
```
css/
  base.css       Design system: tokens, reset, shared components (nav, buttons, footer)
  index.css      Landing-page styles
  research.css   Research-page styles
  models.css     Models-page styles
  ga-vad.css     GA-VAD project page (extends research.css)
  gallery.css    Gallery-page styles
js/
  i18n.js        Bilingual EN/ES dictionary + engine (data-i18n attributes)
  main.js        Shared: mobile nav, language toggle, active link, scroll reveal
  index.js       Hero carousel, photo coverflow, projects carousel, logos marquee
  research.js    Publications & awards (data-driven), search/filter, single BibTeX copy
  models.js      Models & demos (data-driven) + filtering
  ga-vad.js      GA-VAD page strings (EN/ES) via i18n.extend()
  gallery.js     Gallery items (data-driven) + filtering
img/ img_John/ figuresPapers/ (ga-vad/) videos/ (ga-vad/) pdfPapers/ Resume/   Assets
docker/nginx.conf, Dockerfile, docker-compose.yml, Makefile  Local preview
_referencias/  Design reference screenshots (not part of the site)
```

## How to run (local preview with Docker)
Preview every change locally **before** committing/pushing:
```bash
make up        # docker compose up -d --build  → http://localhost:8090
make down      # stop
make logs      # nginx logs
```
The project folder is bind-mounted into nginx with caching disabled, so you just
**edit → save → refresh the browser**. No rebuild needed (only `make restart`
if you change `docker/nginx.conf`).

Without Docker: `python3 -m http.server 8000` → http://localhost:8000

### Workflow
1. `make up` and open http://localhost:8090
2. Edit HTML / CSS / JS / `js/i18n.js`, refresh and review (EN and ES)
3. When it looks right → `git commit` and `git push` (one deploy, not many)

## Editing content
- **Text (EN/ES):** strings live in `js/i18n.js` under `DICT.en` / `DICT.es`,
  keyed by the `data-i18n="..."` attributes in the HTML.
- **Projects:** `PROJECTS` array in `js/index.js`.
- **Publications:** `PAPERS` array in `js/research.js` (title, venue, links, BibTeX).
- **Awards:** `AWARDS` array in `js/research.js` — items marked `todo: true` need real data.
- **Models:** `MODELS` array in `js/models.js`.
- **Gallery:** `ITEMS` array in `js/gallery.js` — replace placeholder captions (`TODO:`).

## Language
The site is bilingual (English default). The **EN/ES** button in the navbar toggles
language and remembers the choice in `localStorage`.

## TODO before publishing
- Fill the `TODO:` award names and gallery captions.
- Replace the dataset "Sample" placeholders in `research.html` with real thumbnails.
