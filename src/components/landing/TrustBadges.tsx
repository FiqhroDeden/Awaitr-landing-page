"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { APP_STORE_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-violet">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    text: "Available on the App Store",
    href: APP_STORE_URL,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-green">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    text: "Free · No Ads · No Account Required",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-amber">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    text: "100% Offline · Your Data Stays on Your Device",
  },
];

export default function TrustBadges() {
  const { t } = useLanguage();
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10">
            {badges.map((badge, i) => {
              const content = (
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70">
                  {badge.icon}
                  {t(`trust.${i}`)}
                </span>
              );

              return badge.href ? (
                <a
                  key={i}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {badge.icon}
                  {t(`trust.${i}`)}
                </a>
              ) : (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70"
                >
                  {badge.icon}
                  {t(`trust.${i}`)}
                </span>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
