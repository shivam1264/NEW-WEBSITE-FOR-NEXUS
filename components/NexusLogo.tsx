"use client";

import React from "react";

export default function NexusLogo({ size = 26, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: "10px",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        ...style
      }}
      className="nexus-logo-icon"
    >
      {/* Outer Hexagon wireframe */}
      <polygon
        points="16,2 29,9.5 29,22.5 16,30 3,22.5 3,9.5"
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth="1.5"
        className="logo-hexagon"
      />
      {/* Intersecting N paths */}
      <path
        d="M10,21 L10,11 L22,21 L22,11"
        stroke="url(#nexus-grad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="logo-n-path"
      />
      {/* Glow connection nodes */}
      <circle cx="10" cy="11" r="1.8" fill="#ffffff" />
      <circle cx="22" cy="21" r="1.8" fill="#ffffff" />
      
      <defs>
        <linearGradient id="nexus-grad" x1="10" y1="11" x2="22" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffa07a" />
          <stop offset="50%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="#d500f9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
