import { FC } from "react";
//МОДУЛИ ДЛЯ РЕНДЕРА
import AuthFormWrapper from "../auth-form-wrapper/AuthFormWrapper";
import CustomSpinner from "../../../../common/static-components/custom-spinner/CustomSpinner";
// СТИЛИ
import styles from "./auth_loding_spinner_window.module.scss";

const AuthLodingSpinnerWindow: FC = () => {
  return (
    <div className={styles.div}>
      <AuthFormWrapper>
        <CustomSpinner />
        <h3>Возвращаемся к началу...</h3>
      </AuthFormWrapper>
    </div>
  );
};

export default AuthLodingSpinnerWindow;
