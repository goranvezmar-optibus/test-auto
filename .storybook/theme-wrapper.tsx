import { useEffect } from "react";

import { useTheme } from "../src/theme/use-theme";

export function ThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: "light" | "dark";
}) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);

  return <>{children}</>;
}
