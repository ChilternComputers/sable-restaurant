import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { IMAGES, unsplash, unsplashSrcSet } from "@/data/images";

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background — responsive image instead of CSS background-image */}
      <div className="absolute inset-0">
        <img
          src={unsplash(IMAGES.hero, 1920, { quality: 30 })}
          srcSet={unsplashSrcSet(IMAGES.hero, [480, 800, 1200, 1440, 1920], { quality: 30 })}
          sizes="100vw"
          alt=""
          role="presentation"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-brand-black/60" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "800px",
        }}
      >
        <p
          className="font-accent italic text-brand-champagne hero-fade-in"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            marginBottom: "16px",
            animationDelay: "0.2s",
          }}
        >
          Modern European Fine Dining
        </p>

        <h1
          className="font-heading text-brand-cream hero-fade-in"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "0.05em",
            marginBottom: "24px",
            animationDelay: "0.4s",
          }}
        >
          Sable
        </h1>

        <div
          className="hero-fade-in"
          style={{ marginBottom: "24px", animationDelay: "0.6s" }}
        >
          <Divider />
        </div>

        <p
          className="font-body text-brand-cream/80 hero-fade-in"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: 1.7,
            maxWidth: "560px",
            marginBottom: "40px",
            animationDelay: "0.8s",
          }}
        >
          Seasonal, ingredient-led cuisine crafted with care.
          An intimate dining experience in the heart of London.
        </p>

        <div
          className="flex flex-wrap items-center justify-center hero-fade-in"
          style={{ gap: "16px", animationDelay: "1s" }}
        >
          <Button href="/reservations" variant="primary" size="lg">
            Reserve a Table
          </Button>
          <Button href="/menu" variant="outline" size="lg">
            View Menu
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-fade-in"
        style={{ animationDelay: "1.5s" }}
      >
        <div
          className="border border-brand-muted/40 rounded-full scroll-bounce"
          style={{ width: "24px", height: "40px", position: "relative" }}
        >
          <div
            className="bg-brand-champagne rounded-full absolute scroll-dot"
            style={{
              width: "3px",
              height: "8px",
              left: "50%",
              top: "6px",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
