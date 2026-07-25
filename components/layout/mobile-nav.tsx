"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/layout/logo"
import { NavLink } from "@/components/layout/nav-link"
import { SocialLinks } from "@/components/icons/social-links"
import { ctaCopy, primaryNav } from "@/lib/constants"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu" />
        }
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:max-w-sm">
        <SheetHeader className="border-b border-border">
          <SheetTitle>
            <Logo height={52} />
          </SheetTitle>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
          {primaryNav.map((item) => (
            <SheetClose key={item.href} render={<NavLink href={item.href} />}>
              <span className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted">
                {item.label}
              </span>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4 border-t border-border p-4">
          <SocialLinks />
          <SheetClose render={<Button variant="cta" size="lg" className="w-full" />}>
            {ctaCopy.primary}
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
