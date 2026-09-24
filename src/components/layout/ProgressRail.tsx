"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

/** Vertical scroll-progress indicator, hidden on narrow viewports. */
export function ProgressRail() {
  const pct = useScrollProgress();

  return (
    <div className="fixed inset-y-0 left-9 z-30 w-px bg-border-soft/40 max-[860px]:hidden">
      <div
        className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_12px_oklch(0.7_0.14_195)] transition-[top] duration-100 ease-linear"
        style={{ top: `${pct}%` }}
      />
    </div>
  );
}
