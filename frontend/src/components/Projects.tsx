import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineFolder,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolio";

const FILTER_TABS = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai", label: "AI Tools" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return true;
    if (activeTab === "fullstack") return p.category === "fullstack";
    if (activeTab === "ai") return p.category === "ai";
    return true;
  });

  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Header (saurabhshukla.com style) */}
        <div className="mb-10 text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#ff5722]/30 bg-[#ff5722]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5722]">
            <HiOutlineFolder size={13} />
            Shipped Software
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Products That Scale
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Production applications, mobile tools, and full-stack platforms engineered with clean architecture and modern frameworks.
          </p>

          {/* Filter Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-1.5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80 max-w-xs mx-auto">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative rounded-xl px-3.5 py-1 text-xs font-bold transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="proj-tab-pill"
                      className="absolute inset-0 rounded-xl bg-[#ff5722]"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-colors hover:border-[#ff5722]/50 dark:border-white/10 dark:bg-[#0d1020]/80 dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="rounded-md bg-[#ff5722]/15 px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#ff5722]">
                      {project.stack}
                    </span>
                    {project.liveUrl && !project.liveUrl.includes("github.com") && (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Demo
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-[#ff5722] dark:text-white dark:group-hover:text-[#ff8a65] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-5 flex items-center gap-2 border-t border-slate-200 dark:border-white/5 pt-3.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#ff5722] px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#ff7043]"
                    >
                      <span>View Live</span>
                      <HiOutlineArrowTopRightOnSquare size={13} />
                    </a>
                  )}

                  <a
                    href={project.githubUrl || "https://github.com/preetabh"}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white transition-colors"
                  >
                    <FaGithub size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
