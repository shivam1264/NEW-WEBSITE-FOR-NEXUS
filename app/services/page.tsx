"use client";

import { useState } from "react";
import { Brain, Globe, Smartphone, Zap, Layout, Settings, ChevronDown, ChevronUp } from "lucide-react";

export default function Services() {
  const capabilities = [
    {
      title: "AI Solutions",
      desc: "Custom LLM chatbots, AI assistants, resume screeners, and cognitive agent workflow automation built to streamline customer support and lead operations.",
      icon: <Brain size={20} />,
    },
    {
      title: "Web Development",
      desc: "Highly polished business websites, admin panels, and SaaS dashboard products. Designed using SSR architectures for instant loading.",
      icon: <Globe size={20} />,
    },
    {
      title: "Mobile App Development",
      desc: "Cross-platform mobile applications utilizing Flutter and React Native. Custom layouts, payment processing, and fluid user experiences.",
      icon: <Smartphone size={20} />,
    },
    {
      title: "Startup MVP Development",
      desc: "Rapid cycles launching functional Minimum Viable Products to production in weeks to test ideas and raise venture funding quickly.",
      icon: <Zap size={20} />,
    },
    {
      title: "UI/UX Design",
      desc: "Clean wireframes, functional prototypes, and modern startup aesthetics utilizing tailored dark-theme styles and responsive layouts.",
      icon: <Layout size={20} />,
    },
    {
      title: "Automation Systems",
      desc: "Integrating API endpoints, scrapers, automated email/SMS alerts, and scheduling software to run business operations 24/7.",
      icon: <Settings size={20} />,
    },
  ];

  const faqs = [
    {
      q: "What does Team Nexus build?",
      a: "We build custom AI solutions (chatbots, automation workflow), premium corporate websites, SaaS admin dashboards, and cross-platform mobile apps for startups and local businesses.",
    },
    {
      q: "How fast can you launch an MVP?",
      a: "Depending on complexity, our standard Startup MVP cycle takes 3 to 6 weeks from initial requirement discussion to live production deployment.",
    },
    {
      q: "Do you support custom payment and database integrations?",
      a: "Yes. We integrate secure Stripe/Razorpay checkouts, scheduling tools (Calendly/custom), scalable SQL/NoSQL databases, and custom API layers.",
    },
    {
      q: "What post-launch support do you provide?",
      a: "We offer continuous maintenance plans, active server uptime SLA monitoring, dependency updates, and bug fixes to ensure your software grows with your traffic.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div
      style={{
        padding: "140px 0 80px",
        minHeight: "100vh",
        fontFamily: "var(--font-manrope), sans-serif",
      }}
    >
      {/* 1. CAPABILITIES HEADER */}
      <div
        className="container reveal-text"
        style={{
          margin: "0 auto 80px",
          maxWidth: "600px",
        }}
      >
        <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
          <span className="pulsing-dot pulsing-dot-coral" />
          Capabilities
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
          Premium <span className="font-serif-i" style={{ color: "var(--accent)" }}>Systems</span>
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "1.02rem", lineHeight: "1.65" }}>
          Every engagement is built around practical outcomes: sharper positioning, better collaboration, stronger launch motion, and a community engine that compounds.
        </p>
      </div>

      {/* 2. CAPABILITIES GRID */}
      <div
        className="container"
        style={{
          margin: "0 auto 120px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {capabilities.map((cap, idx) => {
          const colors = [
            { bg: "rgba(255, 92, 43, 0.06)", border: "rgba(255, 92, 43, 0.2)", color: "#ff5c2b" },
            { bg: "rgba(0, 229, 255, 0.06)", border: "rgba(0, 229, 255, 0.2)", color: "#00e5ff" },
            { bg: "rgba(0, 230, 118, 0.06)", border: "rgba(0, 230, 118, 0.2)", color: "#00e676" },
            { bg: "rgba(255, 0, 127, 0.06)", border: "rgba(255, 0, 127, 0.2)", color: "#ff007f" },
            { bg: "rgba(213, 0, 249, 0.06)", border: "rgba(213, 0, 249, 0.2)", color: "#d500f9" },
            { bg: "rgba(255, 214, 0, 0.06)", border: "rgba(255, 214, 0, 0.2)", color: "#ffd600" },
          ];
          const colorSet = colors[idx % colors.length];
          const podClasses = ["pod-direction", "pod-product", "pod-signal", "pod-momentum", "pod-momentum", "pod-direction"];
          const podClass = podClasses[idx % podClasses.length];
          return (
            <div
              key={idx}
              className={podClass}
              style={{
                background: "rgba(7, 7, 22, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
                borderRadius: "18px",
                padding: "clamp(20px, 4vw, 40px)",
              }}
              data-hover="true"
            >
              <div
                className="svc-icon"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: colorSet.bg,
                  border: `1px solid ${colorSet.border}`,
                  color: colorSet.color,
                  marginBottom: "24px",
                }}
              >
                {cap.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "14px",
                }}
              >
                {cap.title}
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: "1.6" }}>
                {cap.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* 3. FAQ ACCORDION SECTION */}
      <section
        className="container"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          paddingTop: "100px",
          maxWidth: "900px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "10px" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            FAQs
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: "2.4rem",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Common <span className="font-serif-i" style={{ color: "var(--accent)" }}>Questions</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(7, 7, 22, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
                borderRadius: "14px",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              <button
                onClick={() => toggleFaq(idx)}
                style={{
                  width: "100%",
                  padding: "24px",
                  background: "none",
                  border: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#ffffff",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  textAlign: "left",
                  outline: "none",
                }}
                data-hover="true"
              >
                <span style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 500 }}>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp size={18} style={{ color: "var(--accent)" }} />
                ) : (
                  <ChevronDown size={18} style={{ color: "#94a3b8" }} />
                )}
              </button>

              <div
                style={{
                  maxHeight: openFaq === idx ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div
                  style={{
                    padding: "0 24px 24px",
                    color: "#94a3b8",
                    fontSize: "0.95rem",
                    lineHeight: "1.65",
                  }}
                >
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
