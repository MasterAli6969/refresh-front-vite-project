import { FC } from "react";

import { RedaxStateProps } from "../../../../commonTypes.interface";
import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";

import styles from "./cutom_modal_window_universal.module.scss";

export interface CutomModalWindowUniversalPropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  components: FC[];
  width?: string; // Строка для ширины
}

const CutomModalWindowUniversal: FC<CutomModalWindowUniversalPropsType> = ({
  redaxStateKey,
  title,
  specialText,
  components,
  onSubmit,
  width = "100%", // Значение по умолчанию, если пропс не передан
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
      {components &&
        components.length !== 0 &&
        components.map((Component, index) => (
          <div key={index}>
            <Component />
          </div>
        ))}
    </form>
  );
};

export default CutomModalWindowUniversal;
