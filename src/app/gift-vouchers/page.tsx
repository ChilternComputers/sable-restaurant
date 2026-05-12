import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { giftVouchers } from "@/data/gift-vouchers";
import { Gift } from "lucide-react";

export const metadata: Metadata = {
  title: "Gift Vouchers",
  description:
    "Give the gift of an unforgettable dining experience at Sable. Choose from beautifully presented voucher options.",
  alternates: { canonical: "https://sable-restaurant.pages.dev/gift-vouchers/" },
  openGraph: {
    type: "website",
    title: "Gift Vouchers | Sable",
    description: "Give the gift of an unforgettable dining experience at Sable.",
    url: "https://sable-restaurant.pages.dev/gift-vouchers/",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Sable Restaurant" }],
  },
};

export default function GiftVouchersPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll>
          <SectionHeading
            subtitle="The Perfect Gift"
            title="Gift Vouchers"
            as="h1"
          />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <p
            className="font-body text-brand-muted"
            style={{
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto 64px",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Give someone special an experience to remember. Our beautifully
            presented gift vouchers make the perfect present for any occasion.
          </p>
        </AnimateOnScroll>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "32px" }}
        >
          {giftVouchers.map((voucher, i) => (
            <AnimateOnScroll key={voucher.name} delay={i * 0.1}>
              <div
                className="bg-brand-surface border border-brand-muted/10 h-full flex flex-col"
                style={{ padding: "40px" }}
              >
                <div
                  className="flex items-start justify-between"
                  style={{ marginBottom: "16px" }}
                >
                  <div>
                    <Gift
                      size={20}
                      className="text-brand-champagne"
                      style={{ marginBottom: "12px" }}
                      aria-hidden="true"
                    />
                    <h2
                      className="font-heading text-brand-cream"
                      style={{ fontSize: "1.35rem" }}
                    >
                      {voucher.name}
                    </h2>
                  </div>
                  <span
                    className="font-heading text-brand-champagne"
                    style={{ fontSize: "1.75rem" }}
                  >
                    £{voucher.price}
                  </span>
                </div>

                <p
                  className="font-body text-brand-muted"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                  }}
                >
                  {voucher.description}
                </p>

                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginBottom: "32px",
                    flex: 1,
                  }}
                >
                  {voucher.includes.map((item) => (
                    <li
                      key={item}
                      className="font-body text-brand-cream/70"
                      style={{ fontSize: "14px" }}
                    >
                      <span
                        className="text-brand-champagne"
                        style={{ marginRight: "8px" }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button href="/contact" variant="outline">
                  Enquire
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <p
            className="font-body text-brand-muted"
            style={{
              textAlign: "center",
              marginTop: "48px",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            Custom amounts are also available. Please{" "}
            <Link
              href="/contact"
              prefetch={false}
              className="text-brand-champagne hover:text-brand-cream transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
            >
              contact us
            </Link>{" "}
            for bespoke voucher options.
          </p>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
