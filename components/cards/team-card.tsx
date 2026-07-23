import Image from "next/image"

import { Heading, Text } from "@/components/typography/typography"
import { SocialLinks } from "@/components/icons/social-links"
import type { SocialChannel } from "@/lib/constants"
import { cn } from "@/lib/utils"

export type TeamCardProps = {
  name: string
  role: string
  photo?: string
  bio?: string
  socials?: SocialChannel[]
  className?: string
}

export function TeamCard({ name, role, photo, bio, className }: TeamCardProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface-elevated">
        {photo ? (
          <Image src={photo} alt={name} fill sizes="320px" className="object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center text-heading-xl font-semibold text-muted-foreground">
            {name
              .split(" ")
              .map((p) => p[0])
              .join("")}
          </div>
        )}
      </div>
      <div>
        <Heading level={3} size="sm">
          {name}
        </Heading>
        <Text size="sm" tone="brand">
          {role}
        </Text>
        {bio && (
          <Text size="sm" tone="muted" className="mt-2">
            {bio}
          </Text>
        )}
      </div>
      <SocialLinks size="inline" itemClassName="size-8" />
    </div>
  )
}
