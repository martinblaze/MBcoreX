export type BlogCategory =
  | "Software Engineering"
  | "Artificial Intelligence"
  | "Cybersecurity"
  | "Cloud"
  | "DevOps"
  | "UI/UX"
  | "Case Studies"
  | "Business Technology"
  | "Pricing & Comparisons"

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "code"; code: string; lang: string; filename?: string }
  /** Contextual links out to a relevant service page and/or case study — the internal-linking pattern for commercial-intent posts. */
  | { type: "links"; heading: string; items: { label: string; href: string }[] }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  tags: string[]
  authorName: string
  authorRole: string
  publishedAt: string
  image: string
  featured?: boolean
  body: BlogBlock[]
}

export const blogCategories: BlogCategory[] = [
  "Software Engineering",
  "Artificial Intelligence",
  "Cybersecurity",
  "Cloud",
  "DevOps",
  "UI/UX",
  "Case Studies",
  "Business Technology",
  "Pricing & Comparisons",
]

export const blogPosts: BlogPost[] = [
  {
    slug: "how-we-use-ai-in-client-projects",
    title: "How We Actually Use AI in Client Projects (And Where We Don't)",
    excerpt:
      "AI-assisted development is the most misunderstood part of what we sell. Here's a specific, honest breakdown of where AI tooling helps a build move faster — and where a human still has to do the thinking.",
    category: "Artificial Intelligence",
    tags: ["AI", "Productivity", "Engineering Process"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-06-02",
    image: "/images/blog/how-we-use-ai-in-client-projects.jpg",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Every client conversation eventually gets to the same question: \"do you use AI to build this?\" The honest answer is yes — but the follow-up question matters more: for what, exactly? Vague answers here (\"we use AI throughout the process\") are usually a sign the person hasn't thought carefully about where AI actually helps versus where it just moves risk around. So here's the specific breakdown we give clients.",
      },
      { type: "heading", text: "Where AI genuinely speeds us up" },
      {
        type: "list",
        items: [
          "Boilerplate and repetitive CRUD scaffolding — forms, API route shapes, admin table views — where the pattern is well understood and the risk of a subtle bug is low.",
          "First-draft test cases, especially edge cases a human reviewer might not think to write from scratch but can quickly evaluate once suggested.",
          "Code review as a second pass — after a human writes and reviews code, an AI pass catches a different class of issue (inconsistent error handling, missed null checks) than a tired human eye does at 6pm.",
          "Documentation drafts — README updates, API docs, internal runbooks — which get written far less often than they should if a human has to do it from a blank page every time.",
        ],
      },
      { type: "heading", text: "Where we don't let AI drive" },
      {
        type: "list",
        items: [
          "Architecture decisions — how data flows, where trust boundaries sit, what's synchronous versus async. This requires understanding the specific business, not pattern-matching against public code.",
          "Anything touching authentication, payments, or patient/personal data. These get written by a human and reviewed by a human, with AI suggestions treated as a starting point at most.",
          "Final release sign-off. A person decides what ships, every time.",
        ],
      },
      {
        type: "quote",
        text: "AI is a force multiplier on the parts of engineering that were always mechanical. It is not a substitute for the parts that were always judgment.",
      },
      {
        type: "paragraph",
        text: "The net effect for clients isn't \"AI wrote your app.\" It's that the mechanical 30-40% of a build — the parts that used to eat days without much decision-making — now takes hours, which means more of the calendar goes to the parts that actually need a human: the architecture, the edge cases specific to your business, and the security review. That's the actual case for AI-assisted delivery: not less human involvement, but human time spent where it counts.",
      },
    ],
  },
  {
    slug: "typescript-server-actions-by-default",
    title: "Why We Default to TypeScript and Server Actions in Every New Project",
    excerpt:
      "Two boring, unglamorous defaults quietly prevent an outsized share of production bugs. A look at why TypeScript and Server Actions are the default starting point for new MB CoreX builds, not a preference.",
    category: "Software Engineering",
    tags: ["TypeScript", "Next.js", "Architecture"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-05-18",
    image: "/images/blog/typescript-server-actions-by-default.jpg",
    body: [
      {
        type: "paragraph",
        text: "Most technology choices are trade-offs. This one mostly isn't. For new web projects, we default to TypeScript end-to-end and Next.js Server Actions for anything that mutates data, and we need a specific reason to deviate — not the other way around.",
      },
      { type: "heading", text: "TypeScript catches the bug before the client does" },
      {
        type: "paragraph",
        text: "The value of static types isn't abstract type safety for its own sake — it's that an entire category of production incident (wrong shape of data passed between a form and an API, a renamed field that one call site missed) becomes a compile error instead of a support ticket. For client work specifically, that matters more than usual: we're often not the ones on call when something breaks at 11pm, so the fewer categories of bug that can reach production at all, the better for everyone.",
      },
      { type: "heading", text: "Server Actions remove a whole class of API surface" },
      {
        type: "paragraph",
        text: "Before Server Actions, a simple form submission meant: define an API route, define its request/response types by hand, keep those in sync with the frontend, and remember to validate on the server even though you already validated on the client. Every one of those steps is a place for drift to creep in. A Server Action collapses that into one function, colocated with the form that calls it, type-checked end to end.",
      },
      {
        type: "code",
        lang: "ts",
        filename: "actions/contact.ts",
        code: `"use server"

import { contactFormSchema } from "@/lib/validations/contact"

export async function submitContactForm(input: unknown) {
  // Never trust client-side validation alone — re-validate on the server.
  const values = contactFormSchema.parse(input)

  await sendNotificationEmail(values)

  return { success: true as const }
}`,
      },
      {
        type: "paragraph",
        text: "Notice the schema is defined once and imported — the same Zod schema validates on the client (for instant form feedback) and re-validates on the server (because client-side validation is a UX nicety, not a security boundary). That single-source-of-truth pattern is what actually prevents the class of bug where a form silently accepts bad data because someone updated one side and not the other.",
      },
      {
        type: "paragraph",
        text: "None of this is exotic. That's the point — boring, well-typed, server-validated defaults quietly prevent more incidents than any clever architecture decision does.",
      },
    ],
  },
  {
    slug: "secure-by-design-nist-800-53-explained",
    title: "Secure by Design: What NIST 800-53 Actually Asks You to Do",
    excerpt:
      "NIST 800-53 gets treated as government-only paperwork. Underneath the control catalog, most of it is just disciplined engineering practice — here's what it actually asks for, translated for a small engineering team.",
    category: "Cybersecurity",
    tags: ["NIST", "Compliance", "Secure Coding"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-04-27",
    image: "/images/blog/secure-by-design-nist-800-53-explained.jpg",
    body: [
      {
        type: "paragraph",
        text: "NIST 800-53 Rev. 5 has hundreds of controls organized into families with names like \"Access Control\" and \"System and Communications Protection.\" It reads like it was written for federal agencies with dedicated compliance teams — because a lot of it was. But strip away the paperwork framing and most of the controls are describing engineering discipline that any serious team should already want, whether or not a framework is forcing the issue.",
      },
      { type: "heading", text: "A few controls, translated" },
      {
        type: "list",
        items: [
          "Access Control (AC family) — in plain terms: nobody gets more access than their role requires, and access is reviewed, not granted once and forgotten.",
          "Audit and Accountability (AU family) — you can answer \"who did what, and when\" after the fact, because you actually log meaningful events.",
          "System and Communications Protection (SC family) — data is encrypted in transit and, where it matters, at rest; trust boundaries between systems are explicit, not assumed.",
          "Configuration Management (CM family) — your infrastructure and dependencies are defined and versioned, not hand-configured and undocumented.",
        ],
      },
      {
        type: "paragraph",
        text: "None of that is exotic for a competent engineering team. What NIST adds is the requirement to document that you're doing it, consistently, and can prove it — which is where most small teams fall down. Not because the practice is missing, but because it lives in one engineer's head instead of anywhere reviewable.",
      },
      { type: "heading", text: "What this looks like in a build, concretely" },
      {
        type: "code",
        lang: "ts",
        filename: "middleware.ts",
        code: `// Security headers applied at the edge — a small, concrete example
// of "System and Communications Protection" in a Next.js project.
export function middleware(request: Request) {
  const response = NextResponse.next()
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  return response
}`,
      },
      {
        type: "paragraph",
        text: "That snippet alone touches parts of two or three control families. It's a few lines of code, not a compliance department. That's the pattern we apply on client work: treat the frameworks as a checklist for practices we'd want anyway, and make sure the evidence — logs, config, documentation — exists as a byproduct of how we build, not as a separate project bolted on before an audit.",
      },
      {
        type: "quote",
        text: "We present this as applied knowledge and engineering practice, not a certification claim — the goal is software that would hold up under a real audit, not a badge on a website.",
      },
    ],
  },
  {
    slug: "right-sizing-cloud-infrastructure-for-startups",
    title: "Right-Sizing Cloud Infrastructure for a Pre-Revenue Startup",
    excerpt:
      "The most common cloud mistake we see isn't insecurity — it's over-provisioning for scale that doesn't exist yet. A practical framework for sizing infrastructure to where your product actually is.",
    category: "Cloud",
    tags: ["Cloud Architecture", "Startups", "Cost"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-04-09",
    image: "/images/blog/right-sizing-cloud-infrastructure-for-startups.jpg",
    body: [
      {
        type: "paragraph",
        text: "We regularly meet early-stage teams paying for infrastructure sized for ten thousand concurrent users while serving a few dozen. It's an easy mistake — cloud provider default templates and \"best practice\" guides are usually written for companies that already have the scale problem, not the ones trying to get their first ten paying customers.",
      },
      { type: "heading", text: "A simpler default stack" },
      {
        type: "list",
        items: [
          "Managed platform hosting (Vercel or equivalent) over self-managed container orchestration, until there's a specific reason Kubernetes earns its complexity.",
          "A single managed Postgres instance with automated backups, not a multi-region cluster, until write volume or compliance actually requires it.",
          "Serverless functions for anything spiky or infrequent, rather than an always-on server sized for peak load that mostly sits idle.",
          "Usage-based monitoring from day one, so the decision to scale up is based on real numbers, not guesswork.",
        ],
      },
      {
        type: "paragraph",
        text: "The goal isn't \"cheap\" for its own sake — it's that every dollar spent on infrastructure a pre-revenue product doesn't need yet is a dollar not spent extending runway. And the architectural cost of starting simple is usually lower than founders fear: a well-structured monolith on managed hosting can be migrated to a more distributed setup later, when there's an actual, measured reason to.",
      },
      { type: "heading", text: "The one place we don't cut corners" },
      {
        type: "paragraph",
        text: "Security posture doesn't scale down with infrastructure size. Encrypted connections, least-privilege access, and a real backup/restore plan cost almost nothing at small scale and are far more expensive to retrofit later than to build in from the start. \"Right-sized\" means matching compute and redundancy to actual load — it never means skipping the security fundamentals because the user count is still small.",
      },
    ],
  },
  {
    slug: "minimal-cicd-pipeline-that-catches-bugs",
    title: "A Minimal CI/CD Pipeline That Actually Catches Bugs Before Production",
    excerpt:
      "You don't need a platform team to have a CI/CD pipeline that earns its keep. Here's the small, opinionated pipeline we run on client projects — and why each step is there.",
    category: "DevOps",
    tags: ["CI/CD", "GitHub Actions", "Quality"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-03-21",
    image: "/images/blog/minimal-cicd-pipeline-that-catches-bugs.jpg",
    body: [
      {
        type: "paragraph",
        text: "A lot of small teams either skip CI/CD entirely (\"we'll add it later\") or over-build it into something only they understand. The pipeline below is deliberately small — every step exists because it has caught a real bug on a real project, not because a tutorial said to include it.",
      },
      {
        type: "code",
        lang: "yaml",
        filename: ".github/workflows/ci.yml",
        code: `name: CI

on:
  pull_request:
    branches: [main]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm run build`,
      },
      { type: "heading", text: "Why these four steps specifically" },
      {
        type: "list",
        items: [
          "Lint — catches unused variables, unsafe patterns, and style drift before a reviewer has to mention it in a PR comment.",
          "Type-check — the single highest-leverage step; a huge share of production incidents on typed codebases are things a type-checker would have caught if it had actually been run in CI, not just locally.",
          "Build — proves the app compiles for production, not just for local dev, which are not always the same thing (different environment variables, different bundler behavior).",
          "Gated on pull request, not push to main — nothing lands in the main branch without passing all three, which is what actually makes the pipeline meaningful rather than decorative.",
        ],
      },
      {
        type: "paragraph",
        text: "Notice what's not here: no elaborate deployment orchestration, no custom runner infrastructure. For most client projects on managed hosting, the deploy step is handled by the platform's own Git integration — the value of the CI/CD pipeline is entirely in the verification gate before that deploy happens. Add complexity when a specific, real problem justifies it, not by default.",
      },
    ],
  },
  {
    slug: "designing-trust-ui-patterns-for-credibility",
    title: "Designing Trust: UI Patterns That Make a New Software Company Look Credible",
    excerpt:
      "Trust is a design problem before it's a marketing problem. A breakdown of the specific interface patterns that separate a site visitors trust from one they bounce off of in five seconds.",
    category: "UI/UX",
    tags: ["Design", "Conversion", "Branding"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-03-05",
    image: "/images/blog/designing-trust-ui-patterns-for-credibility.jpg",
    body: [
      {
        type: "paragraph",
        text: "Every young company faces the same design problem: you're asking a stranger to trust you with a project (or their data) before you've had a chance to prove yourself in conversation. The interface has to do work that a track record would normally do. A few patterns carry a disproportionate share of that weight.",
      },
      { type: "heading", text: "Specificity beats superlatives" },
      {
        type: "paragraph",
        text: "\"We're the best software company\" persuades no one — it can't be checked. \"We built the lab management system DiagSync now uses for patient records and reporting\" is checkable, and checkable claims read as more credible even when the reader doesn't actually go verify them. Every unverifiable superlative on a site is a small trust tax; every specific, named example pays it back.",
      },
      { type: "heading", text: "Consistency is itself a trust signal" },
      {
        type: "paragraph",
        text: "Visitors register consistency below the level of conscious attention — the same button style meaning the same thing everywhere, the same spacing rhythm section after section. Inconsistency reads as \"assembled quickly,\" even to someone who couldn't articulate why the page feels off. That's the real argument for a proper design system rather than styling each page ad hoc: it isn't aesthetic perfectionism, it's a legibility signal.",
      },
      {
        type: "list",
        items: [
          "Restraint with color reads as more premium than heavy use of a brand's boldest accent color — a small amount of red used deliberately says more than red everywhere.",
          "Real screenshots of real product outperform stock illustrations of generic dashboards, even when the stock version is more polished — specificity outweighs polish.",
          "A visible, honest process (discovery → design → build → results) reduces perceived risk more than a vague promise of quality.",
        ],
      },
      {
        type: "quote",
        text: "Trust isn't a section on the page. It's the accumulated effect of every section not giving the visitor a reason to doubt.",
      },
    ],
  },
  {
    slug: "lessons-from-digitizing-a-diagnostics-lab",
    title: "What We Learned Digitizing a Diagnostics Lab's Paper Workflow",
    excerpt:
      "Behind the DiagSync case study: the specific lessons from replacing a paper-based lab workflow with software, for anyone considering a similar digitization project in healthcare or another regulated space.",
    category: "Case Studies",
    tags: ["Healthcare", "Case Study", "Digitization"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-02-14",
    image: "/images/blog/lessons-from-digitizing-a-diagnostics-lab.jpg",
    body: [
      {
        type: "paragraph",
        text: "DiagSync is our laboratory management system case study, and the full breakdown lives on its portfolio page. This post is the more general lesson underneath it — what actually matters when digitizing a workflow that's currently running on paper, in a setting where mistakes have real consequences.",
      },
      { type: "heading", text: "Map the workflow before you design a single screen" },
      {
        type: "paragraph",
        text: "It's tempting to start from a dashboard template and back into the workflow. We did the opposite: walked through exactly how a sample moved from intake to result, on paper, with the staff who did it daily. Two things came out of that which a template would never have surfaced — where handoffs between roles were the actual source of delay (not the record-keeping itself), and which \"obviously digital\" steps staff actually preferred to keep manual, at least initially, because the paper version had a trust property the software didn't have yet.",
      },
      { type: "heading", text: "Migrate incrementally, not all at once" },
      {
        type: "paragraph",
        text: "A lab running on paper can't stop operating while software is built. We shipped the patient-record and reporting modules first — the highest-friction, highest-error part of the paper process — and let inventory and automation follow once staff had already built trust in the core system. A big-bang cutover would have meant asking staff to trust the entire system on day one, with no smaller wins along the way to build that trust incrementally.",
      },
      {
        type: "list",
        items: [
          "Treat access control and audit logging as core requirements from the first architecture decision — retrofitting them later in a healthcare-adjacent system is far more expensive and risky than starting with them.",
          "Involve the people who'll actually use the software in reviewing flows before UI is finalized, not after — process knowledge outranks design intuition here.",
          "Expect the highest-value digitization win to be the most error-prone manual step, not the most visually impressive one.",
        ],
      },
      {
        type: "paragraph",
        text: "The full problem, solution, technology and results breakdown for this project is on the DiagSync case study page — this post is the transferable lesson for anyone facing a similar paper-to-software migration.",
      },
    ],
  },
  {
    slug: "custom-software-vs-off-the-shelf-framework",
    title: "Custom Software vs. Off-the-Shelf: A Framework for Deciding",
    excerpt:
      "\"Should we build this or buy it?\" is a real question, not a sales pitch. A practical framework for when custom software actually earns its cost — and when it doesn't.",
    category: "Business Technology",
    tags: ["Strategy", "Software Buying", "ROI"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-01-22",
    image: "/images/blog/custom-software-vs-off-the-shelf-framework.jpg",
    body: [
      {
        type: "paragraph",
        text: "We build custom software for a living, which makes us a biased source on this question — so it's worth saying plainly upfront: a real share of the businesses we talk to are better served by an off-the-shelf tool, at least to start. This is the framework we actually use in that conversation, including the cases that point away from a custom build.",
      },
      { type: "heading", text: "Buy off-the-shelf when..." },
      {
        type: "list",
        items: [
          "The workflow you need is genuinely standard — invoicing, basic CRM, scheduling — and your business doesn't do it meaningfully differently from everyone else in your category.",
          "You need to validate a process or a market before investing in a system built around it; a general tool that's \"good enough\" now beats a perfect system built for a process that might change in three months.",
          "The total cost of a subscription, over the timeframe you actually care about, is clearly lower than a build — and it usually is, at small scale.",
        ],
      },
      { type: "heading", text: "Build custom when..." },
      {
        type: "list",
        items: [
          "Your workflow is a genuine point of competitive difference, and forcing it into a generic tool means bending the business to fit the software instead of the other way around.",
          "You're stitching together three or four different tools with fragile manual work between them — the integration cost and error rate of the workaround starts to exceed the cost of one system built to do the whole job.",
          "Data ownership, security posture, or compliance requirements mean a third-party SaaS introduces risk you can't fully control or audit.",
          "You've outgrown the ceiling of an off-the-shelf tool's customization, and every workaround is now costing more staff time than a proper build would.",
        ],
      },
      {
        type: "quote",
        text: "The right question isn't \"custom or off-the-shelf\" in the abstract — it's whether this specific workflow is where your business actually differentiates, or where it's the same as everyone else's.",
      },
      {
        type: "paragraph",
        text: "When we take on a project, this is usually the conversation that happens before any architecture discussion — because the honest answer sometimes points a prospective client toward a cheaper existing tool instead of a build. That's a better outcome for them, and it's the conversation that earns the trust for the projects where custom software really is the right call.",
      },
    ],
  },
  {
    slug: "website-development-cost-nigeria-2026",
    title: "How Much Does Website Development Cost in Nigeria? (2026)",
    excerpt:
      "The honest, unbundled answer to the question every prospective client asks first — what actually drives the price of a website build in Nigeria, and where the real cost differences come from.",
    category: "Pricing & Comparisons",
    tags: ["Pricing", "Web Development", "Nigeria"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-07-06",
    image: "/images/blog/website-development-cost-nigeria-2026.jpg",
    body: [
      {
        type: "paragraph",
        text: "\"How much does a website cost?\" is a question with no single honest answer, because it's really three different questions wearing one sentence — what does it need to do, how is it built, and who's building it. Here's how we actually break down pricing for Nigerian businesses asking this, without the vague \"it depends\" non-answer.",
      },
      { type: "heading", text: "What actually drives the price" },
      {
        type: "list",
        items: [
          "Static marketing site vs. dynamic web app — a five-page brochure site and a site with accounts, a database, and admin tooling are not the same project, even if they look similar to a visitor.",
          "Custom design vs. template — a template can get a business online fast and cheap; a custom design system costs more upfront and pays it back in brand differentiation and long-term flexibility.",
          "Integrations — payments, booking systems, CRM sync, and third-party APIs each add real scope, not just a few extra hours.",
          "Who builds it — a freelancer, an agency, and a small engineering-led team like ours price differently because the deliverable (and what happens after launch) is different.",
        ],
      },
        { type: "heading", text: "What it actually costs in Nigeria (2026)" },
        {
          type: "list",
          items: [
            "One-page or landing site — ₦150,000 to ₦350,000. A single, well-built page: fast, indexed, one clear action.",
            "Business site, 5 to 10 pages with custom design and a CMS — ₦350,000 to ₦900,000. The most common request we get.",
            "Ecommerce store with payments, inventory and customer accounts — ₦700,000 to ₦2.5 million.",
            "Web application with logins, dashboards and third-party integrations — ₦1.5 million to ₦6 million. At this point it is software, not a website.",
          ],
        },
        {
          type: "paragraph",
          text: "Budget separately for running costs. Hosting, domain, SSL, monitoring, backups and content updates realistically run ₦120,000 to ₦500,000 a year depending on traffic and how often the site changes. A quote that omits this is quoting half the project.",
        },
        {
          type: "paragraph",
          text: "Those are the ranges we actually quote within, not a price list — the final number comes from scope, not from a tier. Anything quoted far below the bottom of a band is usually missing something you will pay for later.",
        },
      { type: "heading", text: "What cheap options usually leave out" },
      {
        type: "paragraph",
        text: "The lowest quotes we see prospective clients bring us are usually missing something that shows up later as a cost: no real performance or SEO work, no source code ownership, no plan for what happens when the freelancer becomes unreachable. A fair price for a website in Nigeria in 2026 reflects the whole deliverable — a fast, secure, SEO-structured build you actually own — not just the visible pages.",
      },
      {
        type: "quote",
        text: "The real comparison isn't cheap versus expensive. It's what's actually included at each price point, and what you'll end up paying for later if it wasn't.",
      },
      {
        type: "paragraph",
        text: "We scope every website project against your actual requirements before quoting — not a flat package price — because a marketing site and a web app with a login system shouldn't cost the same, and neither should get a one-size price tag.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Our web development service", href: "/web-development" },
          { label: "Reene Medical Diagnostics case study", href: "/portfolio/reene-medical-diagnostics" },
        ],
      },
    ],
  },
  {
    slug: "saas-product-cost-nigeria",
    title: "How Much Does It Cost to Build a SaaS Product in Nigeria?",
    excerpt:
      "SaaS pricing questions almost always assume an MVP is a smaller version of the final product. It isn't — and that assumption is where most first-time SaaS budgets go wrong. Here's a realistic framework.",
    category: "Pricing & Comparisons",
    tags: ["Pricing", "SaaS", "Nigeria"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-07-09",
    image: "/images/blog/saas-product-cost-nigeria.jpg",
    body: [
      {
        type: "paragraph",
        text: "Founders asking \"how much does a SaaS product cost\" are usually pricing the wrong thing in their head — the full product they've imagined, not the smallest version that actually proves someone will pay for it. Those are very different budgets, and conflating them is why so many first SaaS builds run over.",
      },
      { type: "heading", text: "What an MVP budget actually needs to cover" },
      {
        type: "list",
        items: [
          "Multi-tenant architecture from day one — data isolation between customers isn't a \"phase two\" feature, it's a foundational decision that's expensive to retrofit.",
          "Authentication and billing — subscription logic, plan tiers, and payment integration are core scope, not an add-on.",
          "The one workflow that proves your core value — everything else is genuinely deferrable to post-launch.",
          "A security and scalability review before your first real customers touch the product, not after something breaks.",
        ],
      },
        { type: "heading", text: "What a SaaS build actually costs in Nigeria (2026)" },
        {
          type: "list",
          items: [
            "Clickable prototype for validation or fundraising — ₦500,000 to ₦1.5 million. No real backend; it exists to test whether anyone wants this.",
            "Lean MVP with one core workflow, authentication, billing and an admin view — ₦1.5 million to ₦5 million.",
            "Full V1 with multi-tenancy, roles and permissions, integrations and reporting — ₦5 million to ₦15 million.",
            "Scale-stage platform with heavy compliance, data volume or integration load — ₦15 million to ₦40 million and up.",
          ],
        },
        {
          type: "paragraph",
          text: "The number founders most often leave out is what it costs to keep running. Infrastructure, monitoring, support and continued iteration land between ₦80,000 and ₦600,000 a month from the day you launch. A SaaS product is a running cost, not a one-off purchase.",
        },
        {
          type: "paragraph",
          text: "Those are the ranges we actually quote within, not a price list — the final number comes from scope, not from a tier. Anything quoted far below the bottom of a band is usually missing something you will pay for later.",
        },
      { type: "heading", text: "Where SaaS budgets actually go wrong" },
      {
        type: "paragraph",
        text: "The two most common mistakes we see: building every feature on the roadmap before validating the core one, and skipping multi-tenant architecture to save time early, then paying far more to retrofit proper data isolation once there are paying customers depending on it. Both come from budgeting for the vision instead of the smallest thing that tests it.",
      },
      {
        type: "paragraph",
        text: "A realistic Nigerian SaaS MVP — one core workflow, subscription billing, multi-tenant from the start, and a pre-launch security pass — is a scoped, quotable project once you know what \"MVP\" actually excludes. That scoping conversation, before any pricing number, is what actually determines whether the number makes sense.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Our SaaS development service", href: "/saas-development" },
          { label: "Batamart case study", href: "/portfolio/batamart" },
        ],
      },
    ],
  },
  {
    slug: "custom-software-vs-saas-nigerian-business",
    title: "Custom Software vs. SaaS: Which Is Right for Your Nigerian Business?",
    excerpt:
      "Not \"build vs. buy\" — a different question. If you've already decided to build, should it be a custom internal system or a SaaS product you could eventually sell to others in your industry?",
    category: "Pricing & Comparisons",
    tags: ["Strategy", "SaaS", "Custom Software"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-07-13",
    image: "/images/blog/custom-software-vs-saas-nigerian-business.jpg",
    body: [
      {
        type: "paragraph",
        text: "This question comes up once a business has already decided to build something, not buy an off-the-shelf tool — which makes it different from the \"custom vs. off-the-shelf\" question we've written about before. The real fork here is: is this software for you, or is it a product for your industry?",
      },
      { type: "heading", text: "Build custom (single-tenant) when..." },
      {
        type: "list",
        items: [
          "The system encodes how your specific business runs, and that process isn't something you intend to license to competitors.",
          "You need full control over data residency, access, and change requests, without a shared-infrastructure roadmap dictating what changes and when.",
          "There's no plan — now or later — to sell this system as a product to other businesses in your sector.",
        ],
      },
      { type: "heading", text: "Build SaaS (multi-tenant) when..." },
      {
        type: "list",
        items: [
          "You've noticed the same operational problem across multiple businesses in your industry, not just your own.",
          "You're willing to invest in the extra architecture — multi-tenancy, billing, self-serve onboarding — that a single-customer system doesn't need.",
          "The long-term goal is a second revenue line from software, not just solving your own operational problem.",
        ],
      },
        { type: "heading", text: "What the two paths cost" },
        {
          type: "list",
          items: [
            "Single-tenant internal system — ₦2.5 million to ₦10 million, plus ₦60,000 to ₦250,000 a month to run and maintain.",
            "Multi-tenant product — ₦4 million to ₦18 million for the same feature set, plus ₦200,000 to ₦800,000 a month.",
          ],
        },
        {
          type: "paragraph",
          text: "The gap is the point. Identical features cost roughly 40 to 70 percent more to build multi-tenant, because tenancy, per-tenant configuration, subscription billing, self-service onboarding and data isolation are all real engineering, not switches you flip later. Paying that premium is correct if you will genuinely sell to others. Paying it for a system only you will ever use is money spent on a feature you will never turn on.",
        },
      {
        type: "quote",
        text: "A lot of businesses start this conversation assuming SaaS is the more \"serious\" answer. It isn't — it's the answer to a different question than the one most of them are actually asking.",
      },
      {
        type: "paragraph",
        text: "In practice, we often recommend starting with the custom, single-tenant version — solve your own problem first, prove the workflow works, and only take on multi-tenant architecture once you have evidence beyond your own business that the demand is real.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Our custom software service", href: "/custom-software" },
          { label: "Our SaaS development service", href: "/saas-development" },
          { label: "DiagSync case study", href: "/portfolio/diagsync" },
        ],
      },
    ],
  },
  {
    slug: "why-nigerian-businesses-need-custom-software-over-templates",
    title: "Why Nigerian Businesses Need Custom Software Over Generic Templates",
    excerpt:
      "Generic templates get a business online fast — and quietly cap how far that business can differentiate. A look at where the template ceiling actually shows up.",
    category: "Business Technology",
    tags: ["Custom Software", "Nigeria", "Strategy"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-07-16",
    image: "/images/blog/why-nigerian-businesses-need-custom-software-over-templates.jpg",
    body: [
      {
        type: "paragraph",
        text: "Templates are a genuinely good starting point for a lot of businesses — we say that plainly, and we've written before about when off-the-shelf is the right call. This isn't about templates being bad; it's about the specific, predictable point where they stop being enough, and what that costs a growing Nigerian business that doesn't see it coming.",
      },
      { type: "heading", text: "Where the template ceiling shows up" },
      {
        type: "list",
        items: [
          "Your workflow needs a step the template's plugin ecosystem doesn't offer, and the workaround becomes a permanent manual process instead of a temporary one.",
          "Performance degrades as you add more plugins and page builders to make the template do things it wasn't designed for.",
          "Every competitor using the same template looks — and functions — identically to you, which flattens exactly the differentiation a growing business needs.",
          "Data ownership gets murky once a business depends on a third-party platform's database, export limits, and uptime.",
        ],
      },
      { type: "heading", text: "What custom software actually buys you" },
      {
        type: "paragraph",
        text: "Not \"better\" in the abstract — specifically: software shaped around how your business runs today, with room to change as the business changes, and full ownership of the code and data underneath it. For a business whose operations are genuinely a point of differentiation, that's not a luxury upgrade — it's removing a ceiling that was always going to be hit eventually.",
      },
      {
        type: "paragraph",
        text: "The right time to move off a template isn't when it breaks. It's when you notice you're spending more staff time working around its limits than the limits are saving you in build cost.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Our custom software service", href: "/custom-software" },
          { label: "DiagSync case study", href: "/portfolio/diagsync" },
        ],
      },
    ],
  },
  {
    slug: "wordpress-vs-custom-development",
    title: "WordPress vs. Custom Development: What's Right for Your Business?",
    excerpt:
      "WordPress powers a huge share of the web for good reason. Here's an honest, unbiased breakdown of when it's the right call for a Nigerian business site — and when it starts working against you.",
    category: "Pricing & Comparisons",
    tags: ["WordPress", "Web Development", "Comparison"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-07-20",
    image: "/images/blog/wordpress-vs-custom-development.jpg",
    body: [
      {
        type: "paragraph",
        text: "We build custom sites, which makes us a biased source here too — so, as with build-vs-buy, it's worth saying plainly: WordPress is the right, sensible choice for a real share of the businesses that ask us about it. This is the honest version of when it fits and when it doesn't.",
      },
      { type: "heading", text: "WordPress is the right call when..." },
      {
        type: "list",
        items: [
          "The site is primarily content — blog, brochure pages, basic contact forms — without complex custom workflows.",
          "You need a non-technical team member to publish updates independently, often and quickly.",
          "Budget and timeline are tight, and a well-themed, well-configured WordPress build meets the actual requirement.",
        ],
      },
      { type: "heading", text: "Custom development earns its cost when..." },
      {
        type: "list",
        items: [
          "Performance is a competitive factor and plugin bloat is a real risk to page speed and, by extension, search ranking.",
          "The site needs custom logic — booking systems, account areas, integrations — that would otherwise mean stacking plugins with their own security surface and maintenance burden.",
          "Security posture matters more than usual for the business (handling payments, sensitive data) and every additional plugin is additional attack surface to keep patched.",
          "Design needs to be genuinely distinct, not a themed variation other businesses in the same space are also running.",
        ],
      },
        { type: "heading", text: "What each actually costs (2026)" },
        {
          type: "list",
          items: [
            "WordPress build with a premium theme, plugins and setup — ₦250,000 to ₦700,000, plus ₦120,000 to ₦350,000 a year in licences, plugin renewals and maintenance.",
            "Custom build — ₦800,000 to ₦3.5 million, plus ₦100,000 to ₦300,000 a year for hosting and maintenance.",
          ],
        },
        {
          type: "paragraph",
          text: "WordPress is clearly cheaper to start, and for many businesses it stays the right answer. The crossover tends to arrive around year three: recurring licences, plugin conflicts, and the performance and security work needed to keep a plugin-heavy site fast add up until the cumulative spend passes what a custom build would have cost outright.",
        },
      {
        type: "quote",
        text: "The question isn't which platform is \"better.\" It's whether your site's requirements are mostly content, or mostly logic — and WordPress and custom development are built for different halves of that split.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Our web development service", href: "/web-development" },
          { label: "Reene Medical Diagnostics case study", href: "/portfolio/reene-medical-diagnostics" },
        ],
      },
    ],
  },
  {
    slug: "website-security-checklist-nigerian-businesses",
    title: "Website Security Checklist for Nigerian Businesses",
    excerpt:
      "Most business website breaches aren't sophisticated — they're unpatched plugins, weak admin credentials, and missing basics. A practical, non-technical checklist to actually run against your site.",
    category: "Cybersecurity",
    tags: ["Website Security", "Checklist", "Nigeria"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-07-23",
    image: "/images/blog/website-security-checklist-nigerian-businesses.jpg",
    body: [
      {
        type: "paragraph",
        text: "Most business website compromises we get asked to clean up after aren't sophisticated attacks — they're one of a handful of predictable, preventable gaps. This checklist covers the ones that matter most, in the order we'd actually check them.",
      },
      { type: "heading", text: "The checklist" },
      {
        type: "list",
        ordered: true,
        items: [
          "HTTPS enforced everywhere, with no mixed-content warnings — this is table stakes, not a nice-to-have, and Google treats it as a ranking signal too.",
          "Admin login protected with strong, unique credentials and, where the platform supports it, two-factor authentication — weak admin passwords are the single most common way we've seen sites compromised.",
          "Plugins, themes, and the core CMS kept current — most real-world breaches exploit a known, already-patched vulnerability that simply wasn't updated.",
          "Regular, tested backups stored somewhere other than the server itself — a backup you've never restored from isn't a real backup.",
          "Forms and inputs validated server-side, not just in the browser — client-side validation is a UX nicety, never a security boundary.",
          "Security headers configured (X-Frame-Options, Content-Security-Policy, and similar) to close off common browser-side attack classes.",
          "A monitoring or alerting setup that tells you something changed, rather than a customer being the one to tell you first.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this requires a dedicated security team — it requires treating these as defaults applied at build time, not a checklist run once a year if at all. That's the difference between a site that's secure by design and one that's secure until the next missed update.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Our cybersecurity service", href: "/cybersecurity" },
          { label: "DiagSync case study", href: "/portfolio/diagsync" },
        ],
      },
    ],
  },
  {
    slug: "best-website-features-every-hospital-clinic-should-have",
    title: "Best Website Features Every Hospital or Clinic Should Have",
    excerpt:
      "A healthcare provider's website carries a different weight than most business sites — patients are making trust and access decisions on it. Here's what that site actually needs to do well.",
    category: "Business Technology",
    tags: ["Healthcare", "Web Development", "Nigeria"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-07-25",
    image: "/images/blog/best-website-features-every-hospital-clinic-should-have.jpg",
    body: [
      {
        type: "paragraph",
        text: "A hospital or clinic's website isn't a brochure — for a lot of patients, it's the first (and sometimes only) trust signal before they book an appointment or walk in. That changes what \"good\" means for this kind of site, compared to a typical business marketing page.",
      },
      { type: "heading", text: "What actually matters for a healthcare site" },
      {
        type: "list",
        items: [
          "Clear services and specialties, written for patients, not internal department names — someone searching in pain doesn't know your org chart.",
          "Fast, simple appointment booking or a clear contact path — friction here directly costs the practice patients.",
          "Provider credentials and photos — specificity here is a direct trust signal, in the same way a named case study builds more trust than a vague claim.",
          "Genuine mobile performance — a large share of patients are searching and booking from a phone, often urgently.",
          "Visible privacy and data-handling information — patients are trusting the site with sensitive information before they've even met a provider.",
        ],
      },
      { type: "heading", text: "The trust problem underneath all of it" },
      {
        type: "paragraph",
        text: "Healthcare decisions carry more anxiety than most purchase decisions, and a site that looks dated, loads slowly, or is vague about who's actually providing care compounds that anxiety instead of reducing it. The interface has to do real trust-building work before a patient ever speaks to staff — which is exactly the design problem we've written about more generally, just with higher stakes here.",
      },
      {
        type: "paragraph",
        text: "This is also where the site and the backend can't be treated separately for long — patient records, scheduling, and reporting eventually need the same access-control and audit discipline as the public-facing site needs polish. The two tend to converge into one system as a practice grows.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Our healthcare software work", href: "/healthcare-software" },
          { label: "Reene Medical Diagnostics case study", href: "/portfolio/reene-medical-diagnostics" },
          { label: "DiagSync case study", href: "/portfolio/diagsync" },
        ],
      },
    ],
  },
  {
    slug: "how-ai-is-changing-software-development-in-nigeria",
    title: "How AI Is Changing Software Development in Nigeria",
    excerpt:
      "Beyond the hype cycle — a grounded look at what's actually different about building software in Nigeria now that AI-assisted tooling is mainstream, and what hasn't changed at all.",
    category: "Artificial Intelligence",
    tags: ["AI", "Nigeria", "Software Development"],
    authorName: "Martin Blaze",
    authorRole: "Founder, MB CoreX",
    publishedAt: "2026-07-27",
    image: "/images/blog/how-ai-is-changing-software-development-in-nigeria.jpg",
    body: [
      {
        type: "paragraph",
        text: "It's easy to either overstate or dismiss what AI has changed about building software in Nigeria — the honest picture is narrower and more useful than either extreme. Some things have genuinely gotten faster and cheaper to build. Others, despite the hype, haven't moved at all.",
      },
      { type: "heading", text: "What's genuinely different" },
      {
        type: "list",
        items: [
          "Time-to-first-prototype has dropped substantially, which matters a lot for Nigerian founders validating an idea before committing serious budget to a full build.",
          "Smaller teams can now credibly deliver work that used to require a larger headcount, narrowing the gap between local teams and bigger, better-resourced firms elsewhere.",
          "Boilerplate and repetitive scaffolding — the mechanical 30-40% of most builds — now takes hours instead of days, freeing more of the timeline for the parts that actually need judgment.",
        ],
      },
      { type: "heading", text: "What hasn't changed at all" },
      {
        type: "list",
        items: [
          "Architecture decisions still require understanding your specific business, not a pattern match against public code.",
          "Security-sensitive code — auth, payments, personal data — still needs a human writing and reviewing it, not an AI suggestion shipped unchecked.",
          "The trust and communication a client needs before committing budget to a build hasn't gotten easier just because delivery got faster.",
        ],
      },
      {
        type: "quote",
        text: "AI didn't make software development in Nigeria \"easy.\" It made the mechanical parts fast, which raises the bar on the judgment parts — the businesses that win are the ones spending the time it freed up on getting those right.",
      },
      {
        type: "paragraph",
        text: "For Nigerian businesses evaluating a software partner in 2026, the useful question isn't \"do you use AI\" — everyone credible does by now. It's what a team does with the time AI-assisted delivery frees up: cut corners faster, or spend more of the calendar on the architecture, security, and edge cases that were always the actual hard part.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Our AI solutions service", href: "/ai-solutions" },
          { label: "How we actually use AI in client projects", href: "/insights/how-we-use-ai-in-client-projects" },
        ],
      },
    ],
  },
]

/** URL-safe category slug — handles "UI/UX" ("/" would otherwise break the route segment). */
export function categorySlug(category: BlogCategory) {
  return category.toLowerCase().replace(/\//g, "-").replace(/\s+/g, "-")
}

export function categoryFromSlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => categorySlug(category) === slug)
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: BlogCategory) {
  return blogPosts.filter((post) => post.category === category)
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return blogPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => {
      const aScore = a.category === post.category ? 1 : 0
      const bScore = b.category === post.category ? 1 : 0
      return bScore - aScore
    })
    .slice(0, limit)
}

export const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags))).sort()
