import { FC, useCallback, useEffect, useState } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import useToggleString from "../../../../../../../../../../../features/custom-hooks/common-hooks/useToggleString";
import { useAppDispatch } from "../../../../../../../../../../../features/redux/hooks/reduxRootHooks";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CutomModalWindowUniversal from "../../../../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import { CutomModalWindowUniversalDefaultPropsType } from "../../../../../../../../../../../commonTypes.interface";
import CustomToggleButton from "../../../../../../../../../../../common/static-components/buttons/custom-toggle-button/CustomToggleButton";
import PaymentMethod from "../../../../../../../../../../../common/special-componet/payment-method/PaymentMethod";
import CustomDualButtonYesNo from "../../../../../../../../../../../common/static-components/buttons/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CustomCounterInput from "../../../../../../../../../../../common/static-components/inputs/custom-counter-input/CustomCounterInput";
import CustomInput from "../../../../../../../../../../../common/static-components/inputs/custom-input/CustomInput";
//СТИЛИ
import styles from "./guest_session.module.scss";
import { setPcStatusActive } from "../../../../../../../../../../../features/redux/reducers/special-reducers/control-panel-reducers/pc-icon-reducers/pcIconStatusEditReducer";

export interface GuestSessionModalWindowPropsType
  extends CutomModalWindowUniversalDefaultPropsType {
  comp_id: number;
}

const GuestSessionModalWindow: FC<GuestSessionModalWindowPropsType> = ({
  redaxStateKey,
  comp_id,
  title,
}) => {
  const dispatch = useAppDispatch();

  const [hoursValue, setHoursValue] = useState<number | null>(null);
  const [minutesValue, setMinutesValue] = useState<number | null>(null);
  const [timeInSum, setTimeInSum] = useState<number | string>();

  const { activeElement, handleChange } = useToggleString("Предоплата");

  // Обработчик для обновления времени
  const handleChangeHoursValue = (value: number | null) => {
    setHoursValue(value);
  };

  const handleChangeMinutesValue = (value: number | null) => {
    setMinutesValue(value);
  };

  // Функция для обработки изменения суммы платежа
  const handlePaymentAmount = (value: string | number | null) => {
    setTimeInSum(value ?? "");
  };

  // Расчет суммы на основе времени
  const handleTimeInSum = useCallback(() => {
    const minutePrice = 1; // Стоимость одной минуты
    if (hoursValue !== null && minutesValue !== null) {
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

  const handleSubmit = () => {
    dispatch(
      setPcStatusActive({
        key: comp_id,
        statusData: { activeTime: Number(timeInSum), statusActive: true },
      })
    );
  };

  return (
    <CutomModalWindowUniversal
      onSubmit={handleSubmit}
      redaxStateKey={redaxStateKey}
      title={title}
    >
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
        isSubmit={true}
        redaxStateKey={redaxStateKey}
        buttonRightText="Пополнение"
      />
    </CutomModalWindowUniversal>
  );
};

export default GuestSessionModalWindow;
