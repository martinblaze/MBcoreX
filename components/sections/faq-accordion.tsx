"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

export type FAQItem = { question: string; answer: string }

/**
 * Editorial FAQ — hairline-ruled rows with serif questions.
 *
 * Built on motion rather than the shared `<Accordion>` primitive because the
 * answer needs a genuine height transition (auto-height, eased) and the row
 * needs to tint as it opens; the primitive's CSS-only collapse can't do the
 * former smoothly at these type sizes.
 *
 * Single-open behaviour keeps the column short and stops the page from
 * jumping around under the reader.
 */
export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const reducedMotion = useReducedMotion()

  return (
    <div className="border-t border-border">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.question} className="border-b border-border">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                className="group flex w-full items-start gap-6 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:py-9"
              >
                <span className="mt-2 w-8 shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={cn(
                    "flex-1 font-display text-xl font-normal transition-colors duration-300 sm:text-2xl lg:text-3xl",
                    isOpen ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"
                  )}
                >
                  {item.question}
                </span>

                {/* Plus that rotates into a minus — one rule stays put, the
                    other rotates and fades, which is cheaper and calmer than
                    swapping two icons. */}
                <span
                  aria-hidden="true"
                  className="relative mt-3 size-4 shrink-0 text-foreground"
                >
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                  <motion.span
                    className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current"
                    animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  initial={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-9 pl-14 text-body-md text-pretty text-muted-foreground">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
