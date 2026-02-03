import React from "react";

export default function WhySection() {
  return (
    <section id="why" className="relative overflow-hidden bg-white">
      {/* subtle watermark (optional) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <p className="absolute -left-6 top-10 select-none text-7xl font-black tracking-tight text-slate-200/25 sm:text-8xl">
          TRADE
        </p>
        <p className="absolute left-10 top-44 select-none text-7xl font-black tracking-tight text-slate-200/25 sm:text-8xl">
          WITH
        </p>
        <p className="absolute left-24 top-80 select-none text-7xl font-black tracking-tight text-slate-200/25 sm:text-8xl">
          US
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            WHY TRADE WITH SIGNAL BANK?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
           We do our best to make trading easy and rewarding.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <WhyCard
            icon={<IconArrows />}
            text="Learn from experienced traders in real time who will show you exactly how to become successful."
          />
          <WhyCard
            icon={<IconCap />}
            text="Accelerate your progress with exclusive coaching calls designed to refine your strategies."
          />
          <WhyCard
            icon={<IconChat />}
            text="Receive precise trading signals that eliminate guesswork in trading and multiply your profits."
          />
          <WhyCard
            icon={<IconBank />}
            text="Receive automated trading signals that eliminate guesswork in trading and multiply your profits."
          />
        </div>
      </div>
    </section>
  );
}

function WhyCard({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl p-[1px] transition-transform duration-300 will-change-transform hover:-translate-y-1">
      {/* Button-like gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#1FB6C8] to-[#6C49D8] opacity-70" />

      {/* Soft inner surface */}
      <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#F4FBFF] via-white to-[#F6F2FF] p-5 ring-1 ring-black/5 transition-all duration-300 group-hover:shadow-xl">
        {/* Hover glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#1FB6C8]/25 blur-3xl" />
          <div className="absolute -left-12 -bottom-12 h-32 w-32 rounded-full bg-[#6C49D8]/22 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative flex h-full flex-col items-center text-center">
          {/* Icon bubble (CTA style) */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1FB6C8] to-[#6C49D8] blur-md opacity-30 transition-opacity duration-300 group-hover:opacity-50" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl  text-white shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-[1.03]">
              {icon}
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-700">
            {text}
          </p>

          {/* Underline accent */}
          <div className="mt-5 h-[2px] w-10 rounded-full bg-gradient-to-r from-[#1FB6C8]/50 to-[#6C49D8]/50 transition-all duration-300 group-hover:w-16 group-hover:from-[#1FB6C8] group-hover:to-[#6C49D8]" />
        </div>
      </div>
    </div>
  );
}


/* ---------- Icons (inline SVG = fast + no dependency) ---------- */

function GradientDefs() {
  return (
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1FB6C8" />
        <stop offset="100%" stopColor="#6C49D8" />
      </linearGradient>
    </defs>
  );
}

function IconArrows() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <GradientDefs />
      <path
        d="M7 7h10M17 7l-2-2M17 7l-2 2M17 17H7M7 17l2-2M7 17l2 2"
        stroke="url(#g1)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCap() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <GradientDefs />
      <path
        d="M12 4 3 8l9 4 9-4-9-4Z"
        stroke="url(#g1)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 10.2V14c0 1.8 3 3.5 6.5 3.5S18.5 15.8 18.5 14v-3.8"
        stroke="url(#g1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21 9v6"
        stroke="url(#g1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <GradientDefs />
      <path
        d="M7 18l-3 2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-2 2Z"
        stroke="url(#g1)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 7.5l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L11.1 9.6l2-.3.9-1.8Z"
        fill="url(#g1)"
      />
    </svg>
  );
}

function IconBank() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <GradientDefs />
      <path
        d="M4 10h16M6 10V19M10 10V19M14 10V19M18 10V19"
        stroke="url(#g1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 9 12 4l9 5"
        stroke="url(#g1)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 19h16"
        stroke="url(#g1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
