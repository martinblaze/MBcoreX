import Link from "next/link"
import { ArrowRight } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { solutionsNav } from "@/lib/constants"

/** The "Services" nav item's dropdown — one entry per /solutions/* landing page. */
export function NavDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="!h-auto !px-0 !py-0 bg-transparent text-sm font-medium text-muted-foreground hover:!bg-transparent hover:text-foreground data-open:!bg-transparent data-popup-open:!bg-transparent">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[320px] gap-1 p-2">
              {solutionsNav.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink render={<Link href={item.href} />}>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-foreground">{item.label}</span>
                      <span className="text-body-sm text-muted-foreground">{item.description}</span>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
              <li>
                <NavigationMenuLink render={<Link href="/services" />}>
                  <span className="flex items-center gap-1.5 font-medium text-primary">
                    All services <ArrowRight className="size-3.5" aria-hidden="true" />
                  </span>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
