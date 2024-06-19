import { FC } from "react";

import CustomLogo from "../../../common/common-UI-components/custom-logo/CustomLogo";
import CustomPasswordInput from "../../../common/common-UI-components/custom-password-input/CustomPasswordInput";
import CustomMailInput from "../../../common/common-UI-components/custom-mail-input/CustomMailInput";
import CustomButton from "../../../common/common-UI-components/custom-button/CustomButton";

import styles from "./auth_form.module.scss";

const AuthForm: FC = () => {
  return (
    <form className={styles.form}>
      <div>
        <div>
          <CustomLogo display="flex" isLabale="Авторизация" />
        </div>
      </div>
      <div>
        <CustomMailInput error={false} label="Адрес эл. почты сотрудника" />
      </div>
      <div>
        <CustomPasswordInput error={false} label="Пароль сотрудника" />
      </div>
      <div>
        <CustomButton color="light" text="Выполнить вход" />
      </div>
      <hr />
      <div>
        <CustomButton type="submit" color="dark" text="Запросить демо" />
      </div>
    </form>
  );
};

export default AuthForm;
