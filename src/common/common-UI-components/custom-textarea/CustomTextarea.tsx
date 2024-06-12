import { FC } from "react";

import { CustomTextareaPropsType } from "./customTextarea.interface";

import styles from "./custom_textarea.module.scss";

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
