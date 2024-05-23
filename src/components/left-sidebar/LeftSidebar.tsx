import { FC, useState, MouseEvent } from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import RefreshLogo from "../../assets/img/RefreshLogo.png";
import { boxGlobal, logoBoxStyle } from "./leftSidebarStyleSX";

const LeftSidebar: FC = () => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (
    _event: MouseEvent<HTMLDivElement>,
    index: number
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
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <InboxIcon sx={{ color: theme.palette.primary.contrastText }} />
              </ListItemIcon>
              <ListItemText primary="Панель управления ПК" />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default LeftSidebar;
