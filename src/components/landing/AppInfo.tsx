"use client";

import { APP_INFO } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function AppInfo() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            App Details
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {APP_INFO.map((info, i) => (
            <AnimateOnScroll key={info.label} delay={i * 80}>
              <GlassCard className="text-center relative">
                {info.badge && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-coral to-amber text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                    {info.badge}
                  </span>
                )}
                <p className="text-sm text-foreground/45 mb-1 font-medium uppercase tracking-wider">
                  {info.label}
                </p>
                <p className="font-display text-lg font-bold">{info.value}</p>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
