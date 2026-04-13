import type { Preview } from "@storybook/react-vite";

import { ThemeProvider } from "../src/theme/theme-provider";
import { ThemeWrapper } from "./theme-wrapper";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = context.globals.backgrounds?.value || "light";

      return (
        <ThemeProvider initialTheme={theme}>
          <ThemeWrapper theme={theme}>
            <Story />
          </ThemeWrapper>
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
