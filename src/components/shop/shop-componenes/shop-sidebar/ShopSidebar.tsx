import { FC } from "react";

import SearchIcon from "../../../../assets/icons/SearchIcon.svg";
import CloseIcon from "../../../../assets/icons-svg-components/CloseIcon";
import CardItemNone from "../../../../assets/icons/CardItemNone.svg";

import CustomInput from "../../../../common/static-components/custom-input/CustomInput";
import TotalPurchase from "../../shop-common/total-purchase/TotalPurchase";

import styles from "./shop_sidebar.module.scss";
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";

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
        <div className={styles.subdiv_cart_item_positios}>
          <div className={styles.subdiv_cart_item_positios_none}>
            <div>
              <p>Корзина пуста</p>
              <img src={CardItemNone} />
            </div>
          </div>
          <div className={styles.subdiv_cart_item_positios_have}></div>
        </div>
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
