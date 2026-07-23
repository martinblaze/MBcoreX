import Link from "next/link"
import { ArrowUpRight, type LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Heading, Text } from "@/components/typography/typography"
import { cn } from "@/lib/utils"

type ServiceCardProps = {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  className?: string
}

/**
 * Service grid card — icon + title + description + optional link, with hover
 * lift/glow. Deliberately CSS-only (no framer-motion) so `icon` can stay a
 * plain component reference passed from Server Component data without
 * crossing a Client Component prop boundary.
 */
export function ServiceCard({ icon: Icon, title, description, href, className }: ServiceCardProps) {
  const content = (
    <Card
      className={cn(
        "h-full border border-border bg-card ring-0 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow-blue",
        className
      )}
    >
      <CardContent className="flex h-full flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          {href && (
            <ArrowUpRight
              className="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              aria-hidden="true"
            />
          )}
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

  if (!href) return <div className="group h-full">{content}</div>

  return (
    <Link href={href} className="group block h-full">
      {content}
    </Link>
  )
}
