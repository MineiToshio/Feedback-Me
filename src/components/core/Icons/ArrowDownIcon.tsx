import { FC, SVGProps } from "react";

type ArrowDownIconProps = SVGProps<SVGSVGElement>;

const ArrowDownIcon: FC<ArrowDownIconProps> = ({ ...props }) => {
  return (
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 1l4 4 4-4"
        stroke="#4661E6"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ArrowDownIcon;
