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
    id: 'sketchbook',
    name: 'Sketchbook',
    path: '/v/sketchbook',
    thesis: 'The working notebook, turned a spread at a time: the scribble on the left, the outcome on the right. Betting that showing the thinking beats showing only the polish.',
    enabled: true,
  },
  {
    id: 'studio-wall',
    name: 'Studio Wall',
    path: '/v/studio-wall',
    thesis: 'Prints pinned up crooked, index cards, sticky notes. Betting that an arrangement no grid would produce is the fastest proof a person made it.',
    enabled: true,
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
