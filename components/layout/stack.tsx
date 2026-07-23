import { cn } from "@/lib/utils"

type StackProps = React.ComponentPropsWithoutRef<"div"> & {
  direction?: "row" | "col"
  gap?: "xs" | "sm" | "md" | "lg" | "xl"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between"
  wrap?: boolean
}

const gapClasses = { xs: "gap-2", sm: "gap-3", md: "gap-4", lg: "gap-6", xl: "gap-8" }
const alignClasses = { start: "items-start", center: "items-center", end: "items-end", stretch: "items-stretch" }
const justifyClasses = { start: "justify-start", center: "justify-center", end: "justify-end", between: "justify-between" }

/** Flex-based layout primitive. `direction="col"` replaces the old "Stack" pattern; `row` is a flex row. */
export function Stack({
  direction = "col",
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap = false,
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        wrap && "flex-wrap",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/** Fixed-size spacer for cases where gap-based spacing doesn't apply (e.g. between inline elements). */
export function Spacer({
  size = "md",
  axis = "vertical",
  className,
}: {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  axis?: "vertical" | "horizontal"
  className?: string
}) {
  const sizeMap = { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "3rem", xl: "4rem" }
  return (
    <div
      aria-hidden="true"
      className={cn("shrink-0", className)}
      style={axis === "vertical" ? { height: sizeMap[size] } : { width: sizeMap[size] }}
    />
  )
}
