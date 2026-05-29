import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import EductionSection from "@/components/EductionSection";
import ProjectsSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";
// bg-gradient-to-r from-[#373941] via-[#272B38] to-[#121A2B]

export default function Home() {
  return (
    <div className="font-regular w-full h-full cursor-pointer">
      <CustomCursor />
      <Navbar />

      <section id="home">
        <HomeSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="eduction">
        <EductionSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <section id="footer">
        <FooterSection />
      </section>
    </div>
  );
}
