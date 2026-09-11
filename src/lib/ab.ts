/**
 * A/B harness config.
 *
 * Three home-page presentations of the same content. `/` is the control.
 * The two identity variants live at their own routes and can be linked,
 * shared, or split-tested.
 *
 * SPLIT_AT_ROOT is the only switch that changes what a stranger sees.
 * Leave it false while you are still deciding; flip it to true when you
 * actually want traffic divided.
 */

export interface Variant {
  id: string;
  name: string;
  path: string;
  /** What this version is betting on. */
  thesis: string;
  enabled: boolean;
}

export const VARIANTS: Variant[] = [
  {
    id: 'control',
    name: 'Editorial',
    path: '/',
    thesis: 'Serif headline, portrait, card grid. Reads as a well-made designer portfolio. Safe, legible, familiar.',
    enabled: true,
  },
  {
    id: 'drawing-set',
    name: 'Drawing Set',
    path: '/v/drawing-set',
    thesis: 'An issued drawing set with the markup left on. Betting that visible rigour plus a hand in the margins reads as a person, not a template.',
    enabled: true,
  },
  {
    id: 'feature',
    name: 'Feature',
    path: '/v/feature',
    thesis: 'A magazine profile: masthead, opening portrait, a standfirst with a drop cap, each project set as a feature with a pull quote and a plate. Betting that the work reads best when it is given room to be read.',
    enabled: true,
  },
  {
    id: 'monograph',
    name: 'Monograph',
    path: '/v/monograph',
    thesis: 'A design monograph: strict grid, a lot of white, large plates of the actual product work, captions that stay out of the way. Betting that restraint held for six sections is itself the proof.',
    enabled: true,
  },
  {
    // Retired: beautiful, but it reads as a craft/illustration portfolio.
    // Nothing in it says enterprise SaaS, which is where the work is.
    id: 'sketchbook',
    name: 'Sketchbook',
    path: '/v/sketchbook',
    thesis: 'The working notebook, turned a spread at a time: the scribble on the left, the outcome on the right. Betting that showing the thinking beats showing only the polish.',
    enabled: false,
  },
  {
    // Retired: same problem as the sketchbook, louder. The analog framing
    // carried personality but buried the product work.
    id: 'studio-wall',
    name: 'Studio Wall',
    path: '/v/studio-wall',
    thesis: 'Prints pinned up crooked, index cards, sticky notes. Betting that an arrangement no grid would produce is the fastest proof a person made it.',
    enabled: false,
  },
  {
    id: 'product-page',
    name: 'Product Page',
    path: '/v/product-page',
    thesis: 'The practice presented in the grammar of a B2B SaaS marketing site — value prop, logo strip, customer stories, FAQ. Betting that speaking the buyer\u2019s own language is the shortest route to being understood.',
    enabled: true,
  },
  {
    // Retired: it reads as an app, not as a portfolio being presented.
    // The craft argument worked; the format did not.
    id: 'workspace',
    name: 'Workspace',
    path: '/v/workspace',
    thesis: 'The portfolio built as the kind of product it documents: sidebar, table and board views, a detail panel, a command palette. Betting that a SaaS designer proves it fastest by handing you working SaaS.',
    enabled: false,
  },
  {
    // Retired: too engineer-coded for a product designer. Kept so the route
    // and the work survive, but out of the split and out of the lab.
    id: 'control-room',
    name: 'Control Room',
    path: '/v/control-room',
    thesis: 'The site as a process panel. Accurate to the domain, but it reads as an engineer or a scientist rather than a designer.',
    enabled: false,
  },
];

/** Flip to true to divide real traffic at `/`. */
export const SPLIT_AT_ROOT = false;

/** Days a visitor stays in their assigned bucket. */
export const BUCKET_DAYS = 30;
