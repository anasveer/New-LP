import { HeroSection } from "./ui/feature-carousel"

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"

export default function DemoPage() {
  const images = [
    { src: img1, alt: "Portrait 1" },
    { src: img2, alt: "Portrait 2" },
    { src: img3, alt: "Portrait 3" },
    { src: img4, alt: "Portrait 4" },
    { src: img5, alt: "Portrait 5" },
    { src: img6, alt: "Portrait 6" },
    { src: img7, alt: "Portrait 7" },
    { src: img8, alt: "Portrait 8" },
  ]

  const title = (
    <>
      RESULTS OF {" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        OUR
      </span>{" "}
      MEMBERS
    </>
  )

  return (
    <div className="w-full">
      <HeroSection title={title} images={images} appStoreLink="#" googlePlayLink="#" />
    </div>
  )
}
