import { cn } from "@/lib/utils"
import { Container } from "./container"
import { CurveTransition } from "./curve-transition"

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  /** Vertical rhythm. `loose` is the editorial default for full-bleed feature bands. */
  spacing?: "default" | "tight" | "loose" | "none"
  containerWidth?: "default" | "wide" | "narrow"
  /** Skip the built-in Container wrapper when a section needs full-bleed content. */
  fullBleed?: boolean
  glow?: "none" | "top" | "center"
  /**
   * Background band. Alternating `background` and `surface` down a page is what
   * gives the scroll a sense of chapters instead of one continuous scroll.
   * `invert` flips to the foreground colour for a hard punctuation break.
   */
  tone?: "none" | "surface" | "invert" | "brand"
  /** Curved seam capping the section. Pass the colour of the band it curves *into*. */
  curveTop?: "background" | "surface" | "primary" | "foreground"
  curveBottom?: "background" | "surface" | "primary" | "foreground"
}

const spacings = {
  none: "",
  tight: "py-16 lg:py-24",
  default: "py-24 lg:py-36",
  loose: "py-32 lg:py-52",
}

const tones = {
  none: "",
  surface: "bg-surface-elevated",
  invert: "bg-foreground text-background",
  brand: "bg-primary text-primary-foreground",
}

/**
 * Standard page-section shell: vertical rhythm, content container, optional
 * tonal band and curved seams into the neighbouring sections.
 */
export function Section({
  spacing = "default",
  containerWidth = "default",
  fullBleed = false,
  glow = "none",
  tone = "none",
  curveTop,
  curveBottom,
  className,
  children,
  ...props
}: SectionProps) {
  const hasCurve = Boolean(curveTop || curveBottom)

  return (
    <section
      className={cn(
        "relative",
        spacings[spacing],
        tones[tone],
        // A curve overhangs the seam, so the section must clip it to stay
        // inside its own band.
        hasCurve && "overflow-hidden",
        className
      )}
      {...props}
    >
      {glow !== "none" && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 -z-10 h-[480px] bg-[radial-gradient(ellipse_at_center,_var(--color-brand-blue-700)_0%,_transparent_70%)] opacity-20 blur-3xl",
            glow === "top" ? "top-0" : "top-1/2 -translate-y-1/2"
          )}
        />
      )}

      {curveTop && <CurveTransition position="top" tone={curveTop} />}
      {fullBleed ? children : <Container width={containerWidth}>{children}</Container>}
      {curveBottom && <CurveTransition position="bottom" tone={curveBottom} />}
    </section>
  )
}
