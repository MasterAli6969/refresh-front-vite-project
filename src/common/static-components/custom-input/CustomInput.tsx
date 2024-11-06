import { FC } from "react";

import styles from "./custom_input.module.scss";

export interface CustomInputPropsType {
  label?: string;
  icon?: string;
  placeholder?: string;
  type?: "text" | "number";
  value?: string | number;
  onChange?: (value: string | number) => void;
  isReadOnly?: boolean;
}

const CustomInput: FC<CustomInputPropsType> = ({
  label,
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
  isReadOnly = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue =
      type === "number" ? Number(e.target.value) : e.target.value;
    if (!isReadOnly && onChange) {
      onChange(inputValue);
    }
  };

  return (
    <div className={styles.div}>
      {label && <h3 className={styles.label}>{label}</h3>}
      <div>
        {icon && <img src={icon} alt="icon" />}
        <input
          type={type}
          className={styles.input}
          placeholder={placeholder}
          value={value !== undefined ? value : ""}
          onChange={handleChange}
          readOnly={isReadOnly}
        />
      </div>
    </div>
  );
};

export default CustomInput;
