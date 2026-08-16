"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export default function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleTiltMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const glow = card.querySelector(".bento-card-glow") as HTMLDivElement | null;
    if (glow) {
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = "1";
    }
  };

  const handleTiltMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;

    const card = e.currentTarget;
    const glow = card.querySelector(".bento-card-glow") as HTMLDivElement | null;
    if (glow) {
      glow.style.opacity = "0";
    }
  };

  const plans = [
    {
      tier: "STARTER",
      title: "Landing Page / MVP",
      price: "₹9,999",
      suffix: "onwards",
      desc: "Perfect for solopreneurs and local businesses needing a fast, professional online presence.",
      features: [
        "5–7 page website",
        "Mobile responsive",
        "Contact form",
        "SEO setup",
        "1 month support"
      ],
      cta: "Get Started",
      highlight: false,
      colorRGB: "0, 229, 255",
      color: "#00e5ff"
    },
    {
      tier: "GROWTH",
      title: "Full Product Build",
      price: "₹20,000",
      suffix: "onwards",
      desc: "For startups and businesses that need a complete product — web, mobile, or AI — built right.",
      features: [
        "Custom web or mobile app",
        "AI integration available",
        "Admin dashboard",
        "API integrations",
        "3 months post-launch support"
      ],
      cta: "Book a Call",
      highlight: true,
      colorRGB: "0, 255, 171",
      color: "#00ffab"
    },
    {
      tier: "ENTERPRISE",
      title: "Custom Scope",
      price: "Custom",
      suffix: "quote",
      desc: "Large-scale systems, SaaS platforms, or ongoing product partnerships. Let's discuss.",
      features: [
        "Unlimited scope",
        "Dedicated dev pod",
        "Custom AI systems",
        "Priority SLA uptime",
        "Ongoing maintenance contract"
      ],
      cta: "Let's Talk",
      highlight: false,
      colorRGB: "213, 0, 249",
      color: "#d500f9"
    }
  ];

  return (
    <section className="section-padding" style={{ position: "relative", zIndex: 2, borderTop: "1px solid var(--card-border)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0, 255, 171, 0.05)",
            border: "1px solid rgba(0, 255, 171, 0.2)",
            padding: "6px 14px",
            borderRadius: "100px",
            marginBottom: "16px",
            backdropFilter: "blur(10px)"
          }}>
            <Sparkles size={14} color="#00FFAB" />
            <span style={{
              color: "#00FFAB",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em"
            }}>
              Transparent Pricing
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: "var(--fs-h2)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "16px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em"
            }}
          >
            Simple <span className="font-serif-i" style={{ color: "var(--accent)" }}>Engagement</span> Models
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "var(--fs-body)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.5 }}>
            No hidden fees. No bloated retainers. Pick the engagement model that matches your project scale.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "stretch" }}>
          {plans.map((plan, idx) => {
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={idx}
                className="pricing-card-item"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={(e) => {
                  setHoveredCard(null);
                  handleTiltMouseLeave(e);
                }}
                onMouseMove={handleTiltMouseMove}
                style={{
                  background: plan.highlight
                    ? "linear-gradient(180deg, rgba(0, 255, 171, 0.08) 0%, rgba(10, 16, 26, 0.95) 100%)"
                    : isHovered
                    ? `linear-gradient(180deg, rgba(${plan.colorRGB}, 0.06) 0%, var(--card-bg) 100%)`
                    : "var(--card-bg)",
                  border: plan.highlight
                    ? "1px solid rgba(0, 255, 171, 0.45)"
                    : isHovered
                    ? `1px solid rgba(${plan.colorRGB}, 0.4)`
                    : "1px solid var(--card-border)",
                  borderRadius: "24px",
                  padding: "36px 32px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                  transform: isHovered ? "translateY(-6px)" : "none",
                  boxShadow: plan.highlight
                    ? "0 22px 50px rgba(0, 255, 171, 0.15), 0 0 30px rgba(0, 255, 171, 0.05)"
                    : isHovered
                    ? `0 18px 40px rgba(${plan.colorRGB}, 0.15)`
                    : "var(--card-shadow)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  backdropFilter: "blur(16px)",
                }}
              >
                {/* Glow Follower */}
                <div
                  className="bento-card-glow"
                  style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    background: `radial-gradient(circle, rgba(${plan.colorRGB}, 0.18) 0%, transparent 70%)`,
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 2
                  }}
                />

                {/* Most Popular Badge */}
                {plan.highlight && (
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--accent)",
                    color: "#020907",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-mono), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    padding: "4px 16px",
                    borderRadius: "0 0 12px 12px",
                    boxShadow: "0 4px 16px rgba(0, 255, 171, 0.4)",
                    zIndex: 4
                  }}>
                    Most Popular
                  </div>
                )}

                <div style={{ position: "relative", zIndex: 3 }}>
                  {/* Top Tier Badge */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", marginTop: plan.highlight ? "8px" : "0" }}>
                    <span style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: plan.color,
                      fontWeight: 800,
                      background: `rgba(${plan.colorRGB}, 0.1)`,
                      border: `1px solid rgba(${plan.colorRGB}, 0.25)`,
                      padding: "3px 10px",
                      borderRadius: "6px"
                    }}>
                      {plan.tier}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="pricing-title" style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--foreground)",
                    margin: "0 0 16px 0",
                    lineHeight: 1.2
                  }}>
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div style={{ marginBottom: "16px", display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span className="pricing-amount" style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontSize: "2.8rem",
                      fontWeight: 800,
                      color: "var(--foreground)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em"
                    }}>
                      {plan.price}
                    </span>
                    <span style={{ color: "var(--muted)", fontSize: "0.82rem", fontFamily: "var(--font-mono), monospace" }}>
                      {plan.suffix}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="pricing-desc" style={{
                    color: "var(--muted)",
                    fontSize: "0.88rem",
                    lineHeight: 1.55,
                    marginBottom: "28px",
                  }}>
                    {plan.desc}
                  </p>

                  {/* Features List */}
                  <div className="pricing-features-list" style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
                    {plan.features.map((f, fi) => (
                      <div key={fi} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: `rgba(${plan.colorRGB}, 0.12)`,
                          border: `1px solid rgba(${plan.colorRGB}, 0.3)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0
                        }}>
                          <Check size={12} color={plan.color} />
                        </div>
                        <span style={{ color: "var(--foreground)", fontSize: "0.88rem", fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div style={{ position: "relative", zIndex: 3 }}>
                  <Link
                    href="/contact"
                    className="pricing-cta-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      width: "100%",
                      padding: "14px 20px",
                      borderRadius: "14px",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      background: plan.highlight
                        ? "var(--accent)"
                        : "rgba(255, 255, 255, 0.05)",
                      color: plan.highlight ? "#020907" : "#fff",
                      border: plan.highlight ? "none" : "1px solid rgba(255, 255, 255, 0.12)",
                      boxShadow: plan.highlight ? "0 4px 24px rgba(0, 255, 171, 0.35)" : "none"
                    }}
                  >
                    {plan.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Line */}
        <p style={{
          textAlign: "center",
          color: "var(--muted)",
          fontSize: "0.82rem",
          marginTop: "36px",
          fontFamily: "var(--font-mono), monospace"
        }}>
          All prices in INR · Customized quotes available · No upfront payment required to start talks
        </p>
      </div>
    </section>
  );
}
