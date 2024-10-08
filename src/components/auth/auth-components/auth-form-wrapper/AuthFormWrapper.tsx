import { FC, FormEvent, PropsWithChildren } from "react";
//ИЗОБРАЖЕНИЯ
import RefreshNewLogo from "../../../../assets/img/RefreshNewLogo.png";
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./auth_form_wrapper.module.scss";

interface AuthFormWrapperPropsType {
  title?: string;
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

const AuthFormWrapper: FC<PropsWithChildren<AuthFormWrapperPropsType>> = ({
  title,
  children,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.subdiv_header}>
        <img src={RefreshNewLogo} />
        {title && <h2>{title}</h2>}
      </div>
      <div className={styles.subdiv_items}>{children}</div>
    </form>
  );
};

export default AuthFormWrapper;
