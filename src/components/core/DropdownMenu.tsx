import { cn } from "@/styles/utils";
import { FC } from "react";
import Icon from "./Icons";

export type Option = {
  label: string;
  value: number;
};

type DropdownMenuProps = {
  open?: boolean;
  value?: number;
  options: Option[];
  onChange: (value: number) => void;
  className?: string;
};

const DropdownMenu: FC<DropdownMenuProps> = ({
  open,
  value,
  options,
  onChange,
  className,
}) => {
  if (!open) return null;

  return (
    <div
      className={cn(
        "shadow-2xl w-[calc(100%+4px)] flex flex-col max-h-56 bg-white rounded transition z-10 overflow-y-auto",
        className,
      )}
    >
      {options.map((option, index) => (
        <div
          key={option.value}
          className={cn(
            "border-b border-text border-opacity-15 px-4 py-3 hover:text-primary relative",
            { "border-b-0": index === options.length - 1 },
          )}
          onClick={() => onChange(option.value)}
        >
          {option.label}
          {value === option.value && (
            <Icon.CheckIcon className="absolute right-4 top-5" />
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
