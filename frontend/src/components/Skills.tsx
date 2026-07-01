import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
            <HiOutlineSparkles size={14} />
            Tech Stack
          </span>
          <h2 className="font-display text-3xl font-black text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Web Development
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500 dark:text-slate-400">
            Tools and technologies I use to design, build and ship full-stack products.
          </p>
        </motion.div>

        <div className="space-y-14">
          {skillGroups.map((group, gi) => (
            <div key={group.title}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="mb-6 text-center text-lg font-bold text-slate-700 dark:text-slate-200"
              >
                {group.title}
              </motion.h3>
              <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: (gi * 0.05) + i * 0.03 }}
                    whileHover={{ y: -8, scale: 1.08 }}
                    className="group flex flex-col items-center gap-2"
                  >
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-black/5 bg-white/70 shadow-sm backdrop-blur transition-all duration-300 group-hover:border-transparent group-hover:shadow-lg dark:border-white/10 dark:bg-white/5 sm:h-20 sm:w-20"
                      style={{
                        boxShadow: "none",
                      }}
                    >
                      <skill.icon
                        size={30}
                        style={{ color: skill.color }}
                        className="opacity-80 transition-opacity duration-300 group-hover:opacity-100 dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]"
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-slate-400">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/10" />
    </section>
  );
}
