"use client";

import FAQItem from "@/components/ui/FAQItem";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { FAQ_ITEMS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            {t("faq.heading")}
          </h2>
          <p className="text-foreground/60 text-center mb-12 max-w-lg mx-auto">
            {t("faq.subheading")}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <div className="divide-y divide-foreground/8">
            {FAQ_ITEMS.map((_, i) => (
              <FAQItem
                key={i}
                question={t(`faq.${i}.question`)}
                answer={t(`faq.${i}.answer`)}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
