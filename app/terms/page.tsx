import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | NEXUS',
  description: 'Terms of Service for NEXUS.',
};

export default function TermsOfServicePage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            color: "var(--accent)", fontSize: "0.85rem", fontWeight: 700,
            textDecoration: "none", marginBottom: "32px",
            fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.1em"
          }}
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: "24px",
          padding: "clamp(28px, 5vw, 56px)",
          boxShadow: "var(--card-shadow)",
          backdropFilter: "blur(12px)"
        }}>
          <h1 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, color: "var(--foreground)", marginBottom: "12px" }}>
            Terms of Service
          </h1>
          <p style={{ color: "var(--accent)", marginBottom: "40px", fontFamily: "var(--font-mono), monospace", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Last Updated: June 2026
          </p>

          <div style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8", fontSize: "1rem", display: "flex", flexDirection: "column", gap: "28px" }}>
            <section style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "24px" }}>
              <h2 style={{ color: "var(--foreground)", fontSize: "1.35rem", marginBottom: "12px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>1. Acceptance of Terms</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>By accessing and using our website or hiring NEXUS for development services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.</p>
            </section>

            <section style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "24px" }}>
              <h2 style={{ color: "var(--foreground)", fontSize: "1.35rem", marginBottom: "12px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>2. Services Provided</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>NEXUS provides custom software development, web design, mobile app development, and AI integration services. Project scopes, timelines, and deliverables are defined individually in project contracts.</p>
            </section>

            <section style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "24px" }}>
              <h2 style={{ color: "var(--foreground)", fontSize: "1.35rem", marginBottom: "12px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>3. Intellectual Property</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>Upon full payment for our services, the intellectual property rights of the custom code and designs produced specifically for your project are transferred to you, unless otherwise stated in the project agreement.</p>
            </section>

            <section>
              <h2 style={{ color: "var(--foreground)", fontSize: "1.35rem", marginBottom: "12px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>4. Limitation of Liability</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>NEXUS shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services or deliverables.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
