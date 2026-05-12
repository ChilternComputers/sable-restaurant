import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Sable Restaurant's privacy policy — how we collect, use, and protect your personal data when you book a table, dine with us, or get in touch.",
  alternates: { canonical: "https://sable-restaurant.pages.dev/privacy/" },
  openGraph: {
    type: "website",
    title: "Privacy Policy | Sable",
    description: "Read Sable Restaurant's privacy policy — how we collect, use, and protect your personal data.",
    url: "https://sable-restaurant.pages.dev/privacy/",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Sable Restaurant" }],
  },
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "When you make a reservation or enquiry, we collect your name, email address, phone number, and any dietary or special requirements you provide. We may also collect information about your visit to help us improve your experience.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your personal information to manage your reservations, respond to enquiries, and communicate important updates about your booking. With your consent, we may send you information about special events, seasonal menus, and exclusive offers.",
  },
  {
    title: "Data Storage & Security",
    content:
      "Your data is stored securely and only accessible to authorised members of our team. We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, or destruction.",
  },
  {
    title: "Third-Party Sharing",
    content:
      "We do not sell, trade, or share your personal information with third parties except where necessary to provide our services (e.g., payment processing) or where required by law.",
  },
  {
    title: "Cookies",
    content:
      "Our website uses essential cookies to ensure proper functionality. We may also use analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings.",
  },
  {
    title: "Your Rights",
    content:
      "Under GDPR, you have the right to access, rectify, or delete your personal data. You may also withdraw consent for marketing communications at any time. To exercise these rights, please contact us at hello@sablerestaurant.co.uk.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about this privacy policy or how we handle your data, please contact us at hello@sablerestaurant.co.uk or write to us at 42 Fitzroy Square, London W1T 6EY.",
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll>
          <SectionHeading title="Privacy Policy" showDivider={false} as="h1" />
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
            Last updated: February 2026
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
            This is a demo website. This privacy policy is for illustration purposes only.
          </p>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
