"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Logo } from "@/components/layout/logo"
import { NavLink } from "@/components/layout/nav-link"
import { NavDropdown } from "@/components/layout/nav-dropdown"
import { MobileNav } from "@/components/layout/mobile-nav"
import { SearchDialog } from "@/components/search/search-dialog"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { cn } from "@/lib/utils"
import { ctaCopy, primaryNav } from "@/lib/constants"

/** Scroll distance over which the bar goes from fully transparent to fully washed. */
const WASH_DISTANCE = 220

/**
 * The navbar sits *over* the hero rather than above it, so at the top of a page
 * it is completely transparent and the hero image runs behind it. Two things
 * then happen independently as you scroll:
 *
 *  - **The wash**: a blurred surface fades in continuously across the first
 *    ~220px. Interpolating opacity (rather than toggling a class at a
 *    threshold) is what keeps it from "popping" into place.
 *  - **Auto-hide**: past one viewport, scrolling down retracts the bar and
 *    scrolling up brings it straight back, so long pages stay unobstructed
 *    without ever stranding the visitor without navigation.
 */
export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  const washOpacity = useTransform(scrollY, [0, WASH_DISTANCE], [0, 1])
  // The hairline trails the wash slightly so the border never appears before
  // there is a surface for it to sit on.
  const borderOpacity = useTransform(scrollY, [WASH_DISTANCE * 0.6, WASH_DISTANCE], [0, 1])

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0
    const delta = current - previous

    if (current < window.innerHeight) {
      setHidden(false)
      return
    }
    // Small threshold on the delta so trackpad jitter doesn't flap the bar.
    if (delta > 6) setHidden(true)
    else if (delta < -6) setHidden(false)
  })

  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Wash layer — separate from the content so blurring it never blurs the
          nav items themselves. */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: washOpacity }}
        className="glass-surface absolute inset-0 border-b-0"
      />
      <motion.div
        aria-hidden="true"
        style={{ opacity: borderOpacity }}
        className="absolute inset-x-0 bottom-0 h-px bg-border"
      />

      <Container>
        <div className="relative flex h-20 items-center justify-between">
          <Logo height={52} priority />

          {/* "Home" is dropped here — the logo to its left already goes home,
              and at this type size the extra item is what pushed the row past
              the container. It stays in `primaryNav` for the mobile drawer. */}
          <nav aria-label="Primary" className="hidden items-center xl:flex">
            {primaryNav
              .filter((item) => item.href !== "/")
              .map((item) =>
                item.label === "Services" ? (
                  <NavDropdown key={item.href} />
                ) : (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "link-wipe px-2.5 py-2 text-[11px] font-medium tracking-[0.1em] whitespace-nowrap uppercase",
                      "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <SearchDialog />
            <ThemeToggle />
            <Button
              variant="cta"
              size="default"
              className="hidden xl:inline-flex"
              render={<Link href="/contact" />}
            >
              {ctaCopy.primary}
            </Button>
            <MobileNav />
          </div>
        </div>
      </Container>
    </motion.header>
  )
}
