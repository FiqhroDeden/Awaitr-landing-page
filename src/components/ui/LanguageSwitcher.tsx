"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center rounded-xl border border-foreground/10 overflow-hidden text-xs font-semibold">
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "en"
            ? "bg-foreground/10 text-foreground"
            : "text-foreground/40 hover:text-foreground/60"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLocale("id")}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "id"
            ? "bg-foreground/10 text-foreground"
            : "text-foreground/40 hover:text-foreground/60"
        }`}
        aria-label="Switch to Bahasa Indonesia"
      >
        ID
      </button>
    </div>
  );
}
