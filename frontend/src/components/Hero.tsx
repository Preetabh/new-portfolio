import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineMail, HiOutlineTerminal } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { personal } from "../data/portfolio";

const socialLinks = [
  { icon: FaGithub, href: personal.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: personal.socials.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: personal.socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: personal.socials.instagram, label: "Instagram" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center px-4 pt-28 pb-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12">
        {/* Left Text */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Status Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Hire &amp; Freelance
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              {personal.fullName}
            </span>
          </h1>

          <h2 className="mt-4 flex flex-wrap items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-200 sm:text-2xl">
            <HiOutlineTerminal className="text-indigo-500" />
            Full Stack Developer
            <span className="rounded-md bg-indigo-500/10 px-2.5 py-0.5 text-xs font-bold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
              PHP • Laravel • React • Node
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {personal.tagline}
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("projects")}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-indigo-500"
            >
              View Projects
              <HiOutlineArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500"
            >
              <HiOutlineMail size={16} />
              Contact Me
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-medium text-slate-400">Socials:</span>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-transform hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Developer Image Card */}
        <motion.div
          className="relative lg:col-span-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-[#0b0e1b]">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/34803994/pexels-photo-34803994.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Developer workspace"
                  className="h-72 w-full object-cover sm:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* PHP Code Overlay */}
                <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/10 bg-black/80 p-2.5 backdrop-blur-sm">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="ml-1.5 font-mono text-[10px] text-slate-400">Developer.php</span>
                  </div>
                  <pre className="font-mono text-xs text-indigo-300">
                    <code>
                      <span className="text-purple-400">&lt;?php</span><br />
                      <span className="text-amber-300">$skills</span> = [<span className="text-emerald-300">&apos;PHP&apos;</span>, <span className="text-emerald-300">&apos;Laravel&apos;</span>, <span className="text-emerald-300">&apos;React&apos;</span>];
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Badge 1 */}
            <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-md dark:border-slate-800 dark:bg-[#0d1023]">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-600 text-xs font-bold text-white">
                PHP
              </span>
              <div>
                <p className="text-[10px] font-medium text-slate-400">Backend</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Laravel Dev ⚡</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
