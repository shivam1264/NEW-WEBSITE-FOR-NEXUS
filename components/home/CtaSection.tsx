import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="section-padding" style={{ position: "relative", zIndex: 2 }}>
      <div className="container" style={{ maxWidth: "960px" }}>
        <div
          className="cta-glow-card"
          style={{
            background: "radial-gradient(circle at top right, rgba(255, 92, 43, 0.08) 0%, transparent 60%), radial-gradient(circle at bottom left, rgba(0, 191, 165, 0.04) 0%, transparent 60%), var(--card-bg)",
            border: "1px solid rgba(255, 92, 43, 0.15)",
            borderRadius: "28px",
            padding: "clamp(36px, 6vw, 72px) clamp(24px, 5vw, 60px)",
            boxShadow: "var(--card-shadow)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "16px" }}>
              <span className="pulsing-dot pulsing-dot-coral" />
              Start Here
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                fontWeight: 700,
                color: "var(--foreground)",
                marginBottom: "16px",
              }}
            >
              Let's Build Something<br />
              <span className="font-serif-i" style={{ color: "var(--accent)" }}>Worth Shipping</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "1rem",
                lineHeight: "1.6",
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              Share your idea — we'll tell you what it takes to ship it. No commitment. No jargon.
            </p>
          </div>

          {/* Step-by-step next steps */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", marginBottom: "48px", background: "rgba(15, 23, 42, 0.04)", borderRadius: "16px", overflow: "hidden" }}>
            {[
              { step: "01", title: "Book a Call", desc: "15 minutes on WhatsApp or Google Meet" },
              { step: "02", title: "Get a Proposal", desc: "Timeline, scope & pricing in 24 hours" },
              { step: "03", title: "We Start Building", desc: "First milestone delivery in 7 days" },
            ].map((s, i) => (
              <div key={i} style={{ background: "var(--card-bg)", padding: "28px 24px" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono), monospace", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
                  Step {s.step}
                </span>
                <h4 style={{ color: "var(--foreground)", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>
                  {s.title}
                </h4>
                <p style={{ color: "var(--muted)", fontSize: "0.82rem", margin: 0, lineHeight: "1.4" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              className="btn-liquid-glass"
            >
              Book Free Call <ArrowRight size={16} />
            </Link>
            <a
              href="https://chat.whatsapp.com/IA8ZkRoQWF2DG1crFZjOjN"
              target="_blank"
              rel="noreferrer"
              className="btn-liquid-glass"
              style={{
                background: "rgba(37, 211, 102, 0.08)",
                border: "1px solid rgba(37, 211, 102, 0.25)",
                color: "#25d366",
                boxShadow: "0 4px 18px rgba(37, 211, 102, 0.08)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
