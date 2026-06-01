"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SalesVisual from "@/components/SalesVisual";
import Terminal from "@/components/Terminal";
import ScrollGallery from "@/components/ScrollGallery";
import { ArrowRight, ArrowUpRight, Trophy, Zap, Cpu, Server, CheckCircle2, MessageSquare, Shield, Box, Sparkles, Mail, Phone, MapPin, Layers, Database } from "lucide-react";

function LinkedinIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
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

function InstagramIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ value, duration = 1500, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Basic compatibility check for environments where IntersectionObserver is missing (e.g. server-side rendering)
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = value;
          const totalMiliseconds = duration;
          const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
          
          const timer = setInterval(() => {
            start += Math.ceil(end / (totalMiliseconds / incrementTime));
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(start);
            }
          }, incrementTime);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, duration]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
}

const renderServiceSvg = (idx: number, isHovered: boolean) => {
  const color = "var(--accent)";
  switch (idx) {
    case 0: // AI Solutions: Connecting nodes
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <line x1="4" y1="12" x2="9" y2="6" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="4" y1="12" x2="9" y2="18" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="9" y1="6" x2="15" y2="6" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="9" y1="18" x2="15" y2="18" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="9" y1="6" x2="20" y2="12" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="9" y1="18" x2="20" y2="12" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="15" y1="6" x2="20" y2="12" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="15" y1="18" x2="20" y2="12" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          
          {isHovered && (
            <circle cx="12" cy="9" r="2.5" fill={color}>
              <animate attributeName="cx" values="4;9;15;20" dur="2s" repeatCount="indefinite" />
              <animate attributeName="cy" values="12;6;6;12" dur="2s" repeatCount="indefinite" />
            </circle>
          )}

          <circle cx="4" cy="12" r={isHovered ? 3.5 : 2.5} fill="#0d0d12" stroke={color} strokeWidth="2" />
          <circle cx="9" cy="6" r={isHovered ? 3.5 : 2.5} fill="#0d0d12" stroke={color} strokeWidth="2" />
          <circle cx="9" cy="18" r={isHovered ? 3.5 : 2.5} fill="#0d0d12" stroke={color} strokeWidth="2" />
          <circle cx="15" cy="6" r={isHovered ? 3.5 : 2.5} fill="#0d0d12" stroke={color} strokeWidth="2" />
          <circle cx="15" cy="18" r={isHovered ? 3.5 : 2.5} fill="#0d0d12" stroke={color} strokeWidth="2" />
          <circle cx="20" cy="12" r={isHovered ? 4.5 : 3.5} fill={isHovered ? color : "#0d0d12"} stroke={color} strokeWidth="2" />
        </svg>
      );
    case 1: // Web Development: Browser columns layout resizer
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <rect x="2" y="3" width="20" height="18" rx="2" strokeWidth="2" />
          <line x1="2" y1="8" x2="22" y2="8" strokeWidth="2" />
          <circle cx="5" cy="5.5" r="1" fill={color} />
          <circle cx="8" cy="5.5" r="1" fill={color} />
          <rect x="5" y="11" width="4" height="7" rx="0.5" fill={isHovered ? "rgba(232, 96, 46, 0.15)" : "none"} strokeWidth="1.5" />
          <rect x="11" y="11" width="8" height="7" rx="0.5" fill={isHovered ? "rgba(232, 96, 46, 0.25)" : "none"} strokeWidth="1.5" style={{ transition: "all 0.3s" }} />
          <line x1="10" y1="9" x2="10" y2="20" strokeDasharray="2 2" strokeOpacity="0.6" />
          {isHovered && (
            <path d="M8 14.5l2-2 2 2" stroke={color} strokeWidth="1.5">
              <animateTransform attributeName="transform" type="translate" values="-1 0; 1 0; -1 0" dur="2.5s" repeatCount="indefinite" />
            </path>
          )}
        </svg>
      );
    case 2: // Mobile App: Phone border with tile layouts sliding up
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <rect x="6" y="2" width="12" height="20" rx="3" strokeWidth="2" />
          <line x1="10" y1="4" x2="14" y2="4" strokeWidth="1.5" />
          <circle cx="12" cy="20" r="1" strokeWidth="1.5" />
          
          <g style={{ transform: isHovered ? "translateY(-2px)" : "none", transition: "transform 0.4s ease" }}>
            <rect x="8" y="7" width="8" height="3" rx="0.5" fill={isHovered ? "rgba(232, 96, 46, 0.2)" : "none"} strokeWidth="1.5" />
            <rect x="8" y="11.5" width="8" height="3" rx="0.5" fill={isHovered ? "rgba(232, 96, 46, 0.2)" : "none"} strokeWidth="1.5" />
            <rect x="8" y="16" width="8" height="1" rx="0.2" strokeWidth="1" strokeOpacity="0.4" />
          </g>
        </svg>
      );
    case 3: // Startup MVP: Charging Lightning with a scanline
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" fill={isHovered ? "rgba(232, 96, 46, 0.15)" : "none"} style={{ transition: "fill 0.4s" }} />
          {isHovered && (
            <line x1="2" y1="0" x2="22" y2="0" stroke={color} strokeWidth="2" opacity="0.8">
              <animateTransform attributeName="transform" type="translate" values="0 2; 0 22; 0 2" dur="1.8s" repeatCount="indefinite" />
            </line>
          )}
        </svg>
      );
    case 4: // UI/UX Design: Pen Tool Arc Curve drawing
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <path d="M3 19 C 6 8, 18 8, 21 19" stroke={color} strokeWidth="2.5" strokeDasharray={isHovered ? "none" : "4 2"} strokeDashoffset={isHovered ? 0 : 2} style={{ transition: "stroke-dasharray 0.3s" }} />
          <rect x="2" y="17" width="2" height="2" fill={color} />
          <rect x="20" y="17" width="2" height="2" fill={color} />
          <line x1="12" y1="10" x2="12" y2="4" strokeWidth="1.5" strokeDasharray="1 1" />
          <circle cx="12" cy="10" r="1.5" fill="#0d0d12" stroke={color} strokeWidth="2" />
          
          <g style={{ transform: isHovered ? "rotate(15deg)" : "none", transformOrigin: "12px 10px", transition: "transform 0.4s ease-in-out" }}>
            <line x1="7" y1="10" x2="17" y2="10" strokeWidth="1.5" />
            <circle cx="7" cy="10" r="1.5" fill={color} />
            <circle cx="17" cy="10" r="1.5" fill={color} />
          </g>
        </svg>
      );
    case 5: // Automation Systems: Packet data flow conveyor loop
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <circle cx="12" cy="12" r="8" strokeOpacity="0.25" strokeWidth="2" />
          <path d="M3 12h4M17 12h4" strokeWidth="2" strokeOpacity="0.4" />
          <rect x="7" y="10" width="10" height="4" rx="1" fill={isHovered ? "rgba(232, 96, 46, 0.2)" : "none"} strokeWidth="2" />
          
          {isHovered ? (
            <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="2" strokeDasharray="4 6" style={{ transformOrigin: "center", animation: "rotateGeom 4s linear infinite" }} />
          ) : (
            <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" strokeDasharray="2 4" />
          )}
          <circle cx="12" cy="12" r="2" fill={color} />
        </svg>
      );
    default:
      return null;
  }
};

const renderTelemetryOverlay = (idx: number, isActive: boolean) => {
  const accent = "var(--accent)";
  if (!isActive) return null;

  switch (idx) {
    case 0: // Latency Chart
      return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#64748b" }}>
            <span>QUERY LATENCY RESPONSE</span>
            <span style={{ color: "#00e676" }}>● ONLINE</span>
          </div>
          <div style={{ flex: 1, position: "relative", margin: "10px 0" }}>
            <svg width="100%" height="100%" viewBox="0 0 280 90" fill="none">
              <line x1="0" y1="15" x2="280" y2="15" stroke="rgba(255,255,255,0.03)" />
              <line x1="0" y1="45" x2="280" y2="45" stroke="rgba(255,255,255,0.03)" />
              <line x1="0" y1="75" x2="280" y2="75" stroke="rgba(255,255,255,0.03)" />
              
              <path d="M 0 15 L 280 15" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
              <text x="200" y="12" fill="#ef4444" fontSize="8" opacity="0.7">Before: 900ms</text>

              <path d="M 10 15 Q 80 15 120 45 T 260 75" stroke={accent} strokeWidth="2" strokeLinecap="round" />
              <circle cx="260" cy="75" r="4" fill={accent}>
                <animate attributeName="r" values="3;6;3" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#ffffff" }}>
            <span>Current Delay: <span style={{ color: accent, fontWeight: 700 }}>180ms</span></span>
            <span style={{ color: "#00e676" }}>Target met</span>
          </div>
        </div>
      );
    case 1: // Launch Cohort sync checklist
      return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#64748b" }}>
            <span>Nexus Command Room</span>
            <span style={{ color: accent }}>COHORTS: 8/8</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", margin: "10px 0", fontSize: "9px", color: "#94a3b8" }}>
            <div>
              <span style={{ color: "#00e676", marginRight: "6px" }}>✔</span>
              <span>assets_pipeline_sync ............ COMPLETE (100%)</span>
            </div>
            <div>
              <span style={{ color: "#00e676", marginRight: "6px" }}>✔</span>
              <span>drift_telemetry_check ........... COMPILING (100%)</span>
            </div>
            <div>
              <span style={{ color: "#00e676", marginRight: "6px" }}>✔</span>
              <span>stakeholder_approvals ......... DEPLOYED (100%)</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "#ffffff" }}>
            <span style={{ color: "#00e676" }}>STATUS:</span>
            <span style={{ background: "rgba(0, 230, 118, 0.1)", border: "1px solid rgba(0, 230, 118, 0.2)", borderRadius: "4px", padding: "2px 8px", fontSize: "10px", color: "#00e676", fontWeight: 700 }}>ACTIVE DEPLOYMENT</span>
          </div>
        </div>
      );
    case 2: // Automated agent captures
      return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#64748b" }}>
            <span>CONVERSION RATIO INCREASE</span>
            <span style={{ color: "#00e5ff" }}>+45% DELTA</span>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "10px", padding: "10px 0" }}>
            {[35, 45, 42, 58, 65, 75, 95].map((val, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <div style={{
                  width: "100%",
                  height: `${val}%`,
                  background: i === 6 ? `linear-gradient(to top, rgba(232, 96, 46, 0.2), ${accent})` : "rgba(255, 255, 255, 0.05)",
                  border: i === 6 ? `1px solid ${accent}` : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "2px",
                  transition: "height 0.8s ease-out",
                }} />
                <span style={{ fontSize: "8px", color: "#475569" }}>D{i*5}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: "11px", color: "#ffffff", display: "flex", justifyContent: "space-between" }}>
            <span>Conversion Spike</span>
            <span style={{ color: "#00e676" }}>SLA: 99.98% Uptime</span>
          </div>
        </div>
      );
    case 3: // Mobile dispatch route map
      return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#64748b" }}>
            <span>EDGE DISPATCH GEOMETRY</span>
            <span style={{ color: "#d500f9" }}>ROUTE ID: 9402</span>
          </div>
          <div style={{ flex: 1, position: "relative", margin: "10px 0", background: "rgba(255, 255, 255, 0.01)", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "6px" }}>
            <svg width="100%" height="100%" viewBox="0 0 280 80">
              <circle cx="40" cy="40" r="4" fill="#0d0d12" stroke={accent} strokeWidth="2" />
              <text x="32" y="25" fill="#64748b" fontSize="8">KITCHEN</text>
              
              <circle cx="240" cy="40" r="4" fill="#0d0d12" stroke="#d500f9" strokeWidth="2" />
              <text x="215" y="25" fill="#64748b" fontSize="8">DELIVERY</text>

              <path d="M 40 40 Q 140 10 240 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="3 3" />
              
              <circle cx="40" cy="40" r="3" fill={accent}>
                <animateMotion path="M 40 40 Q 140 10 240 40" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#ffffff" }}>
            <span>Routing path active</span>
            <span style={{ color: "#00e676" }}>0 commission leakage</span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 4px",
          gap: "16px",
        }}
      >
        <span style={{
          color: open ? "#ffffff" : "#e2e8f0",
          fontSize: "1rem",
          fontWeight: 600,
          fontFamily: "var(--font-space-grotesk), sans-serif",
          lineHeight: "1.4",
          transition: "color 0.2s",
        }}>
          {question}
        </span>
        <span style={{
          color: "var(--accent)",
          fontSize: "1.4rem",
          fontWeight: 300,
          flexShrink: 0,
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          lineHeight: 1,
        }}>
          +
        </span>
      </div>
      <div style={{
        maxHeight: open ? "300px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <p style={{
          color: "#94a3b8",
          fontSize: "0.92rem",
          lineHeight: "1.65",
          padding: "0 4px 20px",
          margin: 0,
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [hoveredSvc, setHoveredSvc] = useState<number | null>(null);
  const [hoveredProj, setHoveredProj] = useState<number | null>(null);

  useEffect(() => {
    // Scroll Progress Bar
    const progressBar = document.getElementById('nexus-progress-bar');
    const onScroll = () => {
      if (progressBar) {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${Math.min(pct, 100)}%`;
      }
      // Scroll reveal
      document.querySelectorAll('.sr').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
          el.classList.add('in-view');
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ paddingBottom: "100px", fontFamily: "var(--font-manrope), sans-serif" }}>
      {/* Scroll Progress Bar */}
      <div id="nexus-progress-bar" style={{ position: "fixed", top: 0, left: 0, height: "2px", width: "0%", background: "linear-gradient(90deg, var(--accent), #ff6b35, #00e5ff)", zIndex: 10001, boxShadow: "0 0 10px var(--accent)", transition: "width 0.08s linear", pointerEvents: "none" }} />
      {/* 1. HERO SECTION (MOST IMPORTANT) */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          padding: "140px 0 80px",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Hero Left Content */}
          <div className="reveal-text">
            {/* Business Positioning Badge */}
            <div
              className="eyebrow-mono reveal-text status-badge"
              style={{
                background: "rgba(255, 92, 43, 0.08)",
                border: "1px solid rgba(255, 92, 43, 0.2)",
                borderRadius: "99px",
                color: "var(--accent)",
                marginBottom: "28px",
                padding: "6px 14px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <span className="pulsing-dot pulsing-dot-coral" />
              AI &amp; Full Stack Product Agency
            </div>

            {/* Headline */}
            <h1
              className="hero-title font-display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.4rem)",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              We Ship <span className="font-serif-i text-accent" style={{ color: "var(--accent)", textShadow: "0 0 60px rgba(255, 92, 43, 0.25), 0 0 120px rgba(255, 92, 43, 0.1)" }}>Products</span> That<br />
              Actually <span className="font-serif-i" style={{ color: "var(--accent)" }}>Grow</span> Businesses
            </h1>

            {/* Subheading */}
            <p
              className="hero-sub"
              style={{
                color: "#94a3b8",
                fontSize: "1.05rem",
                lineHeight: "1.65",
                maxWidth: "520px",
                marginBottom: "32px",
              }}
            >
              Team Nexus is a specialist engineering collective. We build production-grade websites, mobile apps, and AI automation systems — fast, clean, and focused on measurable results.
            </p>
            {/* Who We Build For Tags */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "36px" }}>
              {["Startups", "Local Businesses", "SaaS Founders", "Coaching Institutes"].map((tag) => (
                <span key={tag} style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.68rem", padding: "5px 14px", background: "rgba(255, 92, 43, 0.04)", border: "1px solid rgba(255, 92, 43, 0.15)", borderRadius: "99px", color: "#8892a4", letterSpacing: "0.06em", textTransform: "uppercase" }}>{tag}</span>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="btn-premium btn-pill-premium"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, var(--accent) 0%, #d63a12 100%)",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(255, 92, 43, 0.4), 0 1px 0 rgba(255,255,255,0.1) inset",
                }}
              >
                Book A Call <ArrowRight size={16} />
              </Link>
              <Link
                href="/works"
                className="btn-pill-premium"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  textDecoration: "none",
                }}
                data-hover="true"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Hero Right Laptop/Mobile/Dashboard Visuals */}
          <div style={{ display: "flex", justifySelf: "center" }}>
            <SalesVisual />
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION (INSTANT PROOF) */}
      <section
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          background: "rgba(7, 7, 26, 0.4)",
          padding: "48px 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              { icon: <Trophy size={18} />, text: <><AnimatedCounter value={2} /> National Hackathon Wins</>, desc: "Top awards for systems architecture" },
              { icon: <Sparkles size={18} />, text: "Multiple Real-World Projects", desc: "Production-grade, active deployments" },
              { icon: <Cpu size={18} />, text: "Full Stack + AI Dev Pods", desc: "Specialists in robust systems engineering" },
              { icon: <Layers size={18} />, text: "Web + Mobile + AI Solutions", desc: "Cross-platform business gravity" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  padding: "24px",
                  borderRadius: "14px",
                  background: "rgba(7, 7, 26, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "rgba(255, 92, 43, 0.08)",
                  border: "1px solid rgba(255, 92, 43, 0.2)",
                  color: "var(--accent)",
                  flexShrink: 0,
                  marginTop: "2px",
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      marginBottom: "6px",
                    }}
                  >
                    {item.text}
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "0.82rem", margin: 0, lineHeight: "1.4" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <div style={{
        padding: "48px 0",
        borderTop: "1px solid rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.03)",
        position: "relative",
        zIndex: 2,
        background: "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(255, 92, 43, 0.02) 0%, transparent 85%)"
      }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
          <span style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.7rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#64748b",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", boxShadow: "0 0 6px var(--accent)" }} />
            Technologies We Master
          </span>
        </div>
        <div className="tech-marquee-wrap">
          <div className="tech-marquee-track">
            {[
              ...[
                { name: "React", color: "#00d8ff", rgb: "0, 216, 255" },
                { name: "Next.js", color: "#ffffff", rgb: "255, 255, 255" },
                { name: "Python", color: "#3776ab", rgb: "55, 118, 171" },
                { name: "FastAPI", color: "#009688", rgb: "0, 150, 136" },
                { name: "Flutter", color: "#02569b", rgb: "2, 86, 155" },
                { name: "PostgreSQL", color: "#336791", rgb: "51, 103, 145" },
                { name: "LangChain", color: "#00e676", rgb: "0, 230, 118" },
                { name: "Vercel", color: "#ffffff", rgb: "255, 255, 255" },
                { name: "TypeScript", color: "#3178c6", rgb: "49, 120, 198" },
                { name: "TensorFlow", color: "#ff6f00", rgb: "255, 111, 0" },
                { name: "Firebase", color: "#ffca28", rgb: "255, 202, 40" },
                { name: "Node.js", color: "#339933", rgb: "51, 153, 51" }
              ],
              ...[
                { name: "React", color: "#00d8ff", rgb: "0, 216, 255" },
                { name: "Next.js", color: "#ffffff", rgb: "255, 255, 255" },
                { name: "Python", color: "#3776ab", rgb: "55, 118, 171" },
                { name: "FastAPI", color: "#009688", rgb: "0, 150, 136" },
                { name: "Flutter", color: "#02569b", rgb: "2, 86, 155" },
                { name: "PostgreSQL", color: "#336791", rgb: "51, 103, 145" },
                { name: "LangChain", color: "#00e676", rgb: "0, 230, 118" },
                { name: "Vercel", color: "#ffffff", rgb: "255, 255, 255" },
                { name: "TypeScript", color: "#3178c6", rgb: "49, 120, 198" },
                { name: "TensorFlow", color: "#ff6f00", rgb: "255, 111, 0" },
                { name: "Firebase", color: "#ffca28", rgb: "255, 202, 40" },
                { name: "Node.js", color: "#339933", rgb: "51, 153, 51" }
              ],
              ...[
                { name: "React", color: "#00d8ff", rgb: "0, 216, 255" },
                { name: "Next.js", color: "#ffffff", rgb: "255, 255, 255" },
                { name: "Python", color: "#3776ab", rgb: "55, 118, 171" },
                { name: "FastAPI", color: "#009688", rgb: "0, 150, 136" },
                { name: "Flutter", color: "#02569b", rgb: "2, 86, 155" },
                { name: "PostgreSQL", color: "#336791", rgb: "51, 103, 145" },
                { name: "LangChain", color: "#00e676", rgb: "0, 230, 118" },
                { name: "Vercel", color: "#ffffff", rgb: "255, 255, 255" },
                { name: "TypeScript", color: "#3178c6", rgb: "49, 120, 198" },
                { name: "TensorFlow", color: "#ff6f00", rgb: "255, 111, 0" },
                { name: "Firebase", color: "#ffca28", rgb: "255, 202, 40" },
                { name: "Node.js", color: "#339933", rgb: "51, 153, 51" }
              ]
            ].map((tech, i) => (
              <span
                key={i}
                className="tech-pill"
                style={{
                  "--pill-accent": tech.color,
                  "--pill-accent-rgb": tech.rgb
                } as React.CSSProperties}
              >
                <span className="tech-dot" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2.2 SCROLL-DRIVEN PARALLAX GALLERY */}
      <ScrollGallery />

      {/* 2.5 NATIONAL HACKATHON SHOWCASE */}
      <section
        className="section-padding"
        style={{
          background: "transparent",
          position: "relative",
          zIndex: 2,
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="container">
          <div style={{ marginBottom: "40px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "8px" }}>
              <span className="pulsing-dot pulsing-dot-coral" />
              Championship Credentials
            </span>
            <h2
              className="section-header-title font-display"
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
                background: "rgba(7, 7, 22, 0.7)",
                border: "1px solid rgba(255, 214, 0, 0.15)",
                borderRadius: "24px",
                padding: "clamp(20px, 4vw, 40px)",
                display: "flex",
                flexWrap: "wrap",
                gap: "40px",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
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
                  Out of thousands of competing student-led startups and developer teams across the nation, Team Nexus won the <strong style={{ color: "#ffffff" }}>Grand Prize (₹1,00,000)</strong>. We designed, coded, and deployed a high-capacity triage model and medical scheduling client dashboard within a continuous 36-hour sprint.
                </p>

                <div
                  style={{
                    borderLeft: "2px solid var(--accent)",
                    paddingLeft: "16px",
                    background: "rgba(255, 92, 43, 0.04)",
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
                    borderRadius: "999px",
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
        </div>
      </section>

      {/* 3. SERVICES SECTION (5-6 PREMIUM SERVICES) */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="container">
          {/* Section Header */}
          <div style={{ marginBottom: "60px", maxWidth: "600px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
              <span className="pulsing-dot pulsing-dot-coral" />
              Capabilities
            </span>
            <h2
              className="section-header-title font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              What We <span className="font-serif-i" style={{ color: "var(--accent)" }}>Do</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "1.02rem", lineHeight: "1.6" }}>
              We build fast, scalable digital products designed to drive business efficiency and customer trust.
            </p>
          </div>

          {/* Services Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {[
              {
                title: "AI Solutions",
                desc: "Custom intelligent assistants, cognitive process automation, vector search systems, and smart workflows engineered to cut manual operations.",
                icon: <Cpu size={20} />,
                badge: "AI Chatbots & Automation"
              },
              {
                title: "Web Development",
                desc: "High-performance enterprise websites, SaaS admin panels, and corporate portals. Optimized for speed, reliability, and modern branding.",
                icon: <Server size={20} />,
                badge: "Next.js & SSR Platforms"
              },
              {
                title: "Mobile App Development",
                desc: "Native-quality cross-platform applications with fluid gesture controls, offline support, and seamless deployment on App Store & Google Play.",
                icon: <Box size={20} />,
                badge: "Flutter & iOS/Android"
              },
              {
                title: "Startup MVP Development",
                desc: "Rapid product cycles targeting proof-of-concept validations. We launch polished Minimum Viable Products in weeks, not months.",
                icon: <Zap size={20} />,
                badge: "Fast-Track Launch"
              },
              {
                title: "UI/UX Design",
                desc: "High-end conversion layouts, responsive interface mapping, and smooth micro-interactions. Tailored for startup aesthetics.",
                icon: <CheckCircle2 size={20} />,
                badge: "Conversion-Oriented UI"
              },
              {
                title: "Automation Systems",
                desc: "Connecting tools and data flows to automate sales tracking, lead follow-ups, scheduling, and billing systems.",
                icon: <MessageSquare size={20} />,
                badge: "Integrations & APIs"
              }
            ].map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredSvc(idx)}
                onMouseLeave={() => setHoveredSvc(null)}
                className={`service-card ${["service-card-ai","service-card-web","service-card-mobile","service-card-mvp","service-card-ux","service-card-auto"][idx]}`}
                style={{
                  background: "rgba(7, 7, 22, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: "18px",
                  padding: "40px",
                  backdropFilter: "blur(8px)",
                }}
                data-hover="true"
              >
                <div
                  className="svc-icon"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.04)",
                    marginBottom: "24px",
                  }}
                >
                  {renderServiceSvg(idx, hoveredSvc === idx)}
                </div>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.72rem",
                    color: "var(--accent)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "8px"
                  }}
                >
                  {service.badge}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "14px",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / ENGAGEMENT TIERS SECTION */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
              <span className="pulsing-dot pulsing-dot-coral" />
              Transparent Pricing
            </span>
            <h2
              className="section-header-title font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              Simple <span className="font-serif-i" style={{ color: "var(--accent)" }}>Engagement</span> Models
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "1rem", maxWidth: "540px", margin: "0 auto" }}>
              No hidden fees. No bloated retainers. Pick the model that matches your project scale.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", alignItems: "start" }}>
            {[
              {
                tier: "Starter",
                label: "Landing Page / MVP",
                price: "₹15,000",
                suffix: "onwards",
                desc: "Perfect for solopreneurs and local businesses needing a fast, professional online presence.",
                features: ["5-7 page website", "Mobile responsive", "Contact form", "SEO setup", "1 month support"],
                cta: "Get Started",
                highlight: false,
                color: "#64748b",
              },
              {
                tier: "Growth",
                label: "Full Product Build",
                price: "₹45,000",
                suffix: "onwards",
                desc: "For startups and businesses that need a complete product — web, mobile, or AI — built right.",
                features: ["Custom web or mobile app", "AI integration available", "Admin dashboard", "API integrations", "3 months post-launch support"],
                cta: "Book a Call",
                highlight: true,
                color: "var(--accent)",
              },
              {
                tier: "Enterprise",
                label: "Custom Scope",
                price: "Custom",
                suffix: "quote",
                desc: "Large-scale systems, SaaS platforms, or ongoing product partnerships. Let's discuss.",
                features: ["Unlimited scope", "Dedicated dev pod", "Custom AI systems", "Priority SLA uptime", "Ongoing maintenance contract"],
                cta: "Let's Talk",
                highlight: false,
                color: "#00e5ff",
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                style={{
                  background: plan.highlight
                    ? "linear-gradient(135deg, rgba(255, 92, 43, 0.14) 0%, rgba(7,7,22,0.95) 100%)"
                    : "rgba(7, 7, 22, 0.7)",
                  border: plan.highlight
                    ? "1px solid rgba(255, 92, 43, 0.35)"
                    : "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: "20px",
                  padding: "36px",
                  position: "relative",
                  boxShadow: plan.highlight
                    ? "0 24px 60px rgba(255, 92, 43, 0.18), 0 0 0 1px rgba(255, 92, 43, 0.1)"
                    : "0 10px 30px rgba(0,0,0,0.5)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backdropFilter: "blur(12px)",
                }}
                data-hover="true"
              >
                {plan.highlight && (
                  <div style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--accent)",
                    color: "#ffffff",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-mono), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    padding: "4px 14px",
                    borderRadius: "99px",
                    whiteSpace: "nowrap",
                  }}>
                    Most Popular
                  </div>
                )}
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.12em", color: plan.color, fontWeight: 700 }}>
                  {plan.tier}
                </span>
                <p style={{ color: "#94a3b8", fontSize: "0.82rem", margin: "4px 0 20px", fontWeight: 500 }}>
                  {plan.label}
                </p>
                <div style={{ marginBottom: "8px" }}>
                  <span style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: "2.4rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>
                    {plan.price}
                  </span>
                  <span style={{ color: "#64748b", fontSize: "0.82rem", marginLeft: "6px" }}>{plan.suffix}</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: "1.55", marginBottom: "28px", minHeight: "52px" }}>
                  {plan.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                  {plan.features.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: plan.highlight ? "var(--accent)" : "#64748b", fontSize: "0.88rem" }}>✓</span>
                      <span style={{ color: "#e2e8f0", fontSize: "0.85rem" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={plan.highlight ? "btn-premium btn-pill-premium" : "btn-pill-premium"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: plan.highlight
                      ? "linear-gradient(135deg, var(--accent) 0%, #d63a12 100%)"
                      : "rgba(255, 255, 255, 0.04)",
                    border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.08)",
                    color: "#ffffff",
                    textDecoration: "none",
                    boxShadow: plan.highlight ? "0 4px 20px rgba(255, 92, 43, 0.4)" : "none",
                  }}
                >
                  {plan.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", color: "#475569", fontSize: "0.8rem", marginTop: "28px", fontFamily: "var(--font-mono), monospace" }}>
            All prices in INR · Customized quotes available · No upfront payment required to start talks
          </p>
        </div>
      </section>

      {/* 4. PROJECT SHOWCASE (CASE STUDIES WITH OUTCOME) */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="container">
          {/* Section Header */}
          <div style={{ marginBottom: "60px", maxWidth: "600px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
              <span className="pulsing-dot pulsing-dot-coral" />
              Case Studies
            </span>
            <h2
              className="section-header-title font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              Featured Systems <span className="font-serif-i" style={{ color: "var(--accent)" }}>Deployed</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "1.02rem", lineHeight: "1.6" }}>
              Explore how we translate business briefs into high-impact digital systems.
            </p>
          </div>

          {/* Projects Photo Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 420px), 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                title: "CareForYou AI Platform",
                subtitle: "Conversational healthcare agent & appointment system",
                tags: ["AI Assistant", "Healthcare", "Next.js"],
                img: "/images/careforyou_ui.png"
              },
              {
                title: "Nexus Launch Command Room",
                subtitle: "Centralized operational war room & system metrics",
                tags: ["Launch Ops", "Dashboards", "FastAPI"],
                img: "/images/dashboard_ui.png"
              },
              {
                title: "Automated Customer Agent",
                subtitle: "24/7 client qualifying automated chatbot system",
                tags: ["AI Chatbot", "Automation", "Retention"],
                img: "/images/careforyou_ui.png"
              },
              {
                title: "Restaurant App Dispatcher",
                subtitle: "White-labeled ordering & local dispatch mobile system",
                tags: ["Mobile App", "Flutter", "SaaS Core"],
                img: "/images/restaurant_app_ui.png"
              }
            ].map((proj, idx) => (
              <Link
                href="/works"
                key={idx}
                onMouseEnter={() => setHoveredProj(idx)}
                onMouseLeave={() => setHoveredProj(null)}
                suppressHydrationWarning={true}
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  aspectRatio: "16 / 10",
                  cursor: "pointer",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  display: "block",
                  textDecoration: "none",
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
                    transform: hoveredProj === idx ? "scale(1.07)" : "scale(1)",
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
                    opacity: hoveredProj === idx ? 0 : 1,
                  }}
                />

                {/* Hover overlay — dark backdrop */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.2) 100%)",
                    pointerEvents: "none",
                    opacity: hoveredProj === idx ? 1 : 0,
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
                    transform: hoveredProj === idx ? "translateY(0)" : "translateY(12px)",
                    opacity: hoveredProj === idx ? 1 : 0,
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
                    opacity: hoveredProj === idx ? 0 : 1,
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
                    opacity: hoveredProj === idx ? 1 : 0,
                    transform: hoveredProj === idx ? "scale(1)" : "scale(0.8)",
                    transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (RESOLVING STUDENT BIAS) */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="container">
          <div className="bento-grid">
            {/* The Statement Card (Left, Spans 2 rows) */}
            <div className="bento-card-double">
              <div className="statement-card" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
                    <span className="pulsing-dot pulsing-dot-coral" />
                    The Nexus Commitment
                  </span>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "24px",
                    }}
                  >
                    We build <span className="font-serif-i" style={{ color: "var(--accent)" }}>tools</span>, not tech homework.
                  </h2>
                  <p style={{ color: "#94a3b8", fontSize: "0.98rem", lineHeight: "1.65", margin: 0 }}>
                    We are not code freelancers working in silos. Team Nexus functions as an agile product development partner. We focus on business outcomes, clear contracts, and rapid deployments that increase your revenue and trust metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Terminal on top, Subgrid at bottom */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", justifyContent: "space-between" }}>
              {/* Card 2: Interactive Terminal Widget */}
              <div>
                <Terminal />
              </div>

              {/* Card 3: 3-column mini-grid of principles */}
              <div className="bento-inner-grid">
                {[
                  {
                    title: "Rapid MVP Timelines",
                    desc: "We skip unnecessary corporate bloat. We define, build, and deploy functional MVPs to production in a matter of weeks.",
                    color: "#00e5ff",
                    bg: "rgba(0, 229, 255, 0.06)",
                    border: "rgba(0, 229, 255, 0.15)",
                  },
                  {
                    title: "AI + Scalable Code",
                    desc: "We hook automated LLM workflows directly into Next.js or mobile frames so your software scales effortlessly.",
                    color: "#ffd600",
                    bg: "rgba(255, 214, 0, 0.06)",
                    border: "rgba(255, 214, 0, 0.15)",
                  },
                  {
                    title: "Dedicated Product Pods",
                    desc: "You deal directly with the engineers and designers building your system. No sales middlemen, no communication lag.",
                    color: "#ff007f",
                    bg: "rgba(255, 0, 127, 0.06)",
                    border: "rgba(255, 0, 127, 0.15)",
                  },
                ].map((p, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(7, 7, 22, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      borderRadius: "14px",
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                    data-hover="true"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: p.bg,
                        border: `1px solid ${p.border}`,
                        color: p.color,
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: "0.95rem", fontWeight: 800 }}>0{idx + 1}</span>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-space-grotesk), sans-serif",
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "#ffffff",
                          marginBottom: "8px",
                        }}
                      >
                        {p.title}
                      </h3>
                      <p style={{ color: "#94a3b8", fontSize: "0.82rem", lineHeight: "1.5", margin: 0 }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEAM PODS PREVIEW SECTION */}
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
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              Our <span className="font-serif-i" style={{ color: "var(--accent)" }}>Specialists</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "1.02rem", lineHeight: "1.6" }}>
              Meet the specialists running our core client development pods.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                name: "Aarav Mehta",
                role: "AI Lead & Engineer",
                desc: "LLMs, Vector Databases, Python Agentic scripting.",
                portfolio: "/team/aarav-mehta",
                portfolioLabel: "View Portfolio",
                photo: "/images/team_member_1.png",
                cls: "pod-direction",
              },
              {
                name: "Kavya Sharma",
                role: "Full Stack Lead",
                desc: "Next.js core structures, secure server APIs, databases.",
                portfolio: "/team/kavya-sharma",
                portfolioLabel: "View Portfolio",
                photo: "/images/team_member_2.png",
                cls: "pod-product",
              },
              {
                name: "Rohan Das",
                role: "Flutter Developer",
                desc: "Cross-platform mobile apps, native notifications.",
                portfolio: "/team/rohan-das",
                portfolioLabel: "View Portfolio",
                photo: "/images/team_member_3.png",
                cls: "pod-signal",
              },
              {
                name: "Isha Patel",
                role: "UI/UX Designer",
                desc: "Figma wireframes, modern styling systems.",
                portfolio: "/team/isha-patel",
                portfolioLabel: "View Portfolio",
                photo: "/images/team_member_4.png",
                cls: "pod-momentum",
              },
              {
                name: "Kabir Malhotra",
                role: "Ops & Strategy Lead",
                desc: "MVP scopes, agile scheduling, delivery management.",
                portfolio: "/team/kabir-malhotra",
                portfolioLabel: "View Portfolio",
                photo: "/images/team_member_5.png",
                cls: "pod-direction",
              },
            ].map((pod, idx) => (
              <div
                key={idx}
                className={`member-card ${pod.cls}`}
                style={{
                  background: "rgba(7, 7, 22, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: "20px",
                  position: "relative",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
                data-hover="true"
              >
                {/* Photo Portrait — clean image */}
                <div className="member-portrait-frame">
                  <img
                    src={pod.photo}
                    alt={pod.name}
                  />
                  <div className="member-portrait-overlay" />
                </div>

                {/* Card Body — name + role + desc + link all below photo */}
                <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 700, margin: "0 0 4px", fontFamily: "var(--font-syne), sans-serif" }}>
                    {pod.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "10px",
                    }}
                  >
                    {pod.role}
                  </span>
                  <p style={{ color: "#94a3b8", fontSize: "0.8rem", lineHeight: "1.5", marginBottom: "16px", flex: 1 }}>
                    {pod.desc}
                  </p>

                  {/* Portfolio link */}
                  <a
                    href={pod.portfolio}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#64748b",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      paddingTop: "12px",
                      marginTop: "auto",
                      transition: "color 0.2s",
                      fontFamily: "var(--font-mono), monospace",
                      letterSpacing: "0.02em",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}
                  >
                    <ArrowUpRight size={11} />
                    <span>{pod.portfolioLabel}</span>
                  </a>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION (WORKFLOW) */}
      <section
        className="section-padding"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="container">
          <div style={{ marginBottom: "60px", maxWidth: "600px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "10px" }}>
              <span className="pulsing-dot pulsing-dot-coral" />
              Execution Setup
            </span>
            <h2
              className="section-header-title font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              Our <span className="font-serif-i" style={{ color: "var(--accent)" }}>Workflow</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: "10px" }}>
              How we take your product requirements from discussion to production maintenance.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              { num: "01", title: "Requirement Discussion", desc: "Align on target objectives, mock features, and critical project deadlines." },
              { num: "02", title: "UI/UX Planning", desc: "Map navigation channels, key screens, wireframes, and verify styling options." },
              { num: "03", title: "Development Phase", desc: "Engineers code mobile routes, AI configurations, and database integrations." },
              { num: "04", title: "System Testing", desc: "Exhaustive QA routines checking system drift, query load metrics, and UI bugs." },
              { num: "05", title: "Production Deployment", desc: "Push application servers live on global Edge architectures and configure domain assets." },
              { num: "06", title: "Maintenance & Support", desc: "Monitor live uptime SLA thresholds and patch dependency variables regularly." }
            ].map((step, idx) => (
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
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 800,
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
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                    marginTop: "16px",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: "1.6", margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (SOCIAL PROOF) */}
      <section
        className="section-padding"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "10px" }}>
              <span className="pulsing-dot pulsing-dot-coral" />
              Feedback
            </span>
            <h2
              className="section-header-title font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              What Mentors &amp; <span className="font-serif-i" style={{ color: "var(--accent)" }}>Clients</span> Say
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {[
              {
                quote: "Team Nexus demonstrated outstanding technical depth during the National Hackathon. They built a production-ready AI inference dashboard in 48 hours that handled mock drifts effortlessly.",
                author: "Dr. A. Sharma",
                role: "Hackathon Mentor & System Architect"
              },
              {
                quote: "We hired the Nexus team to design and build our automated customer chatbot system. They delivered the MVP in 3 weeks, and it now handles over 40% of our out-of-hours leads autonomously.",
                author: "R. Singhal",
                role: "Founder, local edTech startup"
              },
              {
                quote: "Their white-labeled ordering client saved us thousands in commission fees. The UI is clean, and driver notifications work in real-time. Extremely organized group.",
                author: "M. Patel",
                role: "Operations Director, Patel Foods"
              }
            ].map((test, idx) => (
              <div
                key={idx}
                className="testimonial-enhanced"
                style={{
                  background: "rgba(7, 7, 22, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: "18px",
                  padding: "36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                data-hover="true"
              >
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div className="testimonial-stars">
                    {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#fbbf24" }}>★</span>)}
                  </div>
                  <p style={{ color: "#e2e8f0", fontSize: "0.92rem", lineHeight: "1.65", fontStyle: "italic", marginBottom: "24px" }}>
                    &ldquo;{test.quote}&rdquo;
                  </p>
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
                      {test.author}
                    </h4>
                    <span style={{ color: "var(--accent)", fontSize: "0.78rem", fontWeight: 600 }}>
                      {test.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
              <span className="pulsing-dot pulsing-dot-coral" />
              Common Questions
            </span>
            <h2
              className="section-header-title font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              Before You <span className="font-serif-i" style={{ color: "var(--accent)" }}>Reach Out</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              {
                q: "How long does a typical project take?",
                a: "A basic landing page or MVP website is typically ready in 7-14 days. A full product with AI integrations or mobile apps takes 4-8 weeks depending on scope. We always define a clear timeline upfront in the project brief."
              },
              {
                q: "Do you require full payment upfront?",
                a: "No. We work on a 50% upfront / 50% on delivery model for most projects. For larger projects, we split into 3 milestones. We never ask for 100% upfront."
              },
              {
                q: "Can you work with clients outside Indore / India?",
                a: "Absolutely. We have worked with clients remotely across India and internationally. All communication happens via WhatsApp, Google Meet, and our project dashboard."
              },
              {
                q: "Do you provide ongoing maintenance after launch?",
                a: "Yes. All projects include 30 days of free post-launch support. Extended maintenance plans are available starting from ₹3,000/month."
              },
              {
                q: "What if I have only a rough idea and no technical knowledge?",
                a: "That's perfectly fine — most of our clients come with ideas, not specs. We handle the full discovery, planning, design, and development process. You just need to communicate your business goals."
              },
              {
                q: "Do you sign NDAs and contracts?",
                a: "Yes. We sign NDAs and provide a simple project agreement before any work begins. Your idea and codebase remain fully protected and owned by you after delivery."
              },
            ].map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <div
            className="cta-glow-card"
            style={{
              background: "radial-gradient(circle at top right, rgba(255, 92, 43, 0.14) 0%, transparent 60%), rgba(7, 7, 22, 0.9)",
              border: "1px solid rgba(255, 92, 43, 0.2)",
              borderRadius: "28px",
              padding: "clamp(36px, 6vw, 72px) clamp(24px, 5vw, 60px)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "16px" }}>
                <span className="pulsing-dot pulsing-dot-coral" />
                Start Here
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.4rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "16px",
                }}
              >
                Let's Build Something<br />
                <span className="font-serif-i" style={{ color: "var(--accent)" }}>Worth Shipping</span>
              </h2>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  maxWidth: "520px",
                  margin: "0 auto",
                }}
              >
                Share your idea — we'll tell you what it takes to ship it. No commitment. No jargon.
              </p>
            </div>

            {/* Step-by-step next steps */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", marginBottom: "48px", background: "rgba(255,255,255,0.05)", borderRadius: "16px", overflow: "hidden" }}>
              {[
                { step: "01", title: "Book a Call", desc: "15 minutes on WhatsApp or Google Meet" },
                { step: "02", title: "Get a Proposal", desc: "Timeline, scope & pricing in 24 hours" },
                { step: "03", title: "We Start Building", desc: "First milestone delivery in 7 days" },
              ].map((s, i) => (
                <div key={i} style={{ background: "rgba(7,7,22,0.8)", padding: "28px 24px" }}>
                  <span style={{ display: "block", fontFamily: "var(--font-mono), monospace", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
                    Step {s.step}
                  </span>
                  <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>
                    {s.title}
                  </h4>
                  <p style={{ color: "#64748b", fontSize: "0.82rem", margin: 0, lineHeight: "1.4" }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="btn-premium btn-pill-premium"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, var(--accent) 0%, #d63a12 100%)",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(255, 92, 43, 0.45)",
                }}
              >
                Book Free Call <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919999999999?text=Hi%20Team%20Nexus%2C%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="btn-pill-premium"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(37, 211, 102, 0.08)",
                  border: "1px solid rgba(37, 211, 102, 0.25)",
                  color: "#25d366",
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
