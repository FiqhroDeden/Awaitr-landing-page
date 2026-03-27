"use client";

import { FEATURES } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Features() {
  const { t } = useLanguage();
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("features.heading1")}
            <span className="gradient-text">{t("features.heading2")}</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            {t("features.subheading")}
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
                  {t(`features.${i}.title`)}
                </h3>
                <p className="text-foreground/55 leading-relaxed">
                  {t(`features.${i}.description`)}
                </p>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
