import { Code2, Compass, Palette, Rocket, Target } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type ProcessStep = { icon: LucideIcon; title: string; description: string }

export const processSteps: ProcessStep[] = [
  {
    icon: Compass,
    title: "Discovery",
    description: "We learn your business, users and constraints before proposing a single line of code.",
  },
  {
    icon: Target,
    title: "Strategy",
    description: "We define scope, architecture and success metrics so everyone is aligned on what \"done\" means.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Interfaces are designed for clarity and trust first, polish second — never the other way around.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "We build with AI-assisted workflows for speed, backed by human review for quality and security.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We ship, monitor, and stay on for maintenance — your software doesn't become someone else's problem.",
  },
]
