/**
 * The interview.
 *
 * Every answer below is built only from things the site already states —
 * engagements, dates, team sizes, what shipped. Nothing is invented. They are
 * still my sentences rather than yours, so read them as a first draft in your
 * voice and change anything that does not sound like you.
 *
 * Questions with an empty `a` are omitted from the page. Three are left empty
 * on purpose at the bottom of this file: they are the ones only you can answer,
 * and they are the three an interviewer will lean forward for.
 */

export interface QA {
  q: string;
  a: string;
  /** Optional project this answer points at. */
  link?: { label: string; href: string };
}

export const interview: QA[] = [
  {
    q: 'What kind of designer are you, in one answer?',
    a: 'I work on software people did not choose. A safety engineer running a hazard study, a developer wiring up an API, someone in their seventies checking whether they took their tablets. It arrived with the job or with the diagnosis. That changes what good means: the measure is whether someone gets through the task on a bad day, quickly, while worried, without the interface adding to it.',
  },
  {
    q: 'Why enterprise, when consumer work is easier to show off?',
    a: 'Partly because I am better at it. The hard part of enterprise software is almost never the interface, it is understanding a job well enough to get out of its way, and I like that part. It also means the work lasts. The API console I designed at Ericsson ran for three years with me on it, and I had to live with my own early decisions rather than ship and move on.',
    link: { label: 'Ericsson API Console', href: '/work/api-lifecycle' },
  },
  {
    q: 'What is the hardest thing you have shipped?',
    a: 'HAZOP Edge, probably. A hazard and operability study is a room of engineers working through the ways a plant might kill someone. They move fast and they argue, and the software has to keep up with the room rather than slow it down. I spent the first weeks learning how a session actually proceeds before drawing anything, which felt slow to everyone including me, and was the only reason the thing worked.',
    link: { label: 'HAZOP Edge', href: '/work/hazop' },
  },
  {
    q: 'What is it like being the only designer?',
    a: 'I have done it three times now. At dAIs Genie there are three of us on the product and I report to the founders, so there is no design department to hide behind and nobody else to blame for the type scale. You stop producing artefacts for their own sake very quickly. You also learn that if you did not write it down, it does not exist, because there is no second designer carrying it in their head.',
    link: { label: 'miiGenie', href: '/work/miigenie' },
  },
  {
    q: 'You list design operations. Is that not just admin?',
    a: 'It looked like admin. At Sherwin-Williams I supported a research and design team of more than twenty across six digital products, and the actual problem was that research kept arriving too late to change anything. I could have made better-looking insight decks. Instead I rebuilt the file architecture, the shared templates and a five-step research-to-design handoff. Rework across the six products came down 30 to 40 per cent.',
    link: { label: 'Design operations at Sherwin-Williams', href: '/work/sherwin-williams' },
  },
  {
    q: 'How do you work with engineers?',
    a: 'Closely, and early. I sit in the product trio through build rather than handing over and leaving. At Ericsson that meant one design system across three products, which is slower in the first quarter and cheaper by the second year, and which I spent three years defending. On miiGenie it means every flow is specified with its edge states in Figma, so what ships is what was designed.',
  },
  {
    q: 'What does accessibility actually mean in your work?',
    a: 'A constraint I set at the start, not a pass at the end. On miiGenie the users are in their seventies and eighties, so it was the first thing rather than a late audit: WCAG AA contrast, 48dp minimum touch targets, large-font resilience, and copy written for reading ease. Every voice step has a typed fallback, because dignity means never being stuck.',
    link: { label: 'miiGenie', href: '/work/miigenie' },
  },
  {
    q: 'Why the speculative project about 2065?',
    a: 'Seven months with Rodd Design on Amble, a bioengineered plant system for the home of 2065, exhibited at the London Design Festival. It cannot be built yet and it is for people who are not old yet. Strange brief. I took it because foresight work makes you argue about what a thing is for before you are allowed to draw it, and I still think about it when I am scoping ordinary projects.',
    link: { label: 'Amble', href: '/work/amble' },
  },

  // ── Over to you ────────────────────────────────────────────────────────
  // These three are the ones an interviewer actually leans forward for, and
  // the ones I cannot write without inventing. Fill an `a` and it appears.
  {
    q: 'Tell me about a decision you would make differently.',
    a: '',
  },
  {
    q: 'What do you need from a team to do your best work?',
    a: '',
  },
  {
    q: 'What are you not good at?',
    a: '',
  },
];
