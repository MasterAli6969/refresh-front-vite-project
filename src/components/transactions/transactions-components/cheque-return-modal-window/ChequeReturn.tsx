import { FC, useCallback } from "react";
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";

import { RedaxStateProps } from "../../../../commonTypes.interface";

import styles from "./cheque_return.module.scss";
import CutomModalWindowUniversal from "../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CartItem from "../../../shop/shop-common/cart-items/CartItems";
import {
  reduxCartItemsReducerStateKeyTransactions,
  selectCartItems,
  selectCartItemsTotal,
} from "../../transactionsCommonSelectMemo";
import TotalPurchase from "../../../shop/shop-common/total-purchase/TotalPurchase";

export interface ChequeReturnPropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
}

const ChequeReturn: FC<ChequeReturnPropsType> = ({ redaxStateKey, title }) => {
  const getCartItem = useAppSelector(selectCartItems);
  const getTotal = useAppSelector(selectCartItemsTotal);

  const cartItemMemoRender = useCallback(() => {
    return (
      <CartItem
        isProductRemove={false}
        redaxStateKeyProduct={reduxCartItemsReducerStateKeyTransactions}
        getCartItem={getCartItem}
      />
    );
  }, [getCartItem]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className={styles.div}>
      <CutomModalWindowUniversal
        width="30rem"
        onSubmit={handleSubmit}
        redaxStateKey={redaxStateKey}
        title={title}
      >
        <TotalPurchase getTotal={getTotal} />
      </CutomModalWindowUniversal>
    </div>
  );
};

export default ChequeReturn;
