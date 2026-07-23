import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Heading, Text } from "@/components/typography/typography"
import { cn } from "@/lib/utils"

export type BlogCardProps = {
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  href: string
  className?: string
}

export function BlogCard({ title, excerpt, category, date, image, href, className }: BlogCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/30",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{category}</Badge>
          <Text size="sm" tone="muted" as="time">
            {date}
          </Text>
        </div>
        <Heading level={3} size="sm">
          {title}
        </Heading>
        <Text size="sm" tone="muted" className="line-clamp-2">
          {excerpt}
        </Text>
      </div>
    </Link>
  )
}
