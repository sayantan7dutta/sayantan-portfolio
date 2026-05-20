/**
 * Case study registry.
 *
 * TO ADD A NEW CASE STUDY:
 *  1. Add an entry to this array (keep the order you want it shown in).
 *  2. Create src/pages/work/<slug>.astro (copy an existing one as a template).
 *  3. The homepage project list and the "More case studies" grid update from here.
 */

export interface CaseStudy {
  slug: string;
  title: string;       // full title (hero)
  shortTitle: string;  // condensed title (cards)
  context: string;     // short label, emmi-wu style: "B2B SaaS · UK · 2025"
  speculative?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'hazop',
    title: 'UX Strategy for a B2B SaaS Platform in Industrial Safety',
    shortTitle: 'UX Strategy for an Industrial Safety Platform',
    context: 'B2B SaaS · UK · 2025',
  },
  {
    slug: 'api-lifecycle',
    title: 'End-to-End API Lifecycle Platform for a B2B SaaS Offering',
    shortTitle: 'End-to-End API Lifecycle Platform',
    context: 'Enterprise · Ericsson · 2021–2024',
  },
  {
    slug: 'kinvault',
    title: 'KinVault — Remittances Families Can Finally Trust',
    shortTitle: 'KinVault — Remittances Families Can Trust',
    context: 'Speculative · Fintech · 2025',
    speculative: true,
  },
  {
    slug: 'pensaar',
    title: 'Elevating the Digital Presence of a Design Thinking Agency',
    shortTitle: 'Elevating a Design Thinking Agency',
    context: 'Web Redesign · Consulting · 2024',
  },
];

export function otherCaseStudies(currentSlug: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.slug !== currentSlug);
}
