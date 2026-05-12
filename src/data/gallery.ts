export type GalleryCategory = "all" | "food" | "interior" | "events";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1000&fit=crop&fm=webp&q=75",
    alt: "Signature dish presentation",
    category: "food",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&fm=webp&q=75",
    alt: "Main dining room with warm lighting",
    category: "interior",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=800&fit=crop&fm=webp&q=75",
    alt: "Heritage beetroot tartare",
    category: "food",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop&fm=webp&q=75",
    alt: "Private dining room set for an event",
    category: "events",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=800&h=1000&fit=crop&fm=webp&q=75",
    alt: "The Garden Room conservatory",
    category: "interior",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=800&fit=crop&fm=webp&q=75",
    alt: "Aged Hereford beef fillet",
    category: "food",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&h=1000&fit=crop&fm=webp&q=75",
    alt: "Dark chocolate fondant dessert",
    category: "food",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=800&h=600&fit=crop&fm=webp&q=75",
    alt: "Bar area with cocktail service",
    category: "interior",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800&h=600&fit=crop&fm=webp&q=75",
    alt: "Wedding reception dinner",
    category: "events",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&h=800&fit=crop&fm=webp&q=75",
    alt: "Burrata with stone fruit",
    category: "food",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop&fm=webp&q=75",
    alt: "Candle-lit table setting",
    category: "interior",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=600&fit=crop&fm=webp&q=75",
    alt: "Corporate dinner event",
    category: "events",
    width: 800,
    height: 600,
  },
];

/** Get a hi-res version of a gallery image for lightbox display */
export function getHiResUrl(src: string): string {
  return src.replace("w=800", "w=1400");
}
