import { FC } from "react";

import styles from "./custom_input.module.scss";

export interface CustomInputPropsType {
  label?: string;
  icon?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  isReadOnly?: boolean;
}

const CustomInput: FC<CustomInputPropsType> = ({
  label,
  icon,
  placeholder,
  value,
  onChange,
  isReadOnly = false,
}) => {
  return (
    <div className={styles.div}>
      {label && <h3 className={styles.label}>{label}</h3>}
      <div>
        {icon && <img src={icon} />}
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(e) => !isReadOnly && onChange && onChange(e.target.value)}
          readOnly={isReadOnly}
        />
      </div>
    </div>
  );
};

export default CustomInput;
