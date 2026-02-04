import { FocusRail, type FocusRailItem } from "./ui/focus-rail";

import client1 from "../assets/client1.webp";
import client2 from "../assets/client2.webp";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
// import client5 from "../assets/client5.png";

const DEMO_ITEMS: FocusRailItem[] = [
  { id: 1, imageSrc: client1 },
  { id: 2, imageSrc: client2 },
  { id: 3, imageSrc: client3 },
  { id: 4, imageSrc: client4 },
  // { id: 5, imageSrc: client5 },
];

export default function DemoOne() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full bg-[#070A1A] flex flex-col items-center justify-center py-20 mt-10">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          Results from our amazing members
        </h1>
      </div>

      <FocusRail items={DEMO_ITEMS} autoPlay={false} loop={true} />
    </main>
  );
}
