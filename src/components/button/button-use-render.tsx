import {
  type UseRenderRenderProp,
  mergeProps,
  useRender,
} from "@base-ui/react";
import { clsx } from "clsx";

import { button } from "./button.css";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "destructive";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
  render?: UseRenderRenderProp<Record<string, unknown>> | undefined;
}

export function Button({
  render,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const mergedProps = mergeProps(props, {
    className: clsx(button({ variant, size }), className),
  });

  return useRender({
    defaultTagName: "button",
    render,
    props: mergedProps,
  });
}
