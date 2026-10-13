export type CaseStudy = {
  slug: string
  title: string
  /** Search-intent H1/`<title>` for the detail page. */
  seoTitle: string
  category: string
  tags: string[]
  summary: string
  /** Live screenshot of the site's homepage, used as card image and video poster. */
  cover: string
  /** Produced motion piece (headline, staged screens, logo end card). */
  motion: string
  motionPoster: string
  /** Raw screen recording of the live site scrolling. */
  video: string
  /** How this project appears on cards: moving recording or still screenshot. */
  cardMedia: "video" | "image"
  logo: string
  gallery: string[]
  problem: string
  solution: string
  stack: string[]
  results: string[]
  href: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "diagsync",
    title: "DiagSync",
    seoTitle: "How We Built a Laboratory Management System for a Diagnostics Lab — DiagSync",
    category: "Laboratory management system",
    tags: ["Web Application", "Healthcare", "Dashboard"],
    summary:
      "A complete lab management system for diagnostics centres: patient records, lab workflow, medical reports, inventory and automation in one place.",
    cover: "/work/diagsync/shot-1.jpg",
    motion: "/work/diagsync/motion.mp4",
    motionPoster: "/work/diagsync/motion-poster.jpg",
    video: "/work/diagsync/scroll.mp4",
    cardMedia: "video",
    logo: "/images/diagsync-logo.png",
    gallery: [2, 3, 4, 5, 6].map((n) => `/work/diagsync/shot-${n}.jpg`),
    problem:
      "Diagnostics centres ran patient records, lab workflow and reporting through manual, paper-heavy processes: slow to update, easy to misplace and hard to audit.",
    solution:
      "We built one system covering patient records, lab workflow, medical reporting, inventory tracking and process automation, with access control and data handling designed in from day one.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    results: [
      "Patient records, lab workflow and reporting consolidated into a single system",
      "Paper-based inventory tracking digitised",
      "Repetitive reporting steps automated to cut manual data entry",
    ],
    href: "https://diagsync.vercel.app/",
  },
  {
    slug: "batamart",
    title: "Batamart",
    seoTitle: "How We Built a Secure Student Marketplace Platform — Batamart",
    category: "Student marketplace platform",
    tags: ["Web Application", "E-commerce", "Marketplace"],
    summary:
      "A modern marketplace connecting students to buy and sell, with vendor management, secure payments and an architecture built to grow with campus demand.",
    cover: "/work/batamart/shot-1.jpg",
    motion: "/work/batamart/motion.mp4",
    motionPoster: "/work/batamart/motion-poster.jpg",
    video: "/work/batamart/scroll.mp4",
    cardMedia: "video",
    logo: "/images/BATAMART-LOGO.png",
    gallery: [2, 3, 4, 5, 6].map((n) => `/work/batamart/shot-${n}.jpg`),
    problem:
      "Student buying and selling on campus was informal and scattered across chats, with no trust layer, vendor accountability or secure way to pay.",
    solution:
      "We built a campus marketplace with structured vendor storefronts, a modern shopping experience and secure payment handling, on an architecture ready for more campuses.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    results: [
      "Student vendors got a structured storefront instead of chat-based selling",
      "Secure, trackable payments introduced to campus commerce",
      "Scalable architecture ready for additional campuses",
    ],
    href: "https://www.batamart.com/",
  },
  {
    slug: "reene-medical-diagnostics",
    title: "Reene Medical Diagnostics",
    seoTitle: "Building a Trust-First Corporate Website for a Healthcare Provider — Reene Medical Diagnostics",
    category: "Corporate website",
    tags: ["Website", "Healthcare", "SEO"],
    summary:
      "A professional, responsive website for a leading diagnostic centre, with healthcare-appropriate branding built to earn trust from the first visit.",
    cover: "/work/reene-medical-diagnostics/shot-1.jpg",
    motion: "/work/reene-medical-diagnostics/motion.mp4",
    motionPoster: "/work/reene-medical-diagnostics/motion-poster.jpg",
    video: "/work/reene-medical-diagnostics/scroll.mp4",
    cardMedia: "video",
    logo: "/images/ReeneLab-logo.png",
    gallery: [2, 3, 4, 5, 6].map((n) => `/work/reene-medical-diagnostics/shot-${n}.jpg`),
    problem:
      "Reene Medical Diagnostics had no professional digital presence, so patients and partners had no reliable way to learn about services or trust the brand online.",
    solution:
      "We designed and built a fast, responsive website that presents Reene's services and credibility clearly, with SEO and performance treated as launch requirements.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    results: [
      "A professional online presence where none existed before",
      "A consistent, healthcare-appropriate visual identity",
      "Services and credibility communicated clearly to visitors",
    ],
    href: "https://reenemedicaldiagnostics.com/",
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}

export const testimonials = [
  {
    name: "Dr. Reene O.",
    role: "Founder, Reene Medical Diagnostics",
    quote:
      "MB CoreX delivered our website with professionalism and attention to detail. Our online presence has never been better.",
  },
  {
    name: "Lab Operations Lead",
    role: "Operations Manager, DiagSync",
    quote:
      "DiagSync has transformed the way we manage patient records and lab workflow. It's fast, reliable and genuinely easy to use day to day.",
  },
  {
    name: "Student Vendor",
    role: "Vendor, Batamart",
    quote: "Batamart is exactly what students needed: simple to use, secure to sell on, and it just works.",
  },
]

export const clients = caseStudies.map(({ title, logo }) => ({ title, logo }))
