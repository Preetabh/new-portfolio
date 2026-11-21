import SwarmCursor from "./SwarmCursor";
import { useTheme } from "../context/ThemeContext";

const FLOATING_CODE_TOKENS = [
  { token: "{ }", left: "6%", top: "12%", delay: "0s", duration: "12s" },
  { token: "</>", left: "22%", top: "28%", delay: "0.8s", duration: "14s" },
  { token: "API", left: "82%", top: "15%", delay: "1.4s", duration: "13s" },
  { token: "::", left: "52%", top: "8%", delay: "2.1s", duration: "15s" },
  { token: "=>", left: "91%", top: "42%", delay: "2.8s", duration: "16s" },
  { token: "[]", left: "8%", top: "68%", delay: "3.5s", duration: "17s" },
  { token: "git push", left: "74%", top: "72%", delay: "1.2s", duration: "18s" },
  { token: "React Native", left: "16%", top: "84%", delay: "2.4s", duration: "15s" },
  { token: ".NET", left: "88%", top: "88%", delay: "0.5s", duration: "13s" },
  { token: "PHP", left: "38%", top: "92%", delay: "3.1s", duration: "16s" },
  { token: "async/await", left: "60%", top: "35%", delay: "1.9s", duration: "14s" },
];

export default function BackgroundFX() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden select-none">
      {/* 1. Base Canvas Theme Layer (saurabhshukla.com dark surface: #0a0e17) */}
      <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0e17] transition-colors duration-500" />

      {/* 2. saurabhshukla.com Signature 48px Precision Grid with Radial Mask */}
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-75 dark:opacity-60 transition-opacity"
        style={{
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 95%)",
        }}
      />

      {/* 3. Floating Code Tokens (as seen on saurabhshukla.com) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {FLOATING_CODE_TOKENS.map((item, idx) => (
          <span
            key={idx}
            className="floating-code-item absolute font-mono text-xs select-none font-semibold text-slate-400/30 dark:text-slate-500/25"
            style={
              {
                left: item.left,
                top: item.top,
                "--fc-delay": item.delay,
                "--fc-duration": item.duration,
              } as React.CSSProperties
            }
          >
            {item.token}
          </span>
        ))}
      </div>

      {/* 4. Soft Warm Ambient Accent Glow (Top Center) */}
      <div
        className="pointer-events-none absolute -top-44 left-1/2 h-[520px] w-[850px] -translate-x-1/2 rounded-full blur-[140px] opacity-60 dark:opacity-40 transition-opacity"
        style={{
          background: isLight
            ? "radial-gradient(ellipse at center, rgba(232, 93, 4, 0.12), rgba(99, 102, 241, 0.05), transparent 75%)"
            : "radial-gradient(ellipse at center, rgba(255, 107, 74, 0.22), rgba(124, 58, 237, 0.12), transparent 75%)",
        }}
      />

      {/* 5. User's Interactive SwarmCursor Mouse Background Animation (PRESERVED) */}
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <SwarmCursor
          key={isLight ? "swarm-light-saurabh" : "swarm-dark-saurabh"}
          count={380}
          size={2.2}
          spread={80}
          swirl={0.55}
          speed={0.95}
          tail={0.5}
          trail={0.55}
          wander={0.35}
          depth={0.7}
          color={isLight ? "#64748b" : "#ff8a65"}
          accentColor="#e85d04"
          clickEffect="burst"
          lightMode={isLight}
          targets="a, button, [data-swarm-target]"
          className="h-full w-full"
        />
      </div>

      {/* 6. Subtle Matte Film Grain Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
