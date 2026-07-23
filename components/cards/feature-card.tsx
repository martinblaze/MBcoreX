import type { LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Heading, Text } from "@/components/typography/typography"
import { cn } from "@/lib/utils"

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

/** Icon + title + description card — mission/value grids, capability lists. No link. */
export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={cn("border border-border bg-card ring-0", className)}>
      <CardContent className="flex flex-col gap-3">
        <div className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <Heading level={3} size="sm">
          {title}
        </Heading>
        <Text size="sm" tone="muted">
          {description}
        </Text>
      </CardContent>
    </Card>
  )
}
