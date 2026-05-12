"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { useFocusTrap } from "@/lib/useFocusTrap";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const handleTrapFocus = useFocusTrap(menuRef);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  // Toggle inert on main content when mobile menu is open
  useEffect(() => {
    const main = document.getElementById("main-content");
    if (!main) return;
    if (isOpen) {
      main.setAttribute("inert", "");
    } else {
      main.removeAttribute("inert");
    }
    return () => main.removeAttribute("inert");
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-brand-black/98 z-50 flex flex-col items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onKeyDown={handleTrapFocus}
        >
          <button
            onClick={onClose}
            className="absolute text-brand-cream hover:text-brand-champagne transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
            style={{ top: "24px", right: "24px", minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            aria-label="Close menu"
          >
            <X size={28} aria-hidden="true" />
          </button>

          <nav
            className="flex flex-col items-center"
            style={{ gap: "32px" }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  prefetch={false}
                  onClick={onClose}
                  className="font-heading text-brand-cream hover:text-brand-champagne transition-colors focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + navLinks.length * 0.05,
                duration: 0.4,
              }}
              style={{ marginTop: "16px" }}
            >
              <Button href="/reservations" variant="outline" onClick={onClose}>
                Reserve a Table
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
