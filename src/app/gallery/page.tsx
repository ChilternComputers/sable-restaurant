"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { galleryImages, getHiResUrl, type GalleryCategory } from "@/data/gallery";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { cn } from "@/lib/utils";

const categories: { key: GalleryCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "food", label: "Food" },
  { key: "interior", label: "Interior" },
  { key: "events", label: "Events" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const handleTrapFocus = useFocusTrap(lightboxRef);

  const filtered =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  // Close lightbox when filter changes to prevent out-of-bounds index
  useEffect(() => {
    setLightbox(null);
  }, [activeFilter]);

  const openLightbox = (index: number, button: HTMLButtonElement) => {
    triggerRef.current = button;
    setLightbox(index);
  };
  const closeLightbox = () => {
    setLightbox(null);
    triggerRef.current?.focus();
  };

  // Toggle inert on main content when lightbox is open
  useEffect(() => {
    const main = document.getElementById("main-content");
    if (!main) return;
    if (lightbox !== null) {
      main.setAttribute("inert", "");
    } else {
      main.removeAttribute("inert");
    }
    return () => main.removeAttribute("inert");
  }, [lightbox]);

  // Auto-focus close button when lightbox opens
  useEffect(() => {
    if (lightbox !== null) {
      const closeBtn = lightboxRef.current?.querySelector<HTMLButtonElement>("[data-close]");
      closeBtn?.focus();
    }
  }, [lightbox]);

  const prevImage = useCallback(() => {
    if (lightbox === null) return;
    setLightbox(lightbox === 0 ? filtered.length - 1 : lightbox - 1);
  }, [lightbox, filtered.length]);

  const nextImage = useCallback(() => {
    if (lightbox === null) return;
    setLightbox(lightbox === filtered.length - 1 ? 0 : lightbox + 1);
  }, [lightbox, filtered.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          prevImage();
          break;
        case "ArrowRight":
          e.preventDefault();
          nextImage();
          break;
        case "Escape":
          e.preventDefault();
          closeLightbox();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, prevImage, nextImage]);

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll>
          <SectionHeading subtitle="A Glimpse Inside" title="Gallery" as="h1" />
        </AnimateOnScroll>

        {/* Filters */}
        <div
          className="flex flex-wrap items-center justify-center"
          role="group"
          aria-label="Gallery filters"
          style={{ gap: "8px", marginBottom: "48px" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              aria-pressed={activeFilter === cat.key}
              className={cn(
                "font-accent uppercase transition-all duration-300 cursor-pointer border focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none",
                activeFilter === cat.key
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

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3" style={{ gap: "8px" }}>
          {filtered.map((img, i) => (
            <AnimateOnScroll key={img.src} delay={i * 0.05}>
              <button
                onClick={(e) => openLightbox(i, e.currentTarget)}
                aria-label={`View: ${img.alt}`}
                className="group relative overflow-hidden w-full cursor-pointer"
                style={{ marginBottom: "8px", display: "block" }}
              >
                <Image
                  src={img.src}
                  alt=""
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  {...(i < 2 ? { priority: true } : {})}
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/30 transition-colors duration-500 flex items-end" aria-hidden="true">
                  <p
                    className="font-body text-brand-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      padding: "16px",
                      fontSize: "13px",
                    }}
                  >
                    {img.alt}
                  </p>
                </div>
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            ref={lightboxRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleTrapFocus}
            role="dialog"
            aria-label={`Image: ${filtered[lightbox].alt}`}
            aria-modal="true"
          >
            <button
              data-close
              onClick={closeLightbox}
              className="absolute text-brand-cream hover:text-brand-champagne transition-colors cursor-pointer z-10 focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
              style={{ top: "24px", right: "24px", minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Close lightbox"
            >
              <X size={28} aria-hidden="true" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-brand-cream hover:text-brand-champagne transition-colors cursor-pointer z-10 focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
              aria-label="Previous image"
              style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <ChevronLeft size={36} aria-hidden="true" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-brand-cream hover:text-brand-champagne transition-colors cursor-pointer z-10 focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
              aria-label="Next image"
              style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <ChevronRight size={36} aria-hidden="true" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
              style={{ maxWidth: "90vw", maxHeight: "85vh" }}
            >
              <Image
                src={getHiResUrl(filtered[lightbox].src)}
                alt={filtered[lightbox].alt}
                width={1400}
                height={Math.round(1400 * (filtered[lightbox].height / filtered[lightbox].width))}
                className="object-contain"
                style={{ maxHeight: "85vh", width: "auto" }}
                sizes="90vw"
              />
              <p
                className="font-body text-brand-muted"
                style={{
                  textAlign: "center",
                  marginTop: "16px",
                  fontSize: "14px",
                }}
              >
                {filtered[lightbox].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
