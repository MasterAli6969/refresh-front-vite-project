import { FC } from "react";

import { PropsIcon } from "../props.interface";

const OffIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1767_27155)">
        <path
          d="M8.24984 2.33329C9.34537 3.17081 10.0832 4.51447 10.0832 5.99996C10.0832 8.53126 8.03114 10.5833 5.49984 10.5833C2.96853 10.5833 0.916504 8.53126 0.916504 5.99996C0.916504 4.50053 1.63669 3.16949 2.74984 2.33329M5.49984 1.41663V4.62496"
          stroke="#727272"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1767_27155">
          <rect
            width="11"
            height="11"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default OffIcon;
