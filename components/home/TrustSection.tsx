"use client";

import { useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Trophy, Sparkles, Cpu, Layers } from "lucide-react";

export default function TrustSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleTiltMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 25; 
    const rotateY = (x - centerX) / 25; 
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    const glow = card.querySelector(".metric-card-glow") as HTMLDivElement | null;
    if (glow) {
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = "1";
    }
  };

  const handleTiltMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    
    const glow = card.querySelector(".metric-card-glow") as HTMLDivElement | null;
    if (glow) {
      glow.style.opacity = "0";
    }
  };

  const metrics = [
    { 
      id: 1,
      icon: <Trophy size={28} strokeWidth={1.5} />, 
      title: "Hackathons",
      value: <><AnimatedCounter value={2} />x National Wins</>, 
      desc: "Top awards for systems architecture & AI inference.",
      colorRGB: "0, 229, 255" // Cyan
    },
    { 
      id: 2,
      icon: <Sparkles size={28} strokeWidth={1.5} />, 
      title: "Deployments",
      value: "Production-Grade", 
      desc: "Multiple real-world projects scaling active users.",
      colorRGB: "255, 0, 127" // Pink
    },
    { 
      id: 3,
      icon: <Cpu size={28} strokeWidth={1.5} />, 
      title: "Engineering",
      value: "Full Stack + AI Pods", 
      desc: "Specialists in robust software & infrastructure.",
      colorRGB: "255, 214, 0" // Yellow
    },
    { 
      id: 4,
      icon: <Layers size={28} strokeWidth={1.5} />, 
      title: "Ecosystems",
      value: "Web + Mobile + AI", 
      desc: "Cross-platform solutions built for business gravity.",
      colorRGB: "0, 230, 118" // Green
    },
  ];

  return (
    <section
      style={{
        padding: "100px 0",
        position: "relative",
        zIndex: 2,
        background: "#020404", // Extremely dark contrast
        borderTop: "1px solid rgba(255, 255, 255, 0.03)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
        overflow: "hidden"
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .trust-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1100px) {
          .trust-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .trust-metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
      {/* Background Ambient Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "80%",
        height: "50%",
        background: "radial-gradient(ellipse at center, rgba(0, 229, 255, 0.05) 0%, transparent 60%)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "16px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            Built for <span className="font-serif-i" style={{ color: "var(--accent)" }}>Scale</span> & Impact
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}>
            The numbers and engineering standards that define the Nexus ecosystem.
          </p>
        </div>

        <div className="trust-metrics-grid">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="glass-card premium-tilt-card"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={(e) => {
                setHoveredCard(null);
                handleTiltMouseLeave(e);
              }}
              onMouseMove={handleTiltMouseMove}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "32px",
                borderRadius: "24px",
                background: hoveredCard === idx ? "rgba(255, 255, 255, 0.02)" : "rgba(10, 15, 20, 0.6)",
                border: "1px solid",
                borderColor: hoveredCard === idx ? `rgba(${item.colorRGB}, 0.3)` : "rgba(255, 255, 255, 0.05)",
                boxShadow: hoveredCard === idx ? `0 20px 40px rgba(${item.colorRGB}, 0.1)` : "0 10px 30px rgba(0,0,0,0.5)",
                backdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              }}
            >
              {/* Dynamic Mouse Glow Tracker */}
              <div 
                className="metric-card-glow" 
                style={{ 
                  position: "absolute",
                  width: "300px",
                  height: "300px",
                  background: `radial-gradient(circle, rgba(${item.colorRGB}, 0.15) 0%, transparent 70%)`,
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  zIndex: 0
                }} 
              />

              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                {/* Top Header Row with Icon */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                  <span style={{ 
                    color: `rgb(${item.colorRGB})`, 
                    fontFamily: "var(--font-mono), monospace", 
                    fontSize: "0.8rem", 
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                  }}>
                    {item.title}
                  </span>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: `rgba(${item.colorRGB}, 0.1)`,
                    border: `1px solid rgba(${item.colorRGB}, 0.2)`,
                    color: `rgb(${item.colorRGB})`,
                    transition: "transform 0.4s ease",
                    transform: hoveredCard === idx ? "scale(1.1) rotate(5deg)" : "scale(1)",
                  }}>
                    {item.icon}
                  </div>
                </div>

                {/* Main Metric Value */}
                <h3
                  style={{
                    color: "var(--foreground)",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.7rem",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    marginBottom: "12px",
                    minHeight: "75px",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  {item.value}
                </h3>

                {/* Description */}
                <div style={{ flexGrow: 1 }} />
                <p style={{ 
                  color: "var(--muted)", 
                  fontSize: "0.9rem", 
                  margin: 0, 
                  lineHeight: "1.5",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  paddingTop: "16px",
                  marginTop: "8px"
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
