import { FC } from "react";
//ИКОНКИ
import SpinnerIcon from "../../../assets/icons/SpinnerIcon.svg";
//СТИЛИ
import styles from "./custom_spinner.module.scss";
import { Box, CircularProgress } from "@mui/material";

const CustomSpinner: FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
  // <img className={styles.lodaing_spinner} src={SpinnerIcon} />;
};

export default CustomSpinner;
