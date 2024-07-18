import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import { CustomToggleButtonPropsType } from "./customToggleButton.interface";
import styles from "./custom_toggle_button.module.scss";

const CustomToggleButton: FC<
  PropsWithChildren<CustomToggleButtonPropsType>
> = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, {
        [styles._active]: active,
      })}
      disabled={active} // disable if already active
    >
      {children}
    </button>
  );
};

export default CustomToggleButton;
