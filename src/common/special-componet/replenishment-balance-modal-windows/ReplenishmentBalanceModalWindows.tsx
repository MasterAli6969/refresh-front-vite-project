import { FC, useState, useEffect } from "react";
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
  const [selectedReplenishmentsType, setSelectedReplenishmentsType] =
    useState<string>("");
  const [selectPaymentMethodType, setSelectPaymentMethodType] =
    useState<string>("");

  const [selectedCheckType, setSelectedCheckType] = useState<string>("");

  useEffect(() => {
    setSelectedReplenishmentsType("primary");
    setSelectPaymentMethodType("cash");
    setSelectedCheckType("print");
  }, []);

  const handleTypeSelectReplenishmentsType = (type: string) => {
    setSelectedReplenishmentsType(type);
  };

  const handleTypeSelectPaymentMethodType = (type: string) => {
    setSelectPaymentMethodType(type);
  };

  const handleTypeselectedCheck = (type: string) => {
    setSelectedCheckType(type);
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
        <div>
          <CustomToggleButton
            active={selectedReplenishmentsType === "primary"}
            onClick={() => handleTypeSelectReplenishmentsType("primary")}
          >
            <p>Основной баланс</p>
          </CustomToggleButton>
          <CustomToggleButton
            active={selectedReplenishmentsType === "bonus"}
            onClick={() => handleTypeSelectReplenishmentsType("bonus")}
          >
            <p>Бонусный баланс</p>
          </CustomToggleButton>
        </div>
      </div>
      <div>
        <CustomInput label="Сумма пополнения" plaseholder="Введите сумму" />
      </div>
      <div>
        <p>Способ оплаты</p>
        <div>
          <CustomToggleButton
            active={selectPaymentMethodType === "cash"}
            onClick={() => handleTypeSelectPaymentMethodType("cash")}
          >
            <p>Наличные</p>
          </CustomToggleButton>
          <CustomToggleButton
            active={selectPaymentMethodType === "card"}
            onClick={() => handleTypeSelectPaymentMethodType("card")}
          >
            <p>Карта</p>
          </CustomToggleButton>
          <CustomToggleButton
            active={selectPaymentMethodType === "split"}
            onClick={() => handleTypeSelectPaymentMethodType("split")}
          >
            <p>Разделить</p>
          </CustomToggleButton>
        </div>
      </div>
      {selectPaymentMethodType === "split" && (
        <div className={styles.mail_select_block}>
          <CustomInput plaseholder="Сумма наличных" />
          <div>
            <p>50/50</p>
          </div>
          <CustomInput plaseholder="Сумма оплаты по БК" />
        </div>
      )}
      <div className={styles.cash_card_select_block}>
        <p>Чек</p>
        <div>
          <CustomToggleButton
            active={selectedCheckType === "print"}
            onClick={() => handleTypeselectedCheck("print")}
          >
            <p>Печатать</p>
          </CustomToggleButton>
          <CustomToggleButton
            active={selectedCheckType === "mail"}
            onClick={() => handleTypeselectedCheck("mail")}
          >
            <p>Отправить на эл. почту</p>
          </CustomToggleButton>
        </div>
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
