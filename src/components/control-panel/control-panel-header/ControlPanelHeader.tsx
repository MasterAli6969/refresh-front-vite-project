import { FC } from "react";
import styles from "./contro_panel_header.module.scss";

const ControlPanelHeader: FC = () => {
  return (
    <div className={styles.div}>
      <h2>Панель управления ПК</h2>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default ControlPanelHeader;
