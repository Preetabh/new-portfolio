import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { education } from "../data/portfolio";
import { cn } from "../utils/cn";

export default function Education() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
            <HiOutlineAcademicCap size={14} />
            Timeline
          </span>
          <h2 className="font-display text-3xl font-black text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Education &amp; Experience
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500 dark:text-slate-400">
            Academic milestones designed for both light and dark mode with modern UI polish.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur transition-shadow hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/5"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/0 via-transparent to-fuchsia-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-indigo-500/5 group-hover:to-fuchsia-500/5" />
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-2xl shadow-md shadow-indigo-500/30">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                      <span>📍</span>
                      {item.place}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                      <span>📅</span>
                      {item.date}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1 text-xs font-semibold",
                    item.status === "Running"
                      ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                      : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                  )}
                >
                  {item.status}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/10" />
    </section>
  );
}
