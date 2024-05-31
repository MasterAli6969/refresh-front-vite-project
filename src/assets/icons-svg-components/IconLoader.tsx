import { FC } from "react";
import { PropsIcon } from "./props.interface";

const IconLoader: FC<PropsIcon> = ({ color }) => {
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
          d="M12 3.5C10.22 3.5 8.47991 4.02784 6.99987 5.01677C5.51983 6.00571 4.36628 7.41131 3.68509 9.05585C3.0039 10.7004 2.82567 12.51 3.17294 14.2558C3.5202 16.0016 4.37737 17.6053 5.63604 18.864C6.89472 20.1226 8.49836 20.9798 10.2442 21.3271C11.99 21.6743 13.7996 21.4961 15.4442 20.8149C17.0887 20.1337 18.4943 18.9802 19.4832 17.5001C20.4722 16.0201 21 14.28 21 12.5"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M19.7949 8C19.8912 8.16673 19.9821 8.33651 20.0674 8.50907"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
export default IconLoader;
