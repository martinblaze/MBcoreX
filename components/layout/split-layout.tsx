import { cn } from "@/lib/utils"

type SplitLayoutProps = {
  start: React.ReactNode
  end: React.ReactNode
  /** Which side gets the wider column on desktop. Defaults to an even split. */
  ratio?: "even" | "start-wide" | "end-wide"
  /** Swap visual order on mobile so `end` stacks first (e.g. media above copy). */
  reverseOnMobile?: boolean
  align?: "center" | "start"
  className?: string
}

const ratioClasses = {
  even: "lg:grid-cols-2",
  "start-wide": "lg:grid-cols-[3fr_2fr]",
  "end-wide": "lg:grid-cols-[2fr_3fr]",
}

/**
 * The two-column layout behind About/Cybersecurity heroes and any
 * copy-beside-media section. Purely structural — content is passed in, no
 * copy lives here.
 */
export function SplitLayout({
  start,
  end,
  ratio = "even",
  reverseOnMobile = false,
  align = "center",
  className,
}: SplitLayoutProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-10 lg:gap-16",
        ratioClasses[ratio],
        align === "center" ? "lg:items-center" : "lg:items-start",
        className
      )}
    >
      <div className={reverseOnMobile ? "order-2 lg:order-1" : "order-1"}>{start}</div>
      <div className={reverseOnMobile ? "order-1 lg:order-2" : "order-2"}>{end}</div>
    </div>
  )
}
