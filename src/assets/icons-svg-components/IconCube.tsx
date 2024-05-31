import { FC } from "react";
import { PropsIcon } from "./props.interface";

const IconCube: FC<PropsIcon> = ({ color }) => {
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
          d="M21 17.1237V7.87598C21 7.7429 20.9646 7.61222 20.8974 7.49734C20.8302 7.38247 20.7337 7.28754 20.6177 7.2223L12.3677 2.58167C12.2554 2.51852 12.1288 2.48535 12 2.48535C11.8712 2.48535 11.7446 2.51852 11.6323 2.58167L3.3823 7.2223C3.26632 7.28754 3.16978 7.38247 3.10259 7.49734C3.03541 7.61222 3 7.7429 3 7.87598V17.1237C3 17.2568 3.03541 17.3875 3.10259 17.5023C3.16978 17.6172 3.26632 17.7121 3.3823 17.7774L11.6323 22.418C11.7446 22.4812 11.8712 22.5143 12 22.5143C12.1288 22.5143 12.2554 22.4812 12.3677 22.418L20.6177 17.7774C20.7337 17.7121 20.8302 17.6172 20.8974 17.5023C20.9646 17.3875 21 17.2568 21 17.1237Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.8962 7.49596L12.0886 12.4998L3.10352 7.49512"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.088 12.5L12 22.5145"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default IconCube;
