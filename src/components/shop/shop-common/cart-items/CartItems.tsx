import { FC, useMemo, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import CardItemNone from "../../../../assets/icons/CardItemNone.svg";
import DeleteTrashIcon from "../../../../assets/icons/DeleteTrashIcon.svg";

import {
  updateCartItemsTotal,
  CartItemType,
  removeProduct,
  updateProductQuantity,
} from "../../../../features/redux/reducers/special-reducers/shop-reducers/cartItemsReducer";

import styles from "./cart_items.module.scss";

interface CartItemPropsType {
  redaxStateKeyProduct: string;
  isProductRemove: boolean;
  getCartItem: CartItemType[];
}

const CartItem: FC<CartItemPropsType> = ({
  getCartItem,
  redaxStateKeyProduct,
  isProductRemove,
}) => {
  const dispatch = useDispatch();

  const cartItemRender = useMemo(() => getCartItem, [getCartItem]);

  useEffect(() => {
    console.log("ПРИХОДЯЩИЙ МАССИВ", cartItemRender);
    console.log(
      "АЙДИ ВСЕХ ТОВАРОВ",
      cartItemRender.map((item) => item.pieceCount)
    );
  }, [cartItemRender]);

  const handleUpdateProductQuantity = useCallback(
    (
      id: number,
      defaultPrice: number,
      currentPrice: number,
      pieceCount: number,
      isIncrement: boolean
    ) => {
      const quantityPrice = isIncrement
        ? defaultPrice + currentPrice
        : defaultPrice < currentPrice
        ? currentPrice - defaultPrice
        : defaultPrice;

      const quantityPieceCount = isIncrement ? pieceCount + 1 : pieceCount - 1;

      dispatch(
        updateProductQuantity({
          key: redaxStateKeyProduct,
          id: id,
          newPrice: quantityPrice,
          newPieceCount: quantityPieceCount > 0 ? quantityPieceCount : 1,
        })
      );
    },
    [dispatch, redaxStateKeyProduct]
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

  const handleUpdateCartItemsTotal = useCallback(() => {
    dispatch(
      updateCartItemsTotal({
        key: redaxStateKeyProduct,
        totals: {
          totalPrice: totalPrice,
          totalProductsPrice: totalProductsPrice,
          totalTarifesPrice: totalTarifesPrice,
          typeProductsCount: typeProductsCount,
          typeTarifesCount: typeTarifesCount,
        },
      })
    );
  }, [
    dispatch,
    redaxStateKeyProduct,
    totalPrice,
    totalProductsPrice,
    totalTarifesPrice,
    typeProductsCount,
    typeTarifesCount,
  ]);

  useEffect(() => {
    handleUpdateCartItemsTotal();
  }, [handleUpdateCartItemsTotal]);

  const handleRemoveProduct = useCallback(
    (id: number) => {
      dispatch(removeProduct({ key: redaxStateKeyProduct, productId: id }));
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
                    {isProductRemove ? (
                      <button onClick={() => handleRemoveProduct(item.id)}>
                        <img src={DeleteTrashIcon} />
                      </button>
                    ) : (
                      ""
                    )}

                    <div>
                      <button
                        onClick={() =>
                          handleUpdateProductQuantity(
                            item.id,
                            item.originPrice,
                            item.price,
                            item.pieceCount,
                            false
                          )
                        }
                      >
                        -
                      </button>
                      <p>{item.pieceCount}</p>
                      <button
                        onClick={() =>
                          handleUpdateProductQuantity(
                            item.id,
                            item.originPrice,
                            item.price,
                            item.pieceCount,
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
