import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import InitiativesSection from "@/components/InitiativesSection";
import AdvocacySection from "@/components/rooms/AdvocacyRoom";
import ProjectsSection from "@/components/rooms/ProjectsRoom";
import VisionSection from "@/components/rooms/VisionRoom";
import WhyNowRoom from "@/components/rooms/WhyNowRoom";
import JoinSection from "@/components/rooms/JoinRoom";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Youth for Responsible AI",
  description:
    "A youth-led community publishing content on AI safety, responsible AI, and the real risks of AI — to grow the next generation of informed decision-makers.",
  alternates: { canonical: "https://youthforresponsibleai.com" },
  openGraph: {
    title: "Youth for Responsible AI",
    description:
      "A youth-led community publishing content on AI safety, responsible AI, and the real risks of AI — to grow the next generation of informed decision-makers.",
    url: "https://youthforresponsibleai.com",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <VisionSection />
      <WhyNowRoom />
      <InitiativesSection />
      <AdvocacySection />
      <ProjectsSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
