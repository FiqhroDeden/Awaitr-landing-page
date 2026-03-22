"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  borderTopColor?: string;
}

export default function GlassCard({
  children,
  className = "",
  borderTopColor,
}: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 ${
        borderTopColor ? `border-t-3 ${borderTopColor}` : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
