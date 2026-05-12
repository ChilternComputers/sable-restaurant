/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sable-restaurant.pages.dev",
  generateRobotsTxt: true,
  outDir: "./out",
  trailingSlash: true,
  transform: async (config, path) => {
    // Normalise path to include trailing slash for lookup
    const normalised = path.endsWith("/") ? path : `${path}/`;

    const priorities = {
      "/": 1.0,
      "/menu/": 0.9,
      "/reservations/": 0.9,
      "/about/": 0.8,
      "/gallery/": 0.7,
      "/private-dining/": 0.7,
      "/gift-vouchers/": 0.7,
      "/contact/": 0.7,
      "/privacy/": 0.3,
      "/terms/": 0.3,
      "/accessibility/": 0.3,
    };

    const weeklyPages = ["/", "/menu/"];

    return {
      loc: path,
      changefreq: weeklyPages.includes(normalised) ? "weekly" : "monthly",
      priority: priorities[normalised] ?? 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
