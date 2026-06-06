"use client";

import { notFound } from "next/navigation";
import { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Mail,
  CheckCircle2,
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
  Users,
  ChevronRight
} from "lucide-react";
import { members } from "../data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

export default function MemberPortfolio({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const member = members[slug];

  if (!member) {
    notFound();
  }

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(member.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Animations
      gsap.from(".hero-text-element", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.fromTo(".hero-image", 
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "expo.out" }
      );

      // Hero Parallax on Scroll
      gsap.to(".hero-image", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // 2. Stats Stagger
      gsap.from(".stat-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
        }
      });

      // 3. Skills Bar Fill
      gsap.from(".skill-fill", {
        width: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 80%",
        }
      });

      // 4. Timeline Stagger
      gsap.from(".timeline-item", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
        }
      });

      // 5. Projects
      gsap.fromTo(".project-card", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-container",
            start: "top 85%",
          }
        }
      );

      // 6. Contact Hub
      gsap.fromTo(".contact-hub", 
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".contact-hub",
            start: "top 90%",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const typeIcon = (type: string) => {
    if (type === "award") return "🏆";
    if (type === "project") return "🚀";
    return "●";
  };

  const renderStatIcon = (iconName: string) => {
    const props = { size: 24, style: { color: member.accent } };
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
    <div ref={containerRef} style={{ paddingBottom: "120px", fontFamily: "var(--font-manrope), sans-serif", minHeight: "100vh", backgroundColor: "var(--background)", overflowX: "hidden" }}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <div className="hero-container" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "120px", paddingBottom: "60px" }}>
        
        {/* Ambient Glow */}
        <div style={{
          position: "absolute", top: "-10%", right: "-10%", width: "70vw", height: "70vw",
          background: `radial-gradient(circle, rgba(${member.accentRgb}, 0.15) 0%, transparent 60%)`,
          pointerEvents: "none", zIndex: 0
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Link
            href="/team"
            className="hero-text-element"
            style={{
              position: "relative",
              zIndex: 10,
              display: "inline-flex", alignItems: "center", gap: "8px",
              color: "var(--muted)", fontSize: "0.9rem", fontWeight: 700,
              textDecoration: "none", marginBottom: "60px",
              fontFamily: "var(--font-mono), monospace",
              textTransform: "uppercase", letterSpacing: "0.1em",
              transition: "color 0.3s ease",
            }}
          >
            <ArrowLeft size={16} /> Back to Nexus Team
          </Link>

          <div className="team-hero-grid">
            
            {/* Left Info */}
            <div>
              <span className="hero-text-element" style={{
                fontFamily: "var(--font-mono), monospace", fontSize: "0.85rem",
                fontWeight: 700, color: member.accent,
                textTransform: "uppercase", letterSpacing: "0.15em",
                display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px",
                background: `rgba(${member.accentRgb}, 0.1)`, padding: "8px 16px", borderRadius: "100px"
              }}>
                <span className="pulsing-dot" style={{ backgroundColor: member.accent }} />
                NEXUS — {member.role}
              </span>

              <h1 className="hero-text-element" style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(3.5rem, 6vw, 6rem)",
                fontWeight: 800, color: "var(--foreground)",
                letterSpacing: "-0.04em", lineHeight: 0.95,
                marginBottom: "32px", textTransform: "uppercase"
              }}>
                {member.name.split(" ")[0]} <br />
                <span style={{ color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}>
                  {member.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <div className="hero-text-element" style={{ display: "flex", gap: "24px", alignItems: "center", color: "var(--muted)", fontSize: "1rem", marginBottom: "32px", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <MapPin size={18} style={{ color: member.accent }} />
                  {member.location}
                </span>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--muted-2)" }} />
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <Briefcase size={18} style={{ color: member.accent }} />
                  Full-Time Specialist
                </span>
              </div>

              <p className="hero-text-element" style={{
                color: "var(--muted)", fontSize: "1.2rem", lineHeight: "1.8",
                maxWidth: "600px", marginBottom: "48px",
              }}>
                {member.bio}
              </p>

              {/* Action Buttons */}
              <div className="hero-text-element" style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
                <a
                  href={member.resume || "#"}
                  download
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "12px",
                    padding: "16px 32px", borderRadius: "100px",
                    background: member.accent, color: "#000000",
                    fontSize: "1rem", fontWeight: 800,
                    textDecoration: "none", transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    textTransform: "uppercase", letterSpacing: "0.05em"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = `0 10px 40px rgba(${member.accentRgb}, 0.3)`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <Download size={18} /> Resume / CV
                </a>

                {/* Socials */}
                <div style={{ display: "flex", gap: "12px" }}>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" style={{
                      width: "56px", height: "56px", borderRadius: "50%",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = member.accent; e.currentTarget.style.color = "#000"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <GithubIcon size={22} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{
                      width: "56px", height: "56px", borderRadius: "50%",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = member.accent; e.currentTarget.style.color = "#000"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <LinkedinIcon size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div className="team-hero-photo">
              <Image
                src={member.photo} alt={member.name}
                width={800} height={1000}
                className="hero-image"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "40px", filter: "contrast(1.1) brightness(0.9)", transformOrigin: "center" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--background) 0%, transparent 20%, transparent 80%, var(--background) 100%), linear-gradient(to top, var(--background) 0%, transparent 30%)", pointerEvents: "none" }} />
              
              {/* Availability Badge Overlay */}
              <div className="hero-text-element" style={{
                position: "absolute", bottom: "40px", right: "40px",
                display: "flex", alignItems: "center", gap: "12px",
                padding: "16px 24px", borderRadius: "100px",
                background: "rgba(0,0,0,0.6)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}>
                <span className="pulsing-dot" style={{ backgroundColor: member.available ? "#00e676" : "#ff3d00" }} />
                <span style={{ color: "#fff", fontFamily: "var(--font-mono), monospace", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {member.available ? "Available" : "Booked"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <div className="stats-container" style={{ margin: "100px 0", position: "relative" }}>
        <div className="container">
          <div className="team-stats-grid">
            {member.stats.map((stat, i) => (
              <div key={i} className="stat-card" style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px", padding: "40px 32px",
                display: "flex", flexDirection: "column", gap: "20px",
                position: "relative", overflow: "hidden"
              }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: `rgba(${member.accentRgb}, 0.1)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {renderStatIcon(stat.icon)}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "var(--foreground)", lineHeight: 1, marginBottom: "12px", letterSpacing: "-0.04em" }}>
                    {stat.val}
                  </div>
                  <div style={{ color: member.accent, fontSize: "0.85rem", fontWeight: 700, fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                    {stat.label}
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {stat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SKILLS + TIMELINE ─────────────────────────────── */}
      <div className="container team-content-grid" style={{ marginTop: "160px" }}>
        
        {/* Skills */}
        <div className="skills-container">
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "48px", letterSpacing: "-0.03em" }}>
            Technical Expertise
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {member.skills.map((skill, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                  <span style={{ color: "var(--foreground)", fontSize: "1.1rem", fontWeight: 700 }}>
                    {skill.name}
                  </span>
                  <span style={{ color: member.accent, fontSize: "1rem", fontWeight: 800, fontFamily: "var(--font-mono), monospace" }}>
                    {skill.level}%
                  </span>
                </div>
                <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "100px", overflow: "hidden" }}>
                  <div className="skill-fill" style={{ height: "100%", width: `${skill.level}%`, background: member.accent, borderRadius: "100px", boxShadow: `0 0 20px rgba(${member.accentRgb}, 0.5)` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "48px", letterSpacing: "-0.03em" }}>
            Professional Milestones
          </h2>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "28px", top: 0, bottom: 0, width: "2px", background: "rgba(255,255,255,0.1)" }} />
            
            {member.timeline.map((item, i) => (
              <div key={i} className="timeline-item" style={{ display: "flex", gap: "32px", paddingBottom: "48px", position: "relative" }}>
                <div style={{
                  width: "58px", height: "58px", borderRadius: "50%", flexShrink: 0,
                  background: "var(--background)", border: `2px solid ${item.type === "award" ? member.accent : "rgba(255,255,255,0.2)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", zIndex: 1
                }}>
                  {typeIcon(item.type)}
                </div>
                <div style={{ paddingTop: "12px" }}>
                  <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.9rem", color: member.accent, fontWeight: 700, marginBottom: "8px", letterSpacing: "0.1em" }}>
                    {item.year}
                  </div>
                  <p style={{ color: "var(--foreground)", fontSize: "1.1rem", lineHeight: "1.6", margin: 0, fontWeight: 600 }}>
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROJECTS ──────────────────────────────────────── */}
      <div className="projects-container container" style={{ marginTop: "160px" }}>
        <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "60px", letterSpacing: "-0.03em", textAlign: "center" }}>
          Systems & Deployments
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))", gap: "32px" }}>
          {member.projects.map((proj, i) => (
            <div
              key={i}
              className="project-card"
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: hoveredProject === i ? `1px solid ${member.accent}` : "1px solid rgba(255,255,255,0.05)",
                borderRadius: "32px", padding: "48px",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: hoveredProject === i ? "translateY(-10px)" : "translateY(0)",
                display: "flex", flexDirection: "column"
              }}
            >
              <div style={{ width: "60px", height: "4px", borderRadius: "100px", background: proj.color, marginBottom: "32px", boxShadow: `0 0 20px ${proj.color}` }} />
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
                {proj.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "32px", flex: 1 }}>
                {proj.desc}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
                {proj.tags.map((tag, ti) => (
                  <span key={ti} style={{ fontSize: "0.8rem", fontWeight: 700, padding: "8px 16px", background: "rgba(255,255,255,0.05)", borderRadius: "100px", color: "var(--muted)", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", background: `rgba(${member.accentRgb}, 0.05)`, borderRadius: "16px", padding: "20px" }}>
                <CheckCircle2 size={20} style={{ color: member.accent, flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "var(--foreground)", fontSize: "0.95rem", lineHeight: "1.6", fontWeight: 600 }}>
                  {proj.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── GET IN TOUCH ── */}
      <div className="container" style={{ marginTop: "160px" }}>
        <div className="contact-hub" style={{ background: `linear-gradient(135deg, rgba(${member.accentRgb}, 0.1) 0%, rgba(255,255,255,0.02) 100%)`, border: `1px solid rgba(${member.accentRgb}, 0.2)`, borderRadius: "40px", padding: "80px", position: "relative", overflow: "hidden", boxShadow: `0 40px 100px rgba(${member.accentRgb}, 0.1)` }}>
          
          <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

          <div className="team-contact-grid" style={{ position: "relative", zIndex: 1 }}>
            
            {/* Left */}
            <div>
              <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.9rem", fontWeight: 700, color: member.accent, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "24px" }}>
                Direct Contact
              </span>
              <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, marginBottom: "32px", letterSpacing: "-0.03em" }}>
                Start a project with <br />{member.name.split(" ")[0]}
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "48px", maxWidth: "500px" }}>
                Looking to integrate tailored systems, AI modules, or scalable web architectures? Reach out directly.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: member.accent }} />
                  <span style={{ color: "var(--foreground)", fontSize: "1.1rem", fontWeight: 600 }}>Response SLA: &lt; 12 Hours</span>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: member.accent }} />
                  <span style={{ color: "var(--foreground)", fontSize: "1.1rem", fontWeight: 600 }}>Location: IST (UTC +5:30)</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div style={{ background: "var(--background)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "32px", padding: "48px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <a href={`mailto:${member.email}`} onClick={handleEmailClick} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 32px", borderRadius: "20px", background: "rgba(255,255,255,0.03)", textDecoration: "none", color: "var(--foreground)", transition: "all 0.3s ease", border: "1px solid rgba(255,255,255,0.05)", cursor: "pointer" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = member.accent; e.currentTarget.style.background = `rgba(${member.accentRgb}, 0.05)`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <Mail size={24} style={{ color: member.accent }} />
                  <div>
                    <div style={{ fontSize: "0.85rem", color: copiedEmail ? "#00e676" : "var(--muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px", transition: "color 0.3s ease" }}>
                      {copiedEmail ? "Copied to Clipboard!" : "Send Email"}
                    </div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{member.email}</div>
                  </div>
                </div>
                {copiedEmail ? <CheckCircle2 size={20} color="#00e676" /> : <ChevronRight size={20} />}
              </a>

              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 32px", borderRadius: "20px", background: "rgba(255,255,255,0.03)", textDecoration: "none", color: "var(--foreground)", transition: "all 0.3s ease", border: "1px solid rgba(255,255,255,0.05)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = member.accent; e.currentTarget.style.background = `rgba(${member.accentRgb}, 0.05)`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <LinkedinIcon size={24} style={{ color: member.accent }} />
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "var(--muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>LinkedIn</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{member.name}</div>
                  </div>
                </div>
                <ChevronRight size={20} />
              </a>

              <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 32px", borderRadius: "20px", background: "rgba(255,255,255,0.03)", textDecoration: "none", color: "var(--foreground)", transition: "all 0.3s ease", border: "1px solid rgba(255,255,255,0.05)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = member.accent; e.currentTarget.style.background = `rgba(${member.accentRgb}, 0.05)`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <GithubIcon size={24} style={{ color: member.accent }} />
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "var(--muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>Source Code</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>GitHub Profile</div>
                  </div>
                </div>
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
