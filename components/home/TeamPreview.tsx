"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
      role: "AI Lead Engineer",
      desc: "LLMs, Vector Databases, Python Agentic scripting.",
      photo: "/images/team_member_1.jpg",
      portfolio: "/team/shubham-pawar"
    },
    {
      name: "Shivansh Mehra",
      role: "Full Stack Developer",
      desc: "Next.js core structures, secure server APIs, databases.",
      photo: "/images/team_member_2.jpg",
      portfolio: "/team/shivansh-mehra"
    },
    {
      name: "Prakash Kumar Biswal",
      role: "Agentic AI & Flutter Developer",
      desc: "Cross-platform mobile apps, offline databases.",
      photo: "/images/team_member_3.jpg",
      portfolio: "/team/prakash-biswal"
    },
    {
      name: "Shivam Kumar Maurya",
      role: "UI/UX & Frontend Developer",
      desc: "Figma wireframes, modern responsive layouts.",
      photo: "/images/team_member_4.jpg",
      portfolio: "/team/shivam-maurya"
    },
    {
      name: "Tushar Das",
      role: "Ops & Marketing Lead",
      desc: "MVP scopes, agile scheduling, delivery management.",
      photo: "/images/team_member_5.jpg",
      portfolio: "/team/tushar-das"
    }
  ];

  return (
    <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
      <div className="container">
        <div style={{ marginBottom: "60px", maxWidth: "600px" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Team Architecture
          </span>
          <h2
            className="section-header-title font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: "var(--foreground)",
              marginBottom: "20px",
            }}
          >
            Our <span className="font-serif-i" style={{ color: "var(--accent)" }}>Specialists</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.02rem", lineHeight: "1.6" }}>
            Meet the specialists running our core client development pods.
          </p>
        </div>

        {/* Desktop Showcase Container */}
        <div
          className="team-showcase-container"
          onMouseEnter={() => setIsTeamAutoplayPaused(true)}
          onMouseLeave={() => setIsTeamAutoplayPaused(false)}
        >
          {/* Left: Dynamic Preview Panel */}
          {(() => {
            const member = members[activeMember] || members[0];
            return (
              <div className="team-preview-card">
                <div className="team-preview-image-wrap" style={{ position: "relative" }}>
                  <Image src={member.photo} alt={member.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                </div>
                <div className="team-preview-info">
                  <span
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      display: "block",
                      marginBottom: "4px"
                    }}
                  >
                    {member.role}
                  </span>
                  <h3 style={{ color: "var(--foreground)", fontSize: "1.3rem", fontWeight: 700, margin: "0 0 10px", fontFamily: "var(--font-syne), sans-serif" }}>
                    {member.name}
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: "1.5", marginBottom: "16px" }}>
                    {member.desc}
                  </p>
                  <Link
                    href={member.portfolio}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--foreground)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      fontFamily: "var(--font-mono), monospace",
                      letterSpacing: "0.02em",
                      background: "rgba(15, 23, 42, 0.02)",
                      border: "1px solid var(--card-border)",
                      padding: "6px 16px",
                      borderRadius: "20px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.background = "rgba(255, 92, 43, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--card-border)";
                      e.currentTarget.style.background = "rgba(15, 23, 42, 0.02)";
                    }}
                  >
                    <span>View Portfolio</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })()}

          {/* Right: Specialists Interactive List */}
          <div className="team-members-list">
            {members.map((member, idx) => (
              <div
                key={idx}
                onClick={() => setActiveMember(idx)}
                onMouseEnter={() => setActiveMember(idx)}
                className={`team-member-row ${activeMember === idx ? "active" : ""}`}
              >
                <div className="team-member-name-role">
                  <span className="team-member-num">0{idx + 1}</span>
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
                <div className="team-member-arrow">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion Container */}
        <div className="mobile-team-accordion">
          {members.map((member, idx) => {
            const isOpen = activeMember === idx;
            return (
              <div key={idx} className="mobile-accordion-item">
                <button
                  onClick={() => setActiveMember(isOpen ? -1 : idx)}
                  className="mobile-accordion-header"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.75rem", color: isOpen ? "var(--accent)" : "var(--muted-2)" }}>0{idx + 1}</span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 700, color: isOpen ? "var(--foreground)" : "var(--muted)" }}>{member.name}</span>
                  </div>
                  <span style={{ fontSize: "0.7rem", color: isOpen ? "var(--accent)" : "var(--muted-2)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>{member.role}</span>
                </button>
                <div
                  className="mobile-accordion-content"
                  style={{
                    maxHeight: isOpen ? "340px" : "0px",
                  }}
                >
                  <div className="mobile-accordion-body">
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                      <div style={{ width: "110px", height: "110px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--card-border)", flexShrink: 0, position: "relative" }}>
                        <Image src={member.photo} alt={member.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: "1.45", margin: "0 0 10px" }}>
                          {member.desc}
                        </p>
                        <Link
                          href={member.portfolio}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            color: "var(--foreground)",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            fontFamily: "var(--font-mono), monospace",
                            background: "rgba(15, 23, 42, 0.02)",
                            border: "1px solid var(--card-border)",
                            padding: "4px 12px",
                            borderRadius: "16px"
                          }}
                        >
                          <span>View Portfolio</span>
                          <ArrowUpRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
