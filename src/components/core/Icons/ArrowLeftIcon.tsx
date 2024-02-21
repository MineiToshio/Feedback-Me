import { FC, SVGProps } from "react";

type ArrowLeftIconProps = SVGProps<SVGSVGElement>;

const ArrowLeftIcon: FC<ArrowLeftIconProps> = ({ ...props }) => {
  return (
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 9L2 5l4-4"
        stroke="#4661E6"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
