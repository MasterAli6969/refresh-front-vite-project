import { FC } from "react";

import { PropsIcon } from "../props.interface";

const ManagementIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.91683 10.7917L7.1088 9.99086C6.46442 9.3522 6.14222 9.03286 6.09261 8.64365C6.08046 8.54829 6.08046 8.45179 6.09261 8.35643C6.14222 7.96722 6.46442 7.64789 7.1088 7.00922L7.91683 6.20837M3.0835 1.20837L3.89152 2.00922C4.53591 2.64789 4.8581 2.96722 4.90771 3.35643C4.91987 3.45179 4.91987 3.54829 4.90771 3.64365C4.8581 4.03286 4.53591 4.3522 3.89152 4.99086L3.0835 5.79171"
        stroke="#949496"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ManagementIcon;
