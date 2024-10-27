import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { RedaxStateProps } from "../../../../../commonTypes.interface";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CutomModalWindowUniversal from "../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomInput from "../../../../../common/static-components/custom-input/CustomInput";
import CustomTextarea from "../../../../../common/static-components/custom-textarea/CustomTextarea";
import CustomDualButtonYesNo from "../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

export interface ExpensesCashModalWindowPropsType extends RedaxStateProps {}

const ExpensesCashModalWindow: FC<ExpensesCashModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title={"Расходы кассы"}
    >
      <div>
        <CustomInput
          label="Расходы кассы"
          placeholder="Введите сумму расходов кассы"
        />
      </div>
      <CustomTextarea
        label="Комментарий к смене"
        placeholder="Укажите необходимые сведения..."
      />
      <CustomDualButtonYesNo
        redaxStateKey={"redaxStateKey"}
        buttonRightText="Подтвердить"
      />
    </CutomModalWindowUniversal>
  );
};

export default ExpensesCashModalWindow;
