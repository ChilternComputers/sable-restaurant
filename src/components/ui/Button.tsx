import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading tracking-wider transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none";

  const variants = {
    primary:
      "bg-brand-champagne text-brand-black hover:bg-brand-cream border border-brand-champagne",
    outline:
      "bg-transparent text-brand-champagne border border-brand-champagne hover:bg-brand-champagne hover:text-brand-black",
    ghost:
      "bg-transparent text-brand-cream hover:text-brand-champagne border border-transparent",
  };

  const sizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const sizeStyles = {
    sm: { padding: "8px 20px", letterSpacing: "0.1em", minHeight: "44px" },
    md: { padding: "12px 32px", letterSpacing: "0.15em", minHeight: "44px" },
    lg: { padding: "16px 40px", letterSpacing: "0.15em", minHeight: "44px" },
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} prefetch={false} className={classes} style={sizeStyles[size]}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={sizeStyles[size]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
