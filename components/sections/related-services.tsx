import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Grid } from "@/components/layout/grid"
import { Heading, Text } from "@/components/typography/typography"
import { Reveal, StaggerItem } from "@/components/motion/reveal"
import { solutionsNav } from "@/lib/constants"

/** Cross-links between the 7 dedicated service/solution landing pages — keeps every one reachable from every other, not just from the hub. */
export function RelatedServices({ currentHref }: { currentHref: string }) {
  const items = solutionsNav.filter((item) => item.href !== currentHref)

  return (
    <Reveal stagger>
      <Grid cols={3} gap="md">
        {items.map((item) => (
          <StaggerItem key={item.href}>
            <Link
              href={item.href}
              className="group flex h-full flex-col justify-between gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              <div>
                <Heading level={3} size="sm">
                  {item.label}
                </Heading>
                <Text size="sm" tone="muted" className="mt-1">
                  {item.description}
                </Text>
              </div>
              <ArrowUpRight
                className="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </Link>
          </StaggerItem>
        ))}
      </Grid>
    </Reveal>
  )
}
