/**
 * Case study content for the Director's Cut site.
 *
 * Condensed from the existing /work/* pages. Every heading and nearly every
 * sentence is Sayantan's own — what changed is length and order, not substance.
 * No figures appear here that are not already published on the site.
 */

/** Structured blocks, so a section can be more than paragraphs. */
export type Block =
  /** Numbered principle cards: 01 / title / body. */
  | { kind: 'cards'; items: { t: string; b: string }[] }
  /** A stage-by-stage table: what hurt, and what the design did about it. */
  | { kind: 'journey'; cols: [string, string, string]; rows: [string, string, string][] }
  /** Research personas, grouped by role. */
  | { kind: 'personas'; items: { role: string; age: string; name: string; note: string }[] }
  /** The figures a case ends on. */
  | { kind: 'stats'; items: { n: string; l: string }[] }
  /** A plain comparison table. */
  | { kind: 'table'; cols: string[]; rows: string[][] }
  /** Before / after as two labelled columns of text. */
  | { kind: 'compare'; before: { h: string; items: string[] }; after: { h: string; items: string[] } };

export interface CaseSection {
  kicker: string;
  heading: string;
  body: string[];
  /** Key into the image map in the case study page. */
  shot?: string;
  caption?: string;
  /** Alt for a `wide` shot. Same reasoning as `alts`: the caption labels the
      screen, it does not describe what is on it. */
  alt?: string;
  /** One caption per phone, for the `trio`, `pair` and `solo` shots. */
  caps?: string[];
  /**
   * One alt per phone. Separate from `caps` on purpose: a caption here makes
   * an argument about the screen, which is not the same as describing it, so
   * leaning on it as the text alternative hands a screen reader the claim
   * and withholds the evidence.
   */
  alts?: string[];
  /** Rendered as a pulled line rather than body copy. */
  pull?: string;
  /** Structured content under the prose. */
  block?: Block;
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
        kicker: 'Approach',
        heading: 'Voice-first, never voice-only, and two users at once',
        body: [
          'miiGenie leads with the one interface older adults already master: talking. Every core job can be done by speaking: reminders, finding a document, recording how the day went, calling for help. And every voice step has a typed fallback, because dignity means never being stuck.',
          'The second design surface is the family carer: pairing, check-ins, and visibility designed as reassurance rather than surveillance. The product is deliberately framed as supportive everyday companionship, with hard guardrails: it is not a therapist and never pretends to be a relationship.',
        ],
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
        kicker: 'What I built first',
        heading: 'A design function, not a set of screens',
        body: [],
        block: {
          kind: 'cards',
          items: [
            { t: 'A visual language with a temperature', b: 'Warm cream surfaces, deep teal actions, generous type. Calm over clever, familiarity over fashion.' },
            { t: 'An accessibility baseline, not an afterthought', b: 'WCAG AA contrast, 48dp minimum touch targets, large-font resilience, and copy written for reading ease.' },
            { t: 'A component library the team builds from', b: 'Every flow specified with its edge states in Figma, so what ships is what was designed.' },
          ],
        },
      },
      {
        kicker: 'Research',
        heading: 'Four people the product has to work for',
        body: [
          'Grounded in 50+ interviews and conversations with seniors and carers across Hampshire, with MVP priorities set through co-design sessions and pilot onboarding now underway. The personas are not demographics. They are relationships to independence: each one wants to stay capable, and fears the moment technology proves they aren’t.',
        ],
        block: {
          kind: 'personas',
          items: [
            { role: 'Senior', age: '70 to 75', name: 'Living alone, away from family', note: 'Wants to run her own life: medication on time, paperwork in order, family a tap away. Anxious that technology will make her feel stupid.' },
            { role: 'Senior', age: '75 to 85', name: 'Recently moved, network lost', note: 'New town, old habits gone. Wants to rebuild a routine and a social circle without depending on the family he moved closer to.' },
            { role: 'Senior', age: '70 to 80', name: 'Prefers their own company', note: 'Independent by choice. No interest in community groups; wants appointments, documents and health admin handled without fuss.' },
            { role: 'Carer', age: '45 to 66', name: 'The carer who still has a job', note: 'Sandwich generation or still working full-time, helping a parent with life admin from a distance. Needs visibility without surveillance, and an app self-explanatory enough that she never has to be tech support.' },
          ],
        },
      },
      {
        kicker: 'The senior journey',
        heading: 'Six stages, and what the design does about each',
        body: [],
        block: {
          kind: 'journey',
          cols: ['Stage', 'What hurts', 'What the design does'],
          rows: [
            ['Awareness', 'Hard to gauge whether a tech brand can be trusted at all.', 'A warm, human identity, and a carer-led introduction path so the first contact comes from family, not an advert.'],
            ['Consideration', 'Comparing apps is exhausting and time-consuming.', 'One clear promise, practical daily help, instead of a feature list.'],
            ['Trial', 'Fear of being harassed for feedback or trapped by a card on file.', 'A one-month trial on phone-number registration alone. Feedback is gathered in context, never by ambush.'],
            ['Purchase', 'Working out what the app costs, and when, is genuinely confusing.', 'The subscription page states the trial end date and terms in plain sentences before any commitment.'],
            ['Service', 'Subscription tiers written for marketers, not for seniors.', 'Two tiers only, each explained in words rather than a comparison matrix.'],
            ['Retention', 'Deciding whether the app deserves a place in their life.', 'The app earns it through routine: reminders that fire, documents that surface, a day that feels held together.'],
          ],
        },
      },
      {
        kicker: 'Voice interaction',
        heading: 'Voice-first, never voice-only',
        body: [
          'Voice is the interface older adults already know, but it is also the one that fails most publicly. So the voice loop is designed around patience and forgiveness: the app waits without a countdown, every voice step offers “type instead”, and a failed attempt produces help rather than a dead end.',
        ],
        shot: 'trio',
        caps: [
          'Onboarding is a conversation: four spoken questions, each with a typed fallback',
          'No countdown anxiety: speak naturally, the app waits until you are done',
          'Failure forgives: practical tips, try again, or switch to typing, never a dead end',
        ],
        alts: [
          'Onboarding, step two of four, asking which town you live in, with the spoken answer “Southampton” shown above a typed alternative and a continue button.',
          'The listening state: a waveform, the line “speak naturally, I’ll wait until you’re done”, and a tap to stop button. No timer.',
          'A failed voice attempt reading “Sorry, I didn’t catch that”, with three suggestions, a button to try speaking again, and a link to type instead.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Privacy comes first', b: 'Trust is the biggest barrier to adoption. Older adults need to feel in control of their data, supported by transparency, non-intrusive design, and a trusted, family-involved onboarding.' },
            { t: 'Benefits must be obvious', b: 'Adoption improves when the value is simple and immediate. Real-life use cases help users see exactly how the product fits their day, with no learning curve to climb first.' },
            { t: 'Technology supports connection, never replaces it', b: 'People want tools that strengthen relationships, not substitute for them. Every feature is pointed at communication and community, never at keeping someone on a screen.' },
          ],
        },
      },
      {
        kicker: 'The second surface',
        heading: 'Reassurance for the carer, without surveillance of the senior',
        body: [
          'The carer side is its own product surface: pairing by a short code or QR, a feed of check-ins and missed medications, and profile management for the senior they support.',
          'The design line I held throughout: the senior is the user, the carer is the safety net. Visibility is framed as “Margaret shared I’m OK”, never as monitoring.',
        ],
        shot: 'pair',
        caps: [
          'Pairing is a moment of trust, not a configuration step: one big code, one scan',
          'The carer feed: what matters since you last looked, in plain sentences',
        ],
        alts: [
          'The pairing screen: a large connection code to share, a QR code option, and a separate field for entering a code received from someone else.',
          'The carer view, listing recent activity as sentences: a missed evening medication twelve minutes late, and a check-in reading “Margaret shared I’m OK”.',
        ],
      },
      {
        kicker: 'What it helps with',
        heading: 'Four everyday jobs, one calm surface',
        body: [
          'Underneath the voice layer, miiGenie does four practical things. Each was designed with the same forgiving pattern: real help, presented simply enough that a tired 75-year-old can act on it the first time, every time.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Remind', b: 'Appointments, medication, routines, and gentle daily prompts.' },
            { t: 'Organise', b: 'Important information and documents in one accessible place. “Find my gas bill from January” works by voice.' },
            { t: 'Connect', b: 'Family check-ins, reassurance, and easier communication, both ways.' },
            { t: 'Support', b: 'Access to trusted local services and practical help around the home.' },
          ],
        },
      },
      {
        kicker: 'Where it stands',
        heading: 'Design-complete, entering production',
        body: [
          'MVP 1.1 is design-complete, and the build is being brought up to the approved system for a production release, followed by a pilot with first users. The next chapter of this case study writes itself from there: onboarding completion, voice success rates, and whether the trial-to-subscription moment reads as honestly as it was designed to.',
        ],
        block: {
          kind: 'stats',
          items: [
            { n: '50+', l: 'Interviews and conversations with seniors and carers across Hampshire, shaping the MVP' },
            { n: '4', l: 'Core everyday jobs the app is built around: remind, organise, connect, support' },
            { n: '2', l: 'Users designed as one product: seniors and their family carers' },
          ],
        },
      },
      {
        kicker: 'The other surface',
        heading: 'The site that has to earn the trial',
        body: [
          'The app is the product, but nobody meets it first. miigenie.com is where a family carer decides whether this is worth their parent’s time, and it carries a harder job than the app does: credible to the carer, unthreatening to the person being worried about.',
          'Six pages, each answering one question somebody actually arrives with. What is this. How does it work. Who is behind it. Who is it for. Can I try it. Can I work here. The home page states the pilot stage in the banner rather than implying a finished product, and puts the privacy position above the fold instead of in a footer link.',
          'Features are written as jobs, not capabilities: file the bills and letters, set the medication timer, find a tradesperson somebody has already vetted. The trial page is the clearest of them, because an older adult deciding whether to hand over a month of their life needs the offer and the catch on the same screen.',
        ],
        shot: 'web',
        caps: [
          'The opening: the promise, the pilot stage stated plainly, and the privacy position above the fold',
          'How it works, as three steps in plain English before any screenshot of the app',
          'The trial page: who it is for and what you get, side by side, with the data promise underneath',
        ],
        alts: [
          'The miigenie.com home page: “Just say it. miiGenie takes care of it.” beside a photograph of an older woman at a table, with a pilot-stage banner above and voice-first, carer sync and UK GDPR named underneath.',
          'The how it works page: three numbered steps, speak naturally, miiGenie handles the task, and calm reassurance, above a section inviting the visitor to explore the app itself.',
          'The early access page: two columns headed who it is for and what you get, listing older adults, family carers and community members against a free month, setup help and influence over features.',
        ],
      },
    ],
    reflection: {
      heading: 'What being a founding designer actually means',
      body: [
        'The job is only half screens. The other half is building the company’s relationship to design: specs engineers can implement without guessing, a review rhythm that catches drift before it ships, and the patience to explain why an emoji is not an icon. A design system nobody follows is a portfolio piece; one the team builds from is infrastructure.',
        'Designing for older adults has sharpened every instinct I have. The disciplines it forces, one idea per screen, errors that forgive, copy a tired person can read, fallbacks for every modality, are not “senior design”. They are just good design, measured against the hardest grader there is.',
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
      { k: 'Period', v: 'June to August 2025' },
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
          'Industrial hazard and operability studies run on dense, technical workflows. The people doing them, process engineers and safety managers and risk analysts, needed a system that could carry rigorous, compliance-heavy work without burying them in convoluted interfaces.',
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
          'The core principle was reducing cognitive load. It was never simplification for its own sake. The point was stripping out friction so users could focus on the safety thinking instead of fighting the tooling.',
          'Navigation and page structure map directly onto the safety assessment lifecycle: identify risks, evaluate operability, track mitigation. The Scenario Summary puts every deviation, its risk rating and its tracked action in one scannable table.',
        ],
        shot: 'wide',
        caption: 'Scenario summary: every deviation, its risk rating and its tracked action in one table',
        alt: 'The Scenario Summary table: every deviation a row with its causes, consequences and safeguards, then low, high and medium ratings against asset, environment and safety, and the tracked action beside it.',
        block: {
          kind: 'cards',
          items: [
            { t: 'Lifecycle-anchored navigation', b: 'Navigation and page structure map directly onto the safety assessment lifecycle: identify risks, evaluate operability, track mitigation.' },
            { t: 'Compliance evidence as a by-product', b: 'The record a study has to produce falls out of doing the work, rather than being assembled in a scramble at the end.' },
            { t: 'Cognitive load as the measure', b: 'Never simplification for its own sake. Stripping out friction so users focus on the safety thinking instead of fighting the tooling.' },
          ],
        },
      },
      {
        kicker: 'Outcome',
        heading: 'A safety assessment that moves through the organisation cleanly',
        body: [
          'The change was operational, not cosmetic. Studies that lived in scattered spreadsheets now move through one accountable process: clear ownership at each step, duplication and reporting rework removed, and compliance evidence produced as a by-product of the work rather than a scramble at the end.',
          'It maps onto how safety professionals already think. It did not try to replace the safety thinking, which was never the problem.',
        ],
        shot: 'wide2',
        caption: 'Analytics across sites and studies',
        alt: 'The analytics dashboard: action completion at 29 per cent, donut and bar breakdowns of 38 actions and their approvals, then site risk as a donut of 42 and a stacked bar for each of twelve nodes.',
      },
      {
        kicker: 'What I owned',
        heading: 'UX strategy from domain research through MVP delivery',
        body: [
          'I owned the UX strategy across the whole project, translating dense technical requirements into something accessible. A scalable design system and a navigation structure anchored to the HAZOP lifecycle meant the MVP earned trust quickly, with safety professionals who had never had a tool built for this work.',
          'The platform reduced manual data entry, standardised compliance reporting, and laid a foundation the engineering team could build on without reintroducing inconsistency.',
        ],
        block: {
          kind: 'stats',
          items: [
            { n: '50%', l: 'Decrease in time spent on manual data entry' },
            { n: '40%', l: 'Reduction in reporting errors compared to spreadsheets' },
            { n: '35%', l: 'Faster overall completion of hazard studies' },
          ],
        },
      },
      {
        kicker: 'The parallel engagement',
        heading: 'Rebuilding the company website at the same time',
        body: [
          'Alongside the MVP I rebuilt Soter Software’s own website, migrating it off WordPress and into Wix. Same company, two outputs at once: a product platform their customers could trust, and a marketing site that could represent the company behind it.',
          'The old site read like a brochure. Its information architecture did not match how engineering buyers evaluate process-safety software, so visitors bounced before they understood the product, and every content change needed a developer, so marketing could not keep up with the roadmap.',
          'I rebuilt it around six sections, each answering one question a buyer actually arrives with, and organised the products page by the four people who touch a study. I hand-built every page in Wix, so the team was left with a site they can update without a developer.',
        ],
        shot: 'wide3',
        caption: 'Products, organised by the four people who touch a study',
        alt: 'The rebuilt products page, with HAZOP Edge described separately for facilitators and scribes, team members, project managers and senior management.',
        block: {
          kind: 'cards',
          items: [
            { t: 'Facilitators and scribes', b: 'Set up workshops, document decisions, cut manual rework.' },
            { t: 'Team members', b: 'Access studies, collaborate live, see risks in context.' },
            { t: 'Project managers', b: 'Real-time dashboards, bottleneck visibility, consolidated insights.' },
            { t: 'Senior management', b: 'Risk trend visibility, data-driven decisions, compliance evidence.' },
          ],
        },
        pull: 'Wix was not the fashionable choice and was not meant to be. Soter’s team is small and fast, and needed a surface they could run themselves. A custom build would have looked better in a portfolio and worked worse in the business. Choosing the boring tool was the design decision.',
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
      { k: 'Period', v: '2020 to 2023' },
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
        alt: 'The API Console dashboard: 140 requests listed with family, version, lifecycle stage and status, and a panel for one of them carrying its details, review actions and a request to delivery chart.',
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
        caption: 'The design step, where the solution and its integration are recorded',
        alt: 'The high level design step: a two stage plan and design tracker above fields for API layer, solution overview and design considerations, with upload areas for an integration landscape and a sequence diagram.',
        block: {
          kind: 'compare',
          before: {
            h: 'Before: three separate islands',
            items: [
              'API Console: custom nav, dense tables, no pattern docs',
              'API Portal: different colour usage, unique button styles',
              'API Marketplace: inconsistent spacing, its own icon set',
              'Shared elements: none, every decision made locally',
              'Documentation: none, designers held it in their heads',
              'New-designer onboarding: start from scratch',
            ],
          },
          after: {
            h: 'After: one shared foundation',
            items: [
              'Shared token system: colour, spacing and type across all three',
              'One component library, built on Ericsson’s design system',
              'A documented path for proposing and approving changes',
              'Ownership assigned for every shared pattern',
              'A Figma guide that survived a change of tooling',
              'New designers onboard without reverse-engineering decisions',
            ],
          },
        },
      },
      {
        kicker: 'The role nobody was filling',
        heading: 'No business analyst on the team, so I became one',
        body: [
          'The team lacked a dedicated business analyst. As the most experienced person on the project, I took on the work of translating between Ericsson’s product owners and our design and engineering team. Product owners came with large, genuinely good feature ideas that were beyond what the team could deliver within the timeline and technical constraints of that version. This happened repeatedly across three years.',
        ],
        block: {
          kind: 'journey',
          cols: ['When', 'Title', 'What actually changed'],
          rows: [
            ['Nov 2020', 'Product Designer', 'Designing screens for one product.'],
            ['Nov 2021', 'Lead Product Designer', 'Making design decisions that applied across all three products at once, and translating between the product owner, the tech lead and the design team.'],
            ['Dec 2023', 'Towards design operations', 'Unblocking other designers and then stepping back. Building and governing the system rather than only working inside it.'],
          ],
        },
      },
      {
        kicker: 'Outcome',
        heading: 'Three teams shipping consistently, with no bottleneck in the middle',
        body: [
          'Every version delivered what was committed, and disagreements were resolved before they became blockers. The design system gave the product credibility with enterprise clients as it pivoted to external B2B. Three inconsistent tools became one coherent platform, documented so the work survived both new designers and a change of tooling.',
        ],
        block: {
          kind: 'stats',
          items: [
            { n: '3', l: 'Products unified on one design system' },
            { n: '10-15', l: 'Core components built or adapted' },
            { n: '3 yrs', l: 'Engagement bridged without business analyst support' },
          ],
        },
      },
    ],
    reflection: {
      heading: 'What I’d do differently, and what this made me realise',
      body: [
        'I built a lot of the system myself before sharing it. In hindsight, getting designers to co-create components from the start would have created faster adoption and stronger ownership. The system was good; the rollout could have been more collaborative.',
        'The moments that mattered most were not the screens I designed. They were the conversations I facilitated. Getting a product owner and a tech lead to a shared view of what was possible in a release mattered more than any individual design decision.',
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
      { k: 'Period', v: '2023 to 2024' },
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
          'Then templates, standardised across three formats.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Interview guide', b: 'Standardised opening and consent framing, modular question blocks by research goal, probe suggestions per section, consistent time allocation, and debrief prompts.' },
            { t: 'Insight deck', b: 'Branded template, executive summary on slide one, one evidence-backed insight per slide, severity and frequency scoring, recommended next actions at the close.' },
            { t: 'Stakeholder presentation', b: 'Three slides maximum for leadership reviews. Business impact framed first, data visualised rather than tabulated.' },
          ],
        },
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
      {
        kicker: 'The templates',
        heading: 'Standardised across three formats',
        body: [
          'Each researcher had their own format. Senior stakeholders were receiving decks of thirty or more slides with no summary, no structure and no clear ask. Three templates replaced that.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Interview guide', b: 'A standardised opening and consent framing, modular question blocks by research goal, probe suggestions for each section, consistent time per block, and debrief prompts at the end.' },
            { t: 'Insight deck', b: 'A branded template with the executive summary on slide one, one evidence-backed insight per slide, severity and frequency scoring, and recommended actions at the close.' },
            { t: 'Stakeholder presentation', b: 'Three slides maximum for leadership reviews. Business impact first, data visualised rather than listed, a clear ask or decision required, and an appendix for anyone who wants the detail.' },
          ],
        },
      },
      {
        kicker: 'How it landed',
        heading: 'The team noticed the difference immediately',
        body: [
          'Each improvement was validated with the team before moving to the next. The feedback was immediate and specific, because people could see what had changed and why it mattered.',
        ],
        block: {
          kind: 'stats',
          items: [
            { n: '30-40%', l: 'Reduction in rework and duplicated effort, the team’s own estimate' },
            { n: '3 → 1', l: 'File versions to manage, collapsed from duplicates to a single source of truth' },
            { n: '20+', l: 'Researchers and designers working from one shared system' },
          ],
        },
      },
    ],
    reflection: {
      heading: 'What I finished, what remained, and what I learned',
      body: [
        'Completed: the file architecture, the three research templates, the researcher-to-designer handoff, a design critique framework, and cross-linking so documents could be found from more than one path.',
        'In pipeline for the next phase: designer-side infrastructure: Figma library governance, component ownership and version control, and consistency across the products.',
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
        alt: 'Mom’s Vault: a £450 balance split across healthcare, groceries and utility bills, each on its own slider, with a note that allocating to pockets lets shared bills be prioritised automatically.',
      },
      {
        kicker: 'The rule',
        heading: 'Every feature had to neutralise a specific anxiety',
        body: [
          'The concept resolved to one rule. Every feature had to neutralise a specific anxiety in the transfer relationship, not just add functionality.',
        ],
        shot: 'wide2',
        caption: 'Smart transfer, with the rate decision left to the sender',
        alt: 'Smart Transfer: a rule to send £500 when the pound to rupee rate reaches 106.50, today’s rate shown at 105.12, and a breakdown with no fee, no markup and ₹53,250 guaranteed to arrive.',
        block: {
          kind: 'cards',
          items: [
            { t: '“Am I sending at a bad rate right now?”', b: 'AI rate triggers. Plain-language alerts, like “best rate in 14 days”, shown with the rate chart, so the user decides rather than the algorithm.' },
            { t: '“Did it arrive? Was it enough?”', b: 'Shared vaults. Both sides see the same balance, contributors and live transfer status, so no message is needed to confirm an arrival.' },
            { t: '“Will the money reach the actual bill?”', b: 'Direct bill payment. Pay the utility directly, so the sender sees the bill cleared rather than just that money was sent.' },
          ],
        },
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
      heading: 'What this project taught me',
      body: [
        'Working on a consumer product after several years of enterprise work exposed how differently the two approach trust. In enterprise UX, trust comes from predictability and compliance signals: users trust a system that behaves consistently inside a known framework. In consumer fintech it is emotional, a question of whether the product feels like it is on your side.',
        'The hardest design problem was not the feature set. It was tone. Writing copy that felt warm and human while communicating exchange rates and fee structures accurately took several passes. The first version read like a banking app. The third read like a WhatsApp message. The one that shipped sits between them, warm enough to feel like family, exact enough to feel like a vault.',
        'The AI rate trigger was the most interesting of them. The first prototype simply fired when a threshold was hit, which felt arbitrary and slightly creepy. The fix was transparency: showing the 14-day chart alongside the notification, so the user sees the context rather than being told what to do.',
        'It confirmed something I suspected from enterprise work. The most important UX often sits in the moments just before and just after the primary action, the anxiety before a transfer and the uncertainty after. Most apps design the middle and neglect the edges.',
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
          'Most technology designed for later life focuses on efficiency and surveillance. It tracks, reminds, and alerts. For the people using it, that often feels intrusive and faintly medical, a constant signal that they are being managed rather than supported.',
          'The research literature has been moving the other way for years, towards empathetic, multisensory, human-centred environments. Yet the products on the shelf still treat an ageing person as a system to be optimised.',
        ],
        shot: 'wide',
        caption: 'Two generations, one shared need',
        alt: 'Three generations around a kitchen table in the evening, with an illustrated vine threaded through the room.',
      },
      {
        kicker: 'The brief',
        heading: 'Design the care service, not the device',
        body: [
          'Rodd Design Studio set the team a foresight brief through the Winchester School of Art’s Global Smart Lab: explore how an ageing society might live, and be cared for, in 2065.',
          'The forty-year horizon freed the work from today’s devices and let us design at the level of the whole care service: the relationships between an older person and their family, carers, healthcare providers, and community, and how a future service could hold all of them together without making the person at its centre feel managed.',
        ],
      },
      {
        kicker: 'The service ecosystem',
        heading: 'Independence is held by a whole system, not a device',
        body: [
          'Treating this as a service, not a gadget, meant mapping everyone who shapes whether an older person stays independent at home, and designing Amble to support those relationships rather than replace them.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Older adults', b: 'The person at the centre. Independence and dignity, never the feeling of being managed.' },
            { t: 'Families', b: 'Reassurance and connection from a distance, without tipping into surveillance.' },
            { t: 'Carers', b: 'A lighter coordination load and clearer signals about what actually needs attention.' },
            { t: 'Healthcare providers', b: 'Earlier, gentler signals that surface needs before they become crises.' },
            { t: 'Local authorities', b: 'Prevention that helps people stay out of formal care for longer.' },
            { t: 'Communities', b: 'Belonging and participation as part of care, not an afterthought to it.' },
            { t: 'Technology providers', b: 'Infrastructure that stays in the background and earns its place quietly.' },
          ],
        },
      },
      {
        kicker: 'Research',
        heading: 'Two generations, one shared need',
        body: [
          'We adopted a research-through-design methodology, combining speculative design with a literature review and primary research. Setting the concept forty years out was a deliberate device. It moved conversations away from “what gadget would you buy” and towards “what should later life feel like”, which is where the useful insight lives.',
          'Two groups of younger adults aged 20 to 40 in Winchester, who would actually be the ageing population of 2065, and a gathering of fifteen older adults aged 50 to 80 in Southampton, reached through local churches and community groups. The older-adult session was run as a relaxed afternoon with refreshments and a reminiscence game, not a clinical interview, so people spoke openly about retirement, care, and technology.',
          'They described later life very differently, but they asked design for the same thing: support that does not demand attention.',
        ],
        pull: '“Plants can give emotional support in a way that animals or humans can’t.” And, from another participant: “I still like to do my own shopping. I want to go. I don’t like having a delivery.”',
      },
      {
        kicker: 'My role',
        heading: 'Leading a multidisciplinary team through ambiguity',
        body: [
          'I was project lead for a team of four designers and researchers, working to a real client brief over seven months. On a speculative project the hardest thing to hold is the frame. With no product to anchor decisions, a foresight project can drift into either science fiction or a thinly disguised version of the present.',
          'My job was to keep the team honest: every imaginative leap had to trace back to a research insight or a piece of evidence. I set the research approach, ran the synthesis, steered two significant changes of direction, and shaped how the final concept was communicated and exhibited.',
        ],
        shot: 'wide2',
        caption: 'Daily routines in the 2065 home',
        alt: 'An illustrated green shoot drawn sharply in the foreground of a communal interior that is left out of focus.',
      },
      {
        kicker: 'What we set aside',
        heading: 'Two ideas we built and set aside',
        body: [
          'The plant system was not the first answer. It was the third. The two concepts the team built and abandoned were not wasted work, they were how we found the real brief.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Interactive Brain Gym', b: 'Memory preservation and cognitive exercises, designed with dementia in mind. Solving for one condition narrowed the brief to a clinical problem, and the research kept pointing somewhere broader: emotional wellbeing, not just memory.' },
            { t: 'Home Companion Robot', b: 'A device to track, nudge, detect and assist across the home. It worked on paper and felt wrong in practice. A robot is another screen, another thing demanding attention, the opposite of the calm the research asked for.' },
            { t: 'Amble', b: 'A living, bioengineered plant system. A plant is already emotionally legible. It does not demand interaction, it shares the space. That let us design support that is ambient, sensory, and quiet.' },
          ],
        },
      },
      {
        kicker: 'The concept',
        heading: 'Amble: a living system with five domains',
        body: [
          'Amble is a bioengineered plant system that coexists with the people it supports. It senses, adapts, and responds through light, scent, sound, and growth, rather than screens and notifications.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Core intelligent functions', b: 'Decentralised ambient intelligence. The system self-regulates its own maintenance and adjusts the home environment, with no central controller and no command to issue.' },
            { t: 'Domestic utility', b: 'Quiet help with everyday tasks: supply monitoring, composting, laundry support, and modular rearrangement of the space as needs change over time.' },
            { t: 'Emotional and sensory support', b: 'Mood detection met with response: aromatherapy, sound feedback, bioluminescence, and “mood blooming”, the plant co-regulating alongside the person.' },
            { t: 'Personalisation and adaptation', b: 'The system grows with its resident. Its form and rhythm evolve to match an individual lifestyle and routine, rather than imposing one.' },
            { t: 'Wearable extension', b: 'A portable, air-filtering module that absorbs pollutants and tracks air quality, carrying Amble’s presence beyond the walls of the home.' },
          ],
        },
      },
      {
        kicker: 'The brand',
        heading: 'A brand that feels alive, not engineered',
        body: [
          'The brand had one job: convince people that Amble is a living companion, not a gadget. Every decision, from the typeface to the tone of voice, was grounded in research on how older adults read, trust, and feel at ease.',
          'A Playfair Display wordmark, lowercase for approachability, with a flower growing from the “a” and a leaf sprouting from the “e”. Playfair is paired with the geometric sans Poppins, and the pairing was evidence-led: studies show older adults read serif type more comfortably at larger sizes, and that typefaces themselves carry personality, in this case sincerity and calm. The palette is muted earth tones, chosen for the calm familiarity research links to older adults’ preferences.',
          'Amble’s voice speaks as a presence, not an assistant: warm, calm and mindful, helpful but never insistent. Let your home grow with you.',
        ],
      },
      {
        kicker: 'Outcome',
        heading: 'From research project to public exhibition',
        body: [
          'Amble was shown to the public as part of “Tender Interbeing: The Future of Design with Empathy” at the London Design Festival in September 2025, alongside industry.',
          'Translating seven months of research into an exhibition was a design problem of its own: two posters carrying the full argument, the concept, the evidence and the rationale, condensed to what a visitor can absorb in a single pass.',
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
