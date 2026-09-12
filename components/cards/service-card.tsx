import Link from "next/link"
import { ArrowUpRight, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type ServiceCardProps = {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  className?: string
}

/**
 * Service grid cell — a ruled block that inverts to the foreground colour on
 * hover, matching the fill behaviour of `ServiceIndex` rows and the primary
 * button so every interactive surface on the site reacts the same way.
 *
 * Deliberately CSS-only (no framer-motion) so `icon` can stay a plain
 * component reference passed from Server Component data without crossing a
 * Client Component prop boundary.
 */
export function ServiceCard({ icon: Icon, title, description, href, className }: ServiceCardProps) {
  const content = (
    <div
      className={cn(
        "relative isolate flex h-full flex-col gap-5 overflow-hidden border border-border p-8",
        "transition-colors duration-500 group-hover:border-foreground group-hover:text-background",
        className
      )}
    >
      {/* Fill rises from the bottom edge — same gesture as the rubber button. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
      />

      <div className="flex items-start justify-between">
        <Icon className="size-6 text-primary" aria-hidden="true" />
        {href && (
          <ArrowUpRight
            className="size-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        )}
      </div>

      <h3 className="font-heading text-body-lg font-medium tracking-tight">{title}</h3>

      <p className="text-body-sm text-pretty text-muted-foreground transition-colors duration-500 group-hover:text-background/70">
        {description}
      </p>
    </div>
  )

  if (!href) return <div className="group h-full">{content}</div>

  return (
    <Link href={href} className="group block h-full">
      {content}
    </Link>
  )
}
