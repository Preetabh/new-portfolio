import { useEffect, useState } from "react";

interface GridScanProps {
  gridSize?: number;
  scanSpeed?: number; // duration in seconds
  gridColorDark?: string;
  gridColorLight?: string;
  scanColorDark?: string;
  scanColorLight?: string;
}

export default function GridScan({
  gridSize = 44,
  scanSpeed = 6,
  gridColorDark = "rgba(99, 102, 241, 0.08)",
  gridColorLight = "rgba(99, 102, 241, 0.06)",
  scanColorDark = "rgba(168, 85, 247, 0.6)",
  scanColorLight = "rgba(99, 102, 241, 0.5)",
}: GridScanProps) {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* Base theme background */}
      <div className="absolute inset-0 bg-slate-50 transition-colors duration-300 dark:bg-[#060813]" />

      {/* Grid Scan Pattern Layer */}
      <div
        className="absolute inset-0 gpu-layer opacity-80 dark:opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          ["--grid-color" as any]: gridColorDark,
        }}
      >
        {/* CSS override for light mode grid color */}
        <style>{`
          :root {
            --grid-color: ${gridColorLight};
          }
          .dark {
            --grid-color: ${gridColorDark};
          }
          @keyframes grid-scan-sweep {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100vh);
            }
          }
          .animate-grid-scan {
            animation: grid-scan-sweep ${scanSpeed}s linear infinite;
            will-change: transform;
          }
        `}</style>
      </div>

      {/* Animated Vertical Scan Laser Line */}
      <div className="absolute inset-x-0 h-32 animate-grid-scan gpu-layer pointer-events-none">
        {/* Main sharp scan bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 via-purple-500 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)] dark:via-purple-400 dark:shadow-[0_0_20px_rgba(168,85,247,0.9)]" />
        {/* Trailing scan gradient glow */}
        <div className="h-full w-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent dark:from-purple-600/15 dark:via-indigo-500/5" />
      </div>

      {/* Interactive Mouse Glow Light Spotlight */}
      <div
        className="absolute h-96 w-96 rounded-full transition-transform duration-75 ease-out gpu-layer"
        style={{
          transform: `translate3d(${mousePos.x - 192}px, ${mousePos.y - 192}px, 0)`,
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(168, 85, 247, 0.05) 45%, transparent 70%)",
        }}
      />

      {/* Ambient Corner Radial Accents */}
      <div className="absolute -to-p32 -left-32 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[110px] dark:bg-indigo-600/15" />
      <div className="absolute -bottom-32 -right-32 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[110px] dark:bg-purple-600/15" />
    </div>
  );
}
