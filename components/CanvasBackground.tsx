"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number; // 3D coordinate space
  y: number;
  z: number; // Depth (1 to 1000)
  color: string;
  baseAlpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  dx: number;
  dy: number;
  length: number;
  speed: number;
  opacity: number;
  active: boolean;
}

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use default transparent context to let CSS glows show through
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;

    // Camera perspective and mouse interpolation
    const perspective = 480;
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // Star initialization
    const starCount = 180;
    const stars: Star[] = [];
    
    // Brand-aligned colors for select stars
    const colors = [
      "rgba(255, 255, 255, ",  // Warm White
      "rgba(240, 246, 255, ",  // Soft Silver-Blue
      "rgba(255, 92, 43, ",    // Brand Accent
      "rgba(0, 229, 200, ",    // Teal Accent
    ];

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        // Pick star colors: 75% white/silver, 12% orange, 13% cyan
        let colorPrefix = colors[0];
        const rand = Math.random();
        if (rand > 0.88) {
          colorPrefix = colors[2];
        } else if (rand > 0.75) {
          colorPrefix = colors[3];
        } else if (rand > 0.5) {
          colorPrefix = colors[1];
        }

        stars.push({
          // Spawn stars in a wide 3D space surrounding the camera
          x: (Math.random() - 0.5) * 2200,
          y: (Math.random() - 0.5) * 1600,
          z: Math.random() * 999 + 1,
          color: colorPrefix,
          baseAlpha: Math.random() * 0.5 + 0.25,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.025 + 0.008,
        });
      }
    };

    // Shooting Star (Meteor) Config
    const shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      length: 0,
      speed: 0,
      opacity: 0,
      active: false,
    };

    const triggerShootingStar = () => {
      // Spawn shooting star randomly in upper half, moving fast diagonally down-right
      shootingStar.x = Math.random() * (width * 0.6);
      shootingStar.y = Math.random() * (height * 0.4);
      shootingStar.speed = Math.random() * 7 + 5;
      shootingStar.dx = shootingStar.speed;
      shootingStar.dy = shootingStar.speed * 0.45;
      shootingStar.length = Math.random() * 90 + 40;
      shootingStar.opacity = 1;
      shootingStar.active = true;
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      // Re-init stars when width changes to fit screen bounding boxes
      if (stars.length === 0) {
        initStars();
      }
    };

    const drawScene = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinate tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Mouse parallax camera offsets
      const cameraOffsetX = mouse.x * 140;
      const cameraOffsetY = mouse.y * 140;

      // Render all stars
      stars.forEach((star) => {
        // Twinkle update (pulsing alpha cycle)
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.35 + 0.65;

        // Apply depth-based fade: stars further away are naturally dimmer
        const depthFade = Math.max(0, 1 - star.z / 1000);
        const finalAlpha = star.baseAlpha * twinkle * depthFade;

        // 3D-to-2D Perspective Projection + Parallax Shifting
        const scale = perspective / star.z;
        const screenX = (star.x - cameraOffsetX) * scale + width / 2;
        const screenY = (star.y - cameraOffsetY) * scale + height / 2;

        // Draw star if it falls inside visible screen bounds
        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height && finalAlpha > 0) {
          const starSize = Math.max(0.4, depthFade * 2.3);

          ctx.fillStyle = star.color + finalAlpha.toFixed(3) + ")";
          ctx.beginPath();
          ctx.arc(screenX, screenY, starSize, 0, Math.PI * 2);
          ctx.fill();

          // Add a subtle bloom glow around close, bright stars
          if (star.z < 250 && finalAlpha > 0.5) {
            ctx.fillStyle = star.color + (finalAlpha * 0.15).toFixed(3) + ")";
            ctx.beginPath();
            ctx.arc(screenX, screenY, starSize * 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Update and render shooting star
      if (shootingStar.active) {
        shootingStar.x += shootingStar.dx;
        shootingStar.y += shootingStar.dy;
        shootingStar.opacity -= 0.018; // Slow fade out

        if (shootingStar.opacity <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false;
        } else {
          // Draw diagonal tail gradient
          const grad = ctx.createLinearGradient(
            shootingStar.x,
            shootingStar.y,
            shootingStar.x - shootingStar.length,
            shootingStar.y - (shootingStar.length * 0.45)
          );
          grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(
            shootingStar.x - shootingStar.length,
            shootingStar.y - (shootingStar.length * 0.45)
          );
          ctx.stroke();
        }
      } else {
        // Random chance to spawn a shooting star
        if (Math.random() < 0.004) {
          triggerShootingStar();
        }
      }

      if (!document.hidden) {
        animationId = requestAnimationFrame(drawScene);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      // Map pointer to normalized coordinates [-0.5, 0.5]
      mouse.targetX = (event.clientX / window.innerWidth) - 0.5;
      mouse.targetY = (event.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animationId = requestAnimationFrame(drawScene);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange, { passive: true });

    resizeCanvas();
    drawScene();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
