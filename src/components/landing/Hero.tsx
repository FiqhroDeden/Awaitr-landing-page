"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { APP_STORE_URL, PRODUCT_HUNT_URL, PRODUCT_HUNT_BADGE_LIGHT, PRODUCT_HUNT_BADGE_DARK } from "@/lib/constants";

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
            className="relative inline-block"
          >
            <Image
              src="/images/app-icon.png"
              alt="Awaitr"
              width={80}
              height={80}
              className="mx-auto rounded-2xl shadow-xl animate-float mb-8"
              priority
            />
            {/* Just Launched badge */}
            <span className="absolute -top-2 -right-16 bg-gradient-to-r from-coral to-amber text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
              Just Launched
            </span>
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
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:-translate-y-0.5 transition-transform"
                aria-label="Download on the App Store"
              >
                <svg className="h-[52px] w-auto" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                  <rect width="120" height="40" rx="6" fill="#000" />
                  <path d="M24.769 20.3a4.949 4.949 0 0 1 2.356-4.151 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.669a10.96 10.96 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4ZM22.037 12.211a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.636 4.636 0 0 0-1.144 3.361 4.1 4.1 0 0 0 3.237-1.53Z" fill="#fff" />
                  <text x="42" y="15.5" fill="#fff" fontFamily="system-ui, -apple-system, sans-serif" fontSize="7.5" fontWeight="400" letterSpacing=".03em">Download on the</text>
                  <text x="42" y="28" fill="#fff" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="600" letterSpacing="-.01em">App Store</text>
                </svg>
              </a>
              <a
                href={PRODUCT_HUNT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:-translate-y-0.5 transition-transform"
              >
                {/* Light mode badge */}
                <img
                  src={PRODUCT_HUNT_BADGE_LIGHT}
                  alt="Awaitr - Track every waitlist in your life — free and offline | Product Hunt"
                  width={250}
                  height={54}
                  className="h-[52px] w-auto block dark:hidden"
                />
                {/* Dark mode badge */}
                <img
                  src={PRODUCT_HUNT_BADGE_DARK}
                  alt="Awaitr - Track every waitlist in your life — free and offline | Product Hunt"
                  width={250}
                  height={54}
                  className="h-[52px] w-auto hidden dark:block"
                />
              </a>
            </div>
            <p className="text-sm text-foreground/40">
              Requires iOS 26 beta &middot; Public release September 2026
            </p>
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
