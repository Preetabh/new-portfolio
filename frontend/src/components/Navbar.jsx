"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [activeSection, setActiveSection] = useState("#home");
  const isDark = theme === "dark";

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY + 300;

      let currentSection = "#home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetTop + height) {
          currentSection = `#${section}`;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = (section) => {
    const isActive = activeSection === section;

    return `relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
      isActive
        ? "text-white shadow-[0_0_25px_rgba(5,118,255,0.45)] scale-105"
        : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-3 bg-white/75 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800/70 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold italic text-slate-900 dark:text-white transition-colors duration-300">
            Preetabh
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-2 bg-white/90 dark:bg-slate-950/90 px-3 py-2 rounded-full shadow-lg border border-slate-200/70 dark:border-slate-800/70 transition-colors duration-300">
          <Link
            href="/#home"
            onClick={() => setActiveSection("#home")}
            className={navClasses("#home")}
          >
            {activeSection === "#home" && (
              <span className="absolute inset-0 bg-gradient-to-r from-[#0576ff] via-[#4f8cff] to-[#7eb3ff] rounded-full shadow-[0_0_25px_rgba(5,118,255,0.6)]"></span>
            )}
            <span className="relative z-10 flex items-center gap-2">
              Home
              {activeSection === "#home" && (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              )}
            </span>
          </Link>

          <Link
            href="/#about"
            onClick={() => setActiveSection("#about")}
            className={navClasses("#about")}
          >
            {activeSection === "#about" && (
              <span className="absolute inset-0 bg-gradient-to-r from-[#0576ff] via-[#4f8cff] to-[#7eb3ff] rounded-full shadow-[0_0_25px_rgba(5,118,255,0.6)]"></span>
            )}
            <span className="relative z-10 flex items-center gap-2">
              About
              {activeSection === "#about" && (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              )}
            </span>
          </Link>

          <Link
            href="/#projects"
            onClick={() => setActiveSection("#projects")}
            className={navClasses("#projects")}
          >
            {activeSection === "#projects" && (
              <span className="absolute inset-0 bg-gradient-to-r from-[#0576ff] via-[#4f8cff] to-[#7eb3ff] rounded-full shadow-[0_0_25px_rgba(5,118,255,0.6)]"></span>
            )}
            <span className="relative z-10 flex items-center gap-2">
              Projects
              {activeSection === "#projects" && (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              )}
            </span>
          </Link>

          <Link
            href="/#contact"
            onClick={() => setActiveSection("#contact")}
            className={navClasses("#contact")}
          >
            {activeSection === "#contact" && (
              <span className="absolute inset-0 bg-gradient-to-r from-[#0576ff] via-[#4f8cff] to-[#7eb3ff] rounded-full shadow-[0_0_25px_rgba(5,118,255,0.6)]"></span>
            )}
            <span className="relative z-10 flex items-center gap-2">
              Contact Us
              {activeSection === "#contact" && (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              )}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {mounted ? (
              isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )
            ) : (
              <span className="w-5 h-5" />
            )}
          </button>

          <a
            href="/resume/Preetabh_Awasthi_Resume.pdf"
            download="Preetabh_Awasthi_Resume.pdf"
            className="hidden md:inline-flex px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-700 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-400 hover:to-pink-500"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
