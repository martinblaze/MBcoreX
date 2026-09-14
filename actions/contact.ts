"use server"

import { Resend } from "resend"

import { contactFormSchema, projectTimelines, type ContactFormValues } from "@/lib/validations/contact"
import { getServiceByTitle, formatServiceBand } from "@/content/services"
import { siteConfig } from "@/lib/constants"

function labelFor(options: readonly { label: string; value: string }[], value?: string) {
  if (!value) return undefined
  return options.find((option) => option.value === value)?.label ?? value
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char] as string)
  )
}

/**
 * Contact form delivery. Requires RESEND_API_KEY + CONTACT_FROM_EMAIL (a
 * sender on a domain verified with Resend) in the deployment environment —
 * see .env.example. Without a key configured, the submission is logged
 * server-side and the visitor still sees a success confirmation, rather
 * than surfacing an infrastructure/config problem as if it were their
 * mistake; the missing-key warning below is what tells the site owner
 * email delivery isn't actually wired up yet.
 */
export async function submitContactForm(input: ContactFormValues) {
  const values = contactFormSchema.parse(input)

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn(
      "[contact-form] RESEND_API_KEY is not set — submission logged only, no email was sent.",
      values
    )
    return { success: true as const }
  }

  const resend = new Resend(apiKey)
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "MB CoreX Website <onboarding@resend.dev>"

  const selectedService = getServiceByTitle(values.serviceNeeded ?? "")
  const serviceBand = selectedService ? formatServiceBand(selectedService) : undefined

  const detailRows = [
    ["Name", values.name],
    ["Company", values.company],
    ["Email", values.email],
    ["Phone", values.phone],
    ["Service Needed", values.serviceNeeded],
    ["Their Budget", values.budgetAmount],
    // Our own band for the service they picked, so the quote conversation
    // starts with both numbers side by side.
    ["Our Range", serviceBand],
    ["Timeline", labelFor(projectTimelines, values.timeline)],
  ].filter(([, value]) => Boolean(value)) as [string, string][]

  const html = `
    <div style="font-family: sans-serif; color: #111;">
      <h2>New Contact Form Submission</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        ${detailRows.map(([label, value]) => `<tr><td style="font-weight:600;">${label}</td><td>${escapeHtml(value)}</td></tr>`).join("")}
      </table>
      <p style="font-weight:600; margin-top: 16px;">Message</p>
      <p style="white-space: pre-wrap;">${escapeHtml(values.message)}</p>
    </div>
  `

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: siteConfig.email,
    replyTo: values.email,
    subject: `New inquiry from ${values.name}${values.company ? ` (${values.company})` : ""}`,
    html,
  })

  if (error) {
    console.error("[contact-form] Resend send failed:", error)
    throw new Error("We couldn't send your message right now. Please try again or email us directly.")
  }

  return { success: true as const }
}
