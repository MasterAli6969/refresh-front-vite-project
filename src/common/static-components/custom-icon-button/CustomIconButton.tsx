import { FC, PropsWithChildren } from "react";

import styles from "./custom_icon_button.module.scss";

interface CustomIconButtonPropsType {
  onClick?: () => void;
}

const CustomIconButton: FC<PropsWithChildren<CustomIconButtonPropsType>> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default CustomIconButton;
