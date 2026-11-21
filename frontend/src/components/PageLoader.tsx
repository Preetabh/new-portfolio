import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(55), 180);
    const timer2 = setTimeout(() => setProgress(88), 380);
    const timer3 = setTimeout(() => setProgress(100), 580);
    const timer4 = setTimeout(() => setLoading(false), 820);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070913] text-white"
        >
          {/* Glowing Aura */}
          <div className="absolute h-64 w-64 rounded-full bg-[#ff5722]/20 blur-[90px] animate-pulse" />

          {/* Logo Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#ff5722] to-[#ff8a65] text-2xl font-black text-white shadow-xl shadow-[#ff5722]/30"
          >
            P
            <span className="absolute -inset-1 rounded-2xl border border-[#ff5722]/40 animate-ping opacity-50" />
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-center mb-6"
          >
            <h1 className="font-display text-xl font-bold tracking-tight text-white">
              Preetabh Awasthi
            </h1>
            <p className="text-xs font-mono text-[#ff8a65] mt-1">
              Full Stack Web Developer
            </p>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-48 overflow-hidden rounded-full bg-white/10 p-0.5">
            <motion.div
              className="h-1 rounded-full bg-gradient-to-r from-[#ff5722] to-[#ff8a65] shadow-[0_0_10px_#ff5722]"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
