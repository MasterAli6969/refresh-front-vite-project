import { FC } from "react";
//ИКОНКИ
import ArrowChekRight from "../../../../../assets/icons/ArrowChekRight.svg";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomMenuRightOpenWrapper from "../../../../../common/smart-component/custom-menu-right-open-wrapper/CustomMenuRightOpenWrapper";
import WebAdministratorContextMenu from "./settings-context-menus/WebAdministratorContextMenu";
//СТИЛИ
import styles from "./settings_drop_menu.module.scss";
import ClientContextMenu from "./settings-context-menus/ClientContextMenu";
import ContentContextMenu from "./settings-context-menus/ContentContextMenu";
import LoyaltyContextMenu from "./settings-context-menus/LoyaltyContextMenu";
const SettingsDropMenu: FC = () => {
  return (
    <ul className={styles.ul}>
      <li>
        <CustomMenuRightOpenWrapper openMenu={WebAdministratorContextMenu}>
          <p>Веб-администратор</p>
          <img src={ArrowChekRight} />
        </CustomMenuRightOpenWrapper>
      </li>
      <li>
        <CustomMenuRightOpenWrapper openMenu={ClientContextMenu}>
          <p>Клиент</p>
          <img src={ArrowChekRight} />
        </CustomMenuRightOpenWrapper>
      </li>
      <li>
        <CustomMenuRightOpenWrapper openMenu={ContentContextMenu}>
          <p>Контент</p>
          <img src={ArrowChekRight} />
        </CustomMenuRightOpenWrapper>
      </li>
      <li>
        <CustomMenuRightOpenWrapper openMenu={LoyaltyContextMenu}>
          <p>Лояльность</p>
          <img src={ArrowChekRight} />
        </CustomMenuRightOpenWrapper>
      </li>
    </ul>
  );
};

export default SettingsDropMenu;
