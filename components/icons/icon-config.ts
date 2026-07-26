import {
  Award,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Crown,
  Database,
  Fingerprint,
  KeyRound,
  Layers,
  LayoutDashboard,
  Lock,
  Network,
  Radar,
  Rocket,
  ScanEye,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react"

import { DiscordIcon, GithubIcon, InstagramIcon, LinkedinIcon, TiktokIcon, XIcon, YoutubeIcon } from "./brand-icons"

/**
 * Standard icon sizes across the design system. Prefer these over ad-hoc
 * `size-[Npx]` classes so every icon slot stays visually consistent.
 *   inline — 16px, sits inline with body/caption text
 *   sm     — 20px, used inside buttons and compact list items
 *   md     — 24px, the default size inside cards
 *   lg     — 32px, feature/service card headers
 *   xl     — 48px, hero-level standalone icon marks
 */
export const iconSizes = {
  inline: "size-4",
  sm: "size-5",
  md: "size-6",
  lg: "size-8",
  xl: "size-12",
} as const

export type IconSize = keyof typeof iconSizes

/** Semantic icon colors — map to theme tokens, never hardcode a hex here. */
export const iconColors = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  brand: "text-primary",
  accent: "text-brand-red-500",
  success: "text-success",
  warning: "text-warning",
  error: "text-error-500",
  info: "text-info",
} as const

export type IconColor = keyof typeof iconColors

/** Service icons — used by ServiceCard / the Services grid. */
export const serviceIcons: Record<string, LucideIcon> = {
  software: Code2,
  enterprise: Layers,
  web: LayoutDashboard,
  mobile: Smartphone,
  dashboard: LayoutDashboard,
  saas: Rocket,
  ai: BrainCircuit,
  automation: Workflow,
  api: Network,
  cloud: Cloud,
  database: Database,
  security: Shield,
}

/** Cybersecurity-specific icons — used on the Cybersecurity page and cards. */
export const securityIcons: Record<string, LucideIcon> = {
  assessment: Radar,
  risk: ShieldAlert,
  policy: ShieldCheck,
  compliance: Award,
  network: Network,
  pentest: ScanEye,
  identity: Fingerprint,
  encryption: KeyRound,
  cloudSecurity: Lock,
}

/** AI-solutions icons — used on the AI Solutions page and cards. */
export const aiIcons: Record<string, LucideIcon> = {
  assistant: Bot,
  intelligence: BrainCircuit,
  automation: Workflow,
  speed: Crown,
}

/** Brand/social icons keyed to `SocialChannel.id` from lib/constants.ts. */
export const brandIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  tiktok: TiktokIcon,
  discord: DiscordIcon,
} as const
