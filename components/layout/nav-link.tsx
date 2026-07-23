"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type NavLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  activeClassName?: string
}

/** Route-aware nav link — applies `aria-current="page"` and active styling automatically. */
export function NavLink({ href, className, activeClassName, children, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = typeof href === "string" && (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        isActive && cn("text-foreground", activeClassName),
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
