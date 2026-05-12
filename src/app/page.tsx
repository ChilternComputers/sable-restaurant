import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { MenuHighlights } from "@/components/sections/MenuHighlights";
import { PrivateDiningPreview } from "@/components/sections/PrivateDiningPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { PressBar } from "@/components/sections/PressBar";
import { ReservationCTA } from "@/components/sections/ReservationCTA";
import { IMAGES, unsplash } from "@/data/images";

export default function Home() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={unsplash(IMAGES.hero, 1920, { quality: 30 })}
        fetchPriority="high"
      />
      <Hero />
      <AboutPreview />
      <MenuHighlights />
      <PrivateDiningPreview />
      <Testimonials />
      <GalleryPreview />
      <PressBar />
      <ReservationCTA />
    </>
  );
}
