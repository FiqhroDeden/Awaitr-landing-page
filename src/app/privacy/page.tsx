import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Awaitr",
  description: "Awaitr privacy policy. We collect zero data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <Image
            src="/images/app-icon.png"
            alt="Awaitr"
            width={48}
            height={48}
            className="rounded-xl"
          />
          <div>
            <h1 className="font-display text-3xl font-bold">Privacy Policy</h1>
            <p className="text-foreground/50 text-sm">
              Last updated: March 22, 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <p className="text-foreground/70 text-lg leading-relaxed">
            Awaitr (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how the app
            handles your information.
          </p>

          <Section title="Data Collection">
            Awaitr does NOT collect, store, transmit, or share any personal data.
            The app is designed to be fully offline and does not connect to any
            external servers.
          </Section>

          <Section title="Data Storage">
            All data you enter into Awaitr (waitlist items, notes, dates,
            preferences) is stored locally on your device using Apple&apos;s
            SwiftData framework. This data never leaves your device.
          </Section>

          <Section title="Analytics & Tracking">
            Awaitr does not use any analytics services, crash reporting tools,
            advertising SDKs, or tracking technologies. We have zero visibility
            into how you use the app.
          </Section>

          <Section title="Notifications">
            Awaitr uses local notifications (Apple&apos;s UserNotifications
            framework) to send you follow-up reminders. These notifications are
            processed entirely on your device and are never sent through external
            servers.
          </Section>

          <Section title="Third-Party Services">
            Awaitr uses zero third-party libraries or services. The app is built
            entirely with Apple&apos;s native frameworks.
          </Section>

          <Section title="Data Export">
            You can export your data as a CSV file using the app&apos;s built-in
            export feature. This file is generated locally and shared through
            iOS&apos;s native share sheet — we never see or access this data.
          </Section>

          <Section title="Children's Privacy">
            Awaitr does not collect any data from anyone, including children
            under 13.
          </Section>

          <Section title="Changes to This Policy">
            We may update this Privacy Policy from time to time. Any changes will
            be reflected on this page with an updated date.
          </Section>

          <Section title="Contact">
            If you have questions about this privacy policy, contact us at:{" "}
            <a
              href="mailto:awaitr.app@gmail.com"
              className="text-violet hover:text-violet-dark transition-colors font-medium"
            >
              awaitr.app@gmail.com
            </a>
          </Section>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/10">
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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold mb-3">{title}</h2>
      <p className="text-foreground/65 leading-relaxed">{children}</p>
    </div>
  );
}
