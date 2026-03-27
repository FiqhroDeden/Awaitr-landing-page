"use client";

import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL, PRODUCT_HUNT_URL, TWITTER_URL, THREADS_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-foreground/5 bg-foreground/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/app-icon.png"
                alt="Awaitr"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <p className="font-display text-lg font-bold">Awaitr</p>
            </div>
            <p className="text-sm text-foreground/50">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-3">
              {t("footer.col.product")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  {t("footer.link.download")}
                </a>
              </li>
              <li>
                <Link href="/#features" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.link.features")}
                </Link>
              </li>
              <li>
                <Link href="/#screenshots" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.link.screenshots")}
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.link.faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-3">
              {t("footer.col.useCases")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/use-cases/job-seekers" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.link.jobSeekers")}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/students" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.link.students")}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/shoppers" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.link.shoppers")}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/government" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.link.government")}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/events" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.link.events")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-3">
              {t("footer.col.resources")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/compare" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.link.compare")}
                </Link>
              </li>
              <li>
                <Link href="/blog/losing-track" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.link.blogLosingTrack")}
                </Link>
              </li>
              <li>
                <Link href="/blog/privacy-first" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.link.blogPrivacyFirst")}
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.support")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-3">
              {t("footer.col.connect")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.appstore")}
                </a>
              </li>
              <li>
                <a href={PRODUCT_HUNT_URL} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.producthunt")}
                </a>
              </li>
              <li>
                <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.twitter")}
                </a>
              </li>
              <li>
                <a href={THREADS_URL} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.threads")}
                </a>
              </li>
              <li>
                <a href="mailto:dedhensupatmo@gmail.com" className="text-foreground/60 hover:text-foreground transition-colors">
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/40">
          <p>{t("footer.copyright")}</p>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            {t("footer.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
