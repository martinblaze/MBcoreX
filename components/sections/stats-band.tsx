import { StatCard, type StatCardProps } from "@/components/cards/stat-card"
import { Reveal, StaggerItem } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

/**
 * Stats as a ruled row. Vertical hairlines between columns (rather than gaps
 * alone) is what makes four numbers read as a single considered band instead
 * of four floating widgets.
 */
export function StatsBand({ stats, className }: { stats: StatCardProps[]; className?: string }) {
  return (
    <Reveal stagger>
      <div className={cn("grid grid-cols-2 border-y border-border sm:grid-cols-4", className)}>
        {stats.map((stat, i) => (
          <StaggerItem
            key={stat.label}
            className={cn(
              "px-6 py-10 lg:px-8 lg:py-14",
              // No left rule on the first item of each row.
              i % 2 !== 0 && "border-l border-border",
              "sm:border-l sm:first:border-l-0",
              i % 2 === 0 && "sm:border-l"
            )}
          >
            <StatCard {...stat} />
          </StaggerItem>
        ))}
      </div>
    </Reveal>
  )
}
