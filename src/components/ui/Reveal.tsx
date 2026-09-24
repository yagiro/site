"use client";

import { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/** Fades + slides children in once they scroll into view. */
export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as ElementType;
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-1000 ease-reveal ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-9 scale-[0.98]"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
