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
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
