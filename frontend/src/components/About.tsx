import { motion } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineCheckCircle,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { personal } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#ff5722]/30 bg-[#ff5722]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5722]">
            <HiOutlineUser size={13} />
            About Me
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Who I Am &amp; What I Do
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-5 md:grid-cols-12">
          {/* Main Story Card */}
          <motion.div
            whileHover={{ y: -2 }}
            className="md:col-span-8 flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/90 p-6 sm:p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80 dark:shadow-lg"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                Full Stack Web Developer
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-3">
                Hello! I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Preetabh Awasthi</strong>, a BCA student and full-stack web developer based in Lucknow, India. I specialize in building responsive frontends and reliable backends.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                My primary stack includes React, Next.js, Node.js, Express, PHP, Laravel, and MongoDB. I focus on writing clean, readable code and building intuitive user interfaces.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 border-t border-slate-200 dark:border-white/5 pt-4">
              {[
                "Full Stack Web",
                "RESTful APIs",
                "Responsive UI",
                "Database Design",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200"
                >
                  <HiOutlineCheckCircle className="text-[#ff5722] shrink-0" size={15} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location & Quick Action Card */}
          <motion.div
            whileHover={{ y: -2 }}
            className="md:col-span-4 flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80 dark:shadow-lg"
          >
            <div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-xs font-semibold mb-2">
                <HiOutlineLocationMarker className="text-[#ff5722]" size={16} />
                <span>{personal.location}</span>
              </div>
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white mb-1">
                Open for Opportunities
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Available for internships, full-time developer roles, and freelance projects.
              </p>
            </div>

            <div className="mt-5 space-y-2 border-t border-slate-200 dark:border-white/5 pt-4">
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 transition-colors hover:bg-emerald-500/25 w-full"
              >
                <FaWhatsapp size={15} />
                <span>WhatsApp Message</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white px-3.5 py-2 text-xs font-bold transition-colors w-full"
              >
                <FaGithub size={15} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
