import { FC, useMemo, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../../../features/redux/hooks/reduxRootHooks";

import CardItemNone from "../../../../../../assets/icons/CardItemNone.svg";
import DeleteTrashIcon from "../../../../../../assets/icons/DeleteTrashIcon.svg";

import {
  cartItemsTotal,
  CartItemType,
  removeProduct,
  updateProductQuantity,
} from "../../../../../../features/redux/reducers/special-reducers/shop-reducers/cartItemsReducer";

import styles from "./cart_items.module.scss";

const CartItem: FC = () => {
  const getCartItem = useAppSelector((state) => state.cartItems.cartItem);

  const dispatch = useDispatch();

  const cartItemRender = useMemo(() => getCartItem, [getCartItem]);

  const handleUpdateProductQuantity = useCallback(
    (
      id: number,
      defaultPrice: number,
      currentPrice: number,
      pieceСount: number,
      isIncrement: boolean
    ) => {
      const quantityPrice = isIncrement
        ? defaultPrice + currentPrice
        : defaultPrice < currentPrice
        ? currentPrice - defaultPrice
        : defaultPrice;

      const quantityPieceСount = isIncrement ? pieceСount + 1 : pieceСount - 1;
      dispatch(
        updateProductQuantity({
          id: id,
          newPrice: quantityPrice,
          newPieceСount: quantityPieceСount > 0 ? quantityPieceСount : 1,
        })
      );
    },
    [dispatch]
  );

  const totalPrice = useMemo(() => {
    return cartItemRender.reduce((total, item) => total + item.price, 0);
  }, [cartItemRender]);

  const calculateTotalPriceByType = (type: string) => {
    return cartItemRender.reduce(
      (total, item) => (item.type === type ? total + item.price : total),
      0
    );
  };

  const totalProductsPrice = useMemo(
    () => calculateTotalPriceByType("product"),
    [cartItemRender]
  );
  const totalTarifesPrice = useMemo(
    () => calculateTotalPriceByType("tariff"),
    [cartItemRender]
  );

  const typeProductsCount = cartItemRender.filter(
    (item) => item.type === "product"
  ).length;

  const typeTarifesCount = cartItemRender.filter(
    (item) => item.type === "tariff"
  ).length;

  useEffect(() => {
    dispatch(
      cartItemsTotal({
        totalPrice: totalPrice,
        totalProductsPrice: totalProductsPrice,
        totalTarifesPrice: totalTarifesPrice,
        typeProductsCount: typeProductsCount,
        typeTarifesCount: typeTarifesCount,
      })
    );
  }, [
    dispatch,
    totalPrice,
    totalProductsPrice,
    totalTarifesPrice,
    typeProductsCount,
    typeTarifesCount,
  ]);

  const handleRemoveProduct = useCallback(
    (id: number) => {
      dispatch(removeProduct(id));
    },
    [dispatch]
  );

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_cart_item_positios}>
        {cartItemRender.length === 0 ? (
          <div className={styles.subdiv_cart_item_positios_none}>
            <div>
              <p>Корзина пуста</p>
              <img src={CardItemNone} />
            </div>
          </div>
        ) : (
          cartItemRender.map((item: CartItemType) => {
            return (
              <div className={styles.subdiv} key={item.id}>
                <div className={styles.subdiv_product}>
                  <p>{item.name}</p>
                  <p>₽ {item.originPrice}</p>
                </div>
                <div className={styles.subdiv_total}>
                  <p>₽ {item.price}</p>
                  <div>
                    <button onClick={() => handleRemoveProduct(item.id)}>
                      <img src={DeleteTrashIcon} />
                    </button>
                    <div>
                      <button
                        onClick={() =>
                          handleUpdateProductQuantity(
                            item.id,
                            item.originPrice,
                            item.price,
                            item.pieceСount,
                            false
                          )
                        }
                      >
                        -
                      </button>
                      <p>{item.pieceСount}</p>
                      <button
                        onClick={() =>
                          handleUpdateProductQuantity(
                            item.id,
                            item.originPrice,
                            item.price,
                            item.pieceСount,
                            true
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CartItem;
