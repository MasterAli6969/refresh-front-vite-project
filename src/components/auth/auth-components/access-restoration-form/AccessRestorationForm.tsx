import { FC, useState, FormEvent, ChangeEvent } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { useNavigate } from "react-router-dom";
//МОДУЛИ ДЛЯ РЕНДЕРА
import AuthFormWrapper from "../auth-form-wrapper/AuthFormWrapper";
import CustomMailInput from "../../../../common/static-components/custom-mail-input/CustomMailInput";
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";
import CustomMiniSpinner from "../../../../common/static-components/custom-mini-spinner/CustomMiniSpinner";
import AuthLodingSpinnerWindow from "../auth-loding-spinner-window/AuthLodingSpinnerWindow";

interface AccessRestorationFormPropsType {
  handleClickAuthorizationFormActive: () => void;
}

const AccessRestorationForm: FC<AccessRestorationFormPropsType> = ({
  handleClickAuthorizationFormActive,
}) => {
  const navigate = useNavigate();

  const [mailInputValue, setMailInputValue] = useState<string>("");

  const [errorMail, setErrorMail] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalLoading, setIsModalLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleMailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMailInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Имитация задержки только для обработки формы
    setTimeout(async () => {
      if (mailInputValue === "") {
        setErrorMail(true);
        alert("Укажите почту корректно");
        setIsLoading(false);
        setIsSuccess(false);
      } else {
        setErrorMail(false);
        setIsSuccess(true);
        alert("Перейди на почту");
      }
    }, 3000);
    console.log("handleSubmit ОТРАБОТАЛ УСПЕШНО");
  };

  const handleClickRedirect = () => {
    setIsModalLoading(true);
    setTimeout(async () => {
      navigate("/password-recovery");
      setIsModalLoading(false);
    }, 3000);
  };

  return (
    <>
      {!isModalLoading ? (
        <AuthFormWrapper
          handleSubmit={handleSubmit}
          title="Восстановление доступа"
        >
          <CustomMailInput
            label="Адрес эл. почты сотрудника"
            name="newlogin"
            value={mailInputValue}
            onChange={handleMailInputChange}
            error={errorMail}
          />
          {isSuccess ? (
            <CustomButton
              onClick={handleClickRedirect}
              type="button"
              color="special"
            >
              Готово
            </CustomButton>
          ) : (
            <CustomButton type="submit" color="light">
              Отправить ссылку для восстановления
              {isLoading && <CustomMiniSpinner />}
            </CustomButton>
          )}
          <CustomButton
            onClick={handleClickAuthorizationFormActive}
            type="button"
            color="transparent"
          >
            Вернуться к экрану входа
          </CustomButton>
        </AuthFormWrapper>
      ) : (
        <AuthLodingSpinnerWindow />
      )}
    </>
  );
};

export default AccessRestorationForm;
