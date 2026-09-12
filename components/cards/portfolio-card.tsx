import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

export type PortfolioCardProps = {
  title: string
  category: string
  description: string
  image: string
  /** Client logo — when provided, shown centered on a plain surface instead of `image` filling the card edge-to-edge. */
  logo?: string
  href: string
  className?: string
}

/**
 * Portfolio/project grid card.
 *
 * The image is the card — copy sits below it on the page background rather
 * than inside a bordered panel, so a grid of these reads as a contact sheet.
 * Hover pushes the image in slowly (900ms expo) while a scrim and the arrow
 * fade up; the long duration is what separates "expensive" from "bouncy".
 */
export function PortfolioCard({
  title,
  category,
  description,
  image,
  logo,
  href,
  className,
}: PortfolioCardProps) {
  return (
    <Link href={href} className={cn("group flex h-full flex-col", className)}>
      <div className="relative aspect-[16/11] overflow-hidden bg-surface-elevated">
        <Image
          src={logo ?? image}
          alt={logo ? `${title} logo` : ""}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={cn(
            "transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]",
            logo ? "object-contain p-10" : "object-cover"
          )}
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10"
        />
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 border border-foreground/10" />

        <span
          aria-hidden="true"
          className="absolute right-0 bottom-0 flex size-12 translate-y-full items-center justify-center bg-primary text-primary-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 pt-6">
        <span className="text-caption font-medium uppercase text-primary">{category}</span>
        <h3 className="font-display text-2xl font-normal text-foreground">{title}</h3>
        <p className="line-clamp-2 text-body-sm text-pretty text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}

/** Alias — Stage-2 spec names this both "Portfolio Card" and "Project Card"; same component. */
export const ProjectCard = PortfolioCard
