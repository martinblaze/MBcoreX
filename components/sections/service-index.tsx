"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { Text } from "@/components/typography/typography"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

export type ServiceIndexItem = {
  title: string
  description: string
  href: string
}

/**
 * Services as an editorial index rather than a card grid.
 *
 * A numbered, hairline-ruled list reads as a table of contents — deliberate,
 * typeset, and the single strongest departure from the eight-identical-cards
 * layout that makes a site look templated. The description is withheld until
 * hover so the resting state stays a clean column of titles.
 */
export function ServiceIndex({ items }: { items: ServiceIndexItem[] }) {
  const [active, setActive] = useState<number | null>(null)
  const reducedMotion = useReducedMotion()

  return (
    <ul className="border-t border-border">
      {items.map((item, i) => {
        const isActive = active === i
        return (
          <li key={item.href} className="border-b border-border">
            <Link
              href={item.href}
              className="group relative block overflow-hidden focus-visible:outline-none"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
            >
              {/* Wipe fill — grows from the bottom edge so the row fills like a
                  level rising, matching the button's directional fill. */}
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-foreground"
                initial={false}
                animate={{ scaleY: isActive && !reducedMotion ? 1 : 0 }}
                style={{ originY: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />

              <div
                className={cn(
                  "flex items-center gap-6 px-1 py-8 transition-colors duration-300 lg:py-10",
                  isActive && !reducedMotion && "text-background"
                )}
              >
                <span
                  className={cn(
                    "w-10 shrink-0 font-mono text-[11px] tabular-nums transition-colors duration-300",
                    isActive && !reducedMotion ? "text-background/50" : "text-muted-foreground"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <motion.h3
                  className="font-display text-2xl font-normal tracking-tight sm:text-3xl lg:text-4xl"
                  animate={{ x: isActive && !reducedMotion ? 16 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.title}
                </motion.h3>

                <div className="ml-auto hidden max-w-sm shrink-0 lg:block">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.p
                        key="desc"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-right text-body-sm text-background/70"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <ArrowUpRight
                  className={cn(
                    "size-6 shrink-0 transition-transform duration-500 lg:ml-8",
                    isActive && !reducedMotion && "-translate-y-1 translate-x-1"
                  )}
                  aria-hidden="true"
                />
              </div>

              {/* Descriptions can't live behind hover on touch, so they're always
                  visible below lg. */}
              <Text size="sm" tone="muted" className="px-1 pb-8 lg:hidden">
                {item.description}
              </Text>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
