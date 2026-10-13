import Link from "next/link"

import { Magnetic } from "@/components/magnetic"
import { cn } from "@/lib/utils"

type PillProps = {
  href: string
  children: React.ReactNode
  variant?: "dark" | "light" | "outline"
  className?: string
}

/** Rounded call-to-action with a leading dot, as used throughout the Riotters layout. */
export function Pill({ href, children, variant = "dark", className }: PillProps) {
  return (
    <Magnetic>
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.9rem] font-medium tracking-tight transition-transform duration-300 hover:-translate-y-0.5",
          variant === "dark" && "bg-ink text-paper",
          variant === "light" && "bg-paper text-ink",
          variant === "outline" && "border border-current",
          className
        )}
      >
        <span className="size-1.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-150" />
        {children}
      </Link>
    </Magnetic>
  )
}

export function ArrowLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("inline-flex items-center gap-2 text-sm font-medium", className)}>
      <span className="size-1.5 rounded-full bg-current" />
      <span className="u-link">{children}</span>
    </Link>
  )
}
