"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      if (currentY > lastScrollY.current && currentY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-brand-black/95 backdrop-blur-sm border-b border-brand-muted/10"
            : "bg-transparent"
        )}
        style={{
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span
              className="font-heading text-brand-cream"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "0.15em",
                lineHeight: 1,
              }}
            >
              Sable
            </span>
            <span
              className="font-accent text-brand-muted hidden sm:block"
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Fine Dining
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center"
            style={{ gap: "32px" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="font-body text-brand-cream/80 hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Reserve + Hamburger */}
          <div className="flex items-center" style={{ gap: "16px" }}>
            <div className="hidden sm:block">
              <Button href="/reservations" variant="outline" size="sm">
                Reserve
              </Button>
            </div>
            <button
              className="lg:hidden text-brand-cream hover:text-brand-champagne transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
