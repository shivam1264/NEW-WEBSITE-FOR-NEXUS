"use client";

import { useState } from "react";
import { Send, Terminal as TerminalIcon, Phone, Mail, MapPin } from "lucide-react";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);
    setConsoleLogs([`nexus.submitBrief({`]);

    // Simulate console lines output
    setTimeout(() => {
      setConsoleLogs((prev) => [
        ...prev,
        `  client: "${formData.name}",`,
        `  email: "${formData.email}",`,
        `  focus: "${formData.project || "none"}"`,
        `});`,
      ]);
    }, 400);

    setTimeout(() => {
      setConsoleLogs((prev) => [...prev, `// Transmitting payload to Nexus nodes...`]);
    }, 1000);

    setTimeout(() => {
      setConsoleLogs((prev) => [...prev, `Payload received. Status: 200 OK`]);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", project: "", message: "" });
    }, 1800);
  };

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
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Left Side Copy */}
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
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            Tell us about your startup concept or local business system requirements. Book a call to align on MVP timeline options and exact deliverables.
          </p>

          {/* Direct Channels Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <a
              href="https://wa.me/919999999999?text=Hello%20Team%20Nexus,%20I%20want%20to%20build%20a%20digital%20product."
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                borderRadius: "10px",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
              }}
              className="pod-signal"
              data-hover="true"
            >
              <Phone size={16} style={{ color: "var(--accent)" }} />
              <div>
                <span style={{ display: "block", color: "#64748b", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>WhatsApp Us</span>
                <span>+91 9999999999</span>
              </div>
            </a>

            <a
              href="mailto:build@teamnexus.agency?subject=Project%20Inquiry"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                borderRadius: "10px",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
              }}
              className="pod-direction"
              data-hover="true"
            >
              <Mail size={16} style={{ color: "var(--accent)" }} />
              <div>
                <span style={{ display: "block", color: "#64748b", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Us</span>
                <span>build@teamnexus.agency</span>
              </div>
            </a>

            <a
              href="https://linkedin.com/company/teamnexus"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                borderRadius: "10px",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
              }}
              className="pod-product"
              data-hover="true"
            >
              <LinkedinIcon size={16} style={{ color: "var(--accent)" }} />
              <div>
                <span style={{ display: "block", color: "#64748b", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>LinkedIn</span>
                <span>/company/teamnexus</span>
              </div>
            </a>

            <a
              href="https://instagram.com/teamnexus"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                borderRadius: "10px",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
              }}
              className="pod-momentum"
              data-hover="true"
            >
              <InstagramIcon size={16} style={{ color: "var(--accent)" }} />
              <div>
                <span style={{ display: "block", color: "#64748b", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Instagram</span>
                <span>@teamnexus</span>
              </div>
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "10px",
              color: "#ffffff",
              fontSize: "0.88rem",
              fontWeight: 600,
              marginBottom: "32px",
            }}
          >
            <MapPin size={16} style={{ color: "var(--accent)" }} />
            <div>
              <span style={{ display: "block", color: "#64748b", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Our Hub Location</span>
              <span>Indore, Madhya Pradesh, India</span>
            </div>
          </div>

          {/* Interactive Debug Console */}
          <div
            style={{
              background: "#060608",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              padding: "20px",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.82rem",
              color: "#8a9099",
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(255, 255, 255, 0.04)", paddingBottom: "10px", marginBottom: "8px" }}>
              <TerminalIcon size={14} style={{ color: "var(--accent)" }} />
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#6272a4" }}>nexus-console.sh</span>
            </div>
            {consoleLogs.length === 0 ? (
              <div style={{ color: "#4b5263", fontStyle: "italic" }}>Console idle. Submit form to activate logs.</div>
            ) : (
              consoleLogs.map((line, idx) => (
                <div key={idx} style={{ color: line.includes("Status:") ? "#98c379" : line.startsWith("//") ? "#5c6370" : "var(--accent)" }}>
                  {line}
                </div>
              ))
            )}
            {isSubmitting && <span style={{ animation: "blink 0.8s step-end infinite" }}>_</span>}
            {isSubmitted && (
              <div style={{ color: "#ffffff", marginTop: "12px" }}>
                Success! Your message was processed. We'll be in touch soon.
              </div>
            )}
          </div>
        </div>

        {/* Right Side Form */}
        <div
          style={{
            background: "rgba(7, 7, 22, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            borderRadius: "20px",
            padding: "48px",
            boxShadow: "0 24px 50px rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(12px)",
          }}
        >
          <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#94a3b8",
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "none",
                  borderBottom: "1.5px solid rgba(255, 255, 255, 0.08)",
                  padding: "12px 0",
                  color: "#ffffff",
                  fontSize: "0.96rem",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
                placeholder="John Doe"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#94a3b8",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "none",
                  borderBottom: "1.5px solid rgba(255, 255, 255, 0.08)",
                  padding: "12px 0",
                  color: "#ffffff",
                  fontSize: "0.96rem",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
                placeholder="john@example.com"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#94a3b8",
                }}
              >
                Project Focus
              </label>
              <input
                type="text"
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "none",
                  borderBottom: "1.5px solid rgba(255, 255, 255, 0.08)",
                  padding: "12px 0",
                  color: "#ffffff",
                  fontSize: "0.96rem",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
                placeholder="AI launch, UI design, web development, events..."
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#94a3b8",
                }}
              >
                Message details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "none",
                  borderBottom: "1.5px solid rgba(255, 255, 255, 0.08)",
                  padding: "12px 0",
                  color: "#ffffff",
                  fontSize: "0.96rem",
                  outline: "none",
                  resize: "none",
                  transition: "border-color 0.3s",
                }}
                placeholder="Share your timeline, goals, and details..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="btn-premium btn-pill-premium"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                background: "linear-gradient(135deg, var(--accent) 0%, #d63a12 100%)",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(255, 92, 43, 0.38)",
                transition: "all 0.3s",
                marginTop: "12px",
              }}
              data-hover="true"
            >
              {isSubmitted ? "Project Brief Sent" : isSubmitting ? "Processing..." : "Send Project Brief"}{" "}
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
      <style>{`
        input:focus, textarea:focus {
          border-bottom-color: var(--accent) !important;
        }
      `}</style>
    </div>
  );
}
