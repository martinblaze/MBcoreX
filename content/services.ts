import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  LayoutDashboard,
  Lock,
  Network,
  Radar,
  Rocket,
  ScanEye,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react"

export type ServiceCategory = "Software Engineering" | "Artificial Intelligence" | "Cybersecurity"

export type Service = {
  slug: string
  category: ServiceCategory
  icon: LucideIcon
  title: string
  shortDescription: string
  description: string
  benefits: string[]
  deliverables: string[]
}

export const services: Service[] = [
  {
    slug: "custom-software",
    category: "Software Engineering",
    icon: Code2,
    title: "Custom Software",
    shortDescription: "Tailored applications built for your business needs.",
    description:
      "High-performance web and mobile applications designed around how your business actually operates, not a generic template forced to fit.",
    benefits: ["Built around your workflow, not a template", "Scales as your business grows", "Full ownership of source and architecture"],
    deliverables: ["Requirements & architecture document", "Production application", "Deployment & handover documentation"],
  },
  {
    slug: "enterprise-systems",
    category: "Software Engineering",
    icon: LayoutDashboard,
    title: "Enterprise Systems",
    shortDescription: "Internal tools and systems built for scale.",
    description:
      "Internal platforms — dashboards, record management, operational tooling — engineered for the reliability and access control an enterprise needs.",
    benefits: ["Role-based access control", "Built for daily operational load", "Integrates with existing systems"],
    deliverables: ["System architecture", "Admin & role management", "Ongoing support plan"],
  },
  {
    slug: "saas-development",
    category: "Software Engineering",
    icon: Rocket,
    title: "SaaS Development",
    shortDescription: "Scalable SaaS platforms built with security in mind.",
    description:
      "Multi-tenant SaaS products built with subscription billing, secure data isolation, and performance in mind from day one.",
    benefits: ["Multi-tenant architecture done right", "Billing & subscription-ready", "Performance budget built in"],
    deliverables: ["MVP build", "Billing integration", "Scalability & security review"],
  },
  {
    slug: "web-applications",
    category: "Software Engineering",
    icon: Code2,
    title: "Web Applications",
    shortDescription: "Modern, responsive, high-performing websites.",
    description:
      "Marketing sites, corporate websites and web apps that load fast, rank well, and represent your brand at a premium standard.",
    benefits: ["95+ Lighthouse performance target", "SEO-first structure", "Mobile-first responsive design"],
    deliverables: ["Design system", "Responsive build", "SEO & analytics setup"],
  },
  {
    slug: "mobile-apps",
    category: "Software Engineering",
    icon: Smartphone,
    title: "Mobile Apps",
    shortDescription: "Cross-platform apps built for performance.",
    description: "Mobile experiences that feel native, ship on both major platforms, and stay maintainable long term.",
    benefits: ["Single codebase, two platforms", "Native-feeling performance", "App store submission support"],
    deliverables: ["App architecture", "Store-ready builds", "Release & update plan"],
  },
  {
    slug: "dashboards",
    category: "Software Engineering",
    icon: LayoutDashboard,
    title: "Dashboards",
    shortDescription: "Custom dashboards that turn data into decisions.",
    description: "Purpose-built dashboards that surface the metrics that matter to your team, not a generic BI template.",
    benefits: ["Built around your actual metrics", "Real-time or scheduled data", "Access-controlled by role"],
    deliverables: ["Data model & pipeline", "Dashboard UI", "Access control setup"],
  },
  {
    slug: "api-development",
    category: "Software Engineering",
    icon: Network,
    title: "API Development",
    shortDescription: "Secure, well-documented APIs and integrations.",
    description: "REST/GraphQL APIs designed for security, versioning, and the third-party integrations your business depends on.",
    benefits: ["Documented and versioned from day one", "Rate limiting & auth built in", "Third-party integration ready"],
    deliverables: ["API specification", "Authentication & rate limiting", "Integration documentation"],
  },
  {
    slug: "cloud-infrastructure",
    category: "Software Engineering",
    icon: Cloud,
    title: "Cloud Infrastructure",
    shortDescription: "Secure and scalable cloud architecture.",
    description: "Cloud infrastructure sized and secured for your actual traffic, with a clear path to scale as you grow.",
    benefits: ["Right-sized, not over-provisioned", "Secure by default configuration", "Clear scaling path"],
    deliverables: ["Infrastructure architecture", "CI/CD pipeline", "Monitoring & alerting setup"],
  },
  {
    slug: "ai-integrations",
    category: "Artificial Intelligence",
    icon: BrainCircuit,
    title: "AI Integrations",
    shortDescription: "Practical AI features built into your product.",
    description: "AI features integrated where they genuinely help — search, summarization, assistance — with human oversight on outputs that matter.",
    benefits: ["Integrated where it adds real value", "Human oversight on critical outputs", "No vendor lock-in by default"],
    deliverables: ["AI feature scoping", "Integration & testing", "Monitoring for output quality"],
  },
  {
    slug: "workflow-automation",
    category: "Artificial Intelligence",
    icon: Workflow,
    title: "Workflow Automation",
    shortDescription: "Automate the repetitive parts of your operations.",
    description: "We identify and automate the repetitive operational work slowing your team down, from data entry to reporting.",
    benefits: ["Frees up staff time for higher-value work", "Reduces manual data-entry errors", "Auditable automation logic"],
    deliverables: ["Process audit", "Automation build", "Documentation & handover"],
  },
  {
    slug: "intelligent-assistants",
    category: "Artificial Intelligence",
    icon: Sparkles,
    title: "Intelligent Assistants",
    shortDescription: "AI-assisted tools for your team or customers.",
    description: "Purpose-built assistants for internal teams or customer-facing support, scoped tightly to be reliable rather than generically \"smart\".",
    benefits: ["Scoped to a specific, reliable task", "Reduces response time for support/ops", "Clear escalation to a human"],
    deliverables: ["Use-case scoping", "Assistant build & testing", "Escalation & fallback design"],
  },
  {
    slug: "ai-business-solutions",
    category: "Artificial Intelligence",
    icon: BrainCircuit,
    title: "AI-Powered Business Solutions",
    shortDescription: "AI-accelerated delivery without cutting corners.",
    description: "We use modern AI-assisted development tools to increase delivery speed and code quality while keeping engineering standards and human review at every stage.",
    benefits: ["Faster time-to-market", "Improved code quality via AI-assisted review", "Human oversight throughout"],
    deliverables: ["Delivery plan with AI-assisted milestones", "Production build", "Quality & security review"],
  },
  {
    slug: "secure-development",
    category: "Cybersecurity",
    icon: ShieldCheck,
    title: "Secure Development",
    shortDescription: "Security built in from the first line of code.",
    description: "Secure coding practices applied throughout the build — input validation, secure auth, dependency hygiene — not bolted on after launch.",
    benefits: ["Security reviewed at every stage, not just at the end", "Reduced risk of common vulnerability classes", "Awareness of NIST 800-53 Rev 5 & Security+ practices"],
    deliverables: ["Secure coding checklist applied to the build", "Dependency & auth review", "Security findings report"],
  },
  {
    slug: "risk-assessments",
    category: "Cybersecurity",
    icon: Radar,
    title: "Risk Assessments",
    shortDescription: "Understand where your systems are exposed.",
    description: "A structured review of your systems and processes to identify where risk actually lives, prioritized by real business impact.",
    benefits: ["Prioritized by business impact, not just severity score", "Clear, actionable findings", "Framed against NIST risk practices"],
    deliverables: ["Risk assessment report", "Prioritized remediation plan", "Executive summary"],
  },
  {
    slug: "security-audits",
    category: "Cybersecurity",
    icon: ScanEye,
    title: "Security Audits",
    shortDescription: "A structured look at your security posture.",
    description: "A methodical audit of your application and infrastructure security posture, covering access control, data handling and configuration.",
    benefits: ["Covers app, infra and access control", "Findings mapped to fixes, not just flags", "Supports SOC 2 / compliance readiness"],
    deliverables: ["Audit report", "Remediation roadmap", "Re-check on request"],
  },
  {
    slug: "security-best-practices",
    category: "Cybersecurity",
    icon: Lock,
    title: "Security Best Practices",
    shortDescription: "Practical guidance your team can actually follow.",
    description: "Hands-on guidance and documentation to bring your team's day-to-day practices in line with recognized security frameworks.",
    benefits: ["Practical, not just theoretical policy", "Grounded in Security+ / Network+ knowledge areas", "Tailored to your team's actual stack"],
    deliverables: ["Best-practices playbook", "Team walkthrough session", "Follow-up review"],
  },
  {
    slug: "compliance-readiness",
    category: "Cybersecurity",
    icon: ShieldCheck,
    title: "Compliance Readiness",
    shortDescription: "Get ready for NIST / SOC 2 expectations.",
    description: "We help you understand and prepare for the controls expected under frameworks like NIST 800-53 Rev 5, NIST 171 and SOC 2 Type II — as readiness work, not a certification claim.",
    benefits: ["Clear gap analysis against framework expectations", "Prioritized readiness roadmap", "Documentation support for audits"],
    deliverables: ["Gap analysis", "Readiness roadmap", "Supporting documentation"],
  },
  {
    slug: "secure-cloud-architecture",
    category: "Cybersecurity",
    icon: Cloud,
    title: "Secure Cloud Architecture",
    shortDescription: "Cloud infrastructure secured by design.",
    description: "Cloud environments architected with least-privilege access, encrypted data paths, and monitoring as defaults, not add-ons.",
    benefits: ["Least-privilege access by default", "Encryption in transit and at rest", "Monitoring and alerting from day one"],
    deliverables: ["Architecture review", "Hardening implementation", "Monitoring setup"],
  },
  {
    slug: "database-architecture",
    category: "Software Engineering",
    icon: Database,
    title: "Database Architecture",
    shortDescription: "Data modeling that scales with your product.",
    description: "Schema design and data modeling built to stay fast and consistent as your data volume and query complexity grow.",
    benefits: ["Modeled for your real query patterns", "Built to scale with data volume", "Backup & recovery planned in"],
    deliverables: ["Schema design", "Migration plan", "Backup & recovery setup"],
  },
]

export const serviceCategories: ServiceCategory[] = ["Software Engineering", "Artificial Intelligence", "Cybersecurity"]

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((service) => service.category === category)
}
