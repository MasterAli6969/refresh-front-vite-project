import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./custom_toggle_button.module.scss";

export interface CustomToggleButtonPropsType {
  active: boolean;
  onClick?: () => void;
}

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
