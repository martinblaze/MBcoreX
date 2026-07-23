import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { organizationJsonLd, siteUrl } from "@/lib/seo";
import { analyticsConfig } from "@/lib/analytics";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MB CoreX — Software Engineering & Cybersecurity",
    template: "%s | MB CoreX",
  },
  description:
    "MB CoreX is a software development and cybersecurity company delivering secure, scalable digital solutions for businesses ready to grow.",
  verification: analyticsConfig.googleSiteVerification
    ? { google: analyticsConfig.googleSiteVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={organizationJsonLd()} />
        <Providers>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </Providers>
        <AnalyticsScripts />
      </body>
    </html>
  );
}
