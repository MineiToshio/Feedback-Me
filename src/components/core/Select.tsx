"use client";

import DropdownMenu from "@/components/core/DropdownMenu";
import Icon from "@/components/core/Icons";
import useSelect, { Option } from "@/hooks/useSelect";
import { cn } from "@/styles/utils";
import { FC } from "react";

type SelectProps = {
  value?: number;
  options: Option[];
  onChange: (value: number) => void;
  className?: string;
};

const Select: FC<SelectProps> = ({ value, options, onChange, className }) => {
  const { ref, selectedOption, open, toggleOpen } = useSelect(
    value,
    options,
  );

  return (
    <div
      ref={ref}
      onClick={toggleOpen}
      className={cn(
        "cursor-pointer relative bg-form rounded-sm px-4 h-12 flex items-center border-2 border-transparent",
        { "border-secondary": open },
        className,
      )}
    >
      <Icon.ArrowDownIcon
        className={cn("absolute right-4 top-5 transition", {
          "rotate-180": open,
        })}
      />
      <span className="text-text text-[15px]">{selectedOption?.label}</span>
      <DropdownMenu
        open={open}
        value={value}
        options={options}
        onChange={onChange}
        className="absolute -left-[2px] top-14"
      />
    </div>
  );
};

export default Select;
