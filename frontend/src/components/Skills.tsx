import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSparkles, HiOutlineTerminal } from "react-icons/hi";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...skillGroups.map((g) => g.title)];

  const filteredGroups =
    activeTab === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.title === activeTab);

  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <HiOutlineSparkles size={13} />
            Tech Stack
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            PHP, Laravel &amp; Web Technologies
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
            Tools, languages, and frameworks I use to build scalable products.
          </p>

          {/* Filter Tabs - React Bits Snappy Spring */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                    isActive
                      ? "text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-filter-tab"
                      className="absolute inset-0 rounded-full bg-indigo-600"
                      transition={{ type: "spring", stiffness: 450, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Groups */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            {filteredGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#0b0e1b] sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <HiOutlineTerminal className="text-indigo-500" size={18} />
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {group.skills.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-indigo-500 hover:bg-white hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/50 dark:hover:border-indigo-500 dark:hover:bg-slate-900"
                    >
                      <skill.icon
                        size={30}
                        style={{ color: skill.color }}
                        className="transition-transform duration-200 group-hover:scale-110"
                      />
                      <span className="mt-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
