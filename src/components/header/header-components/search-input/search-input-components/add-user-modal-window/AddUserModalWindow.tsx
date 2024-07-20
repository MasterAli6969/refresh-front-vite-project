import { FC } from "react";

import { RedaxStateProps } from "../../../../../../commonTypes.interface";
import CustomModalCloseHead from "../../../../../../common/smart-component/custom-modal-close-head/CustomModalCloseHead";
import CustomDualButtonYesNo from "../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CustomInput from "../../../../../../common/static-components/custom-input/CustomInput";

import styles from "./add_user_modal_window.module.scss";

interface AddUserModalWindowPropsType extends RedaxStateProps {}

const AddUserModalWindow: FC<AddUserModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalCloseHead
          redaxStateKey={redaxStateKey}
          text="Регистрация нового пользователя"
        />
      </div>
      <p>
        Во избежание утечки персональной информации, регистрация клиентов
        возможна 2 способами:
      </p>
      <u>
        <p>1. Через пользовательский лаунчер центра</p>
        <p>
          2. Путем отправки регистрационной ссылки на email клиента. Если
          потенциальный клиент предпочел данный вариант , введите email адрес в
          графу ниже.
        </p>
      </u>
      <div>
        <CustomInput
          label="Адрес эл. почты нового клиента"
          plaseholder="Введите email адрес"
        />
      </div>
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Отправить"
      />
    </div>
  );
};

export default AddUserModalWindow;
