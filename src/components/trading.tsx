"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "../../lib/utils";

// ✅ Vite/Vercel build-safe image import (adjust path if needed)
import tradingImg from "../assets/trading.png";

type TradingCtaProps = {
  title?: string;
  subtitle?: string;
  bullets?: string[];
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function TradingCta({
  title = "JOIN MY FREE\nTRADING GROUP",
  subtitle = "Do you want to copy my trades just like over 1,000+ others?",
  bullets = [
    "Click the link below and message our support team.",
    "We will help you set up your account and explain everything you need.",
    "Get access to additional content and our premium signal group.",
    "We will assist you step by step to successfully copy our trades.",
  ],
  buttonText = "Join the FREE Group",
  buttonHref = "#",
  imageAlt = "Trading app preview",
  className,
  imageSrc = tradingImg, // ✅ default uses imported asset (works on Vercel)
}: TradingCtaProps) {
  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:gap-12 grid-cols-1 lg:grid-cols-2">
          {/* LEFT: IMAGE (no animation) */}
          <div className="relative flex justify-center lg:justify-start">
            <img
              src={imageSrc}
              alt={imageAlt}
              draggable={false}
              className={cn(
                "w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]",
                "h-auto object-contain select-none",
                "drop-shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
              )}
            />
          </div>

          {/* RIGHT: CONTENT (no animation) */}
          <div className="relative">
            <h2
              className={cn(
                "text-balance text-2xl sm:text-3xl lg:text-4xl",
                "font-extrabold tracking-tight text-neutral-900"
              )}
              style={{ whiteSpace: "pre-line" }}
            >
              {title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl">
              {subtitle}
            </p>

            <div className="mt-6 space-y-3">
              {bullets.map((b, idx) => (
                <div key={idx} className="flex gap-3 text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-500" />
                  <p className="leading-relaxed">{b}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={buttonHref}
                className={cn(
                  "group relative inline-flex items-center justify-center",
                  "rounded-full px-6 py-3.5",
                  "text-sm sm:text-base font-semibold",
                  "text-white shadow-lg shadow-black/10",
                  "transition-transform active:scale-[0.98]",
                  "focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                )}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500" />

                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                  <span className="absolute -left-1/3 top-0 h-full w-1/3 skew-x-[-20deg] bg-white/20 blur-md animate-[shimmer_1.4s_ease-in-out_infinite]" />
                </span>

                <span className="relative flex items-center gap-2">
                  {buttonText}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>

            <div className="mt-8 h-px w-full max-w-xl bg-gradient-to-r from-neutral-900/10 via-neutral-900/0 to-neutral-900/10" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-60%) skewX(-20deg); opacity: 0; }
          35% { opacity: 1; }
          100% { transform: translateX(220%) skewX(-20deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

export default TradingCta;