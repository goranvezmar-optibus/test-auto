import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../theme/theme.css";

export const button = recipe({
  base: {
    border: "1px solid transparent",
    borderRadius: "4px",
    cursor: "pointer",
    transition:
      "background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease",
    ":hover": {
      opacity: 0.85,
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.bg.main,
      },
      secondary: {
        backgroundColor: vars.bg.main,
      },
      destructive: {
        backgroundColor: vars.bg.main,
      },
    },
    size: {
      sm: {
        padding: "6px 12px",
        fontSize: "12px",
      },
      md: {
        padding: "10px 20px",
        fontSize: "14px",
      },
      lg: {
        padding: "14px 28px",
        fontSize: "16px",
      },
    },
  },
});
