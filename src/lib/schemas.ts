import { SITE } from "@/data/config";
import { IMAGES, unsplash } from "@/data/images";

export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  description:
    "Modern European fine dining restaurant offering seasonal, ingredient-led cuisine in an intimate atmosphere.",
  url: SITE.url,
  telephone: "+44 20 7946 0958",
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: "London",
    addressRegion: "Greater London",
    postalCode: SITE.address.postcode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5234,
    longitude: -0.1388,
  },
  servesCuisine: ["Modern European", "British", "French"],
  priceRange: "££££",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "18:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:00",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "18:00",
      closes: "22:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "16:00",
    },
  ],
  image: unsplash(IMAGES.hero, 1200),
  hasMenu: {
    "@type": "Menu",
    name: "À La Carte & Tasting Menu",
    url: `${SITE.url}/menu/`,
  },
  acceptsReservations: true,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.8,
    reviewCount: 247,
  },
};

/** BreadcrumbList schema for any page */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
