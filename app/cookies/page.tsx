import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy | NEXUS',
  description: 'Cookie Policy for NEXUS.',
};

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>
          <p style={{ color: "var(--accent)", marginBottom: "40px", fontFamily: "var(--font-mono), monospace", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Last Updated: June 2026
          </p>

          <div style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8", fontSize: "1rem", display: "flex", flexDirection: "column", gap: "28px" }}>
            <section style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "24px" }}>
              <h2 style={{ color: "var(--foreground)", fontSize: "1.35rem", marginBottom: "12px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>1. What Are Cookies</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
            </section>

            <section style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "24px" }}>
              <h2 style={{ color: "var(--foreground)", fontSize: "1.35rem", marginBottom: "12px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>2. How We Use Cookies</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>We use cookies to understand how you interact with our website, to improve your browsing experience, and to remember your preferences (such as dark mode settings). We do not use cookies for aggressive third-party advertising.</p>
            </section>

            <section>
              <h2 style={{ color: "var(--foreground)", fontSize: "1.35rem", marginBottom: "12px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>3. Managing Cookies</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
