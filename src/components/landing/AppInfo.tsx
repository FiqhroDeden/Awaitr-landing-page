"use client";

import { APP_INFO } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AppInfo() {
  const { t } = useLanguage();
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("appinfo.heading")}
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {APP_INFO.map((info, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <GlassCard className="text-center relative">
                {info.badge && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-coral to-amber text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                    {t(`appinfo.${i}.badge`)}
                  </span>
                )}
                <p className="text-sm text-foreground/45 mb-1 font-medium uppercase tracking-wider">
                  {t(`appinfo.${i}.label`)}
                </p>
                <p className="font-display text-lg font-bold">{t(`appinfo.${i}.value`)}</p>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
