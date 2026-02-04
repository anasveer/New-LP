"use client";

import React from "react";
import { motion } from "framer-motion";

type TsbTestimonial = {
  title: string;
  text: string;
  name: string;
  date: string;
  stars: number; // 1-5
  verified?: boolean;
};

export const TestimonialsColumnTSB = (props: {
  className?: string;
  testimonials: TsbTestimonial[];
  duration?: number;
  link: string; // ✅ one link for all cards
}) => {
  const { className, testimonials, duration = 10, link } = props;

  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((t, i) => (
              <a
                key={`${index}-${i}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-xs w-full"
                aria-label={`Open link for testimonial by ${t.name}`}
              >
                <div
                  className="
                    group w-full rounded-3xl border border-slate-200
                    bg-white/70 p-6 shadow-lg shadow-slate-900/5 backdrop-blur
                    transition-all duration-200
                    hover:-translate-y-1 hover:border-slate-300 hover:bg-white/80
                    hover:shadow-xl hover:shadow-slate-900/10
                    active:translate-y-0
                    cursor-pointer
                  "
                >
                  {/* stars + verified */}
                  <div className="flex items-start justify-between gap-3">
                    <StarRow stars={t.stars} />
                    {t.verified && (
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
                        Verified
                      </span>
                    )}
                  </div>

                  {/* title */}
                  <div className="mt-3 text-sm font-extrabold tracking-tight text-slate-900">
                    {t.title}
                  </div>

                  {/* text (preserve \n) */}
                  <div className="mt-2 text-sm leading-relaxed text-slate-600 whitespace-pre-line">
                    {t.text}
                  </div>

                  {/* footer */}
                  <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex flex-col">
                      <div className="font-semibold text-slate-800">{t.name}</div>
                      <div className="opacity-70">{t.date}</div>
                    </div>

                    {/* Trustpilot mini mark */}
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500 text-white font-black">
                        ★
                      </span>
                      <span className="font-semibold text-slate-700">Trustpilot</span>
                    </div>
                  </div>

                  {/* subtle hint on hover */}
                  <div className="mt-3 text-[11px] font-semibold text-slate-400 opacity-0 transition group-hover:opacity-100">
                    Click to join →
                  </div>
                </div>
              </a>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

function StarRow({ stars }: { stars: number }) {
  const safeStars = Math.max(0, Math.min(5, stars || 0));

  return (
    <div className="flex items-center gap-1" aria-label={`${safeStars} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            "inline-flex h-5 w-5 items-center justify-center rounded-[4px] text-[11px] font-black " +
            (i < safeStars ? "bg-emerald-500 text-white" : "bg-emerald-500/25 text-white/60")
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}
