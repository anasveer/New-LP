"use client";

import  { useMemo } from "react";
import { TestimonialsColumnTSB } from "./ui/testimonial-column";

// ✅ import logos (recommended)
import log1 from "../assets/log1.webp";
import log2 from "../assets/log2.png";
import log3 from "../assets/log3.png";
import log4 from "../assets/log4.png";
import log5 from "../assets/log5.png";
import log6 from "../assets/log6.png";
import log7 from "../assets/log7.webp";
import log8 from "../assets/log8.webp";

type Logo = { src: string; alt: string };

type TsbTestimonial = {
  title: string;
  text: string;
  name: string;
  date: string;
  stars: number;
  verified?: boolean;
};

export default function SocialProofTestimonials() {
  // ✅ one link for all testimonial cards
  const CTA_LINK = "https://www.trustpilot.com/review/thesignalsbank.com";

  const logos: Logo[] = useMemo(
    () => [
      { src: log1, alt: "GeekWire" },
      { src: log2, alt: "USA Today" },
      { src: log3, alt: "TechBullion" },
      { src: log4, alt: "US Insider" },
      { src: log5, alt: "HuffPost" },
      { src: log6, alt: "Business Insider" },
      { src: log7, alt: "MarketWatch" },
      { src: log8, alt: "TheStreet" },
    ],
    [],
  );

  const testimonials: TsbTestimonial[] = useMemo(
    () => [
      {
        title: "Every trade feels secured",
        text: "I was often unsure whether a setup really made sense. Here, I finally have the feeling that everything is checked, analyzed, and double-secured. It completely changes your mindset.",
        name: "Finn Mayer",
        date: "January, 2016",
        stars: 5,
        verified: true,
      },
      {
        title: "Im honestly still impressed",
        text: "Im honestly still impressed.\nTrading gold with Ionut is actually fun.\nEverything he does is structured and the trading is disciplined.\nNo gambling at any time.",
        name: "Carmen Steck",
        date: "January 2, 2026",
        stars: 5,
        verified: true,
      },
      {
        title: "I would prefer to give ZERO stars",
        text: "I would prefer to give ZERO stars, but I have to warn others. I invested money in a PAMM account.\nIn the large package, copying is advertised, but it does not work via the copy function that StarTrader also offers. You have to invest in a PAMM, have no insight into the trades, and now I have been waiting for my withdrawal for 4 weeks.\nEither they remain silent or there are endless excuses. At the moment, this looks very much like fraud.",
        name: "Jani Geissler",
        date: "October 14, 2025",
        stars: 5,
        verified: true,
      },
      {
        title: "I submitted a review for a company",
        text: "I submitted a review for a company that behaves very differently from what it promises before you become a customer. I could prove everything with written communication between me and the company, but ProvenExpert.com has not approved or displayed my (below-average) review for weeks. As a result, the picture of the company is not entirely objective.",
        name: "Andreas Zobel",
        date: "January 13, 2026",
        stars: 5,
        verified: true,
      },
      {
        title: "Honest, clean, successful",
        text: "I’ve been part of this for almost 5 months now. The signals are excellent. Even though I already had trading experience, I still learned a lot of professional knowledge such as scaling strategies, which helped me a lot. The entries are precise and the given zones are extremely helpful for placing your own trades. Support is great when you have questions. A very likable guy who genuinely means well — I’ve had much worse experiences before. This is where I’ve arrived, and this is where I want to stay. THANK YOU Phenex ❤️",
        name: "Consumer",
        date: "December 18, 2025",
        stars: 5,
        verified: true,
      },
      {
        title: "More positives than negatives",
        text: "Since I started with TSB a few weeks ago, my trading has completely changed. Of course, there are occasional downs, but that’s normal. At the end of the day, what matters is whether you finish in profit or loss. With TSB, most days are definitely profitable, and for that I am truly grateful.",
        name: "Lea Schäfer",
        date: "March 17, 2025",
        stars: 5,
        verified: true,
      },
      {
        title: "Profit with own and funded capital",
        text: "I started with my own capital. Unfortunately, I didn’t have much money to deposit into my personal account, so I bought a funded capital challenge. Thanks to the trades from the VIP group, I passed the challenge within one week. I am now funded and able to trade significantly more profit.",
        name: "Henry Keller",
        date: "March 19, 2025",
        stars: 5,
        verified: true,
      },
      {
        title: "VIP group is truly 10/10",
        text: "The VIP group is absolutely amazing. I already think the free group is really good, but the VIP group is on a completely different level. Daily trades and market analyses that actually help you understand what’s happening. Many thanks again to the TSB team.",
        name: "Moritz Weiß",
        date: "March 17, 2025",
        stars: 5,
        verified: true,
      },
    ],
    [],
  );

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section id="testimonials" className="relative bg-white py-14 sm:py-18">
      <div className="container z-10 mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
         
          className="mx-auto flex max-w-[640px] flex-col items-center justify-center text-center"
        >
          <div className="rounded-lg border border-slate-200 bg-white/70 px-4 py-1 text-xs font-semibold text-slate-600">
            Testimonials
          </div>

          <h2 className="mt-5 text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            What our{" "}
            <span className="bg-gradient-to-r from-[#1FB6C8] to-[#6C49D8] bg-clip-text text-transparent">
              users
            </span>{" "}
            say
          </h2>

          <p className="mt-3 max-w-[520px] text-sm text-slate-600 sm:text-base">
            See what our customers have to say about us.
          </p>
        </div>

        {/* Logos marquee */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-9 shadow-sm">
          <LogoMarquee logos={logos} />
        </div>

        {/* Columns */}
        <div className="mt-10 flex justify-center gap-6 max-h-[740px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <TestimonialsColumnTSB testimonials={firstColumn} duration={15} link={CTA_LINK} />
          <TestimonialsColumnTSB
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
            link={CTA_LINK}
          />
          <TestimonialsColumnTSB
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
            link={CTA_LINK}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- Logos Marquee -------------------- */

function LogoMarquee({ logos }: { logos: Logo[] }) {
  const items = [...logos, ...logos]; // ✅ duplicate once

  return (
    <div className="mt-4 overflow-hidden">
      <div
        className="flex w-max items-center gap-12 py-2 will-change-transform
                   [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
                   animate-marquee group-hover:[animation-play-state:paused]"
        aria-label="Media logos"
      >
        {items.map((l, idx) => (
          <img
            key={`${l.alt}-${idx}`}
            src={l.src}
            alt={l.alt}
            loading="lazy"
            decoding="async"
            className="h-8 w-auto shrink-0 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
          />
        ))}

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 22s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation: none;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
