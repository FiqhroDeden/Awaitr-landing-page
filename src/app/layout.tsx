import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
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
  title: "Awaitr — Your Personal Waitlist Manager",
  description:
    "Track job applications, scholarships, pre-orders, permits, and events. One app to manage all your waitlists. Free, private, no account needed.",
  keywords: [
    "waitlist manager",
    "iOS app",
    "job application tracker",
    "personal organizer",
    "waitlist tracker",
  ],
  openGraph: {
    title: "Awaitr — Your Personal Waitlist Manager",
    description:
      "Track everything you're waiting for in one beautiful app. Free. Private. No account needed.",
    images: ["/images/app-icon.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awaitr — Your Personal Waitlist Manager",
    description:
      "Track everything you're waiting for in one beautiful app.",
    images: ["/images/app-icon.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
