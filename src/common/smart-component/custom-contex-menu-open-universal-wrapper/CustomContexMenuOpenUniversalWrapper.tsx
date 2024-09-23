import { FC, PropsWithChildren } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import classNames from "classnames";
//СТИЛИ
import styles from "./custom_contex_menu_open_universal_wrapper.module.scss";

interface CustomContexMenuOpenUniversalWrapperPropsType {
  dropMenuItems: FC[];
  dropPosition: "top" | "left" | "bottom" | "right";
}

const CustomContexMenuOpenUniversalWrapper: FC<
  PropsWithChildren<CustomContexMenuOpenUniversalWrapperPropsType>
> = ({ children, dropMenuItems, dropPosition }) => {
  // Условное классифицирование для переключения между позициями меню
  const dropdownClass = classNames({
    dropdown: true,
    dropup: dropPosition === "top",
    dropend: dropPosition === "right",
    dropstart: dropPosition === "left",
    // если "bottom", то класс не нужен, так как это поведение по умолчанию
  });

  return (
    <div className={dropdownClass}>
      <div
        className={styles.dropdown_button}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {children}
      </div>
      <div className="dropdown-menu">
        <ul className={classNames(styles.drop_ul)}>
          {dropMenuItems.map((MenuItemComponent, index) => (
            <li key={index}>
              <MenuItemComponent />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomContexMenuOpenUniversalWrapper;
