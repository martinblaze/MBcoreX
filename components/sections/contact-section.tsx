import { Mail, MapPin, Phone } from "lucide-react"

import { Section } from "@/components/layout/section"
import { SplitLayout } from "@/components/layout/split-layout"
import { Heading, Text } from "@/components/typography/typography"
import { ContactForm } from "@/components/forms/contact-form"
import { SocialLinks } from "@/components/icons/social-links"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig } from "@/lib/constants"
import type { ContactFormValues } from "@/lib/validations/contact"

type ContactSectionProps = {
  heading: string
  description?: string
  onSubmit?: (values: ContactFormValues) => Promise<unknown>
}

export function ContactSection({ heading, description, onSubmit }: ContactSectionProps) {
  return (
    <Section>
      <SplitLayout
        ratio="start-wide"
        align="start"
        start={
          <Reveal>
            <Heading level={2} size="xl">
              {heading}
            </Heading>
            {description && (
              <Text tone="muted" className="mt-4 max-w-md">
                {description}
              </Text>
            )}
            <ul className="mt-8 flex flex-col gap-4">
              <li className="flex items-center gap-3 text-body-sm text-foreground">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {siteConfig.email}
              </li>
              <li className="flex items-center gap-3 text-body-sm text-foreground">
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-3 text-body-sm text-foreground">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {siteConfig.location}
              </li>
            </ul>
            <SocialLinks className="mt-8" />
          </Reveal>
        }
        end={
          <Reveal variant="fade">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <ContactForm onSubmit={onSubmit} />
            </div>
          </Reveal>
        }
      />
    </Section>
  )
}
