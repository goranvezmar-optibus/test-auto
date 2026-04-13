import { useTheme } from "../../theme/use-theme";

/**
 * Props for `ThemeSwitcher`.
 */
export type ThemeSwitcherProps = {
  /** Label shown when current theme is dark; action toggles to light. */
  lightLabel?: string;

  /** Label shown when current theme is light; action toggles to dark. */
  darkLabel?: string;
};

/**
 * A utility component to toggle theme mode.
 *
 * Works via `ThemeProvider` context, and renders a button with a descriptive label.
 *
 * @example
 * <ThemeProvider initialTheme="system">
 *   <ThemeSwitcher />
 * </ThemeProvider>
 */
export function ThemeSwitcher({
  lightLabel = "Switch to light",
  darkLabel = "Switch to dark",
}: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} type="button">
      {theme === "light" ? darkLabel : lightLabel}
    </button>
  );
}
