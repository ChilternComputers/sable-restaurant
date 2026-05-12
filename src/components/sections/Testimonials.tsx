"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section
      className="bg-brand-black"
      style={{ padding: "120px 24px" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <AnimateOnScroll>
          <SectionHeading subtitle="Guest Experiences" title="What They Say" />
        </AnimateOnScroll>

        <div style={{ position: "relative" }} aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center" }}
            >
              {/* Stars */}
              <div
                className="flex items-center justify-center"
                style={{ gap: "4px", marginBottom: "24px" }}
                role="img"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-brand-champagne fill-brand-champagne"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="font-accent italic text-brand-cream"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <p
                className="font-body text-brand-champagne"
                style={{
                  fontSize: "14px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {t.author}
              </p>
              {t.source && (
                <p
                  className="font-body text-brand-muted"
                  style={{ fontSize: "13px", marginTop: "4px" }}
                >
                  {t.source}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div
            className="flex items-center justify-center"
            style={{ gap: "24px", marginTop: "40px" }}
          >
            <button
              onClick={prev}
              className="text-brand-muted hover:text-brand-champagne transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
              aria-label="Previous testimonial"
              style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>

            <div className="flex items-center" style={{ gap: "8px" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none ${
                    i === current
                      ? "bg-brand-champagne"
                      : "bg-brand-muted/30"
                  }`}
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    minWidth: "44px",
                    minHeight: "44px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundClip: "content-box",
                    padding: "18px 0",
                  }}
                  aria-label={`Go to testimonial ${i + 1} of ${testimonials.length}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="text-brand-muted hover:text-brand-champagne transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
              aria-label="Next testimonial"
              style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
