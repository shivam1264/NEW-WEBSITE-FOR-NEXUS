"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Brain,
  Globe,
  Smartphone,
  Zap,
  Layout,
  Settings,
  ChevronDown,
  ChevronUp,
  Check,
  ArrowRight,
  Activity,
  Terminal as TerminalIcon
} from "lucide-react";

export default function Services() {
  const capabilities = [
    {
      id: "ai",
      code: "SYS-01",
      title: "AI Solutions",
      desc: "Custom LLM chatbots, AI assistants, resume screeners, and cognitive agent workflow automation built to streamline customer support and lead operations.",
      icon: <Brain size={18} />,
      color: "#ff5c2b",
      colorRGB: "255, 92, 43",
      bg: "rgba(255, 92, 43, 0.06)",
      border: "rgba(255, 92, 43, 0.2)",
      deliverables: [
        "Custom LLM Chatbots & RAG Systems",
        "Cognitive Agent Workflow Automations",
        "Resume Screeners & Data Extractors",
        "Multi-Model Orchestration (OpenAI / Gemini / Anthropic)"
      ],
      tech: ["Python", "LangChain", "OpenAI API", "Gemini Pro", "Pinecone", "FastAPI"]
    },
    {
      id: "web",
      code: "SYS-02",
      title: "Web Development",
      desc: "Highly polished business websites, admin panels, and SaaS dashboard products. Designed using SSR architectures for instant loading.",
      icon: <Globe size={18} />,
      color: "#00e5ff",
      colorRGB: "0, 229, 255",
      bg: "rgba(0, 229, 255, 0.06)",
      border: "rgba(0, 229, 255, 0.2)",
      deliverables: [
        "High-Performance SSR Architectures",
        "Real-Time Admin & Analytics Dashboards",
        "Premium E-Commerce & SaaS Gateways",
        "100/100 Lighthouse Performance Scores"
      ],
      tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]
    },
    {
      id: "mobile",
      code: "SYS-03",
      title: "Mobile App Development",
      desc: "Cross-platform mobile applications utilizing Flutter and React Native. Custom layouts, payment processing, and fluid user experiences.",
      icon: <Smartphone size={18} />,
      color: "#00e676",
      colorRGB: "0, 230, 118",
      bg: "rgba(0, 230, 118, 0.06)",
      border: "rgba(0, 230, 118, 0.2)",
      deliverables: [
        "Cross-Platform Native Apps",
        "Fluid 60fps Micro-Interactions",
        "Offline-First Database Synchronization",
        "Native Hardware Integration & Push Alerts"
      ],
      tech: ["Flutter", "React Native", "TypeScript", "Dart", "Firebase", "SQLite"]
    },
    {
      id: "mvp",
      code: "SYS-04",
      title: "Startup MVP Development",
      desc: "Rapid cycles launching functional Minimum Viable Products to production in weeks to test ideas and raise venture funding quickly.",
      icon: <Zap size={18} />,
      color: "#ff007f",
      colorRGB: "255, 0, 127",
      bg: "rgba(255, 0, 127, 0.06)",
      border: "rgba(255, 0, 127, 0.2)",
      deliverables: [
        "Ultra-Fast Production Ready Deployments",
        "Lean Architecture & Modular Codebase",
        "Secure User Auth & Stripe Payments",
        "Analytics & Telemetry Pre-Configured"
      ],
      tech: ["SupaBase", "Vercel", "Stripe", "Next.js", "Prisma", "PostgreSQL"]
    },
    {
      id: "ui",
      code: "SYS-05",
      title: "UI/UX Design",
      desc: "Clean wireframes, functional prototypes, and modern startup aesthetics utilizing tailored dark-theme styles and responsive layouts.",
      icon: <Layout size={18} />,
      color: "#d500f9",
      colorRGB: "213, 0, 249",
      bg: "rgba(213, 0, 249, 0.06)",
      border: "rgba(213, 0, 249, 0.2)",
      deliverables: [
        "High-Fidelity Interactive Prototypes",
        "Custom Glassmorphic & Neo-Skeuomorphic Styles",
        "Seamless Responsive Screen Layouts",
        "Design System Export (Figma / Stitch)"
      ],
      tech: ["Figma", "Stitch", "Spline 3D", "Tailwind", "Framer Motion"]
    },
    {
      id: "automation",
      code: "SYS-06",
      title: "Automation Systems",
      desc: "Integrating API endpoints, scrapers, automated email/SMS alerts, and scheduling software to run business operations 24/7.",
      icon: <Settings size={18} />,
      color: "#ffd600",
      colorRGB: "255, 214, 0",
      bg: "rgba(255, 214, 0, 0.06)",
      border: "rgba(255, 214, 0, 0.2)",
      deliverables: [
        "Custom Web Scrapers & Telemetry Alerts",
        "Cron-Scheduled Workflow Workers",
        "Multi-API Database Integrations",
        "Automated SMS / Email Notification Hubs"
      ],
      tech: ["Node.js", "Python", "Docker", "GitHub Actions", "Redis", "AWS Lambda"]
    }
  ];

  const faqs = [
    {
      q: "What does Team Nexus build?",
      a: "We build custom AI solutions (chatbots, automation workflow), premium corporate websites, SaaS admin dashboards, and cross-platform mobile apps for startups and local businesses.",
    },
    {
      q: "How fast can you launch an MVP?",
      a: "Depending on complexity, our standard Startup MVP cycle takes 3 to 6 weeks from initial requirement discussion to live production deployment.",
    },
    {
      q: "Do you support custom payment and database integrations?",
      a: "Yes. We integrate secure Stripe/Razorpay checkouts, scheduling tools (Calendly/custom), scalable SQL/NoSQL databases, and custom API layers.",
    },
    {
      q: "What post-launch support do you provide?",
      a: "We offer continuous maintenance plans, active server uptime SLA monitoring, dependency updates, and bug fixes to ensure your software grows with your traffic.",
    },
  ];

  const [activeTab, setActiveTab] = useState<"capabilities" | "faq">("capabilities");
  const [activeService, setActiveService] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const activeSvcData = capabilities[activeService];

  return (
    <div
      style={{
        padding: "140px 0 80px",
        minHeight: "100vh",
        fontFamily: "var(--font-manrope), sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* 1. COMPACT HEADER */}
      <div
        className="container reveal-text"
        style={{
          margin: "0 auto 32px",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "8px" }}>
          <span className="pulsing-dot pulsing-dot-coral" />
          {activeTab === "capabilities" ? "Core Systems" : "System Intel"}
        </span>
        <h1
          className="hero-title font-display"
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "12px",
          }}
        >
          {activeTab === "capabilities" ? "Premium " : "Frequently "}
          <span className="font-serif-i" style={{ color: "var(--accent)" }}>
            {activeTab === "capabilities" ? "Capabilities" : "Questions"}
          </span>
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.6" }}>
          Every engagement is built around practical outcomes: sharper positioning, better collaboration, and systems that compound.
        </p>
      </div>

      {/* 2. TAB SWITCHER */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="services-tab-bar">
          <button
            className={`services-view-tab ${activeTab === "capabilities" ? "active" : ""}`}
            onClick={() => setActiveTab("capabilities")}
            data-hover="true"
          >
            <span className="tab-icon-wrap"><TerminalIcon size={14} /></span>
            <span className="tab-badge">01</span>
            <span>Capabilities</span>
          </button>
          <button
            className={`services-view-tab ${activeTab === "faq" ? "active" : ""}`}
            onClick={() => setActiveTab("faq")}
            data-hover="true"
          >
            <span className="tab-icon-wrap"><Activity size={14} /></span>
            <span className="tab-badge">02</span>
            <span>FAQs</span>
          </button>
        </div>
      </div>

      {/* 3. CORE CONTENT VIEWPORT CONTAINER */}
      <div className="container" style={{ margin: "0 auto", width: "100%" }}>
        {activeTab === "capabilities" ? (
          <div className="services-interactive-wrapper">
            {/* Left Button Select Stack */}
            <div className="service-tabs-column">
              <span className="service-section-title">Select Registry</span>
              {capabilities.map((cap, idx) => {
                const isActive = activeService === idx;
                return (
                  <button
                    key={cap.id}
                    className={`service-tab-button ${isActive ? "active" : ""}`}
                    onClick={() => setActiveService(idx)}
                    style={{
                      "--svc-accent": cap.color,
                      "--svc-accent-rgb": cap.colorRGB
                    } as React.CSSProperties}
                    data-hover="true"
                  >
                    <div className="service-tab-button-left">
                      <span className="svc-tab-index">{cap.code}</span>
                      <div className="svc-tab-icon">
                        {cap.icon}
                      </div>
                      <span className="svc-tab-title">{cap.title}</span>
                    </div>
                    {isActive ? (
                      <ArrowRight size={14} style={{ color: cap.color }} className="svc-tab-arrow" />
                    ) : (
                      <span className="svc-tab-dot" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Details Panel */}
            <div
              key={activeService}
              className="service-details-card service-animate-fade"
              style={{
                "--svc-accent": activeSvcData.color,
                "--svc-accent-rgb": activeSvcData.colorRGB
              } as React.CSSProperties}
            >
              <div>
                {/* Dashboard Status Telemetry Bar */}
                <div className="service-telemetry-header">
                  <span className="service-telemetry-label">REGISTRY NODE // {activeSvcData.code}</span>
                  <span className="service-telemetry-status">
                    <span className="pulsing-dot" style={{ width: "6px", height: "6px", background: "#25d366" }} />
                    SYSTEM ONLINE
                  </span>
                </div>

                <div className="service-details-header">
                  <div className="service-details-title-group">
                    <span className="service-details-subtitle">{activeSvcData.code} // OPERATIONAL FRAMEWORK</span>
                    <h2 className="service-details-title">{activeSvcData.title}</h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: activeSvcData.bg,
                      border: `1px solid ${activeSvcData.border}`,
                      color: activeSvcData.color,
                    }}
                  >
                    {activeSvcData.icon}
                  </div>
                </div>

                <div className="service-details-body">
                  <p className="service-details-desc">{activeSvcData.desc}</p>
                  
                  <div>
                    <div className="service-section-title">Key Deliverables</div>
                    <div className="service-deliverables-list">
                      {activeSvcData.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="service-deliverable-item">
                          <span className="service-deliverable-check">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="service-section-title">Tech Stack Focus</div>
                    <div className="tech-badges-grid">
                      {activeSvcData.tech.map((t, tIdx) => (
                        <span key={tIdx} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href={`/contact?service=${activeSvcData.id}`}
                className="service-details-cta"
                data-hover="true"
              >
                Inquire About {activeSvcData.title}
                <ArrowRight size={15} className="cta-arrow" />
              </Link>
            </div>
          </div>
        ) : (
          /* FAQ Section View */
          <div className="faq-split-wrapper service-animate-fade">
            {/* FAQ HUD Panel */}
            <div className="faq-hud-panel">
              <span className="service-section-title">FAQ Gateway Core</span>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: "1.5" }}>
                Nexus support index querying. Live updates on SLAs, methodologies, and framework queries.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div className="faq-hud-row">
                  <span className="faq-hud-label">Client Support</span>
                  <span className="faq-hud-value" style={{ color: "#25d366" }}>24/7 Enabled</span>
                </div>
                <div className="faq-hud-row">
                  <span className="faq-hud-label">NDAs</span>
                  <span className="faq-hud-value">Standard Signing</span>
                </div>
                <div className="faq-hud-row">
                  <span className="faq-hud-label">Locations</span>
                  <span className="faq-hud-value">Global Remote</span>
                </div>
              </div>

              <Link
                href="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  border: "1px solid rgba(255, 92, 43, 0.2)",
                  background: "rgba(255, 92, 43, 0.05)",
                  color: "var(--accent)",
                  borderRadius: "10px",
                  padding: "12px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  textAlign: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 92, 43, 0.1)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 92, 43, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 92, 43, 0.2)";
                }}
                data-hover="true"
              >
                Custom Request Wizard
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* FAQ Accordion list */}
            <div className="faq-accordion-list">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(7, 7, 22, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                    borderRadius: "14px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      background: "none",
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: "#ffffff",
                      fontSize: "1rem",
                      fontWeight: 600,
                      textAlign: "left",
                      outline: "none",
                      cursor: "pointer",
                    }}
                    data-hover="true"
                  >
                    <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 600 }}>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp size={16} style={{ color: "var(--accent)" }} />
                    ) : (
                      <ChevronDown size={16} style={{ color: "#64748b" }} />
                    )}
                  </button>

                  <div
                    style={{
                      maxHeight: openFaq === idx ? "200px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <div
                      style={{
                        padding: "0 24px 20px",
                        color: "#94a3b8",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
