"use client";

import Image from "next/image";

export default function TechMarquee() {
  const techsRow1 = [
    { name: "React", slug: "react", color: "#00d8ff", rgb: "0, 216, 255" },
    { name: "Next.js", slug: "nextdotjs", color: "#ffffff", rgb: "255, 255, 255" },
    { name: "Python", slug: "python", color: "#3776ab", rgb: "55, 118, 171" },
    { name: "FastAPI", slug: "fastapi", color: "#009688", rgb: "0, 150, 136" },
    { name: "Flutter", slug: "flutter", color: "#02569b", rgb: "2, 86, 155" },
    { name: "PostgreSQL", slug: "postgresql", color: "#336791", rgb: "51, 103, 145" },
    { name: "Docker", slug: "docker", color: "#2496ED", rgb: "36, 150, 237" },
  ];

  const techsRow2 = [
    { name: "LangChain", slug: "langchain", color: "#00e676", rgb: "0, 230, 118" },
    { name: "Vercel", slug: "vercel", color: "#ffffff", rgb: "255, 255, 255" },
    { name: "TypeScript", slug: "typescript", color: "#3178c6", rgb: "49, 120, 198" },
    { name: "TensorFlow", slug: "tensorflow", color: "#ff6f00", rgb: "255, 111, 0" },
    { name: "Firebase", slug: "firebase", color: "#ffca28", rgb: "255, 202, 40" },
    { name: "Node.js", slug: "nodedotjs", color: "#339933", rgb: "51, 153, 51" },
    { name: "Supabase", slug: "supabase", color: "#3ECF8E", rgb: "62, 207, 142" },
  ];

  const renderTrack = (techs: any[], reverse: boolean) => {
    // Duplicate multiple times for smooth infinite scroll
    const multipliedTechs = [...techs, ...techs, ...techs, ...techs, ...techs];
    return (
      <div 
        className="tech-track-container" 
        style={{
          display: "flex",
          width: "max-content",
          animation: `scroll ${reverse ? "50s" : "45s"} linear infinite ${reverse ? "reverse" : "normal"}`,
          gap: "24px",
          paddingLeft: "24px"
        }}
      >
        {multipliedTechs.map((tech, i) => (
          <div
            key={i}
            className="modern-tech-pill"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px 36px",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              borderRadius: "100px",
              backdropFilter: "blur(12px)",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `rgba(${tech.rgb}, 0.08)`;
              e.currentTarget.style.borderColor = `rgba(${tech.rgb}, 0.4)`;
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 10px 30px rgba(${tech.rgb}, 0.15)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace("#", "")}`}
              alt={`${tech.name} logo`}
              style={{
                width: "28px",
                height: "28px",
                objectFit: "contain",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))"
              }}
            />
            <span style={{ 
              color: "#ffffff", 
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 600,
              fontSize: "1.15rem",
              letterSpacing: "0.02em"
            }}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section style={{
      padding: "80px 0",
      position: "relative",
      zIndex: 2,
      background: "radial-gradient(ellipse at center, rgba(0, 229, 255, 0.04) 0%, transparent 60%)",
      borderTop: "1px solid rgba(255,255,255,0.03)",
      borderBottom: "1px solid rgba(255,255,255,0.03)",
      overflow: "hidden"
    }}>
      {/* Inline Styles for Marquee Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}} />

      <div className="container" style={{ marginBottom: "60px", textAlign: "center" }}>
        <h3 style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "1.6rem",
          fontWeight: 700,
          color: "var(--foreground)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          letterSpacing: "0.02em",
          textTransform: "uppercase"
        }}>
          <span style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, var(--accent))" }} />
          Powered by Modern Tech
          <span style={{ width: "60px", height: "2px", background: "linear-gradient(-90deg, transparent, var(--teal))" }} />
        </h3>
      </div>

      {/* The scrolling tracks masked perfectly at the edges */}
      <div className="marquee-mask" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {renderTrack(techsRow1, false)}
        {renderTrack(techsRow2, true)}
      </div>

    </section>
  );
}
