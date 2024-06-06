import { FC } from "react";

import { CustomButtonPropsType } from "./customButton.interface";

import styles from "./custom_button.module.scss";

const CustomButton: FC<CustomButtonPropsType> = ({ text }) => {
  return <button className={styles.button}>Text</button>;
};

export default CustomButton;
