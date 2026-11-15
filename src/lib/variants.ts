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
  /** Tag next to the project: what kind of design work it was. */
  kind: string;
  /** Tag next to the project: the industry it was built for. */
  field: string;
  period: string;
  status: Status;
  summary: string;
  /** One blunt line in Sayantan’s own voice — the thing a card usually sands off. */
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
    kind: 'B2C Mobile App',
    field: 'Health Tech & Social Care',
    period: '2026 to now',
    status: 'LIVE',
    summary:
      'Founding and sole designer on miiGenie, a voice-first companion for older adults living independently, with a second view built for the family member checking in. Three people on the product team, reporting to the founders.',
    note: 'The Flutter build already worked when I joined. It just didn’t look like anything, and it wasn’t readable if your eyesight isn’t what it was. Type sizes, contrast and naming took the first few months.',
    href: '/work/miigenie',
  },
  {
    tag: 'SAF-301',
    slug: 'hazop',
    title: 'UX Strategy for a B2B SaaS Platform in Industrial Safety',
    short: 'HAZOP Edge, industrial safety platform',
    org: 'Soter Safety Consulting',
    role: 'Founding Product Designer',
    sector: 'B2B SaaS · UK',
    kind: 'B2B SaaS',
    field: 'Manufacturing',
    period: 'Jun to Aug 2025',
    status: 'SHIPPED',
    summary:
      'Sole designer for HAZOP Edge, a platform that simplifies hazard and operability studies for safety professionals. From first domain research through to MVP delivery, alongside a parallel rebuild of the company website.',
    note: 'A HAZOP study is a room of engineers working through the ways a plant might kill someone. They move fast and they argue. Designing for that ruled out most of what I would normally reach for.',
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
    kind: 'B2B SaaS',
    field: 'IT & Telecom',
    period: '2020 to 2023',
    status: 'SHIPPED',
    summary:
      "Led product design and the design system across Ericsson’s three-product API vertical, a B2B SaaS suite centred on the API Console, growing from product designer to design lead across a three-year engagement.",
    note: 'Three years on one vertical. Long enough that I had to live with my own early decisions, and quietly redo a couple of them.',
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
    kind: 'Design Ops',
    field: 'Manufacturing & Retail',
    period: '2023 to 2024',
    status: 'SHIPPED',
    summary:
      'Rebuilt the shared infrastructure for a research and design team of more than 20, across six digital products: the file architecture, the research templates, and a proper research-to-design handoff.',
    note: 'Not glamorous. Folder structures, shared templates, and a five-step handoff so research reached design while it could still change something. Rework across the six products came down 30 to 40 per cent.',
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
    kind: 'Service Design',
    field: 'Health & Social Care',
    period: '2025',
    status: 'EXHIBITED',
    summary:
      'Amble, a speculative bioengineered plant system for the 2065 home. Seven months of foresight research and design for Rodd Design Studio, exhibited at the London Design Festival.',
    note: 'Seven months on something that cannot be built yet, for people who are not old yet. Strange brief. I still think about it when I am scoping ordinary ones.',
    href: '/work/amble',
  },
  {
    tag: 'FIN-201',
    slug: 'kinvault',
    title: 'KinVault Heritage, the Digital Vault-Atelier',
    short: 'KinVault Heritage, a digital vault-atelier',
    org: 'Self-initiated',
    role: 'Product Design',
    sector: 'Concept · Premium Fintech',
    kind: 'B2C Mobile App',
    field: 'Fintech',
    period: '2025',
    status: 'CONCEPT',
    summary:
      'A self-initiated concept for a premium cross-border finance app that bridges heritage banking and modern remittance, with shared family vaults, AI-timed transfers, and direct bill payment.',
    note: 'Nobody briefed this one. Remittance apps treat money as a transaction, and for a lot of families sending it home it is closer to inheritance. I wanted to see what the other version looked like.',
    href: '/work/kinvault',
  },
];

/** Career log, oldest first — same entries as the About page timeline. */
export const log = [
  { stamp: '2020', event: 'Service Design Intern · Pensaar Design', kind: 'Internship' },
  { stamp: '2020 to 21', event: 'Product Designer · TCS (Ericsson)', kind: 'Full-time' },
  { stamp: '2021 to 23', event: 'Lead Product Designer · TCS (Ericsson)', kind: 'Full-time' },
  { stamp: '2023 to 24', event: 'Design Operations Lead · TCS (Sherwin-Williams)', kind: 'Full-time' },
  { stamp: '2024 to 25', event: 'MA Design Management · University of Southampton', kind: 'Postgrad' },
  { stamp: 'Dec 24 to Jun 25', event: 'Founding Product Designer · SparkSoft Ltd', kind: 'Contract · UK' },
  { stamp: 'Jun to Aug 25', event: 'Founding Product Designer · Soter Safety Consulting', kind: 'Contract · UK' },
  { stamp: '2026 to now', event: 'Founding Product Designer · dAIs Genie (miiGenie)', kind: 'Contract · UK' },
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

/**
 * Selected clients, the same set and the same logo files the main site uses.
 * `h` is the optical height in px: these marks are drawn at different weights,
 * so a single height makes the light ones disappear next to the heavy ones.
 * `w` is that height at the file's own aspect ratio, so a lazily loaded logo
 * cannot change the width of a strip that is already sliding.
 */
export const clients = [
  { name: 'Ericsson', logo: '/images/clients/ericsson.png', w: 46, h: 40 },
  { name: 'McAfee', logo: '/images/clients/mcafee.png', w: 138, h: 27 },
  { name: 'Sherwin-Williams', logo: '/images/clients/sherwin-williams.png', w: 116, h: 33 },
  { name: 'ITC', logo: '/images/clients/itc.png', w: 40, h: 48 },
  { name: 'Soter Safety Consulting', logo: '/images/clients/soter-safety.png', w: 212, h: 38 },
  { name: 'Pensaar Design', logo: '/images/clients/pensaar.png', w: 86, h: 50 },
  { name: 'CGAP', logo: '/images/clients/cgap.png', w: 76, h: 29 },
];

export const contact = {
  email: 'sayantan7dutta@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sayantandutta7/',
  resume: '/resume.pdf',
  base: 'Southampton, UK',
};
