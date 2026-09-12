import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

/**
 * Icon + title + description cell — mission/value grids, capability lists.
 *
 * Deliberately not a "card": no fill, no shadow, no corner radius. It is a
 * cell in a ruled grid whose top rule thickens into the brand colour on
 * hover. Grids of these read as a considered table rather than a tray of
 * floating boxes, which is the single biggest tell of a templated layout.
 *
 * CSS-only (no framer-motion) so `icon` can stay a plain component reference
 * passed from Server Component data without crossing a client boundary.
 */
export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn("group relative flex flex-col gap-5 pt-8", className)}>
      {/* Base rule + the brand rule that wipes across it on hover. */}
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-border" />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />

      <Icon
        className="size-6 text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5"
        aria-hidden="true"
      />

      <h3 className="font-heading text-body-lg font-medium tracking-tight text-foreground">{title}</h3>

      <p className="text-body-sm text-pretty text-muted-foreground">{description}</p>
    </div>
  )
}
