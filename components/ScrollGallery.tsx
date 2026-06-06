"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, Layers, ShieldCheck, HeartPulse, Trophy, Code, Shield } from "lucide-react";

export default function ScrollGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [hoveredR1, setHoveredR1] = useState<number | null>(null);
  const [hoveredR2, setHoveredR2] = useState<number | null>(null);

  useEffect(() => {
    const handleScrollAndResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      
      // Calculate how far the center of the section is from the center of the screen
      const sectionCenter = rect.top + (rect.height / 2);
      const viewportCenter = vh / 2;
      const distanceFromCenter = viewportCenter - sectionCenter;
      
      // Speed multiplier for the parallax effect
      const speed = mobile ? 0.15 : 0.25;
      
      setOffset1(distanceFromCenter * speed);
      setOffset2(-distanceFromCenter * speed);
    };

    window.addEventListener("scroll", handleScrollAndResize, { passive: true });
    window.addEventListener("resize", handleScrollAndResize, { passive: true });
    handleScrollAndResize();
    return () => {
      window.removeEventListener("scroll", handleScrollAndResize);
      window.removeEventListener("resize", handleScrollAndResize);
    };
  }, []);

  const row1Images = [
    {
      src: "/images/careforyou_ui.png",
      title: "SHEild AI Platform",
      category: "Women Safety & Emergency Response",
      icon: <Shield size={14} style={{ color: "#00e5ff" }} />,
      accent: "#00e5ff",
      accentRgb: "0, 229, 255"
    },
    {
      src: "/images/dashboard_ui.png",
      title: "Launch Ops Control Center",
      category: "Operations Telemetry",
      icon: <Layers size={14} style={{ color: "var(--accent)" }} />,
      accent: "var(--accent)",
      accentRgb: "255, 92, 43"
    },
    {
      src: "/images/restaurant_app_ui.png",
      title: "Food Delivery Dispatch Client",
      category: "Mobile Dispatch",
      icon: <Code size={14} style={{ color: "#ffd600" }} />,
      accent: "#ffd600",
      accentRgb: "255, 214, 0"
    },
    {
      src: "/images/hackathon_tic.jpg",
      title: "TIC Hackathon Championship",
      category: "Award Winning MVP",
      icon: <Trophy size={14} style={{ color: "#ff007f" }} />,
      accent: "#ff007f",
      accentRgb: "255, 0, 127"
    },
  ];

  const row2Images = [
    {
      src: "/images/team_member_1.jpg",
      title: "Shubham Pawar",
      category: "AI Lead Engineer",
      icon: <Sparkles size={14} style={{ color: "#00e5ff" }} />,
      accent: "#00e5ff",
      accentRgb: "0, 229, 255"
    },
    {
      src: "/images/team_member_2.jpg",
      title: "Shivansh Mehra",
      category: "Full-Stack Developer",
      icon: <Code size={14} style={{ color: "#ff5c2b" }} />,
      accent: "#ff5c2b",
      accentRgb: "255, 92, 43"
    },
    {
      src: "/images/team_member_3.jpg",
      title: "Prakash Kumar Biswal",
      category: "Agentic AI & Flutter Dev",
      icon: <Code size={14} style={{ color: "#00e676" }} />,
      accent: "#00e676",
      accentRgb: "0, 230, 118"
    },
    {
      src: "/images/team_member_4.jpg",
      title: "Shivam Kumar Maurya",
      category: "UI/UX & Frontend Dev",
      icon: <Layers size={14} style={{ color: "#d500f9" }} />,
      accent: "#d500f9",
      accentRgb: "213, 0, 249"
    },
    {
      src: "/images/team_member_5.jpg",
      title: "Tushar Das",
      category: "Ops & Marketing Lead",
      icon: <ShieldCheck size={14} style={{ color: "#ffd600" }} />,
      accent: "#ffd600",
      accentRgb: "255, 214, 0"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      style={{ 
        padding: "100px 0", 
        overflow: "hidden", 
        background: "transparent", 
        position: "relative",
        zIndex: 2,
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      }}
    >
      <div className="container" style={{ marginBottom: "40px" }}>
        <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>
          Creative Portfolio
        </span>
        <h2 
          className="font-display" 
          style={{ 
            fontSize: "clamp(2rem, 4vw, 3.2rem)", 
            fontWeight: 700, 
            color: "#ffffff" 
          }}
        >
          Systems &amp; Specialists Gallery
        </h2>
      </div>

      {/* Track Container with Gradient Edge Fades for luxury studio lighting effect */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", position: "relative" }}>
        
        {/* Left Side Ambient Edge Fade */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, #050515 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 3
          }}
        />

        {/* Right Side Ambient Edge Fade */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, #050515 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 3
          }}
        />

        {/* Row 1: Left to Right (Projects) */}
        <div 
            style={{ 
            display: "flex", 
            gap: "24px", 
            transform: `translate3d(${offset1}px, 0, 0)`,
            transition: "transform 0.1s linear",
            width: "max-content",
            paddingLeft: isMobile ? "5vw" : "12vw"
          }}
        >
          {row1Images.map((img, idx) => {
            const isHovered = hoveredR1 === idx;
            return (
              <div 
                key={idx} 
                style={{ 
                  width: "clamp(220px, 45vw, 380px)", 
                  height: "clamp(140px, 30vw, 240px)", 
                  borderRadius: "24px",
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: isHovered ? `1px solid ${img.accent}` : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isHovered 
                    ? `0 20px 48px rgba(0,0,0,0.7), 0 0 35px rgba(${img.accentRgb}, 0.22)`
                    : "0 10px 30px rgba(0, 0, 0, 0.4)",
                  transform: isHovered ? "translate3d(0, -6px, 0) scale(1.02)" : "translate3d(0, 0, 0)",
                  cursor: "pointer"
                }}
                onMouseEnter={() => setHoveredR1(idx)}
                onMouseLeave={() => setHoveredR1(null)}
              >
                {/* Image */}
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  width={600}
                  height={400}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isHovered ? "scale(1.08)" : "scale(1)"
                  }} 
                />

                {/* Ambient dynamic backglow inside card */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: isHovered 
                    ? `radial-gradient(circle at center, rgba(${img.accentRgb}, 0.06) 0%, transparent 70%)`
                    : "transparent",
                  pointerEvents: "none",
                  transition: "background 0.5s ease"
                }} />

                {/* Sheen sweep animation overlay */}
                <div style={{
                  position: "absolute",
                  top: "-150%",
                  left: isHovered ? "150%" : "-150%",
                  width: "300%",
                  height: "300%",
                  background: "linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.12) 50%, transparent 55%)",
                  transform: "rotate(-45deg)",
                  transition: isHovered ? "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  pointerEvents: "none"
                }} />

                {/* Bottom Card Title Banner */}
                <div 
                  style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    padding: "18px 24px", 
                    background: isHovered
                      ? "linear-gradient(to top, rgba(5,5,15,0.95) 0%, rgba(5,5,15,0.7) 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                    backdropFilter: isHovered ? "blur(12px)" : "blur(0px)",
                    WebkitBackdropFilter: isHovered ? "blur(12px)" : "blur(0px)",
                    borderTop: isHovered ? `1px solid rgba(${img.accentRgb}, 0.25)` : "1px solid transparent",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {img.icon}
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#ffffff" }}>{img.title}</span>
                  </div>
                  <span style={{ 
                    fontSize: "0.72rem", 
                    fontWeight: 600, 
                    color: isHovered ? img.accent : "#8892a4",
                    fontFamily: "var(--font-mono), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginLeft: "22px",
                    transition: "color 0.3s ease"
                  }}>
                    {img.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Right to Left (Team Members) */}
        <div 
          style={{ 
            display: "flex", 
            gap: "24px", 
            transform: `translate3d(${offset2}px, 0, 0)`,
            transition: "transform 0.1s linear",
            width: "max-content",
            alignSelf: "flex-end",
            paddingRight: isMobile ? "5vw" : "12vw"
          }}
        >
          {row2Images.map((img, idx) => {
            const isHovered = hoveredR2 === idx;
            return (
              <div 
                key={idx} 
                style={{ 
                  width: "clamp(160px, 35vw, 240px)", 
                  height: "clamp(200px, 45vw, 300px)", 
                  borderRadius: "24px",
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: isHovered ? `1px solid ${img.accent}` : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isHovered 
                    ? `0 20px 48px rgba(0,0,0,0.7), 0 0 35px rgba(${img.accentRgb}, 0.22)`
                    : "0 10px 30px rgba(0, 0, 0, 0.4)",
                  transform: isHovered ? "translate3d(0, -6px, 0) scale(1.02)" : "translate3d(0, 0, 0)",
                  cursor: "pointer"
                }}
                onMouseEnter={() => setHoveredR2(idx)}
                onMouseLeave={() => setHoveredR2(null)}
              >
                {/* Image (Centered and cropped beautifully at the face level) */}
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  width={400}
                  height={500}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    objectPosition: "50% 12%", // Centered face crop
                    transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isHovered ? "scale(1.08)" : "scale(1)"
                  }} 
                />

                {/* Ambient dynamic backglow inside card */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: isHovered 
                    ? `radial-gradient(circle at center, rgba(${img.accentRgb}, 0.06) 0%, transparent 70%)`
                    : "transparent",
                  pointerEvents: "none",
                  transition: "background 0.5s ease"
                }} />

                {/* Sheen sweep animation overlay */}
                <div style={{
                  position: "absolute",
                  top: "-150%",
                  left: isHovered ? "150%" : "-150%",
                  width: "300%",
                  height: "300%",
                  background: "linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.12) 50%, transparent 55%)",
                  transform: "rotate(-45deg)",
                  transition: isHovered ? "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  pointerEvents: "none"
                }} />

                {/* Bottom Card Title Banner */}
                <div 
                  style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    padding: "18px 20px", 
                    background: isHovered
                      ? "linear-gradient(to top, rgba(5,5,15,0.95) 0%, rgba(5,5,15,0.7) 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                    backdropFilter: isHovered ? "blur(12px)" : "blur(0px)",
                    WebkitBackdropFilter: isHovered ? "blur(12px)" : "blur(0px)",
                    borderTop: isHovered ? `1px solid rgba(${img.accentRgb}, 0.25)` : "1px solid transparent",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {img.icon}
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.015em" }}>{img.title}</span>
                  </div>
                  <span style={{ 
                    fontSize: "0.68rem", 
                    fontWeight: 600, 
                    color: isHovered ? img.accent : "#8892a4",
                    fontFamily: "var(--font-mono), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginLeft: "22px",
                    transition: "color 0.3s ease"
                  }}>
                    {img.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
