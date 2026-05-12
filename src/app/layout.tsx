import type { Metadata } from "next";
import { Playfair_Display, Lato, Cormorant_Garamond } from "next/font/google";
import { restaurantJsonLd } from "@/lib/schemas";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { InstallPrompt } from "@/components/ui/InstallPrompt";
import { ServiceWorkerRegistration } from "@/components/ui/ServiceWorkerRegistration";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sable | Modern European Fine Dining",
    template: "%s | Sable",
  },
  description:
    "Seasonal, ingredient-led modern European cuisine in the heart of London. Reserve your table at Sable for an unforgettable dining experience.",
  keywords: [
    "fine dining London",
    "modern European restaurant",
    "Fitzrovia restaurant",
    "tasting menu London",
    "private dining London",
    "seasonal British cuisine",
    "Sable restaurant",
  ],
  metadataBase: new URL("https://sable-restaurant.pages.dev"),
  alternates: { canonical: "https://sable-restaurant.pages.dev/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-192x192.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Sable Restaurant",
    title: "Sable | Modern European Fine Dining",
    description:
      "Seasonal, ingredient-led modern European cuisine in the heart of London.",
    url: "https://sable-restaurant.pages.dev/",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sable Restaurant - Fine Dining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Sable",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="theme-color" content="#0C0C0C" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="alternate" hrefLang="en-GB" href="https://sable-restaurant.pages.dev/" />
        <link rel="alternate" hrefLang="x-default" href="https://sable-restaurant.pages.dev/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} ${cormorant.variable} antialiased`}
      >
        <SmoothScroll>
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" role="main">{children}</main>
          <Footer />
          <CookieConsent />
          <InstallPrompt />
          <ServiceWorkerRegistration />
        </SmoothScroll>
      </body>
    </html>
  );
}
