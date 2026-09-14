import { z } from "zod"

/**
 * Budget is captured as free text rather than a band.
 *
 * The indicative range now comes from the selected service (see `priceFrom` /
 * `priceTo` in content/services.ts) and is shown to the visitor, so the field
 * they fill in is their *actual* figure. That is far more useful for scoping
 * than a bucket, and it lets someone say "₦3m, but flexible" — which a select
 * cannot express. Left permissive on purpose: people write "2.5m", "₦800,000"
 * and "about 4 million", and rejecting any of those would cost a lead.
 */
export const budgetAmountMaxLength = 80

export const projectTimelines = [
  { label: "As soon as possible", value: "asap" },
  { label: "Within 1 month", value: "1-month" },
  { label: "1–3 months", value: "1-3-months" },
  { label: "3–6 months", value: "3-6-months" },
  { label: "Just exploring options", value: "exploring" },
] as const

export const contactFormSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  company: z.string().optional(),
  email: z.email("Enter a valid email address"),
  phone: z.string().optional(),
  serviceNeeded: z.string().optional(),
  budgetAmount: z.string().max(budgetAmountMaxLength, "Keep this short — just the figure").optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more about your project (min. 10 characters)"),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
