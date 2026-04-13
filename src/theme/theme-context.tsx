import { createContext } from "react";

// Available theme values apply to the app visual style.
export type Theme = "light" | "dark";

// The initial value can be pinned to light/dark or honor the OS setting once.
export type ThemeInit = Theme | "system";

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);
