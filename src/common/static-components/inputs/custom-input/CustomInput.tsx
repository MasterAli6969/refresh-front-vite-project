import { FC } from "react";

import styles from "./custom_input.module.scss";

export interface CustomInputPropsType {
  label?: string;
  width?: string;
  icon?: string;
  placeholder?: string;
  downLabel?: string;
  type?: "text" | "number";
  value?: string | number | null;
  onChange?: (value: string | number | null) => void;
  isReadOnly?: boolean;
}

const CustomInput: FC<CustomInputPropsType> = ({
  label,
  downLabel,
  width = "100%",
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
  isReadOnly = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventData = event.target.value;

    if (type === "number") {
      const inputValue = Number(eventData);
      if (!isReadOnly && onChange) {
        // Устанавливаем только положительные числа или `null`
        onChange(inputValue > 0 ? inputValue : null);
      }
    } else {
      if (!isReadOnly && onChange) {
        onChange(eventData); // Для текста передаем строку напрямую
      }
    }
  };

  return (
    <div style={{ width: `${width}` }} className={styles.div}>
      {label && <h3 className={styles.label}>{label}</h3>}
      <div>
        {icon && <img src={icon} alt="icon" />}
        <input
          type={type}
          className={styles.input}
          placeholder={placeholder}
          value={value !== null ? value : ""}
          onChange={handleChange}
          readOnly={isReadOnly}
        />
      </div>
      {downLabel && <p>{downLabel}</p>}
    </div>
  );
};

export default CustomInput;
