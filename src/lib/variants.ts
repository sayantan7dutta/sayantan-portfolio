/**
 * Shared content for the identity variants (/v/*).
 *
 * These pages are alternate *presentations* of the same facts the main site
 * already states. Nothing here is invented — every field traces back to
 * src/data/caseStudies.ts, src/pages/index.astro or src/pages/about.astro.
 * If you change a fact on the main site, change it here too.
 */

export type Status = 'LIVE' | 'CONCEPT' | 'SHIPPED' | 'EXHIBITED' | 'ARCHIVED';

export interface VariantProject {
  /** Instrument-style loop tag. 100 AI · 200 fintech · 300 safety · 400 platform · 500 ops · 600 foresight */
  tag: string;
  slug: string;
  title: string;
  short: string;
  /** Who it was for, as it reads on the main site. */
  org: string;
  role: string;
  sector: string;
  period: string;
  status: Status;
  summary: string;
  /** One blunt line in Sayantan's own voice — the thing a card usually sands off. */
  note: string;
  href: string;
}

export const projects: VariantProject[] = [
  {
    tag: 'AIC-101',
    slug: 'miigenie',
    title: 'Designing a Voice-First AI Companion for Older Adults',
    short: 'miiGenie, a voice-first AI companion',
    org: 'dAIs Genie · miiGenie',
    role: 'Founding Product Designer',
    sector: 'AI Companion · iOS & Android',
    period: '2026 — now',
    status: 'LIVE',
    summary:
      'Founding and sole designer for miiGenie, a voice-first companion that helps older adults live independently while giving family carers confidence. Three-person product, engineering and design team reporting to the founders.',
    note: 'Inherited a working Flutter build with no design identity. Gave it a system, a voice, and an accessibility baseline.',
    href: '/work/miigenie',
  },
  {
    tag: 'FIN-201',
    slug: 'kinvault',
    title: 'KinVault Heritage, the Digital Vault-Atelier',
    short: 'KinVault Heritage, a digital vault-atelier',
    org: 'Self-initiated',
    role: 'Product Design',
    sector: 'Concept · Premium Fintech',
    period: '2025',
    status: 'CONCEPT',
    summary:
      'A self-initiated concept for a premium cross-border finance app that bridges heritage banking and modern remittance, with shared family vaults, AI-timed transfers, and direct bill payment.',
    note: 'Nobody briefed this one. I wanted to find out what cross-border money feels like when it is treated as inheritance rather than a transaction.',
    href: '/work/kinvault',
  },
  {
    tag: 'SAF-301',
    slug: 'hazop',
    title: 'UX Strategy for a B2B SaaS Platform in Industrial Safety',
    short: 'HAZOP Edge, industrial safety platform',
    org: 'Soter Safety Consulting',
    role: 'Founding Product Designer',
    sector: 'B2B SaaS · UK',
    period: 'Jun — Aug 2025',
    status: 'SHIPPED',
    summary:
      'Sole designer for HAZOP Edge, a platform that simplifies hazard and operability studies for safety professionals. From first domain research through to MVP delivery, alongside a parallel rebuild of the company website.',
    note: 'A HAZOP study is a room full of engineers imagining how a plant kills someone. The software had to keep up with that conversation, not slow it down.',
    href: '/work/hazop',
  },
  {
    tag: 'API-401',
    slug: 'api-lifecycle',
    title: 'Designing a B2B SaaS API Console for Ericsson',
    short: 'API Console · Ericsson',
    org: 'TCS · Ericsson',
    role: 'Product Designer → Lead',
    sector: 'B2B SaaS · IT',
    period: '2020 — 2023',
    status: 'SHIPPED',
    summary:
      "Led product design and the design system across Ericsson's three-product API vertical, a B2B SaaS suite centred on the API Console, growing from product designer to design lead across a three-year engagement.",
    note: 'Three years on one vertical. Long enough to watch my own early decisions come back and ask to be defended.',
    href: '/work/api-lifecycle',
  },
  {
    tag: 'OPS-501',
    slug: 'sherwin-williams',
    title: 'Building Design Operations at Scale',
    short: 'Design operations at Sherwin-Williams',
    org: 'TCS · Sherwin-Williams',
    role: 'Design Ops Lead',
    sector: 'Design Ops',
    period: '2023 — 2024',
    status: 'SHIPPED',
    summary:
      'Rebuilt the shared infrastructure for a research and design team of more than 20, across six digital products: the file architecture, the research templates, and a proper research-to-design handoff.',
    note: 'Unglamorous work. Twenty people stopped losing an afternoon a week to finding things, which is the only metric I cared about.',
    href: '/work/sherwin-williams',
  },
  {
    tag: 'FOR-601',
    slug: 'amble',
    title: 'Designing Care for an Ageing Society in 2065',
    short: 'Amble, care in 2065',
    org: 'Rodd Design × WSA',
    role: 'Project Lead',
    sector: 'Speculative · Foresight Design',
    period: '2025',
    status: 'EXHIBITED',
    summary:
      'Amble, a speculative bioengineered plant system for the 2065 home. Seven months of foresight research and design for Rodd Design Studio, exhibited at the London Design Festival.',
    note: 'Seven months designing something that cannot be built yet, for people who are not old yet. It changed how I read every brief since.',
    href: '/work/amble',
  },
];

/** Career log, oldest first — same entries as the About page timeline. */
export const log = [
  { stamp: '2020', event: 'Service Design Intern · Pensaar Design', kind: 'Internship' },
  { stamp: '2020-21', event: 'Product Designer · TCS (Ericsson)', kind: 'Full-time' },
  { stamp: '2021-23', event: 'Lead Product Designer · TCS (Ericsson)', kind: 'Full-time' },
  { stamp: '2023-24', event: 'Design Operations Lead · TCS (Sherwin-Williams)', kind: 'Full-time' },
  { stamp: '2024-25', event: 'MA Design Management · University of Southampton', kind: 'Postgrad' },
  { stamp: 'Dec 24 — Jun 25', event: 'Founding Product Designer · SparkSoft Ltd', kind: 'Contract · UK' },
  { stamp: 'Jun — Aug 25', event: 'Founding Product Designer · Soter Safety Consulting', kind: 'Contract · UK' },
  { stamp: '2026 — now', event: 'Founding Product Designer · dAIs Genie (miiGenie)', kind: 'Contract · UK' },
];

/** Disciplines, plotted on the control-room competency grid. */
export const disciplines = [
  { name: 'Design systems', depth: 5, reach: 4 },
  { name: 'UX strategy', depth: 5, reach: 5 },
  { name: 'Enterprise workflows', depth: 5, reach: 3 },
  { name: 'Research synthesis', depth: 4, reach: 4 },
  { name: 'Design operations', depth: 4, reach: 5 },
  { name: 'Accessibility (WCAG)', depth: 4, reach: 3 },
  { name: 'Service design', depth: 3, reach: 4 },
  { name: 'Foresight / speculative', depth: 3, reach: 2 },
];

export const contact = {
  email: 'sayantan7dutta@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sayantan7dutta/',
  resume: '/resume.pdf',
  base: 'Southampton, UK',
};
