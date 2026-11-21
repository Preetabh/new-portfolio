import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineX,
  HiOutlinePrinter,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { personal, education, projects } from "../data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-white/10 dark:bg-[#0c0f1d] dark:text-slate-100"
          >
            {/* Top Toolbar */}
            <div className="no-print flex items-center justify-between border-b border-slate-200 bg-slate-100/90 px-5 py-3.5 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#ff5722] text-xs font-bold text-white">
                  CV
                </span>
                <span className="text-xs font-bold text-slate-800 dark:text-white">
                  {personal.fullName} • Resume
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  <HiOutlinePrinter className="text-[#ff5722]" size={14} />
                  <span>Print / PDF</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:text-white"
                >
                  <HiOutlineX size={16} />
                </button>
              </div>
            </div>

            {/* Resume Sheet */}
            <div className="print-area overflow-y-auto p-6 sm:p-8 text-slate-800 dark:text-slate-200">
              {/* Header */}
              <div className="border-b border-slate-200 dark:border-white/10 pb-5">
                <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {personal.fullName}
                </h1>
                <p className="mt-1 text-sm font-bold text-[#ff5722]">
                  {personal.role}
                </p>

                {/* Contact Badges */}
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-300">
                  <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-[#ff5722]">
                    <HiOutlineMail className="text-[#ff5722]" size={14} />
                    <span>{personal.email}</span>
                  </a>
                  <a href={`tel:${personal.rawPhone}`} className="flex items-center gap-1.5 hover:text-[#ff5722]">
                    <HiOutlinePhone className="text-[#ff5722]" size={14} />
                    <span>{personal.phone}</span>
                  </a>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <HiOutlineLocationMarker className="text-[#ff5722]" size={14} />
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-5">
                <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ff5722]">
                  <HiOutlineBriefcase size={14} />
                  Summary
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {personal.bio}
                </p>
              </div>

              {/* Education */}
              <div className="mt-5">
                <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ff5722]">
                  <HiOutlineAcademicCap size={14} />
                  Education &amp; Experience
                </h3>
                <div className="mt-2 space-y-2">
                  {education.map((item) => (
                    <div key={item.degree} className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 dark:border-white/5 dark:bg-white/[0.02]">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-900 dark:text-white">{item.degree}</span>
                        <span className="font-mono text-slate-500 dark:text-slate-400">{item.year}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">{item.institution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#ff5722]">
                  Skills
                </h3>
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-2.5 dark:border-white/5 dark:bg-white/[0.02]">
                    <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">Frontend</span>
                    <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">
                      React, Next.js, JavaScript, TypeScript, Tailwind CSS, HTML5, CSS3
                    </span>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-2.5 dark:border-white/5 dark:bg-white/[0.02]">
                    <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">Backend &amp; DB</span>
                    <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">
                      Node.js, Express, PHP, Laravel, MongoDB, MySQL, PostgreSQL, Prisma
                    </span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#ff5722]">
                  Projects
                </h3>
                <div className="mt-2 space-y-2">
                  {projects.map((p) => (
                    <div key={p.id} className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 dark:border-white/5 dark:bg-white/[0.02]">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-900 dark:text-white">{p.title}</span>
                        <span className="font-mono text-[10px] text-[#ff5722]">{p.stack}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">{p.description}</p>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-[11px] text-[#ff5722] hover:underline"
                        >
                          <span>Live Demo</span>
                          <HiOutlineExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
