"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { value: "Swift 6.2", label: "Pure Native" },
  { value: "0", label: "Third-Party Deps" },
  { value: "< 15 MB", label: "App Size" },
  { value: "iOS 26", label: "Liquid Glass UI" },
];

export default function SocialProof() {
  const { t } = useLanguage();
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="rounded-2xl border border-foreground/5 bg-foreground/[0.02] px-6 py-8 sm:py-10">
            <p className="text-center text-sm font-medium text-foreground/40 uppercase tracking-wider mb-6">
              {t("social.heading")}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-foreground/50 mt-1">{t(`social.${i}.label`)}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
