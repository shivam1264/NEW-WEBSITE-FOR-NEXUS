"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Shield, Zap, Sparkles, Box, X, Trophy } from "lucide-react";

export default function Works() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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

    // Attempt to control Lenis immediately
    const found = checkAndStopLenis();

    // If Lenis isn't loaded yet, check periodically
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


  const projects = [
    {
      title: "CareForYou AI Platform",
      subtitle: "Conversational healthcare agent & appointment system",
      desc: "An AI-powered healthcare portal designed to resolve patient scheduling overhead and triage symptoms autonomously.",
      details: "Traditional healthcare portals suffer from massive coordination overhead and patient delays. CareForYou AI maps client health profiles using specialized vector indexes, qualifying symptom severity and routing queries dynamically in real-time.",
      tags: ["AI Assistant", "Healthcare", "Next.js"],
      icon: <Sparkles size={22} />,
      color: "rgba(0, 229, 255, 0.1)",
      metricsList: [
        { val: "180ms", name: "Triage Delay" },
        { val: "94%", name: "Routing Accuracy" },
        { val: "24/7", name: "Agent Uptime" }
      ],
      achievement: "Deploying high-fidelity healthcare automation built for local clinics.",
      img: "/images/careforyou_ui.png"
    },
    {
      title: "Nexus Launch Command Room",
      subtitle: "Centralized operational war room & system metrics",
      desc: "A dashboard checking active client marketing beats, schedules, owner tasks, and live telemetry drift.",
      details: "Built for fast-scaling startups and co-marketing groups. Hooks direct analytics flows into client databases, checking asset approvals, partner marketing timelines, and live traffic metrics to prevent coordination issues.",
      tags: ["Launch Ops", "Dashboards", "FastAPI"],
      icon: <Zap size={22} />,
      color: "rgba(232, 96, 46, 0.15)",
      metricsList: [
        { val: "100%", name: "On-Time Launch" },
        { val: "0ms", name: "Cache Latency" },
        { val: "8 Co-Agents", name: "Tracked Globally" }
      ],
      achievement: "Awarded 1st Place National Hackathon trophy for Real-Time State Monitors.",
      img: "/images/dashboard_ui.png"
    },
    {
      title: "Automated Customer Agent",
      subtitle: "24/7 client qualifying automated chatbot system",
      desc: "An intelligent chatbot integrated into corporate websites to qualify prospects and answer documentation queries.",
      details: "After-hours sales traffic often goes unanswered, leading to client dropoffs. We configured a localized LLM agent trained on company documents to engage, qualify incoming prospects autonomously.",
      tags: ["AI Chatbot", "Automation", "Retention"],
      icon: <Shield size={22} />,
      color: "rgba(0, 230, 118, 0.1)",
      metricsList: [
        { val: "+45%", name: "MoM Lead Capture" },
        { val: "124K", name: "Users Guided" },
        { val: "99.98%", name: "Active SLA Uptime" }
      ],
      achievement: "National Hackathon Championship Runner Up - Scaling System Category.",
      img: "/images/careforyou_ui.png"
    },
    {
      title: "Restaurant App Dispatcher",
      subtitle: "White-labeled ordering and local dispatch mobile system",
      desc: "A mobile ordering and driver dispatch application built to bypass high aggregator commission fees.",
      details: "Traditional delivery systems charge restaurants up to 30% commission per order. We built a custom white-labeled Flutter app that manages local ordering, direct payment checkouts, and local driver dispatch routing with zero commission leaks.",
      tags: ["Mobile App", "Flutter", "SaaS Core"],
      icon: <Box size={22} />,
      color: "rgba(213, 0, 249, 0.15)",
      metricsList: [
        { val: "0%", name: "Commission Leak" },
        { val: "100%", name: "Direct Delivery" },
        { val: "60fps", name: "Render Speeds" }
      ],
      achievement: "Ecosystem Standard for Local Indore Merchant Logistics.",
      img: "/images/restaurant_app_ui.png"
    },
  ];

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
        <div style={{ marginBottom: "60px", maxWidth: "600px" }} className="reveal-text">
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Portfolio
          </span>
          <h1
            className="hero-title font-display"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            Our <span className="font-serif-i" style={{ color: "var(--accent)" }}>Works</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.02rem", lineHeight: "1.65" }}>
            Explore case studies displaying how Team Nexus packages strategy, design, and AI systems into high-performance digital projects.
          </p>
        </div>

        {/* 1. HACKATHON WINS & ACHIEVEMENTS PANEL */}
        <div
          className="pod-direction"
          style={{
            background: "linear-gradient(135deg, rgba(255, 214, 0, 0.05) 0%, rgba(10, 10, 12, 0.8) 100%)",
            border: "1px solid rgba(255, 214, 0, 0.15)",
            borderRadius: "20px",
            padding: "36px",
            marginBottom: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 30px rgba(255, 214, 0, 0.02)",
          }}
          data-hover="true"
        >
          {/* Hackathon Wins Column */}
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(255, 214, 0, 0.08)",
                border: "1px solid rgba(255, 214, 0, 0.25)",
                color: "#ffd600",
                flexShrink: 0,
              }}
            >
              <Trophy size={22} />
            </div>
            <div>
              <h3 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
                2 National Hackathon Wins
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: "1.5", margin: 0 }}>
                Awarded top honors at major national system building competitions for outstanding AI models and server monitors.
              </p>
            </div>
          </div>

          {/* Real World Projects Column */}
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(232, 96, 46, 0.08)",
                border: "1px solid rgba(232, 96, 46, 0.25)",
                color: "var(--accent)",
                flexShrink: 0,
              }}
            >
              <Zap size={22} />
            </div>
            <div>
              <h3 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
                Multiple Real-World Projects
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: "1.5", margin: 0 }}>
                Active in production, serving enterprise clients, scaling data loops, and coordinating stakeholder rituals.
              </p>
            </div>
          </div>

          {/* Core Technologies Column */}
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(0, 229, 255, 0.08)",
                border: "1px solid rgba(0, 229, 255, 0.25)",
                color: "#00e5ff",
                flexShrink: 0,
              }}
            >
              <Box size={22} />
            </div>
            <div>
              <h3 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
                Production-Grade Tech
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: "1.5", margin: 0 }}>
                Engineered with Next.js, React Native, TypeScript, FastAPI, PyTorch, and cached edge infrastructures.
              </p>
            </div>
          </div>
        </div>

        {/* 1.5 NATIONAL HACKATHON SHOWCASE */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{ marginBottom: "40px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "8px" }}>
              <span className="pulsing-dot pulsing-dot-coral" />
              Championship Credentials
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              National Hackathons <span className="font-serif-i" style={{ color: "var(--accent)" }}>Won</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: "8px" }}>
              Our engineering team has competed nationally, building and scaling systems under intense time pressure.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateRows: "1fr", gap: "40px" }}>
            {/* SIH Card */}
            <div
              className="pod-direction"
              data-hover="true"
              style={{
                background: "rgba(10, 10, 12, 0.6)",
                border: "1px solid rgba(255, 214, 0, 0.12)",
                borderRadius: "24px",
                padding: "clamp(20px, 4vw, 40px)",
                display: "flex",
                flexWrap: "wrap",
                gap: "40px",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              {/* Metadata Left */}
              <div style={{ flex: "1 1 500px", maxWidth: "650px" }}>
                <div
                  className="eyebrow-mono"
                  style={{
                    padding: "6px 14px",
                    background: "rgba(255, 214, 0, 0.08)",
                    border: "1px solid rgba(255, 214, 0, 0.25)",
                    borderRadius: "99px",
                    color: "#ffd600",
                    marginBottom: "20px",
                  }}
                >
                  <Trophy size={12} style={{ display: "inline-block", marginRight: "6px", verticalAlign: "middle" }} /> Grand Prize Winner
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                  }}
                >
                  Smart India Hackathon <span className="font-serif-i" style={{ color: "var(--accent)" }}>(SIH)</span>
                </h3>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    color: "var(--accent)",
                    fontWeight: 700,
                    marginBottom: "18px",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                  }}
                >
                  Organized by Ministry of Education, Govt. of India | Indore Hub Champion
                </span>

                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  Out of thousands of competing student-led startups and developer teams across the nation, Team Nexus won the **Grand Prize (₹1,00,000)**. We designed, coded, and deployed a high-capacity triage model and medical scheduling client dashboard within a continuous 36-hour sprint.
                </p>

                <div
                  style={{
                    borderLeft: "2px solid var(--accent)",
                    paddingLeft: "16px",
                    background: "rgba(232, 96, 46, 0.03)",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    borderRadius: "0 8px 8px 0",
                  }}
                >
                  <strong style={{ color: "#ffffff", fontSize: "0.88rem", display: "block", marginBottom: "4px" }}>
                    Core Tested Scope:
                  </strong>
                  <span style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: "1.4" }}>
                    Automated patient intent classifications utilizing custom vector embeds. Tested query delay of 180ms under intensive concurrent mock traffic.
                  </span>
                </div>
              </div>

              {/* Full Background Photo with Hover Name Reveal - SIH */}
              <div
                className="hackathon-photo-card"
                style={{
                  flex: "1 1 420px",
                  maxWidth: "560px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "16 / 10",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255, 214, 0, 0.15)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector(".hackathon-hover-overlay") as HTMLElement | null;
                  if (overlay) { overlay.style.opacity = "1"; overlay.style.transform = "translateY(0)"; }
                  const img = e.currentTarget.querySelector("img") as HTMLElement | null;
                  if (img) img.style.transform = "scale(1.07)";
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector(".hackathon-hover-overlay") as HTMLElement | null;
                  if (overlay) { overlay.style.opacity = "0"; overlay.style.transform = "translateY(10px)"; }
                  const img = e.currentTarget.querySelector("img") as HTMLElement | null;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  src="/images/hackathon_win.png"
                  alt="Smart India Hackathon championship stage"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                {/* Always-visible subtle bottom gradient */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                  pointerEvents: "none",
                }} />
                {/* Hover Overlay */}
                <div
                  className="hackathon-hover-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(30,20,0,0.85) 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    padding: "24px",
                    textAlign: "center",
                  }}
                >
                  <Trophy size={32} style={{ color: "#ffd600", filter: "drop-shadow(0 0 12px rgba(255,214,0,0.6))" }} />
                  <span style={{
                    fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                    fontWeight: 800,
                    color: "#ffffff",
                    fontFamily: "var(--font-display), sans-serif",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}>Smart India Hackathon</span>
                  <span style={{
                    fontSize: "0.8rem",
                    color: "#ffd600",
                    fontWeight: 700,
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>Grand Prize Winner · ₹1,00,000</span>
                </div>
              </div>
            </div>

            {/* AI Innovation Challenge Card */}
            <div
              className="pod-product"
              data-hover="true"
              style={{
                background: "rgba(10, 10, 12, 0.6)",
                border: "1px solid rgba(0, 229, 255, 0.12)",
                borderRadius: "24px",
                padding: "clamp(20px, 4vw, 40px)",
                display: "flex",
                flexWrap: "wrap",
                gap: "40px",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              {/* Metadata Left */}
              <div style={{ flex: "1 1 500px", maxWidth: "650px" }}>
                <div
                  className="eyebrow-mono"
                  style={{
                    padding: "6px 14px",
                    background: "rgba(0, 229, 255, 0.08)",
                    border: "1px solid rgba(0, 229, 255, 0.25)",
                    borderRadius: "99px",
                    color: "#00e5ff",
                    marginBottom: "20px",
                  }}
                >
                  <Trophy size={12} style={{ display: "inline-block", marginRight: "6px", verticalAlign: "middle" }} /> Championship Title
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                  }}
                >
                  National AI <span className="font-serif-i" style={{ color: "var(--accent)" }}>Innovation</span> Challenge
                </h3>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    color: "var(--accent)",
                    fontWeight: 700,
                    marginBottom: "18px",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                  }}
                >
                  Organized by National Technology Consortium &amp; MeitY | Edge Systems Award
                </span>

                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  Recognized nationally for pioneering architecture, Team Nexus designed and demonstrated a live-telemetry edge monitor dashboard. Under testing, the dashboard tracked multi-department data loops and detected system drift latency errors instantly.
                </p>

                <div
                  style={{
                    borderLeft: "2px solid #00e5ff",
                    paddingLeft: "16px",
                    background: "rgba(0, 229, 255, 0.02)",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    borderRadius: "0 8px 8px 0",
                  }}
                >
                  <strong style={{ color: "#ffffff", fontSize: "0.88rem", display: "block", marginBottom: "4px" }}>
                    Core Tested Scope:
                  </strong>
                  <span style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: "1.4" }}>
                    Engineered real-time FastAPI endpoints cached on edge models, verifying 100% data fidelity with 0ms database cache latency overhead.
                  </span>
                </div>
              </div>

              {/* Full Background Photo with Hover Name Reveal - AI Innovation Challenge */}
              <div
                className="hackathon-photo-card"
                style={{
                  flex: "1 1 420px",
                  maxWidth: "560px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "16 / 10",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(0, 229, 255, 0.15)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector(".hackathon-hover-overlay") as HTMLElement | null;
                  if (overlay) { overlay.style.opacity = "1"; overlay.style.transform = "translateY(0)"; }
                  const img = e.currentTarget.querySelector("img") as HTMLElement | null;
                  if (img) img.style.transform = "scale(1.07)";
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector(".hackathon-hover-overlay") as HTMLElement | null;
                  if (overlay) { overlay.style.opacity = "0"; overlay.style.transform = "translateY(10px)"; }
                  const img = e.currentTarget.querySelector("img") as HTMLElement | null;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  src="/images/hackathon_trophy.png"
                  alt="National AI Innovation Challenge trophy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                {/* Always-visible subtle bottom gradient */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                  pointerEvents: "none",
                }} />
                {/* Hover Overlay */}
                <div
                  className="hackathon-hover-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,20,30,0.85) 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    padding: "24px",
                    textAlign: "center",
                  }}
                >
                  <Trophy size={32} style={{ color: "#00e5ff", filter: "drop-shadow(0 0 12px rgba(0,229,255,0.6))" }} />
                  <span style={{
                    fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                    fontWeight: 800,
                    color: "#ffffff",
                    fontFamily: "var(--font-display), sans-serif",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}>National AI Innovation Challenge</span>
                  <span style={{
                    fontSize: "0.8rem",
                    color: "#00e5ff",
                    fontWeight: 700,
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>Championship Title · Edge Systems Award</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Photo Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 420px), 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setActiveProject(idx)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              suppressHydrationWarning={true}
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                aspectRatio: "16 / 10",
                cursor: "pointer",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Background Photo */}
              <img
                src={proj.img}
                alt={proj.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: hoveredIdx === idx ? "scale(1.07)" : "scale(1)",
                }}
              />

              {/* Permanent subtle dark gradient at bottom */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
                  pointerEvents: "none",
                  transition: "opacity 0.4s ease",
                  opacity: hoveredIdx === idx ? 0 : 1,
                }}
              />

              {/* Hover overlay — dark backdrop */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.2) 100%)",
                  pointerEvents: "none",
                  opacity: hoveredIdx === idx ? 1 : 0,
                  transition: "opacity 0.4s ease",
                }}
              />

              {/* Slide-up content on hover */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px",
                  transform: hoveredIdx === idx ? "translateY(0)" : "translateY(12px)",
                  opacity: hoveredIdx === idx ? 1 : 0,
                  transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
                  pointerEvents: "none",
                }}
              >
                {/* Tags row */}
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "10px" }}>
                  {proj.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        padding: "3px 10px",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "99px",
                        color: "#ffffff",
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project title */}
                <h3
                  style={{
                    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                    fontWeight: 800,
                    color: "#ffffff",
                    fontFamily: "var(--font-display), sans-serif",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    marginBottom: "6px",
                  }}
                >
                  {proj.title}
                </h3>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {proj.subtitle}
                </p>
              </div>

              {/* Always-visible bottom name (when NOT hovered) */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "16px 20px",
                  opacity: hoveredIdx === idx ? 0 : 1,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                  }}
                >
                  {proj.title}
                </span>
              </div>

              {/* Click CTA indicator on hover */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  opacity: hoveredIdx === idx ? 1 : 0,
                  transform: hoveredIdx === idx ? "scale(1)" : "scale(0.8)",
                  transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. STATEFUL PROJECT DETAIL SLIDE-OVER MODAL */}
      <div
        className={`project-detail-overlay ${activeProject !== null ? "active" : ""}`}
        onClick={() => setActiveProject(null)}
      >
        <div
          className="detail-panel"
          data-lenis-prevent
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="detail-close-btn"
            onClick={() => setActiveProject(null)}
            aria-label="Close project specifications details"
          >
            <X size={20} />
          </button>

          {activeProject !== null && (
            <>
              {/* Specs Header */}
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "var(--accent)",
                    display: "block",
                    marginBottom: "10px",
                    marginTop: "20px",
                  }}
                >
                  Project Specification
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
                  {projects[activeProject].title}
                </h2>
                
                <p
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginBottom: "28px",
                  }}
                >
                  {projects[activeProject].subtitle}
                </p>                {/* Live UI screenshot preview at top of specification panel */}
                <div
                  style={{
                    height: "230px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    marginBottom: "32px",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    background: "#09090d",
                    position: "relative",
                    padding: activeProject === 3 ? "16px" : "16px 16px 0 16px",
                    display: "flex",
                    alignItems: activeProject === 3 ? "center" : "flex-end",
                    justifyContent: "center",
                  }}
                >
                  {activeProject === 3 ? (
                    /* Mobile Device Frame */
                    <div className="mobile-frame">
                      <div className="mobile-notch" />
                      <div className="mobile-content">
                        <img
                          src={projects[activeProject].img}
                          alt={projects[activeProject].title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    /* macOS Browser Frame */
                    <div className="browser-frame">
                      <div className="browser-header">
                        <div className="browser-dots">
                          <span className="browser-dot browser-dot-close" />
                          <span className="browser-dot browser-dot-minimize" />
                          <span className="browser-dot browser-dot-maximize" />
                        </div>
                        <div className="browser-address">
                          {activeProject === 0 ? "careforyou.sheild.ai" : activeProject === 1 ? "command.nexus.dev" : "bot.sheild.ai"}
                        </div>
                      </div>
                      <div className="browser-content" style={{ height: "180px", overflow: "hidden" }}>
                        <img
                          src={projects[activeProject].img}
                          alt={projects[activeProject].title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "rgba(0, 0, 0, 0.75)",
                      backdropFilter: "blur(4px)",
                      borderRadius: "6px",
                      padding: "4px 10px",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      border: "1px solid rgba(232, 96, 46, 0.25)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      zIndex: 2,
                    }}
                  >
                    Specs Review Mode
                  </div>
                </div>

                {/* Narrative Details */}
                <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
                  Overview Description
                </h4>
                <p style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "32px", margin: "0 0 32px" }}>
                  {projects[activeProject].details}
                </p>

                {/* System Parameters Metrics List */}
                <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "16px" }}>
                  Active Performance Metrics
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "32px" }}>
                  {projects[activeProject].metricsList.map((m, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.04)",
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

                {/* Tech Badges */}
                <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
                  Technical Stack Integration
                </h4>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "36px" }}>
                  {projects[activeProject].tags.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
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
                    background: "rgba(255, 214, 0, 0.03)",
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
                    {projects[activeProject].achievement}
                  </p>
                </div>
              </div>

              {/* Action Buttons in footer */}
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
                  Deploy Similar AI System
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
