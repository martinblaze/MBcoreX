"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { useScrolled } from "@/hooks/use-scroll-position"

type StickyMobileCtaProps = {
  label: string
  href?: string
}

/** Mobile-only sticky bottom CTA bar for high-intent pages (Services, Cybersecurity, AI Solutions, case studies). */
export function StickyMobileCta({ label, href = "/contact" }: StickyMobileCtaProps) {
  const visible = useScrolled(500)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.2 }}
          className="glass-surface fixed inset-x-0 bottom-0 z-30 border-t border-border p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden"
        >
          <Button variant="cta" size="lg" className="w-full" render={<Link href={href} />}>
            {label}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
