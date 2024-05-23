import { FC } from "react";
import { Grid } from "@mui/material";
import LeftSidebar from "../components/LeftSidebar";
import Header from "../components/Header";
import CentralHeader from "../components/CentralHeader";
import RightSidebar from "../components/RightSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Grid container>
      <Grid item md={2}>
        <LeftSidebar />
      </Grid>
      <Grid item md={10}>
        <Header />
        <Grid container>
          <Grid item md={12}>
            <CentralHeader />
          </Grid>
          <Grid item md={9}>
            {children}
          </Grid>
          <Grid item md={3}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GeneralLayout;
