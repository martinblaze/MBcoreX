"use client"

import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type SelectFieldOption = { label: string; value: string; disabled?: boolean }

type SelectFieldProps = {
  label?: string
  description?: string
  error?: string
  placeholder?: string
  options: SelectFieldOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  name?: string
  required?: boolean
  disabled?: boolean
}

export function SelectField({
  label,
  description,
  error,
  placeholder = "Select an option",
  options,
  value,
  defaultValue,
  onValueChange,
  name,
  required,
  disabled,
}: SelectFieldProps) {
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
        defaultValue={defaultValue}
        onValueChange={(next) => {
          if (next !== null) onValueChange?.(next)
        }}
        disabled={disabled}
      >
        <SelectTrigger className="w-full" aria-invalid={!!error || undefined}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {description && !error && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </Field>
  )
}
