"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

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
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-white text-navy px-7 py-3.5 rounded-2xl text-base font-semibold transition-all hover:shadow-2xl hover:-translate-y-0.5 hover:bg-white/95"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
