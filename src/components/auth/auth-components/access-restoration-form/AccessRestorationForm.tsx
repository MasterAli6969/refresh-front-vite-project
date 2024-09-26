import { FC, useState, FormEvent, ChangeEvent } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { useNavigate } from "react-router-dom";
//МОДУЛИ ДЛЯ РЕНДЕРА
import AuthFormWrapper from "../auth-form-wrapper/AuthFormWrapper";
import CustomMailInput from "../../../../common/static-components/custom-mail-input/CustomMailInput";
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";

interface AccessRestorationFormPropsType {
  handleClickAuthorizationFormActive: () => void;
}

const AccessRestorationForm: FC<AccessRestorationFormPropsType> = ({
  handleClickAuthorizationFormActive,
}) => {
  const navigate = useNavigate();

  const [mailInputValue, setMailInputValue] = useState<string>("");

  const [errorMail, setErrorMail] = useState<boolean>(false);

  const handleMailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMailInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mailInputValue === "") {
      setErrorMail(true);
      alert("Укажите почту корректно");
    } else {
      setErrorMail(false);
      alert("Перейди на почту");
      navigate("/password-recovery");
    }
  };

  return (
    <AuthFormWrapper handleSubmit={handleSubmit} title="Восстановление доступа">
      <CustomMailInput
        label="Адрес эл. почты сотрудника"
        name="newlogin"
        value={mailInputValue}
        onChange={handleMailInputChange}
        error={errorMail}
      />
      <CustomButton type="submit" color="light">
        Отправить ссылку для восстановления
      </CustomButton>
      <CustomButton
        onClick={handleClickAuthorizationFormActive}
        type="button"
        color="transparent"
      >
        Вернуться к экрану входа
      </CustomButton>
    </AuthFormWrapper>
  );
};

export default AccessRestorationForm;
