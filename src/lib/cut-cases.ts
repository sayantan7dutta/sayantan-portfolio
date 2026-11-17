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
  | { kind: 'cards'; items: { t: string; b: string; tag?: string; kept?: boolean; list?: string[] }[] }
  /**
   * The file architecture, as a before and after tree. Sherwin has no UI to
   * screenshot, so this is the only artefact on the page: the actual mess,
   * and the actual structure that replaced it. A paragraph saying "numbered
   * folders and consistent naming" asks the reader to take it on trust.
   */
  | { kind: 'filetree'; before: string[]; after: { folder?: string; file?: string; tag?: string }[] }
  /** A stage-by-stage table: what hurt, and what the design did about it. */
  | { kind: 'journey'; cols: [string, string, string]; rows: [string, string, string][] }
  /** Research personas, grouped by role. */
  | { kind: 'personas'; items: { role: string; age: string; name: string; note: string }[] }
  /** An ordered process: numbered rows rather than a grid with a hole in it. */
  | { kind: 'steps'; items: { t: string; b: string }[] }
  /** A service blueprint: the human and digital layers across a lifecycle. */
  | { kind: 'blueprint'; axis: string; stages: string[]; caption?: string;
      layers: { name: string; role: string; divider?: string; cells: string[] }[] }
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
  /** A dated progression on a rail. Three titles across three years is a
      shape, and a sentence listing them is not: the main site drew it and the
      condensed version flattened it back into prose. */
  rail?: { d: string; r: string }[];
  /**
   * The brand, shown rather than described. A palette listed in a sentence
   * ("parchment, pale dogwood, yellow green…") asks the reader to picture
   * five colours they cannot see. On a designer's page the swatches are the
   * evidence and the wordmark is the claim the prose is making about it, so
   * both belong on the page. Sits above the section's own block.
   */
  /**
   * What participants actually said, in their words. A research section can
   * describe findings convincingly and still be something the designer could
   * have invented; a quote with a source attached is the evidence that the
   * room happened. Rendered after the section's block.
   */
  quotes?: { q: string; who: string }[];
  /**
   * Figures that size the situation, as opposed to `stats`, which reports
   * what the work achieved. Sherwin's context needed the scale of the team
   * before the problem lands: twenty-odd people with no shared
   * infrastructure only means something once you know it is twenty-odd.
   * Sits above the section's own block.
   */
  figures?: { n: string; l: string }[];
  /** A short line introducing the block, where it is a list of things rather
      than a continuation of the argument ("Products the team supported"). */
  blockLead?: string;
  brand?: {
    logo?: boolean;
    logoCaption?: string;
    swatches?: { hex: string; name: string }[];
    swatchCaption?: string;
  };
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
  /**
   * A credential worth meeting before the argument rather than after it.
   * The main site puts this above the problem statement; the condensed
   * version had it as three sentences in the closing section, which is the
   * last place a reviewer skimming the top of the page will look.
   */
  exhibit?: {
    tag: string;
    festival: string;
    lead: string;
    /** Rendered in italic accent inside `lead`, split on this exact text. */
    emphasis: string;
    sub: string;
    facts: { k: string; v: string }[];
  };
  /**
   * Closing reflection — the "what I learned" the old pages all end on.
   * A paragraph may carry its own heading: Ericsson's three takeaways were
   * labelled on the main site and arrived here as three unlabelled
   * paragraphs, which turns three findings into one block of prose.
   */
  reflection: { heading: string; body: (string | { h: string; p: string })[] };
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
          'The existing tools were built by engineers, for engineers. They were dense, unintuitive, and poorly suited to the cross-functional work a study actually involves. Teams fell back on spreadsheets, Word documents and email chains to track safety assessments that could decide whether a refinery was safe to operate.',
        ],
        pull: '“Safety engineers were spending over half of every study on data entry and report formatting, time that should have gone to the safety thinking itself.” Domain research finding, Soter Safety Consulting, 2025.',
      },
      {
        kicker: 'Solution',
        heading: 'UX strategy from domain research through MVP delivery',
        body: [
          'I owned the UX strategy across the whole project, translating dense technical requirements into something accessible. A scalable design system and a navigation structure anchored to the HAZOP lifecycle meant the MVP earned trust quickly, with safety professionals who had never had a tool built for this work.',
          'The platform reduced manual data entry, standardised compliance reporting, and laid a foundation the engineering team could build on without reintroducing inconsistency.',
        ],
      },
      {
        kicker: 'Design process',
        heading: 'How I approached a domain I had never worked in before',
        body: [
          'Industrial safety was entirely new territory for me. The first three weeks were almost all research, understanding the domain before I opened a design tool.',
          'Five stages, run in order, none of them skippable. The one I almost compressed under timeline pressure turned out to be the most valuable work on the project.',
        ],
        block: {
          kind: 'steps',
          items: [
            { t: 'Domain research and stakeholder interviews', b: 'In-depth interviews with safety professionals to understand the HAZOP study lifecycle, from identifying nodes through to tracking action items. The finding that shaped everything: safety engineers spent most of a study on data entry and format compliance, not on the safety analysis itself. The tool was meant to support the thinking, not replace it.' },
            { t: 'A service blueprint of the full system', b: 'I mapped the human and digital layers of a study: the facilitator, the scribe, the engineers, the compliance officer. A study runs on handoffs between people, so the platform had to support those handoffs, not only individual tasks. The blueprint shaped the information architecture directly.' },
            { t: 'Information architecture and user flows', b: 'Navigation structured around the four stages of a study, identify, assess, mitigate, report, so users always knew where they were and what came next. Progressive disclosure throughout: experienced engineers could go deep while new users were not overwhelmed on first entry.' },
            { t: 'A design system for compliance environments', b: 'Components, states, content patterns and accessibility standards, giving the engineering team a foundation to expand on without reintroducing inconsistency. The visual language stayed deliberately calm. In a compliance environment, trust comes from predictability, not delight.' },
            { t: 'Prototype, test, iterate', b: 'High-fidelity prototypes tested with safety professionals. The main usability insight: during long, multi-node studies, users needed to understand the system status at every step. I refined the progress indicators, state labels and confirmation patterns from that feedback.' },
          ],
        },
      },
      {
        kicker: 'The domain',
        heading: 'A HAZOP lifecycle, mapped end to end',
        body: [
          'Before any of the design, I had to be able to describe a hazard study the way the people running one would. This blueprint is that understanding written down: who does what at each stage, what the platform does underneath them, and what has to come out of it for a regulator.',
          'It is the artefact that made the rest of the project possible. Every navigation decision, every default and every export in HAZOP Edge traces back to a cell in this grid.',
        ],
        block: {
          kind: 'blueprint',
          axis: 'HAZOP lifecycle →',
          stages: ['Identify', 'Assess', 'Mitigate', 'Report'],
          caption: 'Service blueprint: the human and digital layers of a single HAZOP study',
          layers: [
            { name: 'Facilitator & Scribe', role: 'Frontstage', cells: ['Lead the node walkthrough, capture deviations', 'Guide the risk-scoring discussion', 'Record agreed safeguards and actions', 'Review and sign off the completed study'] },
            { name: 'Process Engineers', role: 'Frontstage', cells: ['Surface failure modes from domain knowledge', 'Judge severity and likelihood per scenario', 'Propose technical mitigations', 'Verify every action has a clear owner'] },
            { name: 'HAZOP Edge', role: 'Digital layer', divider: 'Line of visibility · above, what people do · below, what the platform does', cells: ['Structured node and guideword entry', 'Risk matrix with live severity and probability scoring', 'Action tracker with owners and status', 'One-click, standardised compliance export'] },
            { name: 'Compliance Output', role: 'Backstage', cells: ['Audit trail begins', 'Scores logged against safety standards', 'Action register kept current', 'Regulator-ready report, every time'] },
          ],
        },
      },
      {
        kicker: 'The design',
        heading: 'Designing for trust in a compliance environment',
        body: [
          'The core principle was reducing cognitive load. It was never simplification for its own sake. The point was stripping out friction so users could focus on the safety thinking instead of fighting the tooling.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Navigation that follows the lifecycle', b: 'Page structure mapped directly to the safety assessment lifecycle: identify risks, evaluate operability, track mitigations, generate compliance reports. Users always knew their next step without asking a colleague.' },
            { t: 'Scannable layouts for data-heavy views', b: 'Risk matrices and technical safety logs used scannable, grid-based layouts with meaningful defaults and progressive disclosure. Seasoned engineers could go deep; first-time users were not overwhelmed.' },
            { t: 'Consistent visual language', b: 'A deliberately calm, purposeful visual system. In compliance environments trust comes from predictability, so status indicators, state colours and confirmation patterns stayed consistent across every screen.' },
            { t: 'Scalable design system', b: 'A component library covering states, patterns and accessibility, so the engineering team could ship new features without reintroducing visual inconsistency or breaking the trust model.' },
          ],
        },
        shot: 'wide',
        caption: 'Scenario summary: every deviation, its risk rating and its tracked action in one table',
        alt: 'The Scenario Summary table: every deviation a row with its causes, consequences and safeguards, then low, high and medium ratings against asset, environment and safety, and the tracked action beside it.',
      },
      {
        kicker: 'In the product',
        heading: 'Where the thinking shows up on screen',
        body: [],
        shot: 'scenes',
        caps: [
          'Risk Matrix: severity and probability captured on a guided grid, not a spreadsheet',
          'Sites overview: the entry point, organised around how safety teams actually work',
          'Analytics across sites and studies, with action completion and site risk in one view',
        ],
        alts: [
          'The risk matrix: severity against probability on a guided grid, with each cell a rating rather than a free-text spreadsheet entry.',
          'The sites overview, the entry point to the platform, listing sites and their studies the way safety teams organise their work.',
          'The analytics dashboard: action completion at 29 per cent, donut and bar breakdowns of 38 actions and their approvals, then site risk as a donut of 42 and a stacked bar for each of twelve nodes.',
        ],
      },
      {
        kicker: 'Service impact',
        heading: 'A safety assessment that moves through the organisation cleanly',
        body: [
          'The change was operational, not cosmetic. Studies that lived in scattered spreadsheets now move through one accountable process: clear ownership at each step, duplication and reporting rework removed, and compliance evidence produced as a by-product of the work rather than a scramble at the end.',
          'It maps onto how safety professionals already think. It did not try to replace the safety thinking, which was never the problem.',
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
        kicker: 'Parallel engagement',
        heading: 'Rebuilding the company website at the same time',
        body: [
          'Alongside the HAZOP Edge MVP I rebuilt Soter Software’s own website, migrating it off WordPress and into Wix. Same company, two outputs at the same time: a product platform their customers could trust, and a marketing site that could actually represent the company behind it. The website was the lighter brief, but its impact compounded the product, because every prospect now landed in the right place before the demo.',
          'The existing site read like a brochure: a long homepage, a thin About page, and a Products page that listed features without explaining who they were for. Two compounding issues. The information architecture did not match how engineering buyers evaluate process-safety software, so visitors bounced before they understood the product. And every content change needed a developer, so marketing could not keep the site current with the roadmap.',
          'I rebuilt the information architecture around six top-level sections, each answering a specific question a process-safety buyer brings to the site, and organised the Products page by the four personas who touch a study. I delivered it inside Wix, hand-building every page, the navigation and the responsive behaviour, so the team was left with a site they could update themselves. Zero developers needed for content changes.',
        ],
        block: {
          kind: 'journey',
          cols: ['Section', 'The question it answers', 'Why it earns its place'],
          rows: [
            ['01 Home', 'What does this company do?', 'Clarity to prevent major accidents, stated above the fold.'],
            ['02 About', 'Who is behind this, and can I trust them?', 'Process safety is bought from people, not brands.'],
            ['03 Products', 'What does HAZOP Edge do, and is it for me?', 'Organised by the four people who touch a study.'],
            ['04 Knowledge Centre', 'How do these people think about safety?', 'Buyers in process safety read before they buy. A deliberate addition.'],
            ['05 FAQs', 'What is the catch, what does it cost, how does it deploy?', 'The objections, answered before the call.'],
            ['06 Contact', 'I am in. How do I talk to a human?', 'One job, no form maze.'],
          ],
        },
        pull: 'Each section earns its place by answering one question. The Knowledge Centre in particular was a deliberate addition: buyers in process safety read before they buy, and giving them somewhere to read built credibility before any sales conversation.',
      },
      {
        /* The information architecture, which the prose summarised as "six
           top-level sections". Six sections is a number; the questions are
           the argument, and they are what shows the rebuild was reasoned
           from how a buyer evaluates rather than from a tidier menu. */
        kicker: 'The information architecture',
        heading: 'Six sections, six questions a buyer actually arrives with',
        body: [
          'I rebuilt the information architecture around six top-level sections, each answering a specific question a process-safety buyer brings to the site, and organised the Products page by the four personas who touch a study.',
          'I delivered it inside Wix, hand-building every page, the navigation and the responsive behaviour, so the team was left with a site they could update themselves. Zero developers needed for a content change.',
        ],
        block: {
          kind: 'steps',
          items: [
            { t: 'Home', b: 'What does this company do?' },
            { t: 'About', b: 'Who is behind this, and can I trust them?' },
            { t: 'Products', b: 'What does HAZOP Edge do, and is it for me?' },
            { t: 'Knowledge Centre', b: 'How do these people think about safety?' },
            { t: 'FAQs', b: 'What is the catch, what does it cost, how does it deploy?' },
            { t: 'Contact', b: 'I am in. How do I talk to a human?' },
          ],
        },
      },
      {
        kicker: 'The product page',
        heading: 'A page that speaks to four people at once',
        body: [
          'HAZOP Edge is used by four very different people on the same study. The old page listed features in one long flow, leaving each persona to find their own relevance. The rebuilt page is structured by user role, so each visitor finds their own job described in their own language within the first scroll of their section. It also gave the sales team a cleaner share artefact: drop one persona-anchored section into a follow-up email rather than sending a deck.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Facilitators and scribes', b: 'Set up workshops, document decisions, cut manual rework.' },
            { t: 'Team members', b: 'Access studies, collaborate live, see risks in context.' },
            { t: 'Project managers', b: 'Real-time dashboards, bottleneck visibility, consolidated insights.' },
            { t: 'Senior management', b: 'Risk trend visibility, data-driven decisions, compliance evidence.' },
          ],
        },
        shot: 'web',
        caps: [
          'Home: clarity to prevent major accidents, positioned above the fold',
          'Products: HAZOP Edge organised by the four people who touch a study',
          'Knowledge Centre: a publishing surface owned by marketing, not engineering',
        ],
        alts: [
          'The rebuilt Soter Software home page, leading on preventing major accidents rather than listing features.',
          'The products page, with HAZOP Edge described separately for facilitators and scribes, team members, project managers and senior management.',
          'The Knowledge Centre, a library of safety articles the marketing team can publish to without a developer.',
        ],
        pull: 'Wix was not the fashionable choice and was not meant to be. Soter’s team is small and fast, and needed a surface they could run themselves. A custom build would have looked better in a portfolio and worked worse in the business. Choosing the boring tool was the design decision.',
      },
    ],
    reflection: {
      heading: 'What this project taught me',
      body: [
        'Working in industrial safety forced me to confront the limits of pattern-matching. Most of the UX patterns I had built up over several years of enterprise work were only partly useful here. Safety professionals have a very specific mental model, shaped by regulatory frameworks and a deep risk-aversion, and a lot of consumer-influenced design patterns work against it.',
        'The domain research, which I almost compressed under timeline pressure, turned out to be the most valuable work I did. The service blueprint session with stakeholders surfaced requirements that no amount of user-story refinement would have uncovered.',
        'If I revisited this project, I would push harder for at least one round of usability testing with safety engineers in their own context, with a screen recording rather than a facilitated lab session. HAZOP tasks are long and sequential, and lab-style sessions are poorly suited to validating that kind of flow.',
        'I would also bring accessibility constraints in earlier. In a compliance environment, accessibility is a legal requirement rather than a nice-to-have, and retrofitting it later created rework I could have avoided.',
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
          'This is enterprise client work for Ericsson, shown for portfolio review. The focus throughout is the system, the process and the leadership, not the screens.',
          'The vertical began as an internal B2B tool for Ericsson’s own developers. Stakeholder research identified a market gap: the product could be sold externally, to enterprise API clients. The scope shifted, and the design had to scale to match.',
          'All three products shared components, interaction patterns and user flows. A change in one had downstream effects on the others.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'API Console, the core product', b: 'The primary creation environment where developers built, configured and managed APIs. The most complex product in the vertical, and the hub everything else depended on.' },
            { t: 'API Portal, the developer gateway', b: 'The external-facing interface where developers discovered APIs, accessed documentation and onboarded. First point of contact for anyone entering the ecosystem.' },
            { t: 'API Marketplace, the commerce layer', b: 'Where APIs could be listed, discovered and accessed by external enterprise clients. This is what enabled the commercial pivot from internal tool to sellable product.' },
          ],
        },
      },
      {
        kicker: 'The problem',
        heading: 'Three products, zero visual consistency',
        body: [],
        block: {
          kind: 'cards',
          items: [
            { t: 'No shared design language', b: 'Each product had been designed independently. The same actions looked and behaved differently across Console, Portal and Marketplace, so users moving between them had to relearn basic interactions.' },
            { t: 'Ericsson’s system, applied inconsistently', b: 'The main Ericsson design system existed but had not been applied systematically to this vertical. Some components followed it, others diverged, and there was no clear ownership.' },
            { t: 'No foundation for scale', b: 'With the external pivot the product had to be shown to enterprise clients. Inconsistency that was tolerable internally became a credibility problem externally.' },
            { t: 'Adobe XD with no governance', b: 'Files existed but with no structured component library, no naming conventions and no documentation. Every designer made local decisions without a shared reference.' },
          ],
        },
      },
      {
        kicker: 'What I built',
        heading: 'A shared way of working, not just a set of components',
        body: [
          'The components were the visible half. The half that actually scaled was the operating model around them: ownership of shared patterns, a path for proposing changes, and enough governance that three teams could move at their own pace and still ship something that felt like one product.',
          'Figma became available near the end of my tenure. I restructured the file architecture and wrote a handoff guide so the transition would not lose what had been built.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Foundations', b: 'Colour tokens aligned to the Ericsson brand, a typography scale tuned for UI density, a 4pt spacing system, an iconography set for API concepts, and elevation and shadow standards.' },
            { t: 'Components, 10 to 15 core', b: 'Data tables for API responses, navigation patterns across products, form elements and validation states, status indicators and badges, code and syntax blocks, modal and overlay patterns, empty states and error handling.' },
            { t: 'Governance', b: 'Naming conventions, version logic from base to variant, the XD library structure, the Figma transition handoff guide, component logic documentation, and an ownership and update protocol.' },
          ],
        },
        shot: 'wide',
        caption: 'API Console: the most component-dense surface in the vertical, and the proving ground for the system',
        alt: 'The API Console dashboard: 140 requests listed with family, version, lifecycle stage and status, and a panel for one of them carrying its details, review actions and a request to delivery chart.',
      },
      {
        kicker: 'Before / after',
        heading: 'From three islands to one system',
        body: [
          'The clearest way to describe what changed is to put the two states next to each other. Nothing in the left column was anyone’s fault: three teams, three timelines, and no shared place to put a decision.',
        ],
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
              'New-designer onboarding: start from scratch and reverse-engineer decisions',
            ],
          },
          after: {
            h: 'After: one shared foundation',
            items: [
              'Shared token system: colour, spacing and type across all three',
              '10 to 15 core components, built once and used everywhere with documented variants',
              'Consistent interactions: the same action is the same pattern, whichever product you are in',
              'A component library in XD as a single source of truth, linked across product files',
              'A Figma handoff guide documenting component logic for a smooth transition',
              'New designers open the library, read the docs and start contributing',
            ],
          },
        },
      },
      {
        kicker: 'The BA bridge',
        heading: 'No business analyst on the team, so I became one',
        body: [
          'The team lacked a dedicated business analyst. As the most experienced person on the project, I took on the work of translating between Ericsson’s product owners and our design and engineering team. This happened repeatedly across the three-year engagement.',
          'It required requirements gathering, workshop facilitation, and the ability to hold a position under pressure while keeping both sides feeling heard. It was design leadership, not design craft.',
        ],
        block: {
          kind: 'journey',
          cols: ['The tension', 'My role', 'The outcome'],
          rows: [
            ['Product owners came with large feature ideas. Genuinely good thinking, but beyond what the team could deliver within the timeline, budget and technical constraints of that version.', 'Acknowledge the idea properly rather than dismiss it, take it to the tech lead, pressure-test what was actually buildable, and come back with a version both sides could accept.', 'The team delivered an agreed set for the current version. I created concepts for the fuller vision and logged them in the roadmap. The product owner left satisfied, and the idea was parked responsibly rather than killed.'],
          ],
        },
        shot: 'pair',
        caps: [
          'Guided multi-step workflows: the kind of scope negotiated release by release',
          'Access and governance surfaces, with shared patterns reused across all three products',
        ],
        alts: [
          'The high level design step: a two stage plan and design tracker above fields for API layer, solution overview and design considerations, with upload areas for an integration landscape and a sequence diagram.',
          'A collaborator and access management surface, built from the same shared patterns as the rest of the vertical.',
        ],
      },
      {
        kicker: 'Leadership',
        heading: 'From doing the work to making it possible for others',
        body: [
          'The title changed twice across the three years. What actually changed was the altitude of the work.',
        ],
        rail: [
          { d: 'Nov 2020', r: 'Product Designer' },
          { d: 'Nov 2021', r: 'Lead Product Designer' },
          { d: 'Dec 2023', r: 'Design Operations' },
        ],
        block: {
          kind: 'journey',
          cols: ['From', 'To', 'What that meant'],
          rows: [
            ['Designing screens for one product', 'Making design decisions that applied across all three at once', 'Every call had downstream effects, so the thinking had to start at the system.'],
            ['Executing briefs from the product owner', 'Translating between the product owner, the tech lead and the design team', 'Bridging all three, because nobody else was doing it.'],
            ['Solving design problems myself', 'Unblocking other designers when they were stuck, then stepping back', 'Resisting the urge to take the pen.'],
            ['Working within the system', 'Building and governing the system so others could work within it', 'The work that outlasted me.'],
          ],
        },
      },
      {
        kicker: 'Impact',
        heading: 'Three teams shipping consistently, with no bottleneck in the middle',
        body: [],
        block: {
          kind: 'cards',
          items: [
            { t: 'Shipped on agreed scope', b: 'Every version delivered what was committed, and disagreements were resolved before they became blockers.' },
            { t: 'External pivot supported', b: 'The design system gave the product credibility with enterprise clients. Three inconsistent tools became one coherent platform.' },
            { t: 'Built to outlast the team', b: 'Documented so new designers could onboard without losing what had been established. The Figma guide meant the work survived the tooling change.' },
          ],
        },
      },
      {
        kicker: 'The numbers',
        heading: 'Where it got to',
        body: [],
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
      /* Three separate findings, labelled as they were on the main site.
         Unlabelled they read as one continuous reflection, and the third is
         the one that explains the move into design operations. */
      body: [
        { h: 'Involve the team in the system earlier',
          p: 'I built a lot of the system myself before sharing it. In hindsight, getting designers to co-create components from the start would have created faster adoption and stronger ownership. The system was good; the rollout could have been more collaborative.' },
        { h: 'Where design actually creates value',
          p: 'The moments that mattered most were not the screens I designed. They were the conversations I facilitated. Getting a product owner and a tech lead to a shared view of what was possible in a release mattered more than any individual design decision.' },
        { h: 'This is what moved me towards design operations',
          p: 'By the time I left this engagement I was spending more time on systems, processes and cross-functional alignment than on hands-on design. That transition felt natural, and it led directly to the Sherwin-Williams design operations engagement. I had already been doing the work.' },
      ]
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
        heading: 'One of America’s largest paint brands, and a complex digital portfolio',
        body: [
          'All client work is under NDA. The file-architecture and process diagrams here are reconstructed from memory. The structure and the thinking are accurate; specific file names and content are illustrative.',
          'Sherwin-Williams runs one of the largest digital portfolios in the paint industry: consumer colour tools, contractor apps, e-commerce and internal coatings systems. The research and design team supporting all of it had grown faster than its infrastructure.',
        ],
        /* The scale of the team, which the next section's "a team of 20+ with
           almost no shared infrastructure" depends on. Without it the reader
           reaches that line with no sense of how big the problem is. */
        figures: [
          { n: '5–7', l: 'UX researchers' },
          { n: '10–15', l: 'Product designers' },
          { n: '6+', l: 'Digital products supported' },
        ],
        blockLead: 'Products the team supported',
        block: {
          kind: 'cards',
          items: [
            { t: 'ColorSnap Visualizer', b: 'Web and mobile colour tool for homeowners.' },
            { t: 'Color Expert App', b: 'AI-powered paint recommendation tool.' },
            { t: 'PRO+ App', b: 'Contractor toolkit for professional painters.' },
            { t: 'Paint Stores e-commerce', b: 'The main consumer shopping platform.' },
            { t: 'Contractor and dealer portals', b: 'B2B account management tools.' },
            { t: 'Specification and coatings tools', b: 'Internal, for the Performance Coatings Group.' },
          ],
        },
      },
      {
        kicker: 'The problem',
        heading: 'A team of 20+ with almost no shared infrastructure',
        body: [],
        block: {
          kind: 'cards',
          items: [
            { t: 'Files existed, but nobody could find them', b: 'Research and design assets lived in personal OneDrive folders and scattered Teams channels. Folders existed, but were inconsistent, unlabelled and constantly duplicated.' },
            { t: 'Duplication was the default', b: 'Designers and researchers regularly redid work that already existed, only to find out afterwards that the asset was there all along. The rework was the symptom. The broken structure was the cause.' },
            { t: 'Decks were made and abandoned', b: 'Research presentations had no consistent format and no connected home. Once delivered to a stakeholder they disappeared into personal folders and were never referenced again.' },
            { t: 'Research rarely reached design', b: 'There was no handoff process. Insights sat in researcher files, and designers started work without access to what had already been learned.' },
          ],
        },
      },
      {
        kicker: 'Approach',
        heading: 'Before changing anything, understand the real pain points',
        body: [
          'I interviewed researchers and designers separately before proposing any solution. The order mattered: diagnosis first, then structure, then iteration with the team in the loop.',
        ],
        block: {
          kind: 'steps',
          items: [
            { t: 'Interview both sides', b: 'Separate sessions with researchers and designers to surface real friction without cross-contamination or bias. As someone who had worked both sides I knew the questions to ask, and I spoke to more than one person in each group so no single perspective skewed the findings.' },
            { t: 'Map the pain, not just the symptoms', b: 'The duplication and rework were symptoms. The real problem was inaccessible structure and no shared language between disciplines. Naming that distinction changed what we chose to fix.' },
            { t: 'Pressure-test with the Design Ops Manager', b: 'Brought findings back to the manager, challenged assumptions, and agreed what to prioritise: research infrastructure first, then the designer side. Sequencing the work mattered as much as the work itself.' },
            { t: 'Fix iteratively, get feedback fast', b: 'Each improvement was tested with the team immediately. If it did not land, it was revised. The 30 to 40 per cent efficiency gain came from accumulated small wins, each validated before moving on.' },
          ],
        },
      },
      {
        kicker: 'What I built',
        heading: 'From scattered to structured',
        body: [
          'The first fix was the one everything else depended on: a single, navigable file architecture in Teams and OneDrive. Numbered folders, consistent naming, a read-only archive for legacy work, and cross-linked documents so a file could be found from more than one direction.',
        ],
        block: {
          kind: 'filetree',
          before: [
            'Sarah_Research_FINAL',
            'Sarah_Research_FINAL_v2',
            'James_Insights_March',
            'Team Files (old)',
            'Team Files BACKUP',
            'ColorSnap_designs',
            'ColorSnap_designs_NEW',
            'Misc',
            'Deck (no date, no owner)',
            'Interview Guide copy',
            'Interview Guide REVISED',
          ],
          after: [
            { folder: '00_Templates', tag: 'linked' },
            { file: 'Interview Guide v1.0' },
            { file: 'Insight Deck Template' },
            { folder: '01_Research', tag: 'by product' },
            { file: 'ColorSnap / PRO+ / Portals' },
            { folder: '02_Synthesis', tag: 'by quarter' },
            { file: 'Q1 2024 Findings' },
            { folder: '03_Stakeholder Decks' },
            { file: 'YYYY-MM_Product_Topic' },
            { folder: '04_Archive', tag: 'read-only' },
            { file: 'Pre-2024 files preserved' },
          ],
        },
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
            /* What a template contains is a checklist, and these had been
               folded into one sentence each. A sentence listing five things
               is read once; five lines are scanned, which is what someone
               deciding whether to adopt a template actually does. */
            { t: 'Interview guide', b: '', list: [
              'Standardised opening and consent framing',
              'Modular question blocks by research goal',
              'Probe suggestions for each section',
              'Consistent time allocation per block',
              'Debrief and follow-up prompts',
            ] },
            { t: 'Insight deck', b: '', list: [
              'Branded slide template',
              'Executive summary on slide one',
              'One insight per slide, evidence-backed',
              'Severity and frequency scoring',
              'Recommended next actions at the close',
            ] },
            { t: 'Stakeholder presentation', b: '', list: [
              'Three slides maximum for leadership reviews',
              'Business impact framing first',
              'Data visualised, not listed',
              'A clear ask or decision required',
              'Appendix for anyone wanting detail',
            ] },
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
        block: {
          kind: 'journey',
          cols: ['Step', 'What happens', 'Why it holds'],
          rows: [
            ['Research conducted', 'Interviews, usability tests and surveys, run by the research team.', 'The raw material, owned by the people closest to it.'],
            ['Synthesis and insight deck', 'Findings written up in the standardised insight format, linked to source files.', 'One format means a reader knows where to look.'],
            ['Handoff session', 'The researcher walks designers through the findings directly.', 'Not a document tossed over a wall.'],
            ['Design takes over', 'Insights referenced in Figma annotations.', 'The rationale travels with the design.'],
            ['Design critique', 'A structured crit checks decisions back against the research that informed them.', 'The loop closes instead of trailing off.'],
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
      {
        kicker: 'What shipped, what did not',
        heading: 'Finished, and left in the pipeline',
        body: [],
        block: {
          kind: 'compare',
          before: {
            h: 'Completed',
            items: [
              'Full file architecture rebuilt in Teams and OneDrive',
              'Research templates standardised: interview, insight, stakeholder',
              'Researcher-to-designer handoff process established',
              'Design critique framework introduced',
              'Cross-linking of documents for easy navigation',
              'Research infrastructure working consistently across the team',
            ],
          },
          after: {
            h: 'In pipeline, next phase',
            items: [
              'Designer-side file infrastructure: Figma library governance',
              'Component ownership and version-control process',
              'Cross-product design consistency review',
              'Onboarding documentation for new team members',
            ],
          },
        },
      },
    ],
    reflection: {
      heading: 'What I finished, what remained, and what I learned',
      body: [
        'Design ops problems are rarely about tools or templates. They are about trust and habit. The file architecture was broken partly because nobody had taken responsibility for it, and creating structure also meant creating ownership. That took as much facilitation as it did design.',
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
          'A self-initiated concept project, not a client engagement. I built it to explore product thinking in premium consumer fintech, a domain distinct from my enterprise work.',
          'Cross-border remittances are a high-frequency, high-trust activity for millions of diaspora families, yet most transfer apps treat them as simple one-way transactions. There is no shared context, no family visibility, and no way to save towards a shared goal.',
          'The result: anxiety at the point of transfer, uncertainty at the receiving end, and no mechanism for building the kind of shared financial trust families actually operate on. And there is a positioning gap. The apps that move money fast feel disposable. The institutions that feel permanent enough to trust with family money, the heritage banks, are slow, opaque and built for individuals rather than families.',
        ],
      },
      {
        kicker: 'The concept',
        heading: 'A Digital Vault-Atelier: vault-grade trust, made for families',
        body: [
          'KinVault Heritage reframes the transfer as a relationship. Its north star is the Digital Vault-Atelier: the security and permanence of a private vault, delivered with the bespoke, considered craft of a studio. Families connect through Kin-Link, a trusted pairing between sender and recipient.',
          'Three capabilities sit on top: AI-driven rate triggers that take the anxiety out of timing, direct bill payment so a sender can settle a utility without the money being redirected, and real-time status both ends can watch.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Shared vaults', b: 'Progress indicators, contributor visibility and activity history. Both sides of the relationship see the same vault state, which removes the need for a message to confirm anything.' },
            { t: 'AI rate triggers', b: 'Rate alerts in plain language. Not “GBP/INR hit 106.50” but “the best rate in the last 14 days, good time to send”. Simple, user-controlled, and explained rather than announced.' },
            { t: 'Direct bill payment', b: 'Pay a utility provider directly, not just a bank account. The sender sees confirmation that the electricity bill was cleared, not just that money was sent.' },
            { t: 'Real-time status', b: 'Tracking with an estimated arrival, a fee breakdown shown at the decision point rather than buried in confirmation, and a rate lock so the figure quoted is the figure that lands.' },
          ],
        },
        pull: 'Closer than a vault. Connected like kin.',
        shot: 'wide',
        caption: 'Shared vault: funds allocated to named family goals',
        alt: 'Mom’s Vault: a £450 balance split across healthcare, groceries and utility bills, each on its own slider, with a note that allocating to pockets lets shared bills be prioritised automatically.',
      },
      {
        kicker: 'Design process',
        heading: 'Research-led, prototype-validated',
        body: [
          'Four stages, each one narrowing the brief rather than decorating it.',
        ],
        block: {
          kind: 'steps',
          items: [
            { t: 'Informal interviews with six diaspora users', b: 'People who regularly send money internationally. Common themes: anxiety about exchange rates and feeling caught at a bad one, frustration that recipients cannot see transfer status without asking, and a wish to save towards shared goals like house repairs or school fees rather than sending ad-hoc amounts.' },
            { t: 'Competitive audit: Wise, Remitly, WorldRemit', b: 'All three treat a transfer as a transactional event with no persistent relationship layer. Rate alerts exist in Wise, but they are basic threshold notifications with no context, no control and no explanation of why the rate matters for this particular transfer. None offer shared savings or direct bill payment as a category.' },
            { t: 'Concept framing', b: 'Three design targets from the research, rate anxiety, opacity anxiety and misdirection anxiety, each paired to a feature that neutralises it. A fourth, positioning insight shaped the brand: families want a money tool that feels permanent and considered, not disposable.' },
            { t: 'High-fidelity prototype and self-testing', b: 'An interactive Figma prototype covering vault creation, smart transfer with a rate trigger, and bill payment, validated with three of the original interview participants. The key finding: the AI rate trigger felt too smart without enough explanation of how it decided to fire.' },
          ],
        },
      },
      {
        kicker: 'The rule',
        heading: 'Every feature had to neutralise a specific anxiety',
        body: [
          'The concept resolved to one rule. Every feature had to neutralise a specific anxiety in the transfer relationship, not just add functionality.',
        ],
        block: {
          kind: 'journey',
          cols: ['The anxiety', 'In the user’s words', 'Neutralised by'],
          rows: [
            ['01 Timing', '“Am I sending at a bad rate right now?”', 'AI rate triggers. Plain-language alerts, like “best rate in 14 days”, shown with the rate chart, so the user decides rather than the algorithm.'],
            ['02 Opacity', '“Did it arrive? Was it enough?”', 'Shared vaults. Both sides see the same balance, contributors and live transfer status, so no message is needed to confirm an arrival.'],
            ['03 Misdirection', '“Will the money reach the actual bill?”', 'Direct bill payment. Pay the utility directly, so the sender sees the bill cleared rather than just that money was sent.'],
          ],
        },
        shot: 'trio',
        caps: [
          'Review and rate lock: the fee breakdown shown at the decision point, not buried in confirmation',
          'Transfer status: every step visible at both ends of the transfer',
          'Bill Pay Abroad: pay a utility directly, not a bank account',
        ],
        alts: [
          'The review screen: sending £500 to Mom at 106.50 rupees to the pound, zero fee, and ₹53,250 shown as what the recipient gets, above a confirm and send button.',
          'The transfer status screen: initiated, arriving in about two hours, with three steps showing funds secured, conversion in progress and deposit pending, plus a reference and a share receipt button.',
          'The pay a bill abroad screen: categories for electricity, mobile, healthcare and tuition, popular providers, and ₹12,500 shown as £116.82 with no fee and instant arrival.',
        ],
      },
      {
        /* The prototype journey. The main site walks these four screens in
           order under one sentence of framing; the condensed version kept
           the sentence and dropped the walk. */
        kicker: 'The prototype',
        heading: 'The core send-money journey, end to end',
        body: [
          'The high-fidelity prototype covers the journey that matters: from the family dashboard through to a transfer both ends can watch.',
          'The design principle underneath every screen is the same. Each feature reduces a specific anxiety in the transfer relationship, whether uncertainty, opacity or mistiming, rather than adding functionality for its own sake.',
        ],
        shot: 'flow',
        caps: ['Family dashboard', 'Smart transfer', 'Review and rate lock', 'Transfer status'],
        alts: [
          'The KinVault family dashboard, showing shared vaults and recent activity.',
          'The smart transfer screen, allocating funds across categories.',
          'The review screen, showing the exchange rate locked before sending.',
          'The transfer status screen, tracking the money end to end.',
        ],
      },
      {
        kicker: 'The system',
        heading: 'A visual system built to feel permanent',
        body: [
          'The creative direction, “The Financial Atelier”, pairs a deep heritage navy with a pearl surface and an emerald accent for growth. Manrope keeps the type quietly geometric and modern. Generous whitespace and vault-grade security cues make a fast app feel like a considered one.',
        ],
        shot: 'wide2',
        caption: 'Smart transfer, with the rate decision left to the sender',
        alt: 'Smart Transfer: a rule to send £500 when the pound to rupee rate reaches 106.50, today’s rate shown at 105.12, and a breakdown with no fee, no markup and ₹53,250 guaranteed to arrive.',
      },
      {
        kicker: 'What I would measure',
        heading: 'The bet each feature makes, and the test for it',
        body: [
          'This is a concept, so there are no live results to report, and I am not going to put invented percentages on a product nobody has used. What I can be specific about is the bet each feature makes and the metric I would test it against.',
        ],
        block: {
          kind: 'journey',
          cols: ['Measure', 'The bet', 'The test'],
          rows: [
            ['Send-flow completion', 'Plain-language rate triggers remove the anxiety that makes people abandon a transfer.', 'Completion rate, before against after.'],
            ['“Where is my transfer?” contacts', 'Shared visibility removes the need to ask.', 'Inbound status queries per hundred transfers.'],
            ['30-day repeat transfers', 'The relationship layer brings people back.', 'Repeat rate against a transactional baseline.'],
          ],
        },
        pull: 'The value of this project is the reasoning, not the numbers.',
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
    exhibit: {
      tag: 'Exhibited',
      festival: 'London Design Festival 2025',
      lead: 'Amble was shown to the public as part of Tender Interbeing: The Future of Design with Empathy.',
      emphasis: 'Tender Interbeing: The Future of Design with Empathy',
      sub: 'A seven-month research project, selected for one of the world’s leading design festivals and exhibited alongside industry.',
      facts: [
        { k: 'Dates', v: '17–19 September 2025' },
        { k: 'Venue', v: 'White City Warehouse, London W12' },
        { k: 'Festival', v: 'London Design Festival' },
      ],
    },
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
            /* Marked, because the heading says two ideas were set aside and
               this is the third card. Unlabelled it read as a third thing
               abandoned, which left the section with no answer in it. */
            { t: 'Amble', tag: 'Carried forward', kept: true, b: 'A living, bioengineered plant system. A plant is already emotionally legible. It does not demand interaction, it shares the space. That let us design support that is ambient, sensory, and quiet.' },
          ],
        },
      },
      {
        kicker: 'Design process',
        heading: 'Research-through-design, end to end',
        body: [
          'I led the synthesis, triangulating what participants told us against an evidence base spanning environmental psychology, synthetic biology and inclusive design. Where a focus-group insight and a research finding agreed, we had a firm design principle. Where they diverged, we had a question worth designing into the concept.',
        ],
        block: {
          kind: 'steps',
          items: [
            { t: 'Anchored in 2065', b: 'Speculative design combined with a literature review and primary research. Setting the concept forty years out moved conversations away from “what gadget would you buy” and towards “what should later life feel like”, which is where the useful insight lives.' },
            { t: 'Focus groups across two generations', b: 'Two groups of younger adults aged 20 to 40 in Winchester, and fifteen older adults aged 50 to 80 in Southampton reached through churches and community groups, run as a relaxed afternoon rather than a clinical interview.' },
            /* The synthesis, the brand and the exhibition were cut from this
               list and left to the sections that expand on them. That broke
               the arc: the list is what the seven months looked like end to
               end, and it stopped at the halfway point. */
            { t: 'Synthesising lived experience against the evidence', b: 'I led the synthesis, triangulating what participants told us against an evidence base spanning environmental psychology, synthetic biology and inclusive design. Where a focus-group insight and a research finding agreed, we had a firm design principle. Where they diverged, we had a question worth designing into the concept.' },
            { t: 'From insight to five domains', b: 'Each domain answered a specific, evidenced need rather than showcasing a technology. The test for every feature was the same: does this support independence, or quietly undermine it.' },
            { t: 'A brand that reads as living, not technical', b: 'Branding was treated as part of the design argument rather than decoration. Every choice, the serif wordmark, the earth-toned palette, the voice that speaks as a companion rather than an assistant, was made to convince people that Amble is a living presence and not another device.' },
            { t: 'Exhibited at the London Design Festival', b: 'Translating seven months of research into a public exhibition forced a final round of editing: what does a visitor need to understand in ninety seconds?' },
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
        block: {
          kind: 'compare',
          before: {
            h: 'Younger adults, 20 to 40',
            items: [
              'They pictured later life as a time to explore, learn and travel, not decline, while accepting they would likely face reduced mobility or chronic health conditions.',
              'They were openly frustrated with today’s assistant technology. Alexa and phone-based AI were described as prompt-based and transactional, passive tools that demand constant input to be useful.',
              'They wanted intelligence that is ambient and sensory, adapting quietly instead of waiting to be asked, and they responded to Amble being a real plant rather than a device.',
            ],
          },
          after: {
            h: 'Older adults, 50 to 80',
            items: [
              'Many described retirement as involuntary, brought on by illness or burnout, and spoke about the loss of identity and structure that followed.',
              'They held tightly to small acts of independence, shopping, gardening, birdwatching, as markers of dignity and a connection to the outside world.',
              'Their message to assistive technology was clear: support the routine, never replace it. A system that does everything for you takes something away.',
            ],
          },
        },
        /* These were one `pull`: three people's words run together into a
           single paragraph with no attribution, so nobody could tell where
           one voice ended and the next began, or which group said what.
           Separated, and each given its source back. */
        quotes: [
          { q: 'Plants can give emotional support in a way that animals or humans can’t.', who: 'Focus group · younger adults' },
          { q: 'I retired through ill health, so I didn’t have a choice. It was taken away from me.', who: 'Focus group · older adults' },
          { q: 'I still like to do my own shopping. I want to go. I don’t like having a delivery.', who: 'Focus group · older adults' },
        ],
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
        kicker: 'The concept, in scenes',
        heading: 'Care, woven into the home',
        body: [
          'The team visualised Amble through a brand film and a set of concept scenes, hand-drawn growth layered over real domestic spaces. The illustration style was a deliberate choice: warm and sketched, never the cold render of a tech product.',
        ],
        shot: 'scenes',
        caps: [
          'The premise: by 2065, the way we live at home could look completely different',
          'Bioluminescence and rhythmic light supporting rest and sleep',
          'Domestic utility: quiet help with the everyday tasks people would rather not think about',
          'The wearable extension: clean air and a sense of calm, carried beyond the home',
        ],
        alts: [
          'A domestic interior with illustrated growth drawn through it, showing how different a home could look by 2065.',
          'A bedroom lit by soft bioluminescence, the plant system supporting rest.',
          'A utility space with the plant system drawn into it, handling everyday chores.',
          'The wearable module, a portable air-filtering extension carried outside the home.',
        ],
      },
      {
        kicker: 'The brand',
        heading: 'A brand that feels alive, not engineered',
        brand: {
          logo: true,
          logoCaption:
            'A Playfair Display wordmark, lowercase for approachability. A flower grows from the “a” and a leaf sprouts from the “e”, marking Amble as both biological and intelligent.',
          swatches: [
            { hex: '#F0EAD2', name: 'Parchment' },
            { hex: '#FFD1C3', name: 'Pale Dogwood' },
            { hex: '#B6D366', name: 'Yellow Green' },
            { hex: '#A98467', name: 'Chamoisee' },
            { hex: '#654937', name: 'Coffee' },
          ],
          swatchCaption:
            'Muted earth tones, chosen for the calm familiarity research links to older adults’ preferences.',
        },
        body: [
          'The brand had one job: convince people that Amble is a living companion, not a gadget. Every decision, from the typeface to the tone of voice, was grounded in research on how older adults read, trust, and feel at ease.',
          /* The wordmark and the palette are shown below, so this no longer
             describes them. What it keeps is the part a picture cannot
             carry: why those typefaces, on what evidence. */
          'Playfair Display is paired with the geometric sans Poppins, and the pairing was evidence-led: studies show older adults read serif type more comfortably at larger sizes, and that typefaces themselves carry personality, in this case sincerity and calm.',
          'The voice follows the same rule. Amble speaks as a presence rather than an assistant: warm, calm and mindful, helpful but never insistent, offering reassurance in moments of uncertainty without ever overwhelming the person it is speaking to.',
        ],
        block: {
          kind: 'cards',
          items: [
            { t: 'Empathy', b: 'Trust built through warmth and approachability.' },
            { t: 'Regeneration', b: 'Systems that grow, adapt and replenish.' },
            { t: 'Sensory intelligence', b: 'Communicating through light, scent and sound.' },
            { t: 'Seamlessness', b: 'Intelligence felt, not noticed.' },
            { t: 'Decentralisation', b: 'Support distributed gently across the space.' },
            { t: 'Inclusivity', b: 'Designed for the full range of later-life needs.' },
          ],
        },
        /* Was a sentence naming the five colours, which the swatches above
           now say better. The tagline is the thing worth pulling out. */
        pull: 'Let your home grow with you.',
      },
      {
        kicker: 'Outcome',
        heading: 'From research project to public exhibition',
        body: [
          'Amble was shown to the public as part of “Tender Interbeing: The Future of Design with Empathy” at the London Design Festival in September 2025, at the White City Warehouse in London W12, alongside industry.',
          'A seven-month research project, selected for one of the world’s leading design festivals and exhibited alongside industry.',
          'Translating seven months of research into an exhibition was a design problem of its own: two posters carrying the full argument, the concept, the evidence and the rationale, condensed to what a visitor can absorb in a single pass.',
        ],
        shot: 'posters',
        caps: ['Exhibition poster: the concept and brand overview', 'Exhibition poster: product features and the evidence base'],
        alts: [
          'The first exhibition poster, carrying the concept and the brand overview.',
          'The second exhibition poster, carrying the product features and the evidence behind them.',
        ],
      },
      {
        kicker: 'Project partners',
        heading: 'In partnership with',
        body: [
          'A Global Smart Lab live project at the Winchester School of Art, University of Southampton, with Rodd Design Studio. Team Gen2065: Nysargi Giridhar Karnam, Rhea D’Silva, Smiti Baraskar and Sayantan Dutta, supervised by Dr Shan Wang and Dr Angelina Pan, with creative guidance from Ben Davies.',
        ],
        shot: 'partners',
        alts: ['Rodd Design Studio', 'Winchester School of Art', 'University of Southampton'],
      },
    ],
    reflection: {
      heading: 'What leading a foresight project taught me',
      body: [
        'The discipline of speculative design is not imagination, it is restraint. The easy version of this brief is a beautiful film about plants in 2065. The useful version traces every idea back to evidence. As project lead, most of my work was holding that line, asking the team repeatedly which research insight a given feature actually answered. The concept is bold, but nothing in it is invented for effect.',
        'Leading a multidisciplinary team through ambiguity was the real lesson. For seven months there was no screen to review, no flow to test, no obvious sign of progress. Keeping four people aligned and confident without those anchors meant being clear about the questions we were answering, even as the answers kept changing. Two of our concepts were abandoned. Naming that as progress rather than failure was part of the job.',
      ],
    },
  },
];

export const byCutSlug = Object.fromEntries(cutCases.map((c) => [c.slug, c]));
