import path from "node:path";
import type { NextConfig } from "next";

// 'unsafe-inline' on script/style is required here because Next.js injects
// inline hydration scripts and this app renders inline JSON-LD <script>
// tags and a few inline `style` attributes (gradient masks); tightening
// further would need per-request nonces threaded through middleware.
// Add any third-party origin (analytics, fonts, etc.) to the relevant
// directive below when it's actually enabled — nothing external loads today.
//
// 'unsafe-eval' is dev-only: React's development build uses eval() to
// reconstruct component stack traces for debugging. It never does this in
// production, so it's left out of the production CSP.
const isDev = process.env.NODE_ENV !== "production";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"] },
  // Old URLs from the previous site map onto the current structure so existing
  // search rankings and inbound links keep resolving (301 = permanent).
  async redirects() {
    return [
      // Guides that were retired (off-topic after the service refocus) go to the guides index.
      ...[
        "how-we-use-ai-in-client-projects",
        "typescript-server-actions-by-default",
        "secure-by-design-nist-800-53-explained",
        "right-sizing-cloud-infrastructure-for-startups",
        "minimal-cicd-pipeline-that-catches-bugs",
        "designing-trust-ui-patterns-for-credibility",
      ].map((slug) => ({ source: `/insights/${slug}`, destination: "/insights", permanent: true })),
      { source: "/insights/category/:category", destination: "/insights", permanent: true },
      { source: "/portfolio", destination: "/case-studies", permanent: true },
      { source: "/portfolio/:slug", destination: "/case-studies/:slug", permanent: true },
      { source: "/careers", destination: "/about", permanent: true },
      { source: "/cybersecurity", destination: "/services", permanent: true },
      { source: "/ai-solutions", destination: "/services/custom-software", permanent: true },
      { source: "/business-automation", destination: "/services/custom-software", permanent: true },
      { source: "/saas-development", destination: "/services/custom-software", permanent: true },
      { source: "/healthcare-software", destination: "/services/custom-software", permanent: true },
      { source: "/custom-software", destination: "/services/custom-software", permanent: true },
      { source: "/web-development", destination: "/services/web-development", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Static media rarely changes; let browsers and CDNs reuse it.
      {
        source: "/(images|work)/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
