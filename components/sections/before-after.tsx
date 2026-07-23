import { Grid } from "@/components/layout/grid"
import { CaseStudyCard, type CaseStudyCardProps } from "@/components/cards/case-study-card"
import { Reveal, StaggerItem } from "@/components/motion/reveal"

/** Case Studies index — grid of before/after comparison cards. */
export function BeforeAfterComparison({ items }: { items: CaseStudyCardProps[] }) {
  return (
    <Reveal stagger>
      <Grid cols={2} gap="lg">
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <CaseStudyCard {...item} />
          </StaggerItem>
        ))}
      </Grid>
    </Reveal>
  )
}
