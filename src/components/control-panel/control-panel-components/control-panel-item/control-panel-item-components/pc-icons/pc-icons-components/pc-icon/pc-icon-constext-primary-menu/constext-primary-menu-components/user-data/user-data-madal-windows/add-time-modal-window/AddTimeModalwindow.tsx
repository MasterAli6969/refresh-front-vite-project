import { FC } from "react";

//МОДУЛИ ДЛЯ РАБОТЫ
import { CutomModalWindowUniversalDefaultPropsType } from "../../../../../../../../../../../../../commonTypes.interface";
import useToggleString from "../../../../../../../../../../../../../features/custom-hooks/common-hooks/useToggleString";
import CutomModalWindowUniversal from "../../../../../../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";

//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomToggleButton from "../../../../../../../../../../../../../common/static-components/buttons/custom-toggle-button/CustomToggleButton";
import CustomCounterInput from "../../../../../../../../../../../../../common/static-components/inputs/custom-counter-input/CustomCounterInput";
import CustomInput from "../../../../../../../../../../../../../common/static-components/inputs/custom-input/CustomInput";
import PaymentMethod from "../../../../../../../../../../../../../common/special-componet/payment-method/PaymentMethod";
import CustomDualButtonYesNo from "../../../../../../../../../../../../../common/static-components/buttons/custom-dual-button-yes-no/CustomDualButtonYesNo";

//СТИЛИ
import styles from "./add_time_modal_window.module.scss";

export interface AddTimeModalwindowPropsType
  extends CutomModalWindowUniversalDefaultPropsType {}

const AddTimeModalwindow: FC<AddTimeModalwindowPropsType> = ({
  redaxStateKey,
  title,
}) => {
  return (
    <CutomModalWindowUniversal redaxStateKey={redaxStateKey} title={title}>
      <div className={styles.subdiv_time}>
        <h5>Время</h5>
        <div>
          <CustomCounterInput placeholder="Количество часов" />
          <CustomCounterInput placeholder="Количество минут" />
        </div>
        <p className={styles.down_label}>
          Введите время сеанса для автоматического подсчета средств
        </p>
      </div>
      <CustomInput
        label="Сумма платежа"
        placeholder="Введите сумму для расчета времени"
      />
      <p className={styles.down_label}>
        Введите сумму платежа для автоматического расчета времени
      </p>
      <PaymentMethod />
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Оплата"
      />
    </CutomModalWindowUniversal>
  );
};

export default AddTimeModalwindow;
