import { FC } from "react";

import { PropsIcon } from "../props.interface";

const MessagesIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.66671 13.1667H5.33337C2.66671 13.1667 1.33337 12.5 1.33337 9.16667V5.83334C1.33337 3.16667 2.66671 1.83334 5.33337 1.83334H10.6667C13.3334 1.83334 14.6667 3.16667 14.6667 5.83334V9.16667C14.6667 11.8333 13.3334 13.1667 10.6667 13.1667H10.3334C10.1267 13.1667 9.92671 13.2667 9.80004 13.4333L8.80004 14.7667C8.36004 15.3533 7.64004 15.3533 7.20004 14.7667L6.20004 13.4333C6.09337 13.2867 5.84671 13.1667 5.66671 13.1667Z"
        stroke="#949496"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6643 7.83333H10.6703"
        stroke="#949496"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99703 7.83333H8.00302"
        stroke="#949496"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.32967 7.83333H5.33566"
        stroke="#949496"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MessagesIcon;
