import { FC } from "react";
import classNames from "classnames";

import styles from "./custom_button.module.scss";

export interface CustomButtonPropsType {
  text?: string;
  icon?: string;
  iconSize?: string;
  color: "light" | "dark" | "warning" | "transparent";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const CustomButton: FC<CustomButtonPropsType> = ({
  text,
  icon,
  iconSize,
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
        [styles._transparent]: color === "transparent",
      })}
      type={type ? type : "button"}
    >
      {icon && <img style={{ width: `${iconSize}rem` }} src={icon} />}
      {text && <p>{text}</p>}
    </button>
  );
};

export default CustomButton;
