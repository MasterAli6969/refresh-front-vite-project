import { FC } from "react";

import CustomInput from "../../../../custom-input/CustomInput";
import CustomTextarea from "../../../../custom-textarea/CustomTextarea";
import CustomButton from "../../../../custom-button/CustomButton";

import styles from "./bonus_currency_subwindow.module.scss";

const BonusCurrencySubwindow: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomInput label="Сумма пополнения" plaseholder="Введите сумму" />
      </div>
      <div>
        <CustomTextarea
          label="Комментарий"
          plaseholder="Введите комментарий "
        />
      </div>
      <div>
        <CustomButton color="light" text="Пополнить" />
      </div>
    </div>
  );
};

export default BonusCurrencySubwindow;
