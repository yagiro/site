"use client";

import { useEffect, useRef } from "react";

/** A soft radial highlight that follows the pointer. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-5 pointer-events-none mix-blend-screen"
      style={{
        background:
          "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), var(--color-accent-glow), transparent 65%)",
      }}
    />
  );
}
