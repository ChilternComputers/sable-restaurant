import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sable restaurant. Find us at 42 Fitzroy Square, London W1T 6EY, or call 020 7946 0958.",
  alternates: { canonical: "https://sable-restaurant.pages.dev/contact/" },
  openGraph: {
    type: "website",
    title: "Contact | Sable",
    description: "Get in touch with Sable restaurant. Find us at 42 Fitzroy Square, London.",
    url: "https://sable-restaurant.pages.dev/contact/",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Sable Restaurant" }],
  },
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll>
          <SectionHeading subtitle="We'd Love to Hear from You" title="Contact" as="h1" />
        </AnimateOnScroll>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "64px" }}
        >
          {/* Contact details */}
          <AnimateOnScroll delay={0.1}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              }}
            >
              <div>
                <div
                  className="flex items-center text-brand-champagne"
                  style={{ gap: "12px", marginBottom: "16px" }}
                >
                  <MapPin size={20} aria-hidden="true" />
                  <h2
                    className="font-heading text-brand-cream"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Location
                  </h2>
                </div>
                <p
                  className="font-body text-brand-muted"
                  style={{ fontSize: "15px", lineHeight: 1.7 }}
                >
                  42 Fitzroy Square
                  <br />
                  Fitzrovia, London
                  <br />
                  W1T 6EY
                </p>
                <p
                  className="font-body text-brand-muted"
                  style={{ fontSize: "14px", marginTop: "8px" }}
                >
                  Nearest tube: Warren Street (Northern & Victoria lines)
                </p>
              </div>

              <div>
                <div
                  className="flex items-center text-brand-champagne"
                  style={{ gap: "12px", marginBottom: "16px" }}
                >
                  <Phone size={20} aria-hidden="true" />
                  <h2
                    className="font-heading text-brand-cream"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Phone
                  </h2>
                </div>
                <a
                  href="tel:+442079460958"
                  className="font-body text-brand-muted hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                  style={{ fontSize: "15px" }}
                >
                  020 7946 0958
                </a>
              </div>

              <div>
                <div
                  className="flex items-center text-brand-champagne"
                  style={{ gap: "12px", marginBottom: "16px" }}
                >
                  <Mail size={20} aria-hidden="true" />
                  <h2
                    className="font-heading text-brand-cream"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Email
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <a
                    href="mailto:hello@sablerestaurant.co.uk"
                    className="font-body text-brand-muted hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                    style={{ fontSize: "15px" }}
                  >
                    hello@sablerestaurant.co.uk
                  </a>
                  <p
                    className="font-body text-brand-muted"
                    style={{ fontSize: "13px" }}
                  >
                    General enquiries & reservations
                  </p>
                  <a
                    href="mailto:events@sablerestaurant.co.uk"
                    className="font-body text-brand-muted hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                    style={{ fontSize: "15px", marginTop: "8px" }}
                  >
                    events@sablerestaurant.co.uk
                  </a>
                  <p
                    className="font-body text-brand-muted"
                    style={{ fontSize: "13px" }}
                  >
                    Private dining & events
                  </p>
                </div>
              </div>

              <div>
                <div
                  className="flex items-center text-brand-champagne"
                  style={{ gap: "12px", marginBottom: "16px" }}
                >
                  <Clock size={20} aria-hidden="true" />
                  <h2
                    className="font-heading text-brand-cream"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Opening Hours
                  </h2>
                </div>
                <div
                  className="font-body text-brand-muted"
                  style={{ fontSize: "15px", lineHeight: 2 }}
                >
                  <p>Tuesday – Thursday: 6:00 pm – 10:00 pm</p>
                  <p>Friday – Saturday: 12:00 pm – 2:30 pm & 6:00 pm – 10:30 pm</p>
                  <p>Sunday: 12:00 pm – 4:00 pm</p>
                  <p>Monday: Closed</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Map placeholder */}
          <AnimateOnScroll delay={0.2}>
            <div
              className="bg-brand-surface border border-brand-muted/10 flex items-center justify-center"
              style={{
                aspectRatio: "1/1",
                maxHeight: "500px",
              }}
            >
              <div style={{ textAlign: "center", padding: "24px" }}>
                <MapPin
                  size={48}
                  className="text-brand-champagne"
                  style={{ margin: "0 auto 16px" }}
                  aria-hidden="true"
                />
                <p
                  className="font-heading text-brand-cream"
                  style={{ fontSize: "1.25rem", marginBottom: "8px" }}
                >
                  42 Fitzroy Square
                </p>
                <p
                  className="font-body text-brand-muted"
                  style={{ fontSize: "14px" }}
                >
                  London W1T 6EY
                </p>
                <p
                  className="font-body text-brand-muted"
                  style={{ fontSize: "12px", marginTop: "24px" }}
                >
                  Interactive map would be embedded here
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
