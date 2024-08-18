import { FC } from "react";

import SearchIcon from "../../../../assets/icons/SearchIcon.svg";
import CloseIcon from "../../../../assets/icons-svg-components/CloseIcon";

import CustomInput from "../../../../common/static-components/custom-input/CustomInput";
import CartItem from "./shop-sidebar-components/cart-items/CartItems";
import TotalPurchase from "../../shop-common/total-purchase/TotalPurchase";
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";

import styles from "./shop_sidebar.module.scss";

const ShopSidebar: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_header}>
        <p>Выберите пользователя</p>
        <p>Для гостевой продажи оставьте поле пустым!</p>
      </div>
      <div className={styles.subdiv_search}>
        <img src={SearchIcon} />
        <input type="text" />
        <span>{<CloseIcon />}</span>
      </div>
      <div className={styles.subdiv_cart_item}>
        <div className={styles.subdiv_cart_item_header}>
          <p>Проверьте заказ</p>
          <p>0 позиций</p>
        </div>
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
        <CustomButton color="light" text="Перейти к выбору способа оплаты" />
      </div>
    </div>
  );
};

export default ShopSidebar;
