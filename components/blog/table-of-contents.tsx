"use client"

import { useEffect, useState } from "react"
import { List } from "lucide-react"

import { Caption } from "@/components/typography/typography"
import { cn } from "@/lib/utils"

type TableOfContentsProps = {
  items: { id: string; text: string }[]
  className?: string
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "-100px 0px -70% 0px" }
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav aria-label="Table of contents" className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-center gap-2">
        <List className="size-4 text-primary" aria-hidden="true" />
        <Caption>On This Page</Caption>
      </div>
      <ul className="flex flex-col gap-2 border-l border-border pl-4">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "text-body-sm text-muted-foreground transition-colors hover:text-foreground",
                activeId === item.id && "font-medium text-primary"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
