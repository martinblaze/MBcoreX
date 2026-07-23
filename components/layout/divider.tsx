import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type DividerProps = React.ComponentPropsWithoutRef<typeof Separator> & {
  label?: string
}

/** Semantic alias over shadcn's Separator, with an optional centered label (e.g. "or"). */
export function Divider({ label, className, orientation = "horizontal", ...props }: DividerProps) {
  if (!label) {
    return <Separator orientation={orientation} className={cn("bg-border", className)} {...props} />
  }

  return (
    <div className="relative flex items-center">
      <Separator className="flex-1 bg-border" />
      <span className="px-3 text-caption text-muted-foreground">{label}</span>
      <Separator className="flex-1 bg-border" />
    </div>
  )
}
