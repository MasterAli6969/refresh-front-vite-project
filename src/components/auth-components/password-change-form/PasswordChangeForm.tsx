import { FC, useState, ChangeEvent, FormEvent } from "react";

import CustomLogo from "../../../common/common-UI-components/custom-logo/CustomLogo";
import CustomPasswordInput from "../../../common/common-UI-components/custom-password-input/CustomPasswordInput";
import CustomButton from "../../../common/common-UI-components/custom-button/CustomButton";
import CustomDoneAuthWindow from "../../../common/common-UI-components/custom-done-auth-window/CustomDoneAuthWindow";

import { PassStateDataType } from "./passwordChangeForm.interface";

import styles from "./password_change_form.module.scss";

const PasswordChangeForm: FC = () => {
  const [passData, setPassData] = useState<PassStateDataType>({
    pass: "",
    repeatPass: "",
  });

  const [error, setError] = useState<boolean>(false);

  const [isPasswordChange, setIsPasswordChange] = useState<boolean>(false);

  const handleChangePass = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPassData({
      ...passData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isPasswordsMatch = passData.pass === passData.repeatPass;
    if (isPasswordsMatch) {
      setIsPasswordChange(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {!isPasswordChange ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <CustomLogo display="flex" isLabale="Задайте новый пароль" />
          </div>
          <div>
            <CustomPasswordInput
              error={error}
              name="pass"
              label="Введите новый пароль"
              value={passData.pass}
              onChange={handleChangePass}
            />
          </div>
          <div>
            <CustomPasswordInput
              error={error}
              name="repeatPass"
              label="Повторите ввод"
              value={passData.repeatPass}
              onChange={handleChangePass}
            />
          </div>
          <div>
            <CustomButton type="submit" color="light" text="Сменить пароль" />
          </div>
        </form>
      ) : (
        <CustomDoneAuthWindow
          label="Готово! Теперь вы можете войти в систему."
          buttonText="Вернуться к экрану авторизации"
          redirectRout="/authorization"
        />
      )}
    </>
  );
};

export default PasswordChangeForm;