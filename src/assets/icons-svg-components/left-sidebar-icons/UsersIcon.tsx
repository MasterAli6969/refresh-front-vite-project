import { FC } from "react";

import { PropsIcon } from "../props.interface";

const UsersIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.08002 9.01999C8.03335 9.01332 7.97335 9.01332 7.92002 9.01999C6.74669 8.97999 5.81335 8.01999 5.81335 6.83999C5.81335 5.63332 6.78669 4.65332 8.00002 4.65332C9.20669 4.65332 10.1867 5.63332 10.1867 6.83999C10.18 8.01999 9.25335 8.97999 8.08002 9.01999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4934 13.42C11.3067 14.5067 9.73338 15.1667 8.00005 15.1667C6.26671 15.1667 4.69338 14.5067 3.50671 13.42C3.57338 12.7933 3.97338 12.18 4.68671 11.7C6.51338 10.4867 9.50005 10.4867 11.3134 11.7C12.0267 12.18 12.4267 12.7933 12.4934 13.42Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00004 15.1667C11.6819 15.1667 14.6667 12.1819 14.6667 8.50001C14.6667 4.81811 11.6819 1.83334 8.00004 1.83334C4.31814 1.83334 1.33337 4.81811 1.33337 8.50001C1.33337 12.1819 4.31814 15.1667 8.00004 15.1667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UsersIcon;