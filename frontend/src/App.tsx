import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import BackgroundFX from "./components/BackgroundFX";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import FadeContent from "./components/FadeContent";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  // Keyboard shortcut listener ('r' for resume, 'p' for projects, 'c' for contact)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "r" || e.key === "R") {
        setResumeOpen((prev) => !prev);
      } else if (e.key === "p" || e.key === "P") {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "c" || e.key === "C") {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden font-sans text-slate-100 selection:bg-[#ff5722]/30 selection:text-white light:text-slate-900">
        {/* Dynamic Swarm Background FX */}
        <BackgroundFX />

        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Content Sections with React Bits FadeContent Animations */}
        <main>
          <FadeContent trigger="mount" duration={1.2} ease="power2.out">
            <Hero onOpenResume={() => setResumeOpen(true)} />
          </FadeContent>

          <FadeContent trigger="scroll" duration={0.9} ease="power2.out" threshold={0.12}>
            <About />
          </FadeContent>

          <FadeContent trigger="scroll" duration={0.9} ease="power2.out" threshold={0.12}>
            <Skills />
          </FadeContent>

          <FadeContent trigger="scroll" duration={0.9} ease="power2.out" threshold={0.12}>
            <Projects />
          </FadeContent>

          <FadeContent trigger="scroll" duration={0.9} ease="power2.out" threshold={0.12}>
            <Education />
          </FadeContent>

          <FadeContent trigger="scroll" duration={0.9} ease="power2.out" threshold={0.12}>
            <Contact />
          </FadeContent>
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Curriculum Vitae Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

        {/* Toast Notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0c0f1e",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "14px",
              fontSize: "13px",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}
