import { FC, useState } from "react";

import ArrowCheckUp from "../../../assets/icons/ArrowCheckUp.svg";
import ArrowCheckDown from "../../../assets/icons/ArrowCheckDown.svg";

import styles from "./custom_counter_input.module.scss";

export interface CustomCounterInputPropsType {
  placeholder?: string;
  label?: string;
}

const CustomCounterInput: FC<CustomCounterInputPropsType> = ({
  label,
  placeholder,
}) => {
  const [count, setCount] = useState<number>(0);

  const handleCountReduction = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const handleCountEnlarge = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.div}>
      <h3>{label}</h3>
      <div>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
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
