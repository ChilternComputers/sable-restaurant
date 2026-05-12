import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve your table at Sable — modern European fine dining in Fitzrovia, London. Book online or call 020 7946 0958.",
  alternates: { canonical: "https://sable-restaurant.pages.dev/reservations/" },
  openGraph: {
    type: "website",
    title: "Reservations | Sable",
    description: "Reserve your table at Sable — modern European fine dining in London.",
    url: "https://sable-restaurant.pages.dev/reservations/",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Sable Restaurant" }],
  },
};

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
