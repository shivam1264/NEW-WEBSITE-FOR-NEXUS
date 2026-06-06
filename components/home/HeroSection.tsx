"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Box, Server, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(".hero-badge", 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 }
        )
        .fromTo(".hero-title-line", 
          { y: 50, opacity: 0, rotateX: -20 }, 
          { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.15, ease: "expo.out" }, 
          "-=0.4"
        )
        .fromTo(".hero-subheading", 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
          "-=0.6"
        )
        .fromTo(".hero-metric", 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }, 
          "-=0.4"
        )
        .fromTo(".hero-btn", 
          { scale: 0.9, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, 
          "-=0.3"
        );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="home-hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "100px 0 40px", /* Reduced padding heavily */
        overflow: "hidden"
      }}
    >
      {/* Dynamic Background Glows */}
      <div style={{
        position: "absolute",
        top: "-10%",
        left: "-10%",
        width: "50%",
        height: "50%",
        background: "radial-gradient(circle, rgba(0, 255, 171, 0.08) 0%, transparent 60%)",
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-10%",
        right: "-10%",
        width: "50%",
        height: "50%",
        background: "radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 60%)",
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px", /* Reduced gap to bring columns tighter and save vertical wrap space */
          alignItems: "center",
          position: "relative",
          zIndex: 2
        }}
      >
        {/* Left Content Area */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          {/* Top Badge */}
          <div className="hero-badge" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(0, 255, 171, 0.05)",
            border: "1px solid rgba(0, 255, 171, 0.2)",
            padding: "8px 16px",
            borderRadius: "100px",
            width: "fit-content",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(0, 255, 171, 0.1)"
          }}>
            <Sparkles size={16} color="#00FFAB" />
            <span style={{
              color: "#00FFAB",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.85rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}>
              AI & Full Stack Studio
            </span>
          </div>

          {/* Massive Headline (Split into lines for animation) */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: 0,
              perspective: "1000px"
            }}
          >
            <div className="hero-title-line" style={{ transformOrigin: "bottom center" }}>
              We Ship <span style={{ 
                background: "linear-gradient(90deg, #00FFAB, #00E5FF)", 
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(0,255,171,0.3)"
              }}>Products</span>
            </div>
            <div className="hero-title-line" style={{ transformOrigin: "bottom center" }}>
              That Actually <span style={{ 
                background: "linear-gradient(90deg, #00E5FF, #00FFAB)", 
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(0,229,255,0.3)"
              }}>Grow</span> Businesses
            </div>
          </h1>

          {/* Premium Subheading */}
          <p className="hero-subheading" style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "1.15rem",
            lineHeight: 1.6,
            maxWidth: "540px",
            margin: 0
          }}>
            NEXUS is a specialist engineering collective. We build production-grade websites, mobile apps, and AI automation systems — fast, clean, and focused on measurable results.
          </p>

          {/* Redesigned Metrics Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginTop: "8px"
          }}>
            {[
              { value: "48h", label: "PROTOTYPES" },
              { value: "180ms", label: "EDGE SPEED" },
              { value: "3+", label: "PRODUCT LANES" },
            ].map((metric, i) => (
              <div key={i} className="hero-metric" style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "16px",
                padding: "16px",
                backdropFilter: "blur(10px)",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                transition: "transform 0.3s ease, background 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
              }}>
                <span style={{ color: "#00FFAB", fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-space-grotesk)" }}>
                  {metric.value}
                </span>
                <span style={{ color: "var(--muted)", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "16px" }}>
            <Link
              href="/contact"
              className="btn-liquid-glass hero-btn"
            >
              Book A Call <ArrowRight size={16} />
            </Link>
            <Link
              href="/works"
              className="btn-liquid-glass hero-btn"
              data-hover="true"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Right Side 3D Visual */}
        <div className="hero-visual-shell" style={{ position: "relative", display: "flex", justifySelf: "center", minHeight: "500px" }}>
          <div className="char-container">
            {/* Layered glowing rings */}
            <div className="char-neon-ring ring-coral" />
            <div className="char-neon-ring ring-teal" style={{ animationDelay: "-4.5s" }} />
            
            {/* Animated Carousel of Characters */}
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image 
                src="/images/char-team.png" 
                className="char-carousel-img img-1" 
                alt="Team collaboration" 
                width={500}
                height={500}
                priority
              />
              <Image 
                src="/images/char-desk.png" 
                className="char-carousel-img img-2" 
                alt="Engineer working at desk" 
                width={500}
                height={500}
                priority
              />
              <Image 
                src="/images/char-beanbag.png" 
                className="char-carousel-img img-3" 
                alt="Engineer on beanbag" 
                width={500}
                height={500}
                priority
              />
            </div>

          {/* Floating Glass Pill 1 */}
          <div style={{
            position: "absolute",
            top: "15%",
            left: "0",
            background: "rgba(20, 25, 30, 0.6)",
            border: "1px solid rgba(0, 255, 171, 0.3)",
            padding: "12px 20px",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 30px rgba(0, 255, 171, 0.1)",
            zIndex: 2,
            animation: "manifesto-asset-float 5s ease-in-out infinite reverse"
          }}>
            <Cpu size={16} color="#00FFAB" />
            <span style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600 }}>AI Automation</span>
          </div>

          {/* Floating Glass Pill 2 */}
          <div style={{
            position: "absolute",
            top: "50%",
            right: "-5%",
            background: "rgba(20, 25, 30, 0.6)",
            border: "1px solid rgba(0, 229, 255, 0.3)",
            padding: "12px 20px",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 30px rgba(0, 229, 255, 0.1)",
            zIndex: 2,
            animation: "manifesto-asset-float 7s ease-in-out infinite 1s"
          }}>
            <Server size={16} color="#00E5FF" />
            <span style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600 }}>Cloud Architecture</span>
          </div>

          {/* Floating Glass Pill 3 */}
          <div style={{
            position: "absolute",
            bottom: "15%",
            left: "10%",
            background: "rgba(20, 25, 30, 0.6)",
            border: "1px solid rgba(255, 0, 127, 0.3)",
            padding: "12px 20px",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 30px rgba(255, 0, 127, 0.1)",
            zIndex: 2,
            animation: "manifesto-asset-float 6s ease-in-out infinite 2s"
          }}>
            <Box size={16} color="#FF007F" />
            <span style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600 }}>Custom Development</span>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
