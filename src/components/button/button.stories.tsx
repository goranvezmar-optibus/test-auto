import { type Meta, type StoryObj } from "@storybook/react-vite";

import { Button, type ButtonProps } from "./button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "destructive"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

// Default button
export const Default: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Click me",
  },
};
