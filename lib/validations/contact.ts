import { z } from "zod"

/**
 * Budget is free text on purpose: people write "2.5m", "₦800,000" and "about
 * 4 million", and rejecting any of those would cost a lead.
 */
export const budgetAmountMaxLength = 80

export const contactFormSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().optional(),
  serviceNeeded: z.string().optional(),
  budgetAmount: z.string().max(budgetAmountMaxLength, "Keep this short — just the figure").optional(),
  message: z.string().min(10, "Tell us a bit more about your project (min. 10 characters)"),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
