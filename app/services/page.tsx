"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Brain, Globe, Smartphone, Zap, Layout, Settings,
  ChevronDown, ChevronUp, Check, ArrowRight,
  Activity, Sparkles
} from "lucide-react";

export default function Services() {
  const capabilities = [
    {
      id: "ai",
      title: "AI Solutions",
      desc: "Custom LLM chatbots, AI assistants, resume screeners, and cognitive agent workflow automation built to streamline customer support and lead operations.",
      icon: <Brain size={24} />,
      color: "#00FFAB",
      colorRGB: "0, 255, 171",
      deliverables: [
        "Custom LLM Chatbots & RAG Systems",
        "Cognitive Agent Workflow Automations",
        "Resume Screeners & Data Extractors",
        "Multi-Model Orchestration"
      ],
      tech: ["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI"]
    },
    {
      id: "web",
      title: "Web Development",
      desc: "Highly polished business websites, admin panels, and SaaS dashboard products. Designed using SSR architectures for instant loading.",
      icon: <Globe size={24} />,
      color: "#00E5FF",
      colorRGB: "0, 229, 255",
      deliverables: [
        "High-Performance SSR Architectures",
        "Real-Time Admin & Analytics Dashboards",
        "Premium E-Commerce & SaaS Gateways",
        "100/100 Lighthouse Performance Scores"
      ],
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"]
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      desc: "Cross-platform mobile applications utilizing Flutter and React Native. Custom layouts, payment processing, and fluid user experiences.",
      icon: <Smartphone size={24} />,
      color: "#FF007F",
      colorRGB: "255, 0, 127",
      deliverables: [
        "Cross-Platform Native Apps",
        "Fluid 60fps Micro-Interactions",
        "Offline-First Database Synchronization",
        "Native Hardware Integration & Push Alerts"
      ],
      tech: ["Flutter", "React Native", "TypeScript", "Dart", "Firebase"]
    },
    {
      id: "mvp",
      title: "Startup MVPs",
      desc: "Rapid cycles launching functional Minimum Viable Products to production in weeks to test ideas and raise venture funding quickly.",
      icon: <Zap size={24} />,
      color: "#D500F9",
      colorRGB: "213, 0, 249",
      deliverables: [
        "Ultra-Fast Production Ready Deployments",
        "Lean Architecture & Modular Codebase",
        "Secure User Auth & Stripe Payments",
        "Analytics & Telemetry Pre-Configured"
      ],
      tech: ["SupaBase", "Vercel", "Stripe", "Next.js", "Prisma"]
    },
    {
      id: "ui",
      title: "UI/UX Design",
      desc: "Clean wireframes, functional prototypes, and modern startup aesthetics utilizing tailored dark-theme styles and responsive layouts.",
      icon: <Layout size={24} />,
      color: "#FFD600",
      colorRGB: "255, 214, 0",
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
      title: "Automation Systems",
      desc: "Integrating API endpoints, scrapers, automated email/SMS alerts, and scheduling software to run business operations 24/7.",
      icon: <Settings size={24} />,
      color: "#FF5C2B",
      colorRGB: "255, 92, 43",
      deliverables: [
        "Custom Web Scrapers & Telemetry Alerts",
        "Cron-Scheduled Workflow Workers",
        "Multi-API Database Integrations",
        "Automated SMS / Email Notification Hubs"
      ],
      tech: ["Node.js", "Python", "Docker", "GitHub Actions", "AWS Lambda"]
    }
  ];

  const faqs = [
    {
      q: "What does NEXUS build?",
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
        padding: "160px 0 100px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Glows */}
      <div style={{
        position: "absolute",
        top: "-10%",
        left: "-10%",
        width: "50%",
        height: "50%",
        background: `radial-gradient(circle, rgba(${activeSvcData.colorRGB}, 0.08) 0%, transparent 60%)`,
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: 0,
        transition: "background 0.5s ease"
      }} />

      {/* 1. HEADER */}
      <div
        className="container reveal-text"
        style={{
          margin: "0 auto 40px",
          maxWidth: "700px",
          textAlign: "center",
          position: "relative",
          zIndex: 2
        }}
      >
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "8px 16px",
          borderRadius: "100px",
          backdropFilter: "blur(10px)",
          marginBottom: "24px"
        }}>
          <Sparkles size={16} color="var(--accent)" />
          <span style={{
            color: "var(--accent)",
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.85rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}>
            {activeTab === "capabilities" ? "Core Capabilities" : "Knowledge Base"}
          </span>
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            color: "var(--foreground)",
            marginBottom: "16px",
            lineHeight: 1.1
          }}
        >
          {activeTab === "capabilities" ? "Premium " : "Frequently "}
          <span style={{ 
            background: "linear-gradient(90deg, #00FFAB, #00E5FF)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent"
          }}>
            {activeTab === "capabilities" ? "Services" : "Questions"}
          </span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: "1.6" }}>
          Every engagement is built around practical outcomes: sharper positioning, better collaboration, and systems that compound.
        </p>
      </div>

      {/* 2. TAB SWITCHER (Glassmorphism) */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "40px", position: "relative", zIndex: 2 }}>
        <div style={{
          display: "flex",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "100px",
          padding: "6px",
          backdropFilter: "blur(12px)"
        }}>
          <button
            onClick={() => setActiveTab("capabilities")}
            style={{
              padding: "12px 32px",
              borderRadius: "100px",
              background: activeTab === "capabilities" ? "rgba(255,255,255,0.1)" : "transparent",
              border: "none",
              color: activeTab === "capabilities" ? "#fff" : "rgba(255,255,255,0.5)",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <Settings size={16} /> Capabilities
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            style={{
              padding: "12px 32px",
              borderRadius: "100px",
              background: activeTab === "faq" ? "rgba(255,255,255,0.1)" : "transparent",
              border: "none",
              color: activeTab === "faq" ? "#fff" : "rgba(255,255,255,0.5)",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <Activity size={16} /> FAQs
          </button>
        </div>
      </div>

      {/* 3. CORE CONTENT VIEWPORT CONTAINER */}
      <div className="container" style={{ margin: "0 auto", width: "100%", maxWidth: "1200px", position: "relative", zIndex: 2 }}>
        {activeTab === "capabilities" ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "350px 1fr",
            gap: "24px",
            alignItems: "start"
          }}>
            {/* Left Button Select Stack */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {capabilities.map((cap, idx) => {
                const isActive = activeService === idx;
                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveService(idx)}
                    style={{
                      background: isActive ? `rgba(${cap.colorRGB}, 0.1)` : "rgba(255, 255, 255, 0.02)",
                      border: `1px solid ${isActive ? `rgba(${cap.colorRGB}, 0.3)` : "rgba(255, 255, 255, 0.05)"}`,
                      borderRadius: "16px",
                      padding: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      backdropFilter: "blur(10px)",
                      textAlign: "left"
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                      }
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: isActive ? cap.color : "rgba(255,255,255,0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isActive ? "#000" : "rgba(255,255,255,0.5)",
                        transition: "all 0.3s ease"
                      }}>
                        {cap.icon}
                      </div>
                      <span style={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                        fontFamily: "var(--font-space-grotesk)"
                      }}>{cap.title}</span>
                    </div>
                    {isActive && <ArrowRight size={18} color={cap.color} />}
                  </button>
                );
              })}
            </div>

            {/* Right Details Panel (Glassmorphism Bento Card) */}
            <div
              key={activeService}
              style={{
                background: "rgba(10, 10, 15, 0.6)",
                border: `1px solid rgba(${activeSvcData.colorRGB}, 0.2)`,
                borderRadius: "24px",
                padding: "48px",
                backdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 20px 40px rgba(0,0,0,0.5), inset 0 0 80px rgba(${activeSvcData.colorRGB}, 0.05)`,
                animation: "service-animate-fade 0.4s ease-out"
              }}
            >
              {/* Internal Glow */}
              <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "300px",
                height: "300px",
                background: `radial-gradient(circle, rgba(${activeSvcData.colorRGB}, 0.15) 0%, transparent 70%)`,
                filter: "blur(40px)",
                pointerEvents: "none"
              }} />

              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", marginBottom: "32px", position: "relative", zIndex: 2 }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: `linear-gradient(135deg, ${activeSvcData.color}, rgba(${activeSvcData.colorRGB}, 0.5))`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  boxShadow: `0 10px 20px rgba(${activeSvcData.colorRGB}, 0.3)`
                }}>
                  {activeSvcData.icon}
                </div>
                <div>
                  <h2 style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: "8px",
                    fontFamily: "var(--font-space-grotesk)",
                    lineHeight: 1.1
                  }}>{activeSvcData.title}</h2>
                  <p style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    maxWidth: "600px",
                    margin: 0
                  }}>{activeSvcData.desc}</p>
                </div>
              </div>

              {/* Content Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", position: "relative", zIndex: 2 }}>
                
                {/* Deliverables */}
                <div>
                  <h3 style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "16px",
                    fontFamily: "var(--font-mono)"
                  }}>Key Deliverables</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {activeSvcData.deliverables.map((del, dIdx) => (
                      <div key={dIdx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          background: `rgba(${activeSvcData.colorRGB}, 0.1)`,
                          border: `1px solid rgba(${activeSvcData.colorRGB}, 0.3)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: activeSvcData.color,
                          flexShrink: 0
                        }}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem" }}>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "16px",
                    fontFamily: "var(--font-mono)"
                  }}>Tech Stack Focus</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {activeSvcData.tech.map((t, tIdx) => (
                      <span key={tIdx} style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        padding: "8px 16px",
                        borderRadius: "100px",
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "0.85rem",
                        fontWeight: 500
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 2 }}>
                <Link
                  href={`/contact?service=${activeSvcData.id}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    background: activeSvcData.color,
                    color: "#000",
                    padding: "16px 32px",
                    borderRadius: "100px",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: `0 10px 30px rgba(${activeSvcData.colorRGB}, 0.3)`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 15px 40px rgba(${activeSvcData.colorRGB}, 0.5)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 10px 30px rgba(${activeSvcData.colorRGB}, 0.3)`;
                  }}
                >
                  Inquire About {activeSvcData.title}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* FAQ Section View */
          <div style={{
            display: "grid",
            gridTemplateColumns: "350px 1fr",
            gap: "24px",
            alignItems: "start",
            animation: "service-animate-fade 0.4s ease-out"
          }}>
            {/* FAQ Left Panel (Premium Glassmorphism) */}
            <div style={{
              background: "rgba(10, 10, 15, 0.6)",
              border: "1px solid rgba(0, 229, 255, 0.2)",
              borderRadius: "24px",
              padding: "40px 32px",
              backdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 0 80px rgba(0, 229, 255, 0.05)"
            }}>
              {/* Internal Glow */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "250px",
                height: "250px",
                background: "radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none"
              }} />

              <div style={{ position: "relative", zIndex: 2 }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: "16px", fontFamily: "var(--font-space-grotesk)" }}>Knowledge Base</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "32px" }}>
                  Nexus support index querying. Live updates on SLAs, methodologies, and framework queries.
                </p>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem" }}>Client Support</span>
                    <span style={{ color: "#00FFAB", fontSize: "0.95rem", fontWeight: 700 }}>24/7 Enabled</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem" }}>NDAs</span>
                    <span style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600 }}>Standard Signing</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem" }}>Locations</span>
                    <span style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600 }}>Global Remote</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    background: "linear-gradient(45deg, #00E5FF, #00FFAB)",
                    color: "#000",
                    padding: "16px 24px",
                    borderRadius: "100px",
                    fontWeight: 800,
                    fontSize: "1rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 30px rgba(0, 229, 255, 0.3)",
                    width: "100%"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 229, 255, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 229, 255, 0.3)";
                  }}
                >
                  Custom Request Wizard <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* FAQ Accordion list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    background: openFaq === idx ? "rgba(255, 255, 255, 0.04)" : "rgba(10, 10, 15, 0.4)",
                    border: `1px solid ${openFaq === idx ? "rgba(0, 229, 255, 0.3)" : "rgba(255, 255, 255, 0.05)"}`,
                    borderRadius: "20px",
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                    backdropFilter: "blur(20px)",
                    boxShadow: openFaq === idx ? "0 10px 30px rgba(0,0,0,0.3)" : "none",
                    position: "relative"
                  }}
                >
                  {openFaq === idx && (
                    <div style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "150px",
                      height: "150px",
                      background: "radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%)",
                      filter: "blur(30px)",
                      pointerEvents: "none"
                    }} />
                  )}
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: "100%",
                      padding: "28px 32px",
                      background: "transparent",
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: openFaq === idx ? "#fff" : "rgba(255,255,255,0.8)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      textAlign: "left",
                      outline: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-space-grotesk)",
                      position: "relative",
                      zIndex: 2
                    }}
                  >
                    <span>{faq.q}</span>
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: openFaq === idx ? "linear-gradient(135deg, #00E5FF, #00FFAB)" : "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.4s ease",
                      color: openFaq === idx ? "#000" : "rgba(255,255,255,0.6)",
                      boxShadow: openFaq === idx ? "0 4px 15px rgba(0, 229, 255, 0.4)" : "none",
                      flexShrink: 0
                    }}>
                      {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: openFaq === idx ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      position: "relative",
                      zIndex: 2
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <div
                        style={{
                          padding: "0 32px 32px",
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "1.05rem",
                          lineHeight: "1.7",
                        }}
                      >
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes service-animate-fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </div>
  );
}
