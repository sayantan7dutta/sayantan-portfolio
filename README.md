# Sayantan Dutta — UX Portfolio

A production-grade portfolio site for a Senior UX & Service Designer. Dark, editorial
aesthetic; built for speed, accessibility, and easy content editing.

**Stack:** [Astro 6](https://astro.build) · TypeScript · Tailwind CSS v4 ·
[Motion](https://motion.dev) · native View Transitions.

---

## 1. Running it locally

You need **Node 22+**. This machine has Node installed via `nvm`, so each new
terminal session needs nvm loaded first:

```sh
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"   # load nvm (once per terminal)
cd ~/Documents/Portfolio/sayantan-portfolio
npm install        # first time only
npm run dev        # → http://localhost:4321
```

Leave `npm run dev` running — it hot-reloads as you edit files.

### Commands

| Command           | What it does                                            |
| :---------------- | :------------------------------------------------------ |
| `npm run dev`     | Dev server at `localhost:4321` (hot reload)             |
| `npm run build`   | Production build → `dist/`                              |
| `npm run preview` | Serve the built `dist/` locally to check before deploy  |
| `npm run og`      | Regenerate the social-share image (`public/og/default.png`) |

---

## 2. Project structure

```
sayantan-portfolio/
├── .github/workflows/deploy.yml   # auto-deploy to GitHub Pages on push to main
├── public/                        # served as-is (no processing)
│   ├── images/clients/            # client logos (ericsson.png, mcafee.png, …)
│   ├── og/default.png             # social-share image (generated)
│   ├── resume.pdf                 # ← replace with your real CV
│   ├── favicon.svg
│   └── robots.txt
├── scripts/generate-og.mjs        # builds the OG image
├── src/
│   ├── assets/work/api-lifecycle/ # real screenshots — optimised at build time
│   ├── components/                # Nav, Footer, Cursor, ScrollProgress,
│   │                              #   CaseStudyHero, ProcessSteps, StatCards,
│   │                              #   MoreCaseStudies, ImagePH, Lightbox
│   ├── data/caseStudies.ts        # case-study registry (drives card grids)
│   ├── layouts/                   # Base.astro, CaseStudy.astro
│   ├── pages/
│   │   ├── index.astro            # homepage
│   │   ├── about.astro
│   │   └── work/                  # one .astro file per case study
│   └── styles/global.css          # all design tokens + shared styles
├── astro.config.mjs
└── vercel.json
```

The design system lives in **`src/styles/global.css`** — colours, fonts, and the
light/dark themes are all CSS variables at the top of that file. The aesthetic is
intentionally fixed; you shouldn't need to touch it.

---

## 3. Editing content

All written copy lives directly in the `.astro` page files. Open the file, edit the
text between the tags, save — the dev server reloads instantly.

### Add your photo

1. Drop your photo into `public/images/` (e.g. `public/images/sayantan.jpg`).
   Use a **4:5 portrait** ratio, at least 800px wide.
2. In **`src/pages/index.astro`**, find the `TO ADD YOUR PHOTO` comment in the hero.
   Replace the `<div class="hero-photo-ph">…</div>` block with:
   ```html
   <img src="/images/sayantan.jpg" alt="Sayantan Dutta" class="hero-photo-img" />
   ```
3. Do the same in **`src/pages/about.astro`** (`class="about-photo-img"`).

### Add case-study images (the placeholder slots)

Every placeholder is a styled box that tells you what goes there. There are two ways
to add a real image — pick based on whether you want build-time optimisation:

**Option A — optimised (recommended for screenshots).** Put the file in
`src/assets/work/<slug>/`, then in the page file import it and use Astro's `<Image>`:

```astro
---
import { Image } from 'astro:assets';
import blueprint from '../../assets/work/hazop/service-blueprint.png';
---
<figure class="cs-figure">
  <Image src={blueprint} alt="HAZOP service blueprint" data-lightbox loading="lazy" />
</figure>
```

Astro converts it to WebP, generates a responsive `srcset`, and lazy-loads it — zero
layout shift, no work from you. The `data-lightbox` attribute makes it click-to-expand.

**Option B — quick drop-in.** Put the file in `public/images/work/` and use a plain
`<img>`: `<img src="/images/work/my-image.jpg" alt="…" loading="lazy" data-lightbox />`.
Simpler, but not auto-optimised — only use this for already-small images.

Each placeholder has an HTML comment right above it showing the exact code to paste.
**Prep tip:** for blurred client screenshots, apply a 15–20px gaussian blur in Figma
and export as PNG before importing.

### The Ericsson screenshots (NDA blur)

The Ericsson case study — "From Designer to Design Leader"
(`src/pages/work/api-lifecycle.astro`) — already wires in four real Ericsson API
Console screenshots from `src/assets/work/api-lifecycle/`.
They are **CSS-blurred by default** via the `nda-blur` class, so the layout is real
but the detail is obscured.

Before publishing, choose one:

- **Keep them blurred** — do nothing; they ship blurred.
- **Publish unblurred** — only if cleared for public use: remove the `nda-blur`
  class from the `<Image>` tags (and the `nda-frame` wrapper / `nda-note` caption).
- **Use proper blurred exports** — replace the files in `src/assets/work/api-lifecycle/`
  with versions you blurred in Figma, then remove the `nda-blur` class.

> CSS blur is a visual treatment only — the original pixels are still in the file.
> For a true NDA-safe site, replace the source files with genuinely blurred exports.

### Client logos

Logo files are already in `public/images/clients/` (`ericsson.png`, `mcafee.png`,
`sherwin-williams.png`). The homepage currently shows clients as **styled text**,
which suits the editorial look. To switch to logos, edit the `clients-list` block in
`src/pages/index.astro` (there's a `TO ADD CLIENT LOGOS` comment with the snippet).

### Update your resume

Replace **`public/resume.pdf`** with your real CV, keeping the filename `resume.pdf`.
Every "Resume" link across the site points there — no code change needed.

### Add a new case study

1. Add an entry to **`src/data/caseStudies.ts`** (this drives the homepage list and
   the "More case studies" grid automatically).
2. Copy an existing file in `src/pages/work/` (e.g. `pensaar.astro`) to
   `src/pages/work/<your-slug>.astro` and edit the content.
3. Add a matching project card to the homepage in `src/pages/index.astro`.

### Regenerate the social-share image

Edit the wording in `scripts/generate-og.mjs`, then run `npm run og`.

---

## 4. Deploying

The site is a static build (`dist/`), so it hosts anywhere. Two paths are set up:

### Option A — GitHub Pages (automatic)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. Create a GitHub repo and push this project to it:
   ```sh
   git remote add origin https://github.com/<you>/sayantan-portfolio.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Every push to `main` now redeploys automatically (watch the **Actions** tab).

### Option B — Vercel

`vercel.json` is included. Import the repo at [vercel.com/new](https://vercel.com/new)
— Vercel auto-detects Astro and deploys. Every push redeploys.

### Custom domain (e.g. sayantandutta.com)

1. In `astro.config.mjs`, set `site` to your final URL (already `https://sayantandutta.com`).
2. **GitHub Pages:** Settings → Pages → Custom domain → enter the domain. GitHub adds a
   `CNAME` file — keep it. Point your domain's DNS at GitHub
   ([guide](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).
   **Vercel:** Project → Settings → Domains → add the domain and follow the DNS steps.
3. After the domain is live, the `sitemap` and `robots.txt` already reference it.

---

## 5. Performance & accessibility

- **Near-zero JavaScript** — Astro ships HTML/CSS; only ~16KB of JS total (the View
  Transitions router + small inlined scripts). Motion is tree-shaken to just the
  `inView` helper.
- **Images** — anything via Astro's `<Image>` is auto-converted to WebP with a
  responsive `srcset` and lazy-loaded. Fixed aspect-ratios everywhere mean zero
  layout shift.
- **Hero text** animates with pure CSS, so it paints immediately (fast FCP).
- **No-JS / SEO safe** — all content is in the HTML; scroll-reveal only hides content
  *after* JS confirms it can re-show it.
- **Reduced motion** — every animation is disabled under `prefers-reduced-motion`.
- **Dark/light** — toggle in the nav; preference saved to `localStorage` and applied
  before first paint (no flash).

Run a Lighthouse audit against a production build (`npm run build && npm run preview`),
not the dev server — dev-mode numbers are not representative.
