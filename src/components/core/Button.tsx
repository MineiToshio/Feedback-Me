import { cn } from "@/styles/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "rounded font-bold pointer transition text-background2 text-sm w-[158px] flex justify-center items-center",
  {
    variants: {
      color: {
        primary: "bg-primary hover:bg-primary-hover",
        secondary: "bg-secondary hover:bg-secondary-hover",
        text: "bg-text hover:bg-text-hover",
        error: "bg-error hover:bg-error-hover",
        transparent: "bg-transparent text-link hover:underline",
        header: "bg-header hover:underline",
      },
      size: {
        default: "h-11",
        lg: "h-[53px]",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "default",
    },
  },
);

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, className, children, ...props }) => {
    return (
      <button className={cn(buttonVariants({ color, className }))} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
