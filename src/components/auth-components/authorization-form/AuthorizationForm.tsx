import { FC, useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import CustomLogo from "../../../common/common-UI-components/custom-logo/CustomLogo";
import CustomPasswordInput from "../../../common/common-UI-components/custom-password-input/CustomPasswordInput";
import CustomMailInput from "../../../common/common-UI-components/custom-mail-input/CustomMailInput";
import CustomButton from "../../../common/common-UI-components/custom-button/CustomButton";

import {
  testAuthDataTypes,
  errorsDataTypes,
} from "./authorizationForm.interface";
import { testAuthData } from "../../../pages/auth/data";

import styles from "./authorization_form.module.scss";

const AuthorizationForm: FC = () => {
  const [authData, setAuthData] = useState<testAuthDataTypes>({
    mail: "",
    pass: "",
  });

  const [errors, setErrors] = useState<errorsDataTypes>({
    mail: false,
    pass: false,
  });

  const navigate = useNavigate();

  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAuthData({
      ...authData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isMailValid = authData.mail === testAuthData.mail;
    const isPassValid = authData.pass === testAuthData.pass;

    if (isMailValid && isPassValid) {
      navigate("/");
    } else {
      setErrors({
        mail: !isMailValid,
        pass: !isPassValid,
      });
    }
  };

  const handleRedirectRestoringAccess = () => {
    navigate("/restoring-access");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <CustomLogo display="flex" isLabale="Авторизация" />
      </div>
      <div>
        <CustomMailInput
          error={errors.mail}
          label="Адрес эл. почты сотрудника"
          onChange={handlerChange}
          name="mail"
          value={authData.mail}
        />
      </div>
      <div>
        <CustomPasswordInput
          error={errors.pass}
          label="Пароль сотрудника"
          onChange={handlerChange}
          name="pass"
          value={authData.pass}
        />
      </div>
      <div>
        <h3 onClick={handleRedirectRestoringAccess}>Забыли пароль?</h3>
      </div>
      <div>
        <CustomButton type="submit" color="light" text="Выполнить вход" />
      </div>
      <hr />
      <div>
        <CustomButton color="dark" text="Запросить демо" />
      </div>
    </form>
  );
};

export default AuthorizationForm;
