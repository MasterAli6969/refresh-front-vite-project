import { FC, useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";

import SearchIcon from "../../../../assets/icons/SearchIcon.svg";
import CloseIcon from "../../../../assets/icons-svg-components/CloseIcon";
import CardItemNone from "../../../../assets/icons/CardItemNone.svg";

import CustomInput from "../../../../common/static-components/custom-input/CustomInput";
import TotalPurchase from "../../shop-common/total-purchase/TotalPurchase";
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";

import { selectPropductType } from "../../shop.interface";

import styles from "./shop_sidebar.module.scss";

const ShopSidebar: FC = () => {
  const getCartItem = useAppSelector((state) => state.cartItems.cartItem);
  const [cartItemRender, setCartItemRender] = useState<selectPropductType[]>(
    []
  );

  const handleGetCaetItemData = useCallback(() => {
    if (getCartItem && getCartItem !== cartItemRender) {
      setCartItemRender(getCartItem);
      console.log("МАССИВ ДОБАВЛЕННЫХ ПРОДУКТОВ", getCartItem);
    }
  }, [getCartItem, cartItemRender]);

  useEffect(() => {
    handleGetCaetItemData();
  }, [handleGetCaetItemData]);

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
          <p>{cartItemRender.length} позиций</p>
        </div>
        <div className={styles.subdiv_cart_item_positios}>
          {cartItemRender.length === 0 ? (
            <div className={styles.subdiv_cart_item_positios_none}>
              <div>
                <p>Корзина пуста</p>
                <img src={CardItemNone} />
              </div>
            </div>
          ) : (
            <div className={styles.subdiv_cart_item_positios_have}>
              {cartItemRender.map((item: selectPropductType) => {
                return (
                  <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                );
              })}
            </div>
          )}
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
