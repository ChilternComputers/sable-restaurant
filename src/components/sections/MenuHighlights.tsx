
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DietaryBadge } from "@/components/ui/DietaryBadge";
import { menuItems } from "@/data/menu";

export function MenuHighlights() {
  const featured = menuItems.filter((item) => item.featured && item.image);

  return (
    <section
      className="bg-brand-dark"
      style={{ padding: "120px 24px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimateOnScroll>
          <SectionHeading
            subtitle="From Our Kitchen"
            title="Signature Dishes"
          />
        </AnimateOnScroll>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "48px" }}
        >
          {featured.slice(0, 4).map((item, i) => (
            <AnimateOnScroll key={item.name} delay={i * 0.15}>
              <div
                className="group bg-brand-surface overflow-hidden"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "3/2" }}
                >
                  <Image
                    src={item.image as string}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <div
                    className="flex items-start justify-between"
                    style={{ marginBottom: "8px" }}
                  >
                    <h3
                      className="font-heading text-brand-cream"
                      style={{ fontSize: "1.25rem" }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="font-accent text-brand-champagne"
                      style={{
                        fontSize: "1.25rem",
                        whiteSpace: "nowrap",
                        marginLeft: "16px",
                      }}
                    >
                      £{item.price}
                    </span>
                  </div>
                  <p
                    className="font-body text-brand-muted"
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      marginBottom: "12px",
                    }}
                  >
                    {item.description}
                  </p>
                  {item.dietary.length > 0 && (
                    <div className="flex flex-wrap" style={{ gap: "6px" }}>
                      {item.dietary.map((d) => (
                        <DietaryBadge key={d} flag={d} />
                      ))}
                    </div>
                  )}
                </div>
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
            <Button href="/menu" variant="outline">
              View Full Menu
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
