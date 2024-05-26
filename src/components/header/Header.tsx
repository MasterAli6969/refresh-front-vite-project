import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchComponent from "./header-components/search-component/SearchComponent";
import UserMenu from "./header-components/user-menu/UserMenu";

const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <SearchComponent />
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
