# MB CoreX — Stage 1: Discovery, Research & Architecture Blueprint

Status: Planning only. No code has been written. This document is the single source of truth for Stage 2 (build).

---

## 1. Project Understanding

**Business goals**
- Win B2B service engagements (software development retainers/projects + cybersecurity consulting engagements) for a solo/small studio operating under a company identity.
- Establish MB CoreX as a *credible, scaled-looking* company despite being founder-led — the site is the primary trust proxy before a prospect ever talks to Martin.
- Generate qualified inbound leads (discovery calls, contact form submissions) rather than raw traffic.
- Support two sellable motions at once: project-based software delivery, and security/compliance consulting — without either diluting the other.

**Primary audience**
- Small-to-mid-size business owners, startup founders, and operations/IT leads who need custom software (dashboards, SaaS, internal tools, ecommerce) and are evaluating whether to trust an independent studio vs. a larger agency.
- Decision-makers at healthcare/clinical or regulated-adjacent organizations (per the DiagSync/Reene Medical portfolio) who care disproportionately about data handling, compliance language, and reliability.

**Secondary audience**
- Technical stakeholders (CTOs, IT managers) vetted in after a business lead — they will scrutinize the Cybersecurity and AI Solutions pages, tech stack transparency, and case-study depth.
- Recruiters/collaborators or future hires evaluating the Careers page.
- Journalists/partners doing due diligence — Insights/blog content signals ongoing expertise, not a dormant brochure site.

**User pain points this site must resolve**
- "Is this a real company or one freelancer with a template?" → solved via design quality bar, real case studies, stats, structured About/Founder narrative.
- "Can I trust them with sensitive data (health records, payments)?" → solved via a dedicated, substantive Cybersecurity page and compliance messaging placed near any commerce/health-adjacent case study.
- "Have they actually shipped things that work?" → solved via Portfolio + Case Studies with Problem → Solution → Technology → Results structure and live-preview links.
- "What exactly do they do — is it just websites?" → solved via clear service taxonomy (Software / Cybersecurity / AI) reflected identically in nav, homepage, and services page.
- "How fast can we start, and what's the process?" → solved via a visible, low-friction primary CTA (Book Consultation) present on every page, not buried.

**Conversion goals (in priority order)**
1. Book Consultation (calendar link / discovery call) — primary CTA site-wide.
2. Contact form submission — secondary CTA for visitors not ready to book a call.
3. Portfolio/case-study deep engagement (proxy conversion — time-on-page, project detail views) as a qualification signal before the above.
4. Newsletter/blog follow (tertiary — nurtures visitors not ready to buy).

**Brand personality**
Confident, precise, calm authority. Not hype-driven, not "hustle" energy. The tone of a senior engineer explaining a system to another senior engineer — plain, exact, unhurried. Visually: dark, quiet, high-contrast, generous negative space, occasional glow rather than flat neon. Never cartoonish, never stock-corporate.

**Trust signals required**
- Concrete, named project work (Batamart, DiagSync, Reene Medical Diagnostics) with real screenshots/mockups, not abstract icons.
- Explicit, honestly-scoped compliance/security knowledge (NIST 800-53 Rev 5, NIST 171, SOC 2 Type II, Security+/Network+ knowledge areas) — framed as expertise, never as unverified certification claims.
- Quantified stats (projects delivered, years of experience, client satisfaction) — kept realistic for a young/solo-founder studio rather than inflated.
- Testimonials tied to the three named projects/clients.
- Transparent process and tech stack (nothing hidden behind "proprietary magic").
- A real, named founder with a specific, checkable skill narrative — not an anonymous "our team."

**Competitive positioning**
MB CoreX sits at the intersection of two categories that rarely overlap in one credible offering: (a) boutique software development studios, and (b) cybersecurity/compliance consultancies. Most competitors are one or the other. The wedge is "software built by someone who also thinks like a security engineer" — positioned for clients (especially healthcare/regulated/ecommerce) who need both without hiring two vendors.

**Value proposition**
"Custom software that is secure by design, not secured after the fact — delivered by a single accountable engineering partner who moves at AI-accelerated speed without cutting corners."

---

## 2. Competitor & Inspiration Analysis

Patterns extracted from Vercel, Stripe, Linear, Cloudflare, Framer, Clerk, Anthropic, OpenAI, Resend — not copied, adapted to MB CoreX's darker, security-inflected identity.

| Dimension | Pattern observed across references | Applied to MB CoreX |
|---|---|---|
| Navigation | Slim sticky top nav, 5–7 items max, logo left, primary CTA button right, no mega-menus on a company (non-product) site | Logo · Home · About · Services · Portfolio · Insights · Contact · [Book a Call] button, collapsing to a slide-in drawer under 1024px |
| Layout hierarchy | One dominant headline + one supporting line + one/two CTAs above the fold; proof (logos/stats) immediately below the fold, not buried | Hero → trust strip (client logos) → services snapshot → featured work → cybersecurity proof → testimonials → CTA banner |
| Typography scale | Large, tight-tracking display type (56–96px) for hero, mid-weight body at 16–18px, generous line-height (1.5–1.6) on body copy | Display scale up to 72px desktop / 40px mobile; body kept at 16–18px/1.6 for legibility on dark backgrounds |
| Component style | Flat-ish cards with 1px hairline borders on dark surfaces, subtle gradient or glow on hover rather than heavy skeuomorphism | Cards: `surface-800` background, `border-white/8` hairline, hover → border brightens to primary blue + soft glow shadow, no heavy drop shadows |
| Spacing philosophy | Section padding scales with viewport (96–160px vertical between major sections desktop, 56–72px mobile); content column capped (~1200–1280px) with generous side gutters | Section rhythm: 128px desktop / 64px mobile vertical padding; max content width 1280px, gutters 24–96px |
| Motion design | Restrained: fade+slight-rise on scroll reveal, 150–250ms micro-interactions, no bouncy easing, occasional parallax on hero imagery only | Same restraint — see Section 7 |
| CTA placement | Primary CTA repeated at: nav, hero, mid-page (services/proof section), and a dedicated closing CTA banner before the footer | Identical placement pattern site-wide, "Book a Consultation" as the fixed anchor phrase |
| Trust-building elements | Client/investor logo strips, quantified stats, security/compliance badges (esp. Stripe, Clerk, Cloudflare), named case studies with metrics | Client logo strip (Reene, DiagSync, Batamart), stats row, compliance badge section (Background3 asset), metric-driven case studies |

Key departure from all references: none of them need to carry *both* a product-dashboard aesthetic and a security-authority aesthetic in one brand. MB CoreX's dark navy/blue base plus restrained red is the device used to hold those two together without the site feeling schizophrenic.

---

## 3. Information Architecture

Route convention: Next.js App Router, all lowercase kebab-case paths.

### `/` — Home
- **Purpose:** Convert cold visitors into "this looks credible, tell me more" within 5 seconds; route qualified visitors to Services, Portfolio, or Contact.
- **Audience:** Primary (business decision-makers, first touch).
- **Primary CTA:** Book a Consultation.
- **Secondary CTA:** View Our Work (→ Portfolio).
- **Major sections:** Hero (Background1 device mockup) → trusted-by logo strip → services snapshot (4–8 cards) → featured work (3 projects) → stats band → cybersecurity teaser → testimonials → insights teaser → closing CTA banner.
- **Internal links:** → Services, Portfolio, Cybersecurity, Contact, individual case studies.
- **SEO intent:** Brand + category head terms — "custom software development company," "software development and cybersecurity Nigeria," "MB CoreX."

### `/about`
- **Purpose:** Build personal trust in the founder; convert "who is behind this" skepticism into confidence.
- **Audience:** Primary + secondary (technical vetting).
- **Primary CTA:** Book a Consultation.
- **Secondary CTA:** View Services.
- **Major sections:** About-MB-CoreX intro (Background2 founder section) → mission/values (Innovation, Security, Excellence) → stats → founder bio + skill areas (Security+, Network+, NIST, SOC 2 knowledge) → AI-assisted workflow explainer → timeline (optional) → CTA banner.
- **Internal links:** → Cybersecurity, AI Solutions, Contact.
- **SEO intent:** "who is MB CoreX," "Martin Blaze software engineer," founder/brand-authority queries.

### `/services`
- **Purpose:** Fully enumerate offerings so any visitor's need maps to a named service; feed the individual landing pages.
- **Audience:** Primary.
- **Primary CTA:** Book a Consultation.
- **Secondary CTA:** per-card "Learn more" → relevant landing page or portfolio filter.
- **Major sections:** Intro ("End-to-End Solutions For Your Business") → full service grid (Software Dev, Enterprise Software, Web Dev, Mobile Apps, Dashboards, SaaS, AI Integrations, Automation, API Dev, Cloud Infra, Cybersecurity Consulting, Security Audits, Compliance, Pen Testing, Maintenance, UI/UX, DevOps, DB Architecture) → process/how-we-work strip → CTA banner.
- **Internal links:** → landing pages (`/solutions/*`), Cybersecurity, AI Solutions, Contact.
- **SEO intent:** "software development services," "cybersecurity consulting services," service-specific long-tail terms.

### `/solutions/software-development`, `/solutions/cybersecurity`, `/solutions/ai-automation`, `/solutions/medical-software`, `/solutions/web-development` — Landing pages
- **Purpose:** Single-intent, high-conversion pages for paid traffic / targeted outreach; each argues one value prop end-to-end.
- **Audience:** Primary, pre-qualified by channel (ad, referral link, cold email).
- **Primary CTA:** Book a Consultation (form embedded above the fold, not just linked).
- **Secondary CTA:** relevant case study link.
- **Major sections (shared template):** Focused hero with one promise → pain-point framing → solution/approach → relevant portfolio proof (1–2 projects) → relevant credentials (e.g., compliance badges on the cybersecurity/medical variants) → FAQ → conversion form.
- **Internal links:** → matching case study, Contact.
- **SEO intent:** exact-match commercial queries, e.g. "HIPAA-aware lab software development," "penetration testing consultant," "SaaS development company."

### `/portfolio`
- **Purpose:** Prove capability breadth and depth; filterable so visitors self-select relevant proof.
- **Audience:** Primary + secondary.
- **Primary CTA:** Book a Consultation (persistent, not per-card).
- **Secondary CTA:** "View case study" per project.
- **Major sections:** Filter bar (by service type/industry) → project grid with hover previews (device mockups) → CTA banner.
- **Internal links:** → `/portfolio/[slug]` for each project.
- **SEO intent:** "[industry] software development portfolio," "custom dashboard examples."

### `/portfolio/[slug]` — Portfolio/Case Study Details (Batamart, DiagSync, Reene Medical Diagnostics, + future)
- **Purpose:** Convert an interested visitor into a lead by proving outcome, not just aesthetics.
- **Audience:** Primary + secondary.
- **Primary CTA:** Book a Consultation.
- **Secondary CTA:** "Live preview" link (where applicable/public).
- **Major sections:** Hero with device mockups → Problem → Solution → Technology used (stack badges) → Results/metrics → before/after visual → testimonial (if available) → related case study → CTA banner.
- **Internal links:** → other portfolio items, Services, Contact.
- **SEO intent:** project-specific and industry-specific long-tail ("laboratory management system case study," "student marketplace platform").

### `/case-studies`
- **Purpose:** A metrics-first index distinct from Portfolio's visual-first index — for visitors who want business outcomes before aesthetics.
- **Audience:** Primary (especially budget-holders).
- **Primary CTA:** Book a Consultation.
- **Major sections:** Intro ("Real Problems. Real Solutions.") → before/after comparison cards per project → aggregate impact stats → CTA banner.
- **Internal links:** → `/portfolio/[slug]` for full detail.
- **SEO intent:** "software development case studies," "before after digital transformation."

### `/cybersecurity`
- **Purpose:** Stand alone as proof MB CoreX is a legitimate security partner, not "a dev shop that also mentions security."
- **Audience:** Secondary (technical) escalated from primary; also a direct-entry landing page for security-specific outreach.
- **Primary CTA:** Secure Your Business (Book a Consultation, security-flavored copy).
- **Secondary CTA:** Download/view compliance overview (or link to relevant case study).
- **Major sections:** Hero ("Security Built Into Everything," Background3 shield graphic) → capability list (Risk Assessment, Security Policies, Compliance & Audit Support, Security Awareness Training, Pen Testing, Secure APIs, Cloud Security) → framework knowledge section (NIST 800-53 Rev 5, NIST 171, SOC 2 Type II, Security+/Network+ — explicitly framed as knowledge/practice, not certification claims) → security-by-design process → CTA banner.
- **Internal links:** → `/solutions/cybersecurity`, Contact, relevant case study (DiagSync).
- **SEO intent:** "cybersecurity consulting," "NIST compliance readiness," "SOC 2 consulting," "penetration testing."

### `/ai-solutions`
- **Purpose:** Explain AI-assisted delivery honestly (differentiator on speed/quality, not "we build AI models").
- **Audience:** Primary + secondary.
- **Primary CTA:** Book a Consultation.
- **Major sections:** Hero (AI-accelerated delivery promise) → what this means practically (faster iteration, automation, code quality via AI tooling with human oversight) → where AI fits in the build process → guardrails/human-oversight statement (credibility, avoids "AI wrote it unsupervised" fear) → CTA banner.
- **Internal links:** → `/solutions/ai-automation`, Services, Contact.
- **SEO intent:** "AI-assisted software development," "AI automation for business," "faster software delivery with AI."

### `/insights` (Blog index) and `/insights/[slug]`
- **Purpose:** Ongoing proof of expertise; long-tail SEO net; nurture channel.
- **Audience:** All — varies by article category.
- **Primary CTA:** Book a Consultation (sidebar/footer of article) + newsletter opt-in.
- **Major sections (index):** category filter (Cybersecurity, AI, Software, Cloud, Case Studies, Engineering), search, tag cloud, pagination, featured article. **(detail):** article body, author box (Martin Blaze), related articles, share, CTA banner.
- **Internal links:** cross-links to Services/Cybersecurity/AI Solutions per article relevance.
- **SEO intent:** long-tail informational queries per category; primary organic acquisition channel.

### `/contact`
- **Purpose:** Lowest-friction path to a conversation for visitors not using the calendar directly.
- **Audience:** All.
- **Primary CTA:** Send Message (form) with Book a Consultation as an equally visible alternate path.
- **Major sections:** Intro → contact form (name, email, project/message) → direct contact details (email, phone, location) → map/location context (Nigeria) → social links → FAQ (optional).
- **SEO intent:** "contact MB CoreX," "hire software developer Nigeria," branded/local queries.

### `/careers`
- **Purpose:** Signal growth and quality bar to future collaborators; secondary trust signal ("this is a real, growing operation") to business visitors who skim it.
- **Audience:** Secondary (talent).
- **Primary CTA:** Apply / Get in touch.
- **Major sections:** Culture/values → open roles (or "no open roles, but reach out") → working-with-MB-CoreX expectations.
- **SEO intent:** "MB CoreX careers/jobs."

### `/privacy-policy`, `/terms`
- **Purpose:** Legal compliance and — importantly for a security-positioned company — a chance to *demonstrate* the same rigor being sold. These pages should be unusually clear and current, not boilerplate.
- **Audience:** All (low engagement, high scrutiny from technical/compliance-minded visitors).
- **SEO intent:** low; indexed for completeness.

### `/404`
- **Purpose:** Recover a lost visitor without losing the trust built elsewhere; keep brand quality consistent even in the error state.
- **Primary CTA:** Return home / Book a Consultation.
- **SEO intent:** none (noindex).

---

## 4. User Experience Planning

Primary journey (cold, high-intent business visitor):

```
Ad / referral / search
    ↓
Home — hero states the promise in <5s, trust strip removes "who is this" doubt
    ↓
Services snapshot — visitor confirms "they do what I need"
    ↓
Featured work — visitor sees real, working software (not mockups-only)
    ↓
Cybersecurity teaser — de-risks "can I trust them with data"
    ↓
Testimonials — social proof from named clients
    ↓
Decision point: 
    → ready now → Book a Consultation (nav/hero/CTA banner)
    → needs more proof → Portfolio → Case Study detail → Book a Consultation
    → needs to vet security specifically → Cybersecurity page → Book a Consultation
    → not ready to talk → Insights (nurture) → newsletter/return visit later
    ↓
Contact form or Calendar booking → confirmation state → (email autoresponder, out of Stage-1 scope but noted for Stage 2)
```

Secondary journey (technical vetting, arrives mid-funnel):
```
Referred link → Cybersecurity or AI Solutions page directly
    ↓
Evaluates framework/compliance language for accuracy and restraint (no over-claiming)
    ↓
Checks Portfolio/Case Study for evidence of applied practice
    ↓
Checks About for founder credibility
    ↓
Reports back to primary decision-maker → loops into primary journey at Contact
```

Every page must therefore carry: (a) the primary CTA, (b) at least one path back into Portfolio/Case Studies, and (c) at least one path into Cybersecurity — since trust in security posture is the swing factor across both journeys.

---

## 5. Component Architecture

Naming follows Next.js/Shadcn convention: primitives in `components/ui/`, composed sections in `components/sections/`, layout in `components/layout/`.

### Layout (global, every page)
- `Navbar` — logo, nav links, active-route highlight, primary CTA button, scroll-aware background (transparent → solid glass on scroll).
- `MobileNav` — slide-in drawer, staggered link reveal, CTA pinned at bottom.
- `Footer` — logo + tagline, Quick Links / Services / Resources / Stay Connected columns, social icons, legal links, copyright.
- `Container` — max-width + responsive gutter wrapper (layout primitive, not visual).
- `PageTransition` — route-change wrapper (subtle fade, see Section 7).

### Section-level (composed, reused across multiple pages)
- `Hero` — variant prop for Home / About / Cybersecurity / landing pages (headline, subhead, CTA pair, media slot for device mockup or photo).
- `SectionHeader` — eyebrow label + heading + optional supporting copy, used to open nearly every section.
- `TrustedByStrip` — client logo row (Reene, DiagSync, Batamart, "and more…").
- `StatsBand` — 4-stat row (Projects Delivered, Happy Clients, Years of Experience, Client Satisfaction), reused on Home, About, Case Studies.
- `ServiceCard` / `ServiceGrid` — icon, title, description, used on Home (snapshot) and Services (full grid).
- `FeatureCard` — generic icon+title+description card (mission/values, capability lists).
- `ProjectCard` / `PortfolioGrid` — thumbnail, name, category tag, hover-reveal preview, used on Home (featured) and Portfolio (full).
- `CaseStudyCard` (before/after) — two-column red-flag/green-flag comparison, used on Case Studies index and Home teaser.
- `TestimonialCard` / `TestimonialGrid` — quote, author, role, company, avatar, rating.
- `BlogCard` / `BlogGrid` — cover image, category tag, title, excerpt, date, read-more.
- `Timeline` — optional founder/company milestones (About).
- `PricingCard` — reserved for future use if MB CoreX productizes an engagement tier; not required for launch content but scaffolded.
- `CTABanner` — full-width closing CTA, present near the bottom of every page.
- `ContactForm` — name/email/project fields, client validation (Zod + React Hook Form), server action submit.
- `ComplianceBadgeGrid` — the four-framework badge layout (NIST 800-53, SOC 2, NIST 171, ISO 27001-style presentation) driven off the Background3 visual language, used on Cybersecurity + relevant landing pages.
- `TechStackBadges` — logo/name chips for stack shown per case study.
- `SocialLinks` — configurable icon list (TikTok, Instagram, X, YouTube, Discord, LinkedIn, GitHub, Email, Phone), driven from a single config object so channels can be toggled without touching markup.
- `Accordion` — FAQ sections on landing pages/Services.
- `Tabs` — used where content needs grouping without a new route (e.g., service categories).
- `Modal` — used sparingly (e.g., project preview lightbox).
- `SkeletonLoader` — blog list/portfolio grid loading state.

### UI primitives (Shadcn-based, styled to design system)
- `Button` (variants: primary/blue, secondary/outline, ghost, destructive-restricted-use, sizes sm/md/lg).
- `Input`, `Textarea`, `Select`, `Checkbox` — form primitives.
- `Badge` / `Tag` — category and stack labels.
- `Card` — base surface primitive underlying most *Card components above.
- `Avatar`.
- `Tooltip`.
- `Breadcrumbs` — case study / blog detail navigation.

### Shared-across-pages map
`Navbar`, `Footer`, `CTABanner`, `StatsBand`, `TestimonialCard`, `ServiceCard`, `TrustedByStrip`, `SectionHeader`, and all UI primitives are used on 4+ pages each and must be built stack-agnostic (no page-specific logic embedded) from the start.

---

## 6. Design System Planning

### Colors
Token-based (CSS variables → Tailwind theme), dark-mode-native (no light theme required at launch).

| Token | Hex (approx, to be sampled precisely from logo in Stage 2) | Usage |
|---|---|---|
| `--bg-base` | `#05070C` | Page background, near-black with a cool navy cast (not pure #000 — keeps depth) |
| `--bg-surface` | `#0B0E15` | Card/section surface |
| `--bg-surface-elevated` | `#11151F` | Modals, popovers, nav-on-scroll |
| `--border-subtle` | `rgba(255,255,255,0.08)` | Default card/hairline borders |
| `--border-strong` | `rgba(255,255,255,0.16)` | Hover/active borders |
| `--brand-blue-500` | `#2F6FED` | Primary brand blue (dominant accent) — sampled from logo "M" |
| `--brand-blue-400` | `#5B8CFF` | Hover/lighter accents, gradients |
| `--brand-blue-700` | `#1C4CC7` | Pressed states, deep gradient stops |
| `--brand-red-500` | `#F0333D` | Accent only — CTAs that need urgency, error states, the logo "X" — used sparingly per brand rule |
| `--neutral-100` | `#F5F6F8` | Primary text on dark |
| `--neutral-300` | `#B7BDC9` | Secondary/body text |
| `--neutral-500` | `#7B8494` | Muted/meta text |
| `--success-500` | `#22C55E` | Status "active/secure" indicators (echoes Background1 dashboard) |
| `--warning-500` | `#F5A524` | Caution states |
| `--error-500` | `#EF4444` | Form errors, distinct from brand red to avoid overloading the accent color semantically |

Gradient usage: radial blue glow (`brand-blue-700` → transparent) behind hero media, matching the particle-glow language of the supplied background images; used as an accent, never as a full-bleed background.

### Typography
- Primary typeface: **Geist Sans** (headings + UI text) — geometric, technical-but-warm, matches the Vercel/Linear-tier reference bar without being a cliché "generic SaaS" font like default Inter.
- Monospace: **Geist Mono** — used for stack badges, code snippets in AI/dev-related sections, and small technical labels (echoes the code-editor detail in Background1).
- Fallback stack: `Geist Sans, "Inter", -apple-system, sans-serif`.

| Scale | Size / Line-height (desktop) | Size / Line-height (mobile) | Weight | Use |
|---|---|---|---|---|
| Display 2XL | 72px / 80px | 40px / 46px | 600 | Home hero headline only |
| Display XL | 60px / 68px | 36px / 42px | 600 | Section-level hero headlines (About, Cybersecurity, landing pages) |
| Display LG | 48px / 56px | 32px / 38px | 600 | Sub-page heroes, major section headers |
| Heading XL | 32px / 40px | 26px / 32px | 600 | Section headers ("Our Services," "Case Studies") |
| Heading LG | 24px / 32px | 20px / 28px | 600 | Card group headers |
| Heading MD | 20px / 28px | 18px / 26px | 500 | Card titles |
| Body LG | 18px / 28px | 16px / 26px | 400 | Hero subheads, intro paragraphs |
| Body MD | 16px / 24px | 15px / 24px | 400 | Default body copy |
| Body SM | 14px / 20px | 14px / 20px | 400 | Meta text, captions, form labels |
| Caption | 12px / 16px | 12px / 16px | 500 | Eyebrows, tags, badges (uppercase, tracked +0.04em) |

Letter-spacing: display sizes get −0.02em to −0.03em tracking (tightened, per reference sites); body stays at 0.

### Spacing
4px base unit: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192`.
Section vertical rhythm: 128px desktop / 96px tablet / 64px mobile between major sections. Card internal padding: 24–32px desktop, 20px mobile.

### Border Radius
- `sm`: 6px (inputs, tags)
- `md`: 10px (buttons)
- `lg`: 16px (standard cards — matches the rounded cards seen in the reference collage)
- `xl`: 24px (hero media frames, large feature panels)
- `pill`: 999px (badges, pill buttons)

### Shadows & Glassmorphism
- `shadow-ambient`: `0 20px 60px -20px rgba(0,0,0,0.6)` — default card lift.
- `shadow-glow-blue`: `0 0 40px rgba(47,111,237,0.25)` — hover state on interactive cards/buttons.
- `shadow-glow-red`: `0 0 32px rgba(240,51,61,0.2)` — reserved for rare high-priority CTA emphasis only (e.g., the red "Secure Your Business" / "Let's Talk" buttons already visible in the reference collage).
- Glass surfaces: `background: rgba(255,255,255,0.04)`, `backdrop-filter: blur(16px)`, `border: 1px solid rgba(255,255,255,0.08)` — used on the sticky navbar once scrolled, and on any card overlapping a photo/gradient background (hero stat chips, mockup overlays).
- Blur values: `blur-sm 8px`, `blur-md 16px`, `blur-lg 24px` (hero background glow orbs).

### Grid System
- Container max-width: 1280px, with a 1440px allowance for ultra-wide hero sections only.
- Columns: 12-column grid desktop, 4-column mobile.
- Gutters: 24px mobile, 32px tablet, 40px desktop.

### Breakpoints
`sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536` (Tailwind defaults retained for ecosystem compatibility) plus a content-level ultra-wide cap at 1440px so text/media never over-stretch on 1920px+ displays.

### Z-index hierarchy
`base 0 → sticky-nav 40 → dropdown 50 → mobile-drawer 55 → modal 60 → toast 70 → tooltip 80`.

### Icon system
**Lucide Icons** throughout (per stated stack) for UI/service iconography — consistent 1.5–2px stroke weight, sized 20/24 in cards, 16 inline with text. Social icons as a dedicated small icon set (Lucide covers most; X/TikTok/Discord custom SVGs matched to the same stroke weight/optical size).

---

## 7. Motion System

Guiding principle: motion confirms and guides, never decorates. Every animation answers "what changed" — nothing plays purely for spectacle. Durations 150–400ms, easing `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) for entrances, `ease-in-out` for hover toggles. Respect `prefers-reduced-motion` globally (disable scroll-reveal translation, keep only opacity).

- **Hero reveal:** headline/subhead/CTA fade + 16px rise, staggered ~80ms per element, on initial mount only (not on scroll re-entry).
- **Scroll animations:** sections fade + 24px rise as they cross ~20% viewport threshold, once per element (no replay on scroll-up), via Framer Motion `whileInView`.
- **Card hover:** border brightens (`border-subtle` → `border-strong`), slight `translateY(-4px)`, `shadow-glow-blue` fades in, 200ms.
- **Button interactions:** background/opacity shift 150ms; primary CTA gets a subtle inner gradient shift on hover, not a scale-bounce.
- **Page transitions:** 150ms cross-fade between routes (App Router template-level), no full-page slide (keeps navigation feeling instant, matches Linear/Vercel restraint).
- **Navigation:** nav background transitions from transparent to glass (`backdrop-blur` + surface color) over the first 80px of scroll, 200ms eased.
- **Mobile menu:** drawer slides in from right 250ms, links stagger-reveal 40ms apart, backdrop fades in behind it.
- **Portfolio hover:** project card image scales 1.0 → 1.04 within its frame (overflow-hidden, no layout shift), device-mockup shots may cross-fade to a secondary screenshot on hover for the two/three flagship projects.
- **Loading states:** blog/portfolio grids show `SkeletonLoader` shimmer (subtle diagonal gradient sweep, 1.5s loop) rather than spinners.
- **GSAP reserved for:** the hero particle/glow background only if it's rebuilt as an animated canvas/SVG (Section on assets, prior conversation) — e.g., slow-drifting particle links on the Home/Cybersecurity hero. Everything else stays in Framer Motion to avoid two competing animation runtimes.

---

## 8. Responsive Strategy

| Breakpoint | Layout behavior |
|---|---|
| Mobile (<640px) | Single column throughout. Nav collapses to hamburger + drawer. Hero media (device mockup) stacks below headline, scaled down, particle glow reduced/simplified for performance. Stats band becomes 2×2 grid. Service/portfolio grids become single column, horizontally-swipeable card rows where density matters (testimonials, logo strip). |
| Tablet (640–1024px) | 2-column grids for services/portfolio/blog. Hero shifts to a lighter side-by-side (headline above, media right, condensed). Footer columns collapse from 4 to 2. |
| Laptop (1024–1440px) | Full intended layout as designed in the reference collage — 3–4 column grids, side-by-side hero, nav fully horizontal. |
| Desktop (1440–1920px) | Same layout, content column stays capped at 1280–1440px with increased side padding rather than stretching components. |
| Ultra-wide (>1920px) | Content stays capped at ~1440px, centered; background glow/gradient elements allowed to extend full-bleed so the frame doesn't feel empty at the edges. |

Sections that materially restructure (not just reflow) between breakpoints: `Hero` (stacked vs. side-by-side + media scale), `Navbar` (horizontal vs. drawer), `Footer` (4-col vs. accordion-collapsed on mobile), `ComplianceBadgeGrid` (radial layout on desktop per Background3 → simple stacked list on mobile, radial positioning isn't legible under ~480px).

---

## 9. Content Strategy

Real, launch-ready copy directions (not placeholder) — final wording to be locked in Stage 2 alongside actual component build, but the intent and voice are fixed here.

**Headlines**
- Home: "We Build Secure Digital Solutions That Scale." (confirmed from reference collage — kept as-is, it's strong and on-brand.)
- About: "Building Technology. Securing Futures."
- Services: "End-to-End Solutions For Your Business."
- Cybersecurity: "Security Built Into Everything."
- Case Studies: "Real Problems. Real Solutions."
- AI Solutions: "Engineering at AI Speed — Without Cutting Corners." (new, needed — not in reference collage.)
- Contact: "Let's Build Something Great Together."

**Supporting copy voice rules**
- Lead with the client's outcome, not MB CoreX's process, in every hero subhead.
- Never use unverified superlatives ("the best," "#1") — use specific, checkable claims instead (named projects, named frameworks, actual stats).
- Compliance/framework mentions always use "knowledge of," "built with awareness of," or "aligned to" — never "certified in" unless the user later confirms an actual certification.
- AI mentions always pair capability with oversight ("AI-assisted... with human review at every stage") to preempt the "vibe-coded" objection.

**CTAs (fixed vocabulary, reused verbatim across the site for consistency)**
- Primary: "Book a Consultation" / "Let's Talk"
- Secondary: "View Our Work" / "Explore Services" / "View All Projects" / "Read More" / "Live Preview"
- Security-flavored: "Secure Your Business"
- Form submit: "Send Message"

**Trust badges / social proof**
- Client logo strip: Reene (Medical Diagnostics), DiagSync, Batamart — labeled "Trusted by Businesses."
- Stats (kept realistic for a young studio, matching the reference collage): 10+ Projects Delivered, 8+ Happy Clients, 3+ Years of Experience, 100% Client Satisfaction.

**Statistics usage**
Repeated verbatim (not re-derived per page) in `StatsBand` on Home, About, and Case Studies — consistency matters more than variety here since inflated or shifting numbers would undercut trust.

**Case studies (content shape per project)**
- Batamart: Problem = fragmented, informal student buy/sell activity with no trust layer → Solution = vendor-managed marketplace with secure payments → Technology = [stack, filled in Stage 2] → Results = adoption/engagement metrics (real numbers to be supplied by user before publish; do not fabricate).
- DiagSync: Problem = manual, error-prone lab record-keeping and reporting → Solution = unified LMS covering patient records, workflow, reporting, inventory, automation → Results = efficiency/error-reduction metrics (to be supplied).
- Reene Medical Diagnostics: Problem = no professional digital presence for a healthcare provider → Solution = branded, responsive corporate site → Results = credibility/visibility outcomes (to be supplied).
*(Flag for user: none of these have real metrics yet in the brief — Stage 2 needs actual numbers or explicitly qualitative framing ("faster," "streamlined") rather than invented percentages.)*

**Testimonials**
One per flagship project minimum (Reene, DiagSync, Batamart), attributed with real name/role wherever the user can supply it — placeholder names must not ship to production copy.

**Cybersecurity messaging**
Anchored to the four-framework badge set already validated (NIST 800-53 Rev 5, SOC 2 Type 2, NIST 171, ISO/IEC 27001) plus Security+/Network+ knowledge — all framed as applied practice, consistent with the earlier correction that these are knowledge areas, not claimed certifications unless confirmed.

**AI messaging**
Frame as a delivery-speed and quality differentiator for the client (faster iteration, more testing coverage, shorter time-to-market), never as the product itself — MB CoreX sells software outcomes, AI is a method.

---

## 10. Technical Architecture

```
mbcorex/
├─ app/
│  ├─ layout.tsx                  # root layout: fonts, theme, Navbar/Footer, metadata defaults
│  ├─ page.tsx                    # Home
│  ├─ globals.css                 # design tokens, Tailwind base
│  ├─ about/page.tsx
│  ├─ services/page.tsx
│  ├─ solutions/
│  │  ├─ software-development/page.tsx
│  │  ├─ cybersecurity/page.tsx
│  │  ├─ ai-automation/page.tsx
│  │  ├─ medical-software/page.tsx
│  │  └─ web-development/page.tsx
│  ├─ portfolio/
│  │  ├─ page.tsx
│  │  └─ [slug]/page.tsx
│  ├─ case-studies/page.tsx
│  ├─ cybersecurity/page.tsx
│  ├─ ai-solutions/page.tsx
│  ├─ insights/
│  │  ├─ page.tsx
│  │  └─ [slug]/page.tsx
│  ├─ contact/page.tsx
│  ├─ careers/page.tsx
│  ├─ privacy-policy/page.tsx
│  ├─ terms/page.tsx
│  ├─ not-found.tsx                # 404
│  ├─ sitemap.ts
│  └─ robots.ts
├─ components/
│  ├─ layout/          # Navbar, MobileNav, Footer, Container, PageTransition
│  ├─ sections/         # Hero, StatsBand, ServiceGrid, PortfolioGrid, CTABanner, etc.
│  └─ ui/               # Shadcn primitives: Button, Card, Input, Badge, Modal, ...
├─ content/
│  ├─ portfolio/        # structured project data (mdx or json) — Batamart, DiagSync, Reene
│  ├─ insights/         # blog posts (mdx)
│  └─ testimonials.ts
├─ lib/
│  ├─ constants.ts      # nav links, social config, CTA copy, site metadata
│  ├─ seo.ts            # metadata builders, JSON-LD helpers
│  ├─ utils.ts          # cn(), formatting helpers
│  └─ validations/      # Zod schemas (contact form, etc.)
├─ hooks/
│  ├─ use-scroll-position.ts
│  └─ use-media-query.ts
├─ actions/
│  └─ contact.ts        # server action: validate + send via Resend/Nodemailer
├─ public/
│  ├─ images/            # optimized logo, backgrounds, portfolio media
│  └─ fonts/             # Geist Sans/Mono if self-hosted
├─ next.config.ts
├─ tailwind.config.ts
└─ tsconfig.json
```

Notes:
- Portfolio and Insights content modeled as structured data (MDX or JSON) from day one, not hardcoded JSX, so case studies/blog posts scale without touching components.
- `lib/constants.ts` is the single source for nav items, social links, and CTA labels — matches the earlier requirement that social icons be configurable, not hardcoded per component.
- Server Actions (`actions/contact.ts`) handle form submission per the stated stack (no separate API route needed for a single form).

---

## 11. Performance & SEO Strategy

**Target:** Lighthouse Performance 95+, Accessibility 100, Best Practices 100, SEO 100.

- **Images:** `next/image` everywhere, AVIF/WebP with PNG fallback, explicit width/height to prevent CLS, the four supplied brand images compressed and served responsively (srcset per breakpoint) rather than as single large PNGs (current files are 1.3–1.5MB each — must be optimized before shipping).
- **Lazy loading:** below-the-fold sections (testimonials, insights teaser, footer) lazy-mounted; hero media eagerly loaded (LCP element).
- **Code splitting:** route-level splitting is automatic via App Router; heavy components (Modal, any chart/dashboard visualization) dynamically imported (`next/dynamic`) so they don't inflate initial bundle.
- **Fonts:** Geist via `next/font` (self-hosted, zero layout shift, no external request).
- **Metadata:** per-route `generateMetadata` with unique title/description; global template in root layout (`%s | MB CoreX`).
- **Structured data (JSON-LD):** `Organization` schema site-wide (logo, socials, contact), `Service` schema on Services/landing pages, `Article` schema on Insights posts, `BreadcrumbList` on deep pages (portfolio detail, blog detail), `FAQPage` schema where an Accordion FAQ is present.
- **Open Graph / Twitter Cards:** per-route OG image (static branded template at minimum; dynamic OG generation via `next/og` as a stretch goal for blog posts).
- **Sitemap & robots:** `app/sitemap.ts` generating all static + dynamic (portfolio/insights slugs) routes; `app/robots.ts` allowing all except none (no gated content at launch) with sitemap reference.
- **Canonical URLs:** set per page via metadata, especially important for the landing-page set (`/solutions/*`) which will overlap topically with `/services` and `/cybersecurity` — canonicals prevent self-competition in search.
- **Accessibility:** semantic landmarks (`nav`, `main`, `footer`), skip-to-content link, all interactive elements keyboard-reachable with visible focus rings (blue, matching brand — not browser default), color contrast checked against the dark palette above (body text `neutral-300` on `bg-base`/`bg-surface` verified ≥4.5:1), all icons decorative-only get `aria-hidden`, all meaningful icons get accessible labels, form fields fully labeled with error messaging tied via `aria-describedby`.
- **Performance monitoring:** Core Web Vitals tracked post-launch (Vercel Analytics, matching "Vercel-optimized" stack requirement).

---

## 12. Final Architecture Review

- [x] Every page has a clearly defined purpose, audience, primary/secondary CTA, and SEO intent (Section 3).
- [x] Every reusable component is identified and mapped to which pages consume it (Section 5).
- [x] Information architecture covers all pages requested, plus the five conversion-focused landing pages under `/solutions/*`.
- [x] Design system is fully specified: color tokens, type scale, spacing scale, radius, shadow/glass values, grid, breakpoints, z-index, icon system (Section 6).
- [x] Motion system defined with restraint as the explicit constraint, and `prefers-reduced-motion` accounted for (Section 7).
- [x] Responsive strategy covers mobile through ultra-wide, with named sections that restructure vs. merely reflow (Section 8).
- [x] Content strategy locks real headlines/CTAs/voice rules — flags one open gap: case-study metrics are not yet supplied by the user and must not be fabricated in Stage 2 (Section 9).
- [x] Project structure finalized for Next.js App Router with clear separation of layout/sections/ui, content-as-data, and configurable nav/social/CTA source of truth (Section 10).
- [x] Performance/SEO plan is concrete and enforceable (specific schema types, specific image issue flagged: source PNGs are currently oversized and need optimization) (Section 11).
- [x] Implementation order is logical: design tokens/primitives → layout shell (Navbar/Footer) → Home → remaining core pages → landing pages → blog/portfolio data layer → SEO/perf pass → accessibility pass.

**Open items requiring user input before/during Stage 2 (not blockers to starting, but will hit real pages):**
1. Real metrics/numbers for the three case studies (Batamart, DiagSync, Reene) — currently only qualitative problem/solution framing exists.
2. Real testimonial quotes/attributions for those same three clients, or explicit sign-off to omit testimonials until available.
3. Confirmation on whether Security+/Network+ are actual completed certifications or knowledge areas only — governs exact wording sitewide (already defaulting to the conservative "knowledge" framing per earlier correction).
4. Precise logo color hex values (Stage 2 will sample directly from the provided PNG rather than the approximations listed in Section 6).
5. Decision from the earlier discussion: code-generated backgrounds (SVG/Canvas) for sections beyond the three supplied images, vs. user sourcing additional images.

This blueprint is complete. No implementation code has been written. Ready to proceed to Stage 2 on your go-ahead.
