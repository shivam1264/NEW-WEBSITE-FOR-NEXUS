"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Trophy, ArrowRight, Shield, Zap, Sparkles, Box, Activity } from "lucide-react";

interface WorksCardImageProps {
  item: {
    id: string;
    code: string;
    title: string;
    img: string;
    imgs?: string[];
    scrollingImages?: string[];
    video?: string;
  };
  hovered: boolean;
}

function WorksCardImage({ item, hovered }: WorksCardImageProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!item.imgs || item.imgs.length <= 1 || hovered) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % item.imgs!.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hovered, item.imgs]);

  if (item.video) {
    return (
      <video
        src={item.video}
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
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: hovered ? "scale(1.2)" : "scale(1.15)",
        }}
      />
    );
  }

  if (item.scrollingImages && item.scrollingImages.length > 1) {
    return (
      <>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scrollX-${item.id} {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 8px)); }
          }
        `}} />
        <div 
          style={{
            display: "flex",
            gap: "16px",
            height: "100%",
            paddingTop: "40px",
            paddingLeft: "16px",
            width: "fit-content",
            animation: `scrollX-${item.id} 20s linear infinite`,
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.05) translateY(-5px)" : "scale(1) translateY(0)",
          }}
        >
          {item.scrollingImages.concat(item.scrollingImages).map((img, i) => (
            <div key={i} style={{ position: "relative", width: "160px", height: "85%", flexShrink: 0, borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
              <Image
                src={img}
                alt={`${item.title} screen ${i}`}
                fill
                sizes="160px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </>
    );
  }

  if (!item.imgs || item.imgs.length <= 1) {
    return (
      <Image
        src={item.img}
        alt={item.title}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          objectFit: "cover",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />
    );
  }

  return (
    <>
      {item.imgs.map((imgSrc, idx) => (
        <Image
          key={imgSrc}
          src={imgSrc}
          alt={`${item.title} slide ${idx + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: "cover",
            opacity: currentIdx === idx ? 1 : 0,
            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            zIndex: currentIdx === idx ? 2 : 1,
          }}
        />
      ))}
    </>
  );
}

export default function Works() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "project" | "championship">("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined" && document.documentElement && document.body) {
      if (activeProject !== null) {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        if (typeof window !== "undefined" && (window as any).lenis) {
          (window as any).lenis.stop();
        }
      } else {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        if (typeof window !== "undefined" && (window as any).lenis) {
          (window as any).lenis.start();
        }
      }
    }

    return () => {
      if (typeof document !== "undefined" && document.documentElement && document.body) {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        if (typeof window !== "undefined" && (window as any).lenis) {
          (window as any).lenis.start();
        }
      }
    };
  }, [activeProject]);

  const registryItems = [
    {
      type: "project",
      id: "nexus-room",
      code: "PRJ-01",
      title: "Nexus Launch Command Room",
      subtitle: "Centralized operational war room & system metrics",
      desc: "A dashboard checking active client marketing beats, schedules, owner tasks, and live telemetry drift.",
      details: "Built for fast-scaling startups and co-marketing groups. Hooks direct analytics flows into client databases, checking asset approvals, partner marketing timelines, and live traffic metrics to prevent coordination issues.",
      tags: ["Launch Ops", "Dashboards", "FastAPI"],
      icon: <Zap size={22} />,
      color: "#e8602e",
      colorRGB: "232, 96, 46",
      metricsList: [
        { val: "100%", name: "On-Time Launch" },
        { val: "0ms", name: "Cache Latency" },
        { val: "8 Co-Agents", name: "Tracked Globally" }
      ],
      achievement: "Awarded 1st Place National Hackathon trophy for Real-Time State Monitors.",
      img: "/images/custom-project-1.png",
      // video: "/images/sheild_ai_demo.mp4",
      bentoSpan: "span-8"
    },
    {
      type: "championship",
      id: "tic",
      code: "HACK-01",
      title: "Technocrats Innovation Challenge (TIC 2K26)",
      subtitle: "Organized by Technocrats Institute of Technology & Science, Bhopal | First Prize Winner",
      desc: (
        <span>
          Out of <strong style={{ color: "#ffffff" }}>200+ competing teams</strong> and innovators across multiple institutions, NEXUS secured the <strong style={{ color: "var(--accent)" }}>1st Prize (₹20,000)</strong> at the prestigious Technocrats Innovation Challenge 2K26.
        </span>
      ),
      details: (
        <span>
          Through a demanding <strong style={{ color: "#ffffff" }}>36-hour innovation sprint</strong>, our team successfully advanced through multiple evaluation rounds and emerged as the overall champions with <strong style={{ color: "#ffffff" }}>SHEild AI</strong>, an AI-powered platform focused on Women Safety, Empowerment, and Social Impact.
        </span>
      ),
      tags: ["Grand Prize", "TIC 2K26", "₹20,000"],
      icon: <Trophy size={22} />,
      color: "#ffd600",
      colorRGB: "255, 214, 0",
      metricsList: [
        { val: "1st Place", name: "Rank" },
        { val: "₹20,000", name: "Grand Prize" },
        { val: "36 Hours", name: "Sprint Duration" }
      ],
      achievement: "🏆 GRAND PRIZE WINNER",
      img: "/images/hackathon_tic.jpg",
      imgs: ["/images/hackathon_tic.jpg", "/images/hackathon_tic_2.jpg"],
      badge: "🏆 GRAND PRIZE WINNER",
      org: "Technocrats Institute of Technology & Science, Bhopal",
      scope: (
        <span>
          Developed and deployed an intelligent assistance ecosystem integrating <strong style={{ color: "#ffffff" }}>AI-driven emergency response</strong>, <strong style={{ color: "#ffffff" }}>safety analytics</strong>, and <strong style={{ color: "#ffffff" }}>real-time support features</strong>. The solution was evaluated on <strong style={{ color: "#ffffff" }}>innovation, scalability, social impact, technical execution, and user experience</strong> under intensive hackathon conditions.
        </span>
      ),
      bentoSpan: "span-4"
    },
    {
      type: "project",
      id: "sheild-ai",
      code: "PRJ-02",
      title: "SHEild AI Platform",
      subtitle: "AI-Powered Women Safety & Emergency Response System",
      desc: "An intelligent safety platform leveraging Artificial Intelligence, safe-route navigation, predictive risk detection, and automated emergency response workflows to enhance personal security and community well-being.",
      details: "Traditional safety solutions are reactive and depend heavily on manual intervention after an incident occurs. SHEild AI introduces a proactive protection framework capable of identifying potential risks, recommending safer routes, and triggering intelligent emergency workflows in real time.\n\nDeveloped and validated during multiple national-level hackathons, the platform demonstrates how AI can be leveraged to address critical social challenges while maintaining accessibility, scalability, and reliability.",
      tags: ["Flutter", "Machine Learning", "Geolocation Services", "Emergency Response Automation", "Node.js", "Firebase"],
      icon: <Shield size={22} />,
      color: "#00e5ff",
      colorRGB: "0, 229, 255",
      metricsList: [
        { val: "95%", name: "Risk Detection Accuracy" },
        { val: "<3s", name: "Emergency Response Time" },
        { val: "24/7", name: "AI Safety Monitoring" }
      ],
      achievement: "🏆 Building AI-powered safety infrastructure for a safer and more empowered society.",
      img: "/images/project2_img1.jpg",
      scrollingImages: [
        "/images/project2_img1.jpg",
        "/images/project2_img2.jpg",
        "/images/project2_img3.jpg",
        "/images/project2_img4.jpg",
        "/images/project2_img5.jpg"
      ],
      bentoSpan: "span-6"
    },
    {
      type: "championship",
      id: "bgi-hackathon",
      code: "HACK-02",
      title: "BGI Hackathon 2026",
      subtitle: "Organized by Bansal Group of Institutes & MPSEDC | National Runner-Up",
      desc: (
        <span>
          Competing against <strong style={{ color: "#ffffff" }}>600+ teams</strong> and over <strong style={{ color: "#ffffff" }}>2,800 participants</strong> from across India, NEXUS secured the <strong style={{ color: "#00e5ff" }}>Runner-Up Position (₹12,000)</strong> at the prestigious BGI Hackathon 2026 held in Bhopal.
        </span>
      ),
      details: (
        <span>
          Through multiple rounds of technical evaluation, mentorship sessions, and final pitching, our team demonstrated exceptional innovation and execution with <strong style={{ color: "#ffffff" }}>SHEild AI</strong>, an intelligent safety platform designed to empower women and vulnerable communities.
        </span>
      ),
      tags: ["National Runner-Up", "BGI 2026", "₹12,000"],
      icon: <Trophy size={22} />,
      color: "#00e5ff",
      colorRGB: "0, 229, 255",
      metricsList: [
        { val: "2nd Place", name: "Rank" },
        { val: "₹12,000", name: "Runner-Up Prize" },
        { val: "600+ Teams", name: "Competitors" }
      ],
      achievement: "🥈 NATIONAL RUNNER-UP",
      img: "/images/hackathon_bgi.jpg",
      imgs: ["/images/hackathon_bgi.jpg", "/images/hackathon_bgi_2.png"],
      badge: "🥈 NATIONAL RUNNER-UP",
      org: "Bansal Group of Institutes & MPSEDC",
      scope: (
        <span>
          AI-driven safety ecosystem integrating <strong style={{ color: "#ffffff" }}>risk-aware navigation</strong>, <strong style={{ color: "#ffffff" }}>emergency response automation</strong>, <strong style={{ color: "#ffffff" }}>intelligent alerts</strong>, and <strong style={{ color: "#ffffff" }}>real-time assistance mechanisms</strong> validated during a <strong style={{ color: "#ffffff" }}>national-level innovation challenge</strong>.
        </span>
      ),
      bentoSpan: "span-6"
    },
    {
      type: "project",
      id: "movie-app",
      code: "PRJ-03",
      title: "Movie Social App",
      subtitle: "Movie discovery and social platform",
      desc: "A rich and modern platform for discovering movies, rating films, and connecting with other cinephiles.",
      details: "Built with a focus on immersive UI, vibrant imagery, and smooth navigation. Users can track their watchlist, explore trending movies, review films, and maintain a personalized cinema DNA score.",
      tags: ["React Native", "UI/UX", "Social App"],
      icon: <Zap size={22} />,
      color: "#ffab00",
      colorRGB: "255, 171, 0",
      metricsList: [
        { val: "4.9", name: "App Store" },
        { val: "10K+", name: "Active Users" },
        { val: "1M+", name: "Movies Rated" }
      ],
      achievement: "Top 10 Entertainment Apps of 2026",
      img: "/images/project3_img1.jpg",
      scrollingImages: [
        "/images/project3_img1.jpg",
        "/images/project3_img2.jpg",
        "/images/project3_img3.jpg",
        "/images/project3_img4.jpg",
        "/images/project3_img5.jpg"
      ],
      bentoSpan: "span-5"
    },
    {
      type: "project",
      id: "restaurant-app",
      code: "PRJ-04",
      title: "QR Menu & POS App",
      subtitle: "Offline-first restaurant menu and ordering system",
      desc: "A robust mobile application allowing restaurant staff to manage active tables, track kitchen prep states, and process split payments securely.",
      details: "High-volume restaurants required an app that wouldn't fail during spotty WiFi conditions. We implemented an offline-first caching layer where orders sync instantly the moment connectivity returns.",
      tags: ["Flutter", "Cross-Platform", "Offline-First"],
      icon: <Box size={22} />,
      color: "#d500f9",
      colorRGB: "213, 0, 249",
      metricsList: [
        { val: "1.2s", name: "App Boot Time" },
        { val: "0% Loss", name: "Offline Sync" },
        { val: "4.9", name: "App Store Rating" }
      ],
      achievement: "Top 10 B2B POS systems across App Store regional charts.",
      img: "/images/restaurant_app_ui.png",
      bentoSpan: "span-7"
    }
  ];

  const filteredItems = registryItems.filter((item) => filter === "all" || item.type === filter);

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

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", position: "relative" }}>
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="bg-glow" style={{ top: "-10%", left: "-10%", background: "radial-gradient(circle, rgba(0,255,171,0.08) 0%, transparent 60%)" }} />
      <div className="bg-glow" style={{ bottom: "-10%", right: "-10%", background: "radial-gradient(circle, rgba(255,92,43,0.05) 0%, transparent 60%)" }} />

      <div style={{ paddingTop: "140px", paddingBottom: "100px" }}>

        {/* HEADER SECTION */}
        <div className="container" style={{ marginBottom: "60px", textAlign: "center" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "16px", display: "inline-block" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Registry
          </span>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "20px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em"
            }}
          >
            Engineering <span className="font-serif-i" style={{ color: "var(--accent)" }}>Archives</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.6", maxWidth: "650px", margin: "0 auto" }}>
            A curated index of our production systems, software deployments, and award-winning national hackathon championships.
          </p>
        </div>

        {/* FILTERING */}
        <div className="container" style={{ marginBottom: "40px", display: "flex", justifyContent: "center" }}>
          <div style={{
            display: "inline-flex",
            background: "var(--card-bg)",
            padding: "6px",
            borderRadius: "99px",
            border: "1px solid var(--card-border)"
          }}>
            {["all", "project", "championship"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                style={{
                  background: filter === f ? "rgba(255, 255, 255, 0.08)" : "transparent",
                  color: filter === f ? "var(--foreground)" : "var(--muted)",
                  border: "none",
                  padding: "8px 24px",
                  borderRadius: "99px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "capitalize"
                }}
              >
                {f === "all" ? "All Works" : f === "project" ? "Deployments" : "Championships"}
              </button>
            ))}
          </div>
        </div>

        {/* VISUAL BENTO GRID */}
        <div className="container works-bento-layout">
          {filteredItems.map((item) => {
            const originalIndex = registryItems.findIndex((r) => r.id === item.id);
            const isHovered = hoveredCard === item.id;

            return (
              <div
                key={item.id}
                className={`works-bento-card ${item.bentoSpan}`}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={(e) => {
                  setHoveredCard(null);
                  handleTiltMouseLeave(e);
                }}
                onMouseMove={handleTiltMouseMove}
                onClick={() => setActiveProject(originalIndex)}
                style={{
                  "--card-theme": `rgba(${item.colorRGB}, 0.5)`
                } as React.CSSProperties}
              >
                {/* Glow Follower */}
                <div
                  className="bento-card-glow"
                  style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    background: `radial-gradient(circle, rgba(${item.colorRGB}, 0.15) 0%, transparent 70%)`,
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 2
                  }}
                />

                {/* Media Background */}
                <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
                  <WorksCardImage item={item} hovered={isHovered} />

                  {/* Heavy Gradient for text readability */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
                    zIndex: 3
                  }} />
                </div>

                {/* Top Badges */}
                <div style={{ position: "absolute", top: "20px", left: "20px", right: "20px", display: "flex", justifyContent: "space-between", zIndex: 4 }}>
                  <div style={{
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    color: item.color,
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-mono), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                  }}>
                    {item.code}
                  </div>

                  {item.badge && (
                    <div style={{
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(10px)",
                      border: `1px solid rgba(${item.colorRGB}, 0.3)`,
                      padding: "6px 12px",
                      borderRadius: "6px",
                      color: item.color,
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-mono), monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}>
                      <Trophy size={12} /> {item.badge}
                    </div>
                  )}
                </div>

                {/* Bottom Info Glass */}
                <div style={{
                  marginTop: "auto",
                  position: "relative",
                  zIndex: 4,
                  padding: "30px 20px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px"
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    {item.title}
                  </h3>
                  <div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "4px" }}>
                    <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{item.type === "project" ? "System Deployment" : "National Championship"}</span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                    <span style={{ color: item.color, fontSize: "0.85rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                      View Specs <ArrowRight size={14} style={{ transform: isHovered ? "translateX(4px)" : "none", transition: "transform 0.3s ease" }} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. PROFESSIONAL SPECIFICATION SHEET (MODAL) */}
      <div
        className={`project-detail-overlay ${activeProject !== null ? "active" : ""}`}
        onClick={() => setActiveProject(null)}
        data-lenis-prevent="true"
      >
        <div
          className="detail-panel"
          data-lenis-prevent
          onClick={(e) => e.stopPropagation()}
          style={{ background: "#0a0a0f", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}
        >
          {/* Close Trigger */}
          <button
            className="detail-close-btn"
            onClick={() => setActiveProject(null)}
            aria-label="Close specifications sheet"
          >
            <X size={20} />
          </button>

          {activeProject !== null && (
            <>
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: registryItems[activeProject].color,
                    display: "block",
                    marginBottom: "12px",
                    marginTop: "10px",
                  }}
                >
                  {registryItems[activeProject].type === "project" ? "Deployment Registry" : "Championship Credential"}
                </span>

                <h2
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "12px",
                    lineHeight: 1.1
                  }}
                >
                  {registryItems[activeProject].title}
                </h2>

                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "1rem",
                    marginBottom: "30px",
                    lineHeight: 1.5
                  }}
                >
                  {registryItems[activeProject].subtitle}
                </p>

                {/* Clean Image Viewport in Modal */}
                <div
                  style={{
                    height: "260px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    marginBottom: "32px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    background: "#09090d",
                    position: "relative",
                  }}
                >
                  {registryItems[activeProject].video ? (
                    <video
                      src={registryItems[activeProject].video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Image
                      src={registryItems[activeProject].img}
                      alt={registryItems[activeProject].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "rgba(0, 0, 0, 0.8)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "6px",
                      padding: "6px 12px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: registryItems[activeProject].color,
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontFamily: "var(--font-mono), monospace"
                    }}
                  >
                    {registryItems[activeProject].code}
                  </div>
                </div>

                {/* System Parameters Metrics */}
                <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Activity size={16} style={{ color: registryItems[activeProject].color }} /> System Metrics
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
                  {registryItems[activeProject].metricsList.map((m, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        borderRadius: "10px",
                        padding: "16px",
                        flex: "1 1 calc(33.333% - 12px)",
                        minWidth: "120px"
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          color: registryItems[activeProject].color,
                          fontSize: "1.3rem",
                          fontWeight: 800,
                          fontFamily: "var(--font-space-grotesk), sans-serif",
                          marginBottom: "4px",
                        }}
                      >
                        {m.val}
                      </span>
                      <span
                        style={{
                          color: "var(--muted-2)",
                          fontSize: "0.7rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          fontFamily: "var(--font-mono), monospace"
                        }}
                      >
                        {m.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Description Chronicle */}
                <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
                  Overview & Execution
                </h4>
                <div style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "32px", background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <p style={{ margin: "0 0 16px" }}>{registryItems[activeProject].desc}</p>
                  <p style={{ margin: 0 }}>{registryItems[activeProject].details}</p>
                </div>

                {/* Hackathon scope details */}
                {registryItems[activeProject].type === "championship" && (
                  <>
                    <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
                      Core Tested Scope
                    </h4>
                    <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "32px", background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "10px", border: "1px dashed rgba(255,255,255,0.1)" }}>
                      {registryItems[activeProject].scope}
                    </p>
                  </>
                )}

                {/* Stack Badges */}
                <h4 style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
                  Technology Stack
                </h4>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
                  {registryItems[activeProject].tags.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        background: "var(--card-bg)",
                        border: "1px solid var(--card-border)",
                        borderRadius: "6px",
                        padding: "8px 14px",
                        color: "var(--foreground)",
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-mono), monospace"
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Championship Highlight */}
                {registryItems[activeProject].achievement && (
                  <div
                    style={{
                      background: `rgba(${registryItems[activeProject].colorRGB}, 0.05)`,
                      border: `1px solid rgba(${registryItems[activeProject].colorRGB}, 0.2)`,
                      borderRadius: "10px",
                      padding: "20px",
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Trophy size={24} style={{ color: registryItems[activeProject].color }} />
                    <p style={{ color: registryItems[activeProject].color, fontSize: "0.9rem", fontWeight: 600, lineHeight: "1.5", margin: 0 }}>
                      {registryItems[activeProject].achievement}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  marginTop: "30px",
                  paddingTop: "24px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <Link
                  href="/contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px 0",
                    width: "100%",
                    background: "var(--foreground)",
                    borderRadius: "8px",
                    color: "var(--background)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                    textAlign: "center",
                    transition: "all 0.3s ease"
                  }}
                  className="btn-inverted"
                  onClick={() => setActiveProject(null)}
                >
                  {registryItems[activeProject].type === "project" ? "Deploy Similar AI System" : "Partner With NEXUS"}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
