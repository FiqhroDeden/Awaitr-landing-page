"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import GlassCard from "@/components/ui/GlassCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const cards = [
  {
    href: "/use-cases/job-seekers",
    color: "violet",
    bgClass: "bg-violet/10 dark:bg-violet/20",
    borderClass: "border-t-violet",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    ),
  },
  {
    href: "/use-cases/students",
    color: "green",
    bgClass: "bg-green/10 dark:bg-green/20",
    borderClass: "border-t-green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    href: "/blog/privacy-first",
    color: "amber",
    bgClass: "bg-amber/10 dark:bg-amber/20",
    borderClass: "border-t-amber",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    href: "/compare",
    color: "coral",
    bgClass: "bg-coral/10 dark:bg-coral/20",
    borderClass: "border-t-coral",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

export default function WhyAwaitr() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("whyAwaitr.heading")}
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            {t("whyAwaitr.subheading")}
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <Link href={card.href} className="block group">
                <GlassCard
                  borderTopColor={card.borderClass}
                  className="h-full hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl ${card.bgClass} mb-4`}>
                    <span className={`text-${card.color}`}>{card.icon}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-violet transition-colors">
                    {t(`whyAwaitr.${i}.title`)}
                  </h3>
                  <p className="text-foreground/55 leading-relaxed">
                    {t(`whyAwaitr.${i}.description`)}
                  </p>
                </GlassCard>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
