import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the Sable Restaurant gallery — beautifully captured moments from our dining rooms, signature dishes, and private events in Fitzrovia, London.",
  alternates: { canonical: "https://sable-restaurant.pages.dev/gallery/" },
  openGraph: {
    type: "website",
    title: "Gallery | Sable",
    description: "A glimpse inside Sable — our dining rooms, dishes, and private events.",
    url: "https://sable-restaurant.pages.dev/gallery/",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Sable Restaurant" }],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
