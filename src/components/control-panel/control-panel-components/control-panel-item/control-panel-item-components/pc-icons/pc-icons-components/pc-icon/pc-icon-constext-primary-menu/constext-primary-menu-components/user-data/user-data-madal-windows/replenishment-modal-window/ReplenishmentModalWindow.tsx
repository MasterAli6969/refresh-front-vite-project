import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
import useToggleString from "../../../../../../../../../../../../../features/custom-hooks/common-hooks/useToggleString";
//МОДУЛИ ДЛЯ РЕНДЕРА
import { CutomModalWindowUniversalDefaultPropsType } from "../../../../../../../../../../../../../commonTypes.interface";
import CutomModalWindowUniversal from "../../../../../../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomInput from "../../../../../../../../../../../../../common/static-components/inputs/custom-input/CustomInput";
import CustomToggleButton from "../../../../../../../../../../../../../common/static-components/buttons/custom-toggle-button/CustomToggleButton";
import PaymentMethod from "../../../../../../../../../../../../../common/special-componet/payment-method/PaymentMethod";
import CustomDualButtonYesNo from "../../../../../../../../../../../../../common/static-components/buttons/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CustomTextarea from "../../../../../../../../../../../../../common/static-components/inputs/custom-textarea/CustomTextarea";
//СТИЛИ

export interface ReplenishmentModalWindowPropsType
  extends CutomModalWindowUniversalDefaultPropsType {}

const ReplenishmentModalWindow: FC<ReplenishmentModalWindowPropsType> = ({
  redaxStateKey,
  title,
  specialText,
}) => {
  const { activeElement, handleChange } = useToggleString("Предоплата");

  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title={title}
      specialText={specialText}
    >
      <CustomToggleButton
        label="Выберите тип пополнения"
        buttonsText={["Основной баланс", "Бесплатный сеанс"]}
        onToggleChange={handleChange}
      />
      <CustomInput label="Сумма" placeholder="Бонусный баланс" />
      {activeElement === "Основной баланс" ? (
        <>
          <PaymentMethod />
        </>
      ) : (
        <>
          <CustomTextarea
            label="Комментарий"
            placeholder="Введите комментарий о пополнении..."
          />
        </>
      )}
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Пополнение"
      />
    </CutomModalWindowUniversal>
  );
};

export default ReplenishmentModalWindow;
