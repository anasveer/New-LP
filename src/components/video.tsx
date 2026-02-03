

type VideoItem = {

  text: string;
  
  
  videoSrc: string; // mp4/webm url or local path e.g. "/assets/videos/v1.mp4"
  poster?: string;  // optional poster image
};

const videos: VideoItem[] = [
  {

    text: "Stock trading has helped me build wealth over time. Investing in fundamentally strong companies and holding for the long term has been my best decision.",
   
    videoSrc: "/src/assets/v1.mp4",
    poster: "/src/assets/v1.mp4",
  },
//   {
    
//     text: "The signals are structured and easy to apply. I don’t overthink trades anymore.",
    
//     videoSrc: "https://thesignalsbank.com/wp-content/uploads/UGC-6.mp4",
//     poster: "/assets/videos/v2.webp",
//   },
//   {
    
//     text: "Whenever I had a question, I got an answer quickly. That really improved my progress.",
    
//     videoSrc: "/assets/videos/v3.mp4",
//     poster: "/assets/videos/v3.webp",
//   },
//   {
    
//     text: "It feels like having experts with you. Practical guidance and strong community vibes.",
   
//     videoSrc: "/assets/videos/v4.mp4",
//     poster: "/assets/videos/v4.webp",
//   },
//   {
    
//     text: "Signals + analysis helped me improve entries and exits. More clarity and less stress.",
    
//     videoSrc: "/assets/videos/v5.mp4",
//     poster: "/assets/videos/v5.webp",
//   },
//   {
    
//     text: "Clean signals, good explanations, and a community that motivates you to stay consistent.",
    
//     videoSrc: "/assets/videos/v6.mp4",
//     poster: "/assets/videos/v6.webp",
//   },
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

       

       
      </div>

      {/* Video */}
      <div className={["lg:col-span-6", reverse ? "lg:order-1" : "lg:order-2"].join(" ")}>
       
       <video
  className="
    w-full
    max-h-[520px]
    sm:max-h-[560px]
    lg:max-h-[520px]
    xl:max-h-[540px]
    rounded-3xl
    object-cover
    opacity-95
  "
  controls
  preload="metadata"
  playsInline
  poster={item.poster}
>


            <source src={item.videoSrc} />
          </video>

          {/* Play overlay hint (only when not interacting) */}
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
    
  );
}
