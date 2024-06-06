import { FC } from "react";

import { CustomInputPropsType } from "./customInput.interface";

import styles from "./custom_input.module.scss";

const CustomInput: FC<CustomInputPropsType> = ({ text }) => {
  return <input type="text" className={styles.input} placeholder={text} />;
};

export default CustomInput;
