"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Trophy, ArrowRight, Shield, Zap, Sparkles, Box } from "lucide-react";

interface WorksCardImageProps {
  item: {
    code: string;
    title: string;
    img: string;
    imgs?: string[];
    video?: string;
  };
}

function WorksCardImage({ item }: WorksCardImageProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!item.imgs || item.imgs.length <= 1 || hovered) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % item.imgs!.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hovered, item.imgs]);

  if (item.video) {
    return (
      <div 
        className="works-editorial-image-box"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <span className="works-editorial-badge" style={{ zIndex: 5 }}>{item.code}</span>
        <video
          src={item.video}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
        />
      </div>
    );
  }

  if (!item.imgs || item.imgs.length <= 1) {
    return (
      <div className="works-editorial-image-box">
        <span className="works-editorial-badge">{item.code}</span>
        <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    );
  }

  return (
    <div
      className="works-editorial-image-box"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <span className="works-editorial-badge" style={{ zIndex: 5 }}>{item.code}</span>
      {item.imgs.map((imgSrc, idx) => (
        <img
          key={imgSrc}
          src={imgSrc}
          alt={`${item.title} slide ${idx + 1}`}
          style={{
            position: idx === 0 ? "relative" : "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: currentIdx === idx ? 1 : 0,
            transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.07)" : "scale(1)",
            zIndex: currentIdx === idx ? 2 : 1,
          }}
        />
      ))}
    </div>
  );
}

export default function Works() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "project" | "championship">("all");

  useEffect(() => {
    const checkAndStopLenis = () => {
      if (typeof window === "undefined") return false;
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.stop === "function" && typeof lenis.start === "function") {
        try {
          if (activeProject !== null) {
            lenis.stop();
          } else {
            lenis.start();
          }
          return true;
        } catch (e) {
          console.error("Error controlling Lenis:", e);
          return true;
        }
      }
      return false;
    };

    if (typeof document !== "undefined" && document.body) {
      if (activeProject !== null) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }

    const found = checkAndStopLenis();

    let intervalId: any;
    if (!found) {
      let attempts = 0;
      intervalId = setInterval(() => {
        attempts++;
        const done = checkAndStopLenis();
        if (done || attempts > 15) {
          clearInterval(intervalId);
        }
      }, 100);
    }

    return () => {
      if (typeof document !== "undefined" && document.body) {
        document.body.style.overflow = "";
      }
      if (intervalId) clearInterval(intervalId);
      
      if (typeof window !== "undefined") {
        const lenis = (window as any).lenis;
        if (lenis && typeof lenis.start === "function") {
          try {
            lenis.start();
          } catch (e) {
            console.error("Error starting Lenis in cleanup:", e);
          }
        }
      }
    };
  }, [activeProject]);

  const registryItems = [
    {
      type: "project",
      id: "sheild-ai",
      code: "PRJ-01",
      title: "SHEild AI Platform",
      subtitle: "AI-Powered Women Safety & Emergency Response System",
      desc: "An intelligent safety platform leveraging Artificial Intelligence, safe-route navigation, predictive risk detection, and automated emergency response workflows to enhance personal security and community well-being.",
      details: "Traditional safety solutions are reactive and depend heavily on manual intervention after an incident occurs. SHEild AI introduces a proactive protection framework capable of identifying potential risks, recommending safer routes, and triggering intelligent emergency workflows in real time.\n\nDeveloped and validated during multiple national-level hackathons, the platform demonstrates how AI can be leveraged to address critical social challenges while maintaining accessibility, scalability, and reliability.",
      tags: ["Flutter", "Machine Learning", "Geolocation Services", "Emergency Response Automation", "Node.js", "Firebase"],
      icon: <Shield size={22} />,
      color: "#00e5ff",
      colorRGB: "0, 229, 255",
      metricsList: [
        { val: "95%", name: "Risk Detection Accuracy" },
        { val: "<3s", name: "Emergency Response Time" },
        { val: "24/7", name: "AI Safety Monitoring" }
      ],
      achievement: "🏆 Building AI-powered safety infrastructure for a safer and more empowered society.",
      img: "/images/careforyou_ui.png",
      video: "/images/sheild_ai_demo.mp4"
    },
    {
      type: "championship",
      id: "tic",
      code: "HACK-01",
      title: "Technocrats Innovation Challenge (TIC 2K26)",
      subtitle: "Organized by Technocrats Institute of Technology & Science, Bhopal | First Prize Winner",
      desc: (
        <span>
          Out of <strong style={{ color: "#ffffff" }}>200+ competing teams</strong> and innovators across multiple institutions, Team NEXUS secured the <strong style={{ color: "var(--accent)" }}>1st Prize (₹20,000)</strong> at the prestigious Technocrats Innovation Challenge 2K26.
        </span>
      ),
      details: (
        <span>
          Through a demanding <strong style={{ color: "#ffffff" }}>36-hour innovation sprint</strong>, our team successfully advanced through multiple evaluation rounds and emerged as the overall champions with <strong style={{ color: "#ffffff" }}>SHEild AI</strong>, an AI-powered platform focused on Women Safety, Empowerment, and Social Impact.
        </span>
      ),
      tags: ["Grand Prize", "TIC 2K26", "₹20,000"],
      icon: <Trophy size={22} />,
      color: "#ffd600",
      colorRGB: "255, 214, 0",
      metricsList: [
        { val: "1st Place", name: "Rank" },
        { val: "₹20,000", name: "Grand Prize" },
        { val: "36 Hours", name: "Sprint Duration" }
      ],
      achievement: "🏆 GRAND PRIZE WINNER",
      img: "/images/hackathon_tic.jpg",
      imgs: ["/images/hackathon_tic.jpg", "/images/hackathon_tic_2.jpg"],
      badge: "🏆 GRAND PRIZE WINNER · ₹20,000",
      org: "Technocrats Institute of Technology & Science, Bhopal",
      scope: (
        <span>
          Developed and deployed an intelligent assistance ecosystem integrating <strong style={{ color: "#ffffff" }}>AI-driven emergency response</strong>, <strong style={{ color: "#ffffff" }}>safety analytics</strong>, and <strong style={{ color: "#ffffff" }}>real-time support features</strong>. The solution was evaluated on <strong style={{ color: "#ffffff" }}>innovation, scalability, social impact, technical execution, and user experience</strong> under intensive hackathon conditions.
        </span>
      )
    },
    {
      type: "project",
      id: "nexus-room",
      code: "PRJ-02",
      title: "Nexus Launch Command Room",
      subtitle: "Centralized operational war room & system metrics",
      desc: "A dashboard checking active client marketing beats, schedules, owner tasks, and live telemetry drift.",
      details: "Built for fast-scaling startups and co-marketing groups. Hooks direct analytics flows into client databases, checking asset approvals, partner marketing timelines, and live traffic metrics to prevent coordination issues.",
      tags: ["Launch Ops", "Dashboards", "FastAPI"],
      icon: <Zap size={22} />,
      color: "#e8602e",
      colorRGB: "232, 96, 46",
      metricsList: [
        { val: "100%", name: "On-Time Launch" },
        { val: "0ms", name: "Cache Latency" },
        { val: "8 Co-Agents", name: "Tracked Globally" }
      ],
      achievement: "Awarded 1st Place National Hackathon trophy for Real-Time State Monitors.",
      img: "/images/dashboard_ui.png"
    },
    {
      type: "championship",
      id: "bgi-hackathon",
      code: "HACK-02",
      title: "BGI Hackathon 2026 (Vision 2047 | Viksit Bharat)",
      subtitle: "Organized by Bansal Group of Institutes & MPSEDC | National Runner-Up",
      desc: (
        <span>
          Competing against <strong style={{ color: "#ffffff" }}>600+ teams</strong> and over <strong style={{ color: "#ffffff" }}>2,800 participants</strong> from across India, Team NEXUS secured the <strong style={{ color: "#00e5ff" }}>Runner-Up Position (₹12,000)</strong> at the prestigious BGI Hackathon 2026 held in Indore.
        </span>
      ),
      details: (
        <span>
          Through multiple rounds of technical evaluation, mentorship sessions, and final pitching, our team demonstrated exceptional innovation and execution with <strong style={{ color: "#ffffff" }}>SHEild AI</strong>, an intelligent safety platform designed to empower women and vulnerable communities.
        </span>
      ),
      tags: ["National Runner-Up", "BGI 2026", "₹12,000"],
      icon: <Trophy size={22} />,
      color: "#00e5ff",
      colorRGB: "0, 229, 255",
      metricsList: [
        { val: "2nd Place", name: "Rank" },
        { val: "₹12,000", name: "Runner-Up Prize" },
        { val: "600+ Teams", name: "Competitors" }
      ],
      achievement: "🥈 NATIONAL RUNNER-UP",
      img: "/images/hackathon_bgi.jpg",
      imgs: ["/images/hackathon_bgi.jpg", "/images/hackathon_bgi_2.png"],
      badge: "🥈 NATIONAL RUNNER-UP · ₹12,000",
      org: "Bansal Group of Institutes & MPSEDC",
      scope: (
        <span>
          AI-driven safety ecosystem integrating <strong style={{ color: "#ffffff" }}>risk-aware navigation</strong>, <strong style={{ color: "#ffffff" }}>emergency response automation</strong>, <strong style={{ color: "#ffffff" }}>intelligent alerts</strong>, and <strong style={{ color: "#ffffff" }}>real-time assistance mechanisms</strong> validated during a <strong style={{ color: "#ffffff" }}>national-level innovation challenge</strong>.
        </span>
      )
    },
    {
      type: "project",
      id: "customer-agent",
      code: "PRJ-03",
      title: "Automated Customer Agent",
      subtitle: "24/7 client qualifying automated chatbot system",
      desc: "An intelligent chatbot integrated into corporate websites to qualify prospects and answer documentation queries.",
      details: "After-hours sales traffic often goes unanswered, leading to client dropoffs. We configured a localized LLM agent trained on company documents to engage, qualify incoming prospects autonomously.",
      tags: ["AI Chatbot", "Automation", "Retention"],
      icon: <Shield size={22} />,
      color: "#00e676",
      colorRGB: "0, 230, 118",
      metricsList: [
        { val: "+45%", name: "MoM Lead Capture" },
        { val: "124K", name: "Users Guided" },
        { val: "99.98%", name: "Active SLA Uptime" }
      ],
      achievement: "National Hackathon Championship Runner Up - Scaling System Category.",
      img: "/images/careforyou_ui.png"
    },
    {
      type: "project",
      id: "restaurant-app",
      code: "PRJ-04",
      title: "Restaurant App Dispatcher",
      subtitle: "White-labeled ordering and local dispatch mobile system",
      desc: "A mobile ordering and driver dispatch application built to bypass high aggregator commission fees.",
      details: "Traditional delivery systems charge restaurants up to 30% commission per order. We built a custom white-labeled Flutter app that manages local ordering, direct payment checkouts, and local driver dispatch routing with zero commission leaks.",
      tags: ["Mobile App", "Flutter", "SaaS Core"],
      icon: <Box size={22} />,
      color: "#d500f9",
      colorRGB: "213, 0, 249",
      metricsList: [
        { val: "0%", name: "Commission Leak" },
        { val: "100%", name: "Direct Delivery" },
        { val: "60fps", name: "Render Speeds" }
      ],
      achievement: "Ecosystem Standard for Local Indore Merchant Logistics.",
      img: "/images/restaurant_app_ui.png"
    }
  ];

  const filteredItems = registryItems.filter(
    (item) => filter === "all" || item.type === filter
  );

  return (
    <div
      style={{
        padding: "140px 0 80px",
        minHeight: "100vh",
        fontFamily: "var(--font-manrope), sans-serif",
      }}
    >
      <div className="container">
        {/* Page Header */}
        <div style={{ marginBottom: "20px", textAlign: "center" }} className="reveal-text">
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "8px" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Case Directory
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
            Selected <span className="font-serif-i" style={{ color: "var(--accent)" }}>Works</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
            Explore an index of our production systems, software deployments, and award-winning hackathon championships.
          </p>
        </div>

        {/* 1. FILTERING COMPONENT */}
        <div className="works-filter-container">
          <button
            className={`works-filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Works
          </button>
          <button
            className={`works-filter-btn ${filter === "project" ? "active" : ""}`}
            onClick={() => setFilter("project")}
          >
            Client Projects
          </button>
          <button
            className={`works-filter-btn ${filter === "championship" ? "active" : ""}`}
            onClick={() => setFilter("championship")}
          >
            Championships
          </button>
        </div>

        {/* 2. EDITORIAL GRID */}
        <div className="works-editorial-grid">
          {filteredItems.map((item) => {
            // Find original index in registryItems to pass to modal state
            const originalIndex = registryItems.findIndex((r) => r.id === item.id);
            return (
              <div
                key={item.id}
                className="works-editorial-card works-animate-fade-in"
                style={{
                  "--card-theme-color": item.colorRGB
                } as React.CSSProperties}
                onClick={() => setActiveProject(originalIndex)}
              >
                {/* Screenshot Image Container */}
                <WorksCardImage item={item} />

                {/* Card Info Box */}
                <div className="works-editorial-details">
                  <div
                    className="works-editorial-meta"
                    style={{ color: item.type === "project" ? "var(--accent)" : "#ffd600" }}
                  >
                    {item.type === "project" ? "System Deployment" : "National Championship"}
                  </div>

                  <h3 className="works-editorial-title">{item.title}</h3>
                  <p className="works-editorial-subtitle">{item.subtitle}</p>
                  <p className="works-editorial-desc">{item.desc}</p>

                  {/* Inline Stats/Metrics */}
                  <div className="works-editorial-metrics">
                    {item.metricsList.map((m, mIdx) => (
                      <div key={mIdx} className="works-editorial-metric">
                        <span className="works-editorial-metric-val">{m.val}</span>
                        <span className="works-editorial-metric-name">{m.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Clean CTA trigger */}
                  <div className="works-editorial-action">
                    <span>Explore Specifications</span>
                    <ArrowRight size={14} className="action-arrow" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. PROFESSIONAL SPECIFICATION SHEET (MODAL) */}
      <div
        className={`project-detail-overlay ${activeProject !== null ? "active" : ""}`}
        onClick={() => setActiveProject(null)}
      >
        <div
          className="detail-panel"
          data-lenis-prevent
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Trigger */}
          <button
            className="detail-close-btn"
            onClick={() => setActiveProject(null)}
            aria-label="Close specifications sheet"
          >
            <X size={20} />
          </button>

          {activeProject !== null && (
            <>
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: registryItems[activeProject].type === "project" ? "var(--accent)" : "#ffd600",
                    display: "block",
                    marginBottom: "10px",
                    marginTop: "20px",
                  }}
                >
                  {registryItems[activeProject].type === "project" ? "Deployment Registry" : "Championship Credential"}
                </span>
                
                <h2
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "8px",
                  }}
                >
                  {registryItems[activeProject].title}
                </h2>
                
                <p
                  style={{
                    color: "#94a3b8",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginBottom: "28px",
                  }}
                >
                  {registryItems[activeProject].subtitle}
                </p>

                {/* Clean Image Viewport in Modal */}
                <div
                  style={{
                    height: "230px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    marginBottom: "32px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    background: "#09090d",
                    position: "relative",
                  }}
                >
                  {registryItems[activeProject].video ? (
                    <video
                      src={registryItems[activeProject].video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <img
                      src={registryItems[activeProject].img}
                      alt={registryItems[activeProject].title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "rgba(0, 0, 0, 0.8)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "4px",
                      padding: "4px 10px",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {registryItems[activeProject].code}
                  </div>
                </div>

                {/* Description Chronicle */}
                <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
                  Overview & Execution
                </h4>
                <p style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "24px" }}>
                  {registryItems[activeProject].details}
                </p>

                {/* Hackathon scope details */}
                {registryItems[activeProject].type === "championship" && (
                  <>
                    <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
                      Core Tested Scope
                    </h4>
                    <p style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "24px" }}>
                      {registryItems[activeProject].scope}
                    </p>
                  </>
                )}

                {/* System Parameters Metrics */}
                <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "16px" }}>
                  System Metrics
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "32px" }}>
                  {registryItems[activeProject].metricsList.map((m, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.04)",
                        borderRadius: "10px",
                        padding: "12px",
                        textAlign: "center",
                        flex: "1 1 130px",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          color: "var(--accent)",
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          fontFamily: "var(--font-syne), sans-serif",
                          marginBottom: "4px",
                        }}
                      >
                        {m.val}
                      </span>
                      <span
                        style={{
                          color: "#64748b",
                          fontSize: "0.68rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {m.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stack Badges */}
                <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
                  Technology Stack
                </h4>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
                  {registryItems[activeProject].tags.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        borderRadius: "99px",
                        padding: "6px 14px",
                        color: "#ffffff",
                        fontSize: "0.78rem",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Championship Highlight */}
                <div
                  style={{
                    background: "rgba(255, 214, 0, 0.02)",
                    border: "1px solid rgba(255, 214, 0, 0.12)",
                    borderRadius: "12px",
                    padding: "18px",
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Trophy size={18} style={{ color: "#ffd600" }} />
                  <p style={{ color: "#ffd600", fontSize: "0.82rem", fontWeight: 600, lineHeight: "1.4", margin: 0 }}>
                    {registryItems[activeProject].achievement}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "24px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <Link
                  href="/contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "14px 0",
                    width: "100%",
                    background: "linear-gradient(135deg, var(--accent) 0%, #c64213 100%)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                    textAlign: "center",
                    boxShadow: "0 4px 15px rgba(232, 96, 46, 0.2)",
                  }}
                  className="btn-premium"
                  onClick={() => setActiveProject(null)}
                >
                  {registryItems[activeProject].type === "project" ? "Deploy Similar AI System" : "Partner With Team Nexus"}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
