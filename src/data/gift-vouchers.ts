import type { GiftVoucher } from "@/types";

export const giftVouchers: GiftVoucher[] = [
  {
    name: "The Aperitif",
    price: 75,
    description:
      "A taste of Sable — perfect for a starter and glass of champagne, or to contribute toward a larger experience.",
    includes: [
      "£75 dining credit",
      "Beautifully presented gift card",
      "Personal message option",
      "Valid for 12 months",
    ],
  },
  {
    name: "The À La Carte",
    price: 150,
    description:
      "An evening to remember. Enough for a three-course dinner for one with a glass of wine, or a shared starter experience for two.",
    includes: [
      "£150 dining credit",
      "Gift box with wax seal",
      "Personal message option",
      "Valid for 12 months",
    ],
  },
  {
    name: "The Tasting Experience",
    price: 250,
    description:
      "The full Sable experience. Covers our seven-course tasting menu for one with wine pairing, or à la carte dining for two.",
    includes: [
      "£250 dining credit",
      "Premium gift box",
      "Complimentary champagne on arrival",
      "Personal message option",
      "Valid for 12 months",
    ],
  },
  {
    name: "The Grand Occasion",
    price: 500,
    description:
      "For those who want to give something truly special. Ideal for the tasting menu for two with full wine pairing, or a private dining experience.",
    includes: [
      "£500 dining credit",
      "Luxury presentation case",
      "Complimentary champagne on arrival",
      "Priority booking",
      "Personal message option",
      "Valid for 12 months",
    ],
  },
];
