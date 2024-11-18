import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import CutomModalWindowUniversal from "../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import { CutomModalWindowUniversalDefaultPropsType } from "../../../commonTypes.interface";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomInput from "../../../common/static-components/inputs/custom-input/CustomInput";
import CustomCounterInput from "../../../common/static-components/inputs/custom-counter-input/CustomCounterInput";
import PaymentMethod from "../../../common/special-componet/payment-method/PaymentMethod";
import CustomDualButtonYesNo from "../../../common/static-components/buttons/custom-dual-button-yes-no/CustomDualButtonYesNo";

interface TestMoalWindowSandboxPropsType
  extends CutomModalWindowUniversalDefaultPropsType {}

export const TestMoalWindowSandbox: FC<TestMoalWindowSandboxPropsType> = ({
  redaxStateKey,
  title,
}) => {
  return (
    <CutomModalWindowUniversal redaxStateKey={redaxStateKey} title={title}>
      <CustomInput label="label" placeholder="placeholder" />
      <CustomCounterInput label="label" placeholder="placeholder" />
      <PaymentMethod />
      <CustomDualButtonYesNo
        buttonRightText="buttonRightText"
        redaxStateKey={redaxStateKey}
      />
    </CutomModalWindowUniversal>
  );
};
