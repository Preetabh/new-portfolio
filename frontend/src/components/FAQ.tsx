import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineQuestionMarkCircle, HiOutlineChevronDown } from "react-icons/hi";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Full-stack web products, cross-platform mobile apps with React Native, RESTful API design, and backend architectures using .NET, PHP/Laravel, and Node.js. I specialize in building systems that require clean architecture, high responsiveness, and long-term maintainability.",
  },
  {
    question: "Do you build both mobile applications and web platforms?",
    answer:
      "Yes. I engineer cross-platform mobile applications using React Native (with smooth 60fps animations and offline support) and modern web frontends with React and Next.js, backed by scalable backend services and databases.",
  },
  {
    question: "Are you available for full-time roles or contract work?",
    answer:
      "I am currently working at DigiEpitome as a Full Stack & App Developer. I am open to discussing exciting full-time software engineering roles, mobile app projects, and well-scoped contract engagements. You can reach out directly via email or WhatsApp — I typically reply within 24 hours.",
  },
  {
    question: "How do you approach system design and database architecture?",
    answer:
      "I start with business requirements and non-functional needs (scalability, security, and response times). I design clear data flows and API contracts, choose battle-tested technologies (.NET, PHP, Node.js, MongoDB/PostgreSQL), and document key technical decisions so teams can move fast with confidence.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Section Header (saurabhshukla.com style) */}
        <div className="mb-10 text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#ff5722]/30 bg-[#ff5722]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5722]">
            <HiOutlineQuestionMarkCircle size={13} />
            Common Inquiries
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Quick answers about my technical expertise, project availability, and software engineering philosophy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 shadow-md shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80 dark:shadow-none transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 dark:text-white transition-colors hover:text-[#ff5722] focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-slate-500 dark:text-slate-400"
                  >
                    <HiOutlineChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-200/70 px-5 pt-3.5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 dark:border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
