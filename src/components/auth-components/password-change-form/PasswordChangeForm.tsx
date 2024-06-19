import { FC } from "react";

import CustomLogo from "../../../common/common-UI-components/custom-logo/CustomLogo";
import CustomPasswordInput from "../../../common/common-UI-components/custom-password-input/CustomPasswordInput";
import CustomButton from "../../../common/common-UI-components/custom-button/CustomButton";

import styles from "./password_change_form.module.scss";

const PasswordChangeForm: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomLogo display="flex" isLabale="Задайте новый пароль" />
      </div>
      <div>
        <CustomPasswordInput label="Введите новый пароль" />
      </div>
      <div>
        <CustomPasswordInput label="Повторите ввод" />
      </div>
      <div>
        <CustomButton color="light" text="Сменить пароль" />
      </div>
    </div>
  );
};

export default PasswordChangeForm;
