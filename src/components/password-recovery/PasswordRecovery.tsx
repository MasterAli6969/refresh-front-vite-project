import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./password_recovery.module.scss";
import NewPasswordForm from "./password-recovery-components/new-password-form/NewPasswordForm";

const PasswordRecovery: FC = () => {
  return (
    <div className={styles.div}>
      <NewPasswordForm />
    </div>
  );
};

export default PasswordRecovery;
