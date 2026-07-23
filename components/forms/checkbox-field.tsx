"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"

type CheckboxFieldProps = {
  label: React.ReactNode
  name?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  error?: string
  disabled?: boolean
  required?: boolean
}

export function CheckboxField({
  label,
  name,
  checked,
  defaultChecked,
  onCheckedChange,
  error,
  disabled,
  required,
}: CheckboxFieldProps) {
  return (
    <Field data-invalid={!!error || undefined} orientation="horizontal">
      <FieldLabel className="items-start">
        <Checkbox
          name={name}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          required={required}
          aria-invalid={!!error || undefined}
          className="mt-0.5"
        />
        <span className="text-body-sm text-foreground">{label}</span>
      </FieldLabel>
      {error && <FieldError>{error}</FieldError>}
    </Field>
  )
}
