import type { BlogPost } from "./insights-restored"

const author = { authorName: "Martin Blaze", authorRole: "Founder, MB CoreX" }

export const newPosts: BlogPost[] = [
  {
    slug: "how-to-rank-on-google-nigeria",
    title: "How to Rank on Google in Nigeria: A Practical SEO Guide for 2026",
    excerpt:
      "A step-by-step plan for getting a Nigerian business website onto the first page of Google: the searches to target, the technical basics, the content that ranks and how long it realistically takes.",
    category: "SEO & Growth",
    tags: ["SEO", "Google", "Nigeria"],
    ...author,
    publishedAt: "2026-10-02",
    image: "/images/blog/how-to-rank-on-google-nigeria.jpg",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Most Nigerian business websites are invisible on Google, and the reason is rarely mysterious. The site is slow on mobile data, nobody wrote pages for the searches buyers actually type, and nothing tells Google the business can be trusted. The good news is that each of those problems is fixable, and fixing them in the right order is what search engine optimisation really is.",
      },
      { type: "heading", text: "1. Start with what your buyers type, not what you sell" },
      {
        type: "paragraph",
        text: "Write down the questions and phrases a customer would use before they know your name. A clinic is not searched for as a 'healthcare solutions provider'; people type 'MRI scan price in Abuja'. A software company is searched for as 'web developer in Lagos' or 'mobile app developer Nigeria'. Group these phrases by intent: people who want to buy now, people comparing options, and people learning. Each group needs its own page.",
      },
      { type: "heading", text: "2. Give every important phrase its own page" },
      {
        type: "paragraph",
        text: "A single 'Services' page cannot rank for five different searches. Create one page per service, and where it genuinely applies, one page per location you serve with useful detail for that place. Each page should have one clear topic, a descriptive title, a heading that matches the search, and enough real information to answer the question completely.",
      },
      { type: "heading", text: "3. Get the technical foundation right" },
      {
        type: "list",
        items: [
          "Speed on mobile: most Nigerian visitors arrive on a phone, often on mobile data. Compress images, avoid heavy scripts and test with Google PageSpeed Insights.",
          "Mobile layout: text must be readable and buttons tappable without zooming.",
          "HTTPS everywhere: a secure connection is a basic trust signal.",
          "Crawlability: a sitemap, a clean robots.txt, sensible URLs and no broken pages, so Google can find and index everything.",
          "Structured data: markup that tells Google what the business is, what it offers and which questions the page answers.",
        ],
      },
      { type: "heading", text: "4. Write titles and descriptions that earn the click" },
      {
        type: "paragraph",
        text: "The title tag and meta description are your advert on the results page. Put the main phrase near the start of the title, keep it under about 60 characters, and write the description as a one-sentence reason to click, including a concrete detail such as a price range, a location or a benefit.",
      },
      { type: "heading", text: "5. Publish content that answers the question better than anyone else" },
      {
        type: "paragraph",
        text: "Pages that rank do the job the searcher came for. If someone searches for the cost of a service in Nigeria, give them real figures in naira, explain what changes the price and say what is not included. Specific, honest, Nigeria-aware content beats generic text copied from foreign websites, and it earns the links and shares that raise rankings.",
      },
      { type: "heading", text: "6. Earn trust from other websites" },
      {
        type: "paragraph",
        text: "Google treats links from reputable sites as votes. Listings in respected business directories, features in local publications, partnerships with other companies and genuinely useful guides that others cite all help. Avoid buying bulk links; it is a fast way to lose rankings.",
      },
      { type: "heading", text: "7. Measure with Google Search Console" },
      {
        type: "paragraph",
        text: "Search Console is free and shows which searches already bring impressions, which pages get clicks and which pages have technical problems. Check it monthly. Pages that appear on page two for a valuable phrase are your best opportunities: improve them first.",
      },
      { type: "heading", text: "How long does it take?" },
      {
        type: "paragraph",
        text: "Technical fixes can change results within weeks. For competitive phrases, steady movement usually takes three to six months, and the most competitive terms take longer. Anyone promising the top spot in a few days is selling something other than SEO.",
      },
      { type: "heading", text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Targeting only very broad phrases such as 'software company' instead of specific ones such as 'custom software development company in Port Harcourt'.",
          "Copying text from other websites or using the same text on many pages.",
          "Ignoring speed and mobile usability.",
          "Publishing a site and never updating it.",
          "Expecting results without measuring them.",
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Google SEO service", href: "/services/google-seo" },
          { label: "How much does SEO cost in Nigeria?", href: "/insights/seo-cost-nigeria-2026" },
          { label: "Local SEO for online businesses", href: "/insights/local-seo-nigeria-online-business" },
        ],
      },
    ],
  },
  {
    slug: "seo-cost-nigeria-2026",
    title: "How Much Does SEO Cost in Nigeria? (2026 Guide)",
    excerpt:
      "What Nigerian businesses actually pay for SEO, what drives the price up or down, how one-off audits differ from monthly retainers, and the warning signs of providers who overpromise.",
    category: "Pricing & Comparisons",
    tags: ["SEO", "Pricing", "Nigeria"],
    ...author,
    publishedAt: "2026-10-03",
    image: "/images/blog/seo-cost-nigeria-2026.jpg",
    body: [
      {
        type: "paragraph",
        text: "SEO pricing in Nigeria varies enormously, and cheap offers are common. The honest answer starts with what you are buying: a one-off audit and fixes, or an ongoing programme that creates content and builds authority month after month. They are different products with very different prices.",
      },
      { type: "heading", text: "Typical ranges we quote" },
      {
        type: "list",
        items: [
          "SEO audit and priority fixes: from about ₦150,000. A full review of technical health, content gaps and competitors, with a prioritised action plan and the most important fixes implemented.",
          "Foundation programme: roughly ₦250,000 to ₦500,000 per month. Ongoing technical work, on-page optimisation, new pages and reporting for a small or medium site.",
          "Growth programme: up to about ₦1,000,000 per month for competitive markets, larger sites, heavy content production and active link building.",
        ],
      },
      {
        type: "paragraph",
        text: "These are indicative ranges, not a price list. The right number depends on scope, and we recommend starting with an audit so you can see exactly what your site needs before committing to a retainer.",
      },
      { type: "heading", text: "What drives the price" },
      {
        type: "list",
        items: [
          "Competition: ranking for 'bakery in a small town' is cheaper than ranking for 'software company in Lagos'.",
          "Site condition: a slow, broken or badly structured site needs technical work before anything else will help.",
          "Content volume: more pages and guides mean more writing, research and editing.",
          "Number of locations: serving several states needs location-relevant content for each, written properly.",
          "Authority gap: if competitors have far more links and mentions, closing that gap takes sustained effort.",
        ],
      },
      { type: "heading", text: "SEO or Google Ads?" },
      {
        type: "paragraph",
        text: "Ads buy immediate visibility and stop the moment you stop paying. SEO builds visibility that keeps working. Many businesses use ads for quick leads while SEO matures. If budget allows only one and you can wait a few months, SEO usually has the better long-term return.",
      },
      { type: "heading", text: "Red flags when hiring an SEO provider" },
      {
        type: "list",
        items: [
          "Guaranteed first-page or number-one rankings. No one controls Google's results.",
          "Prices far below the market with vague descriptions of the work.",
          "Bulk link purchases or networks of low-quality sites.",
          "No access to your own analytics and Search Console.",
          "No reporting, or reports full of jargon and vanity numbers.",
        ],
      },
      { type: "heading", text: "What a good SEO report shows" },
      {
        type: "paragraph",
        text: "Clear numbers on organic visits, rankings for the phrases that matter, enquiries from search and a plain list of what was done and what comes next. If you cannot understand the report, you cannot judge the work.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Google SEO service and pricing", href: "/services/google-seo" },
          { label: "Pricing for every service", href: "/pricing" },
          { label: "How to rank on Google in Nigeria", href: "/insights/how-to-rank-on-google-nigeria" },
        ],
      },
    ],
  },
  {
    slug: "local-seo-nigeria-online-business",
    title: "Local SEO in Nigeria for Online Businesses (No Shop Required)",
    excerpt:
      "Google Business Profile is not available to online-only companies. Here is how businesses without a walk-in shop can still rank for searches in Lagos, Abuja, Port Harcourt and every other part of Nigeria.",
    category: "SEO & Growth",
    tags: ["Local SEO", "SEO", "Nigeria"],
    ...author,
    publishedAt: "2026-10-04",
    image: "/images/blog/local-seo-nigeria-online-business.jpg",
    body: [
      {
        type: "paragraph",
        text: "Most local SEO advice starts with 'claim your Google Business Profile'. That works for restaurants, clinics and shops, but Google's own guidelines say an online-only business with no physical location that customers visit, and no in-person visits to customers, is not eligible. If that describes your company, you need a different plan, and it is a perfectly workable one.",
      },
      { type: "heading", text: "Why it still matters where you say you work" },
      {
        type: "paragraph",
        text: "People search with places in their queries: 'web developer in Abuja', 'mobile app company Port Harcourt', 'accounting software Kano'. A website can rank for these searches without a map listing if it has relevant, helpful pages that show it serves that place.",
      },
      { type: "heading", text: "What to do instead" },
      {
        type: "list",
        items: [
          "Create genuine location pages. Each should explain how you work with businesses in that state, the kinds of companies there, examples of what you could build for them and answers to local questions. Do not clone the same text with a different place name; Google treats near-duplicate pages as spam.",
          "Be honest about being online. Say plainly that you serve clients remotely. Honest pages convert better and avoid misleading searchers.",
          "Use structured data to state the countries, states or regions you serve.",
          "Earn reviews on platforms that accept online businesses, such as business directories and software review sites, and showcase client feedback on your own site.",
          "Get listed in respected directories and in Nigerian business and technology publications.",
          "Build service pages for each thing you sell, and link them to the location pages and relevant guides.",
          "Consider Google Ads for geographic targeting if you need leads before organic rankings mature.",
        ],
      },
      { type: "heading", text: "If you do meet customers in person" },
      {
        type: "paragraph",
        text: "A business that serves customers at a physical location during set hours, or that visits customers at their premises, may qualify for a Business Profile. Check Google's current eligibility rules, because they are strict and change from time to time, and never use a fake address or a rented mailbox. That can get a profile suspended.",
      },
      { type: "heading", text: "Make every location page worth reading" },
      {
        type: "paragraph",
        text: "The test is simple: would the page help someone in that state even if it had no connection to a search engine? Mention the major cities, the industries that dominate, the specific problems those businesses face and what a solution might look like. That depth is what separates a useful regional page from a spammy one.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Areas we serve across Nigeria", href: "/locations" },
          { label: "Google SEO service", href: "/services/google-seo" },
          { label: "How to rank on Google in Nigeria", href: "/insights/how-to-rank-on-google-nigeria" },
        ],
      },
    ],
  },
  {
    slug: "core-web-vitals-nigeria-mobile-speed",
    title: "Why Website Speed Matters More in Nigeria: Mobile Data, Phones and Core Web Vitals",
    excerpt:
      "Most Nigerian visitors browse on a phone over a mobile connection. Here is what Google's Core Web Vitals measure, why they matter for rankings and sales, and the practical fixes that make a site feel instant.",
    category: "SEO & Growth",
    tags: ["Website Speed", "Core Web Vitals", "SEO"],
    ...author,
    publishedAt: "2026-10-05",
    image: "/images/blog/core-web-vitals-nigeria-mobile-speed.jpg",
    body: [
      {
        type: "paragraph",
        text: "A page that opens instantly on a fast office connection can feel painfully slow on a mid-range phone over mobile data. Because most Nigerian customers will meet your website exactly that way, speed is not a technical nicety. It decides whether a visitor stays, whether Google trusts the page and whether the enquiry ever arrives.",
      },
      { type: "heading", text: "What Core Web Vitals measure" },
      {
        type: "list",
        items: [
          "Largest Contentful Paint (LCP): how quickly the main content appears. Aim for the main image or heading to show within about 2.5 seconds.",
          "Interaction to Next Paint (INP): how quickly the page responds when someone taps or clicks. Pages should react almost immediately.",
          "Cumulative Layout Shift (CLS): how much the layout jumps while loading. Buttons that move just as you tap them are a common cause of lost sales.",
        ],
      },
      { type: "heading", text: "Why it affects rankings and revenue" },
      {
        type: "paragraph",
        text: "Google uses page experience signals, including Core Web Vitals, as part of how it assesses pages. More importantly, slow pages lose visitors before they read a word, and mobile data costs money, so heavy pages make people leave. Faster pages convert better.",
      },
      { type: "heading", text: "The fixes that matter most" },
      {
        type: "list",
        items: [
          "Compress and correctly size images, and use modern formats such as WebP or AVIF.",
          "Load only the scripts a page needs and delay the rest.",
          "Use a content delivery network so files come from a nearby server.",
          "Choose fast, reliable hosting rather than the cheapest shared plan.",
          "Avoid heavy page builders and plugin pile-ups that add hundreds of kilobytes of unused code.",
          "Reserve space for images and embeds so the layout does not jump.",
          "Use lightweight fonts and limit the number of font files.",
        ],
      },
      { type: "heading", text: "How to test" },
      {
        type: "paragraph",
        text: "Run your key pages through Google PageSpeed Insights and check the mobile result, not the desktop one. Search Console also reports Core Web Vitals for real visitors once your site has enough traffic. Test on an actual mid-range phone as well, because lab scores can flatter a site.",
      },
      {
        type: "paragraph",
        text: "Every website we build is designed with these limits in mind: lean code, optimised images and a global delivery network, so the first impression is fast no matter where in Nigeria the visitor is.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Web development service", href: "/services/web-development" },
          { label: "Google SEO service", href: "/services/google-seo" },
          { label: "Website cost guide", href: "/insights/website-development-cost-nigeria-2026" },
        ],
      },
    ],
  },
  {
    slug: "mobile-app-cost-nigeria-2026",
    title: "How Much Does It Cost to Build a Mobile App in Nigeria? (2026)",
    excerpt:
      "A realistic breakdown of mobile app development costs in Nigeria: what drives the price, what a first version includes, the running costs after launch and how to avoid overspending.",
    category: "Pricing & Comparisons",
    tags: ["Mobile Apps", "Pricing", "Nigeria"],
    ...author,
    publishedAt: "2026-10-06",
    image: "/images/blog/mobile-app-cost-nigeria-2026.jpg",
    body: [
      {
        type: "paragraph",
        text: "Quotes for the same app can differ by millions of naira, which makes the question feel unanswerable. It becomes manageable when you split the cost into what the app does, what it needs behind it and what happens after launch.",
      },
      { type: "heading", text: "Typical ranges we quote" },
      {
        type: "list",
        items: [
          "Simple app (a few screens, sign-in, basic content or booking): around ₦1.5 million to ₦3 million.",
          "Standard app (accounts, payments, notifications, an admin panel): around ₦3 million to ₦6 million.",
          "Complex app (real-time features, maps, multiple user roles, several integrations): ₦6 million to ₦8 million or more.",
        ],
      },
      {
        type: "paragraph",
        text: "These are indicative ranges for a well-scoped first version. The final number comes from a scoping conversation, not a price tier.",
      },
      { type: "heading", text: "What drives the cost" },
      {
        type: "list",
        items: [
          "Number and complexity of screens and user roles.",
          "Backend and database: almost every real app needs a server, database and admin dashboard behind it, and that work is as significant as the screens.",
          "Integrations: payments, maps, SMS, identity checks and accounting systems each add scope.",
          "Platforms: building separately for Android and iOS roughly doubles the work. A cross-platform approach shares most of the code and reduces cost.",
          "Design quality and testing on real devices and weak connections.",
        ],
      },
      { type: "heading", text: "Costs after launch" },
      {
        type: "list",
        items: [
          "Store accounts: Google Play charges a one-off registration fee and Apple charges an annual developer programme fee.",
          "Hosting and services: servers, databases, notifications and map or SMS usage grow with your users.",
          "Maintenance: operating system updates, bug fixes and security patches are needed every year.",
          "New features: the best products keep improving based on how users behave.",
        ],
      },
      { type: "heading", text: "How to avoid overspending" },
      {
        type: "list",
        items: [
          "Launch a focused first version with only the features that prove the idea.",
          "Consider a web app first if you do not need device features such as the camera or push notifications immediately.",
          "Insist on owning the code and store accounts.",
          "Ask for a fixed price for the first version and a clear process for changes.",
        ],
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Mobile app development service", href: "/services/mobile-app-development" },
          { label: "Web app or mobile app first?", href: "/insights/web-app-vs-mobile-app-nigeria" },
          { label: "Batamart case study", href: "/case-studies/batamart" },
        ],
      },
    ],
  },
  {
    slug: "web-app-vs-mobile-app-nigeria",
    title: "Web App or Mobile App First? How Nigerian Businesses Should Decide",
    excerpt:
      "Should you build a web application or a mobile app first? A clear comparison of cost, speed, reach and features, with a simple rule for choosing the right starting point.",
    category: "Mobile & Web",
    tags: ["Web Applications", "Mobile Apps", "Strategy"],
    ...author,
    publishedAt: "2026-10-07",
    image: "/images/blog/web-app-vs-mobile-app-nigeria.jpg",
    body: [
      {
        type: "paragraph",
        text: "Founders often assume 'we need an app' means a mobile app on the Play Store. Sometimes it does. Often a web application reaches more people sooner, for less money. The right choice depends on what your product must do and who will use it.",
      },
      { type: "heading", text: "When a web app is the better start" },
      {
        type: "list",
        items: [
          "Staff will use it at a desk or on a laptop, such as dashboards, admin tools and back-office systems.",
          "You need to launch and test the idea quickly and cheaply.",
          "Customers must be able to use it without installing anything, such as booking pages, portals and marketplaces.",
          "You want to be found on Google. Web apps and websites can be indexed; app store listings are a separate channel.",
        ],
      },
      { type: "heading", text: "When a mobile app is the better start" },
      {
        type: "list",
        items: [
          "The product depends on the camera, GPS, contacts or Bluetooth.",
          "Push notifications are central, such as delivery updates or reminders.",
          "You want a permanent place on the customer's home screen and frequent daily use.",
          "Field staff need to work with limited connectivity.",
        ],
      },
      { type: "heading", text: "Cost and speed" },
      {
        type: "paragraph",
        text: "A web app is usually faster and cheaper to launch because there is no store review and one version works everywhere. A cross-platform mobile app shares one codebase across Android and iOS, which is cheaper than two native apps, but still requires store submission and updates.",
      },
      { type: "heading", text: "The best of both" },
      {
        type: "paragraph",
        text: "Many successful products start as a web app, prove demand, then add a mobile app that uses the same backend. Building the backend once and sharing it keeps the later mobile project smaller and cheaper.",
      },
      { type: "heading", text: "A simple rule" },
      {
        type: "paragraph",
        text: "If your product needs device features or daily notifications to work at all, build mobile first. If not, start with the web, learn from real users and add mobile when the numbers justify it.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Web application development", href: "/services/web-applications" },
          { label: "Mobile app development", href: "/services/mobile-app-development" },
          { label: "Mobile app cost guide", href: "/insights/mobile-app-cost-nigeria-2026" },
        ],
      },
    ],
  },
  {
    slug: "choose-software-development-company-nigeria",
    title: "How to Choose a Software Development Company in Nigeria: 10 Questions to Ask",
    excerpt:
      "Hiring the wrong developer is expensive. These ten questions help Nigerian businesses compare software development companies on ownership, process, pricing, communication and long-term support.",
    category: "Business Technology",
    tags: ["Software Development", "Hiring", "Nigeria"],
    ...author,
    publishedAt: "2026-10-08",
    image: "/images/blog/choose-software-development-company-nigeria.jpg",
    body: [
      {
        type: "paragraph",
        text: "Software projects fail far more often because of a poor match between client and developer than because of technology. The right questions, asked before you sign anything, expose most of the risk. Use these ten when comparing any software or web development company, including us.",
      },
      { type: "heading", text: "1. Can I see work you have actually shipped?" },
      {
        type: "paragraph",
        text: "Look for live products you can open and use, not just design mock-ups. Ask what the company built, what the client's problem was and what changed afterwards.",
      },
      { type: "heading", text: "2. Will I own the source code?" },
      {
        type: "paragraph",
        text: "You should receive the source code, design files and hosting access when the work is complete. If a developer keeps the code, you are renting your own product.",
      },
      { type: "heading", text: "3. How do you scope and price the work?" },
      {
        type: "paragraph",
        text: "A serious company asks questions first and quotes after. Be careful of a firm price given in one message with no discovery, and equally of vague hourly quotes with no ceiling.",
      },
      { type: "heading", text: "4. Who will actually do the work?" },
      {
        type: "paragraph",
        text: "Ask who the developers are and whether work is subcontracted. Direct access to the people building your product is a strong sign of accountability.",
      },
      { type: "heading", text: "5. How will we communicate?" },
      {
        type: "paragraph",
        text: "Agree the channel, the frequency of updates and how quickly questions get answers. Weekly demos of working software beat long silences followed by a big reveal.",
      },
      { type: "heading", text: "6. What happens after launch?" },
      {
        type: "paragraph",
        text: "Ask about bug-fix periods, maintenance options and who handles hosting and security updates. Software needs care for as long as it is used.",
      },
      { type: "heading", text: "7. How do you handle security and data?" },
      {
        type: "paragraph",
        text: "Ask how accounts are protected, how data is stored and who can access it. If the answer is a blank stare, keep looking.",
      },
      { type: "heading", text: "8. What if the scope changes?" },
      {
        type: "paragraph",
        text: "Scope always changes. A good partner has a clear, fair process for pricing changes, rather than surprise invoices.",
      },
      { type: "heading", text: "9. Do you work with businesses outside your city?" },
      {
        type: "paragraph",
        text: "Remote delivery works well when the process is disciplined. A company that works online should show how it runs meetings, reviews and handovers without an office visit.",
      },
      { type: "heading", text: "10. Can I speak to a past client?" },
      {
        type: "paragraph",
        text: "References and independent reviews, for instance on business directories, tell you more than any sales page.",
      },
      {
        type: "links",
        heading: "Related",
        items: [
          { label: "Custom software development", href: "/services/custom-software" },
          { label: "See our case studies", href: "/case-studies" },
          { label: "Custom software vs SaaS", href: "/insights/custom-software-vs-saas-nigerian-business" },
        ],
      },
    ],
  },
]
