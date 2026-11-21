import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#ff5722]/30 bg-[#ff5722]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5722]">
            <HiOutlineAcademicCap size={13} />
            Milestones
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Education &amp; Experience
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <motion.div
              key={item.degree}
              whileHover={{ y: -2 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
