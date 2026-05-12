import type { MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  // Starters
  {
    name: "Heritage Beetroot Tartare",
    description:
      "Smoked ricotta, pickled walnut, horseradish cream, micro herbs",
    price: 16,
    dietary: ["V", "GF"],
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop&fm=webp&q=60",
    featured: true,
  },
  {
    name: "Orkney Scallops",
    description:
      "Cauliflower purée, brown butter, capers, golden raisins",
    price: 19,
    dietary: ["GF"],
    category: "starters",
  },
  {
    name: "Chicken Liver Parfait",
    description: "Sauternes jelly, toasted brioche, cornichons",
    price: 14,
    dietary: [],
    category: "starters",
  },
  {
    name: "Burrata",
    description: "Roasted stone fruit, basil oil, aged balsamic, sourdough crisp",
    price: 15,
    dietary: ["V"],
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&h=400&fit=crop&fm=webp&q=60",
  },
  {
    name: "Cured Salmon Gravlax",
    description: "Dill crème fraîche, cucumber, rye crisps",
    price: 17,
    dietary: ["GF"],
    category: "starters",
  },
  // Mains
  {
    name: "Aged Hereford Beef Fillet",
    description:
      "Bone marrow crust, truffle pomme purée, heritage carrots, red wine jus",
    price: 42,
    dietary: ["GF"],
    category: "mains",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop&fm=webp&q=60",
    featured: true,
  },
  {
    name: "Cornish Turbot",
    description:
      "Champagne beurre blanc, samphire, crushed new potatoes, sea herbs",
    price: 38,
    dietary: ["GF"],
    category: "mains",
    image:
      "https://images.unsplash.com/photo-1535473895227-bdecb20fb157?w=600&h=400&fit=crop&fm=webp&q=60",
    featured: true,
  },
  {
    name: "Roasted Duck Breast",
    description:
      "Cherry glaze, celeriac remoulade, savoy cabbage, fondant potato",
    price: 34,
    dietary: [],
    category: "mains",
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=600&h=400&fit=crop&fm=webp&q=60",
  },
  {
    name: "Wild Mushroom Risotto",
    description:
      "Porcini, chanterelle, aged parmesan, truffle oil, chive",
    price: 26,
    dietary: ["V", "GF"],
    category: "mains",
  },
  {
    name: "Pan-Roasted Lamb Rump",
    description:
      "Dauphinoise potatoes, roasted aubergine, salsa verde, lamb jus",
    price: 36,
    dietary: ["GF"],
    category: "mains",
    image:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&h=400&fit=crop&fm=webp&q=60",
    featured: true,
  },
  // Desserts
  {
    name: "Dark Chocolate Fondant",
    description: "Salted caramel ice cream, honeycomb, gold leaf",
    price: 14,
    dietary: ["V"],
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&h=400&fit=crop&fm=webp&q=60",
    featured: true,
  },
  {
    name: "Lemon Posset",
    description: "Raspberry sorbet, shortbread crumb, edible flowers",
    price: 12,
    dietary: ["V", "GF"],
    category: "desserts",
  },
  {
    name: "Tarte Tatin",
    description: "Vanilla bean ice cream, calvados caramel",
    price: 13,
    dietary: ["V"],
    category: "desserts",
  },
  {
    name: "Selection of British Cheeses",
    description:
      "Quince paste, oatcakes, grapes, celery",
    price: 16,
    dietary: ["V"],
    category: "desserts",
  },
  // Tasting Menu
  {
    name: "Seven-Course Tasting Menu",
    description:
      "A journey through the season's finest ingredients, curated by Head Chef Marcus Webb. Includes amuse-bouche, bread course, and petit fours. Wine pairing available at supplement.",
    price: 95,
    dietary: [],
    category: "tasting",
    featured: true,
  },
  {
    name: "Vegetarian Tasting Menu",
    description:
      "Seven courses celebrating the best of the kitchen garden. Each dish crafted to showcase the depth and complexity of seasonal vegetables, grains, and dairy.",
    price: 85,
    dietary: ["V"],
    category: "tasting",
  },
  // Wine
  {
    name: "Sancerre, Domaine Vacheron",
    description: "Loire Valley, France — Crisp, mineral, citrus notes",
    price: 58,
    dietary: ["VG", "GF"],
    category: "wine",
  },
  {
    name: "Barolo, Marchesi di Barolo",
    description: "Piedmont, Italy — Full-bodied, rose petal, tar, cherry",
    price: 78,
    dietary: ["VG", "GF"],
    category: "wine",
  },
  {
    name: "Châteauneuf-du-Pape, Domaine du Vieux Télégraphe",
    description: "Rhône Valley, France — Rich, spiced, dark fruit",
    price: 72,
    dietary: ["VG", "GF"],
    category: "wine",
  },
  {
    name: "Pouilly-Fuissé, Louis Jadot",
    description: "Burgundy, France — Elegant, buttery, honeyed stone fruit",
    price: 52,
    dietary: ["VG", "GF"],
    category: "wine",
  },
];

export const menuCategories = [
  { key: "starters" as const, label: "Starters" },
  { key: "mains" as const, label: "Mains" },
  { key: "desserts" as const, label: "Desserts" },
  { key: "tasting" as const, label: "Tasting Menu" },
  { key: "wine" as const, label: "Wine" },
];
