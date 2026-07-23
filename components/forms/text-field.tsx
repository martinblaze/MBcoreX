import { forwardRef, type ReactNode } from "react"

import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export type TextFieldProps = React.ComponentPropsWithoutRef<"input"> & {
  label?: string
  description?: string
  error?: string
  icon?: ReactNode
}

/** Base labeled text input. EmailField/PhoneField/SearchField below preset `type` + `icon`. */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, description, error, icon, className, id, required, ...props },
  ref
) {
  const inputId = id ?? props.name

  return (
    <Field data-invalid={!!error || undefined}>
      {label && (
        <FieldLabel htmlFor={inputId}>
          {label}
          {required && <span className="text-brand-red-500"> *</span>}
        </FieldLabel>
      )}
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-4">
            {icon}
          </span>
        )}
        <Input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={!!error || undefined}
          className={cn(icon && "pl-8", className)}
          {...props}
        />
      </div>
      {description && !error && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </Field>
  )
})
