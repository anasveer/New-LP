import { useEffect, useMemo, useState } from "react";

type VideoItem = {
  text: string;
  videoSrc: string; // ✅ MUST be public URL in Vite build: "/assets/videos/..."
  poster?: string;  // optional image poster (jpg/png/webp)
};

/**
 * ✅ VITE FIX:
 * Put your mp4 files inside:
 *   /public/assets/videos/v1.mp4
 *   /public/assets/videos/v3.mp4
 *   ...
 * Then reference them like: "/assets/videos/v1.mp4"
 *
 * ❌ NEVER use "/src/assets/..." in production URLs.
 */
const videos: VideoItem[] = [
  {
    text:
      "Stock trading has helped me build wealth over time. Investing in fundamentally strong companies and holding for the long term has been my best decision.",
    videoSrc: "/assets/videos/v1.mp4",
    // poster: "/assets/videos/v1.webp",
  },
  {
    text: "The signals are structured and easy to apply. I don’t overthink trades anymore.",
    // ✅ Best: download this file and host it locally too (hotlink can fail on deploy)
    videoSrc: "/assets/videos/ugc-6.mp4",
    // poster: "/assets/videos/ugc-6.webp",
  },
  {
    text: "Whenever I had a question, I got an answer quickly. That really improved my progress.",
    videoSrc: "/assets/videos/v3.mp4",
  },
  {
    text: "It feels like having experts with you. Practical guidance and strong community vibes.",
    videoSrc: "/assets/videos/v4.mp4",
  },
  {
    text: "Signals + analysis helped me improve entries and exits. More clarity and less stress.",
    videoSrc: "/assets/videos/v5.mp4",
  },
  {
    text: "Clean signals, good explanations, and a community that motivates you to stay consistent.",
    videoSrc: "/assets/videos/v6.mp4",
  },
];

export default function VideoTestimonials() {
  return (
    <section id="video-testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mt-3 text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            WHAT OUR MEMBERS FROM AROUND THE WORLD SAY
          </h3>
        </div>

        {/* List */}
        <div className="mt-10 space-y-6 sm:space-y-8">
          {videos.map((item, idx) => (
            <VideoRow key={idx} item={item} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoRow({ item, reverse }: { item: VideoItem; reverse: boolean }) {
  return (
    <div
      className={[
        "grid items-center gap-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-[#F4FBFF] via-white to-[#F6F2FF] p-5 shadow-sm",
        "lg:grid-cols-12 lg:gap-10 lg:p-7",
      ].join(" ")}
    >
      {/* Text */}
      <div className={["lg:col-span-6", reverse ? "lg:order-2" : "lg:order-1"].join(" ")}>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-black/5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Verified Member
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {item.text}
        </p>

        {/* ✅ Optional: show source path for debugging (remove later) */}
        {/* <p className="mt-2 text-xs text-slate-400">Source: {item.videoSrc}</p> */}
      </div>

      {/* Video */}
      <div className={["lg:col-span-6", reverse ? "lg:order-1" : "lg:order-2"].join(" ")}>
        <div className="relative group">
          <VideoWithAutoPoster
            src={item.videoSrc}
            poster={item.poster}
            className="
              w-full
              max-w-[520px]
              sm:max-w-[560px]
              mx-auto
              max-h-[320px]
              sm:max-h-[360px]
              lg:max-h-[380px]
              rounded-2xl
              object-cover
              opacity-95
              bg-black/5
            "
          />

          {/* Play overlay hint */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <span className="ml-1 text-slate-900">▶</span>
            </div>
          </div>

          {/* Top fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * If `poster` is provided (image), we use it.
 * If not, we TRY to auto-generate a poster from the video (near-first frame) using canvas.
 * NOTE: External videos may fail due to CORS; for deployed reliability, host mp4 locally in /public.
 */
function VideoWithAutoPoster({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const [autoPoster, setAutoPoster] = useState<string>("");

  const effectivePoster = poster || autoPoster;

  useEffect(() => {
    let cancelled = false;

    if (poster) return;

    // ✅ Only attempt auto-poster for SAME-ORIGIN videos (public hosted)
    // External mp4 often breaks canvas due to CORS.
    const isExternal = /^https?:\/\//i.test(src);
    if (isExternal) return;

    const v = document.createElement("video");
    v.src = src;
    v.muted = true;
    v.playsInline = true;
    v.preload = "metadata";

    const cleanup = () => {
      v.removeAttribute("src");
      try {
        v.load();
      } catch {}
    };

    const capture = () => {
      if (cancelled) return;

      // some videos are black at 0.0 — pick a tiny offset
      const targetTime = 0.1;

      const onSeeked = () => {
        v.removeEventListener("seeked", onSeeked);
        if (cancelled) return;

        const canvas = document.createElement("canvas");
        canvas.width = v.videoWidth || 1280;
        canvas.height = v.videoHeight || 720;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        try {
          ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL("image/png");
          if (!cancelled) setAutoPoster(dataUrl);
        } catch {
          // ignore
        } finally {
          cleanup();
        }
      };

      v.addEventListener("seeked", onSeeked);

      try {
        v.currentTime = targetTime;
      } catch {
        onSeeked();
      }
    };

    const onLoadedMetadata = () => {
      if (v.readyState >= 2) capture();
      else v.addEventListener("loadeddata", capture, { once: true });
    };

    v.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });
    v.addEventListener("error", cleanup, { once: true });

    try {
      v.load();
    } catch {}

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [src, poster]);

  const type = useMemo(() => {
    const lower = src.toLowerCase();
    if (lower.endsWith(".webm")) return "video/webm";
    return "video/mp4";
  }, [src]);

  return (
    <video
      className={className}
      controls
      preload="metadata"
      playsInline
      poster={effectivePoster || undefined}
    >
      <source src={src} type={type} />
    </video>
  );
}