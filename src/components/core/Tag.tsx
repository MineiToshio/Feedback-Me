import { cn } from "@/styles/utils";
import { FC } from "react";

type TagProps = {
  text: string;
  active?: boolean;
  className?: string;
};

const Tag: FC<TagProps> = ({ text, active, className }) => {
  return (
    <div
      className={cn(
        "h-[30px] w-min px-4 flex items-center justify-center font-semibold text-[13px] text-secondary bg-background2 hover:bg-background2-hover rounded cursor-pointer transition",
        { "bg-secondary hover:bg-secondary text-white": active },
        className,
      )}
    >
      {text}
    </div>
  );
};

export default Tag;
