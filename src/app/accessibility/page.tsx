import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Sable Restaurant's accessibility statement — our commitment to WCAG 2.1 AA compliance and inclusive dining for all guests.",
  alternates: { canonical: "https://sable-restaurant.pages.dev/accessibility/" },
  openGraph: {
    type: "website",
    title: "Accessibility | Sable",
    description:
      "Our commitment to digital accessibility and inclusive dining.",
    url: "https://sable-restaurant.pages.dev/accessibility/",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Sable Restaurant" }],
  },
};

export default function AccessibilityPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll>
          <SectionHeading
            title="Accessibility"
            showDivider={false}
            as="h1"
          />
        </AnimateOnScroll>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <AnimateOnScroll delay={0.1}>
            <div>
              <h2
                className="font-heading text-brand-cream"
                style={{ fontSize: "1.25rem", marginBottom: "12px" }}
              >
                Our Commitment
              </h2>
              <p
                className="font-body text-brand-muted"
                style={{ fontSize: "15px", lineHeight: 1.8 }}
              >
                Sable is committed to ensuring digital accessibility for
                people with disabilities. We continually work to improve the
                user experience for everyone and aim to conform to WCAG 2.1
                Level AA standards.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div>
              <h2
                className="font-heading text-brand-cream"
                style={{ fontSize: "1.25rem", marginBottom: "12px" }}
              >
                Accessibility Features
              </h2>
              <ul
                className="font-body text-brand-muted"
                style={{
                  fontSize: "15px",
                  lineHeight: 2,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                {[
                  "Semantic HTML with proper heading hierarchy",
                  "Skip-to-content navigation link",
                  "Keyboard-navigable menus and interactive elements",
                  "ARIA labels on all interactive components",
                  "Sufficient colour contrast ratios (WCAG AA)",
                  "Focus-visible indicators on all focusable elements",
                  "Touch targets meet minimum 44px sizing",
                  "Reduced motion support for users who prefer it",
                  "Responsive design that works across all devices",
                  "Alt text on all images",
                ].map((feature) => (
                  <li key={feature}>
                    <span
                      className="text-brand-champagne"
                      style={{ marginRight: "8px" }}
                    >
                      —
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div>
              <h2
                className="font-heading text-brand-cream"
                style={{ fontSize: "1.25rem", marginBottom: "12px" }}
              >
                At the Restaurant
              </h2>
              <p
                className="font-body text-brand-muted"
                style={{ fontSize: "15px", lineHeight: 1.8 }}
              >
                Sable is committed to welcoming all guests. Our restaurant
                features step-free access to the ground floor dining room,
                accessible restrooms, and large-print menus available on
                request. Assistance dogs are welcome. Please let us know of
                any requirements when booking so we can ensure your comfort.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.25}>
            <div>
              <h2
                className="font-heading text-brand-cream"
                style={{ fontSize: "1.25rem", marginBottom: "12px" }}
              >
                Feedback
              </h2>
              <p
                className="font-body text-brand-muted"
                style={{ fontSize: "15px", lineHeight: 1.8 }}
              >
                We welcome your feedback on the accessibility of our website.
                If you encounter any barriers or have suggestions for
                improvement, please contact us at{" "}
                <a
                  href="mailto:hello@sablerestaurant.co.uk"
                  className="text-brand-champagne hover:text-brand-cream transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                >
                  hello@sablerestaurant.co.uk
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+442079460958"
                  className="text-brand-champagne hover:text-brand-cream transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                >
                  020 7946 0958
                </a>
                .
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll>
          <p
            className="font-body text-brand-muted"
            style={{
              fontSize: "13px",
              textAlign: "center",
              marginTop: "64px",
            }}
          >
            This is a demo website. This accessibility statement is for illustration purposes only.
          </p>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
