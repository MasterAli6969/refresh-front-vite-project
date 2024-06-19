import { FC } from "react";
import classNames from "classnames";

import { CustomButtonPropsType } from "./customButton.interface";

import styles from "./custom_button.module.scss";

const CustomButton: FC<CustomButtonPropsType> = ({ text, color, type }) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles._light]: color === "light",
        [styles._dark]: color === "dark",
        [styles._warning]: color === "warning",
      })}
      type={type ? type : "button"}
    >
      {text}
    </button>
  );
};

export default CustomButton;
