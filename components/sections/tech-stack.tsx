import { TechCard, type TechCardProps } from "@/components/cards/tech-card"
import { Reveal, StaggerItem } from "@/components/motion/reveal"

/** Technology badge row for a case study's "Technology" section. */
export function TechStackBadges({ items }: { items: TechCardProps[] }) {
  return (
    <Reveal stagger>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <StaggerItem key={item.name} variant="fade">
            <TechCard {...item} />
          </StaggerItem>
        ))}
      </div>
    </Reveal>
  )
}
