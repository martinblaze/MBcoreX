export type PortfolioProject = {
  slug: string
  title: string
  /** Search-intent H1/`<title>` for the detail page — `title` stays short for cards/nav. */
  seoTitle: string
  category: string
  industry: string
  tags: string[]
  summary: string
  image: string
  /** Client logo — shown on portfolio/project grid cards instead of the case-study cover photo. */
  logo: string
  /** Real product screenshots shown in the case-study page's gallery carousel. */
  gallery: string[]
  problem: string
  solution: string
  discoveryProcess: string
  designProcess: string
  developmentProcess: string
  securityConsiderations: string
  aiToolsUsed: string[]
  stack: string[]
  results: string[]
  before: string[]
  after: string[]
  /** Public URL of the running product — used for the live embed and the outbound link. */
  livePreviewHref?: string
  /**
   * Whether the live site permits being framed. A site that sends
   * `X-Frame-Options` or a restrictive CSP `frame-ancestors` renders as a
   * blank box with no JS-detectable error, so this has to be declared rather
   * than probed. Set false to fall back to the screenshot carousel.
   */
  embeddable?: boolean
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "diagsync",
    livePreviewHref: "https://diagsync.vercel.app/",
    embeddable: true,
    title: "DiagSync",
    seoTitle: "How We Built a Laboratory Management System for a Diagnostics Lab — DiagSync",
    category: "Laboratory Management System",
    industry: "Healthcare / Diagnostics",
    tags: ["Healthcare", "SaaS", "Dashboard"],
    summary:
      "A complete lab management solution for diagnostics centers — patient records, lab workflow, medical reports, inventory and automation in one system.",
    image: "/images/Background1.png",
    logo: "/images/diagsync-logo.png",
    gallery: [
      "/images/diagsynclandingpage.png",
      "/images/diagsynclandingpage2.png",
      "/images/diagsynclandingpage3.png",
      "/images/diagsyncdashboard.png",
    ],
    problem:
      "Diagnostics centers were running patient records, lab workflow and reporting through manual, paper-heavy processes — slow to update, easy to misplace, and hard to audit.",
    solution:
      "MB CoreX built a unified laboratory management system covering patient records, lab workflow, medical reporting, inventory tracking and process automation, designed with data handling and access control as first-class concerns rather than an afterthought.",
    discoveryProcess:
      "Discovery started with mapping how staff actually moved through a patient's lab journey — sample intake, testing, reporting, and record retrieval — to find where paper handoffs were creating delay and risk, rather than assuming what to build.",
    designProcess:
      "Wireframes were built around the existing clinical workflow instead of a generic dashboard template, with lab technicians and administrative staff reviewing flows before any UI was finalized.",
    developmentProcess:
      "Built iteratively on Next.js and PostgreSQL, with the patient-record and reporting modules shipped first so staff could start moving off paper early, followed by inventory tracking and automation once the core workflow was validated.",
    securityConsiderations:
      "Patient data is healthcare-adjacent information, so access control, encrypted data paths, and audit logging were treated as core architectural requirements from day one, not a pre-launch add-on.",
    aiToolsUsed: [
      "AI-assisted code review to catch edge cases in data-handling logic",
      "AI-accelerated scaffolding for repetitive CRUD and reporting views, freeing time for the parts of the system that needed the most care",
      "Automated test-case generation for the reporting module",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    results: [
      "Consolidated patient records, lab workflow and reporting into a single system",
      "Digitized inventory tracking that was previously paper-based",
      "Automated repetitive reporting steps to reduce manual data entry",
    ],
    before: ["Paper-based records", "Slow report delivery", "High manual error rate", "Difficult data tracking"],
    after: ["Digital record management", "Faster report delivery", "Reduced manual errors", "Real-time data tracking"],
  },
  {
    slug: "batamart",
    livePreviewHref: "https://www.batamart.com/",
    embeddable: true,
    title: "Batamart",
    seoTitle: "How We Built a Secure Student Marketplace Platform — Batamart",
    category: "Student Marketplace Platform",
    industry: "E-commerce / Education",
    tags: ["E-commerce", "Marketplace", "Web App"],
    summary:
      "A modern ecommerce experience connecting students to buy and sell — vendor management, secure payments and a scalable architecture built to grow with campus demand.",
    image: "/images/Background2.png",
    logo: "/images/BATAMART-LOGO.png",
    gallery: [
      "/images/batamartlandingpage.png",
      "/images/batamartlandingpage2.png",
      "/images/batamartlandingpage3.png",
      "/images/batamartmarketplacepage.png",
      "/images/batamartsearchpage.png",
    ],
    problem:
      "Student buying and selling activity on campus was informal and fragmented — scattered across chats and word of mouth, with no trust layer, vendor accountability, or secure way to pay.",
    solution:
      "MB CoreX built a campus marketplace platform with structured vendor management, a modern ecommerce experience, and secure payment handling, on an architecture built to scale as vendor and buyer numbers grow.",
    discoveryProcess:
      "Discovery focused on how students were already buying and selling informally, to understand exactly which parts of that process needed structure — trust, payment, vendor accountability — versus which parts to keep simple and fast.",
    designProcess:
      "Vendor and buyer flows were designed and tested separately before being unified, since the two groups had different priorities: vendors needed storefront control, buyers needed trust signals and a simple checkout.",
    developmentProcess:
      "Built on Next.js with Stripe for payments and PostgreSQL for vendor and product data, with the payment and vendor-management modules built and hardened before the wider marketplace UI was layered on top.",
    securityConsiderations:
      "Secure payment handling was the priority given the platform touches real transactions between students — payment logic was isolated, input validation applied throughout, and vendor accounts protected against common account-takeover patterns.",
    aiToolsUsed: [
      "AI-assisted development to accelerate marketplace CRUD and admin tooling",
      "AI-assisted review of payment and auth code paths as an additional check alongside manual review",
      "Automated generation of seed and test data for marketplace testing",
    ],
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    results: [
      "Gave student vendors a structured storefront instead of informal chat-based selling",
      "Introduced secure, trackable payments to campus commerce",
      "Built on a scalable architecture ready for additional campuses",
    ],
    before: ["No digital marketplace", "Limited market access", "Manual transactions", "Low customer reach"],
    after: ["Digital marketplace", "Wider market access", "Secure transactions", "Higher customer reach"],
  },
  {
    slug: "reene-medical-diagnostics",
    livePreviewHref: "https://reenemedicaldiagnostics.com/",
    embeddable: true,
    title: "Reene Medical Diagnostics",
    seoTitle: "Building a Trust-First Corporate Website for a Healthcare Provider — Reene Medical Diagnostics",
    category: "Corporate Website",
    industry: "Healthcare",
    tags: ["Healthcare", "Corporate Website"],
    summary:
      "A professional, responsive corporate website for a leading diagnostic center — healthcare-appropriate branding built to earn trust from the first visit.",
    image: "/images/Background3.png",
    logo: "/images/ReeneLab-logo.png",
    gallery: [
      "/images/reenemedicallandingpage.png",
      "/images/reenemedicallandingpage2.png",
      "/images/reenemedicalservices.png",
      "/images/reenemedicalgallery.png",
    ],
    problem:
      "Reene Medical Diagnostics had no professional digital presence — patients and partners had no reliable way to learn about services or trust the brand online.",
    solution:
      "MB CoreX designed and built a responsive, professionally branded corporate website that presents Reene's services and credibility clearly, matching the trust bar expected of a healthcare provider.",
    discoveryProcess:
      "Discovery focused on what patients and referring partners actually needed to find quickly — services offered, credibility signals, and a clear way to get in touch — rather than defaulting to a generic corporate template.",
    designProcess:
      "Visual design was built around healthcare-appropriate trust cues — clear typography, a calm color palette, and a structure that surfaces credibility early — reviewed against how comparable diagnostic centers present themselves online.",
    developmentProcess:
      "Built as a responsive Next.js site with performance and SEO treated as launch requirements rather than a follow-up task, so the site was fast and indexable from day one.",
    securityConsiderations:
      "Even as a corporate/marketing site, standard web-security hygiene was applied — secure headers, dependency hygiene, and a hardened contact-form pipeline to guard against spam and abuse.",
    aiToolsUsed: [
      "AI-assisted content structuring during the copywriting pass",
      "AI-accelerated component scaffolding to speed up the responsive build",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    results: [
      "Established a professional online presence where none existed before",
      "Gave the brand a consistent, healthcare-appropriate visual identity",
      "Improved how services and credibility are communicated to visitors",
    ],
    before: ["Outdated website", "No online presence", "Manual processes", "Limited patient trust"],
    after: ["Modern, professional website", "Improved online visibility", "Automated processes", "Increased patient trust"],
  },
]

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug)
}

/** Previous/next project in the fixed showcase order, for case-study detail navigation. */
export function getAdjacentProjects(slug: string) {
  const index = portfolioProjects.findIndex((project) => project.slug === slug)
  const previous = portfolioProjects[(index - 1 + portfolioProjects.length) % portfolioProjects.length]
  const next = portfolioProjects[(index + 1) % portfolioProjects.length]
  return { previous, next }
}
