import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import useToggleString from "../../../../../../../../../../../features/custom-hooks/common-hooks/useToggleString";

//МОДУЛИ ДЛЯ РЕНДЕРА
import CutomModalWindowUniversal from "../../../../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import { CutomModalWindowUniversalDefaultPropsType } from "../../../../../../../../../../../commonTypes.interface";
import CustomToggleButton from "../../../../../../../../../../../common/static-components/custom-toggle-button/CustomToggleButton";
import PaymentMethod from "../../../../../../../../../../../common/special-componet/payment-method/PaymentMethod";
import CustomDualButtonYesNo from "../../../../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CustomCounterInput from "../../../../../../../../../../../common/static-components/custom-counter-input/CustomCounterInput";
import CustomInput from "../../../../../../../../../../../common/static-components/custom-input/CustomInput";

//СТИЛИ
import styles from "./guest_session.module.scss";

export interface GuestSessionModalWindowPropsType
  extends CutomModalWindowUniversalDefaultPropsType {}

const GuestSessionModalWindow: FC<GuestSessionModalWindowPropsType> = ({
  redaxStateKey,
  title,
}) => {
  const { activeElement, handleChange } = useToggleString("Предоплата");

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
          <CustomCounterInput placeholder="Количество часов" />
          <CustomCounterInput placeholder="Количество минут" />
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
            label="Сумма платежа"
            placeholder="Введите сумму для расчета времени"
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
