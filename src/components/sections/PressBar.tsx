
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { pressItems } from "@/data/press";

export function PressBar() {
  return (
    <section
      className="bg-brand-surface border-y border-brand-muted/10"
      style={{ padding: "48px 24px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimateOnScroll>
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "48px" }}
          >
            {pressItems.map((item) => (
              <div
                key={item.publication}
                style={{ textAlign: "center" }}
              >
                <p
                  className="font-heading text-brand-cream/60"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "0.1em",
                    marginBottom: "4px",
                  }}
                >
                  {item.publication}
                </p>
                <p
                  className="font-accent italic text-brand-muted"
                  style={{ fontSize: "12px" }}
                >
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
