"use client";

import * as React from "react";
import {
  TrendingUp,
  Brain,
  Users,
  BadgeCheck,
  Zap,
  Gift,
  ArrowRight,
} from "lucide-react";

type HeroProps = {
  onPrimaryCta?: () => void;
  onSecondaryCta?: () => void;
};

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="Trustpilot rating stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-purple-800 text-[11px] font-black text-white"
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Hero({ onPrimaryCta, onSecondaryCta }: HeroProps) {
  return (
    <main id="home">
      {/* ===== HERO SECTION (Heading + Image only) ===== */}
      <section className="relative overflow-hidden bg-[#FBFBFE]">
        {/* Background blobs + subtle grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-violet-200/35 blur-3xl" />
          <div className="absolute top-28 right-10 h-72 w-72 rounded-full bg-emerald-200/25 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(31,182,200,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(108,73,216,0.12) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 78%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 78%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12">
          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-3 text-center text-xs text-slate-600">
            <span>Our customers say</span>
            <span className="text-sm font-semibold text-slate-900">Excellent</span>
            <StarRow />
            <span className="text-slate-700">
              <span className="font-semibold text-slate-900">4.6</span> out of 5 based on{" "}
              <span className="font-semibold text-slate-900">2,315</span> reviews
            </span>
            <span className="inline-flex items-center gap-2 font-semibold text-slate-900">
              <span className="text-purple-700" aria-hidden="true">
                ★
              </span>
              Trustpilot
            </span>
          </div>

          {/* 2-column hero */}
          <div className="mt-6 grid items-center gap-12 lg:grid-cols-12">
            {/* Left: Copy */}
            <div className="lg:col-span-6">
              <h1 className="text-balance text-3xl font-extrabold tracking-tight leading-[1.2] text-slate-900 sm:text-5xl">
                JOIN TSB AND BENEFIT DAILY FROM{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">OUR FREE TRADING SIGNALS</span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 z-0 h-3 rounded-full bg-emerald-200/60"
                  />
                </span>
              </h1>

              

              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
               <a
  href="https://t.me/+ilBOOK3W_wtiMjZi"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex w-full items-center justify-center rounded-full
             bg-gradient-to-r from-[#1FB6C8] to-[#6C49D8]
             px-7 py-3 text-sm font-semibold text-white
             shadow-lg shadow-[#6C49D8]/15 transition
             hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
>
  Join the FREE Group
  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
</a>


                {onPrimaryCta ? (
                  <button
                    type="button"
                    onClick={onPrimaryCta}
                    className="inline-flex w-full items-center justify-center rounded-full bg-white/70 px-7 py-3 text-sm font-semibold text-slate-900 ring-1 ring-black/10 backdrop-blur transition hover:bg-white sm:w-auto"
                  >
                    
                  </button>
                ) : null}
              </div>
            </div>

            {/* Right: Image */}
            <div className="lg:col-span-6">
              <div className="mx-auto max-w-xl">
                <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/80 to-transparent"
                  />
                  <img
                    src="/src/assets/hero.webp"
                    alt="The Signals Bank"
                    width={1200}
                    height={720}
                    loading="eager"
                    decoding="async"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CARDS SECTION (Separate, centered like second section) ===== */}
      <section className="relative bg-gradient-to-b from-[#F1F7FF] via-white to-white pb-20 pt-16">
        {/* Optional: top separator glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-24 max-w-6xl rounded-[40px] bg-gradient-to-r from-[#1FB6C8]/10 via-[#6C49D8]/10 to-[#1FB6C8]/10 blur-2xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section heading (center) */}
          

          {/* Cards grid (center feel) */}
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon={<TrendingUp className="h-5 w-5" />}
              title="2024 Best Forex Trading App"
              text="Global 100 Awards EMC Publish."
            />
            <InfoCard
              icon={<Brain className="h-5 w-5" />}
              title="2024 Best Forex Affliate Broker of The Year"
              text="Profx Awards Dubai."
            />
            <InfoCard
              icon={<Users className="h-5 w-5" />}
              title="The Best FX/CYPTO Technology & Liquidity provider "
              text="Egypt Expo."
            />
            <InfoCard
              icon={<BadgeCheck className="h-5 w-5" />}
              title="2024 Most Trusted Forex Broker Of The Year "
              text="Profx Awards Dubai."
            />
            <InfoCard
              icon={<Zap className="h-5 w-5" />}
              title="2024 Best Forex Trading App Of The Year"
              text="Global 100 Awards EMG Publish."
            />
            <InfoCard
              icon={<Gift className="h-5 w-5" />}
              title="The Fastest Growing Broker"
              text="2022 Dubai Expo."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#EAF7FB] via-[#F1F4FF] to-[#F8FAFF] p-5 ring-1 ring-[#1FB6C8]/20 transition hover:-translate-y-0.5 hover:shadow-lg">
      {/* soft glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
      >
        <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#1FB6C8]/25 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#6C49D8]/20 blur-2xl" />
      </div>

      <div className="relative flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#1FB6C8] to-[#6C49D8] text-white shadow-sm">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-extrabold leading-snug text-slate-900">
            {title}
          </p>
          <div className="my-2 h-px w-14 bg-slate-900/15" />
          <p className="text-sm leading-relaxed text-slate-600">{text}</p>
        </div>
      </div>
    </div>
  );
}
