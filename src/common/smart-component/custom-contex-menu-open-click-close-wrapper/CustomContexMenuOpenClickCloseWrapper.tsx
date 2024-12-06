import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./custom_contex_menu_open_click_close_wrapper.module.scss";

interface CustomContexMenuOpenClickCloseWrapperPropsType {
  dropMenuItems: FC[];
  dropPosition: "top" | "left" | "bottom" | "right";
  isPaddingAndHover?: boolean;
  isListItemFlex?: boolean;
}

const CustomContexMenuOpenClickCloseWrapper: FC<
  PropsWithChildren<CustomContexMenuOpenClickCloseWrapperPropsType>
> = ({
  children,
  dropMenuItems,
  dropPosition,
  isPaddingAndHover,
  isListItemFlex,
}) => {
  const dropdownClass = classNames({
    dropdown: true,
    dropup: dropPosition === "top",
    dropend: dropPosition === "right",
    dropstart: dropPosition === "left",
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
        <ul
          className={classNames(styles.drop_ul, {
            [styles._padding_and_hover_none_drop_ul]: isPaddingAndHover,
            [styles.list_item_flex]: isListItemFlex,
          })}
        >
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

export default CustomContexMenuOpenClickCloseWrapper;
