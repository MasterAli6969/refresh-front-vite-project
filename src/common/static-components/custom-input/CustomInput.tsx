import { FC } from "react";

import styles from "./custom_input.module.scss";

export interface CustomInputPropsType {
  label?: string;
  plaseholder: string;
}

const CustomInput: FC<CustomInputPropsType> = ({ label, plaseholder }) => {
  return (
    <>
      <h3 className={styles.label}>{label}</h3>
      <input type="text" className={styles.input} placeholder={plaseholder} />
    </>
  );
};

export default CustomInput;
