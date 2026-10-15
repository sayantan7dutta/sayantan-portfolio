/**
 * The decisions behind the work.
 *
 * Hiring research is consistent on this: the trade-offs section is the one
 * reviewers care about most and the one almost every portfolio skips. A
 * screening read wants to know what you chose, what you gave up, and whether
 * you can defend it under pressure.
 *
 * HONESTY RULE FOR THIS FILE
 * `question`, `took` and `left` below are inferred from what the live site
 * already says, so they are defensible but they are my reading, not your
 * words — check each one.
 *
 * `cost` is the field that does the work, and it is the one I cannot write
 * for you: only you know what the choice actually gave up. Leave it empty and
 * the page omits that block cleanly; fill it and the decision becomes the
 * strongest thing on the site. Two or three sentences each is plenty.
 */

export interface Decision {
  slug: string;
  /** The fork, as a question. */
  question: string;
  /** The path taken. */
  took: string;
  /** The path not taken. */
  left: string;
  /** What it cost. Yours to write — empty renders as nothing. */
  cost: string;
  /** What came of it. Only facts already on the site. */
  outcome: string;
}

export const decisions: Decision[] = [
  {
    slug: 'miigenie',
    question: 'Give the app an identity first, or give it a type scale first?',
    took: 'Set the accessibility baseline before the visual language. Type sizes, contrast ratios and naming came before colour and brand.',
    left: 'A visual identity, which is the usual first move on a build that has none, and the one that demos better to founders.',
    cost: '',
    outcome: 'The MVP went into production with an accessibility baseline in place rather than retrofitted.',
  },
  {
    slug: 'hazop',
    question: 'Start drawing in week one, or spend it learning what a hazard study is?',
    took: 'Ran domain research first, through to understanding how a HAZOP session actually proceeds, before any screens existed.',
    left: 'Opening with wireframes off the brief, which is faster and looks like progress to a client paying by the month.',
    cost: '',
    outcome: 'Delivered the MVP for HAZOP Edge as sole designer, from first domain research through to launch.',
  },
  {
    slug: 'api-lifecycle',
    question: 'One design system across three products, or let each product keep its own?',
    took: 'Built and held a single system across the whole API vertical, and spent three years defending it.',
    left: 'Per-product component sets, which move faster in the first quarter and cost you by the second year.',
    cost: '',
    outcome: 'Three products ran off one system. I grew from product designer to design lead across the engagement.',
  },
  {
    slug: 'sherwin-williams',
    question: 'Make better research deliverables, or fix the process that was burying them?',
    took: 'Rebuilt the infrastructure itself: the file architecture, the shared templates, and a five-step research-to-design handoff.',
    left: 'Producing better-looking insight decks, which is the visible, creditable work and changes nothing structural.',
    cost: '',
    outcome: 'Rework across six digital products fell 30 to 40 per cent for a team of more than twenty.',
  },
];
