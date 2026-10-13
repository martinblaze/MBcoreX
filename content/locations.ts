export type Zone = "South West" | "South East" | "South South" | "North Central" | "North East" | "North West"

export type SectorKey =
  | "oil-gas"
  | "agriculture"
  | "commerce"
  | "manufacturing"
  | "education"
  | "tourism"
  | "government"
  | "technology"
  | "logistics"
  | "mining"
  | "healthcare"
  | "finance"
  | "creative"

export type Sector = {
  label: string
  /** Lower-case noun phrase used in running text. */
  phrase: string
  /** Two concrete things we could build for a business in this sector. */
  ideas: { title: string; text: string; service: "web-development" | "web-applications" | "custom-software" | "mobile-app-development" | "google-seo" }[]
}

export const sectors: Record<SectorKey, Sector> = {
  "oil-gas": {
    label: "Oil and gas",
    phrase: "oil and gas services",
    ideas: [
      { title: "Vendor and contractor portals", text: "A secure portal where suppliers submit documents, track approvals and see payment status, replacing email chains.", service: "web-applications" },
      { title: "Field reporting apps", text: "Mobile apps for crews to log inspections, incidents and equipment checks from site, even on weak connections.", service: "mobile-app-development" },
    ],
  },
  agriculture: {
    label: "Agriculture",
    phrase: "farming and agro-processing",
    ideas: [
      { title: "Farm-to-buyer marketplaces", text: "Platforms that connect farmers and aggregators directly to buyers with pricing, orders and delivery tracking.", service: "web-applications" },
      { title: "Produce and inventory tracking", text: "Software that tracks harvests, storage and shipments so nothing is lost between farm and market.", service: "custom-software" },
    ],
  },
  commerce: {
    label: "Trade and retail",
    phrase: "trading and retail",
    ideas: [
      { title: "Online stores with local payments", text: "E-commerce sites that accept card and bank payments, so customers can buy without chatting back and forth.", service: "web-development" },
      { title: "Inventory and sales systems", text: "Custom software that tracks stock, sales and customer balances across shops and warehouses.", service: "custom-software" },
    ],
  },
  manufacturing: {
    label: "Manufacturing",
    phrase: "manufacturing and production",
    ideas: [
      { title: "Production and stock systems", text: "Software to follow raw materials, production runs and finished goods from one dashboard.", service: "custom-software" },
      { title: "Distributor ordering portals", text: "A web portal where distributors place orders, check availability and download invoices.", service: "web-applications" },
    ],
  },
  education: {
    label: "Education",
    phrase: "schools and tertiary institutions",
    ideas: [
      { title: "School and student portals", text: "Admissions, results, fees and parent communication in one secure web portal.", service: "web-applications" },
      { title: "Learning and exam tools", text: "Online learning, assessments and attendance tools tailored to how your institution teaches.", service: "custom-software" },
    ],
  },
  tourism: {
    label: "Tourism and hospitality",
    phrase: "hotels, events and tourism",
    ideas: [
      { title: "Booking websites", text: "Fast, attractive websites with online enquiries and bookings that rank for visitors planning a trip.", service: "web-development" },
      { title: "Event and ticketing platforms", text: "Web and mobile ticketing with payments, QR check-in and attendee reporting.", service: "web-applications" },
    ],
  },
  government: {
    label: "Government and institutions",
    phrase: "public-sector and institutional work",
    ideas: [
      { title: "Reporting dashboards", text: "Dashboards that pull scattered data into clear, exportable reports for decision makers.", service: "web-applications" },
      { title: "Case and records systems", text: "Secure systems for managing applications, approvals and records with a full audit trail.", service: "custom-software" },
    ],
  },
  technology: {
    label: "Technology and startups",
    phrase: "startups and technology companies",
    ideas: [
      { title: "SaaS first versions", text: "A focused, scalable first release of your product, with subscription billing and secure tenant data.", service: "custom-software" },
      { title: "Search-ready company sites", text: "A credible, fast site with technical SEO built in so investors and customers can find you.", service: "web-development" },
    ],
  },
  logistics: {
    label: "Logistics and transport",
    phrase: "logistics and transport",
    ideas: [
      { title: "Delivery and fleet tracking", text: "Dispatch, status updates and proof-of-delivery in one system your customers can follow.", service: "custom-software" },
      { title: "Driver and rider apps", text: "Mobile apps for drivers and riders to accept jobs, navigate and confirm delivery.", service: "mobile-app-development" },
    ],
  },
  mining: {
    label: "Mining and solid minerals",
    phrase: "mining and solid minerals",
    ideas: [
      { title: "Site and compliance records", text: "Software to keep licences, site logs and inspection records organised and ready for review.", service: "custom-software" },
      { title: "Investor-ready websites", text: "Professional websites that present operations clearly to partners and buyers.", service: "web-development" },
    ],
  },
  healthcare: {
    label: "Healthcare",
    phrase: "clinics and diagnostic centres",
    ideas: [
      { title: "Patient and lab systems", text: "Software for records, test workflows and results, like the DiagSync platform we built for diagnostic labs.", service: "custom-software" },
      { title: "Trust-first clinic websites", text: "Websites that explain services clearly and show up when patients search, like Reene Medical Diagnostics.", service: "web-development" },
    ],
  },
  finance: {
    label: "Finance and professional services",
    phrase: "finance and professional services",
    ideas: [
      { title: "Client portals", text: "Secure logins where clients view documents, statements and progress without chasing emails.", service: "web-applications" },
      { title: "Authority-building SEO", text: "Content and technical SEO that helps professional firms rank for the services they actually sell.", service: "google-seo" },
    ],
  },
  creative: {
    label: "Creative industry and media",
    phrase: "the creative and entertainment industry",
    ideas: [
      { title: "Portfolio and booking sites", text: "Striking websites that showcase work and take bookings and enquiries directly.", service: "web-development" },
      { title: "Fan and member apps", text: "Mobile apps for communities, content and paid memberships.", service: "mobile-app-development" },
    ],
  },
}

export type Location = {
  slug: string
  name: string
  kind: "state" | "fct"
  capital: string
  zone: Zone
  /** Major cities and towns, used naturally in copy. */
  cities: string[]
  /** The economic activity that shapes what businesses there need. */
  sectors: [SectorKey, SectorKey, SectorKey]
  /** One factual sentence of local context. */
  context: string
}

export const locations: Location[] = [
  // ---- South West -----------------------------------------------------
  { slug: "lagos", name: "Lagos", kind: "state", capital: "Ikeja", zone: "South West", cities: ["Ikeja", "Lekki", "Victoria Island", "Yaba", "Surulere", "Ikorodu"], sectors: ["commerce", "technology", "finance"], context: "Lagos is Nigeria's largest commercial centre and home to its busiest startup and fintech scene, which means competition for attention online is the toughest in the country." },
  { slug: "ogun", name: "Ogun", kind: "state", capital: "Abeokuta", zone: "South West", cities: ["Abeokuta", "Sagamu", "Ijebu-Ode", "Ota"], sectors: ["manufacturing", "education", "commerce"], context: "Ogun State has one of the largest industrial clusters in Nigeria around Ota and Sagamu, alongside a strong university and trading community." },
  { slug: "oyo", name: "Oyo", kind: "state", capital: "Ibadan", zone: "South West", cities: ["Ibadan", "Ogbomosho", "Oyo", "Saki"], sectors: ["education", "commerce", "agriculture"], context: "Oyo State centres on Ibadan, one of Nigeria's largest cities, with a long academic tradition and an active trading and farming economy." },
  { slug: "osun", name: "Osun", kind: "state", capital: "Osogbo", zone: "South West", cities: ["Osogbo", "Ile-Ife", "Ilesa", "Ede"], sectors: ["education", "tourism", "commerce"], context: "Osun State combines university communities around Ile-Ife with the cultural tourism built around Osogbo and its sacred grove." },
  { slug: "ondo", name: "Ondo", kind: "state", capital: "Akure", zone: "South West", cities: ["Akure", "Ondo", "Owo", "Ore"], sectors: ["agriculture", "education", "commerce"], context: "Ondo State is a major cocoa-growing area with a growing education and services sector around Akure." },
  { slug: "ekiti", name: "Ekiti", kind: "state", capital: "Ado-Ekiti", zone: "South West", cities: ["Ado-Ekiti", "Ikere", "Ijero", "Ikole"], sectors: ["education", "agriculture", "government"], context: "Ekiti State is known for its concentration of schools and universities and a farming economy around its highland towns." },

  // ---- South East -----------------------------------------------------
  { slug: "enugu", name: "Enugu", kind: "state", capital: "Enugu", zone: "South East", cities: ["Enugu", "Nsukka", "Agbani", "Oji River"], sectors: ["education", "commerce", "technology"], context: "Enugu State has a large student population around Nsukka and Enugu city and an increasingly visible technology and services community." },
  { slug: "anambra", name: "Anambra", kind: "state", capital: "Awka", zone: "South East", cities: ["Awka", "Onitsha", "Nnewi", "Ekwulobia"], sectors: ["commerce", "manufacturing", "logistics"], context: "Anambra State is a trading powerhouse, with Onitsha's markets and Nnewi's manufacturing and auto-parts industry driving much of its economy." },
  { slug: "imo", name: "Imo", kind: "state", capital: "Owerri", zone: "South East", cities: ["Owerri", "Orlu", "Okigwe", "Mbaise"], sectors: ["commerce", "tourism", "creative"], context: "Imo State's capital Owerri has a lively commercial, hospitality and entertainment scene that depends heavily on being discovered online." },
  { slug: "abia", name: "Abia", kind: "state", capital: "Umuahia", zone: "South East", cities: ["Umuahia", "Aba", "Arochukwu", "Ohafia"], sectors: ["manufacturing", "commerce", "creative"], context: "Abia State's Aba is famous for its garment, footwear and leather workshops, a manufacturing base that increasingly sells beyond the local market." },
  { slug: "ebonyi", name: "Ebonyi", kind: "state", capital: "Abakaliki", zone: "South East", cities: ["Abakaliki", "Afikpo", "Onueke", "Ishielu"], sectors: ["agriculture", "mining", "commerce"], context: "Ebonyi State is known for rice farming and processing and has solid-mineral resources that attract trade and investment." },

  // ---- South South ----------------------------------------------------
  { slug: "rivers", name: "Rivers", kind: "state", capital: "Port Harcourt", zone: "South South", cities: ["Port Harcourt", "Obio-Akpor", "Bonny", "Ahoada"], sectors: ["oil-gas", "logistics", "commerce"], context: "Rivers State, centred on Port Harcourt, is the hub of Nigeria's oil and gas services industry, which shapes demand for contractor, logistics and compliance software." },
  { slug: "delta", name: "Delta", kind: "state", capital: "Asaba", zone: "South South", cities: ["Asaba", "Warri", "Sapele", "Ughelli"], sectors: ["oil-gas", "commerce", "logistics"], context: "Delta State pairs the oil and gas activity around Warri with the fast-growing commercial and government base in Asaba." },
  { slug: "akwa-ibom", name: "Akwa Ibom", kind: "state", capital: "Uyo", zone: "South South", cities: ["Uyo", "Eket", "Ikot Ekpene", "Oron"], sectors: ["oil-gas", "tourism", "commerce"], context: "Akwa Ibom State combines offshore oil and gas activity around Eket with a growing hospitality and events scene in Uyo." },
  { slug: "cross-river", name: "Cross River", kind: "state", capital: "Calabar", zone: "South South", cities: ["Calabar", "Ugep", "Ikom", "Ogoja"], sectors: ["tourism", "agriculture", "creative"], context: "Cross River State is Nigeria's best-known tourism destination, with Calabar's festivals and cultural events drawing visitors who plan their trips online." },
  { slug: "bayelsa", name: "Bayelsa", kind: "state", capital: "Yenagoa", zone: "South South", cities: ["Yenagoa", "Brass", "Ogbia", "Sagbama"], sectors: ["oil-gas", "agriculture", "government"], context: "Bayelsa State is an oil and gas producing state in the Niger Delta with a fishing and farming economy along its waterways." },
  { slug: "edo", name: "Edo", kind: "state", capital: "Benin City", zone: "South South", cities: ["Benin City", "Auchi", "Ekpoma", "Uromi"], sectors: ["commerce", "education", "creative"], context: "Edo State centres on Benin City, a historic cultural capital with a busy trading economy and several universities." },

  // ---- North Central --------------------------------------------------
  { slug: "abuja", name: "Abuja (FCT)", kind: "fct", capital: "Abuja", zone: "North Central", cities: ["Garki", "Wuse", "Maitama", "Gwarinpa", "Kubwa"], sectors: ["government", "technology", "finance"], context: "The Federal Capital Territory hosts government institutions, embassies, NGOs and a growing technology and consulting community, so buyers there expect polished, credible digital presence." },
  { slug: "kwara", name: "Kwara", kind: "state", capital: "Ilorin", zone: "North Central", cities: ["Ilorin", "Offa", "Omu-Aran", "Jebba"], sectors: ["education", "agriculture", "commerce"], context: "Kwara State sits at the meeting point of the north and south, with Ilorin's universities and a strong agricultural base." },
  { slug: "kogi", name: "Kogi", kind: "state", capital: "Lokoja", zone: "North Central", cities: ["Lokoja", "Okene", "Kabba", "Idah"], sectors: ["mining", "agriculture", "logistics"], context: "Kogi State, where the Niger and Benue rivers meet at Lokoja, is a transit and trading corridor with mining and farming activity." },
  { slug: "niger", name: "Niger", kind: "state", capital: "Minna", zone: "North Central", cities: ["Minna", "Bida", "Suleja", "Kontagora"], sectors: ["agriculture", "logistics", "commerce"], context: "Niger State is Nigeria's largest state by area, with major farmland, hydropower dams and trade routes into the capital region." },
  { slug: "benue", name: "Benue", kind: "state", capital: "Makurdi", zone: "North Central", cities: ["Makurdi", "Gboko", "Otukpo", "Katsina-Ala"], sectors: ["agriculture", "commerce", "education"], context: "Benue State is widely called the food basket of the nation for its yams, grains and other crops, with Makurdi as its trading centre." },
  { slug: "plateau", name: "Plateau", kind: "state", capital: "Jos", zone: "North Central", cities: ["Jos", "Bukuru", "Pankshin", "Shendam"], sectors: ["mining", "tourism", "agriculture"], context: "Plateau State, centred on Jos, has a mining heritage, a cool-climate tourism appeal and a productive farming sector." },
  { slug: "nasarawa", name: "Nasarawa", kind: "state", capital: "Lafia", zone: "North Central", cities: ["Lafia", "Keffi", "Karu", "Nasarawa"], sectors: ["mining", "agriculture", "commerce"], context: "Nasarawa State borders the FCT, with solid-mineral resources, farming and a fast-growing commuter economy around Karu and Keffi." },

  // ---- North West -----------------------------------------------------
  { slug: "kano", name: "Kano", kind: "state", capital: "Kano", zone: "North West", cities: ["Kano", "Wudil", "Gwarzo", "Rano"], sectors: ["commerce", "manufacturing", "agriculture"], context: "Kano is the long-standing commercial centre of the north, with large markets, textile and manufacturing businesses and a huge, young population online." },
  { slug: "kaduna", name: "Kaduna", kind: "state", capital: "Kaduna", zone: "North West", cities: ["Kaduna", "Zaria", "Kafanchan", "Kachia"], sectors: ["education", "manufacturing", "commerce"], context: "Kaduna State is home to Ahmadu Bello University in Zaria and an established industrial and trading economy." },
  { slug: "katsina", name: "Katsina", kind: "state", capital: "Katsina", zone: "North West", cities: ["Katsina", "Daura", "Funtua", "Malumfashi"], sectors: ["agriculture", "commerce", "education"], context: "Katsina State has a strong farming economy and an old trading city that connects northern Nigeria to markets across the region." },
  { slug: "sokoto", name: "Sokoto", kind: "state", capital: "Sokoto", zone: "North West", cities: ["Sokoto", "Wurno", "Tambuwal", "Gwadabawa"], sectors: ["agriculture", "commerce", "education"], context: "Sokoto State is known for livestock, leather and trade, and for its historic role as a centre of learning." },
  { slug: "kebbi", name: "Kebbi", kind: "state", capital: "Birnin Kebbi", zone: "North West", cities: ["Birnin Kebbi", "Argungu", "Yauri", "Zuru"], sectors: ["agriculture", "commerce", "tourism"], context: "Kebbi State is one of Nigeria's major rice-producing states and hosts the Argungu fishing festival." },
  { slug: "jigawa", name: "Jigawa", kind: "state", capital: "Dutse", zone: "North West", cities: ["Dutse", "Hadejia", "Gumel", "Kazaure"], sectors: ["agriculture", "commerce", "government"], context: "Jigawa State is an agricultural state, with wetlands around Hadejia supporting rice, vegetables and fishing." },
  { slug: "zamfara", name: "Zamfara", kind: "state", capital: "Gusau", zone: "North West", cities: ["Gusau", "Kaura Namoda", "Talata Mafara", "Anka"], sectors: ["agriculture", "commerce", "mining"], context: "Zamfara State has a farming and trading economy, with Gusau serving as its commercial centre." },

  // ---- North East -----------------------------------------------------
  { slug: "bauchi", name: "Bauchi", kind: "state", capital: "Bauchi", zone: "North East", cities: ["Bauchi", "Azare", "Misau", "Jama'are"], sectors: ["agriculture", "tourism", "education"], context: "Bauchi State is home to Yankari Game Reserve, one of Nigeria's best-known wildlife destinations, alongside a farming and trading economy." },
  { slug: "adamawa", name: "Adamawa", kind: "state", capital: "Yola", zone: "North East", cities: ["Yola", "Mubi", "Jimeta", "Ganye"], sectors: ["agriculture", "education", "commerce"], context: "Adamawa State has a livestock and farming economy and a university community in and around Yola." },
  { slug: "borno", name: "Borno", kind: "state", capital: "Maiduguri", zone: "North East", cities: ["Maiduguri", "Biu", "Bama", "Dikwa"], sectors: ["commerce", "agriculture", "government"], context: "Borno State's capital Maiduguri is the commercial and institutional centre of the north-east, with an active trading community and many development organisations." },
  { slug: "gombe", name: "Gombe", kind: "state", capital: "Gombe", zone: "North East", cities: ["Gombe", "Kaltungo", "Billiri", "Dukku"], sectors: ["agriculture", "commerce", "education"], context: "Gombe State is a farming and trading state with a growing university presence." },
  { slug: "taraba", name: "Taraba", kind: "state", capital: "Jalingo", zone: "North East", cities: ["Jalingo", "Wukari", "Takum", "Bali"], sectors: ["agriculture", "tourism", "commerce"], context: "Taraba State is a major farming state, with the Mambilla Plateau offering cool-climate agriculture and tourism." },
  { slug: "yobe", name: "Yobe", kind: "state", capital: "Damaturu", zone: "North East", cities: ["Damaturu", "Potiskum", "Gashua", "Nguru"], sectors: ["agriculture", "commerce", "government"], context: "Yobe State has a farming and livestock economy, with Potiskum serving as an important trading town." },
]

export const zones: Zone[] = ["South West", "South East", "South South", "North Central", "North West", "North East"]

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug)
}

export function locationsByZone(zone: Zone) {
  return locations.filter((location) => location.zone === zone)
}

/** Cities used as the featured links in the footer and on the home page. */
export const featuredLocationSlugs = ["lagos", "abuja", "rivers", "oyo", "kano", "enugu", "edo", "kaduna", "imo", "ogun", "delta", "akwa-ibom"]
