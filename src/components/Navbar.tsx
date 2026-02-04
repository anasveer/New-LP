import { useEffect, useMemo, useState } from "react";
import logo from "../assets/logo.png";

type NavItem = { id: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "why", label: "Why TSB?" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const items = useMemo(() => NAV_ITEMS, []);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll
  const goTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Scroll spy + navbar style on scroll
  useEffect(() => {
    const ids = ["home", "why", "trust", "testimonials", "faq"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 10);

      // determine active section
      const offset = 120; // navbar height buffer
      let current = "home";
      for (const sec of sections) {
        const top = sec.getBoundingClientRect().top + window.scrollY;
        if (y + offset >= top) current = sec.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 ">
      <div
  className={cn(
    "border-b transition-all",
   scrolled
  ? "border-white/10 bg-gradient-to-r from-[#0F172A]/80 via-[#1E3A8A]/80 to-[#4C1D95]/80 backdrop-blur-xl shadow-2xl"
  : "border-transparent bg-gradient-to-r from-[#020617] via-[#0F172A] to-[#1E3A8A]"
)}

>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Brand */}
          <button
            type="button"
            onClick={() => goTo("home")}
            className="flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-label="Go to top"
          >
            <img
    src={logo}
    alt="The Signals Bank"
    className="h-10 w-50"
  />
           
          </button>

          {/* Desktop Nav */}
         <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
  {items.map((it) => (
    <button
      key={it.id}
      type="button"
      onClick={() => goTo(it.id)}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
        active === it.id
          ? "bg-white/90 text-slate-900 shadow-sm"
          : "text-white/80 hover:bg-white/15 hover:text-white"
      )}
    >
      {it.label}
    </button>
  ))}
</nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <a
              href="https://t.me/+ilBOOK3W_wtiMjZi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-gradient-to-r from-[#1FB6C8] to-[#6C49D8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-slate-800 active:translate-y-0 sm:inline-flex"
            >
              Join Now
            </a>


            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 lg:hidden"
              aria-label="Open menu"
            >
              <span className="mr-2 hidden sm:inline">Menu</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/35"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-4 py-4">
              <div className="flex items-center gap-3">
                <img
                  src="/src/assets/logo.png"
                  alt="The Signals Bank"
                  width={62}
                  height={32}
                  className="h-8 w-8  "
                />
                <p className="text-sm font-semibold text-slate-900">The Signals Bank</p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-slate-700 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="px-4 py-4">
              <div className="space-y-2">
                {items.map((it) => (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => goTo(it.id)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition",
                      active === it.id
                        ? "bg-slate-900 text-white"
                        : "bg-slate-50 text-slate-900 hover:bg-slate-100"
                    )}
                  >
                    {it.label}
                    <span className="text-slate-400" aria-hidden="true">
                      →
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="https://t.me/+ilBOOK3W_wtiMjZi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition active:scale-[0.99]"
                >
                  Join Now
                </a>

                

              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
