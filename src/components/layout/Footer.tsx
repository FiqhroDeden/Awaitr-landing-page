import Image from "next/image";
import Link from "next/link";

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
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-foreground/5 text-center text-sm text-foreground/40">
          &copy; 2026 Awaitr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
