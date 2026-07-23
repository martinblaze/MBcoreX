import { z } from "zod"

export const budgetRanges = [
  { label: "Under $2,000", value: "under-2k" },
  { label: "$2,000 – $5,000", value: "2k-5k" },
  { label: "$5,000 – $15,000", value: "5k-15k" },
  { label: "$15,000 – $50,000", value: "15k-50k" },
  { label: "$50,000+", value: "50k-plus" },
  { label: "Not sure yet", value: "unsure" },
] as const

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
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more about your project (min. 10 characters)"),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
