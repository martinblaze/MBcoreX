export type BlogCategory =
  | "Software Engineering"
  | "Artificial Intelligence"
  | "Cybersecurity"
  | "Cloud"
  | "DevOps"
  | "UI/UX"
  | "Case Studies"
  | "Business Technology"

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "code"; code: string; lang: string; filename?: string }

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
    image: "/images/Background1.png",
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
    image: "/images/Background2.png",
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
    image: "/images/Background3.png",
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
    image: "/images/Background1.png",
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
    image: "/images/Background2.png",
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
    image: "/images/Background3.png",
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
    image: "/images/Background1.png",
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
    image: "/images/Background2.png",
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
