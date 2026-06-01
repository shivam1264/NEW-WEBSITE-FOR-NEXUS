"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
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
  return (
    <footer className="footer-container-glowing">
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
          paddingBottom: "20px",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* Brand Section */}
        <div>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <NexusLogo size={24} style={{ marginRight: 0 }} />
            <span style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 800,
              color: "#ffffff",
              fontSize: "1.15rem",
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
                color: "var(--accent)",
                textTransform: "uppercase",
                fontSize: "1.15rem",
                marginLeft: "0px",
                background: "linear-gradient(135deg, var(--accent) 0%, #ff835c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                us
              </span>
            </span>
          </Link>
          <p
            style={{
              color: "#64748b",
              fontSize: "0.82rem",
              lineHeight: "1.55",
              maxWidth: "260px",
              marginBottom: "12px",
            }}
          >
            AI-powered web &amp; mobile solutions built for modern businesses, coaching institutes, and startups.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="https://linkedin.com/company/teamnexus"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-badge linkedin"
              aria-label="LinkedIn Link"
            >
              <LinkedinIcon size={14} />
            </a>
            <a
              href="https://instagram.com/teamnexus"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-badge instagram"
              aria-label="Instagram Link"
            >
              <InstagramIcon size={14} />
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.72rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#94a3b8",
              marginBottom: "10px",
            }}
          >
            Navigation
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {["Home", "Works", "Services", "Team", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="footer-nav-link"
              >
                <span className="nav-marker">&gt;&nbsp;</span>
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Direct Channels */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.72rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#94a3b8",
              marginBottom: "10px",
            }}
          >
            Direct Channels
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp-glass"
              style={{ padding: "8px 14px" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span>WhatsApp (Fastest)</span>
              <span className="pulsing-dot pulsing-dot-mint" style={{ width: "5px", height: "5px" }} />
            </a>
            <a
              href="mailto:build@teamnexus.agency"
              className="footer-email-link"
            >
              <Mail size={12} style={{ color: "var(--accent)" }} />
              <span>build@teamnexus.agency</span>
            </a>
          </div>
        </div>

        {/* Hub Location (Telemetry Card) */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.72rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#94a3b8",
              marginBottom: "10px",
            }}
          >
            Hub Location
          </h4>
          <div className="footer-gateway-card" style={{ padding: "12px 14px" }}>
            <div className="gateway-header">
              <span>Gateway Node</span>
              <span style={{ color: "#25d366", display: "flex", alignItems: "center", gap: "4px" }}>
                <span className="pulsing-dot pulsing-dot-mint" style={{ width: "5px", height: "5px" }} />
                Active
              </span>
            </div>
            <div className="gateway-location" style={{ fontSize: "0.82rem" }}>
              Indore, MP, India
            </div>
            <div style={{ fontSize: "0.58rem", color: "#475569", fontFamily: "var(--font-mono), monospace", letterSpacing: "0.02em" }}>
              SYS_LOC: 22.7196° N, 75.8577° E
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="footer-bottom-bar"
        style={{
          marginTop: "16px",
          paddingTop: "12px",
          borderTop: "1px solid rgba(255, 255, 255, 0.04)",
          position: "relative",
          zIndex: 1
        }}
      >
        <span style={{ color: "#64748b", fontSize: "0.76rem", display: "inline-block" }}>
          &copy; {new Date().getFullYear()}{" "}Team Nexus. All rights reserved. Built with Next.js &amp; FastAPI.
        </span>
        <div className="footer-legal-links" style={{ display: "flex", gap: "20px" }}>
          <Link href="/contact" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.76rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}
          >
            Privacy Policy
          </Link>
          <Link href="/contact" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.76rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
