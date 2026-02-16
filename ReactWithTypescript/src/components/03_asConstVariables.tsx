import type { CSSProperties } from "react";

const VARIANTS = ["primary", "secondary", "tertiary"] as const;
type Variant = (typeof VARIANTS)[number];

type BadgeProps = {
  label: string;
  variant?: Variant;
};

const styles: Record<Variant, CSSProperties> = {
  primary: {
    color: "red",
  },
  secondary: {
    color: "yellow",
  },
  tertiary: {
    color: "black",
  },
};

export function Badge({ label, variant = "primary" }: BadgeProps) {
  return <span style={styles[variant]}>{label}</span>;
}
