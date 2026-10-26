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
| `gallery.html` | Filterable photo gallery (conferences / awards / field work) |

## Structure
```
css/
  base.css       Design system: tokens, reset, shared components (nav, buttons, footer)
  index.css      Landing-page styles
  research.css   Research-page styles
  gallery.css    Gallery-page styles
js/
  i18n.js        Bilingual EN/ES dictionary + engine (data-i18n attributes)
  main.js        Shared: mobile nav, language toggle, active link, scroll reveal
  index.js       Hero carousel, photo coverflow, projects carousel, logos marquee
  research.js    Publications & awards (data-driven), search/filter, single BibTeX copy
  gallery.js     Gallery items (data-driven) + filtering
img/ img_John/ figuresPapers/ videos/ pdfPapers/ Resume/   Assets
```

## How to run
Open `index.html` in a browser, or serve locally:
```bash
python -m http.server 8000
# → http://localhost:8000
```

## Editing content
- **Text (EN/ES):** strings live in `js/i18n.js` under `DICT.en` / `DICT.es`,
  keyed by the `data-i18n="..."` attributes in the HTML.
- **Projects:** `PROJECTS` array in `js/index.js`.
- **Publications:** `PAPERS` array in `js/research.js` (title, venue, links, BibTeX).
- **Awards:** `AWARDS` array in `js/research.js` — items marked `todo: true` need real data.
- **Gallery:** `ITEMS` array in `js/gallery.js` — replace placeholder captions (`TODO:`).

## Language
The site is bilingual (English default). The **EN/ES** button in the navbar toggles
language and remembers the choice in `localStorage`.

## TODO before publishing
- Fill the `TODO:` award names and gallery captions.
- Replace the dataset "Sample" placeholders in `research.html` with real thumbnails.
