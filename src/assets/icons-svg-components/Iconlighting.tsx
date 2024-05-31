import { FC } from "react";
import { PropsIcon } from "./props.interface";

const Iconlighting: FC<PropsIcon> = ({ color }) => {
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
          d="M9 22.999L10.5 15.499L4.5 13.249L15 1.99902L13.5 9.49902L19.5 11.749L9 22.999Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default Iconlighting;
