import { FC, useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { postAuthorizationData } from "../../../services/api-auth/apiAuth";

import CustomLogo from "../../../common/common-UI-components/custom-logo/CustomLogo";
import CustomPasswordInput from "../../../common/common-UI-components/custom-password-input/CustomPasswordInput";
import CustomMailInput from "../../../common/common-UI-components/custom-mail-input/CustomMailInput";
import CustomButton from "../../../common/common-UI-components/custom-button/CustomButton";

import {
  AuthInputDataTypes,
  AuthPostDataTypes,
} from "./authorizationForm.interface";

import styles from "./authorization_form.module.scss";

const AuthorizationForm: FC = () => {
  const [authData, setAuthData] = useState<AuthInputDataTypes>({
    login: "",
    passw: "",
  });

  const navigate = useNavigate();

  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAuthData({
      ...authData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const authPostData: AuthPostDataTypes = {
      request: "adminauth",
      apiKey: 123456,
      data: authData,
    };

    try {
      const response = await postAuthorizationData(authPostData);
      console.log("Response:", response);
      // navigate("/");
      alert("Загляни в консоль");
    } catch (error) {
      alert("Что-то не так");
      console.log("DATA POST AUTH FRONT:", authPostData);
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
          label="Адрес эл. почты сотрудника"
          onChange={handlerChange}
          name="login"
          value={authData.login}
        />
      </div>
      <div>
        <CustomPasswordInput
          label="Пароль сотрудника"
          onChange={handlerChange}
          name="passw"
          value={authData.passw}
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