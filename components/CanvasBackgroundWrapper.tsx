"use client";

import dynamic from "next/dynamic";

const CanvasBackground = dynamic(() => import("./CanvasBackground"), {
  ssr: false,
});

export default function CanvasBackgroundWrapper() {
  return <CanvasBackground />;
}
