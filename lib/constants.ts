export const siteConfig = {
  name: "MB CoreX",
  legalName: "Martin Blaze CoreX",
  tagline: "Software, Security, Solutions.",
  email: "MBCoreX@gmail.com",
  phone: "+234 701 442 6807",
  phoneRaw: "07014426807",
  location: "Nigeria",
} as const

export type NavItem = {
  label: string
  href: string
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
]

/**
 * Services nav dropdown. Points at anchors on /services (and the two
 * standalone pages that already exist) rather than dedicated /solutions/*
 * landing pages — those are a planned future deliverable (see Stage 1 IA)
 * not yet built, and a dead link would fail worse than a shared anchor.
 */
export const solutionsNav: (NavItem & { description: string })[] = [
  { label: "Software Development", href: "/services#custom-software", description: "Custom, enterprise & SaaS builds" },
  { label: "Cybersecurity", href: "/cybersecurity", description: "Audits, compliance, pen testing" },
  { label: "AI Automation", href: "/ai-solutions", description: "AI-accelerated delivery" },
  { label: "Medical Software", href: "/portfolio/diagsync", description: "Lab & healthcare systems" },
  { label: "Website Development", href: "/services#web-applications", description: "Marketing & corporate sites" },
]

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/insights" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "/#faq" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
]

export const ctaCopy = {
  primary: "Book a Consultation",
  primaryAlt: "Let's Talk",
  secondaryWork: "View Our Work",
  secondaryServices: "Explore Services",
  secondaryProjects: "View All Projects",
  readMore: "Read More",
  livePreview: "Live Preview",
  secure: "Secure Your Business",
  formSubmit: "Send Message",
} as const

export type SocialChannel = {
  id: "tiktok" | "instagram" | "x" | "youtube" | "discord" | "linkedin" | "github" | "email" | "phone"
  label: string
  href: string
  enabled: boolean
}

/**
 * Single source of truth for every social/contact channel rendered by
 * `SocialLinks`. Toggle `enabled` to show/hide a channel without touching
 * markup anywhere in the app.
 */
export const socialChannels: SocialChannel[] = [
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com", enabled: true },
  { id: "github", label: "GitHub", href: "https://github.com", enabled: true },
  { id: "x", label: "X", href: "https://x.com", enabled: true },
  { id: "instagram", label: "Instagram", href: "https://instagram.com", enabled: true },
  { id: "youtube", label: "YouTube", href: "https://youtube.com", enabled: true },
  { id: "tiktok", label: "TikTok", href: "https://tiktok.com", enabled: true },
  { id: "discord", label: "Discord", href: "https://discord.com", enabled: true },
  { id: "email", label: "Email", href: `mailto:${siteConfig.email}`, enabled: true },
  { id: "phone", label: "Phone", href: `tel:${siteConfig.phoneRaw}`, enabled: true },
]
