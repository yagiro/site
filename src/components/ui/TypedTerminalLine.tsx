"use client";

import { useEffect, useState } from "react";

const TYPE_INTERVAL_MS = 28;
const START_DELAY_MS = 400;

export function TypedTerminalLine({ text }: { text: string }) {
  const [length, setLength] = useState(0);

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const start = setTimeout(function type() {
      setLength(i);
      i++;
      if (i <= text.length) timer = setTimeout(type, TYPE_INTERVAL_MS);
    }, START_DELAY_MS);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <span className="font-mono text-[15px] tracking-wide text-muted">
      <span className="text-accent">&gt;</span> {text.slice(0, length)}
      <span className="animate-[blink_1s_step-end_infinite] text-accent align-top">▌</span>
    </span>
  );
}
