"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimateOnScroll({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
}: AnimateOnScrollProps) {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: directionOffset[direction].y,
        x: directionOffset[direction].x,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
