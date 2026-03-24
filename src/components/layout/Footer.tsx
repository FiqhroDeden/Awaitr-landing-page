import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 bg-foreground/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/app-icon.png"
              alt="Awaitr"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <div>
              <p className="font-display text-lg font-bold">Awaitr</p>
              <p className="text-sm text-foreground/50">
                Your personal waitlist manager
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/support"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Support
            </Link>
            <a
              href="mailto:dedhensupatmo@gmail.com"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground/60 hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-foreground/5 text-center text-sm text-foreground/40">
          &copy; 2026 Awaitr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
