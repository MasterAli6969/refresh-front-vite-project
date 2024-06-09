import { FC } from "react";
import classNames from "classnames";

import { CustomButtonPropsType } from "./customButton.interface";

import styles from "./custom_button.module.scss";

const CustomButton: FC<CustomButtonPropsType> = ({ text, color }) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles._light]: color === "light",
        [styles._dark]: color === "dark",
      })}
    >
      {text}
    </button>
  );
};

export default CustomButton;
