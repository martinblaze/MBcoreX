export type BlogCategory = "Software Engineering" | "Business Technology" | "Case Studies" | "Pricing & Comparisons" | "SEO & Growth" | "Mobile & Web"

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; attribution?: string }
  /** Contextual links out to a relevant service page, location page or case study. */
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
  /** Set when a post is materially revised; feeds `dateModified` and the sitemap. */
  updatedAt?: string
  image: string
  featured?: boolean
  body: BlogBlock[]
}

export const restoredPosts: BlogPost[] = [
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
          { label: "Our web development service", href: "/services/web-development" },
          { label: "Reene Medical Diagnostics case study", href: "/case-studies/reene-medical-diagnostics" },
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
          { label: "Our SaaS development service", href: "/services/custom-software" },
          { label: "Batamart case study", href: "/case-studies/batamart" },
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
          { label: "Our custom software service", href: "/services/custom-software" },
          { label: "Our SaaS development service", href: "/services/custom-software" },
          { label: "DiagSync case study", href: "/case-studies/diagsync" },
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
          { label: "Our custom software service", href: "/services/custom-software" },
          { label: "DiagSync case study", href: "/case-studies/diagsync" },
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
          { label: "Our web development service", href: "/services/web-development" },
          { label: "Reene Medical Diagnostics case study", href: "/case-studies/reene-medical-diagnostics" },
        ],
      },
    ],
  },
  {
    slug: "website-security-checklist-nigerian-businesses",
    title: "Website Security Checklist for Nigerian Businesses",
    excerpt:
      "Most business website breaches aren't sophisticated — they're unpatched plugins, weak admin credentials, and missing basics. A practical, non-technical checklist to actually run against your site.",
    category: "Business Technology",
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
          { label: "Our web development service", href: "/services/web-development" },
          { label: "DiagSync case study", href: "/case-studies/diagsync" },
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
          { label: "Our healthcare software work", href: "/services/custom-software" },
          { label: "Reene Medical Diagnostics case study", href: "/case-studies/reene-medical-diagnostics" },
          { label: "DiagSync case study", href: "/case-studies/diagsync" },
        ],
      },
    ],
  },
  {
    slug: "how-ai-is-changing-software-development-in-nigeria",
    title: "How AI Is Changing Software Development in Nigeria",
    excerpt:
      "Beyond the hype cycle — a grounded look at what's actually different about building software in Nigeria now that AI-assisted tooling is mainstream, and what hasn't changed at all.",
    category: "Software Engineering",
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
          { label: "Our AI solutions service", href: "/services/custom-software" },
        ],
      },
    ],
  },
]
