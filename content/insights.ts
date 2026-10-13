import { restoredPosts, type BlogCategory, type BlogPost } from "./insights-restored"
import { newPosts } from "./insights-new"

export type { BlogBlock, BlogCategory, BlogPost } from "./insights-restored"

export const blogCategories: BlogCategory[] = [
  "SEO & Growth",
  "Pricing & Comparisons",
  "Mobile & Web",
  "Business Technology",
  "Software Engineering",
  "Case Studies",
]

/** Newest first. */
export const blogPosts: BlogPost[] = [...newPosts, ...restoredPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))

/**
 * Search-result title and description per guide. The article headline can be
 * long and conversational; these stay within what Google shows (~60 / ~155).
 */
export const guideSeo: Record<string, { title: string; description: string }> = {
  "how-to-rank-on-google-nigeria": {
    title: "How to Rank on Google in Nigeria (2026 SEO Guide)",
    description: "A practical, step-by-step SEO guide for Nigerian businesses: the searches to target, technical basics, content that ranks and realistic timelines.",
  },
  "seo-cost-nigeria-2026": {
    title: "How Much Does SEO Cost in Nigeria? (2026)",
    description: "What Nigerian businesses pay for SEO in naira, what drives the price, audits versus monthly retainers, and red flags to avoid when hiring.",
  },
  "local-seo-nigeria-online-business": {
    title: "Local SEO in Nigeria for Online Businesses",
    description: "No shop and no Google Business Profile? Here is how online businesses rank for searches in Lagos, Abuja, Port Harcourt and every state.",
  },
  "core-web-vitals-nigeria-mobile-speed": {
    title: "Website Speed in Nigeria: Core Web Vitals Guide",
    description: "Most Nigerian visitors browse on mobile data. Learn what Core Web Vitals measure and the practical fixes that make a site feel instant.",
  },
  "mobile-app-cost-nigeria-2026": {
    title: "Mobile App Development Cost in Nigeria (2026)",
    description: "What a mobile app costs in Nigeria in naira: what drives the price, what a first version includes, running costs and how to avoid overspending.",
  },
  "web-app-vs-mobile-app-nigeria": {
    title: "Web App or Mobile App First? A Nigerian Guide",
    description: "Compare web and mobile apps on cost, speed, reach and features, with a simple rule for choosing the right starting point for your business.",
  },
  "choose-software-development-company-nigeria": {
    title: "How to Choose a Software Company in Nigeria",
    description: "Ten questions to ask any Nigerian software development company about code ownership, pricing, process, security and long-term support.",
  },
  "website-development-cost-nigeria-2026": {
    title: "Website Development Cost in Nigeria (2026)",
    description: "What a website costs in Nigeria in naira, what drives the price, the running costs to budget for, and what cheap quotes usually leave out.",
  },
  "saas-product-cost-nigeria": {
    title: "How Much Does a SaaS Product Cost in Nigeria?",
    description: "A realistic framework for budgeting a SaaS MVP in Nigeria: what an MVP really includes and what billing, security and scaling add.",
  },
  "custom-software-vs-saas-nigerian-business": {
    title: "Custom Software vs SaaS for Nigerian Businesses",
    description: "When to buy SaaS and when to build custom software, with the cost, control and data trade-offs for Nigerian companies.",
  },
  "why-nigerian-businesses-need-custom-software-over-templates": {
    title: "Custom Software vs Templates for Nigerian Firms",
    description: "Why generic templates and off-the-shelf tools limit Nigerian businesses, and when custom software is worth the investment.",
  },
  "wordpress-vs-custom-development": {
    title: "WordPress vs Custom Website Development",
    description: "WordPress or a custom build? Compare cost, speed, security and long-term value to decide what suits your business.",
  },
  "custom-software-vs-off-the-shelf-framework": {
    title: "Custom vs Off-the-Shelf Software: How to Decide",
    description: "A simple framework for choosing between custom software and off-the-shelf tools, based on your process, data and cost over time.",
  },
  "best-website-features-every-hospital-clinic-should-have": {
    title: "Best Website Features for a Hospital or Clinic",
    description: "The website features every Nigerian clinic or hospital needs: clear services, booking, trust signals, speed and easy contact paths.",
  },
  "lessons-from-digitizing-a-diagnostics-lab": {
    title: "Digitizing a Diagnostics Lab: What We Learned",
    description: "Lessons from moving a diagnostics lab off paper: workflow design, staff adoption, reporting and careful data handling.",
  },
  "how-ai-is-changing-software-development-in-nigeria": {
    title: "How AI Is Changing Software Development in Nigeria",
    description: "What AI-assisted development means for Nigerian businesses: faster delivery, where humans still matter and what to ask your developer.",
  },
  "website-security-checklist-nigerian-businesses": {
    title: "Website Security Checklist for Nigerian Businesses",
    description: "A practical website security checklist: updates, input validation, access control, backups and monitoring applied as defaults.",
  },
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

/** Related posts: same category first, then newest. */
export function getRelatedPosts(post: BlogPost, count = 3) {
  const others = blogPosts.filter((candidate) => candidate.slug !== post.slug)
  const sameCategory = others.filter((candidate) => candidate.category === post.category)
  const rest = others.filter((candidate) => candidate.category !== post.category)
  return [...sameCategory, ...rest].slice(0, count)
}
