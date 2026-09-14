"use client"

import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { serviceCategories, getServicesByCategory } from "@/content/services"

type ServiceSelectFieldProps = {
  label?: string
  description?: string
  error?: string
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  name?: string
  required?: boolean
  disabled?: boolean
}

/**
 * Service picker that shows the whole catalogue at once instead of a scrolling
 * list.
 *
 * Nineteen services in a single anchor-width column is a ~700px scroll, which
 * hides most of what we do behind a gesture. Grouping by category into three
 * columns fits every option in one glance — the tallest column is nine items —
 * and the category headings double as an explanation of the range of work.
 *
 * The default `SelectContent` is anchor-width with `overflow-y-auto`; both are
 * overridden here. Below `sm` the columns collapse to one and scrolling is
 * restored, because nineteen items cannot fit on a phone screen.
 */
export function ServiceSelectField({
  label,
  description,
  error,
  placeholder = "Select a service",
  value,
  onValueChange,
  name,
  required,
  disabled,
}: ServiceSelectFieldProps) {
  return (
    <Field data-invalid={!!error || undefined}>
      {label && (
        <FieldLabel>
          {label}
          {required && <span className="text-brand-red-500"> *</span>}
        </FieldLabel>
      )}
      <Select
        name={name}
        value={value}
        onValueChange={(next) => {
          if (next !== null) onValueChange?.(next)
        }}
        disabled={disabled}
      >
        <SelectTrigger className="w-full" aria-invalid={!!error || undefined}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          align="start"
          className={
            // Wider than the trigger so three columns fit, capped against the
            // viewport so it never overflows on a laptop screen.
            "w-[min(92vw,46rem)] p-2 " +
            "max-h-(--available-height) overflow-y-auto " +
            "sm:max-h-none sm:overflow-visible"
          }
        >
          <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-3">
            {serviceCategories.map((category) => (
              <SelectGroup key={category} className="p-0">
                <SelectLabel className="px-1.5 pt-1 pb-1.5 text-caption font-medium tracking-[0.12em] uppercase text-primary">
                  {category}
                </SelectLabel>
                {getServicesByCategory(category).map((service) => (
                  <SelectItem key={service.slug} value={service.title}>
                    {service.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </div>
        </SelectContent>
      </Select>
      {description && !error && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </Field>
  )
}
