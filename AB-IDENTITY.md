# Identity variants + A/B test

Three presentations of the same six projects. The content is identical; the
*position* is not. The point is to find out which one makes a stranger read
further and click through, rather than arguing about it.

| Route | Name | What it bets |
|---|---|---|
| `/` | **Editorial** (current) | Serif headline, portrait, card grid. Safe, legible, familiar — and the exact shape most designer portfolios now share. |
| `/v/drawing-set` | **Drawing Set** | An issued drawing set with the markup left on: sheets, title blocks, registration marks, a career as revisions A–H, and handwritten redlines you can toggle off. |
| `/v/sketchbook` | **Sketchbook** | The working notebook, turned a spread at a time. Left page: the scribble, the pen sketch, the blunt line. Right page: the outcome. Arrow keys turn pages; `#p3` deep-links a spread. |
| `/v/studio-wall` | **Studio Wall** | The wall behind the desk. Prints pinned up crooked, index cards for the timeline, sticky notes carrying the blunt lines. Nothing lines up, on purpose. |
| `/lab` | Review room | The live ones side by side at desktop / tablet / phone width, plus the beacon readout. |

**Retired:** `/v/control-room` — the site as a process control panel. Accurate to the
domain, but it reads as an engineer or a scientist rather than a product designer.
Route still builds; `enabled: false` keeps it out of the split and the lab.

Both variants are `noindex` — they are experiments, not new content.

## Why this family

The brief was "less AI-generated, more identity". Those are the same problem.
A page reads as generated when nothing in it could only have come from one
person: generic dark-plus-one-accent, a serif hero, a 3-up stat row, evenly
spaced cards, no voice in the margins.

So none of these are restyles. Each is an analog artefact a designer actually
makes — a drawing set, a notebook, a wall — rendered properly, with paper,
a hand, and the mess left in. A card grid could belong to anyone. A spread with
a pen sketch on the left and the shipped screen on the right could not.

Each project also carries a `note`: one blunt line about the work in the first
person. That is the field a card layout deletes first and the one a reader
remembers. All three variants build a different element around it — margin
redline, notebook annotation, sticky note.

## Running the test

### 1. Look at them yourself

```bash
npm run dev
```

Then `/lab`. Use the frame switcher; the previews render at real device widths
and scale down, so what you see is a true responsive render.

### 2. Moderated sessions (recommended first)

Send people `/?ab=control`, `/?ab=drawing-set`, `/?ab=sketchbook`,
`/?ab=studio-wall`. Watch
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
src/pages/v/drawing-set.astro
src/pages/v/sketchbook.astro
src/pages/v/studio-wall.astro
src/pages/v/control-room.astro   retired, still builds
src/pages/lab.astro            review room
src/layouts/Base.astro         root split + control-arm beacon (home only)
```

Facts in `src/lib/variants.ts` are copied from `src/data/caseStudies.ts`,
`src/pages/index.astro` and `src/pages/about.astro`. Change a fact on the main
site and change it here too.
