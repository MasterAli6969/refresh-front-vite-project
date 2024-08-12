import { FC } from "react";

import styles from "./total_purchase.module.scss";

const TotalPurchase: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_header}>
        <p>Общая сумма</p>
        <p>₽ 0</p>
      </div>
      <div className={styles.subdiv_item}>
        <div>
          <p>
            Товары
            <span>{"(х0)"}</span>
          </p>
          <p>₽ 0</p>
        </div>
        <div>
          <p>
            Тарифы
            <span>{"(х0)"}</span>
          </p>
          <p>₽ 0</p>
        </div>
      </div>
    </div>
  );
};

export default TotalPurchase;
