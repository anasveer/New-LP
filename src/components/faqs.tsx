"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "../../lib/utils";

export type FaqItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

type FaqAccordionProps = {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
};

export function FaqAccordion({
  title = "FAQ",
  subtitle = "Quick answers to the most common questions.",
  items,
  defaultOpenId,
  allowMultiple = false,
  className,
}: FaqAccordionProps) {
  const reduce = useReducedMotion();

  const [open, setOpen] = React.useState<string[]>(
    defaultOpenId ? [defaultOpenId] : items[0] ? [items[0].id] : []
  );

  const isOpen = (id: string) => open.includes(id);

  const toggle = (id: string) => {
    setOpen((prev) => {
      const currentlyOpen = prev.includes(id);
      if (allowMultiple) {
        return currentlyOpen ? prev.filter((x) => x !== id) : [...prev, id];
      }
      return currentlyOpen ? [] : [id];
    });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as any },
  });

  return (
    <section id="faq" className={cn("w-full py-15", className)}>
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div {...fadeUp(0)} className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-neutral-600">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* List */}
        <motion.div {...fadeUp(0.08)} className="mt-8 space-y-3">
          {items.map((it, idx) => {
            const opened = isOpen(it.id);

            return (
              <div key={it.id} className="group relative">
                {/* gradient border (soft) */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-400/25 via-violet-500/10 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div
                  className={cn(
                    "relative rounded-2xl",
                    "bg-white/5",
                    "ring-1 ring-black/5",
                    "shadow-[0_18px_50px_-35px_rgba(0,0,0,0.25)]",
                    "overflow-hidden"
                  )}
                >
                  {/* Question button */}
                  <button
                    type="button"
                    onClick={() => toggle(it.id)}
                    aria-expanded={opened}
                    aria-controls={`faq-${it.id}`}
                    className={cn(
                      "w-full flex items-center justify-between gap-4",
                      "px-4 sm:px-6 py-4 sm:py-5",
                      "text-left",
                      "transition-colors",
                      opened ? "bg-black/[0.03]" : "hover:bg-black/[0.03]"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {/* small index chip */}
                      <span
                        className={cn(
                          "mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full",
                          "bg-black/5 text-[11px] font-semibold text-neutral-700",
                          "ring-1 ring-black/5"
                        )}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm sm:text-base font-semibold text-neutral-900">
                        {it.question}
                      </span>
                    </div>

                    {/* Icon */}
                    <motion.span
                      animate={{ rotate: opened ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full",
                        "bg-black/5 ring-1 ring-black/5",
                        "text-neutral-700"
                      )}
                    >
                      {opened ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </motion.span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {opened && (
                      <motion.div
                        id={`faq-${it.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: reduce ? 0 : 0.35 },
                            opacity: { duration: reduce ? 0 : 0.25, delay: 0.05 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: reduce ? 0 : 0.25 },
                            opacity: { duration: reduce ? 0 : 0.15 },
                          },
                        }}
                        className="px-4 sm:px-6"
                      >
                        <div className="pb-5 sm:pb-6 pt-1 text-sm sm:text-[15px] leading-relaxed text-neutral-700">
                          {it.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
