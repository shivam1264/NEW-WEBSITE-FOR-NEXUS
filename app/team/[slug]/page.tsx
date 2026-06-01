"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  ExternalLink,
  CheckCircle2,
  FileText,
  Download,
  MapPin,
  Briefcase,
  Zap,
  Trophy,
  Cpu,
  CalendarRange,
  Code2,
  Activity,
  Smartphone,
  Coins,
  Layout,
  Gauge,
  Sparkles,
  Moon,
  Rocket,
  AlertTriangle,
  Users
} from "lucide-react";
import { members } from "../data";

function GithubIcon({ size = 18, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ─── COMPONENT ──────────────────────────────────────────── */
export default function MemberPortfolio({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const member = members[slug];
  if (!member) notFound();

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const typeIcon = (type: string) => {
    if (type === "award") return "🏆";
    if (type === "project") return "🚀";
    return "●";
  };

  return (
    <div style={{ paddingBottom: "120px", fontFamily: "var(--font-manrope), sans-serif", minHeight: "100vh", backgroundColor: "#030014" }}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          padding: "140px 0 0",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(ellipse 60% 50% at 80% 50%, rgba(${member.accentRgb}, 0.08) 0%, transparent 70%)`,
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Back nav */}
          <Link
            href="/team"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              color: "#64748b", fontSize: "0.82rem", fontWeight: 600,
              textDecoration: "none", marginBottom: "48px",
              fontFamily: "var(--font-mono), monospace",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = member.accent}
            onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}
          >
            <ArrowLeft size={14} />
            Back to Team
          </Link>

          {/* Hero content */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "60px",
            alignItems: "flex-start",
          }}
            className="portfolio-hero-grid"
          >
            {/* Photo & Fast Contact Details */}
            <div style={{ flexShrink: 0 }}>
              <div style={{
                width: "300px", height: "360px", borderRadius: "24px",
                overflow: "hidden", position: "relative",
                border: `1px solid rgba(${member.accentRgb}, 0.25)`,
                boxShadow: `0 0 60px rgba(${member.accentRgb}, 0.15), 0 24px 60px rgba(0,0,0,0.7)`,
              }}>
                <img
                  src={member.photo} alt={member.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(3,0,20,0.8) 0%, transparent 60%)",
                }} />
              </div>

              {/* Status Badge */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginTop: "20px", padding: "12px 16px",
                borderRadius: "14px", background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Availability</span>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  fontSize: "0.75rem", fontWeight: 700,
                  fontFamily: "var(--font-mono), monospace",
                  color: member.available ? "#00e676" : "#ff3d00",
                  letterSpacing: "0.05em", textTransform: "uppercase",
                }}>
                  <span style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: member.available ? "#00e676" : "#ff3d00",
                    display: "inline-block",
                    boxShadow: member.available ? "0 0 10px #00e676" : "0 0 10px #ff3d00",
                    animation: member.available ? "pulse 2s infinite" : "none",
                  }} />
                  {member.available ? "Available" : "Booked"}
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <span style={{
                fontFamily: "var(--font-mono), monospace", fontSize: "0.75rem",
                fontWeight: 700, color: member.accent,
                textTransform: "uppercase", letterSpacing: "0.15em",
                display: "block", marginBottom: "12px",
              }}>
                Team Nexus — {member.role}
              </span>

              <h1 style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                fontWeight: 800, color: "#ffffff",
                letterSpacing: "-0.03em", lineHeight: 1.08,
                marginBottom: "24px",
              }}>
                {member.name}
              </h1>

              <div style={{ display: "flex", gap: "16px", alignItems: "center", color: "#64748b", fontSize: "0.9rem", marginBottom: "24px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <MapPin size={15} style={{ color: member.accent }} />
                  {member.location}
                </span>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)" }} />
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Briefcase size={15} style={{ color: member.accent }} />
                  Full-Time Specialist
                </span>
              </div>

              <p style={{
                color: "#94a3b8", fontSize: "1.05rem", lineHeight: "1.8",
                maxWidth: "640px", marginBottom: "36px",
              }}>
                {member.bio}
              </p>

              {/* Action row with CV download + Socials */}
              <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                {/* Resume Download Link */}
                <a
                  href={`/api/resume/${slug}`}
                  download
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    padding: "14px 28px", borderRadius: "12px",
                    background: member.accent, color: "#000000",
                    fontSize: "0.9rem", fontWeight: 700,
                    textDecoration: "none", transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    boxShadow: `0 8px 30px rgba(${member.accentRgb}, 0.25)`,
                    transform: hoveredBtn === "cv" ? "translateY(-2px)" : "translateY(0)",
                  }}
                  onMouseEnter={() => setHoveredBtn("cv")}
                  onMouseLeave={() => setHoveredBtn(null)}
                >
                  <Download size={16} />
                  Download Resume
                </a>

                {/* Email directly */}
                <a
                  href={`mailto:${member.email}`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "14px 24px", borderRadius: "12px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#ffffff", fontSize: "0.9rem", fontWeight: 600,
                    textDecoration: "none", transition: "all 0.2s",
                    transform: hoveredBtn === "mail" ? "translateY(-1px)" : "translateY(0)",
                  }}
                  onMouseEnter={() => setHoveredBtn("mail")}
                  onMouseLeave={() => setHoveredBtn(null)}
                >
                  <Mail size={16} />
                  Email
                </a>

                {/* Social icons */}
                <div style={{ display: "flex", gap: "12px", marginLeft: "8px" }}>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "48px", height: "48px", borderRadius: "12px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: hoveredSocial === "github" ? member.accent : "#ffffff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                      boxShadow: hoveredSocial === "github" ? `0 0 15px rgba(${member.accentRgb}, 0.2)` : "none",
                    }}
                    onMouseEnter={() => setHoveredSocial("github")}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <GithubIcon size={20} />
                  </a>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "48px", height: "48px", borderRadius: "12px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: hoveredSocial === "linkedin" ? member.accent : "#ffffff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                      boxShadow: hoveredSocial === "linkedin" ? `0 0 15px rgba(${member.accentRgb}, 0.2)` : "none",
                    }}
                    onMouseEnter={() => setHoveredSocial("linkedin")}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        background: "radial-gradient(50% 50% at 50% 50%, rgba(7,7,22,0.45) 0%, rgba(3,0,10,0.85) 100%)",
        marginTop: "80px", padding: "60px 0",
        position: "relative"
      }}>
        {/* Subtle grid accent line */}
        <div style={{
          position: "absolute", left: "10%", top: 0, bottom: 0, width: "1px",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)"
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Header */}
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <span style={{
              fontFamily: "var(--font-mono), monospace", fontSize: "0.68rem",
              fontWeight: 700, color: member.accent, textTransform: "uppercase",
              letterSpacing: "0.15em", display: "inline-flex", alignItems: "center", gap: "8px"
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00e676", display: "inline-block", boxShadow: "0 0 8px #00e676" }} />
              Verified Performance Benchmarks
            </span>
            <h3 style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "1.45rem", fontWeight: 700, color: "#ffffff",
              marginTop: "8px", marginBottom: 0, letterSpacing: "-0.01em"
            }}>
              Core Metrics & Delivery Quality
            </h3>
          </div>

          {/* Cards Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}>
            {member.stats.map((stat, i) => {
              const renderStatIcon = (iconName: string) => {
                const props = { size: 18, style: { color: member.accent } };
                switch (iconName) {
                  case "Zap": return <Zap {...props} />;
                  case "CheckCircle2": return <CheckCircle2 {...props} />;
                  case "Trophy": return <Trophy {...props} />;
                  case "Cpu": return <Cpu {...props} />;
                  case "CalendarRange": return <CalendarRange {...props} />;
                  case "Code2": return <Code2 {...props} />;
                  case "Activity": return <Activity {...props} />;
                  case "Smartphone": return <Smartphone {...props} />;
                  case "Coins": return <Coins {...props} />;
                  case "Layout": return <Layout {...props} />;
                  case "Gauge": return <Gauge {...props} />;
                  case "Sparkles": return <Sparkles {...props} />;
                  case "Moon": return <Moon {...props} />;
                  case "Rocket": return <Rocket {...props} />;
                  case "AlertTriangle": return <AlertTriangle {...props} />;
                  case "Users": return <Users {...props} />;
                  default: return <Activity {...props} />;
                }
              };

              return (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.01)",
                    border: "1px solid rgba(255,255,255,0.04)",
                    borderRadius: "18px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${member.accentRgb}, 0.25)`;
                    e.currentTarget.style.background = `rgba(${member.accentRgb}, 0.02)`;
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = `0 12px 30px rgba(${member.accentRgb}, 0.08)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.01)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Subtle backglow */}
                  <div style={{
                    position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px",
                    borderRadius: "50%", background: `rgba(${member.accentRgb}, 0.03)`, filter: "blur(20px)",
                    pointerEvents: "none"
                  }} />

                  {/* Top Icon Block */}
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    {renderStatIcon(stat.icon)}
                  </div>

                  {/* Bottom info */}
                  <div>
                    <div style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontSize: "2.3rem", fontWeight: 800,
                      color: "#ffffff", letterSpacing: "-0.03em",
                      lineHeight: "1.1", marginBottom: "8px"
                    }}>
                      {stat.val}
                    </div>
                    <div style={{
                      color: "#e2e8f0", fontSize: "0.82rem", fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: "0.05em",
                      marginBottom: "4px"
                    }}>
                      {stat.label}
                    </div>
                    <div style={{ color: "#64748b", fontSize: "0.78rem", lineHeight: "1.4" }}>
                      {stat.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── SKILLS + TIMELINE ─────────────────────────────── */}
      <div className="container" style={{ marginTop: "100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} id="portfolio-skills-grid">
        {/* Skills */}
        <div>
          <h2 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "1.6rem", fontWeight: 700, color: "#ffffff",
            marginBottom: "36px", letterSpacing: "-0.02em",
          }}>
            Technical Expertise
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {member.skills.map((skill, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ color: "#e2e8f0", fontSize: "0.9rem", fontWeight: 600 }}>
                    {skill.name}
                  </span>
                  <span style={{
                    color: member.accent, fontSize: "0.8rem", fontWeight: 700,
                    fontFamily: "var(--font-mono), monospace",
                  }}>
                    {skill.level}%
                  </span>
                </div>
                <div style={{
                  width: "100%", height: "5px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "99px", overflow: "hidden",
                }}>
                  <div style={{
                    height: "100%", width: `${skill.level}%`,
                    background: `linear-gradient(90deg, rgba(${member.accentRgb}, 0.4), ${member.accent})`,
                    borderRadius: "99px",
                    boxShadow: `0 0 12px rgba(${member.accentRgb}, 0.6)`,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "1.6rem", fontWeight: 700, color: "#ffffff",
            marginBottom: "36px", letterSpacing: "-0.02em",
          }}>
            Professional Milestones
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {member.timeline.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "24px", paddingBottom: "32px", position: "relative" }}>
                {/* Vertical line */}
                {i < member.timeline.length - 1 && (
                  <div style={{
                    position: "absolute", left: "23px", top: "36px", bottom: 0,
                    width: "1px", background: "rgba(255,255,255,0.08)",
                  }} />
                )}
                {/* Icon dot */}
                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px", flexShrink: 0,
                  background: item.type === "award"
                    ? `rgba(${member.accentRgb}, 0.12)`
                    : "rgba(255,255,255,0.03)",
                  border: item.type === "award"
                    ? `1px solid rgba(${member.accentRgb}, 0.4)`
                    : "1px solid rgba(255,255,255,0.07)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.15rem",
                  zIndex: 1,
                }}>
                  {typeIcon(item.type)}
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <div style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.7rem", color: member.accent,
                    fontWeight: 700, marginBottom: "6px", letterSpacing: "0.08em",
                  }}>
                    {item.year}
                  </div>
                  <p style={{ color: "#e2e8f0", fontSize: "0.92rem", lineHeight: "1.6", margin: 0, fontWeight: 500 }}>
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROJECTS ──────────────────────────────────────── */}
      <div className="container" style={{ marginTop: "100px" }}>
        <h2 style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "1.6rem", fontWeight: 700, color: "#ffffff",
          marginBottom: "36px", letterSpacing: "-0.02em",
        }}>
          Featured Systems & Shipments
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
          gap: "24px",
        }}>
          {member.projects.map((proj, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                background: "rgba(7,7,22,0.8)",
                border: hoveredProject === i
                  ? `1px solid rgba(${member.accentRgb}, 0.4)`
                  : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "32px",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: hoveredProject === i ? "translateY(-5px)" : "translateY(0)",
                boxShadow: hoveredProject === i
                  ? `0 20px 40px rgba(${member.accentRgb}, 0.08), 0 4px 20px rgba(0,0,0,0.5)`
                  : "0 4px 20px rgba(0,0,0,0.4)",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Color bar */}
              <div style={{
                width: "40px", height: "4px", borderRadius: "99px",
                background: proj.color, marginBottom: "24px",
                boxShadow: `0 0 12px ${proj.color}77`,
              }} />

              <h3 style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "1.1rem", fontWeight: 700,
                color: "#ffffff", marginBottom: "14px",
                letterSpacing: "-0.01em",
              }}>
                {proj.title}
              </h3>

              <p style={{
                color: "#94a3b8", fontSize: "0.88rem",
                lineHeight: "1.7", marginBottom: "24px", flex: 1,
              }}>
                {proj.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
                {proj.tags.map((tag, ti) => (
                  <span key={ti} style={{
                    fontSize: "0.7rem", fontWeight: 600,
                    padding: "4px 10px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px", color: "#94a3b8",
                    fontFamily: "var(--font-mono), monospace",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Result */}
              <div style={{
                display: "flex", alignItems: "flex-start", gap: "10px",
                background: `rgba(${member.accentRgb}, 0.03)`,
                border: `1px solid rgba(${member.accentRgb}, 0.1)`,
                borderRadius: "10px", padding: "12px 16px",
              }}>
                <CheckCircle2 size={16} style={{ color: "#00e676", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "#e2e8f0", fontSize: "0.82rem", lineHeight: "1.6", fontWeight: 500 }}>
                  {proj.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── GET IN TOUCH (SEPARATE & UNIQUE PER MEMBER) ── */}
      <div className="container" style={{ marginTop: "100px" }}>
        <div style={{
          background: `linear-gradient(135deg, rgba(${member.accentRgb}, 0.05) 0%, rgba(5,5,15,0.95) 100%)`,
          border: `1px solid rgba(${member.accentRgb}, 0.2)`,
          borderRadius: "24px", padding: "60px 48px",
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 24px 80px rgba(${member.accentRgb}, 0.05)`,
        }}>
          {/* Subtle geometric grid backdrop */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none",
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "60px",
            position: "relative",
            zIndex: 1
          }} className="portfolio-contact-grid">
            
            {/* Left Column: Personalized Call to Action */}
            <div>
              <span style={{
                fontFamily: "var(--font-mono), monospace", fontSize: "0.72rem",
                fontWeight: 700, color: member.accent,
                textTransform: "uppercase", letterSpacing: "0.12em",
                display: "block", marginBottom: "16px",
              }}>
                Direct Contact
              </span>
              
              <h2 style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "2.2rem", fontWeight: 800, color: "#ffffff",
                lineHeight: "1.15", marginBottom: "20px", letterSpacing: "-0.02em"
              }}>
                Start a project with {member.name.split(" ")[0]}
              </h2>
              
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "36px" }}>
                Looking to integrate tailored systems, AI modules, or scalable web architectures? Reach out directly to discuss specs, budgets, and timeline alignments.
              </p>

              {/* Unique stats list in contact */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: member.accent }} />
                  <span style={{ color: "#e2e8f0", fontSize: "0.88rem", fontWeight: 500 }}>
                    Direct Response SLA: <strong>&lt; 12 Hours</strong>
                  </span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: member.accent }} />
                  <span style={{ color: "#e2e8f0", fontSize: "0.88rem", fontWeight: 500 }}>
                    Location timezone: <strong>IST (UTC +5:30)</strong>
                  </span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: member.accent }} />
                  <span style={{ color: "#e2e8f0", fontSize: "0.88rem", fontWeight: 500 }}>
                    Preferred stack: <strong>{member.skills[0].name}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Contact & Resume Download Hub */}
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px", padding: "40px",
              display: "flex", flexDirection: "column", justifyContent: "center",
              gap: "28px"
            }}>
              <h3 style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "1.2rem", fontWeight: 700, color: "#ffffff",
                margin: 0
              }}>
                Contact Hub & Assets
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Email Option */}
                <a
                  href={`mailto:${member.email}`}
                  style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "16px 20px", borderRadius: "12px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    textDecoration: "none", color: "#e2e8f0",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = member.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  }}
                >
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "10px",
                    background: `rgba(${member.accentRgb}, 0.1)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: member.accent
                  }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>Send Email</div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 600 }}>{member.email}</div>
                  </div>
                </a>

                {/* LinkedIn Option */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "16px 20px", borderRadius: "12px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    textDecoration: "none", color: "#e2e8f0",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = member.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  }}
                >
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "10px",
                    background: `rgba(${member.accentRgb}, 0.1)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: member.accent
                  }}>
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>Connect on LinkedIn</div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 600 }}>{member.name}</div>
                  </div>
                </a>

                {/* GitHub Option */}
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "16px 20px", borderRadius: "12px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    textDecoration: "none", color: "#e2e8f0",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = member.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  }}
                >
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "10px",
                    background: `rgba(${member.accentRgb}, 0.1)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: member.accent
                  }}>
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>Review Source Code</div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 600 }}>github.com/{slug}</div>
                  </div>
                </a>
              </div>

              {/* Big resume download CTA */}
              <a
                href={`/api/resume/${slug}`}
                download
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  padding: "18px 24px", borderRadius: "14px",
                  background: `linear-gradient(90deg, rgba(${member.accentRgb}, 0.15), rgba(${member.accentRgb}, 0.05))`,
                  border: `1px solid rgba(${member.accentRgb}, 0.3)`,
                  color: "#ffffff", fontSize: "0.95rem", fontWeight: 700,
                  textDecoration: "none", transition: "all 0.2s",
                  boxShadow: `0 8px 20px rgba(0,0,0,0.3)`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.borderColor = member.accent;
                  e.currentTarget.style.boxShadow = `0 10px 25px rgba(${member.accentRgb}, 0.15)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = `rgba(${member.accentRgb}, 0.3)`;
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
                }}
              >
                <FileText size={18} style={{ color: member.accent }} />
                <span>Get PDF Resume / CV</span>
                <Download size={15} style={{ color: "#64748b", marginLeft: "4px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── RESPONSIVE STYLES ─────────────────────────────── */}
      <style>{`
        @media (max-width: 991px) {
          .portfolio-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 768px) {
          .portfolio-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .portfolio-hero-grid > div:first-child img {
            height: 280px !important;
          }
          .portfolio-hero-grid > div:first-child > div:first-child {
            width: 100% !important;
            height: 280px !important;
            max-width: 320px;
            margin: 0 auto;
          }
          #portfolio-skills-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </div>
  );
}
