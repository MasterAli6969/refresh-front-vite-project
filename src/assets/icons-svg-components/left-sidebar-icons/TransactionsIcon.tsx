import { FC } from "react";

import { PropsIcon } from "../props.interface";

const TransactionsIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00004 15.1667H10C13.3334 15.1667 14.6667 13.8333 14.6667 10.5V6.50001C14.6667 3.16668 13.3334 1.83334 10 1.83334H6.00004C2.66671 1.83334 1.33337 3.16668 1.33337 6.50001V10.5C1.33337 13.8333 2.66671 15.1667 6.00004 15.1667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 6.5H5.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 10.5H5.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TransactionsIcon;