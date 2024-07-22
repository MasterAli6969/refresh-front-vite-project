import { FC } from "react";
import { PropsIcon } from "./props.interface";

const IconUserGroup: FC<PropsIcon> = ({ color }) => {
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
          d="M18.5051 19.5H20C21.1046 19.5 22.0669 18.576 21.716 17.5286C21.1812 15.9325 19.8656 14.9672 17.5527 14.6329M14.5001 11.3645C14.7911 11.4565 15.1244 11.5 15.5 11.5C17.1667 11.5 18 10.6429 18 8.5C18 6.35714 17.1667 5.5 15.5 5.5C15.1244 5.5 14.7911 5.54354 14.5001 5.63552M9.5 14.5C13.1135 14.5 15.0395 15.5095 15.716 17.5286C16.0669 18.576 15.1046 19.5 14 19.5H5C3.89543 19.5 2.93311 18.576 3.28401 17.5286C3.96047 15.5095 5.88655 14.5 9.5 14.5ZM9.5 11.5C11.1667 11.5 12 10.6429 12 8.5C12 6.35714 11.1667 5.5 9.5 5.5C7.83333 5.5 7 6.35714 7 8.5C7 10.6429 7.83333 11.5 9.5 11.5Z"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default IconUserGroup;
