"use client";

import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import NexusLogo from "./NexusLogo";

function LinkedinIcon({ size = 14, style }: { size?: number; style?: React.CSSProperties }) {
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

function InstagramIcon({ size = 14, style }: { size?: number; style?: React.CSSProperties }) {
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

export default function Footer() {
  const primaryGlow = "#00E5FF";
  const secondaryGlow = "#00FFAB";
  const borderSoft = "rgba(255, 255, 255, 0.08)";

  return (
    <footer style={{ 
      background: "rgba(5, 5, 8, 0.95)", 
      position: "relative",
      borderTop: `1px solid ${borderSoft}`,
      overflow: "hidden"
    }}>
      {/* Massive Glowing Orb in Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "200px",
        background: `radial-gradient(ellipse at center, rgba(0, 229, 255, 0.08) 0%, transparent 60%)`,
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          paddingTop: "60px",
          paddingBottom: "40px",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* Brand Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <NexusLogo size={28} style={{ marginRight: 0 }} />
            <span style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 800,
              color: "#FFFFFF",
              fontSize: "1.4rem",
              letterSpacing: "-0.03em",
              display: "inline-flex",
              alignItems: "center",
              textTransform: "uppercase"
            }}>
              NEX
              <span style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontStyle: "normal",
                fontWeight: 800,
                textTransform: "uppercase",
                fontSize: "1.4rem",
                background: `linear-gradient(90deg, ${primaryGlow}, ${secondaryGlow})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                us
              </span>
            </span>
          </Link>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              maxWidth: "280px",
              fontFamily: "var(--font-space-grotesk), sans-serif",
            }}
          >
            Engineering premium agentic AI interfaces, elite web architectures, and highly scalable mobile solutions.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            {[
              { icon: <LinkedinIcon size={16} />, link: "https://www.linkedin.com/in/shivam-kumar-maurya-000370251/", label: "LinkedIn" },
              { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/mauryashivamkumar841/", label: "Instagram" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: `1px solid ${borderSoft}`,
                  color: "#cbd5e1",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  backdropFilter: "blur(10px)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 229, 255, 0.1)";
                  e.currentTarget.style.borderColor = primaryGlow;
                  e.currentTarget.style.color = primaryGlow;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = borderSoft;
                  e.currentTarget.style.color = "#cbd5e1";
                  e.currentTarget.style.transform = "none";
                }}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h4
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: primaryGlow,
            }}
          >
            Directory
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Home", "Works", "Services", "Team", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  display: "inline-flex",
                  alignItems: "center",
                  width: "fit-content"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Direct Channels */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h4
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: primaryGlow,
            }}
          >
            Direct Channels
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
            <a
              href="https://chat.whatsapp.com/IA8ZkRoQWF2DG1crFZjOjN"
              target="_blank"
              rel="noreferrer"
              style={{ 
                padding: "10px 18px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(0, 255, 171, 0.05)",
                border: `1px solid rgba(0, 255, 171, 0.2)`,
                borderRadius: "100px",
                color: secondaryGlow,
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 255, 171, 0.15)";
                e.currentTarget.style.boxShadow = `0 4px 15px rgba(0, 255, 171, 0.2)`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 255, 171, 0.05)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "none";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              <span>WhatsApp (Fastest)</span>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: secondaryGlow, boxShadow: `0 0 8px ${secondaryGlow}`, animation: "pulse 2s infinite" }} />
            </a>
            <a
              href="mailto:build@nexus.ac.in"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.95rem",
                textDecoration: "none",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = primaryGlow}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}
            >
              <Mail size={16} style={{ color: primaryGlow }} />
              <span>build@nexus.ac.in</span>
              <ArrowUpRight size={14} style={{ opacity: 0.5 }} />
            </a>
          </div>
        </div>

        {/* Hub Location (Telemetry Card) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h4
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: primaryGlow,
            }}
          >
            Core Node
          </h4>
          <div style={{ 
            padding: "24px",
            background: "rgba(10, 10, 15, 0.6)",
            border: `1px solid rgba(0, 229, 255, 0.2)`,
            borderRadius: "16px",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(10px)",
            boxShadow: "inset 0 0 30px rgba(0, 229, 255, 0.05)"
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "2px",
              background: `linear-gradient(180deg, ${primaryGlow}, ${secondaryGlow})`,
              boxShadow: `0 0 15px ${primaryGlow}`,
            }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Global Gateway</span>
              <span style={{ color: secondaryGlow, display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", fontFamily: "var(--font-mono), monospace", fontWeight: 700, background: "rgba(0, 255, 171, 0.1)", padding: "2px 8px", borderRadius: "100px", border: "1px solid rgba(0, 255, 171, 0.2)" }}>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: secondaryGlow, boxShadow: `0 0 6px ${secondaryGlow}`, animation: "pulse 2s infinite" }} />
                ACTIVE
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.1rem", color: "#ffffff", fontWeight: 700, marginBottom: "8px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              <MapPin size={16} color={primaryGlow} />
              Bhopal, MP, India
            </div>
            <div style={{ fontSize: "0.75rem", color: primaryGlow, fontFamily: "var(--font-mono), monospace", letterSpacing: "0.05em", opacity: 0.8 }}>
              SYS_LOC: 22.7196° N, 75.8577° E
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="container"
        style={{
          marginTop: "20px",
          paddingTop: "24px",
          paddingBottom: "24px",
          borderTop: `1px solid ${borderSoft}`,
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px"
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", display: "inline-block", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
          &copy; {new Date().getFullYear()}{" "}NEXUS. Built with Agentic Engineering.
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" }
          ].map((link) => (
            <Link key={link.label} href={link.href} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s", fontFamily: "var(--font-space-grotesk), sans-serif" }}
              onMouseEnter={(e) => e.currentTarget.style.color = primaryGlow}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
