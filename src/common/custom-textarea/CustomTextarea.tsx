import { FC } from "react";

import { CustomTextareaPropsType } from "./customTextarea.interface";

import styles from "./custom_textarea.module.scss";

const CustomTextarea: FC<CustomTextareaPropsType> = ({ text }) => {
  return <textarea className={styles.textarea} placeholder={text} />;
};

export default CustomTextarea;
