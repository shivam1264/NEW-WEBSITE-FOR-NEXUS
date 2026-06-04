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
  "shubham-pawar": {
    name: "Shubham Pawar",
    role: "AI Lead Engineer",
    photo: "/images/team_member_1.jpg",
    accent: "#00e5ff",
    accentRgb: "0, 229, 255",
    bio: "I build the intelligence layer — vector pipelines, LLM orchestration, and agentic workflows that make our products think. With a focus on low-latency inference and precise retrieval systems, I architect AI systems that handle real clinical, commercial, and operational workloads.",
    location: "Indore, India",
    available: true,
    email: "shubham@teamnexus.agency",
    github: "https://github.com/shubhampawar-ai",
    linkedin: "https://linkedin.com/in/shubham-pawar-ai",
    skills: [
      { name: "Python / FastAPI", level: 95 },
      { name: "LangChain / LLM Agents", level: 90 },
      { name: "VectorDB (Pinecone, Qdrant)", level: 88 },
      { name: "TensorFlow / PyTorch", level: 78 },
      { name: "Docker / CI/CD", level: 72 },
    ],
    stats: [
      { val: "<3s", label: "Emergency Alert Latency", desc: "SOS response dispatch speed", icon: "Zap" },
      { val: "95%", label: "Risk Detection Accuracy", desc: "AI threat classification precision", icon: "CheckCircle2" },
      { val: "2", label: "Hackathon AI Wins", desc: "National track prize records", icon: "Trophy" },
      { val: "3+", label: "Production Systems", desc: "Active commercial prompt engines", icon: "Cpu" },
    ],
    projects: [
      {
        title: "SHEild AI Route Planner & SOS Engine",
        desc: "Designed a multi-stage predictive risk analysis engine that maps safety levels along route paths and triggers location-aware emergency alerts.",
        tags: ["FastAPI", "Python", "ML", "Geolocation"],
        result: "95% risk detection accuracy, sub-3s emergency responses",
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
      { year: "2026", event: "Grand Prize — Technocrats Innovation Challenge (TIC 2K26)", type: "award" },
      { year: "2026", event: "National Runner-Up — BGI Hackathon 2026", type: "award" },
      { year: "2024", event: "Built SHEild AI safety engine — deployed to production", type: "project" },
      { year: "2023", event: "Joined Team Nexus as AI Systems Lead", type: "milestone" },
    ],
  },

  "shivansh-mehra": {
    name: "Shivansh Mehra",
    role: "Full Stack Developer",
    photo: "/images/team_member_2.jpg",
    accent: "#ff5c2b",
    accentRgb: "255, 92, 43",
    bio: "I architect the full digital surface — scalable Next.js applications, hardened API layers, and the database architecture that holds everything together. My obsession is shipping clean, production-grade systems that perform under real-world load without breaking.",
    location: "Indore, India",
    available: true,
    email: "shivansh@teamnexus.agency",
    github: "https://github.com/shivanshmehra-dev",
    linkedin: "https://linkedin.com/in/shivansh-mehra-fullstack",
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
        title: "SHEild AI Backend & Admin Registry",
        desc: "Built the core Node.js backend infrastructure, API routes, database collections, and administrative controls. Integrated automated emergency alert pipelines with Firebase.",
        tags: ["Node.js", "TypeScript", "Firebase", "MongoDB"],
        result: "Scalable backend architecture, 99.99% active SLA uptime",
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
      { year: "2026", event: "Led full-stack architecture for TIC hackathon winning project", type: "award" },
      { year: "2023", event: "Designed scalable multi-tenant API pattern for Nexus systems", type: "milestone" },
      { year: "2023", event: "Joined Team Nexus as Full Stack Lead", type: "milestone" },
    ],
  },

  "prakash-biswal": {
    name: "Prakash Kumar Biswal",
    role: "Agentic AI & Flutter Developer",
    photo: "/images/team_member_3.jpg",
    accent: "#00e676",
    accentRgb: "0, 230, 118",
    bio: "I make mobile apps that feel native, perform at 60fps, and work offline. From direct-to-consumer ordering to driver dispatch systems, I build Flutter apps that bypass the bloat and serve businesses directly — no platform fees, no compromises.",
    location: "Indore, India",
    available: true,
    email: "prakash@teamnexus.agency",
    github: "https://github.com/prakashbiswal-dev",
    linkedin: "https://linkedin.com/in/prakash-kumar-biswal",
    skills: [
      { name: "Flutter / Dart", level: 94 },
      { name: "Firebase / Firestore", level: 88 },
      { name: "SQLite / Hive (offline)", level: 85 },
      { name: "REST & GraphQL APIs", level: 82 },
      { name: "Agentic AI Integrations", level: 90 },
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
        title: "SHEild AI Mobile Safety Application",
        desc: "Built the cross-platform Flutter mobile app featuring live geolocation tracking, interactive route planning maps, and single-tap SOS activation.",
        tags: ["Flutter", "Dart", "Google Maps API", "Geolocation"],
        result: "Responsive UI, sub-300ms live telemetry updates",
        color: "#00e5ff",
      },
    ],
    timeline: [
      { year: "2024", event: "Shipped Restaurant App to production for Indore merchant group", type: "project" },
      { year: "2024", event: "Built SHEild AI mobile safety application integrated with emergency backend", type: "project" },
      { year: "2023", event: "Mastered offline-first architecture with Hive + SQLite", type: "milestone" },
      { year: "2023", event: "Joined Team Nexus as Mobile Engineering Lead", type: "milestone" },
    ],
  },

  "shivam-maurya": {
    name: "Shivam Kumar Maurya",
    role: "UI/UX & Frontend Developer",
    photo: "/images/team_member_4.jpg",
    accent: "#d500f9",
    accentRgb: "213, 0, 249",
    bio: "Design is the first product decision. I build interfaces that guide users, build trust, and convert — not just look good. From wireframe to production CSS, I own every visual decision: dark-mode systems, motion design, brand identity, and responsive layouts that actually hold together.",
    location: "Indore, India",
    available: true,
    email: "shivam@teamnexus.agency",
    github: "https://github.com/shivamkumar-uiux",
    linkedin: "https://linkedin.com/in/shivam-kumar-maurya",
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
        title: "SHEild AI Platform UX & Safety Interface",
        desc: "Mapped user emergency journeys, designed wireframes for route planning and SOS screens, and created highly intuitive interfaces optimized for accessibility under high-stress conditions.",
        tags: ["Figma", "UX Research", "Wireframes", "Accessibility Design"],
        result: "Zero UX confusion under stress, high-contrast dark-mode layout",
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
      { year: "2026", event: "Led UI design for TIC hackathon winning project (36-hour sprint)", type: "award" },
      { year: "2023", event: "Built first complete Figma design system for multi-product agency", type: "milestone" },
      { year: "2023", event: "Joined Team Nexus as UI/UX Design Lead", type: "milestone" },
    ],
  },

  "tushar-das": {
    name: "Tushar Das",
    role: "Ops & Marketing Lead",
    photo: "/images/team_member_5.jpg",
    accent: "#ffd600",
    accentRgb: "255, 214, 0",
    bio: "I translate ambiguous client briefs into airtight delivery contracts, then make sure the team actually ships on time. Every product we launch has passed through my MVP scoping, sprint planning, and launch coordination. I keep chaos out of the critical path.",
    location: "Indore, India",
    available: true,
    email: "tushar@teamnexus.agency",
    github: "https://github.com/tushardas-ops",
    linkedin: "https://linkedin.com/in/tushar-das-ops",
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
        title: "TIC Hackathon Sprint Lead",
        desc: "Managed the 36-hour TIC 2K26 hackathon delivery as team ops lead — prioritized features ruthlessly, kept all 5 members unblocked, coordinated judge presentations, and ensured the final build of SHEild AI shipped on time.",
        tags: ["Sprint Management", "Hackathon", "Team Ops", "Prioritization"],
        result: "Grand Prize Winner ₹20,000 — delivered under 36h",
        color: "#ff5c2b",
      },
      {
        title: "SHEild AI Platform Launch Strategy",
        desc: "Coordinated the deployment and launch strategy of the SHEild AI platform — aligned product positioning, managed user acquisition channels, and drove initial community onboarding.",
        tags: ["Launch Strategy", "Product Ops", "User Onboarding", "Timeline"],
        result: "Successful platform launch within target timeline, high initial adoption",
        color: "#00e676",
      },
    ],
    timeline: [
      { year: "2024", event: "Managed 5 concurrent product launches with 0 critical delays", type: "milestone" },
      { year: "2026", event: "Led team ops for Grand Prize TIC 2K26 win (₹20,000)", type: "award" },
      { year: "2023", event: "Wrote Team Nexus internal delivery playbook — still in use", type: "milestone" },
      { year: "2023", event: "Joined Team Nexus as Operations & Product Strategy Lead", type: "milestone" },
    ],
  },
};
