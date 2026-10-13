export const siteConfig = {
  name: "MB CoreX",
  legalName: "Martin Blaze CoreX",
  tagline: "Websites, software, apps and Google SEO.",
  email: "MBCoreX@gmail.com",
  phone: "+234 701 442 6807",
  phoneRaw: "07014426807",
  location: "Nigeria",
} as const

export type NavItem = { label: string; href: string }

export const primaryNav: NavItem[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
]

export const footerNav = {
  company: [
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Guides", href: "/insights" },
    { label: "Areas we serve", href: "/locations" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ],
} satisfies Record<string, NavItem[]>

export const socials: NavItem[] = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
]
