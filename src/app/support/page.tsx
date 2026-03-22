import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/constants";
import FAQItem from "@/components/ui/FAQItem";

export const metadata: Metadata = {
  title: "Support — Awaitr",
  description: "Get help with Awaitr. FAQ, contact, and support resources.",
};

export default function SupportPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <Image
            src="/images/app-icon.png"
            alt="Awaitr"
            width={48}
            height={48}
            className="rounded-xl"
          />
          <div>
            <h1 className="font-display text-3xl font-bold">Awaitr Support</h1>
            <p className="text-foreground/50 text-sm">
              We&apos;re here to help
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="font-display text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="glass rounded-2xl p-2">
            <div className="px-4">
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="glass rounded-2xl p-8 text-center">
          <h2 className="font-display text-xl font-bold mb-3">
            Still need help?
          </h2>
          <p className="text-foreground/60 mb-6">
            Reach out and we&apos;ll get back to you as soon as possible.
          </p>
          <a
            href="mailto:awaitr.app@gmail.com"
            className="inline-flex items-center gap-2 bg-violet hover:bg-violet-dark text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-violet/25"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            awaitr.app@gmail.com
          </a>
        </div>

        {/* Download CTA */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-violet hover:text-violet-dark font-semibold transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download Awaitr on the App Store
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-foreground/10">
          <Link
            href="/"
            className="text-violet hover:text-violet-dark transition-colors font-medium text-sm"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
