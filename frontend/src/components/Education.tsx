import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { experience, education } from "../data/portfolio";

export default function Education() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="education" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#ff5722]/30 bg-[#ff5722]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5722]">
            <HiOutlineBriefcase size={13} />
            Career History
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Where I&apos;ve Shipped
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Chronological journey across full-time engineering roles, remote team development, US internships, and academic foundation.
          </p>

          {/* Toggle Tabs */}
          <div className="mt-6 flex justify-center">
            <div className="flex gap-1.5 rounded-2xl border border-slate-200 bg-white/90 p-1.5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80">
              <button
                type="button"
                onClick={() => setActiveTab("experience")}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-1.5 text-xs font-bold transition-colors ${
                  activeTab === "experience"
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {activeTab === "experience" && (
                  <motion.span
                    layoutId="exp-edu-pill"
                    className="absolute inset-0 rounded-xl bg-[#ff5722]"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <HiOutlineBriefcase className="relative z-10" size={14} />
                <span className="relative z-10">Work Experience ({experience.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("education")}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-1.5 text-xs font-bold transition-colors ${
                  activeTab === "education"
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {activeTab === "education" && (
                  <motion.span
                    layoutId="exp-edu-pill"
                    className="absolute inset-0 rounded-xl bg-[#ff5722]"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <HiOutlineAcademicCap className="relative z-10" size={14} />
                <span className="relative z-10">Education ({education.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === "experience" ? (
            <motion.div
              key="exp-list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {experience.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 sm:p-6 shadow-lg shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80 dark:shadow-none transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
                        <span className="text-xs font-semibold text-[#ff5722]">
                          @ {item.company}
                        </span>
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <HiOutlineLocationMarker className="text-[#ff5722]" size={13} />
                          {item.location}
                        </span>
                        <span>•</span>
                        <span className="font-mono text-[#ff5722] font-semibold">{item.period}</span>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono font-semibold ${
                        item.status === "Current"
                          ? "border border-emerald-500/30 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                          : "border border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                      }`}
                    >
                      {item.status === "Current" && (
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                      {item.status}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-slate-200/80 dark:border-white/5 pt-3">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-mono font-medium text-slate-700 dark:bg-white/5 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="edu-list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-lg shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80 dark:shadow-none"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                        {item.institution}
                      </p>
                      <p className="mt-1 font-mono text-[11px] text-[#ff5722]">
                        {item.year}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-mono font-semibold ${
                        item.status === "In Progress"
                          ? "border border-amber-500/30 bg-amber-500/15 text-amber-600 dark:text-amber-300"
                          : "border border-emerald-500/30 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
