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
        h1: {
          fontSize: "1.5rem",
          lineHeight: "1.8125rem",
        },
        h2: {
          fontSize: "0.9rem",
          lineHeight: "1.125rem",
        },
        h3: {
          fontSize: "0.8rem",
          lineHeight: "1rem",
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
          borderRadius: "8px",
          padding: "1rem 0.5rem 1rem 0.5rem",
          marginBottom: "0.5rem",
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
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "30px",
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
