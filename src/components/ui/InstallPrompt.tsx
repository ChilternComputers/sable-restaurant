"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFocusTrap } from "@/lib/useFocusTrap";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISS_KEY = "sable-install-dismissed";

export function InstallPrompt() {
  const [visible, setVisible] = useState(false);
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const handleTrapFocus = useFocusTrap(ref);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    let timer: ReturnType<typeof setTimeout>;

    const handler = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e as BeforeInstallPromptEvent;
      timer = setTimeout(() => setVisible(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      clearTimeout(timer);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt.current) return;
    await deferredPrompt.current.prompt();
    deferredPrompt.current = null;
    setVisible(false);
  };

  const handleDismiss = useCallback(() => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, handleDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={ref}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          role="alertdialog"
          aria-label="Install app"
          onKeyDown={handleTrapFocus}
          className="fixed bottom-0 left-0 right-0 z-40 bg-brand-surface border-t border-brand-muted/10"
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
              Install Sable for quick access to our menu and reservations.
            </p>
            <div className="flex flex-shrink-0" style={{ gap: "12px" }}>
              <button
                onClick={handleDismiss}
                className="font-accent text-xs uppercase text-brand-cream/70 hover:text-brand-cream border border-brand-muted/20 hover:border-brand-cream/30 transition-colors duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                style={{
                  padding: "10px 20px",
                  minHeight: "44px",
                }}
              >
                Not Now
              </button>
              <button
                onClick={handleInstall}
                className="font-accent text-xs uppercase bg-brand-champagne text-brand-black hover:bg-brand-cream transition-colors duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none"
                style={{
                  padding: "10px 20px",
                  minHeight: "44px",
                }}
              >
                Install App
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
