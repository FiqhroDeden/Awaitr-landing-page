import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import TrustBadges from "@/components/landing/TrustBadges";
import SocialProof from "@/components/landing/SocialProof";
import ScreenshotGallery from "@/components/landing/ScreenshotGallery";
import AppInfo from "@/components/landing/AppInfo";
import FAQ from "@/components/landing/FAQ";
import DownloadCTA from "@/components/landing/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TrustBadges />
      <SocialProof />
      <ScreenshotGallery />
      <AppInfo />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
