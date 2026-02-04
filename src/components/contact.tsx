import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

type FinalCtaProps = {
  title?: string;
  buttonText?: string;
  className?: string;
};

export function FinalCta({
  title = "START TRADING WITH THE WORLD’S\nFASTEST-GROWING BROKER",
  buttonText = "Join the FREE Group",
  className,
}: FinalCtaProps) {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className={cn("w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative mx-auto w-full max-w-7xl
          rounded-3xl overflow-hidden
          bg-gradient-to-br
          from-blue-600 via-cyan-500 to-emerald-500
        "
      >
        {/* Glass overlay for fancy depth */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Glow effect */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 sm:py-24 lg:py-28">
          <motion.h2
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              text-white
              text-2xl sm:text-3xl lg:text-4xl
              font-extrabold tracking-tight leading-snug
            "
            style={{ whiteSpace: "pre-line" }}
          >
            {title}
          </motion.h2>

          <motion.a
            href="https://t.me/+ilBOOK3W_wtiMjZi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={reduce ? {} : { scale: 1.06 }}
            whileTap={reduce ? {} : { scale: 0.97 }}
            className="
              mt-8 inline-flex items-center justify-center
              rounded-full px-8 py-4
              text-sm sm:text-base font-semibold
              text-blue-900
              bg-white
              shadow-[0_25px_70px_-20px_rgba(0,200,255,0.9)]
            "
          >
            {buttonText}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default FinalCta;