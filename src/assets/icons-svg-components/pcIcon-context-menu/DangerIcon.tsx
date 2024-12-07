import { FC } from "react";

import { PropsIcon } from "../props.interface";

const DangerIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1767_27147)">
        <path
          d="M5.49983 3.70829V6.45829M5.49983 10.125C3.41571 10.125 2.37366 10.125 1.77126 9.68729C1.24582 9.30554 0.90704 8.71876 0.839151 8.07284C0.761318 7.33231 1.28235 6.42986 2.32441 4.62496C3.36647 2.82006 3.8875 1.91761 4.56773 1.61475C5.16106 1.35058 5.83861 1.35058 6.43194 1.61475C7.11217 1.91761 7.6332 2.82006 8.67526 4.62496C9.71732 6.42986 10.2383 7.33231 10.1605 8.07284C10.0926 8.71876 9.75385 9.30554 9.22841 9.68729C8.62601 10.125 7.58395 10.125 5.49983 10.125Z"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M5.95817 7.83333C5.95817 8.08646 5.75297 8.29167 5.49984 8.29167C5.24671 8.29167 5.0415 8.08646 5.0415 7.83333C5.0415 7.5802 5.24671 7.375 5.49984 7.375C5.75297 7.375 5.95817 7.5802 5.95817 7.83333Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1767_27147">
          <rect
            width="11"
            height="11"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DangerIcon;
