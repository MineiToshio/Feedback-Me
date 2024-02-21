import { FC, SVGProps } from "react";

type ArrowUpIconProps = SVGProps<SVGSVGElement>;

const ArrowUpIcon: FC<ArrowUpIconProps> = ({ ...props }) => {
  return (
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 6l4-4 4 4"
        stroke="#4661E6"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ArrowUpIcon;
