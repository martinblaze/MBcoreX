import type { ElementType, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

type PolymorphicProps<E extends ElementType> = {
  as?: E
  className?: string
  children?: ReactNode
} & Omit<React.ComponentPropsWithoutRef<E>, "as" | "className" | "children">

/* ---------------------------------- Display ---------------------------------- */
/* Hero-level headlines only — one per page. Pair with responsive size overrides */
/* e.g. `size="lg"` on mobile via className, `md:text-display-2xl` for desktop. */

const displayVariants = cva("font-display font-normal text-balance text-foreground", {
  variants: {
    size: {
      // The type scale is already fluid (clamp), so these need no breakpoint
      // variants — one token covers 360px through 4K.
      "2xl": "text-display-2xl",
      xl: "text-display-xl",
      lg: "text-display-lg",
    },
  },
  defaultVariants: { size: "2xl" },
})

type DisplayProps<E extends ElementType> = PolymorphicProps<E> & VariantProps<typeof displayVariants>

export function Display<E extends ElementType = "h1">({
  as,
  size,
  className,
  children,
  ...props
}: DisplayProps<E>) {
  const Comp = as || "h1"
  return (
    <Comp className={cn(displayVariants({ size }), className)} {...props}>
      {children}
    </Comp>
  )
}

/* ---------------------------------- Heading ---------------------------------- */
/* Section/subsection headers, H1–H6 (H1 here is for standard page titles; */
/* use Display instead for a hero-scale H1). Visual size is decoupled from */
/* semantic level so hierarchy in the DOM never has to match hierarchy on screen. */

const headingSizes = {
  xl: "text-heading-xl",
  lg: "text-heading-lg",
  md: "text-heading-md",
  sm: "text-body-lg font-medium",
  xs: "text-body-md font-medium",
} as const

const levelDefaultSize: Record<1 | 2 | 3 | 4 | 5 | 6, keyof typeof headingSizes> = {
  1: "xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs",
}

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: keyof typeof headingSizes
  /** Override the automatic face pick — e.g. force the grotesk on a serif-scale heading. */
  font?: "display" | "sans"
  className?: string
  children?: ReactNode
} & React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">

/**
 * Face is chosen by *visual* size, not semantic level: section-scale headings
 * (xl/lg) take the editorial serif, while UI-scale ones (card titles, list
 * headers) stay on the grotesk so dense interface text keeps its clarity.
 */
export function Heading({ level = 2, size, font, className, children, ...props }: HeadingProps) {
  const Comp = `h${level}` as ElementType
  const resolvedSize = size ?? levelDefaultSize[level]
  const resolvedFont = font ?? (resolvedSize === "xl" || resolvedSize === "lg" ? "display" : "sans")

  return (
    <Comp
      className={cn(
        "text-balance text-foreground",
        resolvedFont === "display"
          ? "font-display font-normal"
          : "font-heading font-semibold tracking-tight",
        headingSizes[resolvedSize],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

/* ----------------------------------- Accent ---------------------------------- */
/* The emphasis cut inside a display headline. Instrument Serif's italic is a  */
/* genuinely different drawing (not a slant), so switching to it mid-sentence  */
/* reads as typesetting rather than as a highlight effect bolted on.           */

export function Accent({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode
  /** `brand` tints it blue; `default` keeps it in the text colour and lets the italic do the work. */
  tone?: "default" | "brand"
  className?: string
}) {
  return (
    <em className={cn("font-display italic", tone === "brand" && "text-primary", className)}>
      {children}
    </em>
  )
}

/* ------------------------------------ Text ------------------------------------ */
/* Body copy. `tone` controls color, `size` controls the type-scale step. */

const textVariants = cva("", {
  variants: {
    size: {
      lg: "text-body-lg",
      md: "text-body-md",
      sm: "text-body-sm",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      brand: "text-primary",
    },
  },
  defaultVariants: { size: "md", tone: "default" },
})

type TextProps<E extends ElementType> = PolymorphicProps<E> & VariantProps<typeof textVariants>

export function Text<E extends ElementType = "p">({
  as,
  size,
  tone,
  className,
  children,
  ...props
}: TextProps<E>) {
  const Comp = as || "p"
  return (
    <Comp className={cn(textVariants({ size, tone }), className)} {...props}>
      {children}
    </Comp>
  )
}

/* ---------------------------------- Caption ---------------------------------- */
/* Eyebrows, tags, meta text — uppercase, tracked, small. */

export function Caption({ as, className, children, ...props }: PolymorphicProps<ElementType>) {
  const Comp = as || "span"
  return (
    <Comp
      className={cn(
        "text-caption font-medium uppercase text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

/* ----------------------------------- Code ----------------------------------- */

export function InlineCode({ className, children, ...props }: React.ComponentPropsWithoutRef<"code">) {
  return (
    <code
      className={cn(
        "rounded-sm border border-border bg-surface-elevated px-1.5 py-0.5 font-mono text-body-sm text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
}

export function CodeBlock({ className, children, ...props }: React.ComponentPropsWithoutRef<"pre">) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-lg border border-border bg-surface-elevated p-4 font-mono text-body-sm text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  )
}

/* ----------------------------------- Quote ----------------------------------- */

export function Quote({ className, children, ...props }: React.ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className={cn(
        "border-l-2 border-primary/40 pl-4 text-body-lg text-foreground italic",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  )
}
