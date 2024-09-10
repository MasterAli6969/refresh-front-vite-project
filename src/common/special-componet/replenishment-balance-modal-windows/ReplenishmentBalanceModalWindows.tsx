import { FC, useState } from "react";
import { RedaxStateProps } from "../../../commonTypes.interface";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomToggleButton from "../../static-components/custom-toggle-button/CustomToggleButton";
import CustomInput from "../../static-components/custom-input/CustomInput";
import CustomDualButtonYesNo from "../../static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CutomModalWindowUniversal from "../../smart-component/cutom-modal-windows/cutom-modal-window-universal/CutomModalWindowUniversal";
//ИКОНКИ
import MoneyIconMini from "../../../assets/icons/MoneyIconMini.svg";

import CardsIconMini from "../../../assets/icons/CardsIconMini.svg";

import styles from "./replenishment_balance_modal_windows.module.scss";

export interface ReplenishmentBalanceModalWindowsPropsType
  extends RedaxStateProps {}

const ReplenishmentBalanceModalWindows: FC<
  ReplenishmentBalanceModalWindowsPropsType
> = ({ redaxStateKey }) => {
  const [selectedToggle, setSelectedToggle] = useState<string>("");

  const handleToggleChange = (activeItem: string) => {
    setSelectedToggle(activeItem);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title="Пополнение баланса"
      specialText="GG.August"
      onSubmit={handleSubmit}
    >
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
          <CustomInput icon={MoneyIconMini} placeholder="Сумма наличных" />
          <div>
            <p>50/50</p>
          </div>
          <CustomInput icon={CardsIconMini} placeholder="Сумма оплаты по БК" />
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
    </CutomModalWindowUniversal>
  );
};

export default ReplenishmentBalanceModalWindows;
