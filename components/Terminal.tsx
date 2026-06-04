"use client";
 
import { useState } from "react";
 
interface TerminalProps {
  activeIdx: number;
}
 
const videos = [
  {
    src: "/images/delivery_demo.mp4",
    title: "mvp-dispatcher-system.mp4",
    colorRGB: "0, 229, 255", // Cyan
    badgeLeft: "Rapid MVP Builds",
    badgeRight: "zero-commission.dart",
    glow: "radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, rgba(0, 229, 255, 0.05) 55%, transparent 75%)",
  },
  {
    src: "/images/chatbot_demo.mp4",
    title: "ai-qualifying-agent.mp4",
    colorRGB: "255, 214, 0", // Yellow
    badgeLeft: "Localized LLM",
    badgeRight: "prompt-router.py",
    glow: "radial-gradient(circle, rgba(255, 214, 0, 0.12) 0%, rgba(255, 214, 0, 0.05) 55%, transparent 75%)",
  },
  {
    src: "/images/dashboard_demo.mp4",
    title: "nexus-command-dashboard.mp4",
    colorRGB: "255, 0, 127", // Pink/Magenta
    badgeLeft: "Command Room",
    badgeRight: "live-telemetry.go",
    glow: "radial-gradient(circle, rgba(255, 0, 127, 0.12) 0%, rgba(255, 0, 127, 0.05) 55%, transparent 75%)",
  }
];
 
export default function Terminal({ activeIdx }: TerminalProps) {
  const currentVid = videos[activeIdx] || videos[0];
  const [hovered, setHovered] = useState(false);
 
  return (
    <div style={{
      position: "relative",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}>
      <style>{`
        @keyframes floatLeft {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes floatRight {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
        }
      `}</style>
 
      {/* Ambient Backdrop Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "360px",
        height: "360px",
        background: currentVid.glow,
        filter: "blur(45px)",
        zIndex: 1,
        pointerEvents: "none",
        transition: "background 0.6s ease",
      }} />
 
      {/* IDE Window Mockup Frame */}
      <div 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "480px",
          height: "290px",
          background: "#0A0A0C",
          border: `1px solid rgba(${currentVid.colorRGB}, ${hovered ? 0.35 : 0.08})`,
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: `0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(${currentVid.colorRGB}, ${hovered ? 0.1 : 0.03})`,
          display: "flex",
          flexDirection: "column",
          transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Editor Top Bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 16px",
          background: "#0f0f12",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}>
          {/* Traffic Light Dots */}
          <div style={{ display: "flex", gap: "6px" }}>
            <span style={{ display: "block", width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f56" }} />
            <span style={{ display: "block", width: "9px", height: "9px", borderRadius: "50%", background: "#ffbd2e" }} />
            <span style={{ display: "block", width: "9px", height: "9px", borderRadius: "50%", background: "#27c93f" }} />
          </div>
          <div style={{
            marginLeft: "20px",
            color: `rgba(${currentVid.colorRGB}, 0.75)`,
            fontSize: "0.72rem",
            fontFamily: "var(--font-space-grotesk), sans-serif",
            letterSpacing: "0.06em",
            fontWeight: 600,
            transition: "color 0.4s ease",
          }}>
            {currentVid.title}
          </div>
        </div>
 
        {/* Video Player Container */}
        <div style={{ flex: 1, position: "relative", background: "#060608", overflow: "hidden" }}>
          {videos.map((vid, i) => (
            <video
              key={i}
              src={vid.src}
              autoPlay
              loop
              muted
              playsInline
              suppressHydrationWarning
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                opacity: activeIdx === i ? 1 : 0,
                transform: hovered && activeIdx === i ? "scale(1.05)" : "scale(1)",
                transition: "opacity 0.6s ease-in-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                zIndex: activeIdx === i ? 2 : 1,
              }}
            />
          ))}
 
          {/* Sweep Telemetry Scanner */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              rgba(${currentVid.colorRGB}, 0.08) 45%,
              rgba(${currentVid.colorRGB}, 0.18) 50%,
              rgba(${currentVid.colorRGB}, 0.08) 55%,
              transparent 100%
            )`,
            opacity: hovered ? 1 : 0.65,
            pointerEvents: "none",
            zIndex: 3,
            animation: "telemetryScan 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
            transition: "opacity 0.3s ease"
          }} />
 
          {/* Reflective Overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 60%)",
            pointerEvents: "none",
            zIndex: 4,
          }} />
        </div>
      </div>
 
      {/* Floating Badge 1 - Left */}
      <div style={{
        position: "absolute",
        left: "-10px",
        top: "30px",
        background: "rgba(10, 10, 12, 0.88)",
        backdropFilter: "blur(12px)",
        border: `1px solid rgba(${currentVid.colorRGB}, 0.25)`,
        borderRadius: "10px",
        padding: "8px 12px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        boxShadow: `0 8px 24px rgba(0,0,0,0.6), 0 0 10px rgba(${currentVid.colorRGB}, 0.1)`,
        zIndex: 3,
        animation: "floatLeft 6s ease-in-out infinite",
        transition: "all 0.4s ease"
      }}>
        <div style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: `rgb(${currentVid.colorRGB})`,
          boxShadow: `0 0 8px rgb(${currentVid.colorRGB})`,
          transition: "all 0.4s ease"
        }} />
        <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
          {currentVid.badgeLeft}
        </span>
      </div>
 
      {/* Floating Badge 2 - Right */}
      <div style={{
        position: "absolute",
        right: "-10px",
        bottom: "40px",
        background: "rgba(10, 10, 12, 0.88)",
        backdropFilter: "blur(12px)",
        border: `1px solid rgba(${currentVid.colorRGB}, 0.25)`,
        borderRadius: "10px",
        padding: "8px 12px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        boxShadow: `0 8px 24px rgba(0,0,0,0.6), 0 0 10px rgba(${currentVid.colorRGB}, 0.1)`,
        zIndex: 3,
        animation: "floatRight 6s ease-in-out infinite",
        transition: "all 0.4s ease"
      }}>
        <div style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: `rgb(${currentVid.colorRGB})`,
          boxShadow: `0 0 8px rgb(${currentVid.colorRGB})`,
          transition: "all 0.4s ease"
        }} />
        <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
          {currentVid.badgeRight}
        </span>
      </div>
    </div>
  );
}
