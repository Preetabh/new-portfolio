import { motion } from "framer-motion";
import { HiOutlineUser, HiOutlineCheckCircle } from "react-icons/hi";
import { aboutParagraphs, stats } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <HiOutlineUser size={13} />
            About Me
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Passionate Full-Stack Developer
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600 dark:text-slate-400">
            Building robust web applications with PHP, Laravel &amp; Modern JS stacks.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Avatar Container */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-xs">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-md dark:border-slate-800 dark:bg-[#0b0e1b]">
                <img
                  src="/images/avatar.png"
                  alt="Preetabh Awasthi avatar"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-md dark:border-slate-800 dark:bg-slate-900">
                <HiOutlineCheckCircle className="text-emerald-500" size={16} />
                <span className="text-xs font-bold text-slate-900 dark:text-white">Full Stack</span>
              </div>
            </div>
          </div>

          {/* Paragraphs & Stats */}
          <div className="lg:col-span-7">
            <div className="space-y-3.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              {aboutParagraphs.map((p, i) => (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: p
                      .replace(
                        "Preetabh Awasthi",
                        "<strong class='font-bold text-indigo-600 dark:text-indigo-400'>Preetabh Awasthi</strong>"
                      )
                      .replace(
                        "PHP, Laravel,",
                        "<strong class='font-bold text-purple-600 dark:text-purple-400'>PHP, Laravel,</strong>"
                      ),
                  }}
                />
              ))}
            </div>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-slate-200 bg-white p-3.5 text-center shadow-sm dark:border-slate-800 dark:bg-[#0b0e1b]"
                >
                  <p className="font-display text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
