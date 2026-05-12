"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useFocusTrap } from "@/lib/useFocusTrap";

const COOKIE_NAME = "sable-consent";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax; Secure`;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleTrapFocus = useFocusTrap(ref);

  useEffect(() => {
    const consent = getCookie(COOKIE_NAME);
    if (consent !== "accepted" && consent !== "rejected") {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-focus the accept button when banner appears
  useEffect(() => {
    if (visible) {
      const accept = ref.current?.querySelector<HTMLButtonElement>("[data-accept]");
      accept?.focus();
    }
  }, [visible]);

  const handleConsent = useCallback((value: "accepted" | "rejected") => {
    setCookie(COOKIE_NAME, value);
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleConsent("rejected");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, handleConsent]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={ref}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="alertdialog"
          aria-label="Cookie consent"
          onKeyDown={handleTrapFocus}
          className="fixed bottom-0 left-0 right-0 z-50 bg-brand-surface border-t border-brand-muted/10"
        >
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
            style={{
              maxWidth: "1400px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "20px 24px",
              gap: "16px",
            }}
          >
            <p className="font-body text-brand-cream/90 text-sm leading-relaxed">
              We use cookies to improve your experience.{" "}
              <Link
                href="/privacy"
                prefetch={false}
                className="text-brand-champagne underline hover:text-brand-cream focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
              >
                Privacy Policy
              </Link>
            </p>
            <div className="flex flex-shrink-0" style={{ gap: "12px" }}>
              <button
                onClick={() => handleConsent("rejected")}
                className="font-accent text-xs uppercase text-brand-cream/70 hover:text-brand-cream border border-brand-muted/20 hover:border-brand-cream/30 transition-colors duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                style={{
                  padding: "10px 20px",
                  minHeight: "44px",
                }}
              >
                Reject All
              </button>
              <button
                data-accept
                onClick={() => handleConsent("accepted")}
                className="font-accent text-xs uppercase bg-brand-champagne text-brand-black hover:bg-brand-cream transition-colors duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                style={{
                  padding: "10px 20px",
                  minHeight: "44px",
                }}
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
