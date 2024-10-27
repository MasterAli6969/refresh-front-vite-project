import { FC, PropsWithChildren } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { RedaxStateProps } from "../../../commonTypes.interface";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomModalCloseHead from "../custom-modal-close-head/CustomModalCloseHead";
//СТИЛИ
import styles from "./cutom_modal_window_universal.module.scss";

export interface CutomModalWindowUniversalPropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  width?: string;
}

const CutomModalWindowUniversal: FC<
  PropsWithChildren<CutomModalWindowUniversalPropsType>
> = ({
  redaxStateKey,
  title,
  specialText,
  onSubmit,
  width = "100%", // Значение по умолчанию, если пропс не передан
  children,
}) => {
  // Дефолтная функция обработки отправки формы
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем обновление страницы
    if (onSubmit) {
      onSubmit(event); // Вызов переданной функции, если она есть
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <CustomModalCloseHead
        redaxStateKey={redaxStateKey}
        text={title}
        specialText={specialText}
      />
      {children}
    </form>
  );
};

export default CutomModalWindowUniversal;
