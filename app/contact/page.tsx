"use client";

import { useState, useEffect } from "react";
import { Send, Terminal as TerminalIcon, Phone, Mail, MapPin, ArrowLeft, ArrowRight, Check, Sparkles, Cpu, Layers, Smartphone } from "lucide-react";

function LinkedinIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [ticketId, setTicketId] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const svc = params.get("service");
      if (svc) {
        const mappings: Record<string, string> = {
          ai: "AI & Automation",
          automation: "AI & Automation",
          web: "Web Platform",
          mvp: "Web Platform",
          mobile: "Mobile App",
          ui: "UI/UX & Styling"
        };
        const selected = mappings[svc.toLowerCase()];
        if (selected) {
          setFormData((prev) => ({ ...prev, project: selected }));
          setStep(2);
        }
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectService = (service: string) => {
    setFormData((prev) => ({ ...prev, project: service }));
    setStep(2);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);
    
    // Generate secure boarding pass info
    const tId = "NXS-" + Math.random().toString(36).substring(2, 9).toUpperCase();
    const current = new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });
    setTicketId(tId);
    setTimestamp(current);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setStep(4);
    }, 1200);
  };

  const canProceedToStep3 = formData.name.trim() !== "" && formData.email.trim() !== "" && formData.email.includes("@");

  return (
    <div
      style={{
        padding: "140px 0 80px",
        minHeight: "100vh",
        fontFamily: "var(--font-manrope), sans-serif",
      }}
      className="container"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "60px",
          alignItems: "start",
        }}
      >
        {/* Left Side Copy & HUD */}
        <div className="reveal-text">
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Contact
          </span>
          <h1
            className="hero-title font-display"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            Ready to Build Your <br />
            Next <span className="font-serif-i" style={{ color: "var(--accent)" }}>Digital Product</span>?
          </h1>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.02rem",
              lineHeight: "1.65",
              marginBottom: "32px",
              maxWidth: "480px",
            }}
          >
            Tell us about your startup concept or local business system requirements. Book a call to align on MVP timeline options and exact deliverables.
          </p>

          {/* Project Status HUD */}
          <div className="contact-status-hud">
            <div className="hud-title">
              <span>System Telemetry</span>
              <span style={{ color: "#25d366", display: "flex", alignItems: "center", gap: "6px" }}>
                <span className="pulsing-dot pulsing-dot-mint" style={{ width: "8px", height: "8px" }} />
                Online
              </span>
            </div>
            <div className="hud-row">
              <span className="hud-label">Response SLA</span>
              <span className="hud-value" style={{ color: "var(--accent)" }}>&lt; 24 Hours</span>
            </div>
            <div className="hud-row">
              <span className="hud-label">Sprint Load</span>
              <span className="hud-value">2 Slots Available</span>
            </div>
            <div className="hud-row">
              <span className="hud-label">NDAs</span>
              <span className="hud-value" style={{ color: "#00e5ff" }}>Instant Signing</span>
            </div>
            <div className="hud-row">
              <span className="hud-label">Deployment Core</span>
              <span className="hud-value">Indore, IN</span>
            </div>
          </div>

          {/* Direct Channels Links */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "32px"
            }}
          >
            <a
              href="https://wa.me/919999999999?text=Hello%20Team%20Nexus,%20I%20want%20to%20build%20a%20digital%20product."
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(37, 211, 102, 0.08)",
                border: "1px solid rgba(37, 211, 102, 0.2)",
                color: "#25d366",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(37, 211, 102, 0.15)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(37, 211, 102, 0.08)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <Phone size={18} />
            </a>

            <a
              href="mailto:build@teamnexus.agency?subject=Project%20Inquiry"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255, 92, 43, 0.08)",
                border: "1px solid rgba(255, 92, 43, 0.2)",
                color: "var(--accent)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 92, 43, 0.15)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 92, 43, 0.08)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <Mail size={18} />
            </a>

            <a
              href="https://linkedin.com/company/teamnexus"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#cbd5e1",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href="https://instagram.com/teamnexus"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#cbd5e1",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* Right Side: Wizard Cards or Holographic Boarding Pass */}
        <div>
          {step <= 3 ? (
            <div className="contact-form-card" style={{ minHeight: "520px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              {/* Step indicator header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "16px", marginBottom: "24px" }}>
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.75rem", color: "var(--accent)", fontWeight: 700 }}>
                  STEP 0{step} / 03
                </span>
                <span style={{ color: "#64748b", fontSize: "0.75rem", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                  {step === 1 ? "Choose service focus" : step === 2 ? "Provide identity links" : "Submit vision details"}
                </span>
              </div>

              {/* Wizard Step 1: Services Choices */}
              {step === 1 && (
                <div className="wizard-step-container" style={{ display: "flex", flexDirection: "column", gap: "20px", flex: 1 }}>
                  <h3 style={{ fontSize: "1.15rem", color: "#ffffff", fontWeight: 700, margin: "0 0 4px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    Select your project category:
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    {[
                      { id: "AI & Automation", title: "AI Solutions", desc: "LLMs, Automations, Agents", icon: <Cpu size={24} style={{ color: "var(--accent)" }} /> },
                      { id: "Web Platform", title: "Web Dev", desc: "Next.js core structures", icon: <Layers size={24} style={{ color: "#00e5ff" }} /> },
                      { id: "Mobile App", title: "Mobile Client", desc: "Flutter mobile platforms", icon: <Smartphone size={24} style={{ color: "#ffd600" }} /> },
                      { id: "UI/UX & Styling", title: "UI/UX & Design", desc: "Modern styling interfaces", icon: <Sparkles size={24} style={{ color: "#ff007f" }} /> }
                    ].map((svc) => (
                      <div
                        key={svc.id}
                        onClick={() => selectService(svc.id)}
                        className={`tactile-service-card ${formData.project === svc.id ? "active" : ""}`}
                      >
                        <div className="card-icon">{svc.icon}</div>
                        <div>
                          <h3>{svc.title}</h3>
                          <p>{svc.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wizard Step 2: Name & Email */}
              {step === 2 && (
                <div className="wizard-step-container" style={{ display: "flex", flexDirection: "column", gap: "28px", flex: 1 }}>
                  <h3 style={{ fontSize: "1.15rem", color: "#ffffff", fontWeight: 700, margin: 0, fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    How should we address you?
                  </h3>
                  <div className="contact-input-wrapper">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="contact-input-field"
                      placeholder="John Doe"
                      autoFocus
                    />
                  </div>

                  <div className="contact-input-wrapper">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="contact-input-field"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div style={{ display: "flex", gap: "16px", marginTop: "auto", paddingTop: "20px" }}>
                    <button
                      onClick={() => setStep(1)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        padding: "12px 24px",
                        borderRadius: "28px",
                        color: "#cbd5e1",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono), monospace",
                        cursor: "pointer",
                        transition: "all 0.3s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent)"}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
                    >
                      <ArrowLeft size={14} /> Back
                    </button>

                    <button
                      disabled={!canProceedToStep3}
                      onClick={() => setStep(3)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        background: canProceedToStep3 ? "linear-gradient(135deg, var(--accent) 0%, #d63a12 100%)" : "rgba(255,255,255,0.02)",
                        border: "none",
                        padding: "12px 28px",
                        borderRadius: "28px",
                        color: canProceedToStep3 ? "#ffffff" : "#64748b",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono), monospace",
                        cursor: canProceedToStep3 ? "pointer" : "not-allowed",
                        boxShadow: canProceedToStep3 ? "0 4px 15px rgba(255,92,43,0.3)" : "none",
                        flex: 1,
                        transition: "all 0.3s"
                      }}
                    >
                      Next Step <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* Wizard Step 3: Project Vision Message & Submit */}
              {step === 3 && (
                <form onSubmit={handleFormSubmit} className="wizard-step-container" style={{ display: "flex", flexDirection: "column", gap: "28px", flex: 1 }}>
                  <h3 style={{ fontSize: "1.15rem", color: "#ffffff", fontWeight: 700, margin: 0, fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    Share your vision with our developers:
                  </h3>
                  <div className="contact-input-wrapper">
                    <label>Project Brief details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="contact-input-field"
                      style={{ resize: "none" }}
                      placeholder="Describe your timeline, goals, core specifications, and requirements..."
                      autoFocus
                    />
                  </div>

                  <div style={{ display: "flex", gap: "16px", marginTop: "auto", paddingTop: "20px" }}>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        padding: "12px 24px",
                        borderRadius: "28px",
                        color: "#cbd5e1",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono), monospace",
                        cursor: "pointer",
                        transition: "all 0.3s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent)"}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
                    >
                      <ArrowLeft size={14} /> Back
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting || formData.message.trim() === ""}
                      className="btn-premium btn-pill-premium"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        background: "linear-gradient(135deg, var(--accent) 0%, #d63a12 100%)",
                        border: "none",
                        color: "#ffffff",
                        cursor: formData.message.trim() === "" ? "not-allowed" : "pointer",
                        boxShadow: "0 4px 20px rgba(255, 92, 43, 0.38)",
                        flex: 1,
                        transition: "all 0.3s",
                      }}
                      data-hover="true"
                    >
                      {isSubmitting ? "Initializing Transmission..." : "Initialize Project Brief"}{" "}
                      <Send size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Step 4: Holographic Digital Boarding Pass Ticket */
            <div className="project-ticket" style={{ padding: "36px 32px" }}>
              {/* Holographic glowing stamp indicator */}
              <div className="hologram-stamp" />

              {/* Ticket header */}
              <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "20px", marginBottom: "24px" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono), monospace", fontSize: "0.62rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>
                  Nexus Project System brief
                </span>
                <h3 style={{ margin: 0, fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.40rem", fontWeight: 800, color: "#ffffff" }}>
                  BOARDING PASS
                </h3>
              </div>

              {/* Pass contents metadata block */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <span style={{ display: "block", fontFamily: "var(--font-mono), monospace", fontSize: "0.6rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                      CLIENT NAME
                    </span>
                    <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", textTransform: "uppercase", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                      {formData.name || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span style={{ display: "block", fontFamily: "var(--font-mono), monospace", fontSize: "0.6rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                      SECTOR FOCUS
                    </span>
                    <span style={{ color: "#00e5ff", fontWeight: 700, fontSize: "0.95rem", textTransform: "uppercase", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                      {formData.project || "N/A"}
                    </span>
                  </div>
                </div>

                <div>
                  <span style={{ display: "block", fontFamily: "var(--font-mono), monospace", fontSize: "0.6rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                    PAYLOAD ROUTING (EMAIL)
                  </span>
                  <span style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.9rem", fontFamily: "var(--font-mono), monospace" }}>
                    {formData.email || "N/A"}
                  </span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <span style={{ display: "block", fontFamily: "var(--font-mono), monospace", fontSize: "0.6rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                      TICKET HASH ID
                    </span>
                    <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.92rem", fontFamily: "var(--font-mono), monospace" }}>
                      {ticketId}
                    </span>
                  </div>
                  <div>
                    <span style={{ display: "block", fontFamily: "var(--font-mono), monospace", fontSize: "0.6rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                      TIMESTAMP
                    </span>
                    <span style={{ color: "#ffffff", fontWeight: 500, fontSize: "0.75rem", fontFamily: "var(--font-mono), monospace" }}>
                      {timestamp}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dotted tear line divider */}
              <div className="ticket-divider" />

              {/* Bottom ticket details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ display: "inline-block", padding: "4px 10px", background: "rgba(37, 211, 102, 0.08)", border: "1px solid rgba(37, 211, 102, 0.2)", borderRadius: "99px", color: "#25d366", fontSize: "0.65rem", fontWeight: 700, fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                    ✓ active queue slot secured
                  </span>
                  <p style={{ color: "#8fa1b3", fontSize: "0.78rem", lineHeight: "1.45", margin: 0, maxWidth: "300px" }}>
                    NDA compliance registered. Our engineers will establish sync within 24 hours.
                  </p>
                </div>

                {/* Simulated Barcode */}
                <div className="ticket-barcode">
                  <div className="barcode-lines" />
                  <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.3em", color: "#64748b" }}>
                    *NEXUS-SHIPPING*
                  </span>
                </div>

                {/* Reset button to submit a new brief */}
                <button
                  onClick={() => {
                    setFormData({ name: "", email: "", project: "", message: "" });
                    setTicketId("");
                    setTimestamp("");
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    color: "#ffffff",
                    padding: "10px 24px",
                    borderRadius: "24px",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono), monospace",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    marginTop: "8px",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,92,43,0.08)";
                    e.currentTarget.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                  }}
                >
                  &lt; New Project Brief / Reset &gt;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
