import { FC } from "react";
// ТЕСТОВАЯ ОБЫЧНАЯ ИКОНКА
import ClockTimeIcon from "../../../assets/icons/ClockTimeIcon.svg";
//КОМПОНЕНТЫ ДЛЯ РЕНДНРА
import CustomAvatarName from "../../../common/static-components/custom-avatar-name/CustomAvatarName";
import CustomButton from "../../../common/static-components/buttons/custom-button/CustomButton";
import CustomCounterInput from "../../../common/static-components/inputs/custom-counter-input/CustomCounterInput";
import CustomDualButtonYesNo from "../../../common/static-components/buttons/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CustomInput from "../../../common/static-components/inputs/custom-input/CustomInput";
import CustomLogo from "../../../common/static-components/custom-logo/CustomLogo";
import CustomMailInput from "../../../common/static-components/inputs/custom-mail-input/CustomMailInput";
import CustomMiniSpinner from "../../../common/static-components/custom-mini-spinner/CustomMiniSpinner";
import CustomPasswordInput from "../../../common/static-components/inputs/custom-password-input/CustomPasswordInput";
import CustomRadioButton from "../../../common/static-components/buttons/custom-radio-button/CustomRadioButton";
import CustomSelect from "../../../common/static-components/custom-select/CustomSelect";
import CustomSpinner from "../../../common/static-components/custom-spinner/CustomSpinner";
import CustomSwitchButton from "../../../common/static-components/buttons/custom-switch-button/CustomSwitchButton";
import CustomToggleButton from "../../../common/static-components/buttons/custom-toggle-button/CustomToggleButton";
import CustomTextarea from "../../../common/static-components/inputs/custom-textarea/CustomTextarea";
import CustomUniversalDiv from "../../../common/static-components/containers/custom-universal-div/CustomUniversalDiv";

const SandboxStaticComponents: FC = () => {
  return (
    <>
      <h1>СТАТИЧЕСКИЕ КОМПОНЕНТЫ РЕНДЕРА И ИСПОЛЬЗОВАНИЯ</h1>

      <h2>КОНТЕЙНЕРЫ--------------------------------------------</h2>

      <div>
        ++
        <CustomUniversalDiv>
          <h2>КОНТЕЙНЕРЫ--------------------------------------------</h2>{" "}
          <h2>КОНТЕЙНЕРЫ--------------------------------------------</h2>{" "}
          <h2>КОНТЕЙНЕРЫ--------------------------------------------</h2>{" "}
          <h2>КОНТЕЙНЕРЫ--------------------------------------------</h2>
          <h2>КОНТЕЙНЕРЫ--------------------------------------------</h2>{" "}
          <h2>КОНТЕЙНЕРЫ--------------------------------------------</h2>
        </CustomUniversalDiv>
      </div>

      <h2>ПОЛЯ ВВОДА ДАННЫХ--------------------------------------------</h2>
      <div>
        ++
        <h1>CustomInput</h1>
        <CustomInput label="label" placeholder="placeholder" />
      </div>
      <div>
        <h1>CustomInput + icon</h1>
        <CustomInput
          label="label"
          downLabel="Введите сумму платежа для автоматического расчета времени"
          icon={ClockTimeIcon}
          placeholder="placeholder"
        />
      </div>
      <div>
        <h1>CustomCounterInput</h1>
        <CustomCounterInput label="label" placeholder="placeholder" />
      </div>
      <div>
        <h1>CustomMailInput</h1>
        <CustomMailInput label="label" name="name" placeholder="placeholder" />
      </div>
      <div>
        <h1>CustomTextarea</h1>
        <CustomTextarea label="label" placeholder="placeholder" />
      </div>
      <div>
        <h1>CustomPasswordInput</h1>
        <CustomPasswordInput label="CustomPasswordInput" name="name" />
      </div>

      <h2>КНОПКИ--------------------------------------------</h2>
      <div>
        <h1>CustomButton</h1>
        <CustomButton color="light">
          <h6>Button name</h6>
        </CustomButton>
      </div>
      <div>
        <h1>CustomButton + icon</h1>
        <CustomButton width="14rem" color="transparent">
          <img src={ClockTimeIcon} />
          <h6>Button name</h6>
        </CustomButton>
      </div>
      <div>
        <h1>CustomDualButtonYesNo</h1>
        <CustomDualButtonYesNo
          buttonRightText="buttonRightText"
          redaxStateKey={"redaxStateKey"}
        />
      </div>
      <div>
        <h1>CustomRadioButton</h1>
        <CustomRadioButton
          title="title"
          radioLeft="radioLeft"
          redioRight="redioRight"
        />
      </div>
      <div>
        <h1>CustomToggleButton + 3</h1>
        <CustomToggleButton
          buttonsText={["buttonsText1", "buttonsText2", "buttonsText3"]}
        />
      </div>
      <div>
        <h1>CustomToggleButton + 2</h1>
        <CustomToggleButton buttonsText={["buttonsText1", "buttonsText2"]} />
      </div>
      <div>
        <h1>CustomSwitchButton</h1>
        <CustomSwitchButton
          buttonLeft="buttonLeft"
          buttonRight="buttonRight"
          componentLeft={() => (
            <div>
              <h1>CustomSelect</h1>
              <CustomSelect
                title="title"
                customSelectData={[
                  { id: 1, selectItem: "Select1" },
                  { id: 2, selectItem: "Select2" },
                  { id: 3, selectItem: "Select12" },
                ]}
              />
            </div>
          )}
          componentRight={() => (
            <div>
              <h1>CustomInput + icon</h1>
              <CustomInput
                label="label"
                icon={ClockTimeIcon}
                placeholder="placeholder"
              />
            </div>
          )}
        />
      </div>

      <h2>СЕЛЕКТОРЫ--------------------------------------------</h2>
      <div>
        <h1>CustomSelect</h1>
        <CustomSelect
          title="title"
          customSelectData={[
            { id: 1, selectItem: "Select1" },
            { id: 2, selectItem: "Select2" },
            { id: 3, selectItem: "Select12" },
          ]}
        />
      </div>
      <div>
        <h1>CustomAvatarName</h1>
        <CustomAvatarName name="Ali" />
      </div>

      <div>
        <h1>CustomLogo + display:block</h1>
        <CustomLogo display="block" />
      </div>

      <div>
        <h1>CustomMiniSpinner</h1>
        <div style={{ width: "5rem" }}>
          <CustomMiniSpinner />
        </div>
      </div>

      <div>
        <h1>CustomSpinner</h1>
        <CustomSpinner />
      </div>
    </>
  );
};

export default SandboxStaticComponents;
