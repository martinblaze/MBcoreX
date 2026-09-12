import { cn } from "@/lib/utils"
import { Section } from "./section"

type BackgroundHeroProps = {
  /** Full-bleed image (or other visual) rendered behind the whole panel, e.g. a Next `<Image fill />`. */
  background: React.ReactNode
  children: React.ReactNode
  /** Match the viewport-filling page hero (Home). Omit for shorter, section-style panels (About/Cybersecurity heroes). */
  fullViewport?: boolean
  /** Extra height for panels whose source image needs more room to avoid a tight crop (e.g. a squarish graphic). */
  minHeightClass?: string
  /**
   * `default` heavily darkens the text side — needed when the image itself
   * is bright/busy there (e.g. Home's dashboard UI). `light` only lightly
   * darkens it — for images that are already dark/black on that side, where
   * a heavy scrim would just mute the image's own color (e.g. Cybersecurity's
   * glowing shield on a black field). Both `default` and `light` fade to
   * fully clear a quarter of the way down, which is fine for a short hero
   * blurb but leaves lower content unreadable — use `full` when the content
   * spans the whole section (e.g. a heading plus a timeline/list below it),
   * since it holds a flat, even wash across the entire image instead of
   * clearing up.
   */
  scrim?: "default" | "light" | "full"
  /** Which side the copy sits on (desktop only — always left-aligned below `lg`). Flips which side the horizontal scrim darkens. */
  align?: "start" | "end"
  className?: string
}

const scrimClasses = {
  default: {
    start: "bg-gradient-to-r from-background via-background/85 to-background/10",
    end: "bg-gradient-to-l from-background via-background/85 to-background/10",
    vertical: "bg-gradient-to-t from-background via-transparent to-transparent",
    mobile: "bg-gradient-to-b from-background from-10% via-background/75 via-45% to-transparent to-75%",
  },
  light: {
    start: "bg-gradient-to-r from-background from-5% via-background/55 via-35% to-transparent to-70%",
    end: "bg-gradient-to-l from-background from-5% via-background/55 via-35% to-transparent to-70%",
    vertical: "bg-gradient-to-t from-background/45 from-0% to-transparent to-25%",
    mobile: "bg-gradient-to-b from-background from-10% via-background/75 via-45% to-transparent to-75%",
  },
  // Flat, even wash (not a gradient that clears up) so text stays legible
  // however tall the content runs — a heading plus a full timeline, not
  // just a short hero blurb.
  full: {
    start: "bg-gradient-to-r from-background from-0% via-background/82 via-50% to-background/55 to-100%",
    end: "bg-gradient-to-l from-background from-0% via-background/82 via-50% to-background/55 to-100%",
    vertical: "bg-background/40",
    mobile: "bg-background/72",
  },
} as const

/**
 * Full-bleed background-image panel with copy overlaid on a scrim — the
 * shared shell behind every "blended" hero on the site (Home, About,
 * Cybersecurity) so the image reads as one continuous scene instead of a
 * boxed picture next to the text.
 */
export function BackgroundHero({
  background,
  children,
  fullViewport = false,
  minHeightClass,
  scrim = "default",
  align = "start",
  className,
}: BackgroundHeroProps) {
  const scrimStyle = scrimClasses[scrim]

  return (
    <Section spacing="none" fullBleed className={cn("grain relative isolate overflow-hidden", className)}>
      <div className="absolute inset-0 -z-20">{background}</div>
      <div className={cn("absolute inset-0 -z-10 hidden lg:block", scrimStyle[align])} />
      <div className={cn("absolute inset-0 -z-10 hidden lg:block", scrimStyle.vertical)} />
      {/* Below lg the copy stacks above the image instead of beside it, so the
          scrim runs top-to-bottom instead of reusing the desktop left/right treatment. */}
      <div className={cn("absolute inset-0 -z-10 lg:hidden", scrimStyle.mobile)} />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div
          className={cn(
            "flex items-center py-28 lg:py-40",
            align === "end" && "lg:justify-end",
            minHeightClass,
            fullViewport && "min-h-[calc(100svh-4rem)] py-0 pt-24 pb-16 lg:pt-32"
          )}
        >
          {children}
        </div>
      </div>
    </Section>
  )
}
