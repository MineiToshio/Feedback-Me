import { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/styles/utils";

const textVariants = cva("text-text", {
  variants: {
    as: {
      body: "text-base leading-[23px]",
      body2: "text-[15px] leading-[22px]",
      body3: "text-[13px]  leading-[19px] font-semibold",
      h1: "text-2xl leading-[35px] tracking-[-0.33px] font-bold",
      h2: "text-xl leading-[29px] tracking-[-0.25px] font-bold",
      h3: "text-lg leading-[26px] tracking-[-0.25px] font-bold",
      h4: "text-sm tracking-[-0.2px] font-bold",
    },
  },
  defaultVariants: {
    as: "body",
  },
});

type TextProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants>;

const getElement = (as: TextProps["as"]) => {
  if (!as) return "p";

  switch (as) {
    case "body":
    case "body2":
    case "body3":
      return "p";
    default:
      return as;
  }
};

const Text: FC<TextProps> = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, as, children, ...props }, ref) => {
    const Element = getElement(as);
    return (
      <Element
        ref={ref}
        {...props}
        className={cn(textVariants({ as, className }))}
      >
        {children}
      </Element>
    );
  },
);

Text.displayName = "Text";

export default Text;
