# Identity variants + A/B test

Three presentations of the same six projects. The content is identical; the
*position* is not. The point is to find out which one makes a stranger read
further and click through, rather than arguing about it.

| Route | Name | What it bets |
|---|---|---|
| `/` | **Editorial** (current) | Serif headline, portrait, card grid. Safe, legible, familiar — and the exact shape most designer portfolios now share. |
| `/v/control-room` | **Control Room** | The site behaves like a process panel: loop tags, a P&ID schematic, a dense index table, an event log, a competency matrix. Borrowed from the process-safety world the work actually comes from. |
| `/v/drawing-set` | **Drawing Set** | The site is an issued drawing set: sheets, title blocks, registration marks, dimension lines, a career as revisions A–H, and handwritten redlines you can toggle off. |
| `/lab` | Review room | All three side by side at desktop / tablet / phone width, plus the beacon readout. |

Both variants are `noindex` — they are experiments, not new content.

## Why these two

The brief was "less AI-generated, more identity". Those are the same problem.
A page reads as generated when nothing in it could only have come from one
person: generic dark-plus-one-accent, a serif hero, a 3-up stat row, evenly
spaced cards, no voice in the margins.

So neither variant is a restyle. Each takes a form from the domain the work
comes from — hazard studies, API infrastructure, safety platforms — and commits
to it completely. A card grid could belong to anyone. An instrument index with
`SAF-301` on it could not.

Each project also carries a `note`: one blunt line about the work in the first
person. That is the field a card layout deletes first and the one a reader
remembers.

## Running the test

### 1. Look at them yourself

```bash
npm run dev
```

Then `/lab`. Use the frame switcher; the previews render at real device widths
and scale down, so what you see is a true responsive render.

### 2. Moderated sessions (recommended first)

Send three people `/?ab=control`, `/?ab=control-room`, `/?ab=drawing-set`. Watch
them without talking. Then open `/lab` on that machine and read the beacon table:
views, sessions, read-to-end rate, median dwell, and which links were clicked.
`Download JSON` exports the raw events.

The `?ab=` parameter also turns on a small version switcher at the bottom left,
so a reviewer can flip between all three on one page.

### 3. Live split

In `src/lib/ab.ts`:

```ts
export const SPLIT_AT_ROOT = true;
```

`/` then assigns each new visitor one of the three at random and redirects
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
src/pages/v/control-room.astro
src/pages/v/drawing-set.astro
src/pages/lab.astro            review room
src/layouts/Base.astro         root split + control-arm beacon (home only)
```

Facts in `src/lib/variants.ts` are copied from `src/data/caseStudies.ts`,
`src/pages/index.astro` and `src/pages/about.astro`. Change a fact on the main
site and change it here too.
