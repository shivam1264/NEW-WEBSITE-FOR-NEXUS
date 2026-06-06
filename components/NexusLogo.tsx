"use client";

import React from "react";
import Image from "next/image";

export default function NexusLogo({ size = 26, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <Image 
      src="/images/logo.png" 
      alt="Nexus Logo"
      width={size}
      height={size}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: "10px",
        objectFit: "contain",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        ...style
      }}
      className="nexus-logo-icon"
    />
  );
}
