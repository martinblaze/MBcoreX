"use client"

import { useState } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FieldGroup } from "@/components/ui/field"
import { TextField } from "./text-field"
import { EmailField, PhoneField } from "./preset-fields"
import { TextareaField } from "./textarea-field"
import { SelectField } from "./select-field"
import { ServiceSelectField } from "./service-select-field"
import { ErrorState } from "@/components/feedback/states"
import { contactFormSchema, projectTimelines, type ContactFormValues } from "@/lib/validations/contact"
import { getServiceByTitle, formatServiceBand } from "@/content/services"
import { ctaCopy } from "@/lib/constants"

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

  // `useWatch` rather than `watch`: it subscribes to this one field instead of
  // re-rendering the whole form on every keystroke, and it does not trip the
  // React Compiler bail-out that `watch` causes.
  const serviceNeeded = useWatch({ control, name: "serviceNeeded" })
  // The select stores the service title, which is what `getServiceByTitle`
  // looks up — keeping the emailed value human-readable rather than a slug.
  const selectedService = getServiceByTitle(serviceNeeded ?? "")

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
              <ServiceSelectField
                label="Service Needed"
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />
          <TextField
            label="Your Budget"
            description="Optional — a rough figure is fine"
            placeholder="e.g. ₦2,500,000"
            error={errors.budgetAmount?.message}
            {...register("budgetAmount")}
          />
        </div>

        {/* Anchors expectations before they type a number. Stays hidden until a
            service is chosen, so the form is quiet until it has something
            specific to say. */}
        {selectedService && (
          <p
            aria-live="polite"
            className="-mt-1 border-l-2 border-primary bg-surface-elevated px-4 py-3 text-body-sm text-muted-foreground"
          >
            <span className="font-medium text-foreground">
              {selectedService.title} typically runs {formatServiceBand(selectedService)}.
            </span>{" "}
            Tell us what you have to work with and we&apos;ll be straight with you about what fits.
          </p>
        )}

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
