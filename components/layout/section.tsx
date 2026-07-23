import { cn } from "@/lib/utils"
import { Container } from "./container"

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  /** Vertical rhythm — Section 6 of the architecture blueprint (128/96/64px). */
  spacing?: "default" | "tight" | "none"
  containerWidth?: "default" | "wide" | "narrow"
  /** Skip the built-in Container wrapper when a section needs full-bleed content. */
  fullBleed?: boolean
  glow?: "none" | "top" | "center"
}

const spacings = {
  none: "",
  tight: "py-16 lg:py-20",
  default: "py-16 lg:py-32",
}

/**
 * Standard page-section shell: consistent vertical rhythm + content container,
 * with an optional radial brand-blue glow used behind hero/CTA sections.
 */
export function Section({
  spacing = "default",
  containerWidth = "default",
  fullBleed = false,
  glow = "none",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("relative", spacings[spacing], className)} {...props}>
      {glow !== "none" && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 -z-10 h-[480px] bg-[radial-gradient(ellipse_at_center,_var(--color-brand-blue-700)_0%,_transparent_70%)] opacity-20 blur-3xl",
            glow === "top" ? "top-0" : "top-1/2 -translate-y-1/2"
          )}
        />
      )}
      {fullBleed ? children : <Container width={containerWidth}>{children}</Container>}
    </section>
  )
}
