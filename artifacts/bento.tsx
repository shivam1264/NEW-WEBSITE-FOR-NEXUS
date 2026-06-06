          <div className="bento-asymmetric-wrapper">
            {/* Top Row: Full Width Manifesto */}
            <div 
              className="bento-manifesto-card premium-tilt-card"
              onMouseMove={handleTiltMouseMove}
              onMouseLeave={handleTiltMouseLeave}
            >
              <div className="bento-manifesto-content">
                <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "16px", display: "inline-block" }}>
                  <span className="pulsing-dot pulsing-dot-coral" />
                  The Nexus Commitment
                </span>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    marginBottom: "24px",
                    lineHeight: 1.15
                  }}
                >
                  We build <span className="font-serif-i" style={{ color: "var(--accent)" }}>tools</span>,<br/>not tech homework.
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: "1.6", margin: 0, maxWidth: "600px" }}>
                  We are not freelancers working in silos. NEXUS is an agile product development partner. We focus on business outcomes, clear contracts, and rapid deployments that increase your revenue and trust.
                </p>
              </div>
              <div className="bento-manifesto-asset">
                <img src="/images/char-team.png" className="char-floating-img" alt="Nexus Team discussing a project" style={{ width: "100%", height: "auto", objectFit: "contain", transform: "scale(1.25)", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }} />
              </div>
            </div>

            {/* Bottom Row: Terminal + Core Principles */}
            <div className="bento-core-grid">
              {/* Left Column: Terminal Card */}
              <div
                style={{ height: "100%", display: "flex", alignItems: "center", position: "relative", zIndex: 5 }}
                onMouseEnter={() => setIsPrincipleAutoplayPaused(true)}
                onMouseLeave={() => setIsPrincipleAutoplayPaused(false)}
              >
                <Terminal activeIdx={activePrinciple} />
              </div>

              {/* Right Column: Principles List Card */}
              <div
                className="statement-card bento-principles-card premium-tilt-card"
                style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px", height: "100%", background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "24px" }}
                onMouseEnter={() => setIsPrincipleAutoplayPaused(true)}
                onMouseLeave={() => setIsPrincipleAutoplayPaused(false)}
              >
                <div className="bento-principles-list" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    {
                      title: "Rapid MVP Timelines",
                      desc: "We define, build, and deploy functional MVPs in a matter of weeks.",
                      color: "#00e5ff",
                      bg: "rgba(0, 229, 255, 0.08)",
                      border: "rgba(0, 229, 255, 0.2)",
                    },
                    {
                      title: "AI + Scalable Code",
                      desc: "We hook automated LLM workflows directly into Next.js or mobile frames.",
                      color: "#ffd600",
                      bg: "rgba(255, 214, 0, 0.08)",
                      border: "rgba(255, 214, 0, 0.2)",
                    },
                    {
                      title: "Dedicated Product Pods",
                      desc: "You deal directly with the engineers and designers building your system.",
                      color: "#ff007f",
                      bg: "rgba(255, 0, 127, 0.08)",
                      border: "rgba(255, 0, 127, 0.2)",
                    },
                  ].map((p, idx) => (
                    <div
                      key={idx}
                      className={`bento-principle-item ${activePrinciple === idx ? "active" : ""}`}
                      onMouseEnter={() => setActivePrinciple(idx)}
                      style={{
                        "--item-hover-color": p.color,
                        border: "1px solid",
                        borderColor: activePrinciple === idx ? p.border : "rgba(15, 23, 42, 0.04)",
                        background: activePrinciple === idx ? p.bg : "rgba(15, 23, 42, 0.01)",
                        boxShadow: activePrinciple === idx ? `0 8px 24px rgba(15, 23, 42, 0.08), 0 0 15px ${p.bg}` : "none",
                        cursor: "pointer",
                      } as React.CSSProperties}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: activePrinciple === idx ? p.color : p.bg,
                          border: `1px solid ${p.border}`,
                          color: activePrinciple === idx ? "#000000" : p.color,
                          flexShrink: 0,
                          fontSize: "0.85rem",
                          fontWeight: 900,
                          transition: "all 0.3s ease"
                        }}
                      >
                        0{idx + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4
                          style={{
                            fontFamily: "var(--font-space-grotesk), sans-serif",
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            color: "var(--foreground)",
                            marginBottom: "4px",
                            transition: "color 0.3s ease"
                          }}
                        >
                          {p.title}
                        </h4>
                        <p style={{ color: activePrinciple === idx ? "var(--foreground)" : "var(--muted)", fontSize: "0.78rem", lineHeight: "1.4", margin: 0, transition: "color 0.3s ease" }}>
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
