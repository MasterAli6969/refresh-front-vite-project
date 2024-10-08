import { FC, useEffect, useState } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import AuthorizationForm from "./auth-components/authorization-form/AuthorizationForm";
import AccessRestorationForm from "./auth-components/access-restoration-form/AccessRestorationForm";
//СТИЛИ
import styles from "./auth.module.scss";
import AuthLodingSpinnerWindow from "./auth-components/auth-loding-spinner-window/AuthLodingSpinnerWindow";

const Auth: FC = () => {
  const [activeForm, setActiveForm] = useState<
    "authorization" | "accessRestorationForm" | "newPassword"
  >("authorization");

  const handleClickAccessRestorationFormActive = () => {
    setActiveForm("accessRestorationForm");
  };

  const handleClickAuthorizationFormActive = () => {
    setActiveForm("authorization");
  };

  useEffect(() => {
    setActiveForm("authorization");
  }, []);

  return (
    <div className={styles.div}>
      {activeForm === "authorization" && (
        <AuthorizationForm
          handleClickAccessRestorationFormActive={
            handleClickAccessRestorationFormActive
          }
        />
      )}
      {activeForm === "accessRestorationForm" && (
        <AccessRestorationForm
          handleClickAuthorizationFormActive={
            handleClickAuthorizationFormActive
          }
        />
      )}
    </div>
  );
};

export default Auth;
