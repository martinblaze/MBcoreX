import type { LucideIcon } from "lucide-react"

import { Grid } from "@/components/layout/grid"
import { FeatureCard } from "@/components/cards/feature-card"
import { Reveal, StaggerItem } from "@/components/motion/reveal"

export type FeatureGridItem = { icon: LucideIcon; title: string; description: string }

export function FeatureGrid({ items, cols = 3 }: { items: FeatureGridItem[]; cols?: 2 | 3 | 4 }) {
  return (
    <Reveal stagger>
      <Grid cols={cols}>
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <FeatureCard {...item} />
          </StaggerItem>
        ))}
      </Grid>
    </Reveal>
  )
}
