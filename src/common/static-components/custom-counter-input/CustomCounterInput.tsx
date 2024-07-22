import { FC, useState } from "react";

import PlusIcon from "../../../assets/icons/PlusIcon.svg";
import CounterMinus from "../../../assets/icons/CounterMinus.svg";

import styles from "./custom_counter_input.module.scss";

export interface CustomCounterInputPropsType {
  label: string;
}

const CustomCounterInput: FC<CustomCounterInputPropsType> = ({ label }) => {
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
          placeholder="Введите количество штрафных минут"
        />
        <img onClick={handleCountReduction} src={CounterMinus} alt="Decrease" />
        <img onClick={handleCountEnlarge} src={PlusIcon} alt="Increase" />
      </div>
    </div>
  );
};

export default CustomCounterInput;
