import { FC } from "react";

import ClientSearchInput from "./shop-sidebar-components/client-search-input/ClientSearchInput";
import CartItem from "../../shop-common/cart-items/CartItems";
import CustomInput from "../../../../common/static-components/custom-input/CustomInput";
import TotalPurchase from "../../shop-common/total-purchase/TotalPurchase";
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";

import styles from "./shop_sidebar.module.scss";
import PaymentModalWindow from "./shop-sidebar-components/payment-modal-window/PaymentModalWindow";
import CustomCenterModalOpenWrapper from "../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CustomToggleButton from "../../../../common/static-components/custom-toggle-button/CustomToggleButton";

const ShopSidebar: FC = () => {
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
        <CartItem />
      </div>
      <div className={styles.subdiv_footer}>
        <div>
          <p>Промокод</p>
          <CustomInput placeholder="Введите промокод" />
        </div>
        <div>
          <TotalPurchase />
        </div>
        <CustomCenterModalOpenWrapper
          redaxStateKey="PaymentModalWindow"
          openComponents={() => (
            <PaymentModalWindow redaxStateKey="PaymentModalWindow" />
          )}
        >
          <CustomButton color="light" text="Перейти к выбору способа оплаты" />
        </CustomCenterModalOpenWrapper>
      </div>
    </div>
  );
};

export default ShopSidebar;