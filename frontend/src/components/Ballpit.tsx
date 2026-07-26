import { useEffect, useRef } from "react";

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  mass: number;
}

interface BallpitProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  colors?: string[];
}

const DEFAULT_COLORS = [
  "#6366f1", // Indigo
  "#8b5cf6", // Violet
  "#d946ef", // Fuchsia
  "#06b6d4", // Cyan
  "#3b82f6", // Blue
  "#a855f7", // Purple
];

export default function Ballpit({
  count = 40,
  minSize = 14,
  maxSize = 32,
  gravity = 0.02,
  friction = 0.995,
  wallBounce = 0.85,
  colors = DEFAULT_COLORS,
}: BallpitProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 120 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Initialize Balls
    const width = window.innerWidth;
    const height = window.innerHeight;
    const balls: Ball[] = [];

    for (let i = 0; i < count; i++) {
      const radius = minSize + Math.random() * (maxSize - minSize);
      const color = colors[i % colors.length];
      balls.push({
        x: Math.random() * (width - radius * 2) + radius,
        y: Math.random() * (height - radius * 2) + radius,
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5,
        radius,
        color,
        glowColor: `${color}66`,
        mass: radius * 0.1,
      });
    }

    const isDark = document.documentElement.classList.contains("dark");

    // Main Physics & Render Loop
    const render = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;

      ctx.clearRect(0, 0, currentWidth, currentHeight);

      // Background ambient tint
      const bgGrad = ctx.createRadialGradient(
        currentWidth / 2,
        currentHeight / 3,
        20,
        currentWidth / 2,
        currentHeight / 3,
        currentWidth * 0.7
      );

      if (isDark) {
        bgGrad.addColorStop(0, "rgba(99, 102, 241, 0.06)");
        bgGrad.addColorStop(1, "rgba(6, 8, 19, 0)");
      } else {
        bgGrad.addColorStop(0, "rgba(99, 102, 241, 0.04)");
        bgGrad.addColorStop(1, "rgba(248, 250, 252, 0)");
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, currentWidth, currentHeight);

      // Update & Draw Balls
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];

        // Apply gravity & friction
        b.vy += gravity;
        b.vx *= friction;
        b.vy *= friction;

        // Position update
        b.x += b.vx;
        b.y += b.vy;

        // Wall collisions
        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx = -b.vx * wallBounce;
        } else if (b.x + b.radius > currentWidth) {
          b.x = currentWidth - b.radius;
          b.vx = -b.vx * wallBounce;
        }

        if (b.y - b.radius < 0) {
          b.y = b.radius;
          b.vy = -b.vy * wallBounce;
        } else if (b.y + b.radius > currentHeight) {
          b.y = currentHeight - b.radius;
          b.vy = -b.vy * wallBounce;
        }

        // Mouse repulsion
        const mdx = b.x - mouseRef.current.x;
        const mdy = b.y - mouseRef.current.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < mouseRef.current.radius) {
          const force = (1 - mdist / mouseRef.current.radius) * 3;
          const angle = Math.atan2(mdy, mdx);
          b.vx += Math.cos(angle) * force;
          b.vy += Math.sin(angle) * force;
        }

        // Ball-to-ball collisions
        for (let j = i + 1; j < balls.length; j++) {
          const b2 = balls[j];
          const dx = b2.x - b.x;
          const dy = b2.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = b.radius + b2.radius;

          if (dist < minDist) {
            const overlap = minDist - dist;
            const nx = dx / (dist || 1);
            const ny = dy / (dist || 1);

            // Separate overlapping balls
            b.x -= nx * overlap * 0.5;
            b.y -= ny * overlap * 0.5;
            b2.x += nx * overlap * 0.5;
            b2.y += ny * overlap * 0.5;

            // Elastic bounce momentum swap
            const kx = b.vx - b2.vx;
            const ky = b.vy - b2.vy;
            const p = 2 * (nx * kx + ny * ky) / (b.mass + b2.mass);

            b.vx -= p * b2.mass * nx;
            b.vy -= p * b2.mass * ny;
            b2.vx += p * b.mass * nx;
            b2.vy += p * b.mass * ny;
          }
        }

        // Draw 3D Shaded Glowing Sphere
        ctx.save();

        // Outer glow
        ctx.shadowColor = b.glowColor;
        ctx.shadowBlur = 12;

        // 3D Sphere gradient
        const sphereGrad = ctx.createRadialGradient(
          b.x - b.radius * 0.3,
          b.y - b.radius * 0.3,
          b.radius * 0.1,
          b.x,
          b.y,
          b.radius
        );

        if (isDark) {
          sphereGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
          sphereGrad.addColorStop(0.35, b.color);
          sphereGrad.addColorStop(1, "rgba(0, 0, 0, 0.6)");
        } else {
          sphereGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
          sphereGrad.addColorStop(0.4, b.color);
          sphereGrad.addColorStop(1, "rgba(0, 0, 0, 0.2)");
        }

        ctx.fillStyle = sphereGrad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, minSize, maxSize, gravity, friction, wallBounce, colors]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      <div className="absolute inset-0 bg-slate-50 transition-colors duration-300 dark:bg-[#060813]" />
      <canvas ref={canvasRef} className="h-full w-full gpu-layer" />
    </div>
  );
}
