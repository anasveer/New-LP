"use client";


import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Sparkles, Target, Users, ShieldCheck } from "lucide-react";
import { cn } from "../../lib/utils";

type WhoIsSimonProps = {
  title?: string;
  points?: string[];
  className?: string;
};

export function WhoIsSimon({
  title = "WHO IS SIMON?",
  points = [
    "Simon is an experienced Forex trader and the leader of a large signal group.",
    "With 10+ years of trading experience, he’s a true professional.",
    "Our team will help you with everything so you can copy trades successfully.",
    "After that, you’ll get access to our Premium Signal Group.",
    "Take this step and build your side income with us.",
    "Simon uses a risk-reward ratio of up to 1:7 for stable gains.",
  ],
  className,
}: WhoIsSimonProps) {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as any },
  });

  const staggerItem = (delay = 0) => ({
    initial: { opacity: 0, x: reduce ? 0 : -10 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as any },
  });

  const icons = [Users, BadgeCheck, ShieldCheck, Sparkles, Target, Target];

  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-10">
        {/* Center on page */}
        <div className="flex items-center justify-center">
          <motion.div {...fadeUp(0)} className="relative w-full">
            {/* Gradient border */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-cyan-400/40 via-violet-500/20 to-emerald-400/30" />

            {/* Card (transparent, no page bg) */}
            <div
              className={cn(
                "relative rounded-3xl p-6 sm:p-8",
                "bg-white/5",
                "ring-1 ring-white/15",
                "shadow-[0_30px_90px_-45px_rgba(0,0,0,0.45)]"
              )}
            >
              {/* Top row */}
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <motion.h2
                  {...fadeUp(0.05)}
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900"
                >
                  {title}
                </motion.h2>

                {/* Highlight chips */}
                <motion.div
                  {...fadeUp(0.1)}
                  className="flex flex-wrap gap-2"
                >
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-500/20">
                    10+ Years Experience
                  </span>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-500/20">
                    Premium Signals
                  </span>
                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-500/20">
                    Risk/Reward up to 1:7
                  </span>
                </motion.div>
              </div>

              {/* Points */}
              <div className="mt-6 grid gap-3 sm:gap-4">
                {points.map((p, i) => {
                  const Icon = icons[i % icons.length];
                  return (
                    <motion.div
                      key={i}
                      {...staggerItem(0.12 + i * 0.06)}
                      className={cn(
                        "flex gap-3 rounded-2xl px-4 py-3 sm:px-5 sm:py-4",
                        "bg-white/5 ring-1 ring-white/10",
                        "transition-all duration-300",
                        "hover:bg-white/10 hover:-translate-y-[2px]"
                      )}
                    >
                      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-black/5 ring-1 ring-black/5">
                        <Icon className="h-5 w-5 text-neutral-900/70" />
                      </div>
                      <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-800">
                        {p}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Soft divider */}
              <motion.div
                {...fadeUp(0.55)}
                className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
