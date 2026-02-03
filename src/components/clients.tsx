import { FocusRail, type FocusRailItem } from "./ui/focus-rail";

const DEMO_ITEMS: FocusRailItem[] = [
  {
    id: 1,
  
    imageSrc: "/src/assets/client1.webp",
    
  },
  {
    id: 2,
   
    imageSrc: "/src/assets/client2.webp",

  },
  {
    id: 3,
    
    imageSrc: "/src/assets/client3.png",
    
  },
  {
    id: 4,
   
    imageSrc: "/src/assets/client4.png",

  },
//   {
//     id: 5,
    
//     imageSrc: "/src/assets/client5.png",
    
//   },
];

export default function DemoOne() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full bg-neutral-950 flex flex-col items-center justify-center py-20 mt-10">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Results from our amazing members</h1>
        
      </div>

      <FocusRail items={DEMO_ITEMS} autoPlay={false} loop={true} />
    </main>
  );
}
