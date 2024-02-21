import { FC, SVGProps } from "react";

type CloseIconProps = SVGProps<SVGSVGElement>;

const CloseIcon: FC<CloseIconProps> = ({ ...props }) => {
  return (
    <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
        fill="#FFF"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default CloseIcon;
