import { FC } from "react";

import styles from "./custom_input.module.scss";

export interface CustomInputPropsType {
  label?: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

const CustomInput: FC<CustomInputPropsType> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      {label && <h3 className={styles.label}>{label}</h3>}
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </>
  );
};

export default CustomInput;
