"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Brain, Code, Smartphone, Layout, Zap, ArrowUpRight, Check, Activity, MapPin, Briefcase } from "lucide-react";

export default function Team() {
  const [activeTab, setActiveTab] = useState<"specialists" | "process">("specialists");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileExpandedIdx, setMobileExpandedIdx] = useState<number>(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [flipKey, setFlipKey] = useState(0);
  const accordionRef = useRef<HTMLDivElement>(null);

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
      icon: <Brain size={13} />,
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
      icon: <Code size={13} />,
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
      icon: <Smartphone size={13} />,
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
      icon: <Layout size={13} />,
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
      icon: <Zap size={13} />,
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
  ];

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
          margin: "0 auto 36px",
          maxWidth: "800px",
          textAlign: "center"
        }}
      >
        <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "8px", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.08em" }}>
          Interactive Directory
        </span>
        <h1
          className="hero-title font-display"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "12px",
            letterSpacing: "-0.02em",
          }}
        >
          Specialist Pods &amp; <span className="font-serif-i" style={{ color: "var(--accent)" }}>Lifecycle</span>
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
          Interact with columns smoothly to inspect team specialist profiles or discover deliverables across our deployment process stages.
        </p>
      </div>

      {/* 2. TAB SWITCHER */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "40px" }}>
        <div className="services-tab-bar">
          <button
            className={`services-view-tab tab-switch-enter ${activeTab === "specialists" ? "active" : ""}`}
            onClick={() => handleTabSwitch("specialists")}
            data-hover="true"
          >
            <span className="tab-icon-wrap"><Brain size={14} /></span>
            <span className="tab-badge">01</span>
            <span>Specialist Pods</span>
          </button>
          <button
            className={`services-view-tab tab-switch-enter ${activeTab === "process" ? "active" : ""}`}
            onClick={() => handleTabSwitch("process")}
            data-hover="true"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="tab-icon-wrap"><Activity size={14} /></span>
            <span className="tab-badge">02</span>
            <span>Delivery Process</span>
          </button>
        </div>
      </div>

      {/* 3. CORE ACCORDION VIEWPORT */}
      <div className="container" style={{ margin: "0 auto", width: "100%" }}>
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
                >
                  <img src={member.photo} alt={member.name} className="accordion-bg-image" />
                  <div className="accordion-overlay" style={{ opacity: isExpanded ? 1 : 0, transition: "opacity 0.4s ease" }} />

                  {/* Collapsed view (Vertical text orientation) */}
                  <div className="accordion-collapsed-view">
                    <span className="accordion-index">{member.code}</span>
                    <span className="accordion-vertical-title">{member.name}</span>
                    <div className="accordion-icon-box">
                      {member.icon}
                    </div>
                  </div>

                  {/* Expanded view (Simple: Portrait Image background + Bottom details Name, Role, CTA) */}
                  <div className="accordion-expanded-view">
                    <div className="accordion-content-wrapper" style={{ justifyContent: "space-between", height: "100%" }}>
                      {/* Header Row */}
                      <div className="accordion-header-row">
                        <span className="accordion-header-code">{member.code}</span>
                      </div>

                      {/* Bottom Info & CTA */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        <div>
                          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.72rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}>
                            {member.role}
                          </span>
                          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "-0.015em" }}>
                            {member.name}
                          </h2>
                        </div>
                        
                        <Link href={member.portfolio} className="accordion-cta-btn" style={{ alignSelf: "flex-start" }} data-hover="true">
                          Access Archives
                          <ArrowUpRight size={13} className="btn-arrow" />
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
                >
                  <div className="accordion-overlay" style={{ opacity: isExpanded ? 1 : 0.05, transition: "opacity 0.4s ease" }} />

                  {/* Collapsed view (Vertical text orientation) */}
                  <div className="accordion-collapsed-view">
                    <span className="accordion-index">SYS-{step.num}</span>
                    <span className="accordion-vertical-title">{step.label}</span>
                    <div className="accordion-icon-box">
                      <Activity size={13} />
                    </div>
                  </div>

                  {/* Expanded view (Deliverables & Objectives checklist) */}
                  <div className="accordion-expanded-view">
                    <div className="accordion-content-wrapper">
                      {/* Header Row */}
                      <div className="accordion-header-row">
                        <span className="accordion-header-code">SYS-{step.num}</span>
                        <span className="accordion-header-subtitle">Phase Objective</span>
                      </div>

                      {/* Body details */}
                      <div className="accordion-body-details">
                        <h2 className="accordion-body-title">{step.title}</h2>
                        <p className="accordion-body-desc">{step.desc}</p>
                        
                        {/* Compact deliverables checklist list */}
                        <div style={{ marginTop: "6px" }}>
                          {step.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="accordion-checklist-item">
                              <span className="accordion-checklist-check">
                                <Check size={12} strokeWidth={2.5} />
                              </span>
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Row */}
                      <div className="accordion-footer-row">
                        <div className="accordion-meta-pills">
                          <div className="accordion-meta-pill">
                            Exit Gate: Active
                          </div>
                          <div className="accordion-meta-pill">
                            SLA: Calibrated
                          </div>
                        </div>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileExpandedIdx((prev) => (prev + 1) % steps.length);
                            setHoveredIdx((prev) => prev !== null ? (prev + 1) % steps.length : null);
                          }}
                          className="accordion-cta-btn"
                          data-hover="true"
                        >
                          Proceed Stage
                          <ArrowUpRight size={13} className="btn-arrow" />
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
