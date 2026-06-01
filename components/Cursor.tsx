"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // Smoothing factor (the lower the value, the more the lag/fluidity)
    const cursorSpeed = 0.15;
    const dotSpeed = 0.35;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Custom animation tick loop
    let rafId: number;
    const tick = () => {
      // Smooth interpolation (lerp) for the cursor circle
      cursorX += (mouseX - cursorX) * cursorSpeed;
      cursorY += (mouseY - cursorY) * cursorSpeed;

      // Smooth interpolation for the inner dot
      dotX += (mouseX - dotX) * dotSpeed;
      dotY += (mouseY - dotY) * dotSpeed;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // Dynamic hover bindings for links and buttons
    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    const updateHoverElements = () => {
      const targets = document.querySelectorAll('a, button, [data-hover="true"], input, textarea, details summary');
      targets.forEach((elem) => {
        elem.removeEventListener("mouseenter", handleMouseEnter);
        elem.removeEventListener("mouseleave", handleMouseLeave);
        elem.addEventListener("mouseenter", handleMouseEnter, { passive: true });
        elem.addEventListener("mouseleave", handleMouseLeave, { passive: true });
      });
    };

    updateHoverElements();

    // Create a MutationObserver to listen for DOM changes (like page changes or lazy renders)
    const observer = new MutationObserver(updateHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      const targets = document.querySelectorAll('a, button, [data-hover="true"], input, textarea, details summary');
      targets.forEach((elem) => {
        elem.removeEventListener("mouseenter", handleMouseEnter);
        elem.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${hovering ? "hovering" : ""}`}
        style={{ left: "-100px", top: "-100px" }}
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{ left: "-100px", top: "-100px" }}
      />
    </>
  );
}
