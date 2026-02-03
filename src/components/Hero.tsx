

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
      {/* Trust strip (same) */}
    

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FBFBFE]">
        {/* softer blobs (lighter than before) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-violet-200/35 blur-3xl" />
          <div className="absolute top-24 right-10 h-72 w-72 rounded-full bg-emerald-200/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
          {/* Headline (same copy, better leading) */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
        </div>

            <h1 className="mt-5 text-balance text-2xl font-extrabold tracking-tight leading-[1.35] text-slate-900 sm:text-4xl sm:leading-[1.3] lg:text-5xl lg:leading-[1.25]">
              JOIN TSB AND BENEFIT DAILY FROM {" "}
              <span className="relative inline-block">
                <span className="relative z-10"> OUR FREE TRADING SIGNALSSIGNALS</span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 z-0 h-3 rounded-full bg-emerald-200/60"
                />
              </span>
            </h1>

            {/* keep empty as you had */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base" />

            {/* CTA (same as your file) */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onSecondaryCta}
                className="group w-full rounded-full bg-gradient-to-r from-[#1FB6C8] to-[#6C49D8] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6C49D8]/15 transition hover:translate-y-[-1px] active:translate-y-0 sm:w-auto"
              >
                Tritt der KOSTENLOSEN Gruppe bei
                <span
                  className="ml-2 inline-block transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Main layout: Fancy text (L) + Image (Center) + Fancy text (R) */}
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-12">
            {/* Left fancy text cards (replaces awards) */}
            <div className="order-2 space-y-4 text-center sm:text-left lg:order-1 lg:col-span-3">
              <InfoCard
                icon="📈"
                title="Tägliche Trading Signale"
                text="Klare Ein- und Ausstiegspunkte – strukturiert, verständlich und direkt umsetzbar."
              />
              <InfoCard
                icon="🧠"
                title="Analysen von Profis"
                text="Erfahrene Trader liefern Markt-Insights, damit du schneller bessere Entscheidungen triffst."
              />
              <InfoCard
                icon="🤝"
                title="Community Support"
                text="Gemeinsam lernen, Fragen stellen und mit der TSB Community wachsen."
              />
            </div>

            {/* Center visual (keep, just slightly refined) */}
            <div className="order-1 lg:order-2 lg:col-span-6">
              <div className="mx-auto max-w-xl">
                <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_22px_70px_rgba(15,23,42,0.10)]">
                  {/* subtle top gloss */}
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

            {/* Right fancy text cards (replaces awards) */}
            <div className="order-3 space-y-4 text-center sm:text-left lg:col-span-3">
              <InfoCard
                icon="✅"
                title="Transparente Ergebnisse"
                text="Nachvollziehbare Performance – ohne leere Versprechen oder unnötigen Hype."
              />
              <InfoCard
                icon="⚡"
                title="Einfacher Einstieg"
                text="Ideal für Anfänger & Fortgeschrittene – klare Struktur, klare Steps."
              />
              <InfoCard
                icon="🆓"
                title="Kostenlos & Unverbindlich"
                text="Teste die Signale kostenlos und entscheide in Ruhe, ob es zu dir passt."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-black/5 backdrop-blur">
      {text}
    </span>
  );
}
function InfoCard({
  
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#EAF7FB] via-[#F1F4FF] to-[#F8FAFF] p-4 ring-1 ring-[#1FB6C8]/20 transition hover:shadow-md">
      
      {/* soft gradient glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
      >
        <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#1FB6C8]/25 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#6C49D8]/20 blur-2xl" />
      </div>

      <div className="relative flex items-start gap-3">
        {/* Icon bubble (button-style) */}
        <div className="flex h-5 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#1FB6C8] to-[#6C49D8] text-white shadow-sm">
        
        </div>

        <div className="min-w-0">
          <p className="text-sm font-extrabold text-slate-900">
            {title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

