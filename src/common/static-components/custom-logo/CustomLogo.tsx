import { FC } from "react";
import classNames from "classnames";

import RefreshLogo from "../../../assets/img/RefreshLogo.png";

import styles from "./custom_logo.module.scss";

export interface CustomLogoPropsType {
  display: string;
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
        <img src={RefreshLogo} />
        <h1>REFRESH</h1>
      </div>
      {isLabale && <h3>{isLabale}</h3>}
    </div>
  );
};

export default CustomLogo;
