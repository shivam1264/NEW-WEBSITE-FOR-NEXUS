"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Trophy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HackathonShowcase() {
  const [ticImageIdx, setTicImageIdx] = useState(0);
  const [ticHovered, setTicHovered] = useState(false);
  const [bgiImageIdx, setBgiImageIdx] = useState(0);
  const [bgiHovered, setBgiHovered] = useState(false);

  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate Section Header
      gsap.fromTo(".hackathon-header-wrapper > *",
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".hackathon-header-wrapper",
            start: "top 85%",
          }
        }
      );

      // Animate Cards
      gsap.fromTo(".pod-direction",
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: {
            trigger: ".pod-direction",
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(".pod-product",
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: {
            trigger: ".pod-product",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (ticHovered) return;
    const interval = setInterval(() => {
      setTicImageIdx((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [ticHovered]);

  useEffect(() => {
    if (bgiHovered) return;
    const interval = setInterval(() => {
      setBgiImageIdx((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [bgiHovered]);

  return (
    <section
      ref={containerRef}
      className="section-padding"
      style={{
        background: "transparent",
        position: "relative",
        zIndex: 2,
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="container">
        <div className="hackathon-header-wrapper" style={{ marginBottom: "40px" }}>
          <span className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "8px" }}>
            <span className="pulsing-dot pulsing-dot-coral" />
            Championship Credentials
          </span>
          <h2
            className="section-header-title font-display"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            National Hackathons <span className="font-serif-i" style={{ color: "var(--accent)" }}>Won</span>
          </h2>
          <p style={{ color: "#A0A0A0", fontSize: "0.95rem", marginTop: "8px" }}>
            Our engineering team has competed nationally, building and scaling systems under intense time pressure.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateRows: "1fr", gap: "40px" }}>
          {/* SIH Card */}
          <div
            className="pod-direction"
            data-hover="true"
            style={{
              background: "var(--card-bg)",
              border: "1px solid rgba(255, 214, 0, 0.25)",
              borderRadius: "24px",
              padding: "clamp(20px, 4vw, 40px)",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "var(--card-shadow)",
            }}
          >
            {/* Metadata Left */}
            <div style={{ flex: "1 1 500px", maxWidth: "650px" }}>
              <div
                className="eyebrow-mono"
                style={{
                  padding: "6px 14px",
                  background: "rgba(255, 214, 0, 0.08)",
                  border: "1px solid rgba(255, 214, 0, 0.25)",
                  borderRadius: "99px",
                  color: "#b59600",
                  marginBottom: "20px",
                }}
              >
                <Trophy size={12} style={{ display: "inline-block", marginRight: "6px", verticalAlign: "middle" }} /> 🏆 GRAND PRIZE WINNER
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  marginBottom: "12px",
                }}
              >
                Technocrats Innovation Challenge <span className="font-serif-i" style={{ color: "var(--accent)" }}>(TIC 2K26)</span>
              </h3>
              <span
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  color: "var(--accent)",
                  fontWeight: 700,
                  marginBottom: "18px",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                Organized by Technocrats Institute of Technology & Science, Bhopal | First Prize Winner
              </span>

              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                Out of <strong style={{ color: "var(--foreground)" }}>200+ competing teams</strong> and innovators across multiple institutions, NEXUS secured the <strong style={{ color: "var(--accent)" }}>1st Prize (₹20,000)</strong> at the prestigious Technocrats Innovation Challenge 2K26. Through a demanding <strong style={{ color: "var(--foreground)" }}>36-hour innovation sprint</strong>, our team successfully advanced through multiple evaluation rounds and emerged as the overall champions with <strong style={{ color: "var(--foreground)" }}>SHEild AI</strong>, an AI-powered platform focused on Women Safety, Empowerment, and Social Impact.
              </p>

              <div
                style={{
                  borderLeft: "2px solid var(--accent)",
                  paddingLeft: "16px",
                  background: "rgba(255, 92, 43, 0.03)",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                <strong style={{ color: "var(--foreground)", fontSize: "0.88rem", display: "block", marginBottom: "4px" }}>
                  Core Tested Scope:
                </strong>
                <span style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: "1.4" }}>
                  Developed and deployed an intelligent assistance ecosystem integrating <strong style={{ color: "var(--foreground)" }}>AI-driven emergency response</strong>, <strong style={{ color: "var(--foreground)" }}>safety analytics</strong>, and <strong style={{ color: "var(--foreground)" }}>real-time support features</strong>. The solution was evaluated on <strong style={{ color: "var(--foreground)" }}>innovation, scalability, social impact, technical execution, and user experience</strong> under intensive hackathon conditions.
                </span>
              </div>
            </div>

            {/* Full Background Photo with Hover Name Reveal - SIH */}
            <div
              className="hackathon-photo-card"
              style={{
                border: "1px solid rgba(255, 214, 0, 0.15)",
              }}
              onMouseEnter={() => setTicHovered(true)}
              onMouseLeave={() => setTicHovered(false)}
            >
              <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                <Image
                  src="/images/hackathon_tic.jpg"
                  alt="Technocrats Innovation Challenge championship stage"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: ticImageIdx === 0 ? 1 : 0,
                    transform: ticHovered ? "scale(1.07)" : "scale(1)",
                    zIndex: ticImageIdx === 0 ? 1 : 0,
                  }}
                />
                <Image
                  src="/images/hackathon_tic_2.jpg"
                  alt="Technocrats Innovation Challenge 1st prize certificate"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: ticImageIdx === 1 ? 1 : 0,
                    transform: ticHovered ? "scale(1.07)" : "scale(1)",
                    zIndex: ticImageIdx === 1 ? 1 : 0,
                  }}
                />
              </div>
              {/* Always-visible subtle bottom gradient */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                pointerEvents: "none",
                zIndex: 2,
              }} />
              {/* Hover Overlay */}
              <div
                className="hackathon-hover-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(30,20,0,0.85) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  opacity: ticHovered ? 1 : 0,
                  transform: ticHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: "24px",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Trophy size={32} style={{ color: "#ffd600", filter: "drop-shadow(0 0 12px rgba(255,214,0,0.6))" }} />
                <span style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  fontFamily: "var(--font-display), sans-serif",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}>Technocrats Innovation Challenge</span>
                <span style={{
                  fontSize: "0.8rem",
                  color: "#ffd600",
                  fontWeight: 700,
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>🏆 GRAND PRIZE WINNER · ₹20,000</span>
              </div>
            </div>
          </div>

          {/* AI Innovation Challenge Card */}
          <div
            className="pod-product"
            data-hover="true"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "24px",
              padding: "clamp(20px, 4vw, 40px)",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "var(--card-shadow)",
            }}
          >
            {/* Metadata Left */}
            <div style={{ flex: "1 1 500px", maxWidth: "650px" }}>
              <div
                className="eyebrow-mono"
                style={{
                  padding: "6px 14px",
                  background: "var(--accent-muted)",
                  border: "1px solid rgba(255, 92, 43, 0.15)",
                  borderRadius: "999px",
                  color: "var(--accent)",
                  marginBottom: "20px",
                }}
              >
                <Trophy size={12} style={{ display: "inline-block", marginRight: "6px", verticalAlign: "middle" }} /> 🥈 NATIONAL RUNNER-UP
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  marginBottom: "12px",
                }}
              >
                BGI Hackathon 2026 <span className="font-serif-i" style={{ color: "var(--accent)" }}>(Vision 2047 | Viksit Bharat)</span>
              </h3>
              <span
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  color: "var(--accent)",
                  fontWeight: 700,
                  marginBottom: "18px",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                Organized by Bansal Group of Institutes &amp; MPSEDC | National Runner-Up
              </span>

              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                Competing against <strong style={{ color: "var(--foreground)" }}>600+ teams</strong> and over <strong style={{ color: "var(--foreground)" }}>2,800 participants</strong> from across India, NEXUS secured the <strong style={{ color: "var(--accent)" }}>Runner-Up Position (₹12,000)</strong> at the prestigious BGI Hackathon 2026 held in Bhopal. Through multiple rounds of technical evaluation, mentorship sessions, and final pitching, our team demonstrated exceptional innovation and execution with <strong style={{ color: "var(--foreground)" }}>SHEild AI</strong>, an intelligent safety platform designed to empower women and vulnerable communities.
              </p>

              <div
                style={{
                  borderLeft: "2px solid var(--accent)",
                  paddingLeft: "16px",
                  background: "rgba(255, 92, 43, 0.02)",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                <strong style={{ color: "var(--foreground)", fontSize: "0.88rem", display: "block", marginBottom: "4px" }}>
                  Core Tested Scope:
                </strong>
                <span style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: "1.4" }}>
                  AI-driven safety ecosystem integrating <strong style={{ color: "var(--foreground)" }}>risk-aware navigation</strong>, <strong style={{ color: "var(--foreground)" }}>emergency response automation</strong>, <strong style={{ color: "var(--foreground)" }}>intelligent alerts</strong>, and <strong style={{ color: "var(--foreground)" }}>real-time assistance mechanisms</strong> validated during a <strong style={{ color: "var(--foreground)" }}>national-level innovation challenge</strong>.
                </span>
              </div>
            </div>

            {/* Full Background Photo with Hover Name Reveal - AI Innovation Challenge */}
            <div
              className="hackathon-photo-card"
              style={{
                border: "1px solid var(--card-border)",
              }}
              onMouseEnter={() => setBgiHovered(true)}
              onMouseLeave={() => setBgiHovered(false)}
            >
              <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                <Image
                  src="/images/hackathon_bgi.jpg"
                  alt="BGI Hackathon 2026 championship stage"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: bgiImageIdx === 0 ? 1 : 0,
                    transform: bgiHovered ? "scale(1.07)" : "scale(1)",
                    zIndex: bgiImageIdx === 0 ? 1 : 0,
                  }}
                />
                <Image
                  src="/images/hackathon_bgi_2.png"
                  alt="BGI Hackathon 2026 runner-up certificate"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.8s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: bgiImageIdx === 1 ? 1 : 0,
                    transform: bgiHovered ? "scale(1.07)" : "scale(1)",
                    zIndex: bgiImageIdx === 1 ? 1 : 0,
                  }}
                />
              </div>
              {/* Always-visible subtle bottom gradient */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                pointerEvents: "none",
                zIndex: 2,
              }} />
              {/* Hover Overlay */}
              <div
                className="hackathon-hover-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,20,30,0.85) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  opacity: bgiHovered ? 1 : 0,
                  transform: bgiHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: "24px",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Trophy size={32} style={{ color: "#00e5ff", filter: "drop-shadow(0 0 12px rgba(0,229,255,0.6))" }} />
                <span style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  fontFamily: "var(--font-display), sans-serif",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}>BGI Hackathon 2026</span>
                <span style={{
                  fontSize: "0.8rem",
                  color: "#00e5ff",
                  fontWeight: 700,
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>🥈 NATIONAL RUNNER-UP · ₹12,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
