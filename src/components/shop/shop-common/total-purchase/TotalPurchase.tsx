import { FC, useMemo } from "react";

import styles from "./total_purchase.module.scss";
import { CartItemsTotalType } from "../../../../features/redux/reducers/special-reducers/shop-reducers/cartItemsReducer";

interface TotalPurchasePropsType {
  getTotal: CartItemsTotalType;
}

const TotalPurchase: FC<TotalPurchasePropsType> = ({ getTotal }) => {
  const totalRender = useMemo(() => getTotal, [getTotal]);

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_header}>
        <p>Общая сумма</p>
        <p>₽ {totalRender.totalPrice}</p>
      </div>
      <div className={styles.subdiv_item}>
        <div>
          <p>
            Товары
            <span>{`(х ${totalRender.typeProductsCount})`}</span>
          </p>
          <p>₽ {totalRender.totalProductsPrice}</p>
        </div>
        <div>
          <p>
            Тарифы
            <span>{`(х ${totalRender.typeTarifesCount})`}</span>
          </p>
          <p>₽ {totalRender.totalTarifesPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalPurchase;
