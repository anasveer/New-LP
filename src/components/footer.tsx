"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Youtube,
  Send,
  Mail,
  MapPin,
  ShieldAlert,
  Globe2,
  CreditCard,
} from "lucide-react";
import { cn } from "../../lib/utils";
// import favLogo from "../assets/fav.webp";

type FooterProps = {
  className?: string;
  brandName?: string;
  logoSrc?: string; // ✅ string url only
  contactEmail?: string;
  social?: {
    facebook?: string;
    twitter?: string;
    youtube?: string;
    telegram?: string;
  };
  riskWarning?: string;
  restrictions?: string;
  companyInfo?: string;
};

export function SiteFooter({
  className,
  brandName = "The Signals Bank",
  // logoSrc, // ✅ keep optional
  contactEmail = "support@thesignalsbank.com",
  social = {
    facebook: "#",
    twitter: "#",
    youtube: "#",
    telegram: "#",
  },
  riskWarning = `All investments entail risks and may result in both profits and losses. Trading leveraged derivative products such as Forex and CFDs carries a high level of risk to your capital and may not be suitable for all investors. Prices may change quickly and you could lose more than your invested capital. Make sure you understand the risks and seek independent advice if necessary.`,
  restrictions = `This material is not directed at or intended for distribution to or use by any person or entity in any jurisdiction where such distribution or use would be contrary to local law or regulation.`,
  companyInfo = `THESIGNALBANK International PTY Limited • Company Registration: 65439795 • Address: Level 35, 31 Market Street, Sydney NSW 2000, Australia`,
}: FooterProps) {
  const reduce = useReducedMotion();

  // ✅ Vite-safe: imported favLogo is already a string URL
  // const resolvedLogoSrc = logoSrc?.trim() ? logoSrc : favLogo;

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as any },
  });

  const item = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as any },
  });

  return (
    <footer
      className={cn(
        "relative w-full overflow-hidden",
        "bg-[#070A1A] text-white",
        className
      )}
    >
      {/* subtle ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/25" />
      </div>

      {/* TOP BAR */}
      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-10">
          <motion.div
            {...fadeUp(0)}
            className="flex flex-col items-center justify-between gap-6 sm:flex-row"
          >
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <SocialIcon href={social.facebook} label="Facebook">
                <Facebook className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={social.twitter} label="Twitter">
                <Twitter className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={social.youtube} label="YouTube">
                <Youtube className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={social.telegram} label="Telegram">
                <Send className="h-5 w-5" />
              </SocialIcon>
            </div>

            {/* Contact */}
            <motion.a
              href={`mailto:${contactEmail}`}
              whileHover={reduce ? {} : { y: -2 }}
              whileTap={reduce ? {} : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className={cn(
                "group inline-flex items-center gap-3",
                "rounded-full px-5 py-3",
                "bg-white/5 ring-1 ring-white/12",
                "hover:bg-white/10",
                "transition-colors"
              )}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                <Mail className="h-4 w-4 text-white/80" />
              </span>
              <div className="text-left">
                <div className="text-sm font-semibold">Contact Us</div>
                <div className="text-xs text-white/60">{contactEmail}</div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* MAIN */}
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Logo block */}
            <motion.div {...item(0.05)} className="lg:col-span-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-[1px] rounded-full bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-emerald-400/25" />
                  {/* <div className="relative h-16 w-16 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
                     <img
                      src={resolvedLogoSrc}
                      alt={brandName}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>  */}
                </div>

                <div>
                  <div className="text-lg font-bold tracking-tight">
                    {brandName}
                  </div>
                  <div className="text-sm text-white/60">
                    Signals • Education • Community
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 text-white/70">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-white/60" />
                <p className="text-sm leading-relaxed">{companyInfo}</p>
              </div>
            </motion.div>

            {/* Text blocks */}
            <motion.div {...item(0.12)} className="lg:col-span-8 space-y-6">
              <InfoCard
                icon={<ShieldAlert className="h-5 w-5" />}
                title="Risk Warning"
                text={riskWarning}
              />
              <InfoCard
                icon={<Globe2 className="h-5 w-5" />}
                title="Regional Restrictions"
                text={restrictions}
              />
            </motion.div>
          </div>

          {/* payments + bottom */}
          <motion.div
            {...item(0.25)}
            className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3 text-white/60">
              <CreditCard className="h-5 w-5" />
              <span className="text-sm">Secure payments supported</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <PayChip label="VISA" />
            </div>
          </motion.div>

          <div className="mt-8 text-center text-xs text-white/45">
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href || "#"}
      aria-label={label}
      className={cn(
        "group inline-flex h-11 w-11 items-center justify-center rounded-full",
        "bg-white/5 ring-1 ring-white/12",
        "hover:bg-white/10 transition-colors"
      )}
    >
      <span className="text-white/70 group-hover:text-white transition-colors">
        {children}
      </span>
    </a>
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
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-5 sm:p-6",
        "bg-white/5 ring-1 ring-white/12",
        "shadow-[0_18px_60px_-40px_rgba(0,0,0,0.5)]"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 text-white/80">
          {icon}
        </div>
        <h4 className="text-sm sm:text-base font-semibold">{title}</h4>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-white/70">{text}</p>

      {/* subtle corner glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
    </div>
  );
}

function PayChip({ label }: { label: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center",
        "h-10 rounded-xl px-4",
        "bg-white/5 ring-1 ring-white/12",
        "text-sm font-semibold text-white/70"
      )}
    >
      {label}
    </div>
  );
}
