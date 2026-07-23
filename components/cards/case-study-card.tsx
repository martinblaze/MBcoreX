import Image from "next/image"
import { Check, X } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Heading } from "@/components/typography/typography"
import { cn } from "@/lib/utils"

export type CaseStudyCardProps = {
  title: string
  image: string
  before: string[]
  after: string[]
  className?: string
}

/** Before/after comparison card — the Case Studies index pattern from the reference collage. */
export function CaseStudyCard({ title, image, before, after, className }: CaseStudyCardProps) {
  return (
    <Card className={cn("overflow-hidden border border-border bg-card p-0 ring-0", className)}>
      <div className="relative aspect-[16/9] w-full bg-surface-elevated">
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 p-5">
        <Heading level={3} size="sm">
          {title}
        </Heading>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-caption text-error-500">Before</span>
            <ul className="flex flex-col gap-1.5">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-body-sm text-muted-foreground">
                  <X className="mt-0.5 size-3.5 shrink-0 text-error-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-caption text-success">After</span>
            <ul className="flex flex-col gap-1.5">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-body-sm text-foreground">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
}
