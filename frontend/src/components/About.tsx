import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { aboutParagraphs, stats } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
            About Me
          </span>
          <h2 className="font-display text-3xl font-black text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Who I am <span className="align-middle">🤔</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-fuchsia-500/30 blur-2xl" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl shadow-indigo-500/20"
            >
              <img
                src="/images/avatar.png"
                alt="Preetabh Awasthi avatar"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>

          <div>
            {aboutParagraphs.map((p, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300"
                dangerouslySetInnerHTML={{
                  __html: p.replace(
                    "Preetabh Awasthi",
                    "<strong class='text-slate-900 dark:text-white'>Preetabh Awasthi</strong>"
                  ),
                }}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-black/5 bg-white/70 p-4 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-display text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/10" />
    </section>
  );
}

export function SectionKicker({ icon: Icon = HiOutlineAcademicCap, label }: { icon?: any; label: string }) {
  return (
    <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
      <Icon size={14} />
      {label}
    </span>
  );
}
