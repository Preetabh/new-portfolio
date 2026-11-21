import { HiOutlineArrowUp } from "react-icons/hi";
import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { personal } from "../data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-white/95 text-slate-700 px-4 py-10 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-[#060814]/90 dark:text-slate-300">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#ff5722] text-xs font-black text-white shadow-md shadow-[#ff5722]/30">
              P
            </div>
            <div>
              <div className="font-display text-sm font-bold text-slate-900 dark:text-white">
                {personal.fullName}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                {personal.role}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-400">
            {["home", "about", "skills", "projects", "education", "contact"].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollTo(sec)}
                className="capitalize hover:text-[#ff5722] transition-colors"
              >
                {sec}
              </button>
            ))}
          </div>

          {/* Socials & Top */}
          <div className="flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              <FaGithub size={14} />
            </a>

            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-emerald-600 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
            >
              <FaWhatsapp size={14} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-[#ff5722] transition-colors dark:border-white/10 dark:bg-white/5"
            >
              <FaEnvelope size={12} />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to Top"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff5722] text-white shadow-md transition-transform hover:-translate-y-0.5"
            >
              <HiOutlineArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-200 dark:border-white/5 pt-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
