import { FC } from "react";
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";

import styles from "./total_purchase.module.scss";

const TotalPurchase: FC = () => {
  const getTotal = useAppSelector((state) => state.cartItems.cartItemsTotal);

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_header}>
        <p>Общая сумма</p>
        <p>₽ {getTotal.totalPrice}</p>
      </div>
      <div className={styles.subdiv_item}>
        <div>
          <p>
            Товары
            <span>{`(х ${getTotal.typeProductsCount})`}</span>
          </p>
          <p>₽ {getTotal.totalProductsPrice}</p>
        </div>
        <div>
          <p>
            Тарифы
            <span>{`(х ${getTotal.typeTarifesCount})`}</span>
          </p>
          <p>₽ {getTotal.totalTarifesPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalPurchase;
