import { FC, useState, ChangeEvent, FormEvent } from "react";

import CustomLogo from "../../../common/static-components/custom-logo/CustomLogo";
import CustomMailInput from "../../../common/static-components/custom-mail-input/CustomMailInput";
import CustomButton from "../../../common/static-components/custom-button/CustomButton";
import SphereArrowCheckLeft from "../../../assets/icons/SphereArrowCheckLeft.svg";
import CustomDoneAuthWindow from "../../../common/smart-component/custom-done-auth-window/CustomDoneAuthWindow";

import { testAuthData } from "../../../pages/auth/data";

import styles from "./restoring_access_form.module.scss";

const RestoringAccessForm: FC = () => {
  const [mail, setMail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isMailSent, setIsMailSent] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isMailValid = mail === testAuthData.mail;
    if (isMailValid) {
      setIsMailSent(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {!isMailSent ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <CustomLogo display="flex" />
          </div>
          <div>
            <img src={SphereArrowCheckLeft} alt="Sphere Arrow Check Left" />
            <h3>Восстановление доступа</h3>
          </div>
          <div>
            <CustomMailInput
              error={error}
              label="Введите адрес эл. почты"
              name="mail"
              value={mail}
              onChange={handleChange}
            />
          </div>
          <div>
            <CustomButton
              color="light"
              text="Отправить ссылку для восстановления"
              type="submit"
            />
          </div>
        </form>
      ) : (
        <CustomDoneAuthWindow
          label="Готово! Проверьте вашу почту."
          buttonText="Далее"
          redirectRout="/password-change"
        />
      )}
    </>
  );
};

export default RestoringAccessForm;
