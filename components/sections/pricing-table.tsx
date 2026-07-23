import { Grid } from "@/components/layout/grid"
import { PricingCard, type PricingCardProps } from "@/components/cards/pricing-card"
import { Reveal, StaggerItem } from "@/components/motion/reveal"

export function PricingTable({ tiers }: { tiers: PricingCardProps[] }) {
  return (
    <Reveal stagger>
      <Grid cols={tiers.length >= 3 ? 3 : 2} gap="lg" className="items-stretch">
        {tiers.map((tier) => (
          <StaggerItem key={tier.tier}>
            <PricingCard {...tier} />
          </StaggerItem>
        ))}
      </Grid>
    </Reveal>
  )
}
