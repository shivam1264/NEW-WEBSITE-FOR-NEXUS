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

    card.style.transform = "translateY(-4px)";

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
    card.style.transform = "translateY(0px)";

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
        overflow: "hidden"
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

        {/* Premium Side-by-Side Bento Grid Layout */}
        <div
          className="process-bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "20px",
            alignItems: "stretch"
          }}
        >
          {/* Main Video Hero Card (Spans 5 columns) */}
          <div
            className="process-hero-card premium-tilt-card"
            onMouseMove={handleTiltMouseMove}
            onMouseLeave={handleTiltMouseLeave}
            style={{
              gridColumn: "span 5",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "24px",
              position: "relative",
              overflow: "hidden",
              minHeight: "440px"
            }}
          >
            {/* Background Glow Tracker */}
            <div
              className="bento-card-glow"
              style={{
                position: "absolute",
                width: "350px",
                height: "350px",
                background: "radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                opacity: 0,
                transition: "opacity 0.3s ease",
                zIndex: 2
              }}
            />

            {/* Video Background Container */}
            <div style={{ position: "relative", width: "100%", height: "100%", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "18px", overflow: "hidden", background: "#05070c" }}>
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
                  objectFit: "contain",
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
              top: "28px",
              left: "28px",
              zIndex: 4,
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(0, 229, 255, 0.3)",
              padding: "6px 14px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 20px rgba(0, 229, 255, 0.15)"
            }}>
              <span className="pulsing-dot pulsing-dot-coral" style={{ background: "#00e5ff" }} />
              <span style={{
                color: "#00e5ff",
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-mono), monospace"
              }}>
                Live Architecture
              </span>
            </div>
          </div>

          {/* 6 Step Cards Grid (Spans 7 columns, 2 cols x 3 rows) */}
          <div
            className="process-step-grid"
            style={{
              gridColumn: "span 7",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="process-step-card"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={(e) => {
                  setHoveredCard(null);
                  handleTiltMouseLeave(e);
                }}
                onMouseMove={handleTiltMouseMove}
                style={{
                  background: hoveredCard === idx
                    ? `linear-gradient(135deg, rgba(${step.colorRGB}, 0.1) 0%, var(--card-bg) 100%)`
                    : "var(--card-bg)",
                  border: hoveredCard === idx
                    ? `1px solid rgba(${step.colorRGB}, 0.45)`
                    : "1px solid var(--card-border)",
                  borderRadius: "20px",
                  padding: "22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "135px",
                  position: "relative",
                  overflow: "hidden",
                  outline: "none",
                  WebkitTapHighlightColor: "transparent",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: hoveredCard === idx ? `inset 0 0 20px rgba(${step.colorRGB}, 0.15), 0 4px 16px rgba(${step.colorRGB}, 0.12)` : "none"
                }}
              >
                {/* Top Accent Line Glow on Hover */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, transparent, rgb(${step.colorRGB}), transparent)`,
                    opacity: hoveredCard === idx ? 1 : 0,
                    transition: "opacity 0.3s ease"
                  }}
                />

                {/* Glow Follower */}
                <div
                  className="bento-card-glow"
                  style={{
                    position: "absolute",
                    width: "250px",
                    height: "250px",
                    background: `radial-gradient(circle, rgba(${step.colorRGB}, 0.18) 0%, transparent 70%)`,
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 2
                  }}
                />

                <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* Step Header */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 10px",
                        borderRadius: "8px",
                        background: hoveredCard === idx ? `rgba(${step.colorRGB}, 0.2)` : `rgba(${step.colorRGB}, 0.1)`,
                        border: `1px solid rgba(${step.colorRGB}, 0.3)`,
                        color: `rgb(${step.colorRGB})`,
                        fontFamily: "var(--font-mono), monospace",
                        fontWeight: 800,
                        fontSize: "0.75rem",
                        letterSpacing: "0.05em",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span>STEP</span>
                      <span>{step.num}</span>
                    </span>

                    {/* Glowing status dot */}
                    <div style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: `rgb(${step.colorRGB})`,
                      boxShadow: hoveredCard === idx ? `0 0 12px rgb(${step.colorRGB})` : "none",
                      transition: "box-shadow 0.3s ease"
                    }} />
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: hoveredCard === idx ? "#fff" : "var(--foreground)",
                        margin: "0 0 6px 0",
                        lineHeight: 1.25,
                        transition: "color 0.3s ease"
                      }}
                    >
                      {step.title}
                    </h3>

                    <p style={{
                      color: "var(--muted)",
                      fontSize: "0.82rem",
                      lineHeight: "1.45",
                      margin: 0
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
