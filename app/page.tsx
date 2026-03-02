import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import InitiativesSection from "@/components/InitiativesSection";
import CommunitySection from "@/components/rooms/CommunityRoom";
import AdvocacySection from "@/components/rooms/AdvocacyRoom";
import ProjectsSection from "@/components/rooms/ProjectsRoom";
import VisionSection from "@/components/rooms/VisionRoom";
import JoinSection from "@/components/rooms/JoinRoom";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <InitiativesSection />
      <VisionSection />
      <CommunitySection />
      <AdvocacySection />
      <ProjectsSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
