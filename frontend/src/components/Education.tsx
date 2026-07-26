import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import { education } from "../data/portfolio";
import { cn } from "../utils/cn";

export default function Education() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <HiOutlineAcademicCap size={13} />
            Milestones
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Education &amp; Experience
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600 dark:text-slate-400">
            Academic degree and hands-on full-stack intern experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#0b0e1b]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm font-bold text-lg">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                      <HiOutlineLocationMarker className="text-indigo-500" size={14} />
                      {item.place}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <HiOutlineCalendar className="text-purple-500" size={14} />
                      {item.date}
                    </p>
                  </div>
                </div>

                <span
                  className={cn(
                    "shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold",
                    item.status === "Running"
                      ? "bg-amber-500/15 text-amber-600 dark:text-amber-300"
                      : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300"
                  )}
                >
                  {item.status}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-bold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
