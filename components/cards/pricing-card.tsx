import { Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heading, Text } from "@/components/typography/typography"
import { cn } from "@/lib/utils"

export type PricingCardProps = {
  tier: string
  price: string
  cadence?: string
  description: string
  features: string[]
  ctaLabel: string
  href?: string
  onSelect?: () => void
  popular?: boolean
  className?: string
}

/** Scaffolded for a future productized-engagement tier — not required for launch content. */
export function PricingCard({
  tier,
  price,
  cadence,
  description,
  features,
  ctaLabel,
  href,
  onSelect,
  popular = false,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full border ring-0",
        popular ? "border-primary bg-card shadow-glow-blue" : "border-border bg-card",
        className
      )}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most popular</Badge>
      )}
      <CardContent className="flex h-full flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Heading level={3} size="md">
            {tier}
          </Heading>
          <Text size="sm" tone="muted">
            {description}
          </Text>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-heading-xl font-semibold text-foreground">{price}</span>
          {cadence && (
            <Text size="sm" tone="muted">
              /{cadence}
            </Text>
          )}
        </div>
        <ul className="flex flex-1 flex-col gap-2.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-body-sm text-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          variant={popular ? "cta" : "outline"}
          size="lg"
          className="w-full"
          onClick={onSelect}
          render={href ? <a href={href} /> : undefined}
        >
          {ctaLabel}
        </Button>
      </CardContent>
    </Card>
  )
}
