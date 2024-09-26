import { ChangeEvent, FC, FormEvent, useState } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { useNavigate } from "react-router-dom";
//МОДУЛИ ДЛЯ РЕНДЕРА
import AuthFormWrapper from "../../../auth/auth-components/auth-form-wrapper/AuthFormWrapper";
import CustomPasswordInput from "../../../../common/static-components/custom-password-input/CustomPasswordInput";
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";
//СТИЛИ

const NewPasswordForm: FC = () => {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState<string>("");

  const [reenterNewPassword, setReenterNewPassword] = useState<string>("");

  const [mismatchesPassword, setMismatchesPassword] = useState<boolean>(false);

  const handleChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleChangeReenterNewPassword = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setReenterNewPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword === reenterNewPassword) {
      alert("Пароль изменён");
      navigate("/auth");
    } else {
      alert("Пароли не совпали");
      setMismatchesPassword(true);
    }
  };
  return (
    <AuthFormWrapper handleSubmit={handleSubmit} title="Задайте новый пароль">
      <CustomPasswordInput
        label="Новый пароль"
        placeholder="Введите новый пароль"
        name="passw"
        value={newPassword}
        onChange={handleChangeNewPassword}
      />
      <CustomPasswordInput
        label="Новый пароль"
        placeholder="Повторите ввод"
        name="passw"
        value={reenterNewPassword}
        error={mismatchesPassword}
        onChange={handleChangeReenterNewPassword}
      />
      <CustomButton type="submit" color="light">
        Подтвердить
      </CustomButton>
    </AuthFormWrapper>
  );
};

export default NewPasswordForm;
