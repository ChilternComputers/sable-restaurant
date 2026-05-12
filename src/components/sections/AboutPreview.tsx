
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section
      className="bg-brand-black"
      style={{ padding: "120px 24px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: "64px" }}
        >
          {/* Image — offset for editorial feel */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src="/images/unsplash/1577219491135-ce391730fb2c.webp"
                  alt="Head Chef Marcus Webb in the kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Offset accent border */}
              <div
                className="absolute border border-brand-champagne/30 hidden lg:block"
                style={{
                  top: "24px",
                  left: "24px",
                  right: "-24px",
                  bottom: "-24px",
                  zIndex: -1,
                }}
              />
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll direction="right" delay={0.2}>
            <SectionHeading
              subtitle="Our Story"
              title="A Passion for Provenance"
              align="left"
            />
            <p
              className="font-body text-brand-muted"
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Sable was born from Head Chef Marcus Webb&apos;s belief that
              extraordinary dining begins with extraordinary ingredients.
              Every dish on our menu tells the story of the farmers,
              fishermen, and foragers who make our work possible.
            </p>
            <p
              className="font-accent italic text-brand-cream/70"
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}
            >
              &ldquo;We don&apos;t follow trends. We follow the seasons,
              and let the ingredients speak for themselves.&rdquo;
            </p>
            <Button href="/about" variant="outline">
              Our Story
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
