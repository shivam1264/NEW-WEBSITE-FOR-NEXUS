"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, Check, MessageSquare, User, Pencil, ShieldCheck, Globe } from "lucide-react";

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

function GithubIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "fff30753-c3cf-4206-9b9d-17427151cc69",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `New Inquiry from ${formData.name} (${formData.service})`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        console.error("Submission failed", result);
        setIsSubmitting(false);
        alert("Submission failed. Please try again or email us directly.");
      }
    } catch (error) {
      console.error("Form error:", error);
      setIsSubmitting(false);
      alert("Network error. Please try again.");
    }
  };

  const servicesList = [
    "Web Development",
    "Mobile App",
    "AI & Automation",
    "UI/UX Design",
    "Startup MVP",
    "Other"
  ];

  return (
    <div
      style={{
        padding: "120px 0 60px",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        position: "relative"
      }}
      className="container"
    >
      {/* Ambient Background Glows */}
      <div style={{
        position: "absolute",
        top: "-10%",
        left: "-10%",
        width: "50%",
        height: "50%",
        background: "radial-gradient(circle, rgba(0, 255, 171, 0.07) 0%, transparent 60%)",
        filter: "blur(90px)",
        pointerEvents: "none",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-10%",
        right: "-10%",
        width: "50%",
        height: "50%",
        background: "radial-gradient(circle, rgba(0, 229, 255, 0.05) 0%, transparent 60%)",
        filter: "blur(90px)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Main 2-Column Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "48px",
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 2
        }}
      >
        {/* LEFT SIDE: Brand Copy, 2x2 Contact Grid & Socials */}
        <div>
          {/* Top Pill Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0, 255, 171, 0.08)",
            border: "1px solid rgba(0, 255, 171, 0.25)",
            padding: "6px 14px",
            borderRadius: "100px",
            marginBottom: "20px"
          }}>
            <Send size={13} color="#00ffab" />
            <span style={{
              color: "#00ffab",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.72rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em"
            }}>
              Contact Us
            </span>
          </div>

          {/* Main Title with Paper Plane illustration */}
          <div style={{ position: "relative", marginBottom: "16px" }}>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                color: "var(--foreground)",
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.03em"
              }}
            >
              Let&apos;s build <br />
              <span style={{ position: "relative", display: "inline-block" }}>
                something
                <span style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #00ffab 0%, transparent 100%)",
                  borderRadius: "2px"
                }} />
              </span> <br />
              <span style={{ color: "#00ffab" }}>amazing together.</span>
            </h1>

            {/* Dotted Paper Plane Illustration Path */}
            <svg
              width="90"
              height="60"
              viewBox="0 0 90 60"
              fill="none"
              style={{
                position: "absolute",
                top: "20%",
                right: "-20px",
                pointerEvents: "none",
                opacity: 0.9
              }}
            >
              <path
                d="M 5 50 Q 40 55, 60 25 T 80 10"
                stroke="#00ffab"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M75 5 L88 10 L80 20 L77 14 L75 5 Z"
                fill="#00ffab"
              />
            </svg>
          </div>

          {/* Subtitle Paragraph */}
          <p style={{
            color: "var(--muted)",
            fontSize: "0.95rem",
            lineHeight: "1.6",
            marginBottom: "32px",
            maxWidth: "460px"
          }}>
            Have a project in mind or need technical guidance? We&apos;d love to hear about it! Send us a message and we&apos;ll get back to you <strong style={{ color: "#00ffab", fontWeight: 600 }}>within 24 hours.</strong>
          </p>

          {/* 2x2 Contact Cards Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "14px",
            marginBottom: "32px"
          }}>
            {/* Card 1: Email */}
            <a
              href="mailto:shubhampawar1263@gmail.com"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00ffab";
                e.currentTarget.style.background = "rgba(0, 255, 171, 0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
              }}
            >
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "rgba(0, 255, 171, 0.12)",
                border: "1px solid rgba(0, 255, 171, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00ffab",
                flexShrink: 0
              }}>
                <Mail size={16} />
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.65rem", color: "var(--muted-2)", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>EMAIL US</span>
                <span style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--foreground)", wordBreak: "break-all" }}>shubhampawar1263@gmail.com</span>
                <span style={{ display: "block", fontSize: "0.7rem", color: "var(--muted)", marginTop: "2px" }}>We&apos;ll reply within 24h</span>
              </div>
            </a>

            {/* Card 2: Phone / WhatsApp */}
            <a
              href="https://wa.me/916263944626"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00e5ff";
                e.currentTarget.style.background = "rgba(0, 229, 255, 0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
              }}
            >
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "rgba(0, 229, 255, 0.12)",
                border: "1px solid rgba(0, 229, 255, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00e5ff",
                flexShrink: 0
              }}>
                <Phone size={16} />
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.65rem", color: "var(--muted-2)", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>CALL / WHATSAPP</span>
                <span style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--foreground)" }}>+91 62639 44626</span>
                <span style={{ display: "block", fontSize: "0.7rem", color: "var(--muted)", marginTop: "2px" }}>Mon - Sat, 10AM - 7PM</span>
              </div>
            </a>

            {/* Card 3: Location */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px"
              }}
            >
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "rgba(0, 255, 171, 0.12)",
                border: "1px solid rgba(0, 255, 171, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00ffab",
                flexShrink: 0
              }}>
                <MapPin size={16} />
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.65rem", color: "var(--muted-2)", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>LOCATION</span>
                <span style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--foreground)" }}>Bhopal, MP, India</span>
                <span style={{ display: "block", fontSize: "0.7rem", color: "var(--muted)", marginTop: "2px" }}>We love local meetups!</span>
              </div>
            </div>

            {/* Card 4: Response Time */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px"
              }}
            >
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "rgba(0, 255, 171, 0.12)",
                border: "1px solid rgba(0, 255, 171, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00ffab",
                flexShrink: 0
              }}>
                <Clock size={16} />
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.65rem", color: "var(--muted-2)", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>RESPONSE TIME</span>
                <span style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#00ffab" }}>Within 24 Hours</span>
                <span style={{ display: "block", fontSize: "0.7rem", color: "var(--muted)", marginTop: "2px" }}>Guaranteed response</span>
              </div>
            </div>
          </div>

          {/* Social Row */}
          <div>
            <span style={{ display: "block", fontSize: "0.68rem", color: "var(--muted-2)", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>CONNECT WITH US</span>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {[
                { icon: <LinkedinIcon size={16} />, link: "https://www.linkedin.com/in/shivam-kumar-maurya-000370251/" },
                { icon: <GithubIcon size={16} />, link: "https://github.com/shivam1264" },
                { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/mauryashivamkumar841/" },
                { icon: <Globe size={16} />, link: "https://nexus.ac.in" }
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
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--card-border)",
                    color: "var(--muted)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0, 255, 171, 0.1)";
                    e.currentTarget.style.borderColor = "#00ffab";
                    e.currentTarget.style.color = "#00ffab";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                    e.currentTarget.style.borderColor = "var(--card-border)";
                    e.currentTarget.style.color = "var(--muted)";
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Sleek Glassmorphic Form Card */}
        <div style={{
          background: "rgba(10, 14, 22, 0.85)",
          border: "1px solid var(--card-border)",
          borderRadius: "24px",
          padding: "32px 28px",
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 48px rgba(0, 0, 0, 0.5)",
          position: "relative"
        }}>
          {isSubmitted ? (
            /* Success Confirmation State */
            <div style={{ textAlign: "center", padding: "30px 10px" }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(0, 255, 171, 0.12)",
                border: "1px solid rgba(0, 255, 171, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: "#00ffab",
                boxShadow: "0 0 24px rgba(0, 255, 171, 0.25)"
              }}>
                <Check size={28} />
              </div>
              <h3 style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--foreground)",
                marginBottom: "8px"
              }}>
                Message Sent Successfully!
              </h3>
              <p style={{
                color: "var(--muted)",
                fontSize: "0.88rem",
                lineHeight: "1.5",
                maxWidth: "340px",
                margin: "0 auto 24px"
              }}>
                Thank you, <strong style={{ color: "var(--foreground)" }}>{formData.name}</strong>. Our team will review your message and reply within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", service: "Web Development", message: "" });
                }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "var(--foreground)",
                  padding: "10px 22px",
                  borderRadius: "10px",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-mono), monospace",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00ffab";
                  e.currentTarget.style.background = "rgba(0, 255, 171, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            /* Form Screen */
            <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {/* Form Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "4px" }}>
                <div style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(0, 255, 171, 0.12)",
                  border: "1px solid rgba(0, 255, 171, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00ffab",
                  flexShrink: 0
                }}>
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--foreground)",
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    Send us a message
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.82rem", margin: "2px 0 0" }}>
                    Fill in the details below to start your conversation.
                  </p>
                </div>
              </div>

              {/* YOUR NAME * */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--muted-2)", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  YOUR NAME <span style={{ color: "#00ffab" }}>*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Rahul Sharma"
                    style={{
                      width: "100%",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--card-border)",
                      borderRadius: "10px",
                      padding: "11px 40px 11px 14px",
                      color: "var(--foreground)",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "all 0.25s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#00ffab"}
                    onBlur={(e) => e.target.style.borderColor = "var(--card-border)"}
                  />
                  <User size={16} color="var(--muted-2)" style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                </div>
              </div>

              {/* EMAIL * & PHONE (OPTIONAL) (Grid) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px" }}>
                {/* EMAIL * */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--muted-2)", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    EMAIL <span style={{ color: "#00ffab" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="name@company.com"
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--card-border)",
                        borderRadius: "10px",
                        padding: "11px 36px 11px 14px",
                        color: "var(--foreground)",
                        fontSize: "0.88rem",
                        outline: "none",
                        transition: "all 0.25s ease"
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#00ffab"}
                      onBlur={(e) => e.target.style.borderColor = "var(--card-border)"}
                    />
                    <Mail size={15} color="var(--muted-2)" style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                  </div>
                </div>

                {/* PHONE (OPTIONAL) */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--muted-2)", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    PHONE <span style={{ color: "var(--muted-2)", fontWeight: 500 }}>(OPTIONAL)</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--card-border)",
                        borderRadius: "10px",
                        padding: "11px 36px 11px 14px",
                        color: "var(--foreground)",
                        fontSize: "0.88rem",
                        outline: "none",
                        transition: "all 0.25s ease"
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#00ffab"}
                      onBlur={(e) => e.target.style.borderColor = "var(--card-border)"}
                    />
                    <Phone size={15} color="var(--muted-2)" style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                  </div>
                </div>
              </div>

              {/* SERVICE NEEDED */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--muted-2)", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  SERVICE NEEDED
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {servicesList.map((svc, sIdx) => {
                    const isSelected = formData.service === svc;
                    return (
                      <button
                        type="button"
                        key={sIdx}
                        onClick={() => setFormData((prev) => ({ ...prev, service: svc }))}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          background: isSelected ? "rgba(0, 255, 171, 0.1)" : "rgba(255, 255, 255, 0.03)",
                          border: isSelected ? "1px solid #00ffab" : "1px solid var(--card-border)",
                          color: isSelected ? "#00ffab" : "var(--foreground)",
                          padding: "6px 12px",
                          borderRadius: "100px",
                          fontSize: "0.78rem",
                          fontFamily: "var(--font-space-grotesk), sans-serif",
                          fontWeight: isSelected ? 700 : 500,
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                      >
                        {svc}
                        {isSelected && <Check size={12} color="#00ffab" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* PROJECT DETAILS * */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--muted-2)", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  PROJECT DETAILS <span style={{ color: "#00ffab" }}>*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    placeholder="Describe your requirements, timeline, or key features..."
                    style={{
                      width: "100%",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--card-border)",
                      borderRadius: "10px",
                      padding: "11px 14px",
                      color: "var(--foreground)",
                      fontSize: "0.88rem",
                      lineHeight: "1.45",
                      outline: "none",
                      resize: "none",
                      transition: "all 0.25s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#00ffab"}
                    onBlur={(e) => e.target.style.borderColor = "var(--card-border)"}
                  />
                  <Pencil size={14} color="var(--muted-2)" style={{ position: "absolute", right: "12px", bottom: "12px", pointerEvents: "none" }} />
                </div>
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "linear-gradient(90deg, #70f500 0%, #00e5a3 50%, #00c2ff 100%)",
                  color: "#020907",
                  border: "none",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  fontSize: "0.92rem",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 800,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                  transition: "all 0.25s ease",
                  marginTop: "4px"
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.currentTarget.style.transform = "none";
                }}
              >
                <Send size={16} />
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </button>

              {/* Footer Privacy Note */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginTop: "2px"
              }}>
                <ShieldCheck size={14} color="#00ffab" />
                <span style={{
                  fontSize: "0.72rem",
                  color: "var(--muted-2)",
                  fontFamily: "var(--font-mono), monospace"
                }}>
                  <strong style={{ color: "#00ffab", fontWeight: 600 }}>100% Privacy.</strong> No spam ever.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
