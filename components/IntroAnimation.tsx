import { useEffect, useRef, useState, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const PARTICLE_COUNT = 70;
const CONNECTION_DISTANCE = 140;
const FADE_START = 2800;
const FADE_DURATION = 900;

const IntroAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: Particle[] = Array.from(
      { length: PARTICLE_COUNT },
      () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 1.8 + 0.8,
      })
    );

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = 1 - dist / CONNECTION_DISTANCE;
            ctx.strokeStyle = `rgba(255, 207, 0, ${opacity * 0.25})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = "rgba(255, 207, 0, 0.6)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const cleanup = initCanvas();

    const fadeTimer = setTimeout(() => setFading(true), FADE_START);
    const removeTimer = setTimeout(
      () => setVisible(false),
      FADE_START + FADE_DURATION
    );

    return () => {
      cleanup?.();
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [initCanvas]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bodyColor transition-opacity ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_DURATION}ms` }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <p className="text-textGreen font-titleFont tracking-[0.3em] text-xs mb-4 uppercase intro-fade-in">
          Welcome
        </p>
        <h1 className="text-4xl lgl:text-6xl font-titleFont font-semibold text-textLight intro-fade-in intro-delay-1">
          Diego García
        </h1>
        <div className="w-16 h-[1px] bg-textGreen mt-4 mb-3 intro-scale-in intro-delay-2" />
        <p className="text-textDark font-titleFont text-sm tracking-widest intro-fade-in intro-delay-3">
          Blockchain Engineer
        </p>
      </div>
    </div>
  );
};

export default IntroAnimation;
