import { FC, useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { postAuthorizationData } from "../../../services/api-auth/apiAuth";

import CustomLogo from "../../../common/static-components/custom-logo/CustomLogo";
import CustomPasswordInput from "../../../common/static-components/custom-password-input/CustomPasswordInput";
import CustomMailInput from "../../../common/static-components/custom-mail-input/CustomMailInput";
import CustomButton from "../../../common/static-components/custom-button/CustomButton";

import styles from "./authorization_form.module.scss";

export interface AuthInputDataTypes {
  login: string;
  passw: string;
}

export interface AuthPostDataTypes {
  request: string;
  apiKey: number;
  data: AuthInputDataTypes;
}

export interface errorsDataTypes {
  login: boolean;
  passw: boolean;
}

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
