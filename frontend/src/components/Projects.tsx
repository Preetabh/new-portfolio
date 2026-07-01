import { motion } from "framer-motion";
import { HiOutlineLockClosed, HiOutlineArrowUpRight, HiOutlineFolder } from "react-icons/hi2";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
            <HiOutlineFolder size={14} />
            Portfolio
          </span>
          <h2 className="font-display text-3xl font-black text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Explore My Work <span className="align-middle">🕵️</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500 dark:text-slate-400">
            A collection of modern full-stack projects focused on performance, UI/UX and scalable architecture.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/70 shadow-sm backdrop-blur transition-shadow hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/5"
            >
              <div
                className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <span className="relative font-display text-2xl font-black text-white/90 drop-shadow-lg">
                  {project.title}
                </span>
                {project.locked && (
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur">
                    <HiOutlineLockClosed size={16} />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>

                {project.locked ? (
                  <div className="mt-5 flex cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-500 dark:bg-white/10 dark:text-slate-300">
                    Working on locally due to security reasons
                    <HiOutlineLockClosed size={14} />
                  </div>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-transform group-hover:scale-[1.02]"
                  >
                    View Project
                    <HiOutlineArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/10" />
    </section>
  );
}
