import type { PrivateRoom } from "@/types";

export const privateRooms: PrivateRoom[] = [
  {
    name: "The Cellar",
    description:
      "An intimate vaulted space beneath the main dining room, surrounded by our curated wine collection. Ideal for private celebrations and business dinners with an atmosphere of understated luxury.",
    capacity: { min: 6, max: 14 },
    features: [
      "Dedicated sommelier service",
      "Bespoke tasting menus",
      "AV equipment available",
      "Separate entrance",
    ],
    image:
      "/images/unsplash/1517248135467-4c7edcad34c4.webp",
  },
  {
    name: "The Garden Room",
    description:
      "A light-filled conservatory overlooking our courtyard herb garden, offering a tranquil escape from the city. Perfect for long, leisurely lunches and intimate gatherings.",
    capacity: { min: 8, max: 24 },
    features: [
      "Natural daylight",
      "Courtyard access",
      "Flexible seating arrangements",
      "Private bar service",
    ],
    image:
      "/images/unsplash/1564759298141-cef86f51d4d4.webp",
  },
  {
    name: "The Salon",
    description:
      "Our largest private space, elegantly appointed with original artwork and custom furnishings. Suited to celebrations, corporate events, and exclusive dining experiences for larger parties.",
    capacity: { min: 16, max: 40 },
    features: [
      "Grand piano",
      "Full AV capabilities",
      "Dedicated service team",
      "Custom floral arrangements",
    ],
    image:
      "/images/unsplash/1559339352-11d035aa65de.webp",
  },
];
