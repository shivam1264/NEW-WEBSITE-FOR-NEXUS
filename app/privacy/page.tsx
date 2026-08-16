import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | NEXUS',
  description: 'Privacy Policy for NEXUS.',
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p style={{ color: "var(--accent)", marginBottom: "40px", fontFamily: "var(--font-mono), monospace", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Last Updated: June 2026
          </p>

          <div style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8", fontSize: "1rem", display: "flex", flexDirection: "column", gap: "28px" }}>
            <section style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "24px" }}>
              <h2 style={{ color: "var(--foreground)", fontSize: "1.35rem", marginBottom: "12px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>1. Information We Collect</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>We collect information that you provide directly to us, such as when you request a quote, fill out a contact form, or communicate with us via email or WhatsApp. This may include your name, email address, phone number, and project details.</p>
            </section>

            <section style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "24px" }}>
              <h2 style={{ color: "var(--foreground)", fontSize: "1.35rem", marginBottom: "12px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>2. How We Use Your Information</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>We use the information we collect to communicate with you about your project, provide our development services, process payments, and improve our website and offerings. We do not sell or rent your personal data to third parties.</p>
            </section>

            <section style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "24px" }}>
              <h2 style={{ color: "var(--foreground)", fontSize: "1.35rem", marginBottom: "12px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>3. Data Security</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>We implement industry-standard security measures to protect your personal information. All communications and project data are handled securely and kept confidential.</p>
            </section>

            <section>
              <h2 style={{ color: "var(--foreground)", fontSize: "1.35rem", marginBottom: "12px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>4. Contact Us</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>If you have any questions about this Privacy Policy, please contact us at <strong style={{ color: "var(--accent)" }}>build@nexus.ac.in</strong>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
