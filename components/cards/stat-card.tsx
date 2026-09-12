import { Counter } from "@/components/motion/counter"
import { cn } from "@/lib/utils"

export type StatCardProps = {
  value: number
  suffix?: string
  prefix?: string
  label: string
  className?: string
}

/** A single count-up stat. StatsBand renders these in a hairline-ruled row. */
export function StatCard({ value, suffix = "", prefix = "", label, className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Counter
        value={value}
        prefix={prefix}
        suffix={suffix}
        // Serif numerals at display scale — the figures are the headline here,
        // so they take the display face rather than the UI grotesk.
        className="font-display text-display-lg font-normal text-foreground tabular-nums"
      />
      <span className="text-caption font-medium uppercase text-muted-foreground">{label}</span>
    </div>
  )
}
