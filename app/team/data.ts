export interface Skill {
  name: string;
  level: number;
}

export interface Stat {
  val: string;
  label: string;
  desc: string;
  icon: string;
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  result: string;
  color: string;
}

export interface TimelineItem {
  year: string;
  event: string;
  type: "award" | "project" | "milestone";
}

export interface MemberData {
  name: string;
  role: string;
  photo: string;
  accent: string;
  accentRgb: string;
  bio: string;
  location: string;
  available: boolean;
  email: string;
  github: string;
  linkedin: string;
  skills: Skill[];
  stats: Stat[];
  projects: Project[];
  timeline: TimelineItem[];
}

export const members: Record<string, MemberData> = {
  "aarav-mehta": {
    name: "Aarav Mehta",
    role: "AI Lead & Systems Engineer",
    photo: "/images/team_member_1.png",
    accent: "#00e5ff",
    accentRgb: "0, 229, 255",
    bio: "I build the intelligence layer — vector pipelines, LLM orchestration, and agentic workflows that make our products think. With a focus on low-latency inference and precise retrieval systems, I architect AI systems that handle real clinical, commercial, and operational workloads.",
    location: "Indore, India",
    available: true,
    email: "aarav@teamnexus.agency",
    github: "https://github.com/aaravmehta-ai",
    linkedin: "https://linkedin.com/in/aarav-mehta-ai",
    skills: [
      { name: "Python / FastAPI", level: 95 },
      { name: "LangChain / LLM Agents", level: 90 },
      { name: "VectorDB (Pinecone, Qdrant)", level: 88 },
      { name: "TensorFlow / PyTorch", level: 78 },
      { name: "Docker / CI/CD", level: 72 },
    ],
    stats: [
      { val: "180ms", label: "Avg. Triage Latency", desc: "Symptom routing response speed", icon: "Zap" },
      { val: "94%", label: "Query Routing Accuracy", desc: "AI classification precision", icon: "CheckCircle2" },
      { val: "2", label: "Hackathon AI Wins", desc: "National track prize records", icon: "Trophy" },
      { val: "3+", label: "Production Systems", desc: "Active commercial prompt engines", icon: "Cpu" },
    ],
    projects: [
      {
        title: "CareForYou AI Triage Engine",
        desc: "Designed a multi-stage LangChain agent that classifies symptom severity using custom FAISS vector indexes. Routes patients to the right specialist tier within 180ms average latency.",
        tags: ["LangChain", "FastAPI", "FAISS", "Python"],
        result: "94% routing accuracy, 3× faster than manual triage",
        color: "#00e5ff",
      },
      {
        title: "Nexus Live Telemetry Monitor",
        desc: "Engineered a Python-based drift detection engine that watches API latency, error rates, and deployment state across 8 cohorts simultaneously. Powers the real-time command room dashboard.",
        tags: ["WebSockets", "Python", "Redis", "FastAPI"],
        result: "0ms cache latency, 8 cohorts tracked in parallel",
        color: "#00e676",
      },
      {
        title: "Automated Customer Lead Qualifier",
        desc: "Built the LLM backbone of a 24/7 chatbot trained on client business documents. Uses retrieval-augmented generation to qualify prospects and escalate edge-case queries to human staff.",
        tags: ["RAG", "OpenAI API", "VectorDB", "Python"],
        result: "+45% lead capture rate month-over-month",
        color: "#ff5c2b",
      },
    ],
    timeline: [
      { year: "2024", event: "Grand Prize — SIH National Hackathon (AI Track)", type: "award" },
      { year: "2024", event: "Built CareForYou Triage engine — deployed to production", type: "project" },
      { year: "2023", event: "Runner Up — AI Innovation Challenge Hackathon", type: "award" },
      { year: "2023", event: "Joined Team Nexus as AI Systems Lead", type: "milestone" },
    ],
  },

  "kavya-sharma": {
    name: "Kavya Sharma",
    role: "Full Stack Lead Engineer",
    photo: "/images/team_member_2.png",
    accent: "#ff5c2b",
    accentRgb: "255, 92, 43",
    bio: "I architect the full digital surface — scalable Next.js applications, hardened API layers, and the database architecture that holds everything together. My obsession is shipping clean, production-grade systems that perform under real-world load without breaking.",
    location: "Indore, India",
    available: true,
    email: "kavya@teamnexus.agency",
    github: "https://github.com/kavyasharma-dev",
    linkedin: "https://linkedin.com/in/kavya-sharma-fullstack",
    skills: [
      { name: "Next.js / React", level: 96 },
      { name: "TypeScript", level: 92 },
      { name: "PostgreSQL / Prisma", level: 88 },
      { name: "Redis / Caching", level: 82 },
      { name: "Node.js / REST APIs", level: 90 },
    ],
    stats: [
      { val: "100%", label: "On-Time Delivery Rate", desc: "Milestone-to-launch consistency", icon: "CalendarRange" },
      { val: "4+", label: "Products Built", desc: "End-to-end database-backed apps", icon: "Code2" },
      { val: "99.98%", label: "Avg. Uptime SLA", desc: "Production infrastructure stability", icon: "Activity" },
      { val: "0ms", label: "Cache Latency Target", desc: "Optimized Redis caching responses", icon: "Zap" },
    ],
    projects: [
      {
        title: "CareForYou Patient Portal",
        desc: "Built the entire Next.js application layer — server components, API routes, session auth, and Prisma ORM migrations. Integrated the AI triage engine via FastAPI proxy with SSE streaming for real-time feedback.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        result: "Full portal live in 3 weeks, 0 critical post-launch bugs",
        color: "#ff5c2b",
      },
      {
        title: "Nexus Command Room Dashboard",
        desc: "Engineered the real-time WebSocket layer and server-side data pipelines. Built the secure dashboard with role-based access control, live chart updates, and zero-downtime deployment support.",
        tags: ["Next.js", "Redis", "WebSocket", "TypeScript"],
        result: "8 cohort feeds live simultaneously, 0ms cache lag",
        color: "#00e5ff",
      },
      {
        title: "Team Nexus Agency Website",
        desc: "Designed and shipped the complete Next.js app router codebase for this website — performance-optimized, dark-mode first, fully responsive. Lenis scroll, reveal animations, and all SEO metadata wired.",
        tags: ["Next.js 14", "CSS3", "Lenis", "Vercel"],
        result: "95+ Lighthouse score, sub-1s LCP on all pages",
        color: "#00e676",
      },
    ],
    timeline: [
      { year: "2024", event: "Shipped 3 production-grade client products on Next.js 14", type: "project" },
      { year: "2024", event: "Led full-stack architecture for SIH hackathon winning project", type: "award" },
      { year: "2023", event: "Designed scalable multi-tenant API pattern for Nexus systems", type: "milestone" },
      { year: "2023", event: "Joined Team Nexus as Full Stack Lead", type: "milestone" },
    ],
  },

  "rohan-das": {
    name: "Rohan Das",
    role: "Flutter & Mobile Engineer",
    photo: "/images/team_member_3.png",
    accent: "#00e676",
    accentRgb: "0, 230, 118",
    bio: "I make mobile apps that feel native, perform at 60fps, and work offline. From direct-to-consumer ordering to driver dispatch systems, I build Flutter apps that bypass the bloat and serve businesses directly — no platform fees, no compromises.",
    location: "Indore, India",
    available: true,
    email: "rohan@teamnexus.agency",
    github: "https://github.com/rohandas-mobile",
    linkedin: "https://linkedin.com/in/rohan-das-flutter",
    skills: [
      { name: "Flutter / Dart", level: 94 },
      { name: "Firebase / Firestore", level: 88 },
      { name: "SQLite / Hive (offline)", level: 85 },
      { name: "REST & GraphQL APIs", level: 82 },
      { name: "Push Notifications (FCM)", level: 90 },
    ],
    stats: [
      { val: "60fps", label: "Render Consistency", desc: "Fluid Flutter screen transitions", icon: "Smartphone" },
      { val: "0%", label: "Commission Leakage", desc: "Direct payment gateway integration", icon: "Coins" },
      { val: "2", label: "Cross-Platform Apps", desc: "Production Android & iOS channels", icon: "Code2" },
      { val: "100%", label: "Direct Delivery Rate", desc: "Self-hosted dispatch success rate", icon: "Activity" },
    ],
    projects: [
      {
        title: "Restaurant App Dispatcher",
        desc: "Built a white-labeled Flutter app for a local restaurant chain — custom ordering flows, Firebase real-time order queue, FCM driver dispatch, and Razorpay direct checkout. Zero aggregator dependency.",
        tags: ["Flutter", "Firebase", "FCM", "Razorpay"],
        result: "0% commission leak vs 30% before. 60fps across Android & iOS",
        color: "#00e676",
      },
      {
        title: "CareForYou Mobile Companion",
        desc: "Designed the patient-facing mobile UI for appointment booking and symptom pre-screening. Integrates with the AI backend via REST, stores session data offline with Hive for poor-connectivity clinics.",
        tags: ["Flutter", "Dart", "Hive", "REST API"],
        result: "Works offline. Sub-300ms API response times",
        color: "#00e5ff",
      },
    ],
    timeline: [
      { year: "2024", event: "Shipped Restaurant App to production for Indore merchant group", type: "project" },
      { year: "2024", event: "Built CareForYou mobile companion app integrated with AI backend", type: "project" },
      { year: "2023", event: "Mastered offline-first architecture with Hive + SQLite", type: "milestone" },
      { year: "2023", event: "Joined Team Nexus as Mobile Engineering Lead", type: "milestone" },
    ],
  },

  "isha-patel": {
    name: "Isha Patel",
    role: "UI/UX Designer",
    photo: "/images/team_member_4.png",
    accent: "#d500f9",
    accentRgb: "213, 0, 249",
    bio: "Design is the first product decision. I build interfaces that guide users, build trust, and convert — not just look good. From wireframe to production CSS, I own every visual decision: dark-mode systems, motion design, brand identity, and responsive layouts that actually hold together.",
    location: "Indore, India",
    available: true,
    email: "isha@teamnexus.agency",
    github: "https://github.com/ishapatel-design",
    linkedin: "https://linkedin.com/in/isha-patel-uiux",
    skills: [
      { name: "Figma / Prototyping", level: 96 },
      { name: "CSS3 / Advanced Animations", level: 90 },
      { name: "Design Systems", level: 88 },
      { name: "Adobe Illustrator / Vectors", level: 85 },
      { name: "Motion & Micro-interactions", level: 82 },
    ],
    stats: [
      { val: "10+", label: "UI Systems Designed", desc: "Unified design component directories", icon: "Layout" },
      { val: "95+", label: "Lighthouse Perf Score", desc: "CSS rendering & layout audits", icon: "Gauge" },
      { val: "3", label: "Brand Identities", desc: "Typography scales & guidelines", icon: "Sparkles" },
      { val: "100%", label: "Dark-Mode Coverage", desc: "Optimal contrast ratio interfaces", icon: "Moon" },
    ],
    projects: [
      {
        title: "Team Nexus Brand & Design System",
        desc: "Designed the complete visual identity for Team Nexus — typography scale, color tokens, component library in Figma, and all CSS custom property mappings. Every layout, animation, and micro-interaction on this site is mine.",
        tags: ["Figma", "CSS3", "Design Tokens", "Typography"],
        result: "Consistent design language across 6 pages + 30+ components",
        color: "#d500f9",
      },
      {
        title: "CareForYou Patient UX",
        desc: "Mapped patient journey flows, designed wireframes for all appointment and triage screens, then built high-fidelity prototypes for developer handoff. Focused on accessibility and clarity under stress.",
        tags: ["Figma", "UX Research", "Wireframes", "Prototyping"],
        result: "Zero UX confusion reports post-launch. Accessibility AA compliant",
        color: "#ff5c2b",
      },
      {
        title: "Nexus Command Room Dashboard UI",
        desc: "Designed the data-dense real-time dashboard with strict information hierarchy — minimal chrome, maximum signal. Chart layouts, state indicators, and the dark telemetry aesthetic are all custom-designed.",
        tags: ["Figma", "Data Viz", "Dashboard Design", "CSS"],
        result: "Operators reduced decision time by 40% vs previous tooling",
        color: "#00e5ff",
      },
    ],
    timeline: [
      { year: "2024", event: "Designed full brand identity and site for Team Nexus", type: "project" },
      { year: "2024", event: "Led UI design for SIH hackathon winning project (36-hour sprint)", type: "award" },
      { year: "2023", event: "Built first complete Figma design system for multi-product agency", type: "milestone" },
      { year: "2023", event: "Joined Team Nexus as UI/UX Design Lead", type: "milestone" },
    ],
  },

  "kabir-malhotra": {
    name: "Kabir Malhotra",
    role: "Ops & Product Strategy Lead",
    photo: "/images/team_member_5.png",
    accent: "#ffd600",
    accentRgb: "255, 214, 0",
    bio: "I translate ambiguous client briefs into airtight delivery contracts, then make sure the team actually ships on time. Every product we launch has passed through my MVP scoping, sprint planning, and launch coordination. I keep chaos out of the critical path.",
    location: "Indore, India",
    available: true,
    email: "kabir@teamnexus.agency",
    github: "https://github.com/kabirmalhotra-ops",
    linkedin: "https://linkedin.com/in/kabir-malhotra-strategy",
    skills: [
      { name: "MVP Scoping & Requirements", level: 95 },
      { name: "Agile / Sprint Planning", level: 92 },
      { name: "Launch Operations", level: 90 },
      { name: "Client Communication", level: 94 },
      { name: "Risk & Timeline Management", level: 88 },
    ],
    stats: [
      { val: "100%", label: "On-Time Launch Rate", desc: "Sprints shipped inside planned scope", icon: "CalendarRange" },
      { val: "5+", label: "Products Launched", desc: "Commercial platforms fully deployed", icon: "Rocket" },
      { val: "0", label: "Critical Scope Slips", desc: "Ruthlessly refined delivery variances", icon: "AlertTriangle" },
      { val: "8", label: "Stakeholders Managed", desc: "Active client communication flows", icon: "Users" },
    ],
    projects: [
      {
        title: "Nexus Launch Operations Framework",
        desc: "Built the internal delivery playbook used for every client project — scope template, sprint cadences, launch checklist, and post-launch SLA tracking. Reduced average project delays to zero.",
        tags: ["Product Strategy", "Agile", "Process Design", "Documentation"],
        result: "100% on-time delivery rate across all 2024 projects",
        color: "#ffd600",
      },
      {
        title: "SIH Hackathon Sprint Lead",
        desc: "Managed the 36-hour SIH hackathon delivery as team ops lead — prioritized features ruthlessly, kept all 5 members unblocked, coordinated judge presentations, and ensured the final build shipped on time.",
        tags: ["Sprint Management", "Hackathon", "Team Ops", "Prioritization"],
        result: "Grand Prize Winner ₹1,0,000 — delivered under 36h",
        color: "#ff5c2b",
      },
      {
        title: "Multi-Client Launch Coordination",
        desc: "Managed simultaneous delivery of the Restaurant App and CareForYou projects across a 6-week overlap — maintained separate sprint tracks, client communication channels, and ensured zero cross-contamination.",
        tags: ["Multi-project Ops", "Client Management", "Agile", "Timeline"],
        result: "Both projects launched in scope, on date, within budget",
        color: "#00e676",
      },
    ],
    timeline: [
      { year: "2024", event: "Managed 5 concurrent product launches with 0 critical delays", type: "milestone" },
      { year: "2024", event: "Led team ops for Grand Prize SIH win (₹1,00,000)", type: "award" },
      { year: "2023", event: "Wrote Team Nexus internal delivery playbook — still in use", type: "milestone" },
      { year: "2023", event: "Joined Team Nexus as Operations & Product Strategy Lead", type: "milestone" },
    ],
  },
};
