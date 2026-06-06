"use client";

import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let offset = 0;

    // Stars
    interface Star {
      x: number;
      y: number;
      r: number;
      alpha: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }
    const stars: Star[] = [];

    const mouse = { x: 0.5, y: 0.5, active: false };

    const initStars = () => {
      stars.length = 0;
      const starCount = Math.floor((width * height) / 8000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.58, // only in upper portion
          r: Math.random() * 1.2 + 0.2,
          alpha: Math.random() * 0.6 + 0.15,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    };

    const drawBackground = () => {
      // Dark background gradient — very deep black with slight green undertone
      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, "#020907");
      bg.addColorStop(0.45, "#030C08");
      bg.addColorStop(1, "#051510");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);
    };

    const drawStars = (time: number) => {
      stars.forEach((star) => {
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        const alpha = star.alpha * twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        // Slight green-tinted bloom on brighter stars
        if (star.r > 0.9) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 171, ${alpha * 0.08})`;
          ctx.fill();
        }
      });
    };

    const drawPerspectiveGrid = (time: number) => {
      // Vanishing point — center horizontally, ~42% from top
      const vpX = width / 2;
      const vpY = height * 0.42;

      // The grid plane starts at the vanishing point and goes to the bottom
      const gridBottom = height + 60;
      const gridHeight = gridBottom - vpY;

      // How wide the grid spreads at the bottom
      const gridSpread = width * 1.35;

      // ─── VERTICAL LINES (fan out from vanishing point) ───
      const numVerticals = 24;
      for (let i = 0; i <= numVerticals; i++) {
        const t = i / numVerticals; // 0 → 1
        const bottomX = vpX - gridSpread / 2 + gridSpread * t;

        // Lines near the center are brighter
        const centerDist = Math.abs(t - 0.5); // 0 = center, 0.5 = edge
        const lineAlpha = 0.06 + (0.5 - centerDist) * 0.28;

        // Gradient fade — invisible at horizon, visible at bottom
        const grad = ctx.createLinearGradient(vpX, vpY, bottomX, gridBottom);
        grad.addColorStop(0, `rgba(0, 255, 171, 0)`);
        grad.addColorStop(0.15, `rgba(0, 255, 171, ${lineAlpha * 0.3})`);
        grad.addColorStop(0.6, `rgba(0, 255, 171, ${lineAlpha * 0.8})`);
        grad.addColorStop(1, `rgba(0, 255, 171, ${lineAlpha})`);

        ctx.beginPath();
        ctx.moveTo(vpX, vpY);
        ctx.lineTo(bottomX, gridBottom);
        ctx.strokeStyle = grad;
        ctx.lineWidth = centerDist < 0.05 ? 1.5 : 0.9;
        ctx.stroke();
      }

      // ─── HORIZONTAL LINES (animated — flow toward viewer) ───
      const numHorizontals = 14;
      // Speed of the flowing grid animation
      const speed = 0.35;
      offset = (offset + speed) % (gridHeight / numHorizontals);

      for (let i = 0; i < numHorizontals + 2; i++) {
        // Raw position in [0,1]
        const rawT = i / numHorizontals + offset / gridHeight;
        const t = rawT % 1;

        // Perspective warping: exponential to create depth illusion
        const perspT = Math.pow(t, 2.8);
        const y = vpY + perspT * gridHeight;

        if (y < vpY || y > gridBottom + 10) continue;

        // How far along the grid floor (0 = horizon, 1 = viewer's feet)
        const ratio = (y - vpY) / gridHeight;

        // Width of this horizontal line — tapers to 0 at horizon
        const halfWidth = (gridSpread / 2) * ratio;
        const leftX = vpX - halfWidth;
        const rightX = vpX + halfWidth;

        // Alpha: faint near horizon, stronger near viewer
        const hAlpha = Math.pow(ratio, 0.6) * 0.5;

        // Horizontal fade (brightest in center, fades to edge)
        const hGrad = ctx.createLinearGradient(leftX, y, rightX, y);
        hGrad.addColorStop(0, `rgba(0, 255, 171, 0)`);
        hGrad.addColorStop(0.08, `rgba(0, 255, 171, ${hAlpha})`);
        hGrad.addColorStop(0.5, `rgba(0, 255, 171, ${hAlpha * 1.1})`);
        hGrad.addColorStop(0.92, `rgba(0, 255, 171, ${hAlpha})`);
        hGrad.addColorStop(1, `rgba(0, 255, 171, 0)`);

        ctx.beginPath();
        ctx.moveTo(leftX, y);
        ctx.lineTo(rightX, y);
        ctx.strokeStyle = hGrad;
        ctx.lineWidth = 0.8 + ratio * 0.5;
        ctx.stroke();
      }

      // ─── HORIZON GLOW ───
      const horizonGlow = ctx.createRadialGradient(
        vpX, vpY, 0,
        vpX, vpY, width * 0.55
      );
      horizonGlow.addColorStop(0, "rgba(0, 255, 171, 0.10)");
      horizonGlow.addColorStop(0.35, "rgba(0, 255, 171, 0.04)");
      horizonGlow.addColorStop(1, "rgba(0, 255, 171, 0)");
      ctx.fillStyle = horizonGlow;
      ctx.fillRect(0, vpY - height * 0.15, width, height * 0.35);

      // ─── HORIZON LINE ───
      const hLine = ctx.createLinearGradient(0, vpY, width, vpY);
      hLine.addColorStop(0, "rgba(0, 255, 171, 0)");
      hLine.addColorStop(0.25, "rgba(0, 255, 171, 0.18)");
      hLine.addColorStop(0.5, "rgba(0, 255, 171, 0.30)");
      hLine.addColorStop(0.75, "rgba(0, 255, 171, 0.18)");
      hLine.addColorStop(1, "rgba(0, 255, 171, 0)");
      ctx.beginPath();
      ctx.moveTo(0, vpY);
      ctx.lineTo(width, vpY);
      ctx.strokeStyle = hLine;
      ctx.lineWidth = 1;
      ctx.stroke();

      // ─── MOUSE SPOTLIGHT ───
      if (mouse.active) {
        const spotX = mouse.x * width;
        const spotY = mouse.y * height;
        const spotGrad = ctx.createRadialGradient(
          spotX, spotY, 0,
          spotX, spotY, width * 0.25
        );
        spotGrad.addColorStop(0, "rgba(0, 255, 171, 0.05)");
        spotGrad.addColorStop(1, "rgba(0, 255, 171, 0)");
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }
    };

    const drawVignette = () => {
      // Dark vignette edges
      const vig = ctx.createRadialGradient(
        width / 2, height / 2, height * 0.3,
        width / 2, height / 2, Math.max(width, height) * 0.85
      );
      vig.addColorStop(0, "rgba(2, 9, 7, 0)");
      vig.addColorStop(1, "rgba(2, 9, 7, 0.65)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, width, height);

      // Top sky darkness
      const topFade = ctx.createLinearGradient(0, 0, 0, height * 0.35);
      topFade.addColorStop(0, "rgba(2, 9, 7, 0.9)");
      topFade.addColorStop(1, "rgba(2, 9, 7, 0)");
      ctx.fillStyle = topFade;
      ctx.fillRect(0, 0, width, height * 0.35);
    };

    const drawScene = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      drawBackground();
      drawStars(time * 0.001);
      drawPerspectiveGrid(time * 0.001);
      drawVignette();

      animationId = requestAnimationFrame(drawScene);
    };

    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX / width;
      mouse.y = e.clientY / height;
      mouse.active = true;
    };
    const onPointerLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    resizeCanvas();
    animationId = requestAnimationFrame(drawScene);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}
