import { FC } from "react";
import CutomModalWindowUniversal from "../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
//ИКОНКИ
import MaiIconSmall from "../../../../../../../assets/icons/MaiIconSmall.svg";
//МОДУЛИ ДЛЯ РАБОТЫ
import { RedaxStateProps } from "../../../../../../../commonTypes.interface";
import CustomInput from "../../../../../../../common/static-components/inputs/custom-input/CustomInput";
import CustomDualButtonYesNo from "../../../../../../../common/static-components/buttons/custom-dual-button-yes-no/CustomDualButtonYesNo";

interface AddNewUserModalWindowsPropsType extends RedaxStateProps {}

const AddNewUserModalWindows: FC<AddNewUserModalWindowsPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title="Регистрация нового пользователя"
    >
      <CustomInput
        icon={MaiIconSmall}
        placeholder="Введите email адрес нового клиента"
      />
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Отправить ссылку"
      />
    </CutomModalWindowUniversal>
  );
};

export default AddNewUserModalWindows;
