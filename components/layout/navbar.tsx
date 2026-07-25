"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Logo } from "@/components/layout/logo"
import { NavLink } from "@/components/layout/nav-link"
import { NavDropdown } from "@/components/layout/nav-dropdown"
import { MobileNav } from "@/components/layout/mobile-nav"
import { SearchDialog } from "@/components/search/search-dialog"
import { useScrolled } from "@/hooks/use-scroll-position"
import { cn } from "@/lib/utils"
import { ctaCopy, primaryNav } from "@/lib/constants"

export function Navbar() {
  const scrolled = useScrolled()

  return (
    <header className="sticky top-0 z-40 w-full">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div
        className={cn(
          "transition-colors duration-200",
          scrolled ? "glass-surface" : "border-b border-transparent bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Logo height={36} priority />

            <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
              {primaryNav.map((item) =>
                item.label === "Services" ? (
                  <NavDropdown key={item.href} />
                ) : (
                  <NavLink key={item.href} href={item.href} className="rounded-lg px-2 py-1.5 text-[13px]">
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            <div className="flex items-center gap-2">
              <SearchDialog />
              <Button variant="cta" size="default" className="hidden xl:inline-flex" render={<Link href="/contact" />}>
                {ctaCopy.primary}
              </Button>
              <MobileNav />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
