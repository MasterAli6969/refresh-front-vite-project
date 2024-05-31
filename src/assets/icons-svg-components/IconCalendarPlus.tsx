import { FC } from "react";
import { PropsIcon } from "./props.interface";

const IconCalendarPlus: FC<PropsIcon> = ({ color }) => {
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
          d="M19.5 4.25H4.5C4.08579 4.25 3.75 4.58579 3.75 5V20C3.75 20.4142 4.08579 20.75 4.5 20.75H19.5C19.9142 20.75 20.25 20.4142 20.25 20V5C20.25 4.58579 19.9142 4.25 19.5 4.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 2.75V5.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 2.75V5.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.75 8.75H20.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.625 14.75H9.375"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12.125V17.375"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default IconCalendarPlus;
