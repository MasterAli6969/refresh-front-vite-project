import { ChangeEvent, FC, useEffect, useState } from "react";

import ArrowCheckUp from "../../../assets/icons/ArrowCheckUp.svg";
import ArrowCheckDown from "../../../assets/icons/ArrowCheckDown.svg";

import styles from "./custom_counter_input.module.scss";

export interface CustomCounterInputPropsType {
  placeholder?: string;
  label?: string;
  onChange?: (value: number | string) => void;
  value?: number | string; // Добавляем пропс value
}

const CustomCounterInput: FC<CustomCounterInputPropsType> = ({
  label,
  placeholder,
  onChange,
  value = "",
}) => {
  const [count, setCount] = useState<number | string>(value);

  const handleCountEnlarge = () => {
    const newCount = count === "" ? 1 : Number(count) + 1;
    setCount(newCount);
    onChange && onChange(newCount);
  };

  const handleCountReduction = () => {
    const newCount = count === "" ? 0 : Math.max(Number(count) - 1, 0);
    setCount(newCount);
    onChange && onChange(newCount);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue =
      event.target.value === "" || event.target.value === "0"
        ? ""
        : Number(event.target.value);
    setCount(newValue);
    onChange && onChange(newValue);
  };

  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <div className={styles.div}>
      <h3>{label}</h3>
      <div>
        <input
          type="number"
          value={count}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <div>
          <img onClick={handleCountEnlarge} src={ArrowCheckUp} alt="Increase" />
          <img
            onClick={handleCountReduction}
            src={ArrowCheckDown}
            alt="Decrease"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCounterInput;
