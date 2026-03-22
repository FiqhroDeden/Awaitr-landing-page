"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const screenshots = [
  "/images/appstore/image1.png",
  "/images/appstore/image2.png",
  "/images/appstore/image3.png",
  "/images/appstore/image4.png",
  "/images/appstore/image5.png",
];

const CENTER = 2;

function getCardStyle(index: number, hoveredIndex: number | null) {
  const offset = index - CENTER;
  const isHovered = hoveredIndex === index;

  const rotateY = offset * 8;
  const scale = isHovered ? 1.06 : 1 - Math.abs(offset) * 0.06;
  const translateZ = isHovered ? 50 : -Math.abs(offset) * 30;
  const opacity = isHovered ? 1 : 1 - Math.abs(offset) * 0.1;

  return {
    rotateY,
    scale,
    z: translateZ,
    opacity,
  };
}

export default function Hero() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative pt-24 pb-8 md:pt-32 md:pb-16 overflow-x-clip">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-violet/8 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-coral/6 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] rounded-full bg-amber/6 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Text content */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/app-icon.png"
              alt="Awaitr"
              width={80}
              height={80}
              className="mx-auto rounded-2xl shadow-xl animate-float mb-8"
              priority
            />
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Track Everything{" "}
            <span className="gradient-text">You&apos;re Waiting For</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Jobs, scholarships, pre-orders, permits, events — one app to manage
            all your waitlists. Free. Private. No account needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2.5 bg-violet hover:bg-violet-dark text-white px-7 py-3.5 rounded-2xl text-base font-semibold transition-all hover:shadow-xl hover:shadow-violet/25 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>
          </motion.div>
        </div>

        {/* Screenshot carousel */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Desktop: perspective fan */}
          <div
            className="hidden md:flex items-center justify-center -space-x-8 lg:-space-x-6"
            style={{ perspective: "1800px" }}
          >
            {screenshots.map((src, i) => {
              const style = getCardStyle(i, hovered);
              return (
                <motion.div
                  key={src}
                  className="flex-shrink-0 cursor-pointer"
                  style={{ zIndex: hovered === i ? 10 : 5 - Math.abs(i - CENTER) }}
                  animate={{
                    rotateY: style.rotateY,
                    scale: style.scale,
                    z: style.z,
                    opacity: style.opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    mass: 0.8,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="phone-frame w-[180px] lg:w-[220px] xl:w-[240px]">
                    <Image
                      src={src}
                      alt={`Awaitr screenshot ${i + 1}`}
                      width={520}
                      height={1128}
                      className="w-full h-auto block"
                      priority={i === CENTER}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: scrollable row */}
          <div className="md:hidden overflow-x-auto scrollbar-hide pb-4 -mx-4">
            <div className="flex gap-4 px-6 w-max">
              {screenshots.map((src, i) => (
                <motion.div
                  key={src}
                  className="phone-frame w-[200px] flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <Image
                    src={src}
                    alt={`Awaitr screenshot ${i + 1}`}
                    width={520}
                    height={1128}
                    className="w-full h-auto block"
                    priority={i === 0}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
