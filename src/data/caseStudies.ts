/**
 * Case study registry.
 *
 * TO ADD A NEW CASE STUDY:
 *  1. Add an entry to this array (keep the order you want it shown in).
 *  2. Create src/pages/work/<slug>.astro (copy an existing one as a template).
 *  3. The homepage project list and the "More case studies" grid update from here.
 */

import type { ImageMetadata } from 'astro';
import hazopThumb from '../assets/work/hazop/analytics-dashboard.jpg';
import ambleThumb from '../assets/work/amble/hero.jpg';
import ericssonThumb from '../assets/work/api-lifecycle/hero.png';
import kinvaultThumb from '../assets/work/kinvault/dashboard.jpg';

export interface CaseStudy {
  slug: string;
  title: string;       // full title (hero)
  shortTitle: string;  // condensed title (cards)
  context: string;     // short label, emmi-wu style: "B2B SaaS · UK · 2025"
  speculative?: boolean;
  thumb?: ImageMetadata; // optional thumbnail for the "More case studies" grid
  coverStat?: string;    // when no image exists, show a bold stat instead
  coverLabel?: string;   // supporting label for coverStat
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'miigenie',
    title: 'Designing a Voice-First AI Companion for Older Adults',
    shortTitle: 'miiGenie, a Voice-First AI Companion',
    context: 'AI Companion · iOS & Android · Current',
  },
  {
    slug: 'kinvault',
    title: 'KinVault Heritage, the Digital Vault-Atelier',
    shortTitle: 'KinVault Heritage, a Digital Vault-Atelier',
    context: 'Concept · Premium Fintech · 2025',
    speculative: true,
    thumb: kinvaultThumb,
  },
  {
    slug: 'hazop',
    title: 'UX Strategy for a B2B SaaS Platform in Industrial Safety',
    shortTitle: 'UX Strategy for an Industrial Safety Platform',
    context: 'B2B SaaS · UK · 2025',
    thumb: hazopThumb,
  },
  {
    slug: 'api-lifecycle',
    title: 'Designing a B2B SaaS API Console for Ericsson',
    shortTitle: 'B2B SaaS API Console · Ericsson',
    context: 'B2B SaaS · IT · 2020-2023',
    thumb: ericssonThumb,
  },
  {
    slug: 'sherwin-williams',
    title: 'Building Design Operations at Scale',
    shortTitle: 'Building Design Operations at Scale',
    context: 'Design Ops · Sherwin-Williams · 2024',
    coverStat: '30-40%',
    coverLabel: 'less rework across a 20+ person design team',
  },
  {
    slug: 'amble',
    title: 'Designing Care for an Ageing Society in 2065',
    shortTitle: 'Amble, a Speculative Service Design',
    context: 'Speculative Design · Rodd Design · 2025',
    speculative: true,
    thumb: ambleThumb,
  },
];

/**
 * Returns the case studies to feature in the "More case studies" grid —
 * the `limit` entries that follow the current one in order, wrapping around.
 */
export function otherCaseStudies(currentSlug: string, limit = 3): CaseStudy[] {
  const idx = caseStudies.findIndex((cs) => cs.slug === currentSlug);
  if (idx === -1) return caseStudies.slice(0, limit);
  const rotated = [...caseStudies.slice(idx + 1), ...caseStudies.slice(0, idx)];
  return rotated.slice(0, limit);
}
