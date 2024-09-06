import { FC } from "react";

import { PropsIcon } from "../props.interface";

const HistoryIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6667 8.49999C14.6667 12.18 11.68 15.1667 8.00004 15.1667C4.32004 15.1667 2.07337 11.46 2.07337 11.46M2.07337 11.46H5.08671M2.07337 11.46V14.7933M1.33337 8.49999C1.33337 4.81999 4.29337 1.83333 8.00004 1.83333C12.4467 1.83333 14.6667 5.53999 14.6667 5.53999M14.6667 5.53999V2.20666M14.6667 5.53999H11.7067"
        stroke="#949496"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HistoryIcon;
