import { Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Text } from "@/components/typography/typography"
import { cn } from "@/lib/utils"

export type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  company: string
  avatarSrc?: string
  rating?: number
  companyLogo?: string
  className?: string
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatarSrc,
  rating = 5,
  className,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")

  return (
    <Card className={cn("h-full border border-border bg-card ring-0", className)}>
      <CardContent className="flex h-full flex-col gap-4">
        {rating > 0 && (
          <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={cn("size-4", index < rating ? "fill-warning text-warning" : "text-border")}
                aria-hidden="true"
              />
            ))}
          </div>
        )}
        <Quote className="flex-1 border-none pl-0 text-body-md not-italic text-foreground">
          &ldquo;{quote}&rdquo;
        </Quote>
        <div className="flex items-center gap-3 pt-2">
          <Avatar>
            <AvatarImage src={avatarSrc} alt="" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <Text size="sm" className="font-medium">
              {name}
            </Text>
            <Text size="sm" tone="muted">
              {role}, {company}
            </Text>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
