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
const engagements = [
  { stamp: '2020', role: 'Service Design Intern', org: 'Pensaar Design', kind: 'Internship' },
  { stamp: '2020 to 21', role: 'Product Designer', org: 'TCS (Ericsson)', kind: 'Full-time' },
  { stamp: '2021 to 23', role: 'Lead Product Designer', org: 'TCS (Ericsson)', kind: 'Full-time' },
  { stamp: '2023 to 24', role: 'Design Operations Lead', org: 'TCS (Sherwin-Williams)', kind: 'Full-time' },
  { stamp: '2024 to 25', role: 'MA Design Management', org: 'University of Southampton', kind: 'Postgrad' },
  { stamp: 'Dec 24 to Jun 25', role: 'Founding Product Designer', org: 'SparkSoft Ltd', kind: 'Contract · UK' },
  { stamp: 'Jun to Aug 25', role: 'Founding Product Designer', org: 'Soter Safety Consulting', kind: 'Contract · UK' },
  { stamp: '2026 to now', role: 'Founding Product Designer', org: 'dAIs Genie (miiGenie)', kind: 'Contract · UK' },
];

/**
 * Role and company are separate fields so a table can give each its own
 * column. `event` is derived rather than typed out, because eight other
 * variants print the two as one line and one of them splits it back apart
 * on the middot — leaving it hand-written is how the two drift.
 */
export const log = engagements.map((e) => ({ ...e, event: `${e.role} · ${e.org}` }));

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

/**
 * The tool grid and the skill chips, mirroring src/pages/about.astro.
 * Logos live in /public/images/tools and carry their own brand colour, which
 * the grid greys out until you hover a tile.
 */
export const tools = [
  { name: 'Figma', file: 'figma.svg' },
  { name: 'FigJam', file: 'figma.svg' },
  { name: 'Miro', file: 'miro.svg' },
  { name: 'Adobe CC', file: 'adobe.svg' },
  { name: 'Framer', file: 'framer.svg' },
  { name: 'Webflow', file: 'webflow.svg' },
  { name: 'Notion', file: 'notion.svg' },
  { name: 'Linear', file: 'linear.svg' },
  { name: 'Jira', file: 'jira.svg' },
  { name: 'Trello', file: 'trello.svg' },
  { name: 'ServiceNow', file: 'servicenow.svg' },
  { name: 'Loom', file: 'loom.svg' },
  { name: 'GitHub', file: 'github.svg' },
  { name: 'Claude', file: 'claude.svg' },
];

export const skillGroups = [
  {
    label: 'Product design',
    items: ['End-to-end design', 'Discovery & framing', 'Jobs to Be Done', 'User flows', 'Journey mapping', 'Wireframing', 'Hi-fi prototyping', 'Interaction design'],
  },
  {
    label: 'Research & validation',
    items: ['User research', 'Usability testing', 'A/B testing', 'Analytics-informed design', 'Insight synthesis', 'Heuristic evaluation'],
  },
  {
    label: 'Systems & craft',
    items: ['Design systems', 'Component libraries', 'Responsive & mobile-first', 'Accessibility (WCAG)', 'UX copywriting', 'Design tokens'],
  },
  {
    label: 'Delivery & collaboration',
    items: ['Product trio (PM · Eng · Design)', 'Agile / Scrum', 'Roadmap input', 'Stakeholder facilitation', 'Design critiques', 'Async remote'],
  },
];

/** Certifications, as the main site's about page lists them. */
export const certs = [
  { title: 'McKinsey Forward Program', issuer: 'McKinsey & Company', logo: 'mckinsey.svg' },
  { title: 'UX Design Certificate', issuer: 'Google, via Coursera', logo: 'google.svg' },
  { title: 'Member, UX Design Courses', issuer: 'Interaction Design Foundation', logo: 'idf.svg' },
];

/** Awards and community, straight off the CV. Wording is the CV's. */
export const recognition = [
  {
    label: 'Awards',
    items: ['TCS Service & Commitment Award', 'TCS Best Team Award', 'TCS Star Team Award (x2)', 'University Gold Medallist'],
  },
  {
    label: 'Community',
    items: ['Speaker, IDF Southampton webinar (Sep 2026)', 'Active member, London UX design community', 'FOF member', 'FAUX member'],
  },
];

/** Outside of work. `icon` is a CutIcon name. */
export const hobbies = [
  { icon: 'badminton', name: 'Badminton' },
  { icon: 'football', name: 'Football' },
  { icon: 'frisbee', name: 'Frisbee' },
  { icon: 'mocha', name: 'Mocha' },
  { icon: 'mountain', name: 'Trekking' },
  { icon: 'beach', name: 'Beaches' },
  { icon: 'music', name: 'Music' },
  { icon: 'film', name: 'Films' },
] as const;

/** Meant to read as current. Change them whenever they stop being true. */
export const nowItems = [
  { cat: 'Watching', title: 'Vision Quest', sub: 'Marvel, 2026. Ready for Avengers Doomsday.', icon: 'film' },
  { cat: 'Cheering for', title: 'FC Barcelona, always', sub: 'Ready for the Champions League', icon: 'football' },
] as const;

export const podcasts = [
  { name: 'Design as Leverage', url: 'https://open.spotify.com/episode/6ecf3EZgjKQgaDQiaOZdWA?si=d00511d8929a45bf' },
  { name: 'What the UX', url: 'https://open.spotify.com/show/06zCSfjnln033zHotlqvZq?si=b393798010064a30' },
  { name: 'Design Life', url: 'https://open.spotify.com/show/60VdDbOqh5NAqa82JRsZRq?si=ce81b00394a443d8' },
  { name: 'Blueprint of a Designer', url: 'https://open.spotify.com/show/4bUmQl8pJdDD85QLujojqy?si=542c62dd956c4349' },
  { name: 'UX Research Club', url: 'https://open.spotify.com/show/32oJnhH9fSOcFW984CIDfQ?si=1cc3bc0c78df45b3' },
  { name: 'Brave UX', url: 'https://open.spotify.com/show/7j2ocni6A00fzgHkj6TtCK?si=2cedcc89d6264434' },
];

export const contact = {
  email: 'sayantan7dutta@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sayantandutta7/',
  resume: '/resume.pdf',
  base: 'Southampton, UK',
};
