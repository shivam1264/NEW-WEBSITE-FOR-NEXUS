"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Home, Briefcase, Layers, Users, ChevronRight } from "lucide-react";
import NexusLogo from "./NexusLogo";

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

function GithubIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
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

function GlobeIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function Footer() {
  const accentGreen = "#00ffab";
  const borderSoft = "rgba(255, 255, 255, 0.08)";

  const quickLinks = [
    { label: "Home", href: "/", icon: <Home size={15} /> },
    { label: "Works", href: "/works", icon: <Briefcase size={15} /> },
    { label: "Services", href: "/services", icon: <Layers size={15} /> },
    { label: "Team", href: "/team", icon: <Users size={15} /> },
    { label: "Contact", href: "/contact", icon: <Mail size={15} /> }
  ];

  return (
    <footer style={{
      background: "#04060a",
      position: "relative",
      borderTop: `1px solid ${borderSoft}`,
      color: "var(--foreground)",
      overflow: "hidden"
    }}>
      <div
        className="container footer-grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          paddingTop: "60px",
          paddingBottom: "50px",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* COLUMN 1: Brand & Socials */}
        <div className="footer-col footer-col-brand" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Logo */}
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
              NEX<span style={{ color: accentGreen }}>US</span>
            </span>
          </Link>

          {/* Description */}
          <p style={{
            color: "var(--muted)",
            fontSize: "0.88rem",
            lineHeight: "1.6",
            margin: 0,
            maxWidth: "280px"
          }}>
            Engineering premium agentic AI interfaces, elite web architectures, and highly scalable mobile solutions for the future.
          </p>

          {/* Short Green Accent Line */}
          <div style={{
            width: "36px",
            height: "2px",
            background: `linear-gradient(90deg, ${accentGreen}, transparent)`,
            borderRadius: "2px",
            margin: "4px 0"
          }} />

          {/* FOLLOW US */}
          <div>
            <span style={{
              display: "block",
              fontSize: "0.68rem",
              color: "var(--muted-2)",
              fontFamily: "var(--font-mono), monospace",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "10px"
            }}>
              FOLLOW US
            </span>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {[
                { icon: <LinkedinIcon size={16} />, link: "https://www.linkedin.com/in/shivam-kumar-maurya-000370251/" },
                { icon: <GithubIcon size={16} />, link: "https://github.com/shivam1264" },
                { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/mauryashivamkumar841/" },
                { icon: <GlobeIcon size={16} />, link: "https://nexus.ac.in" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: `1px solid ${borderSoft}`,
                    color: "var(--muted)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0, 255, 171, 0.1)";
                    e.currentTarget.style.borderColor = accentGreen;
                    e.currentTarget.style.color = accentGreen;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                    e.currentTarget.style.borderColor = borderSoft;
                    e.currentTarget.style.color = "var(--muted)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="footer-col footer-col-links" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: accentGreen,
              margin: 0
            }}>
              QUICK LINKS
            </h4>
            <div style={{ width: "24px", height: "2px", background: accentGreen, marginTop: "6px", borderRadius: "1px" }} />
          </div>

          <div className="footer-quick-links-list" style={{ display: "flex", flexDirection: "column" }}>
            {quickLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: i < quickLinks.length - 1 ? `1px solid rgba(255, 255, 255, 0.05)` : "none",
                  color: "var(--foreground)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = accentGreen;
                  e.currentTarget.style.paddingLeft = "4px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--foreground)";
                  e.currentTarget.style.paddingLeft = "0px";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--muted-2)", display: "flex" }}>{link.icon}</span>
                  <span>{link.label}</span>
                </div>
                <ChevronRight size={14} color="var(--muted-2)" />
              </Link>
            ))}
          </div>
        </div>

        {/* COLUMN 3: GET IN TOUCH */}
        <div className="footer-col footer-col-touch" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: accentGreen,
              margin: 0
            }}>
              GET IN TOUCH
            </h4>
            <div style={{ width: "24px", height: "2px", background: accentGreen, marginTop: "6px", borderRadius: "1px" }} />
          </div>

          <div className="footer-touch-cards" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* Card 1: WhatsApp */}
            <a
              href="https://wa.me/916263944626"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(255, 255, 255, 0.02)",
                border: `1px solid ${borderSoft}`,
                borderRadius: "14px",
                padding: "14px 16px",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accentGreen;
                e.currentTarget.style.background = "rgba(0, 255, 171, 0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = borderSoft;
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(0, 255, 171, 0.12)",
                  border: "1px solid rgba(0, 255, 171, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: accentGreen,
                  flexShrink: 0
                }}>
                  <Phone size={16} />
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.88rem", fontWeight: 700, color: "var(--foreground)" }}>WhatsApp (Fastest)</span>
                  <span style={{ display: "block", fontSize: "0.76rem", fontWeight: 600, color: accentGreen, marginTop: "2px" }}>+91 62639 44626</span>
                  <span style={{ display: "block", fontSize: "0.70rem", color: "var(--muted)", marginTop: "1px" }}>Chat with us instantly</span>
                </div>
              </div>
              <ChevronRight size={14} color="var(--muted-2)" />
            </a>

            {/* Card 2: Email Us */}
            <a
              href="mailto:shubhampawar1263@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(255, 255, 255, 0.02)",
                border: `1px solid ${borderSoft}`,
                borderRadius: "14px",
                padding: "14px 16px",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accentGreen;
                e.currentTarget.style.background = "rgba(0, 255, 171, 0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = borderSoft;
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(0, 255, 171, 0.12)",
                  border: "1px solid rgba(0, 255, 171, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: accentGreen,
                  flexShrink: 0
                }}>
                  <Mail size={16} />
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.88rem", fontWeight: 700, color: "var(--foreground)" }}>Email Us</span>
                  <span style={{ display: "block", fontSize: "0.72rem", color: "var(--muted)", wordBreak: "break-all" }}>shubhampawar1263@gmail.com</span>
                </div>
              </div>
              <ChevronRight size={14} color="var(--muted-2)" />
            </a>
          </div>
        </div>

        {/* COLUMN 4: OUR OFFICE */}
        <div className="footer-col footer-col-office" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: accentGreen,
              margin: 0
            }}>
              OUR OFFICE
            </h4>
            <div style={{ width: "24px", height: "2px", background: accentGreen, marginTop: "6px", borderRadius: "1px" }} />
          </div>

          {/* Office Map Card */}
          <div className="footer-office-card" style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: `1px solid ${borderSoft}`,
            borderRadius: "16px",
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MapPin size={16} color={accentGreen} />
              <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--foreground)" }}>
                Bhopal, MP, India
              </span>
            </div>

            <span style={{
              fontSize: "0.72rem",
              color: "var(--muted-2)",
              fontFamily: "var(--font-mono), monospace",
              letterSpacing: "0.05em",
              marginLeft: "24px"
            }}>
              22.7196° N, 75.8577° E
            </span>

            {/* Stylized World Map Graphic with Radar Pulse over India */}
            <div className="footer-map-graphic" style={{
              position: "relative",
              width: "100%",
              height: "100px",
              background: "rgba(0, 0, 0, 0.4)",
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "4px"
            }}>
              {/* Dotted World Map Grid Background SVG */}
              <svg width="100%" height="100%" viewBox="0 0 300 100" fill="none" style={{ opacity: 0.25 }}>
                <pattern id="world-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#ffffff" />
                </pattern>
                <rect width="300" height="100" fill="url(#world-dots)" />
                {/* Simplified Continents outline contours */}
                <path d="M 30 20 Q 50 15 70 30 T 90 60 Q 60 80 40 60 Z" fill="rgba(255,255,255,0.08)" />
                <path d="M 120 20 Q 160 10 200 25 T 230 50 Q 210 75 160 80 T 130 50 Z" fill="rgba(255,255,255,0.08)" />
                <path d="M 220 50 Q 250 45 280 60 T 260 90 Z" fill="rgba(255,255,255,0.08)" />
              </svg>

              {/* Glowing Green Radar Marker on Bhopal, India */}
              <div style={{
                position: "absolute",
                top: "42%",
                left: "68%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <div style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: accentGreen,
                  boxShadow: `0 0 12px ${accentGreen}`,
                  zIndex: 2
                }} />
                <div style={{
                  position: "absolute",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: `1px solid ${accentGreen}`,
                  opacity: 0.6,
                  animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite"
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div
        className="container footer-bottom-bar"
        style={{
          paddingTop: "20px",
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
        <span style={{ color: "var(--muted)", fontSize: "0.82rem", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
          &copy; {new Date().getFullYear()} PTS CUBE (NEXUS). Built with Agentic Engineering.
        </span>

        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" }
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "0.82rem",
                transition: "color 0.2s",
                fontFamily: "var(--font-space-grotesk), sans-serif"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = accentGreen}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
