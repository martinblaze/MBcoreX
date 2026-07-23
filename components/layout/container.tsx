import { cn } from "@/lib/utils"

type ContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  /** `default` caps at 1280px (design-system max content width); `wide` allows the
   * 1440px ultra-wide allowance reserved for hero sections. */
  width?: "default" | "wide" | "narrow"
}

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-7xl",
  wide: "max-w-[1440px]",
}

/** Horizontal max-width + gutter wrapper. Every section's content sits inside one. */
export function Container({ width = "default", className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-8 lg:px-10", widths[width], className)} {...props}>
      {children}
    </div>
  )
}
