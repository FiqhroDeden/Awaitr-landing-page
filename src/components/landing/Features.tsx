"use client";

import { FEATURES } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Everything you need to{" "}
            <span className="gradient-text">stop waiting blindly</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            Four powerful features. Zero complexity. Just open the app and start
            tracking.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-5">
          {FEATURES.map((feature, i) => (
            <AnimateOnScroll key={feature.title} delay={i * 100}>
              <GlassCard
                borderTopColor={feature.borderClass}
                className="h-full hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-xl ${feature.bgClass} mb-4`}
                >
                  <span className={`text-${feature.color}`}>
                    {feature.icon}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/55 leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
