import Image from "next/image"
import Link from "next/link"

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

/** Article card — matches the portfolio contact-sheet treatment so index and journal pages share one language. */
export function BlogCard({ title, excerpt, category, date, image, href, className }: BlogCardProps) {
  return (
    <Link href={href} className={cn("group flex h-full flex-col", className)}>
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 border border-foreground/10" />
      </div>

      <div className="flex flex-1 flex-col gap-3 pt-6">
        <div className="flex items-center gap-3 text-caption font-medium uppercase">
          <span className="text-primary">{category}</span>
          <span aria-hidden="true" className="h-px w-4 bg-border" />
          <time className="tracking-normal normal-case text-muted-foreground">{date}</time>
        </div>

        <h3 className="font-display text-xl font-normal text-foreground transition-colors group-hover:text-primary lg:text-2xl">
          {title}
        </h3>

        <p className="line-clamp-2 text-body-sm text-pretty text-muted-foreground">{excerpt}</p>
      </div>
    </Link>
  )
}
