import { FC, useState, ChangeEvent, FormEvent } from "react";
// ИЗОБРАЖЕНИЯ
import AuthQRTestImage from "../../../../assets/img/AuthQRTestImage.png";
// ИКОНКИ
// МОДУЛИ ДЛЯ РАБОТЫ
import { useNavigate } from "react-router-dom";
import { postAuthorizationData } from "../../../../services/api-auth/apiAuth";
// МОДУЛИ ДЛЯ РЕНДЕРА
import AuthFormWrapper from "../auth-form-wrapper/AuthFormWrapper";
import CustomPasswordInput from "../../../../common/static-components/inputs/custom-password-input/CustomPasswordInput";
import CustomMailInput from "../../../../common/static-components/inputs/custom-mail-input/CustomMailInput";
import CustomButton from "../../../../common/static-components/buttons/custom-button/CustomButton";
// СТИЛИ
import styles from "./authorization_form.module.scss";
import CustomMiniSpinner from "../../../../common/static-components/custom-mini-spinner/CustomMiniSpinner";

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
  const [errorMail, setErrorMail] = useState<boolean>(false);
  const [errorPass, setErrorPass] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    setIsLoading(true);
    // Имитация задержки только для обработки формы
    setTimeout(async () => {
      const authPostData: AuthPostDataTypes = {
        request: "adminauth",
        apiKey: 123456,
        data: authData,
      };
      try {
        const response = await postAuthorizationData(authPostData);
        console.log("Response:", response);
        alert("Загляни в консоль, все вроде успешно");
        navigate("/");
      } catch (error) {
        alert("Неверная почта или пароль");
        setErrorMail(true);
        setErrorPass(true);
        console.log("DATA POST AUTH FRONT:", authPostData);
      } finally {
        setIsLoading(false);
      }
    }, 3000); // Задержка в 3 секунды
  };

  return (
    <AuthFormWrapper handleSubmit={handleSubmit} title="Добро пожаловать">
      <CustomMailInput
        label="Эл. почта"
        name="login"
        value={authData.login}
        error={errorMail}
        onChange={handlerChange}
      />
      <CustomPasswordInput
        label="Пароль"
        onChange={handlerChange}
        name="passw"
        error={errorPass}
        value={authData.passw}
      />
      <div className={styles.pass_requ_subdiv}>
        <h3 onClick={handleClickAccessRestorationFormActive}>Забыли пароль?</h3>
      </div>
      <CustomButton type="submit" color="light">
        Выполнить вход
        {isLoading && <CustomMiniSpinner />}
      </CustomButton>
      <div className={styles.qr_subdiv}>
        <img src={AuthQRTestImage} />
        <h4>Заявка на пробную версию системы управления</h4>
      </div>
    </AuthFormWrapper>
  );
};

export default AuthorizationForm;
