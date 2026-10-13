"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"

import { services } from "@/content/services"
import { primaryNav } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block origin-left scale-x-[1.28] text-[1.75rem] font-extrabold leading-none tracking-[-0.02em]",
        // scale-x does not change layout width, so reserve the extra stretch
        "mr-[2.2rem]",
        className
      )}
    >
      MB<span className="font-bold">core</span>X
    </span>
  )
}

export function Navbar() {
  const pathname = usePathname()
  // Open state is keyed to the route it was opened on, so navigating
  // closes both panels without a reset effect.
  const [servicesFor, setServicesFor] = useState<string | null>(null)
  const [menuFor, setMenuFor] = useState<string | null>(null)
  const servicesOpen = servicesFor === pathname
  const menuOpen = menuFor === pathname
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  // Slide away while scrolling down, return as soon as you scroll up.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setHidden(latest > previous && latest > 220)
  })
  const setServicesOpen = (open: boolean) => setServicesFor(open ? pathname : null)
  const setMenuOpen = (open: boolean) => setMenuFor(open ? pathname : null)

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.documentElement.style.overflow = ""
    }
  }, [menuOpen])

  const link = "text-[0.9rem] font-medium tracking-tight transition-opacity hover:opacity-50"

  return (
    <motion.header
      animate={{ y: hidden && !menuOpen && !servicesOpen ? "-100%" : "0%" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="relative bg-paper">
        <div className="wrap flex h-16 items-center justify-between">
          <Link href="/" aria-label="MB CoreX home" className="relative z-10">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            <Link
              href="/services"
              className={cn(link, "flex items-center gap-1")}
              onMouseEnter={() => setServicesOpen(true)}
              onFocus={() => setServicesOpen(true)}
            >
              Services <span aria-hidden="true">↓</span>
            </Link>
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(link, pathname.startsWith(item.href) && "opacity-40")}
                onMouseEnter={() => setServicesOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.85rem] font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              <span className="size-1.5 rounded-full bg-paper" />
              Contact Us
            </Link>
          </nav>

          <button
            type="button"
            className="relative z-10 text-[0.9rem] font-medium md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Desktop services panel */}
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-full hidden border-t border-line bg-paper md:block"
            >
              <ul className="wrap grid grid-cols-3 gap-x-10 gap-y-1 py-8">
                {services.map((service, i) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-baseline gap-4 border-b border-line py-3"
                    >
                      <span className="t-small text-muted">0{i + 1}</span>
                      <span className="text-lg font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                        {service.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 -z-10 flex flex-col bg-paper px-4 pb-6 pt-20 md:hidden"
          >
            <ul className="my-auto flex flex-col gap-1">
              {[{ label: "Services", href: "/services" }, ...primaryNav].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="t-display block py-2">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-[0.95rem] font-medium text-paper"
            >
              <span className="size-1.5 rounded-full bg-paper" />
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
