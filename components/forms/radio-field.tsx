"use client"

import { Field, FieldDescription, FieldError, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export type RadioFieldOption = { label: string; value: string; disabled?: boolean }

type RadioFieldProps = {
  legend: string
  description?: string
  options: RadioFieldOption[]
  name?: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  error?: string
}

export function RadioField({
  legend,
  description,
  options,
  name,
  value,
  defaultValue,
  onValueChange,
  error,
}: RadioFieldProps) {
  return (
    <FieldSet data-invalid={!!error || undefined}>
      <FieldLegend>{legend}</FieldLegend>
      {description && <FieldDescription>{description}</FieldDescription>}
      <RadioGroup name={name} value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
        {options.map((option) => (
          <Field key={option.value} orientation="horizontal">
            <FieldLabel htmlFor={`${name}-${option.value}`}>
              <RadioGroupItem
                id={`${name}-${option.value}`}
                value={option.value}
                disabled={option.disabled}
              />
              {option.label}
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      {error && <FieldError>{error}</FieldError>}
    </FieldSet>
  )
}
