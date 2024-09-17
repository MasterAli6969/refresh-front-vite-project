import { FC } from "react";

import { RedaxStateProps } from "../../../../../../commonTypes.interface";
import CustomDualButtonYesNo from "../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CustomInput from "../../../../../../common/static-components/custom-input/CustomInput";

import CutomModalWindowUniversal from "../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";

interface AddUserModalWindowPropsType extends RedaxStateProps {}

const AddUserModalWindow: FC<AddUserModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title="Регистрация нового пользователя"
    >
      <div>
        <p>
          Во избежание утечки персональной информации, регистрация клиентов
          возможна 2 способами:
        </p>
        <u>
          <p>1. Через пользовательский лаунчер центра</p>
          <p>
            2. Путем отправки регистрационной ссылки на email клиента. Если
            потенциальный клиент предпочел данный вариант , введите email адрес
            в графу ниже.
          </p>
        </u>
      </div>
      <CustomInput
        label="Адрес эл. почты нового клиента"
        placeholder="Введите email адрес"
      />
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Отправить"
      />
    </CutomModalWindowUniversal>
  );
};

export default AddUserModalWindow;
