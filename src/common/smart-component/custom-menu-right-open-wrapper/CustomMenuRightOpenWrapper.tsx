import { FC, PropsWithChildren, useState } from "react";

import styles from "./custom_menu_right_open_wrapper.module.scss";

interface CustomMenuRightOpenWrapperPropsType {
  openMenu: FC;
}

const CustomMenuRightOpenWrapper: FC<
  PropsWithChildren<CustomMenuRightOpenWrapperPropsType>
> = ({ children, openMenu: OpenMenu }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={handleClick} className={styles.div}>
      {children}
      {isOpen && (
        <div className={styles.subdiv_menu}>{OpenMenu && <OpenMenu />}</div>
      )}
    </div>
  );
};

export default CustomMenuRightOpenWrapper;
