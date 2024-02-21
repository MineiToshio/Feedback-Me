import { FC, SVGProps } from "react";

type CheckIconProps = SVGProps<SVGSVGElement>;

const CheckIcon: FC<CheckIconProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" {...props}>
      <path
        fill="none"
        stroke="#AD1FEA"
        strokeWidth="2"
        d="M1 5.233L4.522 9 12 1"
      />
    </svg>
  );
};

export default CheckIcon;
