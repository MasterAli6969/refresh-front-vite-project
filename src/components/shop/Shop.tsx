import { FC } from "react";

import { Grid } from "@mui/material";

import ShopCenralPanel from "./shop-componenes/shop-cenral-panel/ShopCenralPanel";
import ShopSidebar from "./shop-componenes/shop-sidebar/ShopSidebar";

import styles from "./shop.module.scss";

const Shop: FC = () => {
  return (
    <Grid container className={styles.div}>
      <Grid item md={9}>
        <ShopCenralPanel />
      </Grid>
      <Grid item md={3}>
        <ShopSidebar />
      </Grid>
    </Grid>
  );
};

export default Shop;
