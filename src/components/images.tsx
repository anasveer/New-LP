
import { HeroSection } from "./ui/feature-carousel"

export default function DemoPage() {
  const images = [
    {
      src: "/src/assets/img1.jpg",
      alt: "Portrait 1",
    },
    {
      src: "/src/assets/img2.jpg",
      alt: "Portrait 2",
    },
    {
      src: "/src/assets/img3.jpg",
      alt: "Portrait 3",
    },
    {
      src: "/src/assets/img4.jpg",
      alt: "Portrait 4",
    },
    {
      src: "/src/assets/img5.jpg",
      alt: "Portrait 5",
    },
    {
      src: "/src/assets/img6.jpg",
      alt: "Portrait 6",
    },
    {
      src: "/src/assets/img7.jpg",
      alt: "Portrait 7",
    },
    {
      src: "/src/assets/img8.jpg",
      alt: "Portrait 8",
    },
  ]

  const title = (
    <>
      RESULTS OF  {" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        OUR
      </span>{" "}
      MEMBERS
    </>
  )

  return (
    <div className="w-full">
      <HeroSection
        title={title}
        
        images={images}
        appStoreLink="#"
        googlePlayLink="#"
      />
    </div>
  )
}
