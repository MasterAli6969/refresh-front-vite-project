import { FC } from "react";

import { PropsIcon } from "../props.interface";

const KnowledgeBaseIcon: FC<PropsIcon> = ({ color }) => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6667 11.66V3.61333C14.6667 2.81333 14.0134 2.22 13.22 2.28667H13.18C11.78 2.40667 9.65337 3.12 8.46671 3.86667L8.35337 3.94C8.16004 4.06 7.84004 4.06 7.64671 3.94L7.48004 3.84C6.29337 3.1 4.17337 2.39333 2.77337 2.28C1.98004 2.21333 1.33337 2.81333 1.33337 3.60667V11.66C1.33337 12.3 1.85337 12.9 2.49337 12.98L2.68671 13.0067C4.13337 13.2 6.36671 13.9333 7.64671 14.6333L7.67337 14.6467C7.85337 14.7467 8.14004 14.7467 8.31337 14.6467C9.59337 13.94 11.8334 13.2 13.2867 13.0067L13.5067 12.98C14.1467 12.9 14.6667 12.3 14.6667 11.66Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4.16V14.16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.16663 6.16H3.66663"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.66663 8.16H3.66663"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default KnowledgeBaseIcon;
