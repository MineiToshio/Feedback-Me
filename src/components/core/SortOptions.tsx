"use client";

import DropdownMenu from "@/components/core/DropdownMenu";
import Icon from "@/components/core/Icons";
import useSelect, { Option } from "@/hooks/useSelect";
import { cn } from "@/styles/utils";
import { FC } from "react";

type SortOptionsProps = {
  value?: number;
  options: Option[];
  onChange: (value: number) => void;
  className?: string;
};

const SortOptions: FC<SortOptionsProps> = ({
  value,
  options,
  onChange,
  className,
}) => {
  const { ref, selectedOption, open, toggleOpen } = useSelect(value, options);

  return (
    <div
      ref={ref}
      onClick={toggleOpen}
      className={cn(
        "cursor-pointer relative flex items-center h-14 sm:h-[72px]",
        className,
      )}
    >
      <Icon.ArrowDownIcon
        className={cn(
          "absolute right-4 top-6 sm:top-8 transition *:stroke-white",
          {
            "rotate-180": open,
          },
        )}
      />
      <div
        className={cn("*:text-background2 *:text-sm flex items-center", {
          "*:opacity-75": open,
        })}
      >
        <span>Sort by :&nbsp;</span>
        <span className="font-bold">{selectedOption?.label}</span>
      </div>
      <DropdownMenu
        open={open}
        value={value}
        options={options}
        onChange={onChange}
        className="absolute -left-[2px] top-16 sm:top-20 w-[255px]"
      />
    </div>
  );
};

export default SortOptions;
