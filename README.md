# Temirlan Tuibekov — Personal Site

A premium, minimal personal portfolio site. Design language: **"Technical Graphite"** —
editorial minimalism drawn from the vocabulary of engineering drawings (fine grid lines,
index marks, coordinate-style labels), fused with a calm, data-led product page. Signature
element: the "Engineering → Industrial Data → SQL → Power BI → Decision" flow diagram,
which embodies the site's core positioning — an engineer who became a data specialist.

## File structure

```
/
├── index.html          # all page content (RU by default, EN via toggle)
├── style.css            # design tokens + all styling
├── script.js             # i18n, nav, scroll reveal, counters, interactions
├── resume/
│   └── Temirlan_Tuibekov_CV.pdf   # your real CV, wired to both "Download CV" buttons
├── assets/               # empty — reserved for future icons/images
└── README.md
```

## Run locally

No build step needed. Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

**GitHub Pages**
1. Push this folder to a GitHub repo.
2. Repo → Settings → Pages → Deploy from branch → `main` / root.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

**Vercel**
1. `npm i -g vercel` (or use the Vercel dashboard → "Add New Project" → import folder).
2. Run `vercel` in this folder and follow the prompts. No framework/build settings needed —
   it's a static site.

## Things to double-check before you publish

- **Phone number**: the PDF extraction gave `+7 771 203 89 5` (9 digits after the country
  code — one short of a standard Kazakhstani number). Please verify the exact number and
  update it in `index.html` (search for `771 203 89 5`, two places) and the `tel:` link.
- **LinkedIn / GitHub / Telegram**: not present in your CV, so the contact section has
  `[LinkedIn URL]` and `[GitHub URL]` placeholders — search `index.html` for
  `data-i18n-note` to find and replace them with real links (or remove the rows).
- **$400K figure**: kept as you confirmed, but it's a specific commercial number about a
  former/current employer — worth a final gut-check that it's fine to publish before this
  goes live somewhere public.
- **Job-title framing**: the whole site is written around the hybrid identity you chose —
  "engineer who became a data/BI specialist" — currently labeled `Lead Specialist, Data & BI
  Analytics`. If your actual current title differs, update it in `script.js`
  (`hero.role1` / `exp.i1.role`) and `index.html`.
- **Résumé download**: both "Download CV" buttons point to `resume/Temirlan_Tuibekov_CV.pdf`,
  which is the file you uploaded. Replace that file if you update your CV.
- **Favicon**: currently a blank placeholder (`<link rel="icon" href="data:,">`) so browsers
  don't 404-request one. Drop a real `favicon.ico` or `.svg` into `assets/icons/` and update
  the `<link>` tag in `<head>` if you want a branded tab icon.

## What's next (ideas for later)

- Swap the placeholder-free hero for a subtle animated blueprint/circuit illustration behind
  the headline (currently a static faint grid).
- Add a short "case study" sub-page per project if you want to go deeper than the
  Problem → Solution → Impact summary on the main page.
- Wire the language toggle's chosen language into `localStorage`-free session state only —
  it currently resets to RU on reload by design (per brief); flip that behavior if you'd
  rather it stick.
- Add real Open Graph / social preview image (`assets/images/og-cover.jpg`, ~1200×630px).
