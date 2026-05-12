
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { galleryImages } from "@/data/gallery";

export function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section
      className="bg-brand-dark"
      style={{ padding: "120px 24px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimateOnScroll>
          <SectionHeading subtitle="A Glimpse Inside" title="Gallery" />
        </AnimateOnScroll>

        <div
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ gap: "8px" }}
        >
          {preview.map((img, i) => (
            <AnimateOnScroll key={img.src} delay={i * 0.1}>
              <div
                className="relative overflow-hidden group"
                style={{ aspectRatio: i === 0 || i === 5 ? "1/1" : "4/3" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/30 transition-colors duration-500" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div
            style={{
              marginTop: "48px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button href="/gallery" variant="outline">
              View Full Gallery
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
