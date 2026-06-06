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

  const greenAccent = "#00e676";
  const darkSurface = "#0d1116";
  const borderSoft = "rgba(255,255,255,0.06)";

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
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left Side Copy & HUD */}
        <div className="reveal-text">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "20px", height: "2px", background: greenAccent }} />
            <span className="eyebrow-mono" style={{ color: greenAccent, letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: 700 }}>
              CONTACT
            </span>
          </div>
          <h1
            className="hero-title font-display"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 4.4rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "24px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            Ready to Build Your <br />
            Next <span style={{ color: greenAccent }}>Digital</span> <br />
            <span style={{ 
              background: "linear-gradient(90deg, #6ae372 0%, #d89648 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block"
            }}>Product?</span>
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.15rem",
              lineHeight: "1.7",
              marginBottom: "48px",
              maxWidth: "480px",
              fontFamily: "var(--font-space-grotesk), sans-serif",
            }}
          >
            Tell us about your startup concept or local business system requirements. Book a call to align on MVP timeline options and exact deliverables.
          </p>

          {/* Premium Glassmorphic System Telemetry Card */}
          <div style={{
            position: "relative",
            background: "rgba(10, 10, 15, 0.4)",
            border: `1px solid rgba(0, 229, 255, 0.2)`,
            borderRadius: "24px",
            padding: "32px",
            marginBottom: "48px",
            maxWidth: "480px",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 0 60px rgba(0, 229, 255, 0.05)",
            overflow: "hidden"
          }}>
            {/* Glowing Background Orb */}
            <div style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "radial-gradient(circle at top right, rgba(0, 229, 255, 0.1) 0%, transparent 50%)",
              pointerEvents: "none"
            }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid rgba(255,255,255,0.1)`, paddingBottom: "20px", marginBottom: "20px", position: "relative", zIndex: 1 }}>
              <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.8rem", color: "#00E5FF", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
                System Telemetry
              </span>
              <span style={{ color: "#00FFAB", display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono), monospace", fontSize: "0.75rem", fontWeight: 700, background: "rgba(0, 255, 171, 0.1)", padding: "4px 12px", borderRadius: "100px", border: "1px solid rgba(0, 255, 171, 0.2)" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00FFAB", boxShadow: `0 0 10px #00FFAB`, animation: "pulse 2s infinite" }} />
                ONLINE
              </span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", fontFamily: "var(--font-space-grotesk), sans-serif" }}>Response SLA</span>
                <span style={{ color: "#00FFAB", fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-mono), monospace" }}>&lt; 24 Hours</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", fontFamily: "var(--font-space-grotesk), sans-serif" }}>Sprint Load</span>
                <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-mono), monospace" }}>2 Slots Available</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", fontFamily: "var(--font-space-grotesk), sans-serif" }}>NDAs</span>
                <span style={{ color: "#00E5FF", fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-mono), monospace" }}>Instant Signing</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", fontFamily: "var(--font-space-grotesk), sans-serif" }}>Deployment Core</span>
                <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-mono), monospace" }}>Bhopal, IN</span>
              </div>
            </div>
          </div>

          {/* Social Icons Redesign */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: <Phone size={18} />, link: "https://wa.me/919999999999?text=Hello", color: greenAccent },
              { icon: <Mail size={18} />, link: "mailto:build@nexus.ac.in", color: greenAccent },
              { icon: <LinkedinIcon size={18} />, link: "https://www.linkedin.com/in/shivam-kumar-maurya-000370251/", color: "#cbd5e1" },
              { icon: <InstagramIcon size={18} />, link: "https://www.instagram.com/mauryashivamkumar841/", color: "#cbd5e1" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: `1px solid ${borderSoft}`,
                  color: item.color,
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                  e.currentTarget.style.borderColor = borderSoft;
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Wizard Cards */}
        <div>
          {step <= 3 ? (
            <div style={{ 
              background: darkSurface, 
              border: `1px solid ${borderSoft}`, 
              borderRadius: "24px", 
              padding: "40px",
              minHeight: "560px", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}>
              {/* Step indicator header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${borderSoft}`, paddingBottom: "24px", marginBottom: "32px" }}>
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.85rem", color: greenAccent, fontWeight: 700, letterSpacing: "0.05em" }}>
                  STEP 0{step} / 03
                </span>
                <span style={{ color: "#3b82f6", fontSize: "0.85rem", fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 500 }}>
                  {step === 1 ? "Choose service focus" : step === 2 ? "Provide identity links" : "Submit vision details"}
                </span>
              </div>

              {/* Wizard Step 1: Services Choices */}
              {step === 1 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "24px", flex: 1 }}>
                  <h3 style={{ fontSize: "1.25rem", color: "#ffffff", fontWeight: 700, margin: "0 0 8px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    Select your project category:
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    {[
                      { id: "AI & Automation", title: "AI Solutions", desc: "LLMs, Automations, Agents", icon: <Cpu size={22} style={{ color: greenAccent }} /> },
                      { id: "Web Platform", title: "Web Dev", desc: "Next.js core structures", icon: <Layers size={22} style={{ color: "#00e5ff" }} /> },
                      { id: "Mobile App", title: "Mobile Client", desc: "Flutter mobile platforms", icon: <Smartphone size={22} style={{ color: "#ffd600" }} /> },
                      { id: "UI/UX & Styling", title: "UI/UX & Design", desc: "Modern styling interfaces", icon: <Sparkles size={22} style={{ color: "#ff007f" }} /> }
                    ].map((svc) => (
                      <div
                        key={svc.id}
                        onClick={() => selectService(svc.id)}
                        style={{
                          background: "#0b0f12",
                          border: `1px solid ${borderSoft}`,
                          borderRadius: "16px",
                          padding: "24px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = borderSoft;
                          e.currentTarget.style.transform = "none";
                        }}
                      >
                        <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {svc.icon}
                        </div>
                        <div>
                          <h3 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 700, marginBottom: "4px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>{svc.title}</h3>
                          <p style={{ color: "#64748b", fontSize: "0.8rem", margin: 0 }}>{svc.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wizard Step 2: Name & Email */}
              {step === 2 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "28px", flex: 1 }}>
                  <h3 style={{ fontSize: "1.25rem", color: "#ffffff", fontWeight: 700, margin: 0, fontFamily: "var(--font-space-grotesk), sans-serif" }}>
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
                        border: `1px solid ${borderSoft}`,
                        padding: "14px 28px",
                        borderRadius: "28px",
                        color: "#cbd5e1",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono), monospace",
                        cursor: "pointer",
                        transition: "all 0.3s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = greenAccent}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = borderSoft}
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
                        background: canProceedToStep3 ? greenAccent : "rgba(255,255,255,0.02)",
                        border: "none",
                        padding: "14px 28px",
                        borderRadius: "28px",
                        color: canProceedToStep3 ? "#000000" : "#64748b",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono), monospace",
                        fontWeight: canProceedToStep3 ? 700 : 400,
                        cursor: canProceedToStep3 ? "pointer" : "not-allowed",
                        boxShadow: canProceedToStep3 ? `0 4px 15px rgba(0,230,118,0.3)` : "none",
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
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px", flex: 1 }}>
                  <h3 style={{ fontSize: "1.25rem", color: "#ffffff", fontWeight: 700, margin: 0, fontFamily: "var(--font-space-grotesk), sans-serif" }}>
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
                        border: `1px solid ${borderSoft}`,
                        padding: "14px 28px",
                        borderRadius: "28px",
                        color: "#cbd5e1",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono), monospace",
                        cursor: "pointer",
                        transition: "all 0.3s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = greenAccent}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = borderSoft}
                    >
                      <ArrowLeft size={14} /> Back
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting || formData.message.trim() === ""}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        background: (isSubmitting || formData.message.trim() === "") ? "rgba(255,255,255,0.02)" : greenAccent,
                        border: "none",
                        color: (isSubmitting || formData.message.trim() === "") ? "#64748b" : "#000000",
                        padding: "14px 28px",
                        borderRadius: "28px",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono), monospace",
                        cursor: formData.message.trim() === "" ? "not-allowed" : "pointer",
                        boxShadow: (isSubmitting || formData.message.trim() === "") ? "none" : `0 4px 20px rgba(0,230,118,0.3)`,
                        flex: 1,
                        transition: "all 0.3s",
                      }}
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
            <div className="project-ticket" style={{ padding: "36px 32px", background: darkSurface, border: `1px solid ${greenAccent}`, borderRadius: "24px" }}>
              {/* Holographic glowing stamp indicator */}
              <div className="hologram-stamp" style={{ background: `linear-gradient(135deg, transparent 0%, rgba(0,230,118,0.15) 100%)` }} />

              {/* Ticket header */}
              <div style={{ borderBottom: `1px solid ${borderSoft}`, paddingBottom: "20px", marginBottom: "24px" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono), monospace", fontSize: "0.62rem", color: greenAccent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>
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
                    <span style={{ color: greenAccent, fontWeight: 700, fontSize: "0.92rem", fontFamily: "var(--font-mono), monospace" }}>
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

              {/* Bottom ticket details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", marginTop: "32px", paddingTop: "24px", borderTop: `1px dashed rgba(255,255,255,0.15)` }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ display: "inline-block", padding: "4px 10px", background: "rgba(37, 211, 102, 0.08)", border: "1px solid rgba(37, 211, 102, 0.2)", borderRadius: "99px", color: "#25d366", fontSize: "0.65rem", fontWeight: 700, fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                    ✓ active queue slot secured
                  </span>
                  <p style={{ color: "#8fa1b3", fontSize: "0.78rem", lineHeight: "1.45", margin: 0, maxWidth: "300px" }}>
                    NDA compliance registered. Our engineers will establish sync within 24 hours.
                  </p>
                </div>

                {/* Simulated Barcode */}
                <div className="ticket-barcode" style={{ width: "100%", height: "40px", background: `repeating-linear-gradient(90deg, #64748b, #64748b 2px, transparent 2px, transparent 6px, #64748b 6px, #64748b 8px, transparent 8px, transparent 12px)`, opacity: 0.5, marginBottom: "8px" }} />
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.3em", color: "#64748b" }}>
                  *NEXUS-SHIPPING*
                </span>

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
                    border: `1px solid ${borderSoft}`,
                    color: "#ffffff",
                    padding: "10px 24px",
                    borderRadius: "24px",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono), monospace",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    marginTop: "16px",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0, 230, 118, 0.08)";
                    e.currentTarget.style.borderColor = greenAccent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                    e.currentTarget.style.borderColor = borderSoft;
                  }}
                >
                  &lt; New Project Brief / Reset &gt;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
