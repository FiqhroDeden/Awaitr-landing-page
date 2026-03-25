"use client";

import { useState } from "react";
import { PRODUCT_HUNT_URL } from "@/lib/constants";

export default function ProductHuntBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-[60] bg-[#ff6154] text-white">
      <a
        href={PRODUCT_HUNT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-2.5 px-4 text-center text-sm font-medium hover:bg-[#e5574c] transition-colors"
      >
        <span className="inline-flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.604 8.4h-3.405V12h3.405a1.8 1.8 0 0 0 0-3.6ZM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0Zm1.604 14.4h-3.405V18H7.801V6h5.804a4.2 4.2 0 0 1 0 8.4Z" />
          </svg>
          <span>
            We&apos;re live on Product Hunt!{" "}
            <span className="underline underline-offset-2">Support us with an upvote</span>{" "}
            <span aria-hidden="true">&rarr;</span>
          </span>
        </span>
      </a>
      <button
        onClick={(e) => {
          e.preventDefault();
          setDismissed(true);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-white/20 transition-colors"
        aria-label="Dismiss banner"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
