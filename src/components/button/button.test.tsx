import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { Button } from "./button";

test("button", async () => {
  const screen = await render(<Button>Click</Button>);
  const buttonElement = screen.getByRole("button");

  expect(buttonElement).toHaveTextContent("Click");
});
