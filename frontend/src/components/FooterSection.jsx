import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-200 py-10 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/preetabh-awasthi-070836290/"
            target="_blank"
            className="text-slate-700 hover:text-blue-500 dark:text-slate-200 dark:hover:text-blue-400 text-2xl transition-colors duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/vishubbk"
            target="_blank"
            className="text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white text-2xl transition-colors duration-300"
          >
            <FaGithub />
          </a>




        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a
            href="#home"
            className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
          >
            Projects
          </a>

          <a
            href="#education"
            className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
          >
            Education
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-200/80 dark:border-slate-700/80 pt-6 text-center text-xs text-slate-500 dark:text-slate-400">
        © 2026 Ankit. Designed and developed with care.
      </div>
    </footer>
  );
}
