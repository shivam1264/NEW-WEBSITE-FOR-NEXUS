"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProcessSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Stripe/Linear-grade 3D parallax mouse tilt effect
  const handleTiltMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 25; 
    const rotateY = (x - centerX) / 25; 
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    const glow = card.querySelector(".bento-card-glow") as HTMLDivElement | null;
    if (glow) {
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = "1";
    }
  };

  const handleTiltMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;
    
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    
    const glow = card.querySelector(".bento-card-glow") as HTMLDivElement | null;
    if (glow) {
      glow.style.opacity = "0";
    }
  };

  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate Section Header
      gsap.fromTo(".process-header-wrapper > *",
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".process-header-wrapper",
            start: "top 85%",
          }
        }
      );

      // Animate Main Video Hero Card
      gsap.fromTo(".process-hero-card",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "expo.out",
          scrollTrigger: {
            trigger: ".works-bento-layout",
            start: "top 80%",
          }
        }
      );

      // Animate 6 Step Cards
      gsap.fromTo(".process-step-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".works-bento-layout",
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    { 
      num: "01", 
      title: "Requirement Discussion", 
      desc: "Align on target objectives, mock features, and critical project deadlines.",
      colorRGB: "255, 92, 43",
      spanClass: "span-4"
    },
    { 
      num: "02", 
      title: "UI/UX Planning", 
      desc: "Map navigation channels, key screens, wireframes, and verify styling options.",
      colorRGB: "0, 229, 255",
      spanClass: "span-4"
    },
    { 
      num: "03", 
      title: "Development Phase", 
      desc: "Engineers code mobile routes, AI configurations, and database integrations.",
      colorRGB: "0, 230, 118",
      spanClass: "span-3"
    },
    { 
      num: "04", 
      title: "System Testing", 
      desc: "Exhaustive QA routines checking system drift, query load metrics, and UI bugs.",
      colorRGB: "255, 0, 127",
      spanClass: "span-3"
    },
    { 
      num: "05", 
      title: "Production Deployment", 
      desc: "Push application servers live on global Edge architectures and configure domain assets.",
      colorRGB: "213, 0, 249",
      spanClass: "span-3"
    },
    { 
      num: "06", 
      title: "Maintenance & Support", 
      desc: "Monitor live uptime SLA thresholds and patch dependency variables regularly.",
      colorRGB: "255, 214, 0",
      spanClass: "span-3"
    }
  ];

  return (
    <section
      ref={containerRef}
      className="section-padding"
      style={{
        borderTop: "1px solid var(--card-border)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="process-header-wrapper" style={{ marginBottom: "50px", textAlign: "center" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px", display: "inline-block" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Execution Setup
          </span>
          <h2
            className="section-header-title font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "16px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em"
            }}
          >
            Our <span className="font-serif-i" style={{ color: "var(--accent)" }}>Workflow</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.5", maxWidth: "600px", margin: "0 auto" }}>
            How we take your product requirements from discussion to production maintenance.
          </p>
        </div>

        {/* Compact Bento Grid Layout */}
        <div 
          className="works-bento-layout" 
          style={{ 
            gridAutoRows: "200px",
            gap: "16px"
          }}
        >
          {/* Main Video Hero Card (Spans 8 columns, 2 rows) */}
          <div
            className="process-hero-card works-bento-card span-8 premium-tilt-card"
            onMouseMove={handleTiltMouseMove}
            onMouseLeave={handleTiltMouseLeave}
            style={{
              gridRow: "span 2",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "24px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Background Glow Tracker */}
            <div 
              className="bento-card-glow" 
              style={{ 
                position: "absolute",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                opacity: 0,
                transition: "opacity 0.3s ease",
                zIndex: 2
              }} 
            />

            {/* Video Background Container */}
            <div style={{ position: "relative", width: "100%", height: "100%", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "16px", overflow: "hidden" }}>
              <video 
                src="/images/workflow-nexus.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                suppressHydrationWarning
                style={{ 
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Contain ensures no cropping of the video!
                }} 
              />
              
              {/* Cinematic Vignette Overlay */}
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
                pointerEvents: "none",
                zIndex: 3 
              }} />
            </div>

            {/* Glassmorphism Video UI Badge */}
            <div style={{ 
              position: "absolute", 
              top: "20px", 
              left: "20px", 
              zIndex: 4,
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "6px 12px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <span className="pulsing-dot pulsing-dot-coral" style={{ background: "#00e5ff" }} />
              <span style={{ 
                color: "#00e5ff", 
                fontSize: "0.7rem", 
                fontWeight: 700, 
                textTransform: "uppercase", 
                letterSpacing: "0.1em", 
                fontFamily: "var(--font-mono), monospace" 
              }}>
                Live Architecture
              </span>
            </div>
          </div>

          {/* 6 Step Cards mapped into the Bento layout */}
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`process-step-card works-bento-card ${step.spanClass}`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={(e) => {
                setHoveredCard(null);
                handleTiltMouseLeave(e);
              }}
              onMouseMove={handleTiltMouseMove}
              style={{
                "--card-theme": `rgba(${step.colorRGB}, 0.5)`,
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                position: "relative",
                overflow: "hidden"
              } as React.CSSProperties}
            >
              {/* Glow Follower */}
              <div 
                className="bento-card-glow" 
                style={{ 
                  position: "absolute",
                  width: "250px",
                  height: "250px",
                  background: `radial-gradient(circle, rgba(${step.colorRGB}, 0.15) 0%, transparent 70%)`,
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  zIndex: 2
                }} 
              />

              <div style={{ position: "relative", zIndex: 3 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      background: hoveredCard === idx ? `rgba(${step.colorRGB}, 0.15)` : "rgba(255, 255, 255, 0.05)",
                      border: hoveredCard === idx ? `1px solid rgba(${step.colorRGB}, 0.3)` : "1px solid rgba(255, 255, 255, 0.1)",
                      color: hoveredCard === idx ? `rgb(${step.colorRGB})` : "var(--muted)",
                      fontFamily: "var(--font-mono), monospace",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Step {step.num}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: hoveredCard === idx ? "#fff" : "var(--foreground)",
                    margin: 0,
                    marginBottom: "4px",
                    lineHeight: 1.2,
                    transition: "color 0.3s ease"
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ 
                  color: "var(--muted)", 
                  fontSize: "0.8rem", 
                  lineHeight: "1.4", 
                  margin: 0 
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
