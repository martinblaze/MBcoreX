"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Heading, Text } from "@/components/typography/typography"
import { cardHover } from "@/lib/motion"
import { cn } from "@/lib/utils"

export type PortfolioCardProps = {
  title: string
  category: string
  description: string
  image: string
  /** Client logo — when provided, shown centered on a plain surface instead of `image` filling the card edge-to-edge. */
  logo?: string
  href: string
  className?: string
}

/** Portfolio/project grid card — thumbnail image (or client logo) scales on hover, category tag, link to the case study. */
export function PortfolioCard({ title, category, description, image, logo, href, className }: PortfolioCardProps) {
  return (
    <motion.div {...cardHover} className={cn("group h-full", className)}>
      <Link href={href} className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-elevated">
          {logo ? (
            <Image
              src={logo}
              alt={`${title} logo`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain p-10 transition-transform duration-300 ease-out group-hover:scale-[1.04] sm:p-12"
            />
          ) : (
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="outline">{category}</Badge>
            <ArrowUpRight
              className="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              aria-hidden="true"
            />
          </div>
          <Heading level={3} size="sm">
            {title}
          </Heading>
          <Text size="sm" tone="muted" className="line-clamp-2">
            {description}
          </Text>
        </div>
      </Link>
    </motion.div>
  )
}

/** Alias — Stage-2 spec names this both "Portfolio Card" and "Project Card"; same component. */
export const ProjectCard = PortfolioCard
