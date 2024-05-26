import { FC, useState, MouseEvent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RefreshLogo from "../../assets/img/RefreshLogo.png";
import {
  leftSidebarDataType,
  leftSidebarDataTypeProps,
} from "./leftSidebarType.interface";
import { boxGlobal, logoBoxStyle, boxListStyle } from "./leftSidebarStyleSX";

const LeftSidebar: FC<leftSidebarDataTypeProps> = ({ leftSidebarData }) => {
  const [selectedIndex, setSelectedIndex] = useState<string>("1");

  const handleListItemClick = (
    _event: MouseEvent<HTMLDivElement>,
    index: string
  ) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <Box sx={boxGlobal}>
        <Box sx={logoBoxStyle}>
          <img src={RefreshLogo} />
          <Typography variant="h1" component="h1">
            REFRESH
          </Typography>
        </Box>
        <Box sx={boxListStyle}>
          <List component="nav" aria-label="main mailbox folders">
            {!leftSidebarData || leftSidebarData.length === 0 ? (
              <p>Oops, server error...</p>
            ) : (
              leftSidebarData.map((item: leftSidebarDataType) => {
                const IconComponent = item.icon;
                return (
                  <ListItemButton
                    key={item.id}
                    selected={selectedIndex === item.id}
                    onClick={(event) => handleListItemClick(event, item.id)}
                  >
                    <ListItemIcon>
                      <IconComponent />
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                );
              })
            )}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default LeftSidebar;
