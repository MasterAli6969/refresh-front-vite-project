import { FC } from "react";
import { PropsIcon } from "./props.interface";

const IconMonitor: FC<PropsIcon> = ({ color }) => {
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
          d="M4.5 18.5L19.5 18.5C20.3284 18.5 21 17.8284 21 17V6.5C21 5.67157 20.3284 5 19.5 5L4.5 5C3.67157 5 3 5.67157 3 6.5V17C3 17.8284 3.67157 18.5 4.5 18.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 21.5H9"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default IconMonitor;
