import { Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

/**
 * Testimonial panel — the quote is set in the display serif at a size that
 * makes it the focal point, with the attribution demoted to a hairline-ruled
 * footer. A pull-quote, in other words, rather than a review widget.
 */
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
    <figure
      className={cn(
        "flex h-full flex-col gap-8 border border-border bg-surface-elevated p-8 lg:p-12",
        className
      )}
    >
      {rating > 0 && (
        <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn("size-3.5", index < rating ? "fill-primary text-primary" : "text-border")}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      <blockquote className="flex-1 font-display text-xl leading-snug text-balance text-foreground lg:text-2xl">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="flex items-center gap-4 border-t border-border pt-6">
        <Avatar className="size-11">
          <AvatarImage src={avatarSrc} alt="" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <span className="text-body-sm font-medium text-foreground">{name}</span>
          <span className="text-caption tracking-normal normal-case text-muted-foreground">
            {role}, {company}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}
