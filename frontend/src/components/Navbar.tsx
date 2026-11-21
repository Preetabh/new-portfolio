import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineDocumentText,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { personal } from "../data/portfolio";
import { cn } from "../utils/cn";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Experience" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 sm:py-3",
          scrolled
            ? "border border-slate-200/80 bg-white/90 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0d1b]/90 dark:shadow-black/40"
            : "border border-transparent bg-transparent"
        )}
      >
        {/* Brand */}
        <button
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#ff5722] to-[#ff8a65] text-sm font-black text-white shadow-md shadow-[#ff5722]/30 transition-transform group-hover:scale-105">
            P
          </div>
          <div>
            <div className="font-display text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
              {personal.name}
              <span className="text-[#ff5722]">.dev</span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-100/80 p-1.5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-xs font-semibold transition-colors duration-150 focus:outline-none",
                  isActive
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-[#ff5722] shadow-md shadow-[#ff5722]/40"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 rounded-xl border border-[#ff5722]/30 bg-[#ff5722]/10 px-3.5 py-1.5 text-xs font-bold text-[#ff5722] transition-all hover:bg-[#ff5722] hover:text-white"
          >
            <HiOutlineDocumentText size={15} />
            <span>Resume</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
          >
            {theme === "dark" ? <HiOutlineSun size={17} /> : <HiOutlineMoon size={17} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition-colors hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white md:hidden"
          >
            {mobileOpen ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#0a0d1b]/95 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-colors",
                    active === item.id
                      ? "bg-[#ff5722] text-white"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                  )}
                >
                  <span>{item.label}</span>
                  {active === item.id && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-200 dark:border-white/10 pt-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <FaGithub size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <FaWhatsapp size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
