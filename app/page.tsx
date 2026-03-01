import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import InitiativesSection from "@/components/InitiativesSection";
import GroundTransition from "@/components/GroundTransition";
import BiomeSection from "@/components/BiomeSection";
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

      {/* Transition to underground */}
      <GroundTransition />

      {/* ── Swamp Biome: Stats + Initiatives ── */}
      <BiomeSection
        bgImage="/sprites/biome-swamp.jpg"
        tintColor="#0A1A0D"
        glowColor="rgba(76, 175, 80, 0.04)"
        transitionFrom="#5C3A1E"
        transitionTo="#0D0A1A"
        bgOpacity={0.2}
        biomeClass="biome-swamp"
      >
        <StatsBar />
        <InitiativesSection />
        <TunnelConnector showAnts={false} />
      </BiomeSection>

      {/* ── Crystal Cave Biome: Community ── */}
      <BiomeSection
        bgImage="/sprites/cave-bg-main.jpg"
        tintColor="#0D0A1A"
        glowColor="rgba(139, 92, 246, 0.04)"
        transitionFrom="#0D0A1A"
        transitionTo="#0A1520"
        bgOpacity={0.25}
        biomeClass="biome-crystal"
      >
        <CommunityRoom />
        <TunnelConnector />
      </BiomeSection>

      {/* ── Mushroom Forest Biome: Advocacy ── */}
      <BiomeSection
        bgImage="/sprites/biome-mushroom.jpg"
        tintColor="#0A1520"
        glowColor="rgba(45, 212, 191, 0.04)"
        transitionFrom="#0A1520"
        transitionTo="#081018"
        bgOpacity={0.2}
        biomeClass="biome-mushroom"
      >
        <AdvocacyRoom />
        <TunnelConnector showAnts={false} />
      </BiomeSection>

      {/* ── Underground Lake Biome: Projects ── */}
      <BiomeSection
        bgImage="/sprites/biome-lake.jpg"
        tintColor="#081018"
        glowColor="rgba(56, 189, 248, 0.04)"
        transitionFrom="#081018"
        transitionTo="#1A0A05"
        bgOpacity={0.25}
        biomeClass="biome-lake"
      >
        <ProjectsRoom />
        <TunnelConnector />
      </BiomeSection>

      {/* ── Lava Cavern Biome: Vision ── */}
      <BiomeSection
        bgImage="/sprites/biome-lava.jpg"
        tintColor="#1A0A05"
        glowColor="rgba(255, 158, 109, 0.05)"
        transitionFrom="#1A0A05"
        transitionTo="#12100A"
        bgOpacity={0.2}
        biomeClass="biome-lava"
      >
        <VisionRoom />
        <TunnelConnector showAnts={false} />
      </BiomeSection>

      {/* ── Ancient Dungeon Biome: Join ── */}
      <BiomeSection
        bgImage="/sprites/biome-dungeon.jpg"
        tintColor="#12100A"
        glowColor="rgba(218, 165, 32, 0.04)"
        transitionFrom="#12100A"
        transitionTo="#0D0A1A"
        bgOpacity={0.25}
        biomeClass="biome-dungeon"
      >
        <JoinRoom />
      </BiomeSection>

      <Footer />
    </main>
  );
}
