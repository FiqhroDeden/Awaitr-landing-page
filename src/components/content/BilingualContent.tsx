"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface BilingualContentProps {
  en: React.ReactNode;
  id: React.ReactNode;
}

export default function BilingualContent({ en, id }: BilingualContentProps) {
  const { locale } = useLanguage();
  return <>{locale === "id" ? id : en}</>;
}
