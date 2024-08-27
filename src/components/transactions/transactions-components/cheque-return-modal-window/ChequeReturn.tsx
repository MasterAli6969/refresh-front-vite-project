import { FC } from "react";
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";

import { RedaxStateProps } from "../../../../commonTypes.interface";

import styles from "./cheque_return.module.scss";
import CutomModalWindowUniversal from "../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-universal/CutomModalWindowUniversal";
import CartItem from "../../../shop/shop-common/cart-items/CartItems";

export interface ChequeReturnPropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
}

const ChequeReturn: FC<ChequeReturnPropsType> = ({ redaxStateKey, title }) => {
  const reduxCartItemsReducerStateKey = "transactionsProduct";

  const productTransactionData = useAppSelector(
    (state) => state.cartItems[reduxCartItemsReducerStateKey]?.cartItem || []
  );

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
        components={[() => <CartItem getCartItem={productTransactionData} />]}
      />
    </div>
  );
};

export default ChequeReturn;
