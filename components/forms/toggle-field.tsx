"use client"

import { Field, FieldDescription } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

type ToggleFieldProps = {
  label: string
  description?: string
  name?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}

export function ToggleField({
  label,
  description,
  name,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
}: ToggleFieldProps) {
  return (
    <Field orientation="horizontal" className="items-start justify-between">
      <div className="flex flex-col gap-0.5">
        <span className="text-body-sm font-medium text-foreground">{label}</span>
        {description && <FieldDescription>{description}</FieldDescription>}
      </div>
      <Switch
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        aria-label={label}
      />
    </Field>
  )
}
