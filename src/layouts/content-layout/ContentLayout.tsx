import { FC, PropsWithChildren } from "react";

import { Grid } from "@mui/material";

import LeftSidebar from "../../components/left-sidebar/LeftSidebar";
import Header from "../../components/header/Header";

import styles from "./content_layout.module.scss";

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container>
      <Grid item md={2} sx={{ margin: "0", padding: "0" }}>
        <LeftSidebar />
      </Grid>
      <Grid item md={10} sx={{ margin: "0", padding: "0" }}>
        <div className={styles.def_div}>
          <Header />
          {children}
        </div>
      </Grid>
    </Grid>
  );
};

export default ContentLayout;
