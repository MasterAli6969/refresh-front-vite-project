import { FC } from "react";

import { CustomInputPropsType } from "./customInput.interface";

import styles from "./custom_input.module.scss";

const CustomInput: FC<CustomInputPropsType> = ({ label, plaseholder }) => {
  return (
    <>
      <h3 className={styles.label}>{label}</h3>
      <input type="text" className={styles.input} placeholder={plaseholder} />
    </>
  );
};

export default CustomInput;
