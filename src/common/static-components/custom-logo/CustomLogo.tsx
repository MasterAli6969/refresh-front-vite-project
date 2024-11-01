import { FC } from "react";
import classNames from "classnames";

import RefreshNewLogo from "../../../assets/img/RefreshNewLogo.png";

import styles from "./custom_logo.module.scss";

export interface CustomLogoPropsType {
  display: "flex" | "block";
  isLabale?: string;
}

const CustomLogo: FC<CustomLogoPropsType> = ({ display, isLabale }) => {
  return (
    <div
      className={classNames({
        [styles.divFlex]: display === "flex",
        [styles.divBlock]: display === "block",
      })}
    >
      <div className={styles.subdiv}>
        <img src={RefreshNewLogo} />
      </div>
      {isLabale && <h3>{isLabale}</h3>}
    </div>
  );
};

export default CustomLogo;
