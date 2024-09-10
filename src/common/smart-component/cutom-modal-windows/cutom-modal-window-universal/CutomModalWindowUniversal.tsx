import { FC, PropsWithChildren } from "react";

import { RedaxStateProps } from "../../../../commonTypes.interface";
import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";

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
  return (
    <form
      style={{ width }} // Используем `width` напрямую
      onSubmit={onSubmit}
      className={styles.form}
    >
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
