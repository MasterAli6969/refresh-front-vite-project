import { FC } from "react";
import styles from "./shift_block.module.scss";

const ShiftBlock: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <h3>Сотрудник смены</h3>
        <h3>На смене нет сотрудника</h3>
      </div>
      <div>
        <h3>Начало смены</h3>
        <h3>Смена не открыта</h3>
      </div>
      <button>
        <h2>Открыть смену</h2>
      </button>
    </div>
  );
};

export default ShiftBlock;
