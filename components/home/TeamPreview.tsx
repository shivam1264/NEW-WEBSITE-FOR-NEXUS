"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Code, Rocket, Users } from "lucide-react";

export default function TeamPreview() {
  const [activeMember, setActiveMember] = useState(0);
  const [isTeamAutoplayPaused, setIsTeamAutoplayPaused] = useState(false);

  useEffect(() => {
    if (isTeamAutoplayPaused) return;
    const interval = setInterval(() => {
      setActiveMember((prev) => (prev + 1) % 5);
    }, 4500);
    return () => clearInterval(interval);
  }, [isTeamAutoplayPaused]);

  const members = [
    {
      name: "Shubham Pawar",
      role: "AI LEAD ENGINEER",
      desc: "Architects specialized vector index databases, qualifies customer intent profiles, and structures secure cognitive agent workflows for enterprise automation.",
      photo: "/images/team_member_1.jpg",
      portfolio: "/team/shubham-pawar",
      colorRGB: "0, 255, 171",
      color: "#00FFAB",
      expertise: ["LLMs", "Vector Databases", "Python", "Agentic Systems"],
      impact: "2x National Hackathon Winner • AI Inference Engine Architect"
    },
    {
      name: "Shivansh Mehra",
      role: "FULL STACK DEVELOPER",
      desc: "Constructs Next.js server structures, scalable API endpoints, secure database migrations, and edge-caching architectures for instant loads.",
      photo: "/images/team_member_2.jpg",
      portfolio: "/team/shivansh-mehra",
      colorRGB: "0, 229, 255",
      color: "#00E5FF",
      expertise: ["Next.js", "TypeScript", "PostgreSQL", "Edge Caching"],
      impact: "Full-Stack Architect • SSR & High-Speed Edge Routes"
    },
    {
      name: "Prakash Kumar Biswal",
      role: "AGENTIC AI & FLUTTER DEVELOPER",
      desc: "Builds high-fidelity cross-platform mobile apps, local dispatch notifications, offline state sync, and secure payment checkout flows.",
      photo: "/images/team_member_3.jpg",
      portfolio: "/team/prakash-biswal",
      colorRGB: "255, 0, 127",
      color: "#FF007F",
      expertise: ["Flutter", "Dart", "Agentic AI", "Firebase"],
      impact: "Agentic AI Specialist • Flutter Mobile Pod Lead"
    },
    {
      name: "Shivam Kumar Maurya",
      role: "UI/UX & FRONTEND DEVELOPER",
      desc: "Designs polished dark-mode interfaces, interactive Figma wireframes, customized brand system assets, and high-fidelity prototype flows.",
      photo: "/images/team_member_4.jpg",
      portfolio: "/team/shivam-maurya",
      colorRGB: "213, 0, 249",
      color: "#D500F9",
      expertise: ["UI/UX Design", "Figma", "Tailwind CSS", "Design Systems"],
      impact: "Design Systems Lead • High-Conversion UI/UX Architect"
    },
    {
      name: "Tushar Das",
      role: "OPS & MARKETING LEAD",
      desc: "Manages agile milestones, validates early MVP scopes, and coordinates launch schedules to prevent timeline slip and ensure outcome alignments.",
      photo: "/images/team_member_5.jpg",
      portfolio: "/team/tushar-das",
      colorRGB: "255, 214, 0",
      color: "#FFD600",
      expertise: ["MVP Scoping", "Agile Sprints", "Launch Ops", "Growth Marketing"],
      impact: "Agile Delivery Ops • MVP Launch Strategy Lead"
    }
  ];

  const currentMember = members[activeMember] || members[0];

  return (
    <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
      <div className="container">
        {/* Header Block */}
        <div style={{ marginBottom: "48px", maxWidth: "700px" }}>
          <h2
            className="section-header-title font-display"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "14px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em"
            }}
          >
            Meet Our <span className="font-serif-i" style={{ color: "var(--accent)" }}>Specialists</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.6", margin: 0 }}>
            The experts powering our core client development pods. Passionate. Skilled. Committed to delivering excellence.
          </p>
        </div>

        {/* 2-Column Bento Grid Layout */}
        <div
          className="team-specialists-grid"
          onMouseEnter={() => setIsTeamAutoplayPaused(true)}
          onMouseLeave={() => setIsTeamAutoplayPaused(false)}
        >
          {/* Left Column: Featured Specialist Card */}
          <div className="featured-specialist-card">
            <div>
              {/* Top Profile Header */}
              <div className="featured-profile-row">
                <div className="featured-avatar-wrap">
                  <Image
                    src={currentMember.photo}
                    alt={currentMember.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                <div className="featured-info-col">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <span className="featured-badge">
                      <span className="pulsing-dot pulsing-dot-coral" style={{ background: currentMember.color }} />
                      FEATURED SPECIALIST
                    </span>
                  </div>

                  <span className="featured-role-tag" style={{ color: currentMember.color }}>
                    {currentMember.role}
                  </span>

                  <h3 className="featured-name">{currentMember.name}</h3>

                  <div className="featured-accent-bar" style={{ background: currentMember.color }} />

                  <p className="featured-bio">{currentMember.desc}</p>
                </div>
              </div>

              {/* CORE EXPERTISE Section (Matching User Image) */}
              <div className="featured-expertise-wrapper" style={{ margin: "22px 0 16px" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    color: "var(--muted-2)",
                    fontFamily: "var(--font-mono), monospace",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "10px"
                  }}
                >
                  CORE EXPERTISE
                </span>
                <div className="featured-expertise-pills" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {currentMember.expertise.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "20px",
                        padding: "7px 14px",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                        fontFamily: "var(--font-space-grotesk), sans-serif"
                      }}
                    >
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: currentMember.color }} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* KEY IMPACT & HIGHLIGHT BOX */}
              <div className="featured-impact-box" style={{
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "16px",
                padding: "12px 16px",
                margin: "0 0 24px 0",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: currentMember.color, fontFamily: "var(--font-mono), monospace" }}>
                  ⚡ IMPACT:
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--foreground)", fontWeight: 600, fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                  {currentMember.impact}
                </span>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div>
              <Link href={currentMember.portfolio} className="featured-cta-btn" style={{ background: currentMember.color }}>
                <span>View Full Portfolio</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column: Specialists 5-Card Interactive List */}
          <div className="specialists-list-col">
            {members.map((member, idx) => {
              const isActive = activeMember === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveMember(idx)}
                  onMouseEnter={() => setActiveMember(idx)}
                  className={`specialist-list-card ${isActive ? "active" : ""}`}
                  style={{
                    "--theme-color": member.color,
                    "--theme-rgb": member.colorRGB
                  } as React.CSSProperties}
                >
                  <div className="specialist-card-left">
                    <span className="specialist-num">0{idx + 1}</span>

                    <div className="specialist-thumb">
                      <Image src={member.photo} alt={member.name} fill sizes="60px" style={{ objectFit: "cover" }} />
                    </div>

                    <div className="specialist-text-block">
                      <div className="specialist-title-row">
                        <h4>{member.name}</h4>
                        <span className="specialist-role-tag">— {member.role}</span>
                      </div>
                      <p className="specialist-short-desc">{member.desc}</p>
                    </div>
                  </div>

                  <div className="specialist-arrow-btn">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
