import type { Metadata, Viewport } from "next"
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { MotionProvider } from "@/components/motion-provider"
import { SmoothScroll } from "@/components/smooth-scroll"
import { JsonLd } from "@/components/seo/json-ld"
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts"
import { organizationJsonLd, siteUrl, websiteJsonLd } from "@/lib/seo"
import { analyticsConfig } from "@/lib/analytics"

// One grotesk for everything, as on Riotters: tight tracking, medium weight
// for display, extra-bold only for the wordmark.
const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  display: "swap",
})

// Highlighted words use Instrument Serif Italic (the face Batamart sets its own
// hero accent in) and are written out letter by letter (see `.hl .ch`).
const accent = Instrument_Serif({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Software Company in Nigeria: Web, Apps & Google SEO | MB CoreX",
    template: "%s | MB CoreX",
  },
  description:
    "MB CoreX is an online software company in Nigeria. We build websites, web apps, custom software and mobile apps, and run Google SEO for every state.",
  applicationName: "MB CoreX",
  authors: [{ name: "Martin Blaze", url: `${siteUrl}/about` }],
  creator: "Martin Blaze",
  publisher: "MB CoreX",
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: siteUrl, languages: { "en-NG": siteUrl, "x-default": siteUrl } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "MB CoreX",
    locale: "en_NG",
    url: siteUrl,
    title: "Software Company in Nigeria: Web, Apps & Google SEO | MB CoreX",
    description:
      "An online software company serving every state in Nigeria: websites, web apps, custom software, mobile apps and in-depth Google SEO.",
  },
  twitter: { card: "summary_large_image" },
  other: { "geo.region": "NG", "geo.placename": "Nigeria" },
  verification: analyticsConfig.googleSiteVerification
    ? { google: analyticsConfig.googleSiteVerification }
    : undefined,
}

export const viewport: Viewport = {
  themeColor: "#fbfbf9",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG" className={`${sans.variable} ${accent.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <MotionProvider>
          <SmoothScroll />
          <ScrollProgress />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <AnalyticsScripts />
      </body>
    </html>
  )
}
