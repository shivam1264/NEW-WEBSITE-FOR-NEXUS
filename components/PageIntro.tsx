"use client";

import { useEffect, useState } from "react";
import NexusLogo from "./NexusLogo";

export default function PageIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1850);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="page-intro" aria-hidden="true">
      <div className="intro-panel intro-panel-top" />
      <div className="intro-panel intro-panel-bottom" />
      <div className="intro-core">
        <div className="intro-mark">
          <NexusLogo size={42} style={{ marginRight: 0 }} />
        </div>
        <div className="intro-wordmark">
          <span>Team</span>
          <strong>Nexus</strong>
        </div>
        <div className="intro-line">
          <span />
        </div>
      </div>
    </div>
  );
}
