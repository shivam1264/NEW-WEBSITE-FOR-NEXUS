export default function Testimonials() {
  return (
    <section
      className="section-padding"
      style={{
        borderTop: "1px solid var(--card-border)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "10px" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Feedback
          </span>
          <h2
            className="section-header-title font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "var(--foreground)",
            }}
          >
            What Mentors &amp; <span className="font-serif-i" style={{ color: "var(--accent)" }}>Clients</span> Say
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {[
            {
              quote: "NEXUS demonstrated outstanding technical depth during the National Hackathon. They built a production-ready AI inference dashboard in 48 hours that handled mock drifts effortlessly.",
              author: "Dr. A. Sharma",
              role: "Hackathon Mentor & System Architect"
            },
            {
              quote: "We hired the Nexus team to design and build our automated customer chatbot system. They delivered the MVP in 3 weeks, and it now handles over 40% of our out-of-hours leads autonomously.",
              author: "R. Singhal",
              role: "Founder, local edTech startup"
            },
            {
              quote: "Their white-labeled ordering client saved us thousands in commission fees. The UI is clean, and driver notifications work in real-time. Extremely organized group.",
              author: "M. Patel",
              role: "Operations Director, Patel Foods"
            }
          ].map((test, idx) => (
            <div
              key={idx}
              className="testimonial-enhanced"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "18px",
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "var(--card-shadow)"
              }}
              data-hover="true"
            >
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: "#fbbf24" }}>★</span>)}
                </div>
                <p style={{ color: "var(--foreground)", fontSize: "0.92rem", lineHeight: "1.65", fontStyle: "italic", marginBottom: "24px" }}>
                  &ldquo;{test.quote}&rdquo;
                </p>
                <div>
                  <h4 style={{ color: "var(--foreground)", fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
                    {test.author}
                  </h4>
                  <span style={{ color: "var(--accent)", fontSize: "0.78rem", fontWeight: 600 }}>
                    {test.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
