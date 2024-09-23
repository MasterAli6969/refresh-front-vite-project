import { FC, PropsWithChildren, useState } from "react";
import styles from "./custom_menu_right_open_wrapper.module.scss";

interface CustomMenuRightOpenWrapperPropsType {
  positionRight?: string; // Убедитесь, что это строка
  openMenu: FC; // Тип компонента, который будет отображаться
}

const CustomMenuRightOpenWrapper: FC<
  PropsWithChildren<CustomMenuRightOpenWrapperPropsType>
> = ({ children, openMenu: OpenMenu, positionRight }) => {
  // Значение по умолчанию для positionRight
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev); // Переключение состояния
  };
  return (
    <div onClick={handleClick} className={styles.div}>
      {children}
      {isOpen && (
        <div
          style={{ right: `${positionRight}rem` }}
          className={styles.subdiv_menu}
        >
          {OpenMenu && <OpenMenu />}
        </div>
      )}
    </div>
  );
};

export default CustomMenuRightOpenWrapper;
