import { FC, useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../../../../../features/redux/hooks/reduxRootHooks";

import { Grid } from "@mui/material";
import Checkmark from "../../../../../../assets/icons/Checkmark.svg";

import { testProductData } from "../../../data";
import { selectPropductType } from "../../../../shop.interface";

import styles from "./prosuct_item_list.module.scss";
import { addNewProduct } from "../../../../../../features/redux/reducers/special-reducers/shop-reducers/cartItemsReducer";

export interface productDataType {
  id: number;
  img: string;
  name: string;
  price: string;
}

export interface ProsuctItemListPropsType {
  searchInputValue: string;
}

const ProsuctItemList: FC<ProsuctItemListPropsType> = ({
  searchInputValue,
}) => {
  const [productsData, setProductsData] = useState<productDataType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<productDataType[]>(
    []
  );

  const dispatch = useAppDispatch();

  const [selectPropduct, setSelectPropduct] =
    useState<selectPropductType | null>(null);

  const handleGetTestData = useCallback(() => {
    setProductsData(testProductData);
    setFilteredProducts(testProductData);
  }, []);

  const handleFilterSearchProduct = useCallback(() => {
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchInputValue, productsData]);

  const handleSelectPropduct = (id: number) => {
    const product = productsData.find((p) => p.id === id);
    if (product) {
      const { id, name, price } = product;
      setSelectPropduct({ id, name, price });
    }
  };

  const handleAddSelectProductCart = useCallback(() => {
    if (selectPropduct !== null) {
      dispatch(addNewProduct(selectPropduct));
    }
  }, [dispatch, selectPropduct]);

  useEffect(() => {
    handleGetTestData();
  }, [handleGetTestData]);

  useEffect(() => {
    handleFilterSearchProduct();
  }, [handleFilterSearchProduct]);

  useEffect(() => {
    handleAddSelectProductCart();
  }, [handleAddSelectProductCart]);

  return (
    <Grid container className={styles.div}>
      {filteredProducts.length === 0 ? (
        <h1>ДАННЫЕ НЕ ПОСТУПАЮТ</h1>
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

export default ProsuctItemList;
