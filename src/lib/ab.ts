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
    id: 'control-room',
    name: 'Control Room',
    path: '/v/control-room',
    thesis: 'The site is a process panel. Betting that the fastest way to prove you design high-stakes systems is to make the portfolio itself behave like one.',
    enabled: true,
  },
  {
    id: 'drawing-set',
    name: 'Drawing Set',
    path: '/v/drawing-set',
    thesis: 'The site is an issued drawing set with redline markup. Betting that visible rigour and a hand in the margins reads as a person, not a template.',
    enabled: true,
  },
];

/** Flip to true to divide real traffic at `/`. */
export const SPLIT_AT_ROOT = false;

/** Days a visitor stays in their assigned bucket. */
export const BUCKET_DAYS = 30;
