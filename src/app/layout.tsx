import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://awaitr.vercel.app"),
  title: "Awaitr — Track Everything You're Waiting For",
  description:
    "Personal waitlist manager for iOS 26. Track jobs, scholarships, pre-orders & more. Free, offline, no account needed.",
  keywords: [
    "waitlist manager",
    "iOS app",
    "job application tracker",
    "personal organizer",
    "waitlist tracker",
    "iOS 26",
    "free app",
    "offline app",
    "privacy",
  ],
  openGraph: {
    title: "Awaitr — Track Everything You're Waiting For",
    description:
      "Personal waitlist manager for iOS 26. Track jobs, scholarships, pre-orders & more. Free, offline, no account needed.",
    url: "https://awaitr.vercel.app",
    siteName: "Awaitr",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Awaitr — Track Everything You're Waiting For",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awaitr — Track Everything You're Waiting For",
    description:
      "Personal waitlist manager for iOS 26. Track jobs, scholarships, pre-orders & more. Free, offline, no account needed.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://awaitr.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('awaitr-theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Awaitr",
              description:
                "Personal waitlist manager for iOS 26. Track jobs, scholarships, pre-orders & more.",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "iOS 26",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              url: "https://awaitr.vercel.app",
              downloadUrl:
                "https://apps.apple.com/app/awaitr/id6760962108",
              author: {
                "@type": "Person",
                name: "Fiqhro Dedhen Supatmo",
              },
              softwareVersion: "1.0",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
