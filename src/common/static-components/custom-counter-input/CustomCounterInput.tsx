import { ChangeEvent, FC, useEffect, useState } from "react";

import ArrowCheckUp from "../../../assets/icons/ArrowCheckUp.svg";
import ArrowCheckDown from "../../../assets/icons/ArrowCheckDown.svg";

import styles from "./custom_counter_input.module.scss";

export interface CustomCounterInputPropsType {
  placeholder?: string;
  label?: string;
  onChange?: (value: number | null) => void;
  value?: number | null;
}

const CustomCounterInput: FC<CustomCounterInputPropsType> = ({
  label,
  placeholder,
  onChange,
  value,
}) => {
  const [count, setCount] = useState<number | null>(null);

  const updateCount = (newCount: number | null) => {
    setCount(newCount);
    onChange && onChange(newCount ?? 0); // Передаем 0, если newCount undefined
  };

  const handleCountEnlarge = () => {
    updateCount((count ?? 0) + 1);
  };

  const handleCountReduction = () => {
    if (count && count !== 0) {
      updateCount(count - 1);
    } else {
      updateCount(null); // Очищаем поле, если достигли 0
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (isNaN(newValue) || newValue <= 0) {
      updateCount(null); // Очищаем поле, если значение некорректно или <= 0
    } else {
      updateCount(newValue);
    }
  };

  useEffect(() => {
    if (value) {
      setCount(value);
    }
  }, [value]);

  return (
    <div className={styles.div}>
      <h3>{label}</h3>
      <div>
        <input
          type="number"
          value={count === null ? "" : count}
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
