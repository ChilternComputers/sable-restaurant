import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { Divider } from "@/components/ui/Divider";

export function Footer() {
  return (
    <footer
      className="bg-brand-dark border-t border-brand-muted/10"
      style={{ padding: "64px 24px 32px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top section */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "48px", marginBottom: "48px" }}
        >
          {/* Brand */}
          <div>
            <p
              className="font-heading text-brand-cream"
              style={{
                fontSize: "1.75rem",
                letterSpacing: "0.15em",
                marginBottom: "12px",
              }}
            >
              Sable
            </p>
            <p
              className="font-accent italic text-brand-muted"
              style={{ fontSize: "15px", lineHeight: 1.6 }}
            >
              Seasonal, ingredient-led modern European cuisine
              in the heart of London.
            </p>
          </div>

          {/* Hours */}
          <div>
            <p
              className="font-accent uppercase text-brand-champagne"
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                marginBottom: "16px",
              }}
            >
              Opening Hours
            </p>
            <div
              className="font-body text-brand-muted"
              style={{ fontSize: "14px", lineHeight: 2 }}
            >
              <p>Tue – Thu: 6:00 pm – 10:00 pm</p>
              <p>Fri – Sat: 12:00 pm – 2:30 pm, 6:00 pm – 10:30 pm</p>
              <p>Sunday: 12:00 pm – 4:00 pm</p>
              <p>Monday: Closed</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="font-accent uppercase text-brand-champagne"
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                marginBottom: "16px",
              }}
            >
              Contact
            </p>
            <div
              className="font-body text-brand-muted"
              style={{ fontSize: "14px", lineHeight: 2 }}
            >
              <p>42 Fitzroy Square</p>
              <p>London W1T 6EY</p>
              <p>
                <a
                  href="tel:+442079460958"
                  className="hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                  style={{ minHeight: "44px", display: "inline-block" }}
                >
                  020 7946 0958
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@sablerestaurant.co.uk"
                  className="hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                  style={{ minHeight: "44px", display: "inline-block" }}
                >
                  hello@sablerestaurant.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          <Divider />
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between"
          style={{ gap: "16px" }}
        >
          <div className="flex items-center" style={{ gap: "24px" }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
              aria-label="Instagram"
              style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
              aria-label="Facebook"
              style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <Facebook size={18} aria-hidden="true" />
            </a>
          </div>

          <div
            className="flex flex-wrap items-center justify-center font-body text-brand-muted"
            style={{ gap: "16px", fontSize: "12px" }}
          >
            <Link
              href="/privacy"
              prefetch={false}
              className="hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/terms"
              prefetch={false}
              className="hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
            >
              Terms
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/accessibility"
              prefetch={false}
              className="hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
            >
              Accessibility
            </Link>
            <span aria-hidden="true">·</span>
            <span>&copy; {new Date().getFullYear()} Sable Restaurant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
