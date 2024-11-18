import { FC, useState } from "react";
//ИКОНКИ
import MoneyIconMini from "../../../assets/icons/MoneyIconMini.svg";
import CardsIconMini from "../../../assets/icons/CardsIconMini.svg";
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomToggleButton from "../../static-components/buttons/custom-toggle-button/CustomToggleButton";
import CustomInput from "../../static-components/inputs/custom-input/CustomInput";
//СТИЛИ
import styles from "./payment_method.module.scss";
import useToggleString from "../../../features/custom-hooks/common-hooks/useToggleString";

const PaymentMethod: FC = () => {
  const { activeElement, handleChange } = useToggleString("Разделить");

  return (
    <div className={styles.div}>
      <CustomToggleButton
        label="Способ оплаты"
        buttonsText={["Наличные", "Карта", "Разделить"]}
        onToggleChange={handleChange}
      />
      {activeElement === "Разделить" && (
        <>
          <CustomInput
            icon={MoneyIconMini}
            placeholder="Укажите сумму наличных"
          />
          <CustomInput
            icon={CardsIconMini}
            placeholder="Укажите сумму безналичных"
          />
        </>
      )}
      <CustomToggleButton
        label="Чек"
        buttonsText={["Печатать", "Отправить на почту"]}
      />
    </div>
  );
};

export default PaymentMethod;
