"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      style={{ 
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "24px 0",
      }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          color: "var(--foreground)",
          fontSize: "1.1rem",
          fontWeight: 600,
          textAlign: "left",
          cursor: "pointer",
          padding: 0,
          fontFamily: "var(--font-space-grotesk), sans-serif",
        }}
      >
        <span style={{ paddingRight: "20px", transition: "color 0.3s" }} className={isOpen ? "faq-active-text" : ""}>
          {question}
        </span>
        <span style={{ 
          color: isOpen ? "var(--accent)" : "var(--muted)", 
          transition: "all 0.3s ease",
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)"
        }}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div 
        style={{
          maxHeight: isOpen ? "200px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p style={{ 
          color: "var(--muted)", 
          fontSize: "0.95rem", 
          lineHeight: "1.6", 
          margin: 0,
          paddingTop: "16px",
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="section-padding" style={{ position: "relative", zIndex: 2, borderTop: "1px solid var(--card-border)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Common Questions
          </span>
          <h2
            className="section-header-title font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--foreground)",
            }}
          >
            Before You <span className="font-serif-i" style={{ color: "var(--accent)" }}>Reach Out</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {[
            {
              q: "How long does a typical project take?",
              a: "A basic landing page or MVP website is typically ready in 7-14 days. A full product with AI integrations or mobile apps takes 4-8 weeks depending on scope. We always define a clear timeline upfront in the project brief."
            },
            {
              q: "Do you require full payment upfront?",
              a: "No. We work on a 50% upfront / 50% on delivery model for most projects. For larger projects, we split into 3 milestones. We never ask for 100% upfront."
            },
            {
              q: "Can you work with clients outside Bhopal / India?",
              a: "Absolutely. We have worked with clients remotely across India and internationally. All communication happens via WhatsApp, Google Meet, and our project dashboard."
            },
            {
              q: "Do you provide ongoing maintenance after launch?",
              a: "Yes. All projects include 30 days of free post-launch support. Extended maintenance plans are available starting from ₹3,000/month."
            },
            {
              q: "What if I have only a rough idea and no technical knowledge?",
              a: "That's perfectly fine — most of our clients come with ideas, not specs. We handle the full discovery, planning, design, and development process. You just need to communicate your business goals."
            },
            {
              q: "Do you sign NDAs and contracts?",
              a: "Yes. We sign NDAs and provide a simple project agreement before any work begins. Your idea and codebase remain fully protected and owned by you after delivery."
            },
          ].map((faq, idx) => (
            <FaqItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
