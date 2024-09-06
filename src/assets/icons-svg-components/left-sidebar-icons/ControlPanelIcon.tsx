import { FC } from "react";

import { PropsIcon } from "../props.interface";

const ControlPanelIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66671 11.8H4.14004C1.89337 11.8 1.33337 11.24 1.33337 8.99334V4.99334C1.33337 2.74668 1.89337 2.18668 4.14004 2.18668H11.16C13.4067 2.18668 13.9667 2.74668 13.9667 4.99334"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66663 14.8133V11.8"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33337 9.13333H6.66671"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.49329 14.8133H6.66662"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 9.03333V12.84C14.6667 14.42 14.2734 14.8133 12.6934 14.8133H10.3267C8.74673 14.8133 8.35339 14.42 8.35339 12.84V9.03333C8.35339 7.45333 8.74673 7.06 10.3267 7.06H12.6934C14.2734 7.06 14.6667 7.45333 14.6667 9.03333Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4963 12.6667H11.5023"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ControlPanelIcon;
