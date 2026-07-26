import { Award, Crown, Rocket, ShieldCheck, type LucideIcon } from "lucide-react"
import type { TimelineEntry } from "@/components/sections/timeline"

export const founder = {
  name: "Martin Blaze",
  role: "Founder, MB CoreX",
  bio: "Martin Blaze is a full-stack software engineer and cybersecurity-minded builder who founded MB CoreX to close the gap between companies that build software and companies that secure it. He combines hands-on engineering across web, mobile and cloud systems with a working knowledge of security frameworks — CompTIA Security+ and Network+ knowledge areas, NIST 800-53 Rev 5, NIST 171 and SOC 2 Type II — applied as practice, not just theory.",
  knowledgeAreas: [
    "Security+ & Network+ knowledge areas",
    "NIST 800-53 Rev 5",
    "NIST 171",
    "SOC 2 Type II",
    "Modern software architecture",
    "Secure coding",
    "Cloud systems",
    "Database design",
    "API engineering",
  ],
}

export const mission =
  "To give businesses a single, accountable technology partner who builds software that is secure by design — not secured after the fact."

export const vision =
  "A standard where every business, regardless of size, has access to enterprise-grade software engineering and security practice, not just enterprise-sized budgets."

export const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Crown,
    title: "Innovation",
    description: "We build modern solutions that solve real business problems, not solutions in search of a problem.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "We implement industry-standard security frameworks to keep your data and systems safe by default.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We are committed to delivering quality in everything we do — no half-finished implementations.",
  },
  {
    icon: Rocket,
    title: "Speed with Standards",
    description: "AI-assisted workflows let us move fast without lowering engineering or security standards.",
  },
]

export const aiApproach = {
  heading: "AI-assisted, human-reviewed",
  description:
    "MB CoreX uses modern AI development tools to accelerate delivery, automate repetitive work, and improve test coverage — while every architectural decision, security review and final release stays under human oversight. AI changes how fast we build, not what we're willing to ship.",
  points: [
    "Faster iteration on features and fixes",
    "Automated testing and repetitive-task handling",
    "Human review on architecture, security and final code",
    "Shorter time-to-market without lowering the quality bar",
  ],
}

export const timeline: TimelineEntry[] = [
  {
    meta: "Foundation",
    title: "MB CoreX founded",
    description: "Started as a software engineering practice built around one principle: security is not optional.",
  },
  {
    meta: "Early work",
    title: "First client platforms shipped",
    description: "Delivered Batamart and early web platforms, establishing the delivery process used on every project since.",
  },
  {
    meta: "Healthcare",
    title: "Healthcare & diagnostics focus",
    description: "Built DiagSync and the Reene Medical Diagnostics website, sharpening a focus on data-sensitive industries.",
  },
  {
    meta: "Today",
    title: "AI-accelerated delivery",
    description: "Adopted AI-assisted development workflows to increase delivery speed while keeping human review at every stage.",
  },
]

export const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Stripe",
  "AWS",
  "Vercel",
  "Docker",
]
