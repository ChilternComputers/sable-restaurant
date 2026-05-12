import type { DietaryFlag } from "@/types";
import { cn } from "@/lib/utils";

const badgeLabels: Record<DietaryFlag, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten Free",
  DF: "Dairy Free",
};

const badgeColors: Record<DietaryFlag, string> = {
  V: "border-green-700 text-green-400",
  VG: "border-green-600 text-green-300",
  GF: "border-amber-700 text-amber-400",
  DF: "border-blue-700 text-blue-400",
};

interface DietaryBadgeProps {
  flag: DietaryFlag;
}

export function DietaryBadge({ flag }: DietaryBadgeProps) {
  return (
    <span
      className={cn("border font-body", badgeColors[flag])}
      style={{
        fontSize: "10px",
        padding: "2px 8px",
        letterSpacing: "0.05em",
        display: "inline-block",
      }}
      title={badgeLabels[flag]}
    >
      {flag}
    </span>
  );
}
