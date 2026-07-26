import { useEffect, useRef } from "react";

interface PrismaticBurstProps {
  raysCount?: number;
  speed?: number;
  intensity?: number;
  interactive?: boolean;
}

export default function PrismaticBurst({
  raysCount = 36,
  speed = 0.003,
  intensity = 0.8,
  interactive = true,
}: PrismaticBurstProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

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

    // Spectral Prismatic Color Palette
    const prismHues = [230, 260, 280, 310, 190, 270];

    const render = () => {
      rotation += speed;

      // Smooth mouse position interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const centerX = mouseRef.current.x > 0 ? mouseRef.current.x : width / 2;
      const centerY = mouseRef.current.y > 0 ? mouseRef.current.y : height / 3;

      ctx.clearRect(0, 0, width, height);

      // Base ambient radial glow
      const baseGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        Math.max(width, height) * 0.7
      );

      if (isDark) {
        baseGlow.addColorStop(0, "rgba(99, 102, 241, 0.2)");
        baseGlow.addColorStop(0.4, "rgba(168, 85, 247, 0.08)");
        baseGlow.addColorStop(1, "rgba(6, 8, 19, 0)");
      } else {
        baseGlow.addColorStop(0, "rgba(99, 102, 241, 0.12)");
        baseGlow.addColorStop(0.4, "rgba(168, 85, 247, 0.04)");
        baseGlow.addColorStop(1, "rgba(248, 250, 252, 0)");
      }

      ctx.fillStyle = baseGlow;
      ctx.fillRect(0, 0, width, height);

      // Render Radiating Prismatic Rays
      const angleStep = (Math.PI * 2) / raysCount;
      const maxRadius = Math.max(width, height) * 1.2;

      ctx.save();
      ctx.globalCompositeOperation = isDark ? "screen" : "multiply";

      for (let i = 0; i < raysCount; i++) {
        const baseAngle = i * angleStep + rotation;
        const hue = prismHues[i % prismHues.length];

        // Ray width offset calculation
        const spread = (angleStep * 0.45) + Math.sin(rotation * 2 + i) * 0.02;
        const angle1 = baseAngle - spread;
        const angle2 = baseAngle + spread;

        const x1 = centerX + Math.cos(angle1) * maxRadius;
        const y1 = centerY + Math.sin(angle1) * maxRadius;
        const x2 = centerX + Math.cos(angle2) * maxRadius;
        const y2 = centerY + Math.sin(angle2) * maxRadius;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();

        const rayGrad = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          maxRadius * 0.8
        );

        if (isDark) {
          rayGrad.addColorStop(0, `hsla(${hue}, 90%, 65%, ${0.25 * intensity})`);
          rayGrad.addColorStop(0.5, `hsla(${hue + 20}, 85%, 60%, ${0.12 * intensity})`);
          rayGrad.addColorStop(1, `hsla(${hue}, 80%, 50%, 0)`);
        } else {
          rayGrad.addColorStop(0, `hsla(${hue}, 80%, 55%, ${0.15 * intensity})`);
          rayGrad.addColorStop(0.5, `hsla(${hue + 20}, 75%, 50%, ${0.07 * intensity})`);
          rayGrad.addColorStop(1, `hsla(${hue}, 70%, 45%, 0)`);
        }

        ctx.fillStyle = rayGrad;
        ctx.fill();
      }

      ctx.restore();

      // Bright Prismatic Center Core Orb
      const coreGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        90
      );

      if (isDark) {
        coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.4)");
        coreGrad.addColorStop(0.3, "rgba(168, 85, 247, 0.3)");
        coreGrad.addColorStop(1, "rgba(99, 102, 241, 0)");
      } else {
        coreGrad.addColorStop(0, "rgba(99, 102, 241, 0.3)");
        coreGrad.addColorStop(0.4, "rgba(168, 85, 247, 0.15)");
        coreGrad.addColorStop(1, "rgba(99, 102, 241, 0)");
      }

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 90, 0, Math.PI * 2);
      ctx.fill();

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
  }, [raysCount, speed, intensity, interactive]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      <div className="absolute inset-0 bg-slate-50 transition-colors duration-300 dark:bg-[#060813]" />
      <canvas ref={canvasRef} className="h-full w-full gpu-layer" />
    </div>
  );
}
