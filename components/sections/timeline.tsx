import { Heading, Text } from "@/components/typography/typography"
import { Reveal, StaggerItem } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

export type TimelineEntry = { title: string; description: string; meta?: string }

/** Vertical milestone timeline — About page company history, or (with numbered=true) a "how we work" process list. */
export function Timeline({ entries, numbered = false }: { entries: TimelineEntry[]; numbered?: boolean }) {
  return (
    <Reveal stagger>
      <ol className="relative flex flex-col gap-8 border-l border-border pl-8">
        {entries.map((entry, index) => (
          <li key={entry.title}>
            <StaggerItem className="relative">
              <span
                className={cn(
                  "absolute -left-[calc(2rem+5px)] top-1 flex size-[9px] items-center justify-center rounded-full bg-primary ring-4 ring-background",
                  numbered && "size-6 -left-[calc(2rem+2px)] bg-accent text-caption font-semibold text-primary ring-0"
                )}
              >
                {numbered && index + 1}
              </span>
              {entry.meta && (
                <Text size="sm" tone="muted" className="mb-1">
                  {entry.meta}
                </Text>
              )}
              <Heading level={3} size="sm">
                {entry.title}
              </Heading>
              <Text size="sm" tone="muted" className="mt-1 max-w-xl">
                {entry.description}
              </Text>
            </StaggerItem>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}

/** Alias for the numbered "how we work" variant, per the Stage-2 component inventory. */
export function ProcessTimeline(props: { entries: TimelineEntry[] }) {
  return <Timeline {...props} numbered />
}
