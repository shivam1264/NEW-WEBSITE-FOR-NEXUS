"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Premium entrance animation for every page route navigation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { 
          opacity: 0, 
          y: 20, 
          filter: "blur(8px)" 
        },
        { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)", 
          duration: 0.8, 
          ease: "power3.out",
          clearProps: "all"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
