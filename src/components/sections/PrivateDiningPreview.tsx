
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { IMAGES, unsplash, unsplashSrcSet } from "@/data/images";

export function PrivateDiningPreview() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "600px" }}
    >
      {/* Background — responsive image, no bg-fixed (breaks on iOS) */}
      <div className="absolute inset-0">
        <img
          src={unsplash(IMAGES.privateDining, 1920, { quality: 30 })}
          srcSet={unsplashSrcSet(IMAGES.privateDining, [480, 800, 1200, 1440, 1920], { quality: 30 })}
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
        <div className="absolute inset-0 bg-brand-black/70" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{
          minHeight: "600px",
          padding: "120px 24px",
        }}
      >
        <AnimateOnScroll>
          <div
            style={{
              maxWidth: "640px",
              textAlign: "center",
            }}
          >
            <p
              className="font-accent uppercase text-brand-champagne"
              style={{
                fontSize: "14px",
                letterSpacing: "0.2em",
                marginBottom: "16px",
              }}
            >
              Exclusive Spaces
            </p>
            <h2
              className="font-heading text-brand-cream"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Private Dining
            </h2>
            <p
              className="font-body text-brand-cream/70"
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                marginBottom: "40px",
              }}
            >
              From intimate celebrations to grand occasions, our private
              dining rooms offer bespoke experiences with dedicated
              service, curated menus, and impeccable attention to detail.
            </p>
            <Button href="/private-dining" variant="outline" size="lg">
              Explore Our Spaces
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
