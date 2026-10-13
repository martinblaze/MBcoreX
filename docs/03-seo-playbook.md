# SEO Playbook: MB CoreX (online software company, Nigeria)

Written 2026-10-13. Supersedes the keyword plan in `02-seo-keyword-strategy.md`, which described the older
18-service / cybersecurity site. Read this before changing page titles, copy, routes or structured data.

**Honest scope:** nobody can guarantee a position for "every single search". What this build does is remove
the obstacles, cover the searches that buyers actually make, and give you a repeatable way to measure and
extend that coverage. Competitive terms (e.g. "software company in Lagos") take months, and need links and
reviews from other sites, which only you can earn (see section 5).

## 1. What was built

| Layer | What exists | Where |
|---|---|---|
| Service landing pages (5) | One indexable page per service with intro, who it's for, what's included, process, 8 FAQs, naira range, related guides and case studies | `app/services/[slug]`, `content/services.ts` |
| Region pages (37) | One page for every state + FCT, built from that place's cities and sectors, with 6 place-specific build ideas, place-specific service lines and 5 FAQs. About 560 words each; 18-26% shared text between any two pages | `app/locations/[slug]`, `content/locations.ts`, `lib/location-copy.ts` |
| Region hub | `/locations`, grouped by geopolitical zone | `app/locations/page.tsx` |
| Guides (17) | 10 restored from the old blog (re-linked, cybersecurity/NIST posts retired) + 7 new: SEO cost, how to rank on Google, local SEO without a shop, Core Web Vitals, mobile app cost, web vs mobile app, how to choose a software company | `app/insights`, `content/insights*.ts` |
| Pricing page | Naira ranges per service + 6 FAQs | `app/pricing` |
| Structured data | Organization + ProfessionalService (service area = Nigeria + all 36 states + FCT, no invented address), WebSite, Service + Offer (NGN price ranges), FAQPage, BreadcrumbList, Article, Person (founder), ItemList, WebPage/CollectionPage | `lib/seo.ts` |
| Technical | `lang="en-NG"`, per-page canonical + `en-NG`/`x-default` alternates, robots with large-snippet directives, XML sitemap (70 URLs), robots.txt, web manifest, generated Open Graph image, `llms.txt`, AVIF/WebP, long-cache headers for static media, 301s for every retired URL | `app/*`, `next.config.ts`, `public/llms.txt` |
| Internal links | Every page links to services, regions and guides; footer carries top regions on every page; service pages link to 12 featured regions | components |

Audit result (script run against the production build): 70/70 URLs pass: title and description within display
length, canonical correct, exactly one H1, `en-NG`, no duplicate titles/descriptions, 374 JSON-LD blocks all
valid, zero broken internal links.

## 2. Keyword map

Intent: **C** commercial, **I** informational. Volumes are not included: use Google Search Console and Google
Keyword Planner once the site is live to confirm and re-rank.

| Target phrase family | Page | Intent |
|---|---|---|
| software company / software development company in Nigeria | `/` | C |
| web development company in Nigeria, website design Nigeria, ecommerce website Nigeria | `/services/web-development` | C |
| web application development Nigeria, customer portal, marketplace development | `/services/web-applications` | C |
| custom software development Nigeria, bespoke software, SaaS development Nigeria, business automation | `/services/custom-software` | C |
| mobile app development company Nigeria, Android/iOS app developer | `/services/mobile-app-development` | C |
| SEO company in Nigeria, SEO services Nigeria, Google SEO expert, hire SEO | `/services/google-seo` | C |
| software / web / app company in {Lagos, Abuja, Port Harcourt, Kano, ...} | `/locations/{slug}` (37) | C |
| website / app / SEO / software price in Nigeria (naira) | `/pricing` + cost guides | C/I |
| how to rank on Google Nigeria, SEO cost Nigeria, local SEO without a shop | guides | I |
| how to choose a software company, custom vs SaaS, WordPress vs custom | guides | I |

Region pages mention the major cities of each state in their copy, so searches like "web developer in Aba" or
"software company in Warri" have a relevant page to land on.

## 3. Risks to watch (read this)

1. **Doorway/location-page policy.** Google's spam policy targets many near-identical city pages. Ours differ
   (each uses its own cities, sectors, ideas and service lines) and are honest that MB CoreX has no local
   office. Monitor in Search Console under *Pages*: if many region pages show "Crawled - currently not
   indexed", **do not add more**; instead enrich the weakest ones with real local detail (named local
   examples, client stories, regional statistics with sources) or `noindex` them. Do not duplicate these pages
   per service (5 x 37 = 185 pages): that is the pattern Google penalises.
2. **Google Business Profile.** Google's own help says online-only businesses with no location customers
   visit, and no in-person visits to customers, are **not eligible**. Do not use a fake address or a rented
   mailbox: it gets profiles suspended. If you ever meet clients at an office or visit them on site, re-check
   eligibility. Until then the region pages, reviews and directories below carry the local signal.
3. **Facts on region pages** (capitals, cities, sectors) were written from general knowledge. Skim
   `content/locations.ts` and correct anything you know to be wrong.
4. **No fake proof.** The site has no invented testimonials, stats or addresses. Keep it that way: it is both
   the right thing and Google's trust standard (E-E-A-T).
5. **Placeholder facts to confirm:** SEO price band (₦150,000 to ₦1,000,000), the social profile links in
   `lib/constants.ts` (generic homepages, so they are deliberately **not** in `sameAs`), and the production
   domain.

## 4. Before launch checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain (all canonicals, sitemap and schema derive from it).
- [ ] Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, deploy, then add the site in **Google Search Console** and
      submit `https://<domain>/sitemap.xml`. Also add it to **Bing Webmaster Tools**.
- [ ] Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (GA4) and, optionally, Clarity.
- [ ] Add real profile URLs (LinkedIn, GitHub, X, Instagram) to `socials` and to `sameAs` in
      `organizationJsonLd()` once the accounts exist.
- [ ] Run PageSpeed Insights on `/`, `/services/google-seo`, a region page and a guide (mobile).
- [ ] Test rich results at search.google.com/test/rich-results for `/services/google-seo` and a region page.

## 5. Off-site work (the part code cannot do)

Rankings for competitive phrases depend on other sites vouching for you. In rough priority:

1. **Directories where Nigerian software firms already appear:** Clutch, DesignRush, GoodFirms, Sortlist.
   Create complete profiles, add the three case studies, and invite DiagSync, Batamart and Reene to leave
   reviews. Reviews on these platforms are the closest thing to local reviews for an online business.
2. **Client links:** ask each client to link to MB CoreX from their site (for example "Built by MB CoreX" in the
   footer). Three real client links beat dozens of bought ones.
3. **LinkedIn, GitHub, and a founder profile:** consistent name and description, linking to the site.
4. **Guest and community content:** technical posts on Dev.to or Medium, Nigerian tech communities and
   publications, linking back to the matching guide.
5. **Nigerian business directories** that are real and moderated (avoid link farms; they cause harm).
6. Never buy bulk links or use link networks.

## 6. Ongoing rhythm

| Cadence | Task |
|---|---|
| Weekly | Search Console: check *Pages* for indexing problems and *Performance* for new queries. |
| Monthly | Publish 2 guides aimed at queries you already show up for on page 2. Refresh one existing guide and set its `updatedAt`. |
| Monthly | Update the naira ranges if rates change (they appear on pricing, service pages, schema and `llms.txt`). |
| Quarterly | Re-run the audit script, review region pages with low impressions, add real local detail or merge. |
| Per project | Turn every finished project into a case study with outcomes, and link it from the relevant service and region pages. |

## 7. Measurement

Track in Search Console and GA4: impressions and clicks per page type (service, region, guide), queries
containing a state or city name, click-through rate on service pages (improve titles where CTR is low),
and enquiries by landing page (contact form source).

## 8. Content backlog (next guides, in order)

1. Website cost / SEO cost pages per major city only if Search Console shows demand (avoid templated pages).
2. "School management software in Nigeria: what to look for" and "Hospital management system Nigeria".
3. "Paystack vs Flutterwave for your Nigerian website" (verify current fees before publishing).
4. "How to move your business online in Nigeria: a checklist".
5. Case study deep-dives with real outcomes from DiagSync, Batamart and Reene.
