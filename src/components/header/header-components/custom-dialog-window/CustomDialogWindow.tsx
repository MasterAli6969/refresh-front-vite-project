import { FC } from "react";

import OnlineIcon from "../../../../assets/icons/OnlineIcon.svg";

import styles from "./custom_dialog_window.module.scss";

const CustomDialogWindow: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <div>
          <h4>PC12</h4>
          <div>
            <p>22:13</p>
            <img src={OnlineIcon} />
          </div>
        </div>
        <p>Паста - производное от копипаст, copypaste...</p>
      </div>
    </div>
  );
};

export default CustomDialogWindow;
