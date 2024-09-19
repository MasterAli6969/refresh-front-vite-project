import { FC, useCallback } from "react";
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";
import ClientSearchInput from "./shop-sidebar-components/client-search-input/ClientSearchInput";
import CartItem from "../../shop-common/cart-items/CartItems";
import CustomInput from "../../../../common/static-components/custom-input/CustomInput";
import TotalPurchase from "../../shop-common/total-purchase/TotalPurchase";
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";
import styles from "./shop_sidebar.module.scss";
import PaymentModalWindow from "./shop-sidebar-components/payment-modal-window/PaymentModalWindow";
import CustomCenterModalOpenWrapper from "../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import {
  reduxCartItemsReducerStateKey,
  selectCartItems,
  selectCartItemsTotal,
} from "../../shopCommonSelectorsMemo";

const ShopSidebar: FC = () => {
  const getCartItem = useAppSelector(selectCartItems);
  const getTotal = useAppSelector(selectCartItemsTotal);

  const openPaymentModalWindow = useCallback(() => {
    return <PaymentModalWindow redaxStateKey="PaymentModalWindow" />;
  }, []);

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_header}>
        <p>Выберите пользователя</p>
        <p>Для гостевой продажи оставьте поле пустым!</p>
      </div>

      <div className={styles.subdiv_cart_item}>
        <div className={styles.subdiv_cart_item_header}>
          <p>Проверьте заказ</p>
          <p>0 позиций</p>
        </div>
      </div>
      <div>
        <ClientSearchInput />
      </div>
      <div>
        <CartItem
          isProductRemove={true}
          redaxStateKeyProduct={reduxCartItemsReducerStateKey}
          getCartItem={getCartItem}
        />
      </div>
      <div className={styles.subdiv_footer}>
        <div>
          <p>Промокод</p>
          <CustomInput placeholder="Введите промокод" />
        </div>
        <div>
          <TotalPurchase getTotal={getTotal} />
        </div>
        <CustomCenterModalOpenWrapper
          redaxStateKey="PaymentModalWindow"
          openComponents={openPaymentModalWindow}
        >
          <CustomButton color="light">
            <p>Перейти к выбору способа оплаты</p>
          </CustomButton>
        </CustomCenterModalOpenWrapper>
      </div>
    </div>
  );
};

export default ShopSidebar;
