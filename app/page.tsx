import { HeroSection } from "@/components/home/hero-section";
import { MissionSection } from "@/components/home/mission-section";
import { ImpactSection } from "@/components/home/impact-section";
import { NewsSection } from "@/components/home/news-section";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50/30 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <NewsSection />
    </div>
  );
}
