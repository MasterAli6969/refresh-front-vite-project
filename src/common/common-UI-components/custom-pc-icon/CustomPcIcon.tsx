import { FC } from "react";

import styles from "./bonus_currency_subwindow.module.scss";

interface CustomPcIconPropsType {
  nember: number;
  color: string;
}

const CustomPcIcon: FC = () => {
  return (
    <div className={styles.div}>
      <div></div>
    </div>
  );
};

export default CustomPcIcon;
