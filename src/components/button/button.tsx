import {
  Button as BaseUIButton,
  type ButtonProps as BaseUIButtonProps,
} from "@base-ui/react/button";
import { clsx } from "clsx";

import { button } from "./button.css";

/**
 * Props for the `Button` component.
 */
export interface ButtonProps extends BaseUIButtonProps {
  /** Visual variant of the button. */
  variant?: "primary" | "secondary" | "destructive";

  /** Size intent for the button. */
  size?: "sm" | "md" | "lg";
}

// export interface ButtonProps {
//   /** Visual variant of the button. */
//   variant?: "primary" | "secondary" | "destructive"

//   /** Size intent for the button. */
//   size?: "sm" | "md" | "lg"

//   /** The content to be displayed inside the button. */
//   children?: React.ReactNode

//   /** Additional CSS classes to apply to the button. */
//   className?: string
// }

/**
 * A reusable button component built on top of Base UI's Button primitive.
 *
 * This component accepts all props supported by the underlying
 * `@base-ui/react/button` (Radix-style primitive), in addition to
 * the custom `variant` and `size` props defined here.
 *
 * It also forwards refs to the underlying button element, allowing
 * direct DOM access (e.g. for focus management or integrations with libraries).
 *
 * @extends BaseUIButtonProps
 *
 * @property {'primary' | 'secondary' | 'destructive'} [variant='primary']
 * Visual variant of the button.
 *
 * @property {'sm' | 'md' | 'lg'} [size='md']
 * Size intent for the button.
 *
 * @property {React.ReactNode} [children]
 * The content to be displayed inside the button.
 *
 * @property {string} [className]
 * Additional CSS classes to apply to the button.
 *
 * @example
 * <Button onClick={() => alert('clicked')} variant="secondary">
 *   Click me
 * </Button>
 *
 * @example
 * // All native + Base UI button props are supported
 * <Button type="submit" disabled aria-pressed>
 *   Submit
 * </Button>
 *
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <BaseUIButton
      className={clsx(button({ variant, size }), className)}
      {...props}
    >
      {children}
    </BaseUIButton>
  );
  // return (
  //   <button className={clsx(button({ variant, size }), className)} {...props}>
  //     {children}
  //   </button>
  // )
}

// function Button(
//   { variant = "primary", size = "md", className, children, ...props }: ButtonProps & BaseUIButtonProps,
//   ref: React.Ref<HTMLButtonElement>
// ) {
//   return (
//     <BaseUIButton
//       ref={ref}
//       className={clsx(button({ variant, size }), className)}
//       {...props}
//     >
//       {children}
//     </BaseUIButton>
//   );
// }

// export const ForwardedButton = forwardRef(Button);

// type SlotProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>

// interface ButtonWithSlotsProps<
//   Root extends React.ElementType = "button",
//   Icon extends React.ElementType = "span"
// > {
//   slots?: {
//     root?: Root
//     icon?: Icon
//   }
//   slotProps?: {
//     root?: SlotProps<Root>
//     icon?: SlotProps<Icon>
//   }
//   children: React.ReactNode
// }

// export const ButtonWithSlots = <
//   Root extends React.ElementType = "button",
//   Icon extends React.ElementType = "span"
// >({
//   slots = {},
//   slotProps = {},
//   children
// }: ButtonWithSlotsProps<Root, Icon>) => {
//   const RootComp = slots.root || "button"
//   const IconComp = slots.icon || "span"

//   return (
//     <RootComp {...slotProps.root}>
//       <IconComp {...slotProps.icon}>i</IconComp>
//       {children}
//     </RootComp>
//   )
// }

// export function ButtonUsage() {
//   return (
//     <ButtonWithSlots
//       slots={
//         {
//           root: "div",
//           icon: "span"
//         }
//       }
//       slotProps={
//         {
//           root: { style: { padding: "1rem", background: "lightblue" }},
//           icon: { style: { marginRight: "0.5rem" } }
//         }
//       }
//     >
//       Click me
//     </ButtonWithSlots>
//   )
// }
