"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { APP_STORE_URL, PRODUCT_HUNT_URL, PRODUCT_HUNT_BADGE_LIGHT } from "@/lib/constants";

export default function DownloadCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="relative rounded-3xl overflow-hidden noise-bg">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet via-coral/80 to-amber opacity-90" />

            <div className="relative z-10 px-6 py-16 sm:py-20 text-center">
              <Image
                src="/images/app-icon.png"
                alt="Awaitr"
                width={72}
                height={72}
                className="mx-auto rounded-2xl shadow-2xl mb-8"
              />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to track everything?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
                Download Awaitr for free and never lose track of what you&apos;re
                waiting for again.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:-translate-y-0.5 transition-transform"
                  aria-label="Download on the App Store"
                >
                  <svg className="h-[52px] w-auto" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                    <rect width="120" height="40" rx="6" fill="#fff" />
                    <path d="M24.769 20.3a4.949 4.949 0 0 1 2.356-4.151 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.669a10.96 10.96 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4ZM22.037 12.211a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.636 4.636 0 0 0-1.144 3.361 4.1 4.1 0 0 0 3.237-1.53Z" fill="#1A1A2E" />
                    <text x="42" y="15.5" fill="#1A1A2E" fontFamily="system-ui, -apple-system, sans-serif" fontSize="7.5" fontWeight="400" letterSpacing=".03em">Download on the</text>
                    <text x="42" y="28" fill="#1A1A2E" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="600" letterSpacing="-.01em">App Store</text>
                  </svg>
                </a>
                <a
                  href={PRODUCT_HUNT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:-translate-y-0.5 transition-transform"
                >
                  <img
                    src={PRODUCT_HUNT_BADGE_LIGHT}
                    alt="Awaitr on Product Hunt"
                    width={250}
                    height={54}
                    className="h-[52px] w-auto"
                  />
                </a>
              </div>
              <p className="mt-3 text-sm text-white/50">
                Requires iOS 26 beta &middot; Public release September 2026
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
