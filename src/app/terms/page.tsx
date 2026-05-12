import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for dining at Sable restaurant, including reservations, gift vouchers, dietary information, and liability.",
  alternates: { canonical: "https://sable-restaurant.pages.dev/terms/" },
  openGraph: {
    type: "website",
    title: "Terms & Conditions | Sable",
    description:
      "Terms and conditions for dining at Sable restaurant.",
    url: "https://sable-restaurant.pages.dev/terms/",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Sable Restaurant" }],
  },
};

const sections = [
  {
    title: "Reservations",
    content:
      "Reservations are recommended and can be made via our website, by phone, or by email. We hold tables for 15 minutes past the booking time. For parties of 8 or more, please contact us directly. A credit card may be required to secure bookings for larger parties or during peak periods.",
  },
  {
    title: "Cancellations",
    content:
      "We kindly request at least 24 hours' notice for cancellations. Late cancellations or no-shows for parties of 6 or more may incur a charge of £25 per person. We understand that plans change — please let us know as early as possible.",
  },
  {
    title: "Dietary Requirements & Allergies",
    content:
      "We take allergies and dietary requirements seriously. Please inform us of any allergies when booking and again upon arrival. Whilst we take every precaution, our kitchen handles nuts, gluten, dairy, and other allergens, and we cannot guarantee a completely allergen-free environment.",
  },
  {
    title: "Gift Vouchers",
    content:
      "Gift vouchers are valid for 12 months from the date of purchase and are non-refundable. They may be used against food, beverages, and private dining experiences. Vouchers cannot be exchanged for cash. Lost or stolen vouchers cannot be replaced.",
  },
  {
    title: "Private Dining",
    content:
      "Private dining bookings require a signed agreement and a deposit of 50% of the estimated minimum spend. Final guest numbers and menu selections must be confirmed at least 7 days in advance. Cancellations within 14 days of the event may forfeit the deposit.",
  },
  {
    title: "Pricing & Payment",
    content:
      "All prices are inclusive of VAT. We accept all major credit and debit cards. A discretionary service charge of 12.5% is added to all bills. Prices and menu items are subject to change without notice based on seasonal availability.",
  },
  {
    title: "Liability",
    content:
      "Sable accepts no liability for loss or damage to personal property left on the premises. Guests dine at their own risk with regard to food allergies, as noted above. Our total liability for any claim shall not exceed the value of the services provided.",
  },
  {
    title: "Governing Law",
    content:
      "These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising shall be subject to the exclusive jurisdiction of the English courts.",
  },
];

export default function TermsPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll>
          <SectionHeading
            title="Terms & Conditions"
            showDivider={false}
            as="h1"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p
            className="font-body text-brand-muted"
            style={{
              fontSize: "14px",
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            Last updated: March 2026
          </p>
        </AnimateOnScroll>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          {sections.map((section, i) => (
            <AnimateOnScroll key={section.title} delay={i * 0.05}>
              <div>
                <h2
                  className="font-heading text-brand-cream"
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "12px",
                  }}
                >
                  {section.title}
                </h2>
                <p
                  className="font-body text-brand-muted"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                  }}
                >
                  {section.content}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
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
            This is a demo website. These terms are for illustration purposes only.
          </p>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
