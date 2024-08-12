import { FC, useCallback, useEffect, useState } from "react";

import { Grid } from "@mui/material";

import { testProductData } from "../../../data";

import styles from "./prosuct_item_list.module.scss";

export interface productData {
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
  const [productsData, setProductsData] = useState<productData[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<productData[]>([]);

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

  useEffect(() => {
    handleGetTestData();
  }, [handleGetTestData]);

  useEffect(() => {
    handleFilterSearchProduct();
  }, [handleFilterSearchProduct]);

  return (
    <Grid container className={styles.div}>
      {filteredProducts.length === 0 ? (
        <h1>ДАННЫЕ НЕ ПОСТУПАЮТ</h1>
      ) : (
        filteredProducts.map((item: productData) => {
          return (
            <Grid key={item.id} item md={1} className={styles.subdiv}>
              <img src={item.img} />
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
