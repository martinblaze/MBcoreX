"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useScrolled } from "@/hooks/use-scroll-position"

/** Floating back-to-top button — appears once the visitor has scrolled well past the hero. */
export function ScrollToTop() {
  const visible = useScrolled(600)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-30"
        >
          <Button
            variant="outline"
            size="icon"
            aria-label="Scroll to top"
            className="glass-surface shadow-ambient"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
