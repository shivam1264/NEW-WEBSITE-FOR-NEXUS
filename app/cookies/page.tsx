import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy | NEXUS',
  description: 'Cookie Policy for NEXUS.',
};

export default function CookiePolicyPage() {
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
          Cookie Policy
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: "60px", fontFamily: "var(--font-mono), monospace" }}>
          Last Updated: June 2026
        </p>

        <div style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.8", fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "30px" }}>
          <section>
            <h2 style={{ color: "var(--foreground)", fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>1. What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--foreground)", fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>2. How We Use Cookies</h2>
            <p>We use cookies to understand how you interact with our website, to improve your browsing experience, and to remember your preferences (such as dark mode settings). We do not use cookies for aggressive third-party advertising.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--foreground)", fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>3. Managing Cookies</h2>
            <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
