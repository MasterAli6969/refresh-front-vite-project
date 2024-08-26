import { FC, useState } from "react";
import { RedaxStateProps } from "../../../commonTypes.interface";

import CustomModalCloseHead from "../../smart-component/custom-modal-close-head/CustomModalCloseHead";
import CustomToggleButton from "../../static-components/custom-toggle-button/CustomToggleButton";
import CustomInput from "../../static-components/custom-input/CustomInput";

import styles from "./replenishment_balance_modal_windows.module.scss";
import CustomDualButtonYesNo from "../../static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

export interface ReplenishmentBalanceModalWindowsPropsType
  extends RedaxStateProps {}

const ReplenishmentBalanceModalWindows: FC<
  ReplenishmentBalanceModalWindowsPropsType
> = ({ redaxStateKey }) => {
  const [selectedToggle, setSelectedToggle] = useState<string>("");

  const handleToggleChange = (activeItem: string) => {
    setSelectedToggle(activeItem);
  };

  return (
    <div className={styles.div}>
      <div>
        <CustomModalCloseHead
          redaxStateKey={redaxStateKey}
          text="Пополнение баланса"
          specialText="GG.August"
        />
      </div>
      <div>
        <p>Выберите тип пополнения</p>
        <CustomToggleButton
          buttonsText={["Основной баланс", "Бонусный баланс"]}
        />
      </div>
      <div>
        <CustomInput label="Сумма пополнения" placeholder="Введите сумму" />
      </div>
      <div>
        <p>Способ оплаты</p>
        <CustomToggleButton
          buttonsText={["Наличные", "Карта", "Разделить"]}
          onToggleChange={handleToggleChange}
        />
      </div>
      {selectedToggle === "Разделить" && (
        <div className={styles.mail_select_block}>
          <CustomInput placeholder="Сумма наличных" />
          <div>
            <p>50/50</p>
          </div>
          <CustomInput placeholder="Сумма оплаты по БК" />
        </div>
      )}

      <div className={styles.cash_card_select_block}>
        <p>Чек</p>
        <CustomToggleButton
          buttonsText={["Печатать", "Отправить на эл. почту", "Разделить"]}
        />
      </div>
      <div>
        <CustomDualButtonYesNo
          redaxStateKey={redaxStateKey}
          buttonRightText="Оплата"
        />
      </div>
    </div>
  );
};

export default ReplenishmentBalanceModalWindows;
