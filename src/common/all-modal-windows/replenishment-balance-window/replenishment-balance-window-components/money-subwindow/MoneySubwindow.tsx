import { FC } from "react";

import CustomInput from "../../../../custom-input/CustomInput";
import CustomRadioButton from "../../../../custom-radio-button/CustomRadioButton";
import CustomButton from "../../../../common-UI-components/custom-button/CustomButton";

import styles from "./money_subwindow.module.scss";

const MoneySubwindow: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomInput label="Сумма пополнения" plaseholder="Введите сумму" />
      </div>
      <div>
        <CustomRadioButton
          title="Способ оплаты"
          radioLeft="Наличные"
          redioRight="Банковская карта"
        />
      </div>
      <div>
        <CustomRadioButton
          title="Чек"
          radioLeft="Печатать"
          redioRight="Отправить на почту"
        />
      </div>
      <div>
        <CustomButton color="light" text="Оплата" />
      </div>
    </div>
  );
};

export default MoneySubwindow;
