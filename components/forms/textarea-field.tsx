import { forwardRef } from "react"

import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

type TextareaFieldProps = React.ComponentPropsWithoutRef<"textarea"> & {
  label?: string
  description?: string
  error?: string
}

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  function TextareaField({ label, description, error, id, required, className, ...props }, ref) {
    const inputId = id ?? props.name

    return (
      <Field data-invalid={!!error || undefined}>
        {label && (
          <FieldLabel htmlFor={inputId}>
            {label}
            {required && <span className="text-brand-red-500"> *</span>}
          </FieldLabel>
        )}
        <Textarea
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={!!error || undefined}
          className={className}
          rows={5}
          {...props}
        />
        {description && !error && <FieldDescription>{description}</FieldDescription>}
        {error && <FieldError>{error}</FieldError>}
      </Field>
    )
  }
)
