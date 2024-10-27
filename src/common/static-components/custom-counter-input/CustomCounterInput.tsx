import { FC, useEffect, useState } from "react";

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
  const [count, setCount] = useState<number | string>("");

  const handleCountReduction = () => {
    setCount((prevCount) =>
      prevCount === "" ? 0 : Math.max(Number(prevCount) - 1, 0)
    );
  };

  const handleCountEnlarge = () => {
    setCount((prevCount) => (prevCount === "" ? 1 : Number(prevCount) + 1));
  };

  useEffect(() => {
    if (count === 0) {
      setCount("");
    }
  }, [count]);

  return (
    <div className={styles.div}>
      <h3>{label}</h3>
      <div>
        <input
          type="number"
          value={count}
          onChange={(e) =>
            setCount(e.target.value === "" ? "" : Number(e.target.value))
          }
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
