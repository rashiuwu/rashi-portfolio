/**
 * Decorative 3D scene rendered with pure CSS transforms.
 * Marked aria-hidden — it's purely visual.
 */
export function HeroScene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto h-[320px] w-[320px] sm:h-[420px] sm:w-[420px]"
      style={{ perspective: "1200px" }}
    >
      {/* Glowing halo */}
      <div className="absolute inset-0 rounded-full bg-[var(--gradient-aurora)] opacity-30 blur-3xl" />

      {/* Rotating 3D cube */}
      <div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
        style={{ transformStyle: "preserve-3d" }}
      >
        {[
          { t: "translateZ(80px)", g: "linear-gradient(135deg, oklch(0.72 0.19 310), oklch(0.75 0.17 200))" },
          { t: "rotateY(180deg) translateZ(80px)", g: "linear-gradient(135deg, oklch(0.68 0.18 260), oklch(0.72 0.19 310))" },
          { t: "rotateY(90deg) translateZ(80px)", g: "linear-gradient(135deg, oklch(0.75 0.17 200), oklch(0.68 0.18 260))" },
          { t: "rotateY(-90deg) translateZ(80px)", g: "linear-gradient(135deg, oklch(0.72 0.19 310), oklch(0.85 0.14 320))" },
          { t: "rotateX(90deg) translateZ(80px)", g: "linear-gradient(135deg, oklch(0.75 0.17 200), oklch(0.85 0.14 220))" },
          { t: "rotateX(-90deg) translateZ(80px)", g: "linear-gradient(135deg, oklch(0.68 0.18 260), oklch(0.75 0.17 200))" },
        ].map((f, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-2xl border border-white/20"
            style={{
              transform: f.t,
              background: f.g,
              boxShadow: "inset 0 0 40px rgba(255,255,255,0.15)",
              opacity: 0.85,
            }}
          />
        ))}
      </div>

      {/* Orbiting sparks */}
      <div className="absolute left-1/2 top-1/2 size-2" style={{ transformStyle: "preserve-3d" }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute -left-1 -top-1 block size-3 rounded-full bg-primary shadow-[0_0_20px_var(--color-primary)] animate-orbit"
            style={{ animationDelay: `${i * -6}s`, animationDuration: `${14 + i * 3}s` }}
          />
        ))}
      </div>

      {/* Floating badges */}
      <div className="absolute left-4 top-6 rounded-xl glass px-3 py-2 text-xs animate-float" style={{ animationDelay: "0s" }}>
        <span className="text-primary">●</span> CGPA 9.13
      </div>
      <div className="absolute right-2 top-24 rounded-xl glass px-3 py-2 text-xs animate-float" style={{ animationDelay: "-2s" }}>
        <span className="text-accent">◆</span> Python · AI · FinTech
      </div>
      <div className="absolute bottom-6 left-8 rounded-xl glass px-3 py-2 text-xs animate-float" style={{ animationDelay: "-4s" }}>
        <span className="text-primary">▲</span> Full Stack
      </div>
    </div>
  );
}
