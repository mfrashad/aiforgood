import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import GroundTransition from "@/components/GroundTransition";
import UndergroundSection from "@/components/UndergroundSection";
import TunnelConnector from "@/components/TunnelConnector";
import CommunityRoom from "@/components/rooms/CommunityRoom";
import AdvocacyRoom from "@/components/rooms/AdvocacyRoom";
import ProjectsRoom from "@/components/rooms/ProjectsRoom";
import VisionRoom from "@/components/rooms/VisionRoom";
import JoinRoom from "@/components/rooms/JoinRoom";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Above ground */}
      <HeroSection />
      <StatsBar />

      {/* Transition */}
      <GroundTransition />

      {/* Underground colony */}
      <UndergroundSection>
        <CommunityRoom />
        <TunnelConnector />
        <AdvocacyRoom />
        <TunnelConnector showAnts={false} />
        <ProjectsRoom />
        <TunnelConnector />
        <VisionRoom />
        <TunnelConnector showAnts={false} />
        <JoinRoom />
      </UndergroundSection>

      <Footer />
    </main>
  );
}
