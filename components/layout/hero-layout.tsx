import { cn } from "@/lib/utils"

type HeroLayoutProps = {
  content: React.ReactNode
  media?: React.ReactNode
  /** Center the content column when there's no media (e.g. narrow landing-page heroes). */
  centered?: boolean
  className?: string
}

/**
 * Structural shell for hero sections: clears the sticky navbar, enforces a
 * min-height so heroes don't collapse on short copy, and lays out an
 * optional media slot beside the content. `components/sections/hero.tsx`
 * composes copy/CTAs on top of this.
 */
export function HeroLayout({ content, media, centered = false, className }: HeroLayoutProps) {
  return (
    <div
      className={cn(
        "grid min-h-[calc(100svh-4rem)] items-center gap-12 pt-24 pb-16 lg:pt-32",
        media ? "lg:grid-cols-[1.1fr_1fr] lg:gap-16" : "grid-cols-1",
        className
      )}
    >
      <div className={cn(centered && !media && "mx-auto max-w-3xl text-center")}>{content}</div>
      {media && <div className="relative">{media}</div>}
    </div>
  )
}
