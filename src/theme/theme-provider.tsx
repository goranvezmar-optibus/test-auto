import { useEffect, useMemo, useState } from "react";

import {
  type Theme,
  ThemeContext,
  type ThemeContextValue,
  type ThemeInit,
} from "./theme-context";

import "./theme.css";

export type ThemeProviderProps = {
  /**
   * Initial theme mode.
   * - 'light' - force light mode
   * - 'dark' - force dark mode
   * - 'system' (default) - read system preference once at startup
   */
  initialTheme?: ThemeInit;

  /** Callback invoked whenever the active theme changes. Useful for telemetry or storage. */
  onThemeChange?: (theme: Theme) => void;

  /** Children to render under theme context and data attribute control. */
  children: React.ReactNode;
};

// Determine OS-level preferred color scheme at initial load.
function resolveSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Provides theme context (light/dark) to children and applies `data-optibus-color-scheme` to <html>.
 *
 * - `initialTheme` defaults to `system`, meaning it reads OS preference once on load.
 * - `setTheme` forces light/dark explicitly.
 * - `toggleTheme` flips current theme between light and dark.
 *
 * @example
 * <ThemeProvider initialTheme="system" onThemeChange={(theme) => console.log(theme)}>
 *   {children}
 * </ThemeProvider>
 */
export function ThemeProvider({
  initialTheme = "system",
  onThemeChange,
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (initialTheme === "system") {
      return resolveSystemTheme();
    }
    return initialTheme;
  });

  // Whenever theme changes, apply its value as `data-optibus-color-scheme` attribute on <html>, and invoke optional callback.
  useEffect(() => {
    document.documentElement.setAttribute("data-optibus-color-scheme", theme);
    if (onThemeChange) onThemeChange(theme);
  }, [theme, onThemeChange]);

  // Expose context API for consumers: current theme, explicit setter, and toggle.
  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: (newTheme: Theme) => setTheme(newTheme),
      toggleTheme: () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
