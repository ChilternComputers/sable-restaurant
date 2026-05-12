import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Sable's seasonal à la carte and tasting menus — modern European fine dining featuring the finest British ingredients.",
  alternates: { canonical: "https://sable-restaurant.pages.dev/menu/" },
  openGraph: {
    type: "website",
    title: "Menu | Sable",
    description: "Explore Sable's seasonal à la carte and tasting menus.",
    url: "https://sable-restaurant.pages.dev/menu/",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Sable Restaurant" }],
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
