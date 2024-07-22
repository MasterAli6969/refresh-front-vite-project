import { FC } from "react";

import styles from "./custom_textarea.module.scss";

export interface CustomTextareaPropsType {
  label: string;
  plaseholder: string;
}

const CustomTextarea: FC<CustomTextareaPropsType> = ({
  label,
  plaseholder,
}) => {
  return (
    <>
      <h3 className={styles.label}>{label}</h3>
      <textarea className={styles.textarea} placeholder={plaseholder} />
    </>
  );
};

export default CustomTextarea;
