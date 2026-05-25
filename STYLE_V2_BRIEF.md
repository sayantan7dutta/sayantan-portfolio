# Style V2 — alternate look-and-feel exploration

This file briefs the next Claude conversation on a parallel-track redesign
of this portfolio. **The current style (cream + mocha editorial) is live on
`main` and tagged `v1-editorial`. Do not change it.** All exploration
happens on the `style-v2-explore` branch.

---

## What the portfolio is

A static portfolio for **Sayantan Dutta**, Product Designer. Built with:

- **Astro 6** (static site, view transitions)
- **TypeScript** (lightly used)
- **Vanilla CSS** with CSS custom properties for theming (no Tailwind, no
  CSS-in-JS, no UI library)
- **`motion`** for scroll reveals only
- **`astro:assets`** for image optimisation (outputs WebP)
- No CMS, no backend — content lives as `.astro` files

Lives at `/Users/sayantan/Documents/Portfolio/sayantan-portfolio`.

## What's already built (v1)

```
src/
├── pages/
│   ├── index.astro            Homepage: hero + 7 project cards + about preview
│   ├── about.astro            Photo, intro, background, timeline, miiGenie,
│   │                          tools, certs, hobbies/now/podcasts/cities
│   └── work/
│       ├── hazop.astro
│       ├── amble.astro
│       ├── api-lifecycle.astro
│       ├── sherwin-williams.astro
│       ├── kinvault.astro
│       ├── soter-software.astro
│       └── pensaar.astro
├── components/
│   ├── Nav.astro              Top nav + Resume button + theme toggle
│   ├── Footer.astro           Three-link footer
│   ├── CaseStudyHero.astro    Reused hero on every case study
│   ├── MoreCaseStudies.astro  Bottom-of-case-study tile grid
│   ├── BrowserFrame.astro     Chrome-style frame around screenshots
│   ├── StatCards.astro        Big-number outcome cards
│   ├── ImagePH.astro          Placeholder when an asset is missing
│   ├── Lightbox.astro         Click-to-zoom for `data-lightbox` images
│   ├── SWOpsHero.astro        Branded SW cover (used as project card)
│   ├── SoterSiteCover.astro   Branded Soter cover (used as project card)
│   ├── KvPhoneTrio.astro      KinVault 3-phone composition
│   ├── ScrollProgress.astro   Top scroll-progress bar
│   ├── ProcessSteps.astro     Numbered process visual
│   ├── ServiceBlueprint.astro Service blueprint (Amble case study)
│   ├── FileArchitecture.astro File-tree visual (SW case study)
│   └── Cursor.astro           Custom cursor effect
├── layouts/
│   ├── Base.astro             Wraps every page: <head>, nav, footer, scripts
│   └── CaseStudy.astro        Wraps every case study (adds progress bar etc.)
├── data/
│   └── caseStudies.ts         Registry. Order here drives the homepage list.
├── styles/
│   └── global.css             ~1100 lines, all the typography + utilities
└── assets/
    ├── work/<slug>/           Per-case-study images
    └── sayantan*.jpg          Portrait photos
public/
├── images/clients/            Client logos (Ericsson, McAfee, Soter, etc.)
├── images/tools/              Tool logos (Figma, Adobe, Jira, ...)
├── images/certs/              Cert issuer logos (Google, IDF, McKinsey)
└── resume.pdf                 The downloadable resume (patched: Jun-Aug 2025)
```

## Current design tokens (v1, what V2 might depart from)

```css
/* Dark */
--font-display: "Cormorant Garamond", Georgia, serif;
--font-body:    "DM Sans", sans-serif;
--font-mono:    "JetBrains Mono", monospace;
--surface:   #0F0F0F;
--surface-2: #161616;
--border:    #1E1E1E;
--text-1:    #F2EDE6;
--text-2:    #8A8478;
--text-3:    #4A4640;
--accent:    #C9A96E;   /* mocha */

/* Light */
--surface:   #EDE8DF;   /* cream */
--surface-2: #E5DDD3;
--border:    #D4CBBC;
--text-1:    #1A1714;
--text-2:    #5A534C;
--text-3:    #9A9082;
--accent:    #9A6E2A;   /* darker mocha */
```

Style v1 reads as: **editorial, restrained, cream-and-mocha, serif display +
sans body, lots of small mono labels.** Think *editorial magazine
masthead*.

## Standing content rules (apply to V2 too)

These were established across the v1 build. Apply them by default in V2:

1. **No em-dashes (—) or en-dashes (–) anywhere in user-facing copy.** Use
   commas, hyphens, or rephrase. CSS dividers like `/* ─── Footer ─── */`
   are fine (not copy).
2. **UK English.** "specialise", "organisation", "behaviour", "centre".
3. **No AI-sounding corporate prose.** Specific, concrete, human. Avoid
   "leverage", "robust", "transformative", "delivered" without context.
4. **Author's voice is first-person, casual-confident, plain-spoken.** See
   the existing case studies for tone.
5. **Tag every role in the about timeline** consistently (Internship,
   Full-time, Postgrad, Contract . UK). The contracts in the UK explain
   why there is rapid job-change in 2025-26.

## Suggested V2 directions (pick or combine, or invent)

- **Brutalist / Swiss editorial** — large slabs of helvetica/inter, hard
  rules, near-monochrome with a single saturated accent
- **Soft modern** — generous whitespace, rounded everything, pastel
  background tints, big asymmetric photography
- **Terminal / dev portfolio** — full-mono, ASCII dividers, file-tree
  navigation, syntax-highlighted callouts
- **Magazine / spread** — multi-column, drop caps, pull quotes, real
  editorial typography
- **Saas product page** — gradient hero, feature cards, dark-mode-first,
  Inter + slick interactions
- **Minimalist Japanese** — heavy use of negative space, tiny type, single
  hairline rule, off-white background

Pick whatever feels right with the user. The content stays identical, only
the visual + layout language changes.

## Workflow for the V2 chat

1. The new chat should **start by checking out the `style-v2-explore`
   branch**, NOT `main`:
   ```bash
   cd /Users/sayantan/Documents/Portfolio/sayantan-portfolio
   git checkout style-v2-explore
   ```
2. Run dev server with the existing `npm run dev` (already wired in
   `.claude/launch.json` for Claude Preview).
3. Build with `npm run build` to verify before committing.
4. **Never merge V2 into main without the user's explicit "go for it".**
   V1 must remain shippable on `main` and viewable via the `v1-editorial`
   tag.

## What's still pending (carried over from V1)

- **Deploy** — not yet pushed to GitHub Pages or Vercel
- **OG image** for social previews (LinkedIn etc.) — still using
  `public/og/default.png`
- The **resume PDF source file** lives off-repo; the served PDF was
  surgically patched to read "Jun 2025" for Soter. Next regen needs to
  match.

## Where to find things quickly

- Case study template: `src/pages/work/pensaar.astro` is the cleanest one
  to copy from
- Adding a new case study: `src/data/caseStudies.ts` has the registry +
  comment explaining the two steps
- Tokens: top of `src/styles/global.css`
- Theme toggle: `src/layouts/Base.astro` (the toggle uses a `data-bound`
  guard to avoid double-binding on view transitions)

---

*Briefing written end of the v1 conversation, to be handed to the V2
chat. Read top to bottom, then ask the user what direction the alt
style should go in.*
