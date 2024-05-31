import { FC } from "react";
import { PropsIcon } from "./props.interface";

const IconLineChart: FC<PropsIcon> = ({ color }) => {
  return (
    <>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17L9 10.5L13 16.5L21 7"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default IconLineChart;
