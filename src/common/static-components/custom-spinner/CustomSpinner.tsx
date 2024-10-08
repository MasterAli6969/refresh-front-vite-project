import { FC } from "react";
//ИКОНКИ
import SpinnerIcon from "../../../assets/icons/SpinnerIcon.svg";
//СТИЛИ
import styles from "./custom_spinner.module.scss";

const CustomSpinner: FC = () => {
  return <img className={styles.lodaing_spinner} src={SpinnerIcon} />;
};

export default CustomSpinner;
