"use client"

import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FieldGroup } from "@/components/ui/field"
import { TextField } from "./text-field"
import { EmailField, PhoneField } from "./preset-fields"
import { TextareaField } from "./textarea-field"
import { SelectField } from "./select-field"
import { ErrorState } from "@/components/feedback/states"
import { contactFormSchema, budgetRanges, projectTimelines, type ContactFormValues } from "@/lib/validations/contact"
import { services } from "@/content/services"
import { ctaCopy } from "@/lib/constants"

const serviceOptions = services.map((service) => ({ label: service.title, value: service.title }))

type ContactFormProps = {
  /** Left generic so this component isn't coupled to a specific backend (Server Action, API route, etc.). */
  onSubmit?: (values: ContactFormValues) => Promise<unknown>
  className?: string
}

export function ContactForm({ onSubmit, className }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) })

  async function handleValid(values: ContactFormValues) {
    setSubmitError(null)
    try {
      await onSubmit?.(values)
      setSubmitted(true)
      reset()
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    }
  }

  if (submitted) {
    return (
      <Alert className={className}>
        <CheckCircle2 className="text-success" aria-hidden="true" />
        <AlertTitle>Message sent</AlertTitle>
        <AlertDescription>
          Thanks for reaching out — we&apos;ll get back to you within one business day.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit(handleValid)} className={className}>
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField label="Name" required error={errors.name?.message} {...register("name")} />
          <TextField label="Company" description="Optional" error={errors.company?.message} {...register("company")} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <EmailField label="Email" required error={errors.email?.message} {...register("email")} />
          <PhoneField label="Phone" description="Optional" error={errors.phone?.message} {...register("phone")} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Controller
            control={control}
            name="serviceNeeded"
            render={({ field }) => (
              <SelectField
                label="Service Needed"
                placeholder="Select a service"
                options={serviceOptions}
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="budgetRange"
            render={({ field }) => (
              <SelectField
                label="Budget Range"
                placeholder="Select a range"
                options={budgetRanges as unknown as { label: string; value: string }[]}
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />
        </div>

        <Controller
          control={control}
          name="timeline"
          render={({ field }) => (
            <SelectField
              label="Project Timeline"
              placeholder="When would you like to start?"
              options={projectTimelines as unknown as { label: string; value: string }[]}
              value={field.value}
              onValueChange={field.onChange}
            />
          )}
        />

        <TextareaField
          label="Project / Message"
          required
          error={errors.message?.message}
          {...register("message")}
        />

        {submitError && <ErrorState title="Couldn't send your message" description={submitError} />}

        <Button type="submit" variant="cta" size="lg" loading={isSubmitting} className="w-full sm:w-auto">
          {!isSubmitting && <Send className="size-4" aria-hidden="true" />}
          {ctaCopy.formSubmit}
        </Button>
      </FieldGroup>
    </form>
  )
}
