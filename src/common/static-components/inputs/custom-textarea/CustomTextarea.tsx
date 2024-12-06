import { FC } from "react";

import styles from "./custom_textarea.module.scss";

export interface CustomTextareaPropsType {
  label?: string;
  placeholder: string;
}

const CustomTextarea: FC<CustomTextareaPropsType> = ({
  label,
  placeholder,
}) => {
  return (
    <div className={styles.div}>
      <h3>{label}</h3>
      <textarea placeholder={placeholder} />
    </div>
  );
};

export default CustomTextarea;
