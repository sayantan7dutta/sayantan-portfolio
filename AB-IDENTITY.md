# Identity variants + A/B test

Three presentations of the same six projects. The content is identical; the
*position* is not. The point is to find out which one makes a stranger read
further and click through, rather than arguing about it.

| Route | Name | What it bets |
|---|---|---|
| `/` | **Editorial** (current) | Serif headline, portrait, card grid. Safe, legible, familiar. |
| `/v/reel` | **Reel** | Cinematic. Black ground, product lit on it, poster-scale type, the career as end credits. Everything a 10-second scan needs sits above the fold. |
| `/v/decisions` | **Decisions** | One fork per project: what I chose, what I left, what it cost. Built on the strongest finding in the hiring research. |
| `/v/feature` | **Feature** | A magazine profile: masthead, opening portrait, drop-cap standfirst, each project a feature with a pull quote and a plate. |
| `/v/monograph` | **Monograph** | A design monograph: strict grid, a lot of white, large plates of the product work. |
| `/v/product-page` | **Product Page** | The practice in the grammar of a B2B SaaS marketing site. |
| `/v/drawing-set` | **Drawing Set** | An issued drawing set with the markup left on. |
| `/lab` | Review room | The live ones side by side at three widths, plus the beacon readout. |

## What the hiring research says

Sources are career and vendor blogs rather than primary research, so treat the
numbers as directional. The qualitative agreement across them is strong.

- A reviewer gives a homepage **10 to 15 seconds** and a whole portfolio **2 to 3
  minutes**. Whatever matters has to be above the fold.
- The screening question is **"is it live, traceable, and scaling?"** Shipped work
  beats beautiful work. A redesign that never shipped counts for very little.
- **Trade-offs are the single most valuable and most commonly skipped section.**
  Reviewers want constraints, what you tried first, where you changed direction,
  and what you gave up.
- **Three to five deep case studies beat seven shallow ones.** Sayantan has six;
  Decisions deliberately leads with four.
- **Depth in one problem space differentiates.** In one Design Lead search only
  about 20% of 250+ applicants matched on specialism.
- **AI fluency is now a signal** — 73% of design managers report needing it
  (Figma, Feb 2026). miiGenie is an asset here and should stay first.

Reel answers the first two findings. Decisions answers the third and fourth.

**Retired** — routes still build, `enabled: false` keeps them out of the split and the lab:

| Route | Why it was cut |
|---|---|
| `/v/control-room` | Reads as an engineer or a scientist, not a product designer. |
| `/v/sketchbook` | Beautiful, but reads as a craft portfolio. Nothing in it says enterprise SaaS. |
| `/v/studio-wall` | Same problem, louder. Personality carried; the product work got buried. |
| `/v/workspace` | Reads as an app, not as a portfolio being presented. |

## What the survivors have in common

All five read as a portfolio someone is presenting: a name, a face, the work,
an about, a way to get in touch. That turned out to be the constraint that
mattered. The cut four were each a stronger *concept* and a weaker *portfolio* —
a control panel, a notebook, a wall, an app. Interesting to look at, wrong job.

The remaining question is register, not format:

- **Editorial / Feature / Monograph** — editorial voice, increasing austerity.
  Feature asks to be read; Monograph asks to be looked at.
- **Product Page** — speaks to a SaaS buyer in their own grammar.
- **Drawing Set** — the one with a hand in it, for personality without losing rigour.

Each project also carries a `note`: one blunt line about the work in the first
person. That is the field a card layout deletes first and the one a reader
remembers, and every variant builds something different around it — pull quote,
margin redline, customer-story quote.

## Running the test

### 1. Look at them yourself

```bash
npm run dev
```

Then `/lab`. Use the frame switcher; the previews render at real device widths
and scale down, so what you see is a true responsive render.

### 2. Moderated sessions (recommended first)

Send people `/?ab=control`, `/?ab=feature`, `/?ab=monograph`,
`/?ab=product-page`, `/?ab=drawing-set`. Watch
them without talking. Then open `/lab` on that machine and read the beacon table:
views, sessions, read-to-end rate, median dwell, and which links were clicked.
`Download JSON` exports the raw events.

The `?ab=` parameter also turns on a small version switcher at the bottom left,
so a reviewer can flip between all of them from any page.

### 3. Live split

In `src/lib/ab.ts`:

```ts
export const SPLIT_AT_ROOT = true;
```

`/` then assigns each new visitor one of the enabled versions at random and redirects
before first paint (no flash). The bucket sticks for `BUCKET_DAYS` (30).
`?ab=<id>` overrides it. Blocked storage falls through to the control.

## Instrumentation

`src/components/AbBeacon.astro` records `view`, `scroll` (25/50/75/100),
`click` on anything with `data-ab="..."`, and `dwell` on page hide.

Events go to `localStorage` **and** to whichever analytics tool is on the page —
it calls `window.plausible`, `window.va` (Vercel) and `window.gtag` if they
exist. Adding real analytics needs no change here.

In the console on any variant:

```js
__ab.report()   // per-variant table
__ab.export()   // raw JSON
__ab.reset()    // clear
```

localStorage is per-browser, so it measures your own sessions and moderated
tests honestly, and nothing more. For real traffic volume, add Plausible or
Vercel Web Analytics and the same events flow there.

## Known limits

- **Home page only.** A visitor bucketed into a variant who opens a case study
  lands back in the current design. If a variant wins, its language has to carry
  through `src/layouts/CaseStudy.astro` before it goes live.
- **No server-side split.** Assignment is client-side because the site is static.
  Fine at portfolio traffic; it costs one redirect. A Vercel middleware split
  would remove that if it ever matters.
- **Sample size.** Portfolio traffic will not reach statistical significance.
  Treat the numbers as a tiebreaker, and moderated sessions as the real signal.

## Files

```
src/lib/ab.ts                  variant registry + SPLIT_AT_ROOT
src/lib/variants.ts            shared content (single source for both variants)
src/components/AbBeacon.astro  instrumentation
src/layouts/Variant.astro      bare layout — no global nav/footer/CSS
src/pages/v/reel.astro
src/pages/v/decisions.astro
src/lib/decisions.ts            the trade-off data — `cost` is yours to fill
src/pages/v/feature.astro
src/pages/v/monograph.astro
src/pages/v/product-page.astro
src/pages/v/drawing-set.astro
src/pages/v/{control-room,sketchbook,studio-wall,workspace}.astro   retired
src/pages/lab.astro            review room
src/layouts/Base.astro         root split + control-arm beacon (home only)
```

Facts in `src/lib/variants.ts` are copied from `src/data/caseStudies.ts`,
`src/pages/index.astro` and `src/pages/about.astro`. Change a fact on the main
site and change it here too.
