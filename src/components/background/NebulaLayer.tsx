"use client";

import { useEffect, useRef } from "react";

/** Two soft parallaxing glows behind the page content. */
export function NebulaLayer() {
  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;
    const apply = () => {
      ticking = false;
      const sy = window.scrollY || 0;
      if (topRef.current) topRef.current.style.transform = `translateY(${sy * 0.12}px)`;
      if (bottomRef.current) bottomRef.current.style.transform = `translateY(${-sy * 0.08}px)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        ref={topRef}
        className="fixed top-[-10%] left-[-10%] z-0 h-[60vw] w-[60vw] rounded-full pointer-events-none blur-[60px]"
        style={{
          background: "radial-gradient(circle, oklch(0.35 0.09 300 / 0.35), transparent 70%)",
        }}
      />
      <div
        ref={bottomRef}
        className="fixed bottom-[-15%] right-[-10%] z-0 h-[55vw] w-[55vw] rounded-full pointer-events-none blur-[70px]"
        style={{
          background: "radial-gradient(circle, oklch(0.32 0.09 195 / 0.3), transparent 70%)",
        }}
      />
    </>
  );
}
