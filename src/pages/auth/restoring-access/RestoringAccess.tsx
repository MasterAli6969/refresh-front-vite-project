import { FC } from "react";

import RestoringAccessForm from "../../../components/auth-components/restoring-access-form/RestoringAccessForm";

import styles from "./restoring_access.module.scss";

const RestoringAccess: FC = () => {
  return (
    <div className={styles.div}>
      <RestoringAccessForm />
    </div>
  );
};

export default RestoringAccess;
