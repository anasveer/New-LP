"use client";

import { CheckCircle2, AlertTriangle } from "lucide-react";
import { cn } from "../../lib/utils";

type CompareCardsProps = {
  leftTitle?: string;
  rightTitle?: string;
  leftItems: string[];
  rightItems: string[];
  className?: string;
};

export function CompareCards({
  leftTitle = "Trade with The Signals Bank",
  rightTitle = "Trading By Yourself",
  leftItems,
  rightItems,
  className,
}: CompareCardsProps) {
  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* LEFT CARD */}
          <div className="group relative">
            {/* gradient border */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-cyan-400/40 via-blue-500/25 to-emerald-400/35" />

            <div
              className={cn(
                "relative rounded-3xl p-6 sm:p-7",
                "bg-white/5", // ✅ transparent glass
                "ring-1 ring-white/15",
                "shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)]",
                "transition-all duration-300",
                "group-hover:-translate-y-1"
              )}
            >
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 drop-shadow-sm">
                {leftTitle}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-neutral-700">
                Simple, guided, and faster results — with support.
              </p>

              <div className="mt-6 space-y-3">
                {leftItems.map((t, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-start gap-3 rounded-2xl px-4 py-3",
                      "bg-white/5",
                      "ring-1 ring-white/10",
                      "transition-colors duration-300",
                      "group-hover:bg-white/10"
                    )}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-500" />
                    <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-800">
                      {t}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="group relative">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-rose-400/35 via-red-500/20 to-orange-400/30" />

            <div
              className={cn(
                "relative rounded-3xl p-6 sm:p-7",
                "bg-white/5",
                "ring-1 ring-white/15",
                "shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)]",
                "transition-all duration-300",
                "group-hover:-translate-y-1"
              )}
            >
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 drop-shadow-sm">
                {rightTitle}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-neutral-700">
                Slower learning curve, more risk, and less guidance.
              </p>

              <div className="mt-6 space-y-3">
                {rightItems.map((t, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-start gap-3 rounded-2xl px-4 py-3",
                      "bg-white/5",
                      "ring-1 ring-white/10",
                      "transition-colors duration-300",
                      "group-hover:bg-white/10"
                    )}
                  >
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-rose-500" />
                    <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-800">
                      {t}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}