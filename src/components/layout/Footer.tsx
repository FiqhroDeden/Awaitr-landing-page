import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL, PRODUCT_HUNT_URL, TWITTER_URL, THREADS_URL } from "@/lib/constants";

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
            <a
              href={PRODUCT_HUNT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Awaitr on Product Hunt"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.604 8.4h-3.405V12h3.405a1.8 1.8 0 0 0 0-3.6ZM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0Zm1.604 14.4h-3.405V18H7.801V6h5.804a4.2 4.2 0 0 1 0 8.4Z" />
              </svg>
              Product Hunt
            </a>
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Follow on X (Twitter)"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X / Twitter
            </a>
            <a
              href={THREADS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Follow on Threads"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.02.88-.726 2.088-1.12 3.498-1.145l.011-.001c.952-.01 1.82.09 2.586.3.02-.5.016-.996-.012-1.478-.112-1.89-.785-2.755-2.125-2.726-1.006.013-1.71.459-2.09 1.326l-2.031-.567c.591-1.545 1.95-2.552 3.998-2.881.08-.013.16-.022.241-.03.525-.054 1.06-.048 1.596.02 1.73.22 3.027 1.07 3.588 2.746.248.741.37 1.633.366 2.664v.188c1.196.766 2.09 1.775 2.586 3.038.762 1.94.702 4.702-1.457 6.82-1.803 1.77-4.018 2.56-7.19 2.585ZM12.24 13.16c-1.065.02-1.89.283-2.394.762-.38.363-.54.79-.514 1.306.04.79.44 1.246.9 1.544.592.384 1.39.555 2.24.508 1.063-.058 1.89-.46 2.455-1.197.383-.498.67-1.149.858-1.943-.561-.202-1.178-.342-1.846-.407a9.845 9.845 0 0 0-1.699-.005v-.568Z" />
              </svg>
              Threads
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
