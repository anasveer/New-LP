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
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map((t, i) => (
              <div
                key={i}
                className="max-w-xs w-full rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-900/5 backdrop-blur"
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

                {/* text */}
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
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
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

function StarRow({ stars }: { stars: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${stars} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            "inline-flex h-5 w-5 items-center justify-center rounded-[4px] text-[11px] font-black " +
            (i < stars ? "bg-emerald-500 text-white" : "bg-emerald-500/25 text-white/60")
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}
