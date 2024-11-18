import { FC } from "react";
// ТЕСТОВАЯ ОБЫЧНАЯ ИКОНКА
import ClockTimeIcon from "../../../assets/icons/ClockTimeIcon.svg";
//КОМПОНЕНТЫ ДЛЯ РЕНДНРА
import CustomCenterModalOpenWrapper from "../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CustomButton from "../../../common/static-components/buttons/custom-button/CustomButton";
import CustomContexMenuOpenUniversalWrapper from "../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
import CustomModalCloseHead from "../../../common/smart-component/custom-modal-close-head/CustomModalCloseHead";
import CustomModalOpenButtonSwitch from "../../../common/smart-component/custom-modal-open-button-switch/CustomModalOpenButtonSwitch";
import CutomModalWindowUniversal from "../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomDualButtonYesNo from "../../../common/static-components/buttons/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CustomInput from "../../../common/static-components/inputs/custom-input/CustomInput";
import CustomCounterInput from "../../../common/static-components/inputs/custom-counter-input/CustomCounterInput";
import PaymentMethod from "../../../common/special-componet/payment-method/PaymentMethod";
import { TestMoalWindowSandbox } from "./SandBoxTestRender";

const SandboxSmartComponents: FC = () => {
  return (
    <>
      <h1>УМНЫЕ/СЛОЖНЫЕ КОМПОНЕНТЫ РЕНДЕРА И ИСПОЛЬЗОВАНИЯ</h1>
      <div>
        <h1>CustomCenterModalOpenWrapper</h1>
        <CustomCenterModalOpenWrapper
          openComponents={() => (
            <TestMoalWindowSandbox
              redaxStateKey={"CustomCenterModalOpenWrapper"}
              title="title"
            />
          )}
          redaxStateKey={"CustomCenterModalOpenWrapper"}
        >
          <CustomButton color="light">
            <h6>Click open modal windows</h6>
          </CustomButton>
        </CustomCenterModalOpenWrapper>
      </div>
      <div>
        <h1>CustomContexMenuOpenUniversalWrapper</h1>
        <CustomContexMenuOpenUniversalWrapper
          dropPosition="bottom"
          dropMenuItems={[
            () => <h6>dropMenuItems1</h6>,
            () => <h6>dropMenuItems2</h6>,
            () => <h6>dropMenuItems3</h6>,
            () => <h6>dropMenuItems4</h6>,
          ]}
        >
          <CustomButton color="light">
            <h6>Click contex menu</h6>
          </CustomButton>
        </CustomContexMenuOpenUniversalWrapper>
      </div>
      <div>
        <h1>CustomModalCloseHead</h1>
        <CustomModalCloseHead redaxStateKey={"redaxStateKey"} text="text" />
      </div>
      <div>
        <h1>CustomModalOpenButtonSwitch</h1>
        <CustomModalOpenButtonSwitch
          icon={ClockTimeIcon}
          buttonLeft={() => <h1>buttonLeft</h1>}
          buttonRight={() => <h1>buttonRight</h1>}
        />
      </div>
      <div>
        <h1>CutomModalWindowUniversal</h1>
        <CutomModalWindowUniversal redaxStateKey={""} title="title">
          <CustomInput label="label" placeholder="placeholder" />
          <CustomCounterInput label="label" placeholder="placeholder" />
          <PaymentMethod />
          <CustomDualButtonYesNo
            buttonRightText="buttonRightText"
            redaxStateKey={""}
          />
        </CutomModalWindowUniversal>
      </div>
    </>
  );
};

export default SandboxSmartComponents;
