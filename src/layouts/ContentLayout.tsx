import { FC } from "react";

import { Grid } from "@mui/material";

import LeftSidebar from "../components/left-sidebar/LeftSidebar";
import Header from "../components/header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Grid container>
      <Grid item md={2} sx={{ margin: "0", padding: "0" }}>
        <LeftSidebar />
      </Grid>
      <Grid item md={10} sx={{ margin: "0", padding: "0" }}>
        <Header />
        {children}
      </Grid>
    </Grid>
  );
};

export default GeneralLayout;
