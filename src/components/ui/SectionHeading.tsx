import { cn } from "@/lib/utils";
import { Divider } from "./Divider";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  showDivider?: boolean;
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  showDivider = true,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(className)}
      style={{
        textAlign: align,
        marginBottom: "48px",
      }}
    >
      {subtitle && (
        <p
          className="font-accent uppercase text-brand-champagne"
          style={{
            fontSize: "14px",
            letterSpacing: "0.2em",
            marginBottom: "12px",
          }}
        >
          {subtitle}
        </p>
      )}
      <Tag
        className="font-heading text-brand-cream"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2 }}
      >
        {title}
      </Tag>
      {showDivider && (
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: align === "center" ? "center" : "flex-start",
          }}
        >
          <Divider />
        </div>
      )}
    </div>
  );
}
