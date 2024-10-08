import { FC } from "react";
//ИКОНКИ
import MiniSpinnerIcon from "../../../assets/icons/MiniSpinnerIcon.svg";
//СТИЛИ
import styles from "./custom_mini_spinner.module.scss";

const CustomMiniSpinner: FC = () => {
  return <img className={styles.lodaing_spinner} src={MiniSpinnerIcon} />;
};

export default CustomMiniSpinner;
