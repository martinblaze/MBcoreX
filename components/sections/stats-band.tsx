import { StatCard, type StatCardProps } from "@/components/cards/stat-card"
import { Reveal, StaggerItem } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

export function StatsBand({ stats, className }: { stats: StatCardProps[]; className?: string }) {
  return (
    <Reveal stagger>
      <div className={cn("grid grid-cols-2 gap-8 sm:grid-cols-4", className)}>
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <StatCard {...stat} />
          </StaggerItem>
        ))}
      </div>
    </Reveal>
  )
}
