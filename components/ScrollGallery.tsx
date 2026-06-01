"use client";

import { useEffect, useState } from "react";
import { Sparkles, Layers, ShieldCheck, HeartPulse, Trophy, Code } from "lucide-react";

export default function ScrollGallery() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Professional speeds: slower, refined, and stable sliding motion
  // Row 1 slides left-to-right (positive offset)
  const offset1 = (scrollY * 0.12) - 100;
  // Row 2 slides right-to-left (negative offset)
  const offset2 = -(scrollY * 0.12) + 100;

  const row1Images = [
    { src: "/images/careforyou_ui.png", label: "CareForYou AI Platform", icon: <HeartPulse size={14} style={{ color: "#00e5c8" }} /> },
    { src: "/images/dashboard_ui.png", label: "Launch Ops Control Center", icon: <Layers size={14} style={{ color: "var(--accent)" }} /> },
    { src: "/images/restaurant_app_ui.png", label: "Food Delivery Dispatch Client", icon: <Code size={14} style={{ color: "#ffd600" }} /> },
    { src: "/images/hackathon_win.png", label: "Smart India Hackathon MVP", icon: <Trophy size={14} style={{ color: "#ff007f" }} /> },
  ];

  const row2Images = [
    { src: "/images/team_member_1.png", label: "Aman Gupta · Full-Stack Lead", icon: <Code size={14} style={{ color: "#00e5ff" }} /> },
    { src: "/images/team_member_2.png", label: "Rohan Verma · AI Engineer", icon: <Sparkles size={14} style={{ color: "var(--accent)" }} /> },
    { src: "/images/team_member_3.png", label: "Shreya Sen · Product Designer", icon: <Layers size={14} style={{ color: "#ffd600" }} /> },
    { src: "/images/team_member_4.png", label: "Rahul Nair · Native App Lead", icon: <Code size={14} style={{ color: "#ff007f" }} /> },
    { src: "/images/team_member_5.png", label: "Priya Das · System Architect", icon: <ShieldCheck size={14} style={{ color: "#00e676" }} /> },
  ];

  return (
    <section 
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

        {/* Row 1: Left to Right */}
        <div 
          style={{ 
            display: "flex", 
            gap: "24px", 
            transform: `translate3d(${offset1}px, 0, 0)`,
            transition: "transform 0.2s cubic-bezier(0.1, 0.8, 0.3, 1)",
            width: "max-content",
            paddingLeft: "12vw"
          }}
        >
          {row1Images.map((img, idx) => (
            <div 
              key={idx} 
              className="s3-card"
              style={{ 
                width: "clamp(280px, 24vw, 380px)", 
                height: "clamp(180px, 15vw, 240px)", 
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0
              }}
            >
              <img 
                src={img.src} 
                alt={img.label} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
              <div 
                style={{ 
                  position: "absolute", 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  padding: "16px 20px", 
                  background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                {img.icon}
                {img.label}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div 
          style={{ 
            display: "flex", 
            gap: "24px", 
            transform: `translate3d(${offset2}px, 0, 0)`,
            transition: "transform 0.2s cubic-bezier(0.1, 0.8, 0.3, 1)",
            width: "max-content",
            alignSelf: "flex-end",
            paddingRight: "12vw"
          }}
        >
          {row2Images.map((img, idx) => (
            <div 
              key={idx} 
              className="s3-card"
              style={{ 
                width: "clamp(180px, 16vw, 240px)", 
                height: "clamp(220px, 20vw, 300px)", 
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0
              }}
            >
              <img 
                src={img.src} 
                alt={img.label} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
              <div 
                style={{ 
                  position: "absolute", 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  padding: "16px 20px", 
                  background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                {img.icon}
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
