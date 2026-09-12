import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"

const buttonVariants = cva(
  // Square by design — `--radius` is 0 site-wide, so `rounded-none` here is a
  // statement of intent rather than a no-op: nothing should quietly re-round
  // these if the token ever changes.
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow] duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        cta: "bg-primary text-primary-foreground hover:bg-brand-blue-400",
        outline:
          "border-foreground/25 bg-transparent hover:border-foreground hover:bg-foreground hover:text-background aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "link-wipe px-0 text-primary hover:text-primary",
      },
      size: {
        default:
          "h-11 gap-2 px-5 text-[11px] tracking-[0.14em] uppercase has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-7 gap-1 px-2.5 text-[10px] tracking-[0.1em] uppercase [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1.5 px-4 text-[10px] tracking-[0.12em] uppercase [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-14 gap-2.5 px-8 text-[11px] tracking-[0.16em] uppercase has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        icon: "size-11",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  loading = false,
  disabled,
  children,
  render,
  nativeButton,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    /** Shows a spinner in place of the leading icon slot and disables the button. */
    loading?: boolean
  }) {
  // Most `render` usage on this Button swaps in a Link/<a> for navigation
  // (a CTA that goes somewhere is semantically a link, not a <button>).
  // Default nativeButton to false whenever a render target is supplied so
  // every call site doesn't have to remember to opt out individually —
  // pass nativeButton explicitly to override.
  const resolvedNativeButton = nativeButton ?? !render

  return (
    <ButtonPrimitive
      data-slot="button"
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size, className }))}
      render={render}
      nativeButton={resolvedNativeButton}
      {...props}
    >
      {loading && <Spinner className="size-4" aria-hidden="true" />}
      {children}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
