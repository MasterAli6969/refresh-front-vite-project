import { FC } from "react";
import classNames from "classnames";

import styles from "./custom_button.module.scss";

export interface CustomButtonPropsType {
  color: "light" | "dark" | "warning";
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const CustomButton: FC<CustomButtonPropsType> = ({
  text,
  color,
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
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
