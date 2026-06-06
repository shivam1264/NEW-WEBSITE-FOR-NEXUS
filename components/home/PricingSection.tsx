import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="section-padding" style={{ position: "relative", zIndex: 2, borderTop: "1px solid var(--card-border)" }}>
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
              color: "var(--foreground)",
              marginBottom: "16px",
            }}
          >
            Simple <span className="font-serif-i" style={{ color: "var(--accent)" }}>Engagement</span> Models
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1rem", maxWidth: "540px", margin: "0 auto" }}>
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
                  ? "linear-gradient(135deg, rgba(0, 255, 171, 0.05) 0%, var(--surface-1) 100%)"
                  : "var(--card-bg)",
                border: plan.highlight
                  ? "1px solid rgba(0, 255, 171, 0.35)"
                  : "1px solid var(--card-border)",
                borderRadius: "20px",
                padding: "36px",
                position: "relative",
                boxShadow: plan.highlight
                  ? "0 18px 46px rgba(0, 255, 171, 0.12), 0 0 0 1px rgba(0, 255, 171, 0.05)"
                  : "var(--card-shadow)",
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
                  color: "#020907",
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
              <p style={{ color: "var(--muted-2)", fontSize: "0.82rem", margin: "4px 0 20px", fontWeight: 500 }}>
                {plan.label}
              </p>
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: "2.4rem", fontWeight: 800, color: "var(--foreground)", letterSpacing: "-0.03em" }}>
                  {plan.price}
                </span>
                <span style={{ color: "var(--muted-2)", fontSize: "0.82rem", marginLeft: "6px" }}>{plan.suffix}</span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: "1.55", marginBottom: "28px", minHeight: "52px" }}>
                {plan.desc}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                {plan.features.map((f, fi) => (
                  <div key={fi} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: plan.highlight ? "var(--accent)" : "#64748b", fontSize: "0.88rem" }}>✓</span>
                    <span style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="btn-liquid-glass"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {plan.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "var(--muted-2)", fontSize: "0.8rem", marginTop: "28px", fontFamily: "var(--font-mono), monospace" }}>
          All prices in INR · Customized quotes available · No upfront payment required to start talks
        </p>
      </div>
    </section>
  );
}
