import { FC } from "react";

import AuthForm from "../../components/auth-components/auth-form/AuthForm";

import PasswordChangeForm from "../../components/auth-components/password-change-form/PasswordChangeForm";
import RestoringAccess from "../../components/auth-components/restoring-access/RestoringAccess";

import styles from "./auth.module.scss";
import CustomDoneAuthWindow from "../../common/common-UI-components/custom-done-auth-window/CustomDoneAuthWindow";

const Auth: FC = () => {
  return (
    <div className={styles.div}>
      <AuthForm />
    </div>
  );
};

export default Auth;
