import { Mail, Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { socialChannels } from "@/lib/constants"
import { brandIcons, iconSizes, type IconSize } from "./icon-config"

const utilityIcons = { email: Mail, phone: Phone } as const

type SocialLinksProps = {
  size?: IconSize
  className?: string
  itemClassName?: string
}

/**
 * Renders every enabled channel from `socialChannels`. Toggle a channel off
 * in lib/constants.ts to remove it here — no markup changes needed.
 */
export function SocialLinks({ size = "sm", className, itemClassName }: SocialLinksProps) {
  const channels = socialChannels.filter((channel) => channel.enabled)

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {channels.map((channel) => {
        const Icon =
          channel.id in brandIcons
            ? brandIcons[channel.id as keyof typeof brandIcons]
            : utilityIcons[channel.id as keyof typeof utilityIcons]

        if (!Icon) return null

        return (
          <li key={channel.id}>
            <a
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={channel.label}
              className={cn(
                "flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                itemClassName
              )}
            >
              <Icon className={iconSizes[size]} aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
