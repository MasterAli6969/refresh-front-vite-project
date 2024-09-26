import { FC, useState, ChangeEvent, FormEvent } from "react";
//ИЗОБРАЖЕНИЯ
import AuthQRTestImage from "../../../../assets/img/AuthQRTestImage.png";
//МОДУЛИ ДЛЯ РАБОТЫ
import { useNavigate } from "react-router-dom";
import { postAuthorizationData } from "../../../../services/api-auth/apiAuth";
//МОДУЛИ ДЛЯ РЕНДЕРА
import AuthFormWrapper from "../auth-form-wrapper/AuthFormWrapper";
import CustomPasswordInput from "../../../../common/static-components/custom-password-input/CustomPasswordInput";
import CustomMailInput from "../../../../common/static-components/custom-mail-input/CustomMailInput";
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";
//СТИЛИ
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

interface AuthorizationFormPropsType {
  handleClickAccessRestorationFormActive: () => void;
}

const AuthorizationForm: FC<AuthorizationFormPropsType> = ({
  handleClickAccessRestorationFormActive,
}) => {
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
      navigate("/");
    } catch (error) {
      alert("Что-то не так");
      console.log("DATA POST AUTH FRONT:", authPostData);
    }
  };

  return (
    <AuthFormWrapper handleSubmit={handleSubmit} title="Добро пожаловать">
      <CustomMailInput
        label="Адрес эл. почты сотрудника"
        onChange={handlerChange}
        name="login"
        value={authData.login}
      />
      <CustomPasswordInput
        label="Пароль сотрудника"
        onChange={handlerChange}
        name="passw"
        value={authData.passw}
      />
      <div className={styles.pass_requ_subdiv}>
        <h3 onClick={handleClickAccessRestorationFormActive}>Забыли пароль?</h3>
      </div>
      <CustomButton type="submit" color="light">
        Выполнить вход
      </CustomButton>
      <div className={styles.qr_subdiv}>
        <img src={AuthQRTestImage} />
        <h4>Заявка на пробную версию системы управления</h4>
      </div>
    </AuthFormWrapper>
  );
};

export default AuthorizationForm;
