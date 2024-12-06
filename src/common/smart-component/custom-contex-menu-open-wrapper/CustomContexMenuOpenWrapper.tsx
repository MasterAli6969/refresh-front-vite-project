import { FC, PropsWithChildren, useState } from "react";
import styles from "./custom_contex_menu_open_wrapper.module.scss";

interface CustomContexMenuOpenWrapperPropsType {
  contextMenuItems?: FC[];
  isPaddingAndHover?: boolean;
  isListItemFlex?: boolean;
}

const CustomContexMenuOpenWrapper: FC<
  PropsWithChildren<CustomContexMenuOpenWrapperPropsType>
> = ({
  children,
  contextMenuItems = [() => <div>CustomContexMenuOpenWrapper</div>],
}) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  return (
    <div className={styles.div}>
      <div onClick={() => setMenuVisible(!menuVisible)}>{children}</div>
      {menuVisible && (
        <div className={styles.subdiv}>
          <ul>
            {contextMenuItems.map((MenuItemComponent, index) => (
              <li key={index}>
                <MenuItemComponent />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomContexMenuOpenWrapper;
