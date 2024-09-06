import { FC } from "react";

import { PropsIcon } from "../props.interface";

const NotificationsIcons: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.01339 2.44C5.80673 2.44 4.01339 4.23333 4.01339 6.44V8.36667C4.01339 8.77333 3.84006 9.39333 3.63339 9.74L2.86673 11.0133C2.39339 11.8 2.72006 12.6733 3.58673 12.9667C6.46006 13.9267 9.56006 13.9267 12.4334 12.9667C13.2401 12.7 13.5934 11.7467 13.1534 11.0133L12.3867 9.74C12.1867 9.39333 12.0134 8.77333 12.0134 8.36667V6.44C12.0134 4.24 10.2134 2.44 8.01339 2.44Z"
        stroke="#949496"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M9.2467 2.63333C9.04003 2.57333 8.8267 2.52667 8.6067 2.5C7.9667 2.42 7.35336 2.46667 6.78003 2.63333C6.97336 2.14 7.45336 1.79333 8.01336 1.79333C8.57336 1.79333 9.05336 2.14 9.2467 2.63333Z"
        stroke="#949496"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0133 13.2067C10.0133 14.3067 9.11331 15.2067 8.01331 15.2067C7.46664 15.2067 6.95997 14.98 6.59997 14.62C6.23997 14.26 6.01331 13.7533 6.01331 13.2067"
        stroke="#949496"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default NotificationsIcons;
