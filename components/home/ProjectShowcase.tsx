"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectShowcase() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleTiltMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
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

  const handleTiltMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
      gsap.fromTo(".project-header-wrapper > *",
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".project-header-wrapper",
            start: "top 85%",
          }
        }
      );

      // Animate Cards
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

  return (
    <section ref={containerRef} className="section-padding" style={{ position: "relative", zIndex: 2 }}>
      <div className="container">
        {/* Section Header */}
        <div className="project-header-wrapper" style={{ marginBottom: "60px", maxWidth: "600px" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px", display: "inline-block" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Case Studies
          </span>
          <h2
            className="section-header-title font-display"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "20px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em"
            }}
          >
            Featured Systems <span className="font-serif-i" style={{ color: "var(--accent)" }}>Deployed</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.6" }}>
            Explore how we translate business briefs into high-impact digital systems.
          </p>
        </div>

        {/* Projects Bento Grid */}
        <div className="works-bento-layout">
          {[
            {
              id: "nexus-room",
              code: "PRJ-01",
              title: "Nexus Command Room",
              subtitle: "Centralized operational war room",
              colorRGB: "232, 96, 46",
              color: "#e8602e",
              img: "/images/custom-project-1.png",
              bentoSpan: "span-8"
            },
            {
              id: "sheild-ai",
              code: "PRJ-02",
              title: "SHEild AI Platform",
              subtitle: "AI-Powered Women Safety System",
              colorRGB: "0, 229, 255",
              color: "#00e5ff",
              images: [
                "/images/project2_img1.jpg",
                "/images/project2_img2.jpg",
                "/images/project2_img3.jpg",
                "/images/project2_img4.jpg",
                "/images/project2_img5.jpg"
              ],
              bentoSpan: "span-4"
            },
            {
              id: "customer-agent",
              code: "PRJ-03",
              title: "Movie Social App",
              subtitle: "Movie discovery and social platform",
              colorRGB: "255, 171, 0",
              color: "#ffab00",
              images: [
                "/images/project3_img1.jpg",
                "/images/project3_img2.jpg",
                "/images/project3_img3.jpg",
                "/images/project3_img4.jpg",
                "/images/project3_img5.jpg"
              ],
              bentoSpan: "span-5"
            },
            {
              id: "restaurant-app",
              code: "PRJ-04",
              title: "Restaurant App Dispatcher",
              subtitle: "White-labeled ordering system",
              colorRGB: "213, 0, 249",
              color: "#d500f9",
              img: "/images/restaurant_app_ui.png",
              bentoSpan: "span-7"
            }
          ].map((proj) => {
            const isHovered = hoveredCard === proj.id;
            return (
              <Link
                href="/works"
                key={proj.id}
                className={`works-bento-card works-animate-fade-in ${proj.bentoSpan}`}
                onMouseEnter={() => setHoveredCard(proj.id)}
                onMouseLeave={(e) => {
                  setHoveredCard(null);
                  handleTiltMouseLeave(e);
                }}
                onMouseMove={handleTiltMouseMove}
                style={{
                  "--card-theme": `rgba(${proj.colorRGB}, 0.5)`,
                  textDecoration: "none"
                } as React.CSSProperties}
              >
                {/* Glow Follower */}
                <div
                  className="bento-card-glow"
                  style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    background: `radial-gradient(circle, rgba(${proj.colorRGB}, 0.15) 0%, transparent 70%)`,
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 2
                  }}
                />

                {/* Media Background */}
                <div style={{ position: "absolute", inset: 0, zIndex: 1, overflow: "hidden" }}>
                  {proj.images ? (
                    <>
                      <style dangerouslySetInnerHTML={{__html: `
                        @keyframes scrollX-${proj.id} {
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
                          animation: `scrollX-${proj.id} 20s linear infinite`,
                          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                          transform: isHovered ? "scale(1.05) translateY(-5px)" : "scale(1) translateY(0)",
                        }}
                      >
                        {proj.images.concat(proj.images).map((img, i) => (
                          <div key={i} style={{ position: "relative", width: "160px", height: "85%", flexShrink: 0, borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                            <Image
                              src={img}
                              alt={`${proj.title} screen ${i}`}
                              fill
                              sizes="160px"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  ) : proj.video ? (
                    <video
                      src={proj.video}
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
                        transform: isHovered ? "scale(1.2)" : "scale(1.15)",
                      }}
                    />
                  ) : (
                    <Image
                      src={proj.img}
                      alt={proj.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                  )}

                  {/* Heavy Gradient for text readability */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
                    zIndex: 3
                  }} />
                </div>

                {/* Top Badge */}
                <div style={{ position: "absolute", top: "20px", left: "20px", right: "20px", display: "flex", justifyContent: "space-between", zIndex: 4 }}>
                  <div style={{
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    color: proj.color,
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-mono), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                  }}>
                    {proj.code}
                  </div>
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
                    {proj.title}
                  </h3>
                  <div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "4px" }}>
                    <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>System Deployment</span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                    <span style={{ color: proj.color, fontSize: "0.85rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                      View Specs <ArrowRight size={14} style={{ transform: isHovered ? "translateX(4px)" : "none", transition: "transform 0.3s ease" }} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
