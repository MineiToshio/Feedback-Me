import { cn } from "@/styles/utils";
import { FC, HTMLAttributes } from "react";

type TextAreaProps = HTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
  errorMessage?: string;
};

const TextArea: FC<TextAreaProps> = ({
  className,
  error,
  errorMessage,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <textarea
        className={cn(
          "bg-form rounded-sm text-text text-[15px] px-4 py-[13px] outline-0 focus:outline-1 focus:outline-secondary flex",
          {
            "border border-error focus:outline-error": error,
          },
        )}
        {...props}
      />
      {error && errorMessage && (
        <span className="text-error text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default TextArea;
