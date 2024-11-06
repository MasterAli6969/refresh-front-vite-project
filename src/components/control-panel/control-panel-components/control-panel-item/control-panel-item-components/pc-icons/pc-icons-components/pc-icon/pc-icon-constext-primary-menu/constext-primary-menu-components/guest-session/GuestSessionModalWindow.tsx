import { FC, useCallback, useEffect, useState } from "react";
import useToggleString from "../../../../../../../../../../../features/custom-hooks/common-hooks/useToggleString";

import CutomModalWindowUniversal from "../../../../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import { CutomModalWindowUniversalDefaultPropsType } from "../../../../../../../../../../../commonTypes.interface";
import CustomToggleButton from "../../../../../../../../../../../common/static-components/custom-toggle-button/CustomToggleButton";
import PaymentMethod from "../../../../../../../../../../../common/special-componet/payment-method/PaymentMethod";
import CustomDualButtonYesNo from "../../../../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CustomCounterInput from "../../../../../../../../../../../common/static-components/custom-counter-input/CustomCounterInput";
import CustomInput from "../../../../../../../../../../../common/static-components/custom-input/CustomInput";

import styles from "./guest_session.module.scss";

export interface GuestSessionModalWindowPropsType
  extends CutomModalWindowUniversalDefaultPropsType {}

const GuestSessionModalWindow: FC<GuestSessionModalWindowPropsType> = ({
  redaxStateKey,
  title,
}) => {
  const [hoursValue, setHoursValue] = useState<number>();
  const [minutesValue, setMinutesValue] = useState<number>();
  const [timeInSum, setTimeInSum] = useState<number | string>();

  const { activeElement, handleChange } = useToggleString("Предоплата");

  // Обработчик для обновления времени
  const handleChangeHoursValue = (value: number) => {
    setHoursValue(value);
  };

  const handleChangeMinutesValue = (value: number) => {
    setMinutesValue(value);
  };

  // Функция для обработки изменения суммы платежа
  const handlePaymentAmount = (value: string | number | undefined) => {
    setTimeInSum(value ?? "");
  };

  // Расчет суммы на основе времени
  const handleTimeInSum = useCallback(() => {
    const minutePrice = 1; // Стоимость одной минуты
    if (hoursValue !== undefined && minutesValue !== undefined) {
      setTimeInSum((hoursValue * 60 + minutesValue) * minutePrice);
    }
  }, [hoursValue, minutesValue]);

  // Конвертация суммы обратно в часы и минуты
  const handleInSumTime = useCallback(() => {
    if (typeof timeInSum === "number") {
      const calculatedHours = Math.floor(timeInSum / 60);
      const calculatedMinutes = timeInSum % 60;
      setHoursValue(calculatedHours);
      setMinutesValue(calculatedMinutes);
    }
  }, [timeInSum]);

  // Вызов функции для обновления времени при изменении `timeInSum`
  useEffect(() => {
    handleInSumTime();
  }, [handleInSumTime]);

  // Вызов функции для обновления суммы при изменении `hoursValue` и `minutesValue`
  useEffect(() => {
    handleTimeInSum();
  }, [handleTimeInSum]);

  return (
    <CutomModalWindowUniversal redaxStateKey={redaxStateKey} title={title}>
      <CustomToggleButton
        label="Выберите тип сеанса"
        buttonsText={["Предоплата", "Бесплатный сеанс"]}
        onToggleChange={handleChange}
      />
      <div className={styles.subdiv_time}>
        <h5>Время</h5>
        <div>
          <CustomCounterInput
            value={hoursValue}
            onChange={handleChangeHoursValue}
            placeholder="Количество часов"
          />
          <CustomCounterInput
            value={minutesValue}
            onChange={handleChangeMinutesValue}
            placeholder="Количество минут"
          />
        </div>
        {activeElement === "Предоплата" && (
          <p className={styles.down_label}>
            Введите время сеанса для автоматического подсчета средств
          </p>
        )}
      </div>
      {activeElement === "Предоплата" && (
        <>
          <CustomInput
            type="number"
            value={timeInSum}
            label="Сумма платежа"
            placeholder="Введите сумму для расчета времени"
            onChange={handlePaymentAmount}
          />
          <p className={styles.down_label}>
            Введите сумму платежа для автоматического расчета времени
          </p>
          <PaymentMethod />
        </>
      )}
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Пополнение"
      />
    </CutomModalWindowUniversal>
  );
};

export default GuestSessionModalWindow;
