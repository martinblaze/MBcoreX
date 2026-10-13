"use client"

import { useState } from "react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { submitContactForm } from "@/actions/contact"
import { formatServiceBand, getServiceByTitle, services } from "@/content/services"
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact"

const field =
  "w-full border-0 border-b border-ink/30 bg-transparent py-3 text-lg tracking-tight outline-none transition-colors placeholder:text-muted focus:border-ink"

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) })

  const selected = getServiceByTitle(useWatch({ control, name: "serviceNeeded" }) ?? "")

  async function onSubmit(values: ContactFormValues) {
    setError(null)
    try {
      await submitContactForm(values)
      setSent(true)
      reset()
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.")
    }
  }

  if (sent) {
    return (
      <div role="status" className="border-t border-ink py-8">
        <p className="t-title">Message sent.</p>
        <p className="t-lead mt-3 text-muted">Thanks for reaching out. We&apos;ll reply within one business day.</p>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="t-small text-muted">Name *</span>
          <input className={field} autoComplete="name" {...register("name")} />
          {errors.name && <span className="t-small text-red-600">{errors.name.message}</span>}
        </label>
        <label className="block">
          <span className="t-small text-muted">Email *</span>
          <input className={field} type="email" autoComplete="email" {...register("email")} />
          {errors.email && <span className="t-small text-red-600">{errors.email.message}</span>}
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="t-small text-muted">What do you need?</span>
          <select className={field} defaultValue="" {...register("serviceNeeded")}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="t-small text-muted">Budget (optional)</span>
          <input className={field} placeholder="e.g. ₦2,500,000" {...register("budgetAmount")} />
          {errors.budgetAmount && <span className="t-small text-red-600">{errors.budgetAmount.message}</span>}
        </label>
      </div>

      {selected && (
        <p aria-live="polite" className="t-small -mt-3 border-l-2 border-ink pl-3">
          <strong className="font-medium">
            {selected.title} typically runs {formatServiceBand(selected)}.
          </strong>{" "}
          Tell us what you have and we&apos;ll be straight about what fits.
        </p>
      )}

      <label className="block">
        <span className="t-small text-muted">Tell us about your project *</span>
        <textarea className={`${field} min-h-32 resize-y`} rows={4} {...register("message")} />
        {errors.message && <span className="t-small text-red-600">{errors.message.message}</span>}
      </label>

      {error && (
        <p role="alert" className="t-small text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-7 py-4 text-[0.95rem] font-medium text-paper transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        <span className="size-1.5 rounded-full bg-paper transition-transform group-hover:scale-150" />
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  )
}
