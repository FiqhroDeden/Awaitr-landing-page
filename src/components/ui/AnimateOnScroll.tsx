"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "slide-left" | "slide-right";
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  const animClass =
    animation === "slide-left"
      ? "slide-left"
      : animation === "slide-right"
      ? "slide-right"
      : "";

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${animClass} ${
        isVisible ? "visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
