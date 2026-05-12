import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Dining",
  description:
    "Explore Sable's private dining rooms — The Cellar, The Garden Room, and The Salon. Bespoke events for 6 to 40 guests.",
  alternates: { canonical: "https://sable-restaurant.pages.dev/private-dining/" },
  openGraph: {
    type: "website",
    title: "Private Dining | Sable",
    description: "Explore Sable's private dining rooms for bespoke events.",
    url: "https://sable-restaurant.pages.dev/private-dining/",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Sable Restaurant" }],
  },
};

export default function PrivateDiningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
