import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#141718",
      contrastText: "#fff",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h3: {
          fontSize: "1.3rem",
          lineHeight: "1.62rem",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#0A0C0C",
          color: "#fff",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#fff",
          "&:hover": {
            color: "#3E90F0",
          },
        },
      },
    },
  },
});

export default theme;
