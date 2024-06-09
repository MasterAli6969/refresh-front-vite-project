import { FC } from "react";

import styles from "./replenishment_balance_window.module.scss";
import CustomModalHead from "../../custom-modal-head/CustomModalHead";
import CustomSwitchButton from "../../custom-switch-button/CustomSwitchButton";

const ReplenishmentBalanceWindow: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalHead text="Пополнение баланса " specialText="гость" />
      </div>
    </div>
  );
};

export default ReplenishmentBalanceWindow;
