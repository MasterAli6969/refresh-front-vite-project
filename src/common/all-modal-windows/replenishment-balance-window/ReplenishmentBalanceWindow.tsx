import { FC } from "react";

import CustomModalHead from "../../custom-modal-head/CustomModalHead";
import CustomSwitchButton from "../../custom-switch-button/CustomSwitchButton";
import MoneySubwindow from "./replenishment-balance-window-components/money-subwindow/MoneySubwindow";
import BonusCurrencySubwindow from "./replenishment-balance-window-components/bonus-currency-subwindow/BonusCurrencySubwindow";

import styles from "./replenishment_balance_window.module.scss";

const ReplenishmentBalanceWindow: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalHead text="Пополнение баланса " specialText="гость" />
      </div>
      <div>
        <CustomSwitchButton
          buttonLeft="Деньги"
          componentLeft={MoneySubwindow}
          buttonRight="Бонусная валюта"
          componentRight={BonusCurrencySubwindow}
        />
      </div>
    </div>
  );
};

export default ReplenishmentBalanceWindow;
