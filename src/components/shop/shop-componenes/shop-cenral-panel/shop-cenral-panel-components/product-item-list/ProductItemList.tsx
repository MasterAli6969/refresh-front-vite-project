import { FC, useCallback, useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../features/redux/hooks/reduxRootHooks";

import { Grid } from "@mui/material";
import Checkmark from "../../../../../../assets/icons/Checkmark.svg";

import { SelectPropductType } from "../../../../shop.interface";
import { addNewProduct } from "../../../../../../features/redux/reducers/special-reducers/shop-reducers/cartItemsReducer";
import { testProductData } from "../../../data";

import styles from "./prosuct_item_list.module.scss";

export interface productDataType {
  id: number;
  img: string;
  name: string;
  price: number;
  type: string;
}

export interface ProductItemListPropsType {
  productRenderType: string;
  searchInputValue: string;
}

const ProductItemList: FC<ProductItemListPropsType> = ({
  searchInputValue,
  productRenderType,
}) => {
  const reduxCartItemsReducerStateKey = "shopProduct";

  const [productsData, setProductsData] = useState<productDataType[]>([]);

  const [filteredProducts, setFilteredProducts] = useState<productDataType[]>(
    []
  );

  const [selectPropduct, setSelectPropduct] =
    useState<SelectPropductType | null>(null);

  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(
    (state) => state.cartItems[reduxCartItemsReducerStateKey]?.cartItem || []
  );

  const handleGetTestData = useCallback(() => {
    setProductsData(testProductData);
  }, []);

  const handleFilterProducts = useCallback(() => {
    const filteredByType = productsData.filter((product) => {
      return productRenderType === "Товары"
        ? product.type === "product"
        : productRenderType === "Тарифы"
        ? product.type === "tariff"
        : true;
    });

    const filtered = filteredByType.filter((product) =>
      product.name.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchInputValue, productsData, productRenderType]);

  const handleSelectPropduct = (id: number) => {
    const product = productsData.find((p) => p.id === id);
    const pieceCount = 1;
    if (product) {
      const { id, name, price, type } = product;
      setSelectPropduct({ id, name, price, pieceCount, type });
    }
  };

  const handleAddSelectProductCart = useCallback(() => {
    if (selectPropduct !== null) {
      const productExists = cartItems.find(
        (item) => item.id === selectPropduct.id
      );
      if (!productExists) {
        dispatch(
          addNewProduct({
            key: reduxCartItemsReducerStateKey,
            product: selectPropduct,
          })
        );
      }
    }
  }, [selectPropduct]);

  useEffect(() => {
    handleGetTestData();
  }, [handleGetTestData]);

  useEffect(() => {
    if (productsData.length > 0) {
      handleFilterProducts();
    }
  }, [handleFilterProducts]);

  useEffect(() => {
    handleAddSelectProductCart();
  }, [handleAddSelectProductCart]);

  return (
    <Grid container className={styles.div}>
      {filteredProducts.length === 0 ? (
        <h1>Ожидание...</h1>
      ) : (
        filteredProducts.map((item: productDataType) => {
          return (
            <Grid
              onClick={() => handleSelectPropduct(item.id)}
              key={item.id}
              item
              md={1}
              className={styles.subdiv}
            >
              <img src={item.img} />
              <div className={styles.subdiv_hover}>
                <img src={Checkmark} />
              </div>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </Grid>
          );
        })
      )}
    </Grid>
  );
};

export default ProductItemList;
