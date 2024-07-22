import { FC } from "react";

import classNames from "classnames";

import styles from "./custom_pc_icon.module.scss";

export interface CustomPcIconPropsType {
  number: number;
  status: string;
}

const CustomPcIcon: FC<CustomPcIconPropsType> = ({ number, status }) => {
  return (
    <div className={styles.div}>
      <div
        className={classNames(styles.subdiv, {
          [styles._active]: status === "Active",
          [styles._no_active]: status === "No Active",
          [styles._included]: status === "Included",
          [styles._servicing]: status === "Servicing",
        })}
      >
        <p>{number}</p>
      </div>
    </div>
  );
};

export default CustomPcIcon;
