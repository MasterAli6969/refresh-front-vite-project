import { FC } from "react";

import { PropsIcon } from "../props.interface";

const ShopIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00671 7.98001V10.9733C2.00671 13.9667 3.20671 15.1667 6.20005 15.1667H9.79338C12.7867 15.1667 13.9867 13.9667 13.9867 10.9733V7.98001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99999 8.50001C9.21999 8.50001 10.12 7.50668 9.99999 6.28668L9.55999 1.83334H6.44666L5.99999 6.28668C5.87999 7.50668 6.77999 8.50001 7.99999 8.50001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2067 8.50001C13.5533 8.50001 14.54 7.40668 14.4067 6.06668L14.22 4.23334C13.98 2.50001 13.3133 1.83334 11.5667 1.83334H9.53333L9.99999 6.50668C10.1133 7.60668 11.1067 8.50001 12.2067 8.50001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.76004 8.50001C4.86004 8.50001 5.85338 7.60668 5.96004 6.50668L6.10671 5.03334L6.42671 1.83334H4.39338C2.64671 1.83334 1.98004 2.50001 1.74004 4.23334L1.56004 6.06668C1.42671 7.40668 2.41338 8.50001 3.76004 8.50001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00004 11.8333C6.88671 11.8333 6.33337 12.3867 6.33337 13.5V15.1667H9.66671V13.5C9.66671 12.3867 9.11337 11.8333 8.00004 11.8333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShopIcon;
