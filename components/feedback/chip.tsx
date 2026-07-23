"use client"

import { X } from "lucide-react"

import { cn } from "@/lib/utils"

type ChipProps = {
  children: React.ReactNode
  onRemove?: () => void
  selected?: boolean
  className?: string
}

/** Removable/toggleable pill — portfolio filter bar, tag selection. Distinct from Badge (which is static). */
export function Chip({ children, onRemove, selected = false, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-body-sm font-medium transition-colors",
        selected
          ? "border-primary bg-primary/10 text-primary"
          : "border-border bg-transparent text-muted-foreground hover:border-primary/30 hover:text-foreground",
        className
      )}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove"
          className="rounded-full text-current/70 hover:text-current"
        >
          <X className="size-3.5" aria-hidden="true" />
        </button>
      )}
    </span>
  )
}
