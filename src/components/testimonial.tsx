"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { TestimonialsColumnTSB } from "./ui/testimonial-column";

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
  const logos: Logo[] = useMemo(
    () => [
      { src: "/src/assets/log1.webp", alt: "GeekWire" },
      { src: "/src/assets/log2.png", alt: "USA Today" },
      { src: "/src/assets/log3.png", alt: "TechBullion" },
      { src: "/src/assets/log4.png", alt: "US Insider" },
      { src: "/src/assets/log5.png", alt: "HuffPost" },
      { src: "/src/assets/log6.png", alt: "Business Insider" },
      { src: "/src/assets/log7.webp", alt: "MarketWatch" },
      { src: "/src/assets/log8.webp", alt: "TheStreet" },
    ],
    [],
  );

  // ✅ SAME content as your old SocialProofSection (replace if client demands exact copy)
  const testimonials: TsbTestimonial[] = useMemo(
    () => [
      {
        title: "Hat mich echt überzeugt!",
        text: "Ich wusste zuerst nicht ob ich es funktionieren würde, aber ich habe mich entschieden es auszuprobieren. Beste Entscheidung!",
        name: "J. Weber",
        date: "Mar 10, 2025",
        stars: 5,
        verified: true,
      },
      {
        title: "Absolut Genial!",
        text: "Mein Konto wächst stetig, und der Support ist schnell. Klare Empfehlungen – mein Gefühl ist richtig gut aufgehoben.",
        name: "S. Keller",
        date: "Mar 9, 2025",
        stars: 5,
        verified: true,
      },
      {
        title: "Absolut empfehlenswert!",
        text: "Ich habe selten einen Service gesehen, der so zuverlässig funktioniert. Performance verbessert, klare Antworten.",
        name: "Tom",
        date: "Mar 9, 2025",
        stars: 5,
        verified: true,
      },
      {
        title: "Sehr hilfreich",
        text: "Strukturierte Signale und eine gute Community. Ich komme schneller voran als vorher.",
        name: "M. Braun",
        date: "Mar 7, 2025",
        stars: 5,
        verified: true,
      },
      {
        title: "Top Support",
        text: "Antworten kommen schnell und sind verständlich. Das macht einen großen Unterschied.",
        name: "A. Fischer",
        date: "Mar 5, 2025",
        stars: 5,
        verified: true,
      },
      // add more if you want smoother columns
      {
        title: "Sehr zufrieden",
        text: "Klare Struktur und starke Signale. Ich habe jetzt mehr Vertrauen in meine Entscheidungen.",
        name: "N. Schmidt",
        date: "Mar 2, 2025",
        stars: 5,
        verified: true,
      },
      {
        title: "Mega Community",
        text: "Hilfsbereit, aktiv und motivierend. Genau das, was mir gefehlt hat.",
        name: "L. Meyer",
        date: "Feb 28, 2025",
        stars: 5,
        verified: true,
      },
      {
        title: "Einfach & effektiv",
        text: "Ich spare Zeit, weil die Signale klar sind. Das macht den Unterschied.",
        name: "P. Wagner",
        date: "Feb 25, 2025",
        stars: 5,
        verified: true,
      },
      {
        title: "Klare Empfehlung",
        text: "Support reagiert schnell und die Inhalte sind verständlich – top!",
        name: "K. Becker",
        date: "Feb 22, 2025",
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
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
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
        </motion.div>

        {/* Logos marquee (same behavior) */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-9 shadow-sm">
         
          <LogoMarquee  logos={logos}  />
        </div>

        {/* Columns (your same animation style) */}
        <div className="mt-10 flex justify-center gap-6 max-h-[740px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <TestimonialsColumnTSB testimonials={firstColumn} duration={15} />
          <TestimonialsColumnTSB
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumnTSB
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- Logos Marquee -------------------- */

function LogoMarquee({ logos }: { logos: Logo[] }) {
  return (
    <div className="mt-4 overflow-hidden">
      {/* container needs group for hover pause */}
      <div className="group relative">
        {/* Track 1 */}
        <div
          className="flex items-center gap-12 py-2 will-change-transform [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          aria-label="Media logos"
        >
          <div className="flex items-center gap-12 animate-marquee-left group-hover:[animation-play-state:paused]">
            {logos.map((l, idx) => (
              <img
                key={`t1-${l.alt}-${idx}`}
                src={l.src}
                alt={l.alt}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
              />
            ))}
          </div>

          {/* Track 2 (duplicate) */}
          <div className="flex items-center gap-12 animate-marquee-left2 group-hover:[animation-play-state:paused]">
            {logos.map((l, idx) => (
              <img
                key={`t2-${l.alt}-${idx}`}
                src={l.src}
                alt={l.alt}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marqueeLeft2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 22s linear infinite;
        }
        .animate-marquee-left2 {
          animation: marqueeLeft2 22s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-left2 {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

