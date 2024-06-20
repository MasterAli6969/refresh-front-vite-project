import { FC } from "react";

import styles from "./password_change.module.scss";
import PasswordChangeForm from "../../../components/auth-components/password-change-form/PasswordChangeForm";

const PasswordChange: FC = () => {
  return (
    <div className={styles.div}>
      <PasswordChangeForm />
    </div>
  );
};

export default PasswordChange;
