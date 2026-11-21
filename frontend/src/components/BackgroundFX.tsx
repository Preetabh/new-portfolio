import SwarmCursor from "./SwarmCursor";
import { useTheme } from "../context/ThemeContext";

export default function BackgroundFX() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden select-none">
      {/* Base Background Color */}
      <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#070913] transition-colors duration-300" />

      {/* Subtle Cyber Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-15 transition-opacity"
        style={{
          backgroundImage: isLight
            ? "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)"
            : "linear-gradient(to right, rgba(255, 87, 34, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 87, 34, 0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient Radial Gradient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#ff5722]/15 via-purple-600/10 to-transparent blur-[130px] opacity-70 dark:opacity-100" />
      <div className="pointer-events-none absolute -bottom-40 right-10 h-[450px] w-[600px] rounded-full bg-gradient-to-t from-cyan-500/10 via-blue-600/5 to-transparent blur-[130px] opacity-70 dark:opacity-100" />

      {/* React Bits SwarmCursor Fullscreen Canvas */}
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <SwarmCursor
          key={isLight ? "swarm-light" : "swarm-dark"}
          count={750}
          size={2.5}
          spread={85}
          swirl={0.6}
          speed={1}
          wander={0.5}
          color={isLight ? "#334155" : "#ff8a65"}
          accentColor="#ff5722"
          clickEffect="burst"
          lightMode={isLight}
          targets="a, button, [data-swarm-target]"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
