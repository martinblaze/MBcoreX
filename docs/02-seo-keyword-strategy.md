# Stage 1b — Keyword & Information-Architecture Strategy

Companion to `01-discovery-architecture.md`. Produced 2026-07-26 at the user's request, in response to a
review flagging that the site has strong **technical** SEO (metadata, JSON-LD, sitemap, robots.txt — all
verified present) but **zero commercial-intent keyword targeting**. This doc is the planning layer; no
code changes were made in this pass. Read this before touching any page's copy, metadata, or the
services/portfolio/blog content files.

**Why:** the user wants a written plan they can approve/redirect before landing-page copy, metadata, and
new routes get built, since it touches brand positioning (see the "NOT an agency site" premium-positioning
constraint in `01-discovery-architecture.md` / `[[project_brief]]`) as well as IA.

**How to apply:** treat the keyword map and page decisions below as the target state. Execute in the
phase order at the bottom, and flag the "Open decisions" section to the user before building anything that
touches site structure (new routes, nav changes, portfolio/case-studies consolidation).

---

## 1. Audit findings (verified against current code, 2026-07-26)

| Area | Current state | Gap |
|---|---|---|
| Root metadata (`app/layout.tsx`) | Title: "MB CoreX — Software Engineering & Cybersecurity" | No geography, no commercial-intent phrase ("Nigeria," "software development company," etc.) |
| Page titles | Single words: "Services," "Cybersecurity," "AI Solutions," "Portfolio," "About MB CoreX," "Contact" | Titles carry zero search-intent signal — nobody searches "Services" |
| Services (`content/services.ts`) | 18 services, all rendered as anchor cards (`#slug`) on one `/services` page | `serviceJsonLd().url` points to `/services#slug` — an anchor, not a crawlable/rankable URL. None of the 18 services has its own indexable page |
| Standalone landing pages | `/cybersecurity` and `/ai-solutions` already exist as dedicated pages | 5 of the 7 pages the review recommends don't exist yet: web development, custom software, SaaS, business automation, healthcare software |
| Case studies | `/portfolio` (grid) and `/case-studies` (grid) both list the same 3 projects; detail pages live at `/portfolio/[slug]` only | Likely near-duplicate content between the two list pages; case-study **titles** are just company names ("DiagSync," "Batamart") with no outcome/search-intent framing |
| Blog (`content/insights.ts`) | 8 well-written thought-leadership posts, categorized, with related-posts and category pages already wired | Good foundation, but nothing targets bottom-of-funnel commercial queries ("how much does website development cost in Nigeria," etc.) — the review's content-plan ask is mostly unmet |
| Structured data (`lib/seo.ts`) | `organizationJsonLd()` already sets `address.addressCountry: "NG"` | No city, no `areaServed`, no `sameAs` (empty array), no `Person` schema for the founder |

**Bottom line:** the review's diagnosis is accurate. The fix is IA (give services their own URLs) +
copy (keyword-rich titles/H1s/metadata) + content (a second content track), not more technical plumbing.

---

## 2. Positioning decision (reconciles the review's ask with the existing brief)

The review's proposal — homepage H1/title targeting "Software Development Company in Nigeria" — reads as
commodity-agency framing. The project brief is explicit that this is **not** an agency site and the visual/
brand bar is Vercel/Linear/Stripe-grade. These aren't actually in conflict:

- **Brand voice stays premium.** Hero headline, tone, and visual design don't change.
- **SEO keywords get layered underneath**, not instead of, the brand line: in the `<Caption>`/eyebrow
  text, the H1's supporting subhead, `<title>`/`<meta description>`, footer, and body copy — not as the
  literal hero headline.

Example for the homepage (illustrative, not final copy):
- Eyebrow/caption: *"Software Development Company in Nigeria"* (keeps the keyword phrase verbatim, low-key placement)
- H1: keeps its premium brand line (current hero copy, unchanged)
- Meta title: `"MB CoreX | Software Development & Cybersecurity Company in Nigeria"`
- Meta description: works the phrase in naturally alongside the existing value prop

This pattern (keyword in caption/meta/subhead, brand voice in the H1) repeats across every page below.

---

## 3. Keyword map by page

Primary keyword first, then supporting terms. Intent: **C** = commercial/buying-intent, **I** = informational.

### Core pages (existing, metadata rewrite only — no new routes)

| Page | Primary keyword | Supporting keywords | Intent |
|---|---|---|---|
| `/` (home) | Software development company in Nigeria | custom software development company Nigeria, enterprise software development Nigeria, software company Lagos | C |
| `/services` | Software development services Nigeria | custom software services, IT services company Nigeria | C |
| `/cybersecurity` | Cybersecurity company Nigeria | security audit company Nigeria, NIST/SOC 2 compliance Nigeria, penetration testing Nigeria | C |
| `/ai-solutions` | AI software development company Nigeria | AI integration services Nigeria, business automation with AI | C |
| `/about` | Software engineering team Nigeria | (supports EEAT — founder credentials, experience) | I |
| `/portfolio` | Software development portfolio Nigeria | custom software case studies, SaaS projects Nigeria | C/I mix |
| `/contact` | Hire a software development company Nigeria | book a consultation, get a quote software development | C |

### New standalone landing pages (fills the review's 7-page ask; 2 of 7 already exist above)

Each maps to existing content where possible so copy isn't invented from nothing — DiagSync/Batamart/Reene
already substantiate most of these.

| New route | Primary keyword | Supporting keywords | Backed by |
|---|---|---|---|
| `/web-development` | Web development company Nigeria | website development company Lagos, custom website development Nigeria, responsive web design Nigeria | `web-applications` + `database-architecture` services; Reene Medical case study |
| `/custom-software` (promote from `#custom-software` anchor) | Custom software development company Nigeria | bespoke software development Nigeria, enterprise software development Nigeria | `custom-software` + `enterprise-systems` services; Batamart, DiagSync |
| `/saas-development` (promote from `#saas-development` anchor) | SaaS development company Nigeria | build a SaaS product Nigeria, multi-tenant SaaS development | `saas-development` service; Batamart |
| `/business-automation` (promote from `#workflow-automation` anchor) | Business automation software Nigeria | workflow automation company Nigeria, process automation software | `workflow-automation` + `ai-business-solutions` services |
| `/healthcare-software` (new — industry vertical, not a 1:1 service) | Healthcare software developer Nigeria | medical software development Nigeria, laboratory management system Nigeria, hospital software Nigeria | DiagSync + Reene Medical Diagnostics case studies directly |

Target length per the review's ask: 1,500–3,000+ words, structured as problem → what we build → how we
build it (process) → relevant case study → FAQ → CTA. `/cybersecurity` and `/ai-solutions` already roughly
follow this shape — use them as the template for the 5 new pages.

**Remaining 13 services** (mobile-apps, dashboards, api-development, cloud-infrastructure, secure-development,
risk-assessments, security-audits, security-best-practices, compliance-readiness, secure-cloud-architecture,
intelligent-assistants, database-architecture, enterprise-systems) stay as anchor cards on `/services`, which
continues to exist as the hub page linking out to the 7 dedicated pages plus these anchors. Don't build 18
standalone pages — that's disproportionate to query volume for most of these.

### Case study retitling (search-intent titles, company name kept as subtitle/brand identifier)

| Project | Current title | Proposed SEO title (H1 + `<title>`) |
|---|---|---|
| DiagSync | "DiagSync" | "How We Built a Laboratory Management System for a Diagnostics Lab — DiagSync" |
| Batamart | "Batamart" | "How We Built a Secure Student Marketplace Platform — Batamart" |
| Reene Medical Diagnostics | "Reene Medical Diagnostics" | "Building a Trust-First Corporate Website for a Healthcare Provider — Reene Medical Diagnostics" |

`title` field in `content/portfolio.ts` stays as the short brand name (used in cards/nav); add a separate
`seoTitle` field for the H1/`<title>` use on the detail page, so card UI doesn't get the long version.

### Blog content plan — second track

The existing 8 posts are thought-leadership (mid-funnel, builds authority). Add a bottom-of-funnel
commercial-intent track. Proposed first batch (extend `content/insights.ts`, "Business Technology" /
new "Pricing & Comparisons" category):

1. How Much Does Website Development Cost in Nigeria? (2026)
2. How Much Does It Cost to Build a SaaS Product in Nigeria?
3. Custom Software vs. SaaS: Which Is Right for Your Nigerian Business? *(distinct from the existing "Custom Software vs. Off-the-Shelf" post — different query, keep both)*
4. Why Nigerian Businesses Need Custom Software Over Generic Templates
5. WordPress vs. Custom Development: What's Right for Your Business?
6. Website Security Checklist for Nigerian Businesses
7. Best Website Features Every Hospital or Clinic Should Have
8. How AI Is Changing Software Development in Nigeria

Each new post must link to: the most relevant of the 7 service landing pages, one matching case study, and
`/contact`. This is the review's internal-linking ask — apply it as a checklist item in each post's outline,
not as a separate pass later. Full 50–100 article backlog is a phase-4 item (below), not this pass.

---

## 4. Internal linking rules (apply going forward, all content types)

- Every blog post → links to ≥1 relevant service/landing page + ≥1 case study + `/contact`.
- Every service landing page → links to `/insights` (filtered/related posts), `/portfolio`, `/contact`.
- Every case study detail page → links to the service landing page(s) it demonstrates (e.g., DiagSync →
  `/healthcare-software` and `/custom-software`).
- `/services` hub → links to all 7 dedicated landing pages at the top, anchors for the rest below.

## 5. Structured data / EEAT additions

- `organizationJsonLd()` in `lib/seo.ts`: add `areaServed` (Nigeria, or specific city if the user wants
  local-pack targeting), populate `sameAs` once social profiles are live (currently `[]`).
- Add `Person` JSON-LD for Martin Blaze on `/about`, referencing the same knowledge areas already
  documented in the project brief (Security+, NIST 800-53, SOC 2 — worded as knowledge/experience per the
  existing "not a certification claim" constraint).
- Case study pages already have rich problem/solution/process/results detail (`content/portfolio.ts`) —
  this is exactly the EEAT material Google wants; the fix is exposing it via better titles/metadata, not
  writing new content.

## 6. Open decisions — need user sign-off before building

1. **`/portfolio` vs `/case-studies` duplication.** Both currently list the same 3 projects. Recommend
   consolidating to one canonical list page (keep `/portfolio`, since it already owns the detail routes at
   `/portfolio/[slug]`) and either redirecting or repurposing `/case-studies` with distinct angle/content
   to avoid duplicate-content dilution. Needs user confirmation before changing nav/routes.
2. **Local targeting granularity.** Keyword map above targets "Nigeria" broadly per the review. Confirm
   whether to also target "Lagos" specifically (matches one of the review's example queries — "website
   development company lagos") for `areaServed` and select page copy.
3. **New route naming**: `/custom-software`, `/saas-development`, `/business-automation` will collide
   conceptually with existing anchors of the same slug on `/services#custom-software` etc. — those anchors
   should be removed from `/services` once the dedicated pages exist, to avoid two competing URLs for the
   same query.

## 7. Suggested execution order (separate work items, not this pass)

1. Metadata rewrite across existing pages (low risk, fast, no IA change) — home, `/services`,
   `/cybersecurity`, `/ai-solutions`, `/about`, `/portfolio`, `/contact`.
2. Case study retitling (`seoTitle` field + detail-page H1s).
3. Build the 5 new service landing pages (`/web-development`, `/custom-software`, `/saas-development`,
   `/business-automation`, `/healthcare-software`), remove the now-redundant anchors from `/services`.
4. Resolve the `/portfolio` vs `/case-studies` overlap (open decision #1).
5. Ship the first batch of 8 commercial-intent blog posts, each wired per the internal-linking rules.
6. Structured-data additions (`areaServed`, `sameAs`, `Person` schema).
7. Ongoing: extend the blog backlog toward the review's 50–100 article target, batched by topic cluster.
