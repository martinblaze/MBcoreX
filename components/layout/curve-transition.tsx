import { cn } from "@/lib/utils"

/**
 * The curved seam between two full-bleed bands (fora.so's signature move).
 *
 * Renders an over-wide ellipse painted in the *incoming* section's colour and
 * parks it on the boundary. Because the ellipse is 140% of the viewport, only
 * its shallow centre is visible, which reads as a soft sweep rather than a
 * dome. `height` controls how pronounced the arc is.
 *
 * Place as a direct child of a `relative` section; it positions itself.
 */
export function CurveTransition({
  position = "bottom",
  tone = "background",
  height = 90,
  className,
}: {
  /** `bottom` caps the end of a band; `top` caps the start of the next one. */
  position?: "top" | "bottom"
  tone?: "background" | "surface" | "primary" | "foreground"
  /** Arc depth in px. 60–120 reads as premium; beyond that it turns into a dome. */
  height?: number
  className?: string
}) {
  const tones = {
    background: "bg-background",
    surface: "bg-surface-elevated",
    primary: "bg-primary",
    foreground: "bg-foreground",
  } as const

  return (
    <div
      aria-hidden="true"
      style={{ height }}
      className={cn(
        "curve-cap z-20",
        position === "bottom" ? "curve-cap-bottom bottom-0" : "curve-cap-top top-0",
        // Pull the arc a hair past the seam so no sub-pixel hairline of the
        // previous band shows through at fractional device pixel ratios.
        position === "bottom" ? "-mb-px" : "-mt-px",
        tones[tone],
        className
      )}
    />
  )
}
