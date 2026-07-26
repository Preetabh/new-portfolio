import { useEffect, useRef } from "react";

interface FloatingLinesProps {
  linesCount?: number;
  speed?: number;
  amplitude?: number;
  frequency?: number;
  colorScheme?: "indigo" | "purple" | "cyan" | "multi";
  interactive?: boolean;
}

export default function FloatingLines({
  linesCount = 14,
  speed = 0.0015,
  amplitude = 35,
  frequency = 0.008,
  interactive = true,
}: FloatingLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    const isDark = document.documentElement.classList.contains("dark");

    // Main render loop
    const render = () => {
      time += speed;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // Background accent ambient gradient
      const ambientGrad = ctx.createRadialGradient(
        width / 2,
        height / 3,
        50,
        width / 2,
        height / 3,
        width * 0.7
      );

      if (isDark) {
        ambientGrad.addColorStop(0, "rgba(99, 102, 241, 0.08)");
        ambientGrad.addColorStop(0.5, "rgba(168, 85, 247, 0.04)");
        ambientGrad.addColorStop(1, "rgba(7, 9, 19, 0)");
      } else {
        ambientGrad.addColorStop(0, "rgba(99, 102, 241, 0.05)");
        ambientGrad.addColorStop(0.5, "rgba(168, 85, 247, 0.02)");
        ambientGrad.addColorStop(1, "rgba(248, 250, 252, 0)");
      }

      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      // Floating sine lines
      const stepY = height / (linesCount + 1);

      for (let i = 1; i <= linesCount; i++) {
        const baseY = i * stepY;
        const lineOffset = i * 0.35;
        const currentAmp = amplitude + Math.sin(time * 2 + i) * 10;

        ctx.beginPath();
        ctx.lineWidth = i % 2 === 0 ? 1.5 : 1;

        // Gradient line color
        const lineGrad = ctx.createLinearGradient(0, 0, width, 0);
        if (isDark) {
          lineGrad.addColorStop(0, `hsla(${240 + i * 8}, 85%, 65%, 0.02)`);
          lineGrad.addColorStop(0.3, `hsla(${250 + i * 8}, 90%, 70%, 0.25)`);
          lineGrad.addColorStop(0.7, `hsla(${280 + i * 8}, 85%, 68%, 0.25)`);
          lineGrad.addColorStop(1, `hsla(${310 + i * 8}, 85%, 65%, 0.02)`);
        } else {
          lineGrad.addColorStop(0, `hsla(${240 + i * 8}, 75%, 55%, 0.02)`);
          lineGrad.addColorStop(0.3, `hsla(${250 + i * 8}, 80%, 60%, 0.18)`);
          lineGrad.addColorStop(0.7, `hsla(${280 + i * 8}, 75%, 58%, 0.18)`);
          lineGrad.addColorStop(1, `hsla(${310 + i * 8}, 75%, 55%, 0.02)`);
        }

        ctx.strokeStyle = lineGrad;

        // Draw curved wave along width
        for (let x = 0; x <= width; x += 15) {
          // Calculate wave height
          const sinValue = Math.sin(x * frequency + time * 1.8 + lineOffset);
          const cosValue = Math.cos(x * (frequency * 0.7) - time * 1.2 + lineOffset);

          let y = baseY + sinValue * currentAmp + cosValue * (currentAmp * 0.5);

          // Cursor displacement bend effect
          if (interactive && mouseRef.current.x > 0) {
            const dx = x - mouseRef.current.x;
            const dy = y - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 180;

            if (dist < maxDist) {
              const force = (1 - dist / maxDist) * 28;
              y += (dy > 0 ? 1 : -1) * force;
            }
          }

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [linesCount, speed, amplitude, frequency, interactive]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      <div className="absolute inset-0 bg-slate-50 transition-colors duration-300 dark:bg-[#060813]" />
      <canvas ref={canvasRef} className="h-full w-full gpu-layer" />
    </div>
  );
}
