"use client";

import Image from "next/image";
import { SHOWCASE_ITEMS } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ScreenshotGallery() {
  return (
    <section id="screenshots" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            See it in action
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            Designed for clarity. Built for speed. Beautiful on every screen.
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col gap-20">
          {SHOWCASE_ITEMS.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimateOnScroll
                key={item.title}
                animation={isEven ? "slide-left" : "slide-right"}
                delay={0}
              >
                <div
                  className={`relative rounded-3xl ${item.bg} p-6 sm:p-10 md:p-14 overflow-hidden`}
                >
                  <div
                    className={`flex flex-col ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center gap-8 md:gap-14`}
                  >
                    {/* Text */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-[#1A1A2E] dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-[#1A1A2E]/70 dark:text-white/60 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Screenshot */}
                    <div className="flex-shrink-0">
                      <div className="phone-frame w-[220px] sm:w-[260px] mx-auto">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={520}
                          height={1128}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
