import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Logo } from "@/components/layout/logo"
import { FooterNewsletter } from "@/components/layout/footer-newsletter"
import { SocialLinks } from "@/components/icons/social-links"
import { VelocityMarquee } from "@/components/motion/velocity-marquee"
import { footerNav, siteConfig } from "@/lib/constants"

/**
 * Site footer.
 *
 * Opens with an oversized scroll-geared wordmark so the page ends on a
 * deliberate note rather than trailing off into link columns, then drops into
 * a hairline-ruled grid. The rules are drawn with a `gap-px` background trick
 * so every cell shares one continuous grid line at any breakpoint.
 */
export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      {/* Oversized wordmark strip — decorative, so it is hidden from AT. */}
      <div
        aria-hidden="true"
        className="select-none overflow-hidden border-b border-border py-8 lg:py-12"
      >
        <VelocityMarquee baseSpeed={1}>
          <span className="flex items-center gap-10 px-10">
            <span className="font-display text-5xl leading-none whitespace-nowrap text-foreground/12 lg:text-7xl">
              Software
            </span>
            <span className="size-1.5 shrink-0 rotate-45 bg-primary/40" />
            <span className="font-display text-5xl leading-none whitespace-nowrap text-foreground/12 italic lg:text-7xl">
              Security
            </span>
            <span className="size-1.5 shrink-0 rotate-45 bg-primary/40" />
            <span className="font-display text-5xl leading-none whitespace-nowrap text-foreground/12 lg:text-7xl">
              Solutions
            </span>
            <span className="size-1.5 shrink-0 rotate-45 bg-primary/40" />
          </span>
        </VelocityMarquee>
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-14 py-20 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr] lg:gap-10">
          <div className="flex flex-col gap-6">
            <Logo height={56} />
            <p className="max-w-sm text-body-sm text-pretty text-muted-foreground">
              We build secure, innovative and scalable digital solutions that help businesses grow and
              succeed.
            </p>
            <ul className="flex flex-col gap-3 text-body-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="link-wipe hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="link-wipe hover:text-foreground">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {siteConfig.location}
              </li>
            </ul>
          </div>

          {footerNav.map((group) => (
            <div key={group.title} className="flex flex-col gap-5">
              <h3 className="text-caption font-medium uppercase text-muted-foreground">{group.title}</h3>
              <ul className="flex flex-col gap-3.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-wipe text-body-sm text-foreground/75 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <FooterNewsletter />
        </div>

        <div className="flex flex-col-reverse items-center gap-5 border-t border-border py-8 sm:flex-row sm:justify-between">
          <p className="text-caption tracking-normal normal-case text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <SocialLinks size="inline" itemClassName="size-9" />
        </div>
      </Container>
    </footer>
  )
}
