import { motion } from "framer-motion";
import { HiOutlineLockClosed, HiOutlineArrowUpRight, HiOutlineFolder } from "react-icons/hi2";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <HiOutlineFolder size={13} />
            Portfolio
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Featured Full Stack Projects
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600 dark:text-slate-400">
            Real-world full-stack web applications with modern features.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-indigo-500/50 dark:border-slate-800 dark:bg-[#0b0e1b]"
            >
              {/* Banner */}
              <div
                className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <span className="relative z-10 px-4 text-center font-display text-2xl font-black text-white">
                  {project.title}
                </span>

                {project.locked && (
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white">
                    <HiOutlineLockClosed size={16} />
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-bold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {project.locked ? (
                  <div className="mt-5 flex cursor-not-allowed items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-500 dark:bg-slate-800/80 dark:text-slate-400">
                    <HiOutlineLockClosed size={14} />
                    Developing locally
                  </div>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-indigo-500"
                  >
                    View Project
                    <HiOutlineArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
