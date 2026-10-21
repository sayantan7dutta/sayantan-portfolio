/**
 * Case study content for the Director's Cut site.
 *
 * Condensed from the existing /work/* pages. Every heading and nearly every
 * sentence is Sayantan's own — what changed is length and order, not substance.
 * No figures appear here that are not already published on the site.
 */

export interface CaseSection {
  kicker: string;
  heading: string;
  body: string[];
  /** Key into the image map in the case study page. */
  shot?: string;
  caption?: string;
  /** Rendered as a pulled line rather than body copy. */
  pull?: string;
}

export interface CutCase {
  slug: string;
  lead: string;
  glance: { k: string; v: string }[];
  scope: string[];
  sections: CaseSection[];
  /** Closing reflection — the "what I learned" the old pages all end on. */
  reflection: { heading: string; body: string[] };
}

export const cutCases: CutCase[] = [
  {
    slug: 'miigenie',
    lead: 'miiGenie helps older adults live independently while giving family carers confidence from a distance. I joined as the founding and sole designer when the product was a working Flutter build with no design identity.',
    glance: [
      { k: 'Client', v: 'dAIs Genie · miiGenie' },
      { k: 'Role', v: 'Founding and sole designer' },
      { k: 'Team', v: 'Three people, reporting to the founders' },
      { k: 'Platform', v: 'iOS and Android, Flutter' },
      { k: 'Joined', v: 'March 2026' },
      { k: 'Status', v: 'MVP 1.1 entering production' },
    ],
    scope: [
      'Design function built from nothing: visual language, Figma system, review rhythm',
      'Accessibility baseline: WCAG AA contrast, 48dp targets, large-font resilience',
      '50+ interviews with seniors and carers across Hampshire',
      'Two product surfaces: the senior’s app and the family carer’s view',
    ],
    sections: [
      {
        kicker: 'The problem',
        heading: 'Smartphones quietly assume a user who isn’t 75',
        body: [
          'Older adults want to stay in the homes they know, but daily life gets harder to manage over time. The research surfaced the same three failures again and again: missed appointments, activities and medication; a constant coordination burden landing on family carers; and digital tools that feel confusing or impersonal. Most apps assume steady hands, sharp eyesight, fast reading, and a mental model built from twenty years of software. Many older adults have none of those.',
        ],
        pull: 'The existing “senior app” category mostly patronises: huge buttons wrapped around stripped-down features, designed as if ageing meant losing the right to a capable product.',
      },
      {
        kicker: 'Where it started',
        heading: 'The product I inherited worked. It didn’t speak.',
        body: [
          'When I joined in March 2026 the engineering team had already shipped a functional Flutter build: registration, a voice loop, reminders. What it lacked was an identity. Emoji stood in for icons, components varied screen to screen, error states dead-ended, and nothing about it said “built for you” to a senior.',
          'My first job was not drawing screens. It was giving the company a design function: a visual language, an accessibility baseline, a Figma system the developers could actually build from, and a review rhythm so quality survived contact with the sprint.',
        ],
        shot: 'beforeAfter',
      },
      {
        kicker: 'Research',
        heading: 'Five people the product has to work for',
        body: [
          'Grounded in 50+ interviews and conversations with seniors and carers across Hampshire, with MVP priorities set through co-design sessions and pilot onboarding now underway. The personas are not demographics. They are relationships to independence: each one wants to stay capable, and fears the moment technology proves they aren’t.',
        ],
      },
      {
        kicker: 'The principles it produced',
        heading: 'Voice-first, never voice-only',
        body: [
          'miiGenie leads with the one interface older adults already master: talking. Every core job — reminders, finding a document, recording how the day went, calling for help — can be done by speaking. Every voice step has a typed fallback, because dignity means never being stuck.',
          'The second surface is the family carer: pairing, check-ins and visibility designed as reassurance rather than surveillance. The product is deliberately framed as supportive everyday companionship, with hard guardrails. It is not a therapist and never pretends to be a relationship.',
        ],
        shot: 'trio',
      },
    ],
    reflection: {
      heading: 'Design-complete, entering production',
      body: [
        'This is a live engagement, written from inside the work. The MVP is design-complete and entering production; a fuller case study with pilot results will follow once the first users are in. What is here is already true: the research, the system, and the decisions.',
      ],
    },
  },

  {
    slug: 'hazop',
    lead: 'HAZOP Edge simplifies hazard and operability studies for safety professionals. I was the sole designer, from first domain research through to MVP delivery, alongside a parallel rebuild of the company’s own website.',
    glance: [
      { k: 'Client', v: 'Soter Safety Consulting' },
      { k: 'Role', v: 'Founding Product Designer' },
      { k: 'Field', v: 'B2B SaaS · Industrial safety · UK' },
      { k: 'Period', v: 'June — August 2025' },
      { k: 'Status', v: 'MVP delivered' },
    ],
    scope: [
      'UX strategy across the whole project, from domain research to MVP',
      'A design system and navigation anchored to the HAZOP lifecycle',
      'Compliance reporting standardised, manual data entry reduced',
      'Parallel engagement: the company website rebuilt and migrated off WordPress',
    ],
    sections: [
      {
        kicker: 'The problem',
        heading: 'Complexity was the workflow, not a bug in it',
        body: [
          'Industrial hazard and operability studies run on dense, technical workflows. The people doing them — process engineers, safety managers, risk analysts — needed a system that could carry rigorous, compliance-heavy work without burying them in convoluted interfaces.',
          'The existing tools were built by engineers, for engineers. Dense, unintuitive, and poorly suited to the cross-functional work a HAZOP study actually involves. Teams fell back on spreadsheets and Word documents.',
        ],
      },
      {
        kicker: 'Approach',
        heading: 'How I approached a domain I’d never worked in before',
        body: [
          'Industrial safety was entirely new territory for me. The first three weeks were almost all research, understanding the domain before I opened a design tool.',
        ],
        pull: 'Safety engineers were spending over half of every study on data entry and report formatting, time that should have gone to the safety thinking itself.',
      },
      {
        kicker: 'The design',
        heading: 'Designing for trust in a compliance environment',
        body: [
          'The core principle was reducing cognitive load. Never simplification for its own sake — stripping out friction so users could focus on the safety thinking instead of fighting the tooling.',
          'Navigation and page structure map directly onto the safety assessment lifecycle: identify risks, evaluate operability, track mitigation. The Scenario Summary puts every deviation, its risk rating and its tracked action in one scannable table.',
        ],
        shot: 'wide',
        caption: 'Scenario summary — every deviation, its risk rating and its tracked action in one table',
      },
      {
        kicker: 'Outcome',
        heading: 'A safety assessment that moves through the organisation cleanly',
        body: [
          'The change was operational, not cosmetic. Studies that lived in scattered spreadsheets now move through one accountable process: clear ownership at each step, duplication and reporting rework removed, and compliance evidence produced as a by-product of the work rather than a scramble at the end.',
          'It maps onto how safety professionals already think. It did not try to replace the safety thinking — that part was never the problem.',
        ],
        shot: 'wide2',
        caption: 'Analytics across sites and studies',
      },
    ],
    reflection: {
      heading: 'What this project taught me',
      body: [
        'Working in industrial safety forced me to confront the limits of pattern-matching. Most of the UX patterns I had built up over several years of enterprise work were only partly useful here. Safety professionals have a very specific mental model, shaped by regulatory frameworks and a deep risk-aversion, and a lot of consumer-influenced design patterns work against it.',
        'The domain research, which I almost compressed under timeline pressure, turned out to be the most valuable work on the project.',
      ],
    },
  },

  {
    slug: 'api-lifecycle',
    lead: 'Ericsson’s API vertical was three interconnected B2B products sharing components, patterns and flows. I led design across all three for three years, growing from product designer to design lead.',
    glance: [
      { k: 'Client', v: 'TCS · Ericsson' },
      { k: 'Role', v: 'Product Designer → Lead' },
      { k: 'Field', v: 'B2B SaaS · Telecoms' },
      { k: 'Period', v: '2020 — 2023' },
      { k: 'Status', v: 'Shipped' },
    ],
    scope: [
      'Design across three products: API Console, Portal and Marketplace',
      'One shared design system, built on Ericsson’s and adapted for API tooling',
      'Translating between product owners, tech leads and the design team',
      'Documentation so new designers could onboard without losing what was established',
    ],
    sections: [
      {
        kicker: 'Context',
        heading: 'Three interconnected products. One design ecosystem.',
        body: [
          'The vertical began as an internal B2B tool for Ericsson’s own developers. Stakeholder research identified a market gap: the product could be sold externally, to enterprise API clients. The scope shifted, and the design had to scale to match.',
          'All three products shared components, interaction patterns and user flows. A change in one had downstream effects on the others.',
        ],
        shot: 'wide',
        caption: 'The API Console dashboard',
      },
      {
        kicker: 'The problem',
        heading: 'Three products, zero visual consistency',
        body: [
          'Each product had been designed independently. The same actions looked and behaved differently across Console, Portal and Marketplace, so users moving between them had to relearn basic interactions.',
          'Ericsson’s main design system existed but had not been applied systematically to the API vertical. Some components followed it, others diverged, and there was no clear ownership.',
        ],
      },
      {
        kicker: 'The system',
        heading: 'A shared way of working, not just a set of components',
        body: [
          'The components were the visible half. The half that actually scaled was the operating model around them: ownership of shared patterns, a path for proposing changes, and enough governance that three teams could move at their own pace and still ship something that felt like one product.',
        ],
        shot: 'wide2',
        caption: 'Design detail and component specification',
      },
      {
        kicker: 'The role nobody was filling',
        heading: 'No business analyst on the team, so I became one',
        body: [
          'The team lacked a dedicated business analyst. As the most experienced person on the project, I took on the work of translating between Ericsson’s product owners and our design and engineering team. Product owners came with large, genuinely good feature ideas that were beyond what the team could deliver within the timeline and technical constraints of that version. This happened repeatedly across three years.',
        ],
      },
      {
        kicker: 'Outcome',
        heading: 'Three teams shipping consistently, with no bottleneck in the middle',
        body: [
          'Every version delivered what was committed, and disagreements were resolved before they became blockers. The design system gave the product credibility with enterprise clients as it pivoted to external B2B. Three inconsistent tools became one coherent platform, documented so the work survived both new designers and a change of tooling.',
        ],
      },
    ],
    reflection: {
      heading: 'What I’d do differently, and what this made me realise',
      body: [
        'I built a lot of the system myself before sharing it. In hindsight, getting designers to co-create components from the start would have created faster adoption and stronger ownership. The system was good; the rollout could have been more collaborative.',
        'The moments that mattered most were not the screens I designed. They were the conversations I facilitated — getting a product owner and a tech lead to a shared view of what was possible in a release mattered more than any individual design decision.',
        'By the time I left, I was spending more time on systems, process and cross-functional alignment than on hands-on design. That led directly to the Sherwin-Williams design operations engagement. I had already been doing the job before it had the title.',
      ],
    },
  },

  {
    slug: 'sherwin-williams',
    lead: 'Sherwin-Williams runs one of the largest digital portfolios in the paint industry. The research and design team supporting it had grown faster than its infrastructure. I rebuilt that infrastructure.',
    glance: [
      { k: 'Client', v: 'TCS · Sherwin-Williams' },
      { k: 'Role', v: 'Design Operations Lead' },
      { k: 'Field', v: 'Design operations' },
      { k: 'Team', v: '20+ researchers and designers' },
      { k: 'Period', v: '2023 — 2024' },
      { k: 'Status', v: 'Shipped' },
    ],
    scope: [
      'File architecture rebuilt across Teams and OneDrive',
      'Research templates standardised across three formats',
      'A five-step research-to-design handoff established',
      'Design critique framework introduced',
    ],
    sections: [
      {
        kicker: 'Context',
        heading: 'A team of 20+ with almost no shared infrastructure',
        body: [
          'Research and design assets lived in personal OneDrive folders and scattered Teams channels. Folders existed, but were inconsistent, unlabelled and constantly duplicated.',
          'Designers and researchers regularly redid work that already existed, only to find out afterwards that the asset was there all along. The rework was the symptom. The broken structure was the cause.',
        ],
      },
      {
        kicker: 'Approach',
        heading: 'Before changing anything, understand the real pain points',
        body: [
          'I interviewed researchers and designers separately before proposing any solution. The order mattered: diagnosis first, then structure, then iteration with the team in the loop.',
        ],
      },
      {
        kicker: 'What I built',
        heading: 'From scattered to structured',
        body: [
          'The first fix was the one everything else depended on: a single, navigable file architecture in Teams and OneDrive. Numbered folders, consistent naming, a read-only archive for legacy work, and cross-linked documents so a file could be found from more than one path.',
          'Then templates, standardised across three formats: interview guide, insight deck, and a three-slide maximum stakeholder presentation that leads with business impact.',
        ],
      },
      {
        kicker: 'The part that mattered most',
        heading: 'Connecting research to design',
        body: [
          'The most valuable infrastructure was not a folder or a template. It was a process: a five-step handoff that made research insights part of the design workflow rather than a parallel activity.',
          'Before it, research findings were delivered to stakeholders and then effectively lost. Designers had no consistent access to what had been learned, so they started from scratch, sometimes contradicting decisions research had already informed.',
        ],
        shot: 'figure',
      },
    ],
    reflection: {
      heading: 'What I finished, what remained, and what I learned',
      body: [
        'Completed: the file architecture, the three research templates, the researcher-to-designer handoff, a design critique framework, and cross-linking so documents could be found from more than one path.',
        'In pipeline for the next phase: designer-side infrastructure — Figma library governance, component ownership and version control, and cross-product design consistency.',
        'Each improvement was validated with the team before moving to the next. The feedback was immediate and specific, because people could see what changed and why it mattered.',
      ],
    },
  },

  {
    slug: 'kinvault',
    lead: 'A self-initiated concept for a premium cross-border finance app. Nobody briefed it. Remittance apps treat sending money home as a transaction, and for a lot of families it is closer to inheritance.',
    glance: [
      { k: 'Client', v: 'Self-initiated' },
      { k: 'Role', v: 'Product Design' },
      { k: 'Field', v: 'Concept · Premium fintech' },
      { k: 'Period', v: '2025' },
      { k: 'Status', v: 'Concept' },
    ],
    scope: [
      'Concept, product strategy and full visual system',
      'Shared family vaults on a person-to-person rail',
      'AI-timed transfers and direct bill payment',
      'A measurement plan, with no invented results',
    ],
    sections: [
      {
        kicker: 'The problem',
        heading: 'Remittances are transactional. Families aren’t.',
        body: [
          'Cross-border remittances are a high-frequency, high-trust activity for millions of diaspora families, yet most transfer apps treat them as simple one-way transactions. There is no shared context, no family visibility, no way to save towards a shared goal, no way to pay a bill directly for someone you are supporting from another country.',
          'The result is anxiety at the point of transfer, uncertainty at the receiving end, and no sense of a relationship underneath the money.',
        ],
      },
      {
        kicker: 'The concept',
        heading: 'A Digital Vault-Atelier: vault-grade trust, made for families',
        body: [
          'KinVault Heritage reframes the transfer as a relationship. Its north star is the Digital Vault-Atelier: the security and permanence of a private vault, delivered with the bespoke, considered craft of a studio.',
          'Families connect through a trusted person-to-person rail, then operate shared vaults both sides can see and contribute to. Three capabilities sit on top: AI-driven rate triggers that take the anxiety out of timing, direct bill payment, and progress both sides can watch.',
        ],
        shot: 'wide',
        caption: 'The shared family vault',
      },
      {
        kicker: 'The rule',
        heading: 'Every feature had to neutralise a specific anxiety',
        body: [
          'Timing — “am I sending at a bad rate right now?” — neutralised by plain-language rate alerts shown with the chart, so the user decides rather than the algorithm. Opacity — “did it arrive, was it enough?” — neutralised by shared vaults where both sides see the same balance and contributions.',
        ],
        shot: 'wide2',
        caption: 'Smart transfer, with the rate decision left to the sender',
      },
      {
        kicker: 'The system',
        heading: 'A visual system built to feel permanent',
        body: [
          'The creative direction, “The Financial Atelier”, pairs a deep heritage navy with a pearl surface and an emerald accent for growth. Generous whitespace and vault-grade security cues make a fast app feel as considered and trustworthy as a private bank.',
        ],
      },
    ],
    reflection: {
      heading: 'What I’d measure if this were built',
      body: [
        'This is a concept, so there are no live results to report, and I am not going to put invented percentages on a product no one has used. What I can be specific about is the bet each feature makes and the metric I would test it against: send-flow completion before and after plain-language rate triggers, and inbound “where is my transfer?” contacts before and after shared visibility.',
        'Working on a consumer product after several years of enterprise work exposed how differently the two approach trust. In enterprise UX, trust comes from predictability and compliance signals. In consumer fintech it is emotional — whether the product feels like it is on your side. The hardest design problem was not the feature set. It was tone.',
      ],
    },
  },

  {
    slug: 'amble',
    lead: 'Amble is a speculative bioengineered plant system for the 2065 home. Seven months of foresight research and design for Rodd Design Studio, exhibited at the London Design Festival.',
    glance: [
      { k: 'Client', v: 'Rodd Design × WSA' },
      { k: 'Role', v: 'Project Lead' },
      { k: 'Field', v: 'Speculative · Foresight design' },
      { k: 'Period', v: '2025, seven months' },
      { k: 'Status', v: 'Exhibited' },
    ],
    scope: [
      'Led a multidisciplinary team through an open-ended brief',
      'Research-through-design, end to end',
      'A living system with five domains, woven into the home',
      'Exhibited at the London Design Festival',
    ],
    sections: [
      {
        kicker: 'The problem',
        heading: 'Technology for ageing is built to monitor, not to care',
        body: [
          'Most products aimed at older adults are designed around observation: sensors, alerts, dashboards for somebody else. The brief asked what care could look like in 2065 if it were designed around the person living it rather than the person checking on them.',
        ],
        shot: 'wide',
        caption: 'Two generations, one shared need',
      },
      {
        kicker: 'The reframe',
        heading: 'Design the care service, not the device',
        body: [
          'Independence is held by a whole system, not a device. Once the team stopped designing an object and started designing a service, the work opened up: what the home does, what the household does, and what the wider network does around them.',
        ],
      },
      {
        kicker: 'Leading it',
        heading: 'Leading a multidisciplinary team through ambiguity',
        body: [
          'Seven months with no product to point at and no users who exist yet. Two ideas were built and set aside before the system took its final shape. Leading that meant holding the ambiguity open long enough for the team to find the real question, without letting it run indefinitely.',
        ],
        shot: 'wide2',
        caption: 'Daily routines in the 2065 home',
      },
      {
        kicker: 'Outcome',
        heading: 'From research project to public exhibition',
        body: [
          'Amble resolved into a living system with five domains, woven into the home, with a brand that feels alive rather than engineered. It was exhibited at the London Design Festival.',
        ],
      },
    ],
    reflection: {
      heading: 'What leading a foresight project taught me',
      body: [
        'Seven months on something that cannot be built yet, for people who are not old yet. Strange brief. Foresight work makes you argue about what a thing is for before you are allowed to draw it, and I still think about that when I am scoping ordinary projects.',
      ],
    },
  },
];

export const byCutSlug = Object.fromEntries(cutCases.map((c) => [c.slug, c]));
