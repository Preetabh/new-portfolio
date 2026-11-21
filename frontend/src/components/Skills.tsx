import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";
import { skills } from "../data/portfolio";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Databases" },
  { id: "tools", label: "Tools" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return skills;
    return skills.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#ff5722]/30 bg-[#ff5722]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5722]">
            <HiOutlineSparkles size={13} />
            Tech Stack
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Skills &amp; Technologies
          </h2>

          {/* Filter Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-1.5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80 max-w-md mx-auto">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative rounded-xl px-3.5 py-1 text-xs font-semibold transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-tab-pill"
                      className="absolute inset-0 rounded-xl bg-[#ff5722]"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -3 }}
                className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white/90 p-4 text-center shadow-md shadow-slate-200/40 backdrop-blur-xl transition-colors hover:border-[#ff5722]/50 dark:border-white/10 dark:bg-[#0d1020]/70 dark:shadow-none"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    color: skill.color,
                  }}
                >
                  <skill.icon size={26} />
                </div>

                <h3 className="mt-2.5 font-display text-xs font-bold text-slate-800 dark:text-white">
                  {skill.name}
                </h3>

                <span className="mt-1 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
