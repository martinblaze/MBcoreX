export type Faq = { question: string; answer: string }

export type Service = {
  slug: string
  title: string
  /** Short line used in the nav, home list and form. */
  blurb: string
  description: string
  tags: string[]
  deliverables: string[]
  /**
   * Indicative project band in naira — a range to set expectations, never a
   * quote. The real number always comes from scope.
   */
  priceFrom: number
  priceTo: number
  /** Billing note shown beside the price band. */
  priceNote?: string

  // ---- SEO landing page (/services/[slug]) -------------------------------
  /** `<title>` — keep under ~60 characters. */
  metaTitle: string
  /** Meta description — keep under ~158 characters. */
  metaDescription: string
  /** Eyebrow that carries the exact-match keyword phrase. */
  eyebrow: string
  /** Page H1; `[[double brackets]]` mark the highlighted words. */
  h1: string
  intro: string[]
  whoItsFor: string[]
  included: { title: string; text: string }[]
  process: { title: string; text: string }[]
  faqs: Faq[]
  /** Guide slugs (see content/insights.ts) shown as related reading. */
  guideSlugs: string[]
  /** Case study slugs (see content/work.ts) that demonstrate this service. */
  caseStudySlugs: string[]
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    blurb: "Fast websites that look sharp and rank.",
    description:
      "Business websites, landing pages and online stores built on the same engineering standards as our software — quick to load, structured for search, and owned outright by you.",
    tags: ["Business websites", "Landing pages", "E-commerce", "CMS"],
    deliverables: ["Design and content structure", "Production website", "Analytics, SEO setup and handover"],
    priceFrom: 150000,
    priceTo: 2500000,
    metaTitle: "Web Development Company in Nigeria | MB CoreX",
    metaDescription:
      "Fast, search-ready websites for Nigerian businesses: company sites, landing pages and online stores. Built in Next.js, owned by you. Serving all 36 states and the FCT.",
    eyebrow: "Web Development Company in Nigeria",
    h1: "[[Web development]] for businesses across Nigeria.",
    intro: [
      "MB CoreX is an online web development company in Nigeria. We design and build company websites, landing pages and online stores for businesses in Lagos, Abuja, Port Harcourt, Kano and every other state, all handled remotely over calls, WhatsApp and shared design reviews.",
      "Every site is built to be fast on a mid-range phone and a patchy mobile connection, because that is how most Nigerian customers will open it. It is structured for Google from the first line of code, so you are not paying for a redesign later just to be found. You own the code, the domain and the hosting account when we finish.",
    ],
    whoItsFor: [
      "Businesses with no website yet, or a website that was built years ago and now loads slowly or looks dated.",
      "Clinics, schools, law firms, logistics companies, restaurants, estate firms and other service businesses that win customers through trust and search.",
      "Online sellers who want their own store with payments (card, bank transfer and gateways such as Paystack and Flutterwave) instead of depending only on social media.",
      "Startups that need a credible landing page and a clear way to capture leads before they build a product.",
    ],
    included: [
      { title: "Design that fits your brand", text: "A custom layout, not a recycled template. You review real screens on your phone before anything is built." },
      { title: "Speed built in", text: "Optimised images, lean code and a global content network so pages open quickly on mobile data." },
      { title: "SEO structure from day one", text: "Clean page titles, headings, URLs, structured data and a sitemap, so Google understands every page." },
      { title: "Mobile-first layout", text: "Designed for phones first and checked on desktop, with tap-friendly buttons and readable text." },
      { title: "Contact and WhatsApp capture", text: "Forms, click-to-call and click-to-WhatsApp wired to where you actually answer enquiries." },
      { title: "Analytics and Search Console", text: "Set up so you can see who visits, what they search and which pages bring enquiries." },
      { title: "Content you can edit", text: "A simple way to update text, images and prices without calling a developer for every change." },
      { title: "Handover and support", text: "Documentation, a walkthrough call and optional monthly care for updates and fixes." },
    ],
    process: [
      { title: "Discovery call", text: "We learn what the business sells, who it sells to and what a good enquiry looks like." },
      { title: "Plan and sitemap", text: "We agree pages, key messages and the search terms each page should win." },
      { title: "Design review", text: "You approve real screens before development starts, so there are no surprises." },
      { title: "Build and test", text: "We build in short cycles and test on real phones, slow connections and every major browser." },
      { title: "Launch", text: "We connect your domain, switch on analytics and submit the site to Google." },
      { title: "Support", text: "We stay available for fixes and improvements, and can continue with SEO to grow traffic." },
    ],
    faqs: [
      { question: "How much does a website cost in Nigeria?", answer: "Typical ranges at MB CoreX run from about ₦150,000 for a focused landing page up to around ₦2.5 million for a larger site or online store. The exact figure depends on the number of pages, custom design, integrations such as payments, and content. We give a fixed quote after a short discovery call." },
      { question: "How long does it take to build a website?", answer: "A landing page can be ready in one to two weeks. A full business website usually takes three to six weeks, and an online store a little longer, depending on how quickly content and feedback come back." },
      { question: "Do you only work with businesses in Lagos?", answer: "No. We are an online company and work with clients in every state, including Abuja, Port Harcourt, Kano, Ibadan, Enugu and beyond. Everything happens by video call, WhatsApp and shared previews, so your location makes no difference to quality." },
      { question: "Will my website show up on Google?", answer: "We build every site so Google can crawl and understand it, and we submit it to Search Console at launch. Ranking for competitive searches takes time and ongoing content and link work, which is what our Google SEO service covers." },
      { question: "Do I own the website after it is built?", answer: "Yes. You own the source code, the design files, the domain and the hosting account. There is no lock-in." },
      { question: "Can you redesign my existing website?", answer: "Yes. We keep what already ranks, such as good URLs and content, and redirect old pages properly so you do not lose search traffic during the move." },
      { question: "Can customers pay on the website?", answer: "Yes. We integrate card and bank payments through gateways such as Paystack and Flutterwave, and can connect order notifications to email or WhatsApp." },
      { question: "Do you offer hosting and maintenance?", answer: "We set up reliable hosting and can provide monthly maintenance covering updates, backups, uptime monitoring and small content changes." },
    ],
    guideSlugs: ["website-development-cost-nigeria-2026", "wordpress-vs-custom-development", "core-web-vitals-nigeria-mobile-speed"],
    caseStudySlugs: ["reene-medical-diagnostics", "batamart"],
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    blurb: "Dashboards, portals and platforms in the browser.",
    description:
      "Interactive products that run in the browser: customer portals, dashboards, marketplaces and internal tools, designed around how your team actually works.",
    tags: ["Dashboards", "Portals", "Marketplaces", "Integrations"],
    deliverables: ["Product scope and architecture", "Responsive production build", "Deployment and documentation"],
    priceFrom: 800000,
    priceTo: 5000000,
    metaTitle: "Web Application Development in Nigeria | MB CoreX",
    metaDescription:
      "Custom web applications for Nigerian businesses: customer portals, dashboards, marketplaces and internal tools. Secure, fast and built to scale. Serving all states.",
    eyebrow: "Web Application Development in Nigeria",
    h1: "[[Web applications]] your team and customers will actually use.",
    intro: [
      "A web application is software that runs in the browser: a customer portal, a booking system, an admin dashboard, a marketplace. MB CoreX builds web applications for Nigerian businesses that have outgrown spreadsheets, WhatsApp threads and paper records.",
      "We have built a laboratory management platform (DiagSync) and a student marketplace (Batamart), so we know what real users, real payments and real data demand. We work remotely with clients in every state and deliver a product you own, with documentation your next developer can pick up.",
    ],
    whoItsFor: [
      "Businesses tracking orders, customers or inventory in Excel or on paper and losing time to errors.",
      "Companies that want a customer portal where clients log in to see invoices, bookings or results.",
      "Founders building a marketplace, booking platform or subscription product.",
      "Teams that need an internal dashboard to turn scattered data into daily decisions.",
    ],
    included: [
      { title: "Roles and permissions", text: "Different logins for staff, managers and customers, each seeing only what they should." },
      { title: "Secure accounts", text: "Safe sign-in, password handling, and protection against the common web attacks." },
      { title: "Admin dashboard", text: "A clear control panel to manage users, content, orders and reports." },
      { title: "Payments and billing", text: "Card and bank payments, subscriptions and invoices through Nigerian and international gateways." },
      { title: "Notifications", text: "Email and WhatsApp-style alerts so staff and customers know when something needs attention." },
      { title: "Integrations", text: "Connections to accounting tools, SMS, maps and any system with an API." },
      { title: "Reports and exports", text: "Search, filters and downloadable reports in the formats your team already uses." },
      { title: "Documentation", text: "Plain-language handover so your product does not depend on one developer." },
    ],
    process: [
      { title: "Scoping workshop", text: "We map your current process and agree exactly what version one must do." },
      { title: "Clickable prototype", text: "You test the main screens before we write the real code." },
      { title: "Iterative build", text: "Core features first, with a working demo every week or two." },
      { title: "Testing with real users", text: "Your staff try it on real tasks, and we fix what slows them down." },
      { title: "Launch and training", text: "We deploy, migrate your data and walk your team through it." },
      { title: "Improve and support", text: "We keep shipping improvements based on how the product is used." },
    ],
    faqs: [
      { question: "What is the difference between a website and a web application?", answer: "A website mostly presents information. A web application lets users do things: log in, place orders, manage records, see dashboards. If you need accounts, a database and workflows, you need a web application." },
      { question: "How much does a web application cost in Nigeria?", answer: "Typical projects range from about ₦800,000 to ₦5 million, depending on the number of user roles, integrations and screens. We scope first and quote a fixed price for version one." },
      { question: "How long does it take to build a web application?", answer: "A focused first version commonly takes six to twelve weeks. Larger platforms are released in phases so you start getting value early." },
      { question: "Can you build a marketplace like Batamart?", answer: "Yes. We built Batamart, a campus marketplace with vendor storefronts, secure payments and delivery tracking, and can build similar platforms for other communities or industries." },
      { question: "Will my data be safe?", answer: "We use access control, encrypted connections and tested authentication, and design the database so each user only reaches their own data." },
      { question: "Can it work on phones?", answer: "Yes. Every application we build is responsive, and we can also turn it into an installable mobile experience or a full mobile app." },
      { question: "Do I own the source code?", answer: "Yes. You receive the code, the database design and the deployment setup at handover." },
      { question: "Can you build something for my industry?", answer: "We have built for healthcare and e-commerce, and the same approach applies to schools, logistics, finance, real estate and professional services." },
    ],
    guideSlugs: ["web-app-vs-mobile-app-nigeria", "custom-software-vs-saas-nigerian-business", "saas-product-cost-nigeria"],
    caseStudySlugs: ["diagsync", "batamart"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    blurb: "Systems built around your business, not a template.",
    description:
      "Bespoke software for operations that off-the-shelf tools can't handle: workflow systems, record management, automation and APIs, built to scale with you.",
    tags: ["Internal systems", "Automation", "APIs", "SaaS"],
    deliverables: ["Requirements and architecture", "Production application", "Handover and ongoing support"],
    priceFrom: 1500000,
    priceTo: 8000000,
    metaTitle: "Custom Software Development Company in Nigeria | MB CoreX",
    metaDescription:
      "Bespoke software built around how your Nigerian business actually works: workflow systems, automation, SaaS and APIs. You own the code. Serving every state.",
    eyebrow: "Custom Software Development Company in Nigeria",
    h1: "[[Custom software]] built around how you actually work.",
    intro: [
      "Custom software is software written for one business and its exact way of working. MB CoreX is a custom software development company in Nigeria that builds workflow systems, record management, automation, APIs and SaaS products for companies that have outgrown generic tools.",
      "We have shipped DiagSync, a full operating system for diagnostic laboratories, and we apply the same engineering to other industries. We work online with clients across Nigeria, scope carefully before quoting, and hand over the code and documentation so you are never locked in.",
    ],
    whoItsFor: [
      "Companies whose process does not fit off-the-shelf software and who are tired of workarounds.",
      "Businesses paying monthly licences for tools they only half use, or that cannot be adapted.",
      "Founders building a SaaS product who need an engineering partner for the first version.",
      "Organisations that need to connect existing systems, such as accounting, CRM, SMS and payment gateways, into one flow.",
    ],
    included: [
      { title: "Process mapping", text: "We document how work flows today and design the software around it, not the other way round." },
      { title: "Role-based access", text: "Every person sees and does only what their role allows, with an activity trail." },
      { title: "Automation", text: "Repetitive steps such as reminders, reports and approvals handled by the system, not by people." },
      { title: "APIs and integrations", text: "Clean, documented connections to payment gateways, SMS, accounting and third-party systems." },
      { title: "Data migration", text: "We move your existing records from spreadsheets or old systems safely." },
      { title: "Scalable architecture", text: "Built to handle more users and more data as the business grows." },
      { title: "Security by default", text: "Authentication, validation and access control treated as part of the design, not added afterwards." },
      { title: "Full ownership", text: "Source code, documentation and deployment setup are yours at handover." },
    ],
    process: [
      { title: "Discovery and requirements", text: "A structured conversation about goals, users and constraints, written up in plain language." },
      { title: "Architecture and plan", text: "We choose the technology, define milestones and agree what version one includes." },
      { title: "Build in cycles", text: "Working software every one to two weeks, so you can steer early." },
      { title: "Quality and review", text: "Automated tests, human code review and real-user testing before release." },
      { title: "Launch and migration", text: "Controlled go-live with your data moved across and your team trained." },
      { title: "Support and growth", text: "Monitoring, fixes and new features as your needs change." },
    ],
    faqs: [
      { question: "What is custom software development?", answer: "It means software designed and written specifically for your business and its processes, instead of buying a generic product and adapting your process to it." },
      { question: "How much does custom software cost in Nigeria?", answer: "Typical projects at MB CoreX range from about ₦1.5 million to ₦8 million, depending on scope, number of users and integrations. A scoped, fixed-price first version is the safest way to start." },
      { question: "Is custom software better than buying SaaS?", answer: "Not always. If a SaaS product fits your process, it is usually cheaper to start. Custom software wins when your process is distinctive, when you need control of your data, or when licence costs add up over years. Our guide on the topic walks through the decision." },
      { question: "Can you build a SaaS product for me?", answer: "Yes. We build multi-tenant SaaS products with subscription billing and secure data separation, starting with a focused first version." },
      { question: "How long does it take?", answer: "A first version typically takes two to four months. We release in phases so the most valuable parts are in use earlier." },
      { question: "Will I depend on you forever?", answer: "No. You get the full source code, documentation and deployment setup. Any competent developer can continue the work." },
      { question: "Do you work outside Lagos?", answer: "Yes. We serve businesses in every state and the FCT. Meetings, reviews and training happen online." },
      { question: "Can you integrate with our existing software?", answer: "Yes, wherever the other system offers an API or export. We often connect accounting, SMS, payment and CRM tools into one workflow." },
    ],
    guideSlugs: ["custom-software-vs-saas-nigerian-business", "why-nigerian-businesses-need-custom-software-over-templates", "custom-software-vs-off-the-shelf-framework", "choose-software-development-company-nigeria"],
    caseStudySlugs: ["diagsync", "batamart"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    blurb: "iOS and Android apps from a single codebase.",
    description:
      "Cross-platform mobile apps that feel native, ship on both stores, and stay maintainable long after launch.",
    tags: ["iOS", "Android", "Cross-platform", "App Store release"],
    deliverables: ["App architecture and design", "Store-ready builds", "Release and update plan"],
    priceFrom: 1500000,
    priceTo: 8000000,
    metaTitle: "Mobile App Development Company in Nigeria | MB CoreX",
    metaDescription:
      "iOS and Android apps for Nigerian businesses from one codebase: design, build, store release and support. Serving Lagos, Abuja, Port Harcourt and every state.",
    eyebrow: "Mobile App Development Company in Nigeria",
    h1: "[[Mobile apps]] for iOS and Android, built once.",
    intro: [
      "MB CoreX builds cross-platform mobile apps for Nigerian businesses. One codebase produces both an Android and an iOS app, which keeps cost and maintenance down while giving users a smooth, native-feeling experience.",
      "We design for how Nigerian users really use apps: phones with limited storage, uneven connections and data costs that matter. That means light apps, offline-friendly screens and fast loading. We work online with clients in every state and take you from idea to Play Store and App Store release.",
    ],
    whoItsFor: [
      "Startups launching a consumer product such as delivery, fintech, health, education or marketplace apps.",
      "Businesses that want staff or field agents to use an app for orders, visits, inventory or reporting.",
      "Companies with a successful website or web app that now need a mobile experience.",
      "Organisations that want push notifications and a place on their customers' home screens.",
    ],
    included: [
      { title: "Product and UX design", text: "Screens and flows tested on real phones before development starts." },
      { title: "iOS and Android from one codebase", text: "A single team and budget for both stores, with native-feeling performance." },
      { title: "Backend and APIs", text: "The server, database and admin panel your app needs to function." },
      { title: "Payments and sign-in", text: "Card and bank payments, phone or email login and secure account handling." },
      { title: "Push notifications", text: "Reminders, order updates and campaigns that bring users back." },
      { title: "Offline-friendly design", text: "Smart caching so key screens still work on weak connections." },
      { title: "Store submission", text: "We prepare listings, screenshots and compliance details for Google Play and the App Store." },
      { title: "Updates and support", text: "A release plan, bug fixes and new features after launch." },
    ],
    process: [
      { title: "Idea and scope", text: "We define the core problem, the users and the smallest version worth releasing." },
      { title: "Design and prototype", text: "Clickable screens you can try on your own phone." },
      { title: "Build", text: "App, backend and admin panel developed together in short cycles." },
      { title: "Beta testing", text: "Real users try the app on real devices and networks." },
      { title: "Store release", text: "We handle submission, review feedback and launch." },
      { title: "Grow", text: "Analytics-driven improvements and new features." },
    ],
    faqs: [
      { question: "How much does it cost to build a mobile app in Nigeria?", answer: "Typical projects at MB CoreX run from about ₦1.5 million to ₦8 million, depending on features, number of screens, integrations and the backend needed. Simple apps sit at the lower end; apps with payments, real-time features and admin tools sit higher." },
      { question: "Do you build for both iOS and Android?", answer: "Yes. We use a cross-platform approach, so one codebase delivers both apps, which is faster and more economical than building two separate apps." },
      { question: "Should I build a web app or a mobile app first?", answer: "If you need to validate an idea quickly or serve desktop users, start with a web app. If your product depends on the camera, location, push notifications or being on the home screen, start with a mobile app. Our guide compares them in detail." },
      { question: "How long does it take to build an app?", answer: "A focused first version usually takes eight to sixteen weeks including testing and store review." },
      { question: "Will the app work with poor internet?", answer: "We design for it with light screens, caching and clear loading states, so the core experience keeps working on weaker connections." },
      { question: "Who owns the app?", answer: "You do. The code, design files and store accounts belong to your business." },
      { question: "Do you help with Play Store and App Store approval?", answer: "Yes. We prepare the listing, assets and policy details and handle review feedback." },
      { question: "Can you build the backend too?", answer: "Yes. We build the server, database, admin dashboard and APIs your app depends on." },
    ],
    guideSlugs: ["mobile-app-cost-nigeria-2026", "web-app-vs-mobile-app-nigeria", "choose-software-development-company-nigeria"],
    caseStudySlugs: ["batamart", "diagsync"],
  },
  {
    slug: "google-seo",
    title: "Google SEO",
    blurb: "In-depth SEO so your business shows up on Google.",
    description:
      "A full, hands-on SEO programme designed to make your business visible where customers already search. We find the searches that bring buyers, fix what holds your site back, and build the content and authority that move you up the results.",
    tags: ["Keyword research", "Technical SEO", "On-page SEO", "Content", "Link building", "Reporting"],
    deliverables: [
      "Full site and competitor audit",
      "Keyword and search-intent map",
      "Technical fixes: speed, indexing, structured data",
      "On-page optimisation and new content",
      "Authority and link building",
      "Monthly ranking and traffic reports",
    ],
    priceFrom: 150000,
    priceTo: 1000000,
    priceNote: "per project or monthly retainer",
    metaTitle: "SEO Company in Nigeria | Google SEO Services | MB CoreX",
    metaDescription:
      "In-depth Google SEO for Nigerian businesses: keyword research, technical SEO, content and link building to rank in Lagos, Abuja and every state. Monthly reports.",
    eyebrow: "SEO Company in Nigeria",
    h1: "[[Google SEO]] that puts your business in front of buyers.",
    intro: [
      "MB CoreX is an SEO company in Nigeria that builds software for a living, which gives our SEO work an unusual advantage: we fix the technical problems ourselves. Speed, indexing, structured data and site architecture are not tickets we hand to someone else; we solve them directly in the code.",
      "Our Google SEO service is designed for businesses that sell online or serve customers across Nigeria and do not rely on a walk-in shop. We find the searches your buyers use in every state, build pages that deserve to rank, earn the authority that moves you up, and report in plain numbers every month.",
    ],
    whoItsFor: [
      "Online and service businesses that want enquiries from Google across Nigeria, not only one city.",
      "Companies with a website that gets little or no traffic from search.",
      "Businesses launching a new site who want SEO built in before launch.",
      "Brands competing against established players for terms such as software, web design, logistics, healthcare or education services.",
    ],
    included: [
      { title: "Full SEO audit", text: "Technical health, content gaps, competitor strengths and quick wins, delivered as a prioritised plan." },
      { title: "Keyword and intent research", text: "The exact phrases Nigerian buyers type, grouped by intent and by state or city where it matters." },
      { title: "Technical SEO", text: "Page speed, mobile usability, crawling, indexing, redirects, canonical tags and structured data." },
      { title: "On-page optimisation", text: "Titles, descriptions, headings, internal links and copy aligned to what each page should rank for." },
      { title: "Content that ranks", text: "Service pages, guides and location pages written to be genuinely useful, not padded." },
      { title: "Authority building", text: "Ethical link building, directory listings and mentions that signal trust to Google." },
      { title: "Online-first visibility", text: "Strategies for businesses without a shop: service-area pages, reviews, profiles and citations that do not need a physical location." },
      { title: "Monthly reporting", text: "Rankings, traffic, enquiries and next steps explained in plain language, with no jargon." },
    ],
    process: [
      { title: "Audit and baseline", text: "We measure where you stand today in rankings, traffic and technical health." },
      { title: "Strategy", text: "We map the keywords, pages and competitors that matter, and agree priorities." },
      { title: "Fix the foundations", text: "Technical issues and on-page basics are fixed first because they unlock everything else." },
      { title: "Create and publish", text: "New service, location and guide pages go live on a steady schedule." },
      { title: "Build authority", text: "We earn links and mentions that make your site trusted." },
      { title: "Measure and refine", text: "Monthly reports show what worked, and we double down on it." },
    ],
    faqs: [
      { question: "How much does SEO cost in Nigeria?", answer: "At MB CoreX, SEO typically ranges from about ₦150,000 for a one-off audit and fix to ₦1,000,000 for a full monthly programme, depending on competition, site size and how much content is needed. We recommend starting with an audit so you can see exactly what is needed." },
      { question: "How long does SEO take to work?", answer: "Technical fixes can show effects within weeks. For competitive searches, expect three to six months to see steady movement and longer for the most competitive terms. Anyone promising first-page results in days is not being straight with you." },
      { question: "Can you get my business to the top of Google?", answer: "We cannot guarantee a specific position, and no honest SEO provider can, because Google decides rankings. What we do is remove what holds you back, build pages and authority that deserve to rank, and measure progress openly." },
      { question: "Does my business need a physical address to rank?", answer: "No. Google Business Profile is limited to businesses that meet customers in person, but a website can rank for searches across Nigeria without one. Service pages, location-relevant content, reviews and strong technical SEO do the work for online businesses." },
      { question: "Can you help me rank in cities like Lagos, Abuja and Port Harcourt?", answer: "Yes. We build location-relevant pages and content for the cities and states you serve, with useful local detail rather than copy-and-paste text." },
      { question: "What is the difference between SEO and Google Ads?", answer: "Ads show your business while you pay for each click and stop when you stop paying. SEO builds organic visibility that keeps working. Many businesses use both: ads for immediate leads, SEO for lasting growth." },
      { question: "Do you do SEO for websites you did not build?", answer: "Yes. We audit and improve any website. If the site's platform limits what is possible, we will tell you honestly and suggest options." },
      { question: "How will I know it is working?", answer: "You get a monthly report covering rankings, organic traffic, enquiries and the work completed, along with what we plan next." },
    ],
    guideSlugs: ["how-to-rank-on-google-nigeria", "seo-cost-nigeria-2026", "local-seo-nigeria-online-business", "core-web-vitals-nigeria-mobile-speed"],
    caseStudySlugs: ["reene-medical-diagnostics"],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function getServiceByTitle(title: string) {
  return services.find((service) => service.title === title)
}

/** Compact naira formatting: 800000 -> ₦800,000, 12000000 -> ₦12 million. */
export function formatNaira(amount: number) {
  if (amount >= 1_000_000) {
    const millions = amount / 1_000_000
    const rounded = Number.isInteger(millions) ? millions : Number(millions.toFixed(1))
    return `₦${rounded} million`
  }
  return `₦${amount.toLocaleString("en-NG")}`
}

export function formatServiceBand(service: Pick<Service, "priceFrom" | "priceTo">) {
  return `${formatNaira(service.priceFrom)} – ${formatNaira(service.priceTo)}`
}
