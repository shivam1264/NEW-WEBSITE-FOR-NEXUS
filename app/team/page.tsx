"use client";

import { useState } from "react";
import { Brain, Code, Smartphone, Layout, Zap, ArrowUpRight } from "lucide-react";

export default function Team() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const members = [
    {
      name: "Aarav Mehta",
      role: "AI Lead & Engineer",
      desc: "Architects specialized vector index databases, qualifies customer intent profiles, and structures secure cognitive workflows.",
      specs: ["Python", "FastAPI", "VectorDB", "LangChain"],
      portfolio: "/team/aarav-mehta",
      portfolioLabel: "View Portfolio · AI / Python",
      photo: "/images/team_member_1.png",
      cls: "pod-direction",
      icon: <Brain size={20} />,
    },
    {
      name: "Kavya Sharma",
      role: "Full Stack Lead",
      desc: "Constructs Next.js server structures, scalable API endpoints, secure database migrations, and caching layers.",
      specs: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
      portfolio: "/team/kavya-sharma",
      portfolioLabel: "View Portfolio · Full Stack",
      photo: "/images/team_member_2.png",
      cls: "pod-product",
      icon: <Code size={20} />,
    },
    {
      name: "Rohan Das",
      role: "Flutter Developer",
      desc: "Builds high-fidelity cross-platform mobile apps, local dispatch notifications, offline caching, and payment checkouts.",
      specs: ["Flutter", "Dart", "SQLite", "Firebase"],
      portfolio: "/team/rohan-das",
      portfolioLabel: "View Portfolio · Mobile",
      photo: "/images/team_member_3.png",
      cls: "pod-signal",
      icon: <Smartphone size={20} />,
    },
    {
      name: "Isha Patel",
      role: "UI/UX Designer",
      desc: "Designs polished dark-mode interfaces, interactive Figma wireframes, brand vectors, and conversion-oriented layouts.",
      specs: ["Figma", "UI Design", "CSS3", "Illustrator"],
      portfolio: "/team/isha-patel",
      portfolioLabel: "View Portfolio · UI/UX",
      photo: "/images/team_member_4.png",
      cls: "pod-momentum",
      icon: <Layout size={20} />,
    },
    {
      name: "Kabir Malhotra",
      role: "Ops & Strategy Lead",
      desc: "Manages agile milestones, validates MVP scopes, and coordinates launch schedules to prevent timeline slip.",
      specs: ["MVP Scoping", "Agile", "Launch Ops", "Product Strategy"],
      portfolio: "/team/kabir-malhotra",
      portfolioLabel: "View Portfolio · Strategy",
      photo: "/images/team_member_5.png",
      cls: "pod-direction",
      icon: <Zap size={20} />,
    },
  ];

  const steps = [
    { num: "01", title: "Requirement Discussion", desc: "We sit down with your stakeholders to outline goals, features, and precise deliverables." },
    { num: "02", title: "UI/UX Planning", desc: "We design wireframes and high-fidelity mockups to align on the project's look and flow." },
    { num: "03", title: "System Development", desc: "Our developers build the database structures, frontend routes, and AI prompt pipelines." },
    { num: "04", title: "Exhaustive Testing", desc: "We run load tests, API sanity checks, and review interface responsiveness across devices." },
    { num: "05", title: "Production Launch", desc: "We deploy your system to high-speed Edge servers and set up direct production domains." },
    { num: "06", title: "Support & Maintenance", desc: "We monitor active traffic trends, maintain uptime, and patch library dependency updates." },
  ];

  return (
    <div
      style={{
        padding: "140px 0 80px",
        minHeight: "100vh",
        fontFamily: "var(--font-manrope), sans-serif",
      }}
    >
      {/* 1. PODS HEADER */}
      <div
        className="container reveal-text"
        style={{
          margin: "0 auto 80px",
          maxWidth: "600px",
        }}
      >
        <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
          <span className="pulsing-dot pulsing-dot-coral" />
          Team Structure
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
          Specialist <span className="font-serif-i" style={{ color: "var(--accent)" }}>Pods</span>
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "1.02rem", lineHeight: "1.6" }}>
          Team Nexus adapts to the project: a compact strategy pod for fast decisions, or a full launch unit when execution needs more hands.
        </p>
      </div>

      {/* 2. MEMBERS GRID */}
      <div
        className="container"
        style={{
          margin: "0 auto 120px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {members.map((member, idx) => (
          <div
            key={idx}
            className={`member-card ${member.cls}`}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              background: "rgba(7, 7, 22, 0.7)",
              borderRadius: "20px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
            data-hover="true"
          >
            {/* Photo Portrait Frame with Zoom */}
            <div
              style={{
                height: "240px",
                width: "100%",
                overflow: "hidden",
                position: "relative",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                background: "#09090d",
              }}
            >
              <img
                src={member.photo}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: hoveredIdx === idx ? "scale(1.06)" : "scale(1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                  padding: "16px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      margin: 0,
                    }}
                  >
                    {member.name}
                  </h3>
                  <span
                    className="badge"
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {member.role}
                  </span>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "var(--accent)",
                  }}
                >
                  {member.icon}
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div style={{ padding: "30px", display: "flex", flexDirection: "column", flex: 1 }}>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.88rem",
                  lineHeight: "1.55",
                  marginBottom: "24px",
                  flex: 1,
                }}
              >
                {member.desc}
              </p>

              {/* Specs / Skills Tag List */}
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap",
                  marginBottom: "24px",
                }}
              >
                {member.specs.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="badge"
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "4px 10px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      borderRadius: "99px",
                      color: "#e2e8f0",
                    }}
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Portfolio Link */}
              <a
                href={member.portfolio}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: hoveredIdx === idx ? "var(--accent)" : "#94a3b8",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                  paddingTop: "16px",
                  marginTop: "auto",
                  transition: "color 0.2s",
                  fontFamily: "var(--font-mono), monospace",
                  letterSpacing: "0.03em",
                }}
              >
                <ArrowUpRight size={13} />
                <span>{member.portfolioLabel}</span>
              </a>
            </div>
          </div>
        ))}
      </div>


      {/* 3. OPERATING MODEL (TIMELINE) */}
      <section
        className="container"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          paddingTop: "100px",
        }}
      >
        <div style={{ marginBottom: "60px", maxWidth: "600px" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "10px" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Operating Model
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: "2.4rem",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Our Work <span className="font-serif-i" style={{ color: "var(--accent)" }}>Process</span>
          </h2>
        </div>

        {/* Timeline Horizontal / Vertical Stack */}
        <div className="process-grid">
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(7, 7, 22, 0.55)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "14px",
                padding: "30px",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              data-hover="true"
            >
              <div
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  color: "rgba(255, 92, 43, 0.15)",
                  position: "absolute",
                  top: "16px",
                  right: "20px",
                  lineHeight: "1",
                  transform: "translateZ(-10px)",
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "12px",
                  marginTop: "16px",
                }}
              >
                {step.title}
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: "1.6" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
