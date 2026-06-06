import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | NEXUS',
  description: 'Terms of Service for NEXUS.',
};

export default function TermsOfServicePage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "120px", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            color: "var(--accent)", fontSize: "0.9rem", fontWeight: 700,
            textDecoration: "none", marginBottom: "40px",
            fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.1em"
          }}
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <h1 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "3rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "20px" }}>
          Terms of Service
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: "60px", fontFamily: "var(--font-mono), monospace" }}>
          Last Updated: June 2026
        </p>

        <div style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.8", fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "30px" }}>
          <section>
            <h2 style={{ color: "var(--foreground)", fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>1. Acceptance of Terms</h2>
            <p>By accessing and using our website or hiring NEXUS for development services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--foreground)", fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>2. Services Provided</h2>
            <p>NEXUS provides custom software development, web design, mobile app development, and AI integration services. Project scopes, timelines, and deliverables are defined individually in project contracts.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--foreground)", fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>3. Intellectual Property</h2>
            <p>Upon full payment for our services, the intellectual property rights of the custom code and designs produced specifically for your project are transferred to you, unless otherwise stated in the project agreement.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--foreground)", fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>4. Limitation of Liability</h2>
            <p>NEXUS shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services or deliverables.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
