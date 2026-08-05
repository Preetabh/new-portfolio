import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX, HiOutlineDownload, HiOutlineSparkles } from "react-icons/hi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../utils/cn";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Us" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDownloadCV = () => {
    const resumePath = "/Preetabh Awasthi - Full Stack & PHP _ Laravel Developer Resume.pdf";
    window.open(resumePath, "_blank");

    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Preetabh Awasthi - Full Stack & PHP _ Laravel Developer Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-xl px-5 py-3 transition-colors duration-200",
          scrolled
            ? "border border-slate-200 bg-white/95 shadow-md dark:border-slate-800 dark:bg-[#080b18]/95"
            : "border border-transparent bg-white/50 dark:bg-transparent"
        )}
      >
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-black text-sm">
            P
          </span>
          <span>Preetabh</span>
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
        </button>

        {/* Desktop Navigation - React Bits Snappy Spring Pill */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-100/80 p-1 dark:border-slate-800 dark:bg-slate-900/80 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-xs font-semibold transition-colors duration-150",
                  isActive
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-indigo-600 shadow-sm"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-amber-400"
          >
            {theme === "dark" ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </button>

          <button
            onClick={handleDownloadCV}
            className="hidden items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition-transform active:scale-95 hover:bg-indigo-500 sm:flex"
          >
            <HiOutlineDownload size={14} />
            Download CV
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 dark:border-slate-800 dark:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX size={18} /> : <HiOutlineMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="mx-auto mt-2 max-w-6xl rounded-xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-[#080b18] md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-xs font-semibold transition-colors",
                    active === item.id
                      ? "bg-indigo-600 text-white"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                  )}
                >
                  {item.label}
                  {active === item.id && <HiOutlineSparkles size={14} />}
                </button>
              ))}
              <button
                onClick={handleDownloadCV}
                className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white"
              >
                <HiOutlineDownload size={14} />
                Download CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
