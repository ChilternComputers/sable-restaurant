"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { DietaryBadge } from "@/components/ui/DietaryBadge";
import { menuItems, menuCategories } from "@/data/menu";
import { cn } from "@/lib/utils";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("starters");

  const filtered = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll>
          <SectionHeading
            subtitle="Seasonal & Considered"
            title="Our Menu"
            as="h1"
          />
        </AnimateOnScroll>

        {/* Category tabs */}
        <div
          className="flex flex-wrap items-center justify-center"
          style={{ gap: "8px", marginBottom: "64px" }}
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              aria-pressed={activeCategory === cat.key}
              className={cn(
                "font-accent uppercase transition-all duration-300 cursor-pointer border focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none",
                activeCategory === cat.key
                  ? "bg-brand-champagne text-brand-black border-brand-champagne"
                  : "bg-transparent text-brand-muted border-brand-muted/30 hover:text-brand-cream hover:border-brand-cream/50"
              )}
              style={{
                padding: "8px 20px",
                fontSize: "12px",
                letterSpacing: "0.15em",
                minHeight: "44px",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {filtered.map((item, i) => (
            <AnimateOnScroll key={item.name} delay={i * 0.05}>
              <div
                className="border-b border-brand-muted/10"
                style={{ paddingBottom: "32px" }}
              >
                <div
                  className="flex items-start justify-between"
                  style={{ marginBottom: "8px" }}
                >
                  <h2
                    className="font-heading text-brand-cream"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {item.name}
                  </h2>
                  <span
                    className="font-accent text-brand-champagne"
                    style={{
                      fontSize: "1.25rem",
                      whiteSpace: "nowrap",
                      marginLeft: "24px",
                    }}
                  >
                    £{item.price}
                  </span>
                </div>
                <p
                  className="font-body text-brand-muted"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    marginBottom: item.dietary.length > 0 ? "12px" : "0",
                  }}
                >
                  {item.description}
                </p>
                {item.dietary.length > 0 && (
                  <div className="flex flex-wrap" style={{ gap: "6px" }}>
                    {item.dietary.map((d) => (
                      <DietaryBadge key={d} flag={d} />
                    ))}
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Dietary key */}
        <AnimateOnScroll>
          <div
            className="border-t border-brand-muted/10"
            style={{ marginTop: "64px", paddingTop: "32px" }}
          >
            <p
              className="font-accent text-brand-muted"
              style={{
                fontSize: "13px",
                textAlign: "center",
                lineHeight: 1.8,
              }}
            >
              V — Vegetarian · VG — Vegan · GF — Gluten Free · DF — Dairy Free
              <br />
              Please inform your server of any allergies or dietary requirements.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
