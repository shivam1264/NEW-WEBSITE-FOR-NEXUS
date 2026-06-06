"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const renderServiceSvg = (idx: number, isHovered: boolean) => {
  const color = "var(--accent)";
  switch (idx) {
    case 0: // AI Solutions: Connecting nodes
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <line x1="4" y1="12" x2="9" y2="6" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="4" y1="12" x2="9" y2="18" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="9" y1="6" x2="15" y2="6" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="9" y1="18" x2="15" y2="18" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="9" y1="6" x2="20" y2="12" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="9" y1="18" x2="20" y2="12" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="15" y1="6" x2="20" y2="12" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />
          <line x1="15" y1="18" x2="20" y2="12" strokeOpacity={isHovered ? "0.9" : "0.3"} strokeWidth={isHovered ? "2.5" : "2"} />

          {isHovered && (
            <circle cx="12" cy="9" r="2.5" fill={color}>
              <animate attributeName="cx" values="4;9;15;20" dur="2s" repeatCount="indefinite" />
              <animate attributeName="cy" values="12;6;6;12" dur="2s" repeatCount="indefinite" />
            </circle>
          )}

          <circle cx="4" cy="12" r={isHovered ? 3.5 : 2.5} fill="#0d0d12" stroke={color} strokeWidth="2" />
          <circle cx="9" cy="6" r={isHovered ? 3.5 : 2.5} fill="#0d0d12" stroke={color} strokeWidth="2" />
          <circle cx="9" cy="18" r={isHovered ? 3.5 : 2.5} fill="#0d0d12" stroke={color} strokeWidth="2" />
          <circle cx="15" cy="6" r={isHovered ? 3.5 : 2.5} fill="#0d0d12" stroke={color} strokeWidth="2" />
          <circle cx="15" cy="18" r={isHovered ? 3.5 : 2.5} fill="#0d0d12" stroke={color} strokeWidth="2" />
          <circle cx="20" cy="12" r={isHovered ? 4.5 : 3.5} fill={isHovered ? color : "#0d0d12"} stroke={color} strokeWidth="2" />
        </svg>
      );
    case 1: // Web Development: Browser columns layout resizer
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <rect x="2" y="3" width="20" height="18" rx="2" strokeWidth="2" />
          <line x1="2" y1="8" x2="22" y2="8" strokeWidth="2" />
          <circle cx="5" cy="5.5" r="1" fill={color} />
          <circle cx="8" cy="5.5" r="1" fill={color} />
          <rect x="5" y="11" width="4" height="7" rx="0.5" fill={isHovered ? "rgba(232, 96, 46, 0.15)" : "none"} strokeWidth="1.5" />
          <rect x="11" y="11" width="8" height="7" rx="0.5" fill={isHovered ? "rgba(232, 96, 46, 0.25)" : "none"} strokeWidth="1.5" style={{ transition: "all 0.3s" }} />
          <line x1="10" y1="9" x2="10" y2="20" strokeDasharray="2 2" strokeOpacity="0.6" />
          {isHovered && (
            <path d="M8 14.5l2-2 2 2" stroke={color} strokeWidth="1.5">
              <animateTransform attributeName="transform" type="translate" values="-1 0; 1 0; -1 0" dur="2.5s" repeatCount="indefinite" />
            </path>
          )}
        </svg>
      );
    case 2: // Mobile App: Phone border with tile layouts sliding up
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <rect x="6" y="2" width="12" height="20" rx="3" strokeWidth="2" />
          <line x1="10" y1="4" x2="14" y2="4" strokeWidth="1.5" />
          <circle cx="12" cy="20" r="1" strokeWidth="1.5" />

          <g style={{ transform: isHovered ? "translateY(-2px)" : "none", transition: "transform 0.4s ease" }}>
            <rect x="8" y="7" width="8" height="3" rx="0.5" fill={isHovered ? "rgba(232, 96, 46, 0.2)" : "none"} strokeWidth="1.5" />
            <rect x="8" y="11.5" width="8" height="3" rx="0.5" fill={isHovered ? "rgba(232, 96, 46, 0.2)" : "none"} strokeWidth="1.5" />
            <rect x="8" y="16" width="8" height="1" rx="0.2" strokeWidth="1" strokeOpacity="0.4" />
          </g>
        </svg>
      );
    case 3: // Startup MVP: Charging Lightning with a scanline
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" fill={isHovered ? "rgba(232, 96, 46, 0.15)" : "none"} style={{ transition: "fill 0.4s" }} />
          {isHovered && (
            <line x1="2" y1="0" x2="22" y2="0" stroke={color} strokeWidth="2" opacity="0.8">
              <animateTransform attributeName="transform" type="translate" values="0 2; 0 22; 0 2" dur="1.8s" repeatCount="indefinite" />
            </line>
          )}
        </svg>
      );
    case 4: // UI/UX Design: Pen Tool Arc Curve drawing
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <path d="M3 19 C 6 8, 18 8, 21 19" stroke={color} strokeWidth="2.5" strokeDasharray={isHovered ? "none" : "4 2"} strokeDashoffset={isHovered ? 0 : 2} style={{ transition: "stroke-dasharray 0.3s" }} />
          <rect x="2" y="17" width="2" height="2" fill={color} />
          <rect x="20" y="17" width="2" height="2" fill={color} />
          <line x1="12" y1="10" x2="12" y2="4" strokeWidth="1.5" strokeDasharray="1 1" />
          <circle cx="12" cy="10" r="1.5" fill="#0d0d12" stroke={color} strokeWidth="2" />

          <g style={{ transform: isHovered ? "rotate(15deg)" : "none", transformOrigin: "12px 10px", transition: "transform 0.4s ease-in-out" }}>
            <line x1="7" y1="10" x2="17" y2="10" strokeWidth="1.5" />
            <circle cx="7" cy="10" r="1.5" fill={color} />
            <circle cx="17" cy="10" r="1.5" fill={color} />
          </g>
        </svg>
      );
    case 5: // Automation Systems: Packet data flow conveyor loop
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.4s" }}>
          <circle cx="12" cy="12" r="8" strokeOpacity="0.25" strokeWidth="2" />
          <path d="M3 12h4M17 12h4" strokeWidth="2" strokeOpacity="0.4" />
          <rect x="7" y="10" width="10" height="4" rx="1" fill={isHovered ? "rgba(232, 96, 46, 0.2)" : "none"} strokeWidth="2" />

          {isHovered ? (
            <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="2" strokeDasharray="4 6" style={{ transformOrigin: "center", animation: "rotateGeom 4s linear infinite" }} />
          ) : (
            <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" strokeDasharray="2 4" />
          )}
          <circle cx="12" cy="12" r="2" fill={color} />
        </svg>
      );
    default:
      return null;
  }
};

export default function ServicesSection() {
  const [hoveredSvc, setHoveredSvc] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number>(0);
  const [isServiceAutoplayPaused, setIsServiceAutoplayPaused] = useState<boolean>(false);

  // Stripe/Linear-grade 3D parallax mouse tilt effect
  const handleTiltMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 25; // Gentler tilt for bento boxes
    const rotateY = (x - centerX) / 25; 
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Light up background glow spotlight
    const glow = card.querySelector(".bento-card-glow") as HTMLDivElement | null;
    if (glow) {
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = "1";
    }
  };

  const handleTiltMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    
    const glow = card.querySelector(".bento-card-glow") as HTMLDivElement | null;
    if (glow) {
      glow.style.opacity = "0";
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP Animation Effect (runs only once on mount)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate Section Header
      gsap.fromTo(".section-header-wrapper > *",
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".section-header-wrapper",
            start: "top 85%",
          }
        }
      );

      // Animate Grid Cards
      gsap.fromTo(".works-bento-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".works-bento-layout",
            start: "top 80%",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Autoplay Effect
  useEffect(() => {
    if (isServiceAutoplayPaused || hoveredSvc !== null) return;
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 6);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isServiceAutoplayPaused, hoveredSvc]);

  const capabilities = [
    {
      title: "AI Solutions",
      desc: "Custom intelligent assistants, cognitive process automation, vector search systems, and smart workflows engineered to cut manual operations.",
      badge: "AI Chatbots & Automation",
      glow: "rgba(255, 92, 43, 0.15)",
      colorRGB: "255, 92, 43",
      span: "span-4"
    },
    {
      title: "Web Development",
      desc: "High-performance enterprise websites, SaaS admin panels, and corporate portals. Optimized for speed, reliability, and modern branding.",
      badge: "Next.js & SSR Platforms",
      glow: "rgba(0, 229, 255, 0.15)",
      colorRGB: "0, 229, 255",
      span: "span-4"
    },
    {
      title: "Mobile Apps",
      desc: "Native-quality cross-platform applications with fluid gesture controls, offline support, and seamless deployment on App Store & Google Play.",
      badge: "Flutter & iOS/Android",
      glow: "rgba(0, 230, 118, 0.15)",
      colorRGB: "0, 230, 118",
      span: "span-4"
    },
    {
      title: "Startup MVPs",
      desc: "Rapid product cycles targeting proof-of-concept validations. We launch polished Minimum Viable Products in weeks, not months.",
      badge: "Fast-Track Launch",
      glow: "rgba(255, 0, 127, 0.15)",
      colorRGB: "255, 0, 127",
      span: "span-4"
    },
    {
      title: "UI/UX Design",
      desc: "High-end conversion layouts, responsive interface mapping, and smooth micro-interactions. Tailored for startup aesthetics.",
      badge: "Conversion-Oriented UI",
      glow: "rgba(213, 0, 249, 0.15)",
      colorRGB: "213, 0, 249",
      span: "span-4"
    },
    {
      title: "Automation Systems",
      desc: "Connecting tools and data flows to automate sales tracking, lead follow-ups, scheduling, and billing systems.",
      badge: "Integrations & APIs",
      glow: "rgba(255, 214, 0, 0.15)",
      colorRGB: "255, 214, 0",
      span: "span-4"
    }
  ];

  return (
    <section ref={containerRef} className="section-padding" style={{ position: "relative", zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-wrapper" style={{ marginBottom: "60px", textAlign: "center" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "16px", display: "inline-block" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Capabilities
          </span>
          <h2
            className="section-header-title font-display"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "20px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em"
            }}
          >
            What We <span className="font-serif-i" style={{ color: "var(--accent)" }}>Do</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.6", maxWidth: "650px", margin: "0 auto" }}>
            We build fast, scalable digital products designed to drive business efficiency and customer trust.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="works-bento-layout" style={{ gridAutoRows: "240px", gap: "16px" }}>
          
          {/* Main Visual/Hero Card (Spans 8 columns, 2 rows) */}
          <div 
            className="works-bento-card span-8 premium-tilt-card" 
            style={{ 
              gridRow: "span 2",
              padding: 0, 
              display: "flex", 
              flexDirection: "column", 
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              position: "relative"
            }}
            onMouseMove={handleTiltMouseMove}
            onMouseLeave={(e) => {
              handleTiltMouseLeave(e);
              setIsServiceAutoplayPaused(false);
            }}
            onMouseEnter={() => setIsServiceAutoplayPaused(true)}
          >
            <div 
              className="bento-card-glow" 
              style={{ 
                position: "absolute",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(0, 191, 165, 0.12) 0%, transparent 70%)",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                opacity: 0,
                transition: "opacity 0.3s ease",
                zIndex: 2
              }} 
            />
            
            <div className="premium-tilt-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", position: "absolute", inset: 0, zIndex: 1 }}>
              {[
                "/images/service-1.jpg",
                "/images/service-2.png",
                "/images/service-3.jpg",
                "/images/service-4.png",
                "/images/service-5.png",
                "/images/service-6.png"
              ].map((src, idx) => (
                <Image 
                  key={idx}
                  src={src} 
                  className="char-floating-img alt" 
                  alt={`Service Visualization ${idx + 1}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ 
                    objectFit: "contain",
                    padding: "30px",
                    paddingBottom: "80px",
                    opacity: (hoveredSvc !== null ? hoveredSvc : activeService) === idx ? 1 : 0,
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                    transform: (hoveredSvc !== null ? hoveredSvc : activeService) === idx ? "scale(1.05) translateY(-5px)" : "scale(0.95)",
                    pointerEvents: (hoveredSvc !== null ? hoveredSvc : activeService) === idx ? "auto" : "none"
                  }} 
                />
              ))}
            </div>

            {/* Bottom info banner */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px", background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)", zIndex: 3 }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                <span className="pulsing-dot pulsing-dot-coral" style={{ background: "var(--accent)" }}/>
                <span style={{ color: "var(--accent)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-mono), monospace" }}>
                  Active Spotlight
                </span>
              </div>
              <h4 style={{ color: "var(--foreground)", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.6rem", fontWeight: 700, marginBottom: "8px", transition: "all 0.3s ease" }}>
                {(hoveredSvc !== null ? hoveredSvc : activeService) === 0 ? "Intelligent AI Solutions" : 
                 (hoveredSvc !== null ? hoveredSvc : activeService) === 1 ? "Enterprise Web Apps" : 
                 (hoveredSvc !== null ? hoveredSvc : activeService) === 2 ? "Native Mobile Experiences" : 
                 (hoveredSvc !== null ? hoveredSvc : activeService) === 3 ? "Startup MVP Development" :
                 (hoveredSvc !== null ? hoveredSvc : activeService) === 4 ? "Premium UI/UX Design" :
                 "Automation Systems"}
              </h4>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.4", margin: 0, transition: "all 0.3s ease", maxWidth: "90%" }}>
                {(hoveredSvc !== null ? hoveredSvc : activeService) === 0 ? "Custom AI chatbots, cognitive process automation, and vector search systems." : 
                 (hoveredSvc !== null ? hoveredSvc : activeService) === 1 ? "High-performance enterprise platforms optimized for speed and reliability." : 
                 (hoveredSvc !== null ? hoveredSvc : activeService) === 2 ? "Fluid cross-platform applications with offline support and gesture controls." : 
                 (hoveredSvc !== null ? hoveredSvc : activeService) === 3 ? "Rapid product cycles targeting proof-of-concept validations in weeks." :
                 (hoveredSvc !== null ? hoveredSvc : activeService) === 4 ? "High-end conversion layouts and responsive interface mapping tailored for startups." :
                 "Connecting tools and data flows to automate your entire business pipeline."}
              </p>
            </div>
          </div>

          {/* Individual Capability Cards */}
          {capabilities.map((service, idx) => {
            // Adjust span to fit perfectly in the grid
            // Row 1: Main (8) + Idx 0 (4)
            // Row 2: Main (8) + Idx 1 (4)
            // Row 3: Idx 2 (3), Idx 3 (3), Idx 4 (3), Idx 5 (3)
            const bentoSpan = idx === 0 || idx === 1 ? "span-4" : "span-3";

            return (
            <div
              key={idx}
              className={`works-bento-card`}
              onMouseEnter={() => setHoveredSvc(idx)}
              onMouseLeave={(e) => {
                setHoveredSvc(null);
                handleTiltMouseLeave(e);
              }}
              onMouseMove={handleTiltMouseMove}
              onClick={() => {
                setActiveService(idx);
                setHoveredSvc(idx);
              }}
              style={{
                gridColumn: `span ${bentoSpan === "span-4" ? 4 : 3}`,
                "--card-theme": `rgba(${service.colorRGB}, 0.5)`,
                padding: "20px",
                justifyContent: "center",
                gap: "12px"
              } as React.CSSProperties}
            >
              {/* Glow Follower */}
              <div 
                className="bento-card-glow" 
                style={{ 
                  position: "absolute",
                  width: "250px",
                  height: "250px",
                  background: `radial-gradient(circle, rgba(${service.colorRGB}, 0.15) 0%, transparent 70%)`,
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  zIndex: 2
                }} 
              />

              <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: hoveredSvc === idx ? service.glow : "rgba(255, 255, 255, 0.02)",
                      border: hoveredSvc === idx ? `1px solid rgba(${service.colorRGB}, 0.3)` : "1px solid rgba(255, 255, 255, 0.05)",
                      transition: "all 0.3s ease",
                      flexShrink: 0
                    }}
                  >
                    {renderServiceSvg(idx, hoveredSvc === idx)}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--foreground)",
                        margin: 0,
                        lineHeight: 1.1
                      }}
                    >
                      {service.title}
                    </h3>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.65rem",
                        color: hoveredSvc === idx ? `rgb(${service.colorRGB})` : "var(--muted-2)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginTop: "4px",
                        transition: "color 0.3s ease",
                        fontFamily: "var(--font-mono), monospace"
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>
                </div>

                <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: "1.4", margin: 0 }}>
                  {service.desc}
                </p>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
