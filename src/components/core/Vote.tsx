import { FC } from "react";
import Icon from "@/components/core/Icons";
import { cn } from "@/styles/utils";

type VoteProps = {
  count: number;
  active?: boolean;
  className?: string;
};

const Vote: FC<VoteProps> = ({ count, active, className }) => {
  return (
    <div
      className={cn(
        "h-[53px] w-10 flex items-center justify-center flex-col font-bold text-[13px] text-text bg-background2 hover:bg-background2-hover rounded cursor-pointer transition",
        { "bg-secondary hover:bg-secondary text-white": active },
        className,
      )}
    >
      <Icon.ArrowUpIcon
        className={cn("mb-1", {
          "*:stroke-white": active,
        })}
      />
      {count}
    </div>
  );
};

export default Vote;
