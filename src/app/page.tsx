import AboutSection from "@/components/sections/AboutSection";
import CustomCursor from "@/components/animation/CustomCursor";
import ScrollProgress from "@/components/animation/ScrollProgress";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AcademicsSection from "@/components/sections/AcademicsSection";
import CampusLifeSection from "@/components/sections/CampusLifeSection";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#07111f] text-white">
      <ScrollProgress />
      <CustomCursor />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <CampusLifeSection />
      </main>

      <Footer />
    </div>
  );
}