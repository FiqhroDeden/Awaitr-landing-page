import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import ScreenshotGallery from "@/components/landing/ScreenshotGallery";
import AppInfo from "@/components/landing/AppInfo";
import DownloadCTA from "@/components/landing/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ScreenshotGallery />
      <AppInfo />
      <DownloadCTA />
    </>
  );
}
