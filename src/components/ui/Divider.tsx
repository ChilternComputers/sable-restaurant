import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn("flex items-center", className)}
      style={{ gap: "12px" }}
      aria-hidden="true"
    >
      <span
        className="bg-brand-champagne"
        style={{ width: "40px", height: "1px", display: "block" }}
      />
      <span
        className="text-brand-champagne"
        style={{ fontSize: "10px", lineHeight: 1 }}
      >
        ◆
      </span>
      <span
        className="bg-brand-champagne"
        style={{ width: "40px", height: "1px", display: "block" }}
      />
    </div>
  );
}
