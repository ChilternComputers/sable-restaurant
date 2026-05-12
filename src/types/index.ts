export type DietaryFlag = "V" | "VG" | "GF" | "DF";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  dietary: DietaryFlag[];
  category: "starters" | "mains" | "desserts" | "tasting" | "wine";
  image?: string;
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  source?: string;
  rating: number;
}

export interface PressItem {
  publication: string;
  quote: string;
  year: number;
  logo?: string;
}

export interface PrivateRoom {
  name: string;
  description: string;
  capacity: { min: number; max: number };
  features: string[];
  image: string;
}

export interface GiftVoucher {
  name: string;
  price: number;
  description: string;
  includes: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
