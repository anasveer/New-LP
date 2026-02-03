"use client";


import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

type FinalCtaProps = {
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  bgImage: string;
  logoImage: string;
  className?: string;
};

export function FinalCta({
  title = "START TRADING WITH THE WORLD’S\nFASTEST-GROWING BROKER",
  buttonText = "Join the FREE Group",
  buttonHref = "#",
  bgImage,
  logoImage,
  className,
}: FinalCtaProps) {
  const reduce = useReducedMotion();

  return (
    <section className={cn("w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={cn(
          "relative mx-auto w-full max-w-7xl",
          // 🔥 top & bottom rounded only
          "rounded-t-3xl rounded-b-3xl overflow-hidden"
        )}
      >
        {/* Background Image */}
        <reve>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        </reve>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 sm:py-24 lg:py-28">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "text-white",
              "text-2xl sm:text-3xl lg:text-4xl",
              "font-extrabold tracking-tight",
              "leading-snug"
            )}
            style={{ whiteSpace: "pre-line" }}
          >
            {title}
          </motion.h2>

          {/* CTA Button (single) */}
          <motion.a
            href={buttonHref}
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={reduce ? {} : { scale: 1.05 }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            className={cn(
              "mt-8 inline-flex items-center justify-center",
              "rounded-full px-7 py-3.5",
              "text-sm sm:text-base font-semibold",
              "text-black",
              "bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400",
              "shadow-[0_20px_60px_-20px_rgba(0,255,200,0.6)]",
              "transition-all"
            )}
          >
            {buttonText}
          </motion.a>

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-3 text-white/90"
          >
            <img
              src={logoImage}
              alt="The Signals Bank"
              className="h-12 w-auto"
              draggable={false}
            />
           
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
