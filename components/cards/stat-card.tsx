import { Counter } from "@/components/motion/counter"
import { Text } from "@/components/typography/typography"
import { cn } from "@/lib/utils"

export type StatCardProps = {
  value: number
  suffix?: string
  prefix?: string
  label: string
  className?: string
}

/** A single count-up stat. StatsBand renders these in a row (Projects Delivered, Years of Experience, etc.). */
export function StatCard({ value, suffix = "", prefix = "", label, className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Counter
        value={value}
        prefix={prefix}
        suffix={suffix}
        className="font-heading text-heading-xl font-semibold text-primary md:text-display-lg"
      />
      <Text size="sm" tone="muted">
        {label}
      </Text>
    </div>
  )
}
