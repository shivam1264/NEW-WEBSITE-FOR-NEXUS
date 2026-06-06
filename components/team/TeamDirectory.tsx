"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Brain, Code, Smartphone, Layout, Zap, ArrowUpRight, Check, Activity, Sparkles } from "lucide-react";

export default function TeamDirectory() {
  const [activeTab, setActiveTab] = useState<"specialists" | "process">("specialists");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileExpandedIdx, setMobileExpandedIdx] = useState<number>(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [flipKey, setFlipKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleTabSwitch = useCallback((tab: "specialists" | "process") => {
    setActiveTab(tab);
    setHoveredIdx(null);
    setMobileExpandedIdx(0);
    setFlipKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    if (activeTab !== "specialists" || autoplayPaused || hoveredIdx !== null) return;

    const interval = setInterval(() => {
      setMobileExpandedIdx((prev) => (prev + 1) % 5);
    }, 3500);

    return () => clearInterval(interval);
  }, [activeTab, autoplayPaused, hoveredIdx]);

  const members = [
    {
      id: "shubham",
      code: "POD-01",
      name: "Shubham Pawar",
      role: "AI Lead Engineer",
      desc: "Architects specialized vector index databases, qualifies customer intent profiles, and structures secure cognitive agent workflows to automate operations.",
      specs: ["Python", "FastAPI", "VectorDB", "LangChain"],
      portfolio: "/team/shubham-pawar",
      photo: "/images/team_member_1.jpg",
      icon: <Brain size={16} />,
      color: "#00FFAB",
      colorRGB: "0, 255, 171"
    },
    {
      id: "shivansh",
      code: "POD-02",
      name: "Shivansh Mehra",
      role: "Full Stack Developer",
      desc: "Constructs Next.js server structures, scalable API endpoints, secure database migrations, and edge-caching architectures for instant loads.",
      specs: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
      portfolio: "/team/shivansh-mehra",
      photo: "/images/team_member_2.jpg",
      icon: <Code size={16} />,
      color: "#00E5FF",
      colorRGB: "0, 229, 255"
    },
    {
      id: "prakash",
      code: "POD-03",
      name: "Prakash Kumar Biswal",
      role: "Agentic AI & Flutter Developer",
      desc: "Builds high-fidelity cross-platform mobile apps, local dispatch notifications, offline state sync, and secure payment checkout flows.",
      specs: ["Flutter", "Dart", "Firebase", "Agentic AI"],
      portfolio: "/team/prakash-biswal",
      photo: "/images/team_member_3.jpg",
      icon: <Smartphone size={16} />,
      color: "#FF007F",
      colorRGB: "255, 0, 127"
    },
    {
      id: "shivam",
      code: "POD-04",
      name: "Shivam Kumar Maurya",
      role: "UI/UX & Frontend Developer",
      desc: "Designs polished dark-mode interfaces, interactive Figma wireframes, customized brand system assets, and high-fidelity prototype flows.",
      specs: ["Figma", "UI Design", "Tailwind", "CSS3"],
      portfolio: "/team/shivam-maurya",
      photo: "/images/team_member_4.jpg",
      icon: <Layout size={16} />,
      color: "#D500F9",
      colorRGB: "213, 0, 249"
    },
    {
      id: "tushar",
      code: "POD-05",
      name: "Tushar Das",
      role: "Ops & Marketing Lead",
      desc: "Manages agile milestones, validates early MVP scopes, and coordinates launch schedules to prevent timeline slip and ensure outcome alignments.",
      specs: ["MVP Scoping", "Agile Sprints", "Launch Ops", "Marketing"],
      portfolio: "/team/tushar-das",
      photo: "/images/team_member_5.jpg",
      icon: <Zap size={16} />,
      color: "#FFD600",
      colorRGB: "255, 214, 0"
    },
  ];

  const steps = [
    {
      num: "01",
      label: "Discover",
      title: "Requirement Discussion",
      desc: "We sit down with your stakeholders to outline goals, feature specifications, and precise functional deliverables.",
      deliverables: [
        "Stakeholder Requirement Alignments",
        "System Architecture Blueprinting",
        "Functional Specifications Mapping",
        "Startup MVP Scope Definition"
      ],
      color: "#00FFAB"
    },
    {
      num: "02",
      label: "Plan",
      title: "UI/UX Planning",
      desc: "We design wireframes and high-fidelity interactive mockups to align on the project's visual identity and interface flows.",
      deliverables: [
        "Figma Interactive Wireframing",
        "UI Dark-Mode Aesthetic Design",
        "Design System Specifications Signoff",
        "Responsive Layout Prototyping"
      ],
      color: "#00E5FF"
    },
    {
      num: "03",
      label: "Build",
      title: "System Development",
      desc: "Our developers build the scalable database migrations, secure backend APIs, and integrated AI prompt pipelines.",
      deliverables: [
        "Database Migration Architecting",
        "API Route Code Configuration",
        "LLM Prompt Tuning & RAG Integration",
        "Frontend State Machine Integration"
      ],
      color: "#FF007F"
    },
    {
      num: "04",
      label: "Test",
      title: "Exhaustive Testing",
      desc: "We run concurrent mock traffic load tests, API sanity testing, and audit responsive styling across viewport widths.",
      deliverables: [
        "End-to-End Cypress Integration Tests",
        "SLA Query Latency Benchmarking",
        "Security Gate Boundary Auditing",
        "Cross-Device UX Responsiveness Check"
      ],
      color: "#D500F9"
    },
    {
      num: "05",
      label: "Launch",
      title: "Production Launch",
      desc: "We deploy your system to high-speed CDN edge nodes and calibrate production domain nameservers with SSL certificates.",
      deliverables: [
        "Vercel / AWS High-Speed Edge Deployment",
        "Nameservers & SSL Key Activation",
        "Live Telemetry HUD Verification",
        "Database Replica Provisioning"
      ],
      color: "#FFD600"
    },
    {
      num: "06",
      label: "Maintain",
      title: "Support & Maintenance",
      desc: "We monitor active traffic telemetry, implement dependency security patches, and maintain high-fidelity uptime SLA thresholds.",
      deliverables: [
        "Active Traffic Drift Detection",
        "Dependency Library Vulnerability Patches",
        "Agile Feature Backlog Priority Sync",
        "24/7 SLA Server Monitoring"
      ],
      color: "#FF5C2B"
    },
  ];

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
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80%",
        height: "50%",
        background: `radial-gradient(ellipse at center, rgba(0, 229, 255, 0.08) 0%, transparent 60%)`,
        filter: "blur(100px)",
        pointerEvents: "none",
        zIndex: 0,
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
            Interactive Directory
          </span>
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(3rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "var(--foreground)",
            marginBottom: "20px",
            lineHeight: 1.05,
            letterSpacing: "-0.02em"
          }}
        >
          The Minds Behind <br />
          <span style={{ 
            background: "linear-gradient(90deg, #00E5FF, #00FFAB)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent"
          }}>
            NEXUS
          </span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
          Explore our specialized engineering pods and the meticulous delivery framework we use to build high-end agentic AI solutions.
        </p>
      </div>

      {/* 2. TAB SWITCHER (Premium Glassmorphism) */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "60px", position: "relative", zIndex: 2 }}>
        <div style={{
          display: "flex",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "100px",
          padding: "6px",
          backdropFilter: "blur(12px)"
        }}>
          <button
            onClick={() => handleTabSwitch("specialists")}
            style={{
              padding: "12px 32px",
              borderRadius: "100px",
              background: activeTab === "specialists" ? "rgba(255,255,255,0.1)" : "transparent",
              border: "none",
              color: activeTab === "specialists" ? "#fff" : "rgba(255,255,255,0.5)",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-space-grotesk)"
            }}
          >
            <Brain size={16} /> Specialist Pods
          </button>
          <button
            onClick={() => handleTabSwitch("process")}
            style={{
              padding: "12px 32px",
              borderRadius: "100px",
              background: activeTab === "process" ? "rgba(255,255,255,0.1)" : "transparent",
              border: "none",
              color: activeTab === "process" ? "#fff" : "rgba(255,255,255,0.5)",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-space-grotesk)"
            }}
          >
            <Activity size={16} /> Delivery Process
          </button>
        </div>
      </div>

      {/* 3. CORE ACCORDION VIEWPORT */}
      <div className="container" style={{ margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div 
          className="accordion-viewport-container"
          onMouseEnter={() => setAutoplayPaused(true)}
          onMouseLeave={() => setAutoplayPaused(false)}
        >
          {activeTab === "specialists" ? (
            /* Specialists Accordion Columns */
            members.map((member, idx) => {
              const isExpanded = hoveredIdx === idx || mobileExpandedIdx === idx;
              return (
                <div
                  key={member.id}
                  className={`accordion-column ${isExpanded ? "expanded" : ""}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setMobileExpandedIdx(idx)}
                  style={{
                    background: "rgba(10, 10, 15, 0.4)",
                    border: `1px solid ${isExpanded ? `rgba(${member.colorRGB}, 0.4)` : "rgba(255, 255, 255, 0.05)"}`,
                    borderRadius: "24px",
                    overflow: "hidden",
                    backdropFilter: "blur(20px)",
                    boxShadow: isExpanded ? `0 20px 40px rgba(0,0,0,0.5), inset 0 0 60px rgba(${member.colorRGB}, 0.1)` : "none",
                    margin: "0 4px",
                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  <Image 
                    src={member.photo} 
                    alt={member.name} 
                    className="accordion-bg-image" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover", display: "block" }} 
                  />
                  <div className="accordion-overlay" style={{ opacity: isExpanded ? 0.7 : 0.9, background: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)`, transition: "opacity 0.4s ease" }} />

                  {/* Collapsed view */}
                  <div className="accordion-collapsed-view">
                    <span style={{ color: member.color, fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em" }}>{member.code}</span>
                    <span className="accordion-vertical-title" style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "1.4rem", fontWeight: 700 }}>{member.name}</span>
                    <div style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: `rgba(${member.colorRGB}, 0.1)`,
                      border: `1px solid rgba(${member.colorRGB}, 0.3)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: member.color,
                      marginTop: "auto"
                    }}>
                      {member.icon}
                    </div>
                  </div>

                  {/* Expanded view */}
                  <div className="accordion-expanded-view">
                    <div className="accordion-content-wrapper" style={{ justifyContent: "space-between", height: "100%", padding: "32px" }}>
                      {/* Header Row */}
                      <div className="accordion-header-row" style={{ borderBottom: "none" }}>
                        <span style={{ 
                          background: `rgba(${member.colorRGB}, 0.15)`,
                          color: member.color,
                          padding: "6px 14px",
                          borderRadius: "100px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em"
                        }}>{member.code}</span>
                      </div>

                      {/* Bottom Info & CTA */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div>
                          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.85rem", color: member.color, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                            {member.role}
                          </span>
                          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "#ffffff", margin: 0, lineHeight: 1.1 }}>
                            {member.name}
                          </h2>
                        </div>
                        

                        <Link href={member.portfolio} style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          background: `linear-gradient(90deg, ${member.color}, rgba(${member.colorRGB}, 0.6))`,
                          color: "#000",
                          padding: "14px 28px",
                          borderRadius: "100px",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          textDecoration: "none",
                          alignSelf: "flex-start",
                          transition: "all 0.3s ease",
                          boxShadow: `0 10px 20px rgba(${member.colorRGB}, 0.3)`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow = `0 15px 30px rgba(${member.colorRGB}, 0.5)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = `0 10px 20px rgba(${member.colorRGB}, 0.3)`;
                        }}
                        >
                          Access Archives
                          <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* Process Accordion Columns */
            steps.map((step, idx) => {
              const isExpanded = hoveredIdx === idx || mobileExpandedIdx === idx;
              return (
                <div
                  key={step.num}
                  className={`accordion-column ${isExpanded ? "expanded" : ""}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setMobileExpandedIdx(idx)}
                  style={{
                    background: "rgba(10, 10, 15, 0.4)",
                    border: `1px solid ${isExpanded ? `rgba(0, 229, 255, 0.4)` : "rgba(255, 255, 255, 0.05)"}`,
                    borderRadius: "24px",
                    overflow: "hidden",
                    backdropFilter: "blur(20px)",
                    boxShadow: isExpanded ? `0 20px 40px rgba(0,0,0,0.5), inset 0 0 60px rgba(0, 229, 255, 0.1)` : "none",
                    margin: "0 4px",
                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  <div className="accordion-overlay" style={{ opacity: isExpanded ? 1 : 0.05, transition: "opacity 0.4s ease", background: `radial-gradient(circle at bottom right, rgba(0, 229, 255, 0.15), transparent 70%)` }} />

                  {/* Collapsed view */}
                  <div className="accordion-collapsed-view">
                    <span style={{ color: step.color, fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em" }}>SYS-{step.num}</span>
                    <span className="accordion-vertical-title" style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "1.4rem", fontWeight: 700 }}>{step.label}</span>
                    <div style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: `rgba(0, 229, 255, 0.1)`,
                      border: `1px solid rgba(0, 229, 255, 0.3)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: step.color,
                      marginTop: "auto"
                    }}>
                      <Activity size={16} />
                    </div>
                  </div>

                  {/* Expanded view */}
                  <div className="accordion-expanded-view">
                    <div className="accordion-content-wrapper" style={{ padding: "32px", height: "100%", justifyContent: "space-between" }}>
                      {/* Header Row */}
                      <div className="accordion-header-row" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "16px" }}>
                        <span style={{ 
                          background: `rgba(0, 229, 255, 0.15)`,
                          color: step.color,
                          padding: "6px 14px",
                          borderRadius: "100px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em"
                        }}>SYS-{step.num}</span>
                        <span style={{ color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em", fontFamily: "var(--font-mono)" }}>Phase Objective</span>
                      </div>

                      {/* Body details */}
                      <div className="accordion-body-details" style={{ marginTop: "24px" }}>
                        <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "2.2rem", fontWeight: 800, color: "#fff", marginBottom: "16px", lineHeight: 1.1 }}>{step.title}</h2>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px" }}>{step.desc}</p>
                        
                        {/* Compact deliverables checklist list */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          {step.deliverables.map((del, dIdx) => (
                            <div key={dIdx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                              <span style={{
                                width: "20px", height: "20px", borderRadius: "50%", background: `rgba(0, 229, 255, 0.1)`,
                                border: `1px solid rgba(0, 229, 255, 0.3)`, display: "flex", alignItems: "center", justifyContent: "center",
                                color: step.color, flexShrink: 0
                              }}>
                                <Check size={10} strokeWidth={3} />
                              </span>
                              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9rem" }}>{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Row */}
                      <div className="accordion-footer-row" style={{ marginTop: "auto", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "6px 12px", borderRadius: "100px", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
                            Exit Gate: Active
                          </div>
                        </div>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileExpandedIdx((prev) => (prev + 1) % steps.length);
                            setHoveredIdx((prev) => prev !== null ? (prev + 1) % steps.length : null);
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            background: "transparent",
                            border: `1px solid ${step.color}`,
                            color: step.color,
                            padding: "8px 16px",
                            borderRadius: "100px",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `rgba(0, 229, 255, 0.1)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          Proceed Stage
                          <ArrowUpRight size={14} />
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
