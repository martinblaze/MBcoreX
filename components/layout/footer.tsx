import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Logo } from "@/components/layout/logo"
import { FooterNewsletter } from "@/components/layout/footer-newsletter"
import { SocialLinks } from "@/components/icons/social-links"
import { footerNav, siteConfig } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr] lg:gap-8">
          <div className="flex flex-col gap-4">
            <Logo height={56} />
            <p className="max-w-sm text-body-sm text-muted-foreground">
              We build secure, innovative and scalable digital solutions that help businesses
              grow and succeed.
            </p>
            <ul className="flex flex-col gap-2 text-body-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-foreground">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.location}
              </li>
            </ul>
          </div>

          {footerNav.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-body-sm font-medium text-foreground">{group.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-body-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <FooterNewsletter />
        </div>

        <div className="flex flex-col-reverse items-center gap-4 border-t border-border py-6 sm:flex-row sm:justify-between">
          <p className="text-caption normal-case text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <SocialLinks size="inline" itemClassName="size-8" />
        </div>
      </Container>
    </footer>
  )
}
