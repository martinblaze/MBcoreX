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

/** Services nav dropdown — one entry per dedicated SEO landing page (see docs/02-seo-keyword-strategy.md). */
export const solutionsNav: (NavItem & { description: string })[] = [
  { label: "Custom Software", href: "/custom-software", description: "Bespoke, enterprise-grade builds" },
  { label: "Web Development", href: "/web-development", description: "Marketing & corporate sites" },
  { label: "SaaS Development", href: "/saas-development", description: "Multi-tenant SaaS products" },
  { label: "Business Automation", href: "/business-automation", description: "Workflow & process automation" },
  { label: "Healthcare Software", href: "/healthcare-software", description: "Lab & clinic systems" },
  { label: "Cybersecurity", href: "/cybersecurity", description: "Audits, compliance, pen testing" },
  { label: "AI Automation", href: "/ai-solutions", description: "AI-accelerated delivery" },
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
