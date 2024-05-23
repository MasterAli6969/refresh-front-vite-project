import { makeStyles } from "@mui/material";

export const useStyles = makeStyles({
  root: {
    background: "black",
    borderRadius: 8,
    border: 0,
    color: "white",

    
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    "&:hover": {
      backgroundColor: "white",
    },
  },
});
