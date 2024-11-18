import { ChangeEvent, FC, FormEvent, useState } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { useNavigate } from "react-router-dom";
//МОДУЛИ ДЛЯ РЕНДЕРА
import AuthFormWrapper from "../../../auth/auth-components/auth-form-wrapper/AuthFormWrapper";
import CustomPasswordInput from "../../../../common/static-components/inputs/custom-password-input/CustomPasswordInput";
import CustomButton from "../../../../common/static-components/buttons/custom-button/CustomButton";
import CustomMiniSpinner from "../../../../common/static-components/custom-mini-spinner/CustomMiniSpinner";
import AuthLodingSpinnerWindow from "../../../auth/auth-components/auth-loding-spinner-window/AuthLodingSpinnerWindow";
//СТИЛИ

const NewPasswordForm: FC = () => {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState<string>("");
  const [reenterNewPassword, setReenterNewPassword] = useState<string>("");
  const [isErrorNewPassword, setisErrorNewPassword] = useState<boolean>(false);
  const [isErrorReenterNewPassword, setisErrorReenterNewPassword] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isModalLoading, setIsModalLoading] = useState<boolean>(false);

  const handleChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
    setisErrorNewPassword(false);
  };

  const handleChangeReenterNewPassword = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setReenterNewPassword(event.target.value);
    setisErrorReenterNewPassword(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword === "") {
      alert("Введите новый пароль");
      setisErrorNewPassword(true);
    } else if (newPassword != reenterNewPassword) {
      alert("Пароли не совпали");
      setisErrorReenterNewPassword(true);
    } else {
      setIsLoading(true);
      // Имитация задержки только для обработки формы
      setTimeout(async () => {
        alert("Пароль изменён");
        setIsSuccess(true);
        setIsLoading(false);
      }, 3000);
    }
  };

  const handleClickRedirect = () => {
    setIsModalLoading(true);
    // Имитация задержки только для обработки формы
    setTimeout(async () => {
      navigate("/auth");
      setIsModalLoading(false);
    }, 3000);
  };

  return (
    <>
      {!isModalLoading ? (
        <AuthFormWrapper
          handleSubmit={handleSubmit}
          title="Задайте новый пароль"
        >
          <CustomPasswordInput
            label="Новый пароль"
            placeholder="Введите новый пароль"
            name="passw"
            value={newPassword}
            error={isErrorNewPassword}
            onChange={handleChangeNewPassword}
          />
          <CustomPasswordInput
            label="Новый пароль"
            placeholder="Повторите ввод"
            name="passw"
            value={reenterNewPassword}
            error={isErrorReenterNewPassword}
            onChange={handleChangeReenterNewPassword}
          />
          {isSuccess ? (
            <CustomButton
              type="button"
              color="special"
              onClick={handleClickRedirect}
            >
              Готово
            </CustomButton>
          ) : (
            <CustomButton type="submit" color="light">
              Подтвердить
              {isLoading && <CustomMiniSpinner />}
            </CustomButton>
          )}
        </AuthFormWrapper>
      ) : (
        <AuthLodingSpinnerWindow />
      )}
    </>
  );
};

export default NewPasswordForm;
