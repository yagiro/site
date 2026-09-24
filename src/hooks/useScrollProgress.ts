"use client";

import { useEffect, useState } from "react";

/** Percentage (0–100) the page has been scrolled through. */
export function useScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const value = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setPct(isFinite(value) ? Math.min(100, Math.max(0, value)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return pct;
}
