import { FC } from "react";

import { PropsIcon } from "../props.interface";

const GetContextMenuIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1796_1324)">
        <path
          d="M5.83329 5.50001C5.83329 5.96025 5.4602 6.33334 4.99996 6.33334C4.53972 6.33334 4.16663 5.96025 4.16663 5.50001C4.16663 5.03977 4.53972 4.66668 4.99996 4.66668C5.4602 4.66668 5.83329 5.03977 5.83329 5.50001Z"
          stroke={color}
        />
        <path
          d="M5.83329 2.16668C5.83329 2.62691 5.4602 3.00001 4.99996 3.00001C4.53972 3.00001 4.16663 2.62691 4.16663 2.16668C4.16663 1.70644 4.53972 1.33334 4.99996 1.33334C5.4602 1.33334 5.83329 1.70644 5.83329 2.16668Z"
          stroke={color}
        />
        <path
          d="M5.83329 8.83334C5.83329 9.29358 5.4602 9.66668 4.99996 9.66668C4.53972 9.66668 4.16663 9.29358 4.16663 8.83334C4.16663 8.37311 4.53972 8.00001 4.99996 8.00001C5.4602 8.00001 5.83329 8.37311 5.83329 8.83334Z"
          stroke={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1796_1324">
          <rect
            width="1rem"
            height="1rem"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GetContextMenuIcon;