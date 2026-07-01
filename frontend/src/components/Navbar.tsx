import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { HiOutlineMenu, HiOutlineX, HiOutlineDownload } from "react-icons/hi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../utils/cn";
import { personal } from "../data/portfolio";

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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/preetabh resume.pdf";
    link.download = "preetabh resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6",
          scrolled
            ? "border-black/5 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/40"
            : "border-transparent bg-white/40 backdrop-blur-md dark:bg-white/[0.02]"
        )}
      >
        <button
          onClick={() => scrollTo("home")}
          className="font-display text-lg font-black italic tracking-tight text-slate-900 dark:text-white"
        >
          Preetabh
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-black/5 bg-black/[0.03] p-1 dark:border-white/10 dark:bg-white/5 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === item.id
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              )}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-md shadow-indigo-500/30"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {item.label}
                {active === item.id && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white shadow-md shadow-fuchsia-500/30 transition-transform hover:scale-105"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                {theme === "dark" ? (
                  <HiOutlineSun size={18} />
                ) : (
                  <HiOutlineMoon size={18} />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={handleDownloadCV}
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-transform hover:scale-105 sm:flex"
          >
            <HiOutlineDownload size={16} />
            Download CV
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-slate-700 dark:border-white/10 dark:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-black/5 bg-white/90 p-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0d1a]/95 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
                    active === item.id
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                      : "text-slate-600 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/5"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleDownloadCV}
                className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white"
              >
                <HiOutlineDownload size={16} />
                Download CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
