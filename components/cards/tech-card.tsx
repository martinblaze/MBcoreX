import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type TechCardProps = {
  name: string
  icon?: LucideIcon
  className?: string
}

/** Compact technology chip — used in TechStackBadges under a case study's "Technology" section. */
export function TechCard({ name, icon: Icon, className }: TechCardProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border border-border bg-surface-elevated px-3 py-2 text-body-sm font-medium text-foreground",
        className
      )}
    >
      {Icon && <Icon className="size-4 text-primary" aria-hidden="true" />}
      {name}
    </div>
  )
}
