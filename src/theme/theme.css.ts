import { globalStyle } from "@vanilla-extract/css";

export const vars = {
  bg: {
    main: "var(--optibus-main-color)",
  },
} as const;

globalStyle('[data-optibus-color-scheme="dark"]', {
  vars: {
    "--optibus-main-bg": "#5869ec",
  },
});

globalStyle('[data-optibus-color-scheme="light"]', {
  vars: {
    "--optibus-main-bg": "#1424a0",
  },
});
