import { FC } from "react";

import AuthorizationForm from "../../../components/auth-components/authorization-form/AuthorizationForm";

import styles from "./authorization.module.scss";

const Authorization: FC = () => {
  return (
    <div className={styles.div}>
      <AuthorizationForm />
    </div>
  );
};

export default Authorization;
