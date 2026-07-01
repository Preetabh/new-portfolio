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
import ScrollTopButton from "./components/ScrollTopButton";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden font-sans text-slate-900 selection:bg-indigo-500/30 dark:text-white">
        <BackgroundFX />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollTopButton />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#12142a",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}
