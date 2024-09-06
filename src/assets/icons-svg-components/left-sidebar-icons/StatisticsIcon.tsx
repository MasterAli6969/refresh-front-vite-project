import { FC } from "react";

import { PropsIcon } from "../props.interface";

const StatisticsIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00004 15.1667H10C13.3334 15.1667 14.6667 13.8333 14.6667 10.5V6.49999C14.6667 3.16666 13.3334 1.83333 10 1.83333H6.00004C2.66671 1.83333 1.33337 3.16666 1.33337 6.49999V10.5C1.33337 13.8333 2.66671 15.1667 6.00004 15.1667Z"
        stroke="#949496"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3333 12.8333C11.0667 12.8333 11.6667 12.2333 11.6667 11.5V5.50001C11.6667 4.76667 11.0667 4.16667 10.3333 4.16667C9.6 4.16667 9 4.76667 9 5.50001V11.5C9 12.2333 9.59333 12.8333 10.3333 12.8333Z"
        stroke="#949496"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.66671 12.8333C6.40004 12.8333 7.00004 12.2333 7.00004 11.5V9.16666C7.00004 8.43333 6.40004 7.83333 5.66671 7.83333C4.93337 7.83333 4.33337 8.43333 4.33337 9.16666V11.5C4.33337 12.2333 4.92671 12.8333 5.66671 12.8333Z"
        stroke="#949496"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StatisticsIcon;
