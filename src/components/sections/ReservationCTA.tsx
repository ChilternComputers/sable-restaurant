
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { IMAGES, unsplash, unsplashSrcSet } from "@/data/images";

export function ReservationCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "500px" }}
    >
      {/* Background — responsive image, no bg-fixed (breaks on iOS) */}
      <div className="absolute inset-0">
        <img
          src={unsplash(IMAGES.reservationCTA, 1920, { quality: 30 })}
          srcSet={unsplashSrcSet(IMAGES.reservationCTA, [480, 800, 1200, 1440, 1920], { quality: 30 })}
          sizes="100vw"
          alt=""
          role="presentation"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-brand-black/75" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{
          minHeight: "500px",
          padding: "80px 24px",
        }}
      >
        <AnimateOnScroll>
          <div style={{ textAlign: "center", maxWidth: "600px" }}>
            <p
              className="font-accent italic text-brand-champagne"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                marginBottom: "16px",
              }}
            >
              Your table awaits
            </p>
            <h2
              className="font-heading text-brand-cream"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Reserve Your Experience
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <Divider />
            </div>
            <p
              className="font-body text-brand-cream/70"
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              Join us for an evening of exceptional cuisine, warm hospitality,
              and memories that linger long after the last course.
            </p>
            <div
              className="flex flex-wrap items-center justify-center"
              style={{ gap: "16px" }}
            >
              <Button href="/reservations" variant="primary" size="lg">
                Book a Table
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
