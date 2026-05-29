

"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;

      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
      >
        <div
          className={`rounded-full border border-white/20 bg-gradient-to-br from-cyan-400/80 via-blue-500/70 to-purple-500/70 backdrop-blur-xl shadow-[0_0_35px_rgba(59,130,246,0.55)] transition-all duration-300 ${
            isPointer
              ? "w-8 h-8 opacity-100 scale-110"
              : "w-5 h-5 opacity-90"
          }`}
        />
      </div>

      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000] shadow-[0_0_10px_white]"
        style={{
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
        }}
      />
    </>
  );
}
