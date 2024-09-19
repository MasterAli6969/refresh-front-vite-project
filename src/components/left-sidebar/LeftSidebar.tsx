// 1. Импорты из библиотек React и других внешних библиотек
import { FC, useState, useEffect } from "react";
import classNames from "classnames";
//ИКОНКИ
import ControlPanelIcon from "../../assets/icons-svg-components/left-sidebar-icons/ControlPanelIcon";
import ShopIcon from "../../assets/icons-svg-components/left-sidebar-icons/ShopIcon";
import TransactionsIcon from "../../assets/icons-svg-components/left-sidebar-icons/TransactionsIcon";
import UsersIcon from "../../assets/icons-svg-components/left-sidebar-icons/UsersIcon";
import ReservationsIcon from "../../assets/icons-svg-components/left-sidebar-icons/ReservationsIcon";
import HistoryIcon from "../../assets/icons-svg-components/left-sidebar-icons/HistoryIcon";
import StatisticsIcon from "../../assets/icons-svg-components/left-sidebar-icons/StatisticsIcon";
import SettingsIcon from "../../assets/icons-svg-components/left-sidebar-icons/SettingsIcon";
import MessagesIcon from "../../assets/icons-svg-components/left-sidebar-icons/MessagesIcon";
import NotificationsIcons from "../../assets/icons-svg-components/left-sidebar-icons/NotificationsIcons";
import KnowledgeBaseIcon from "../../assets/icons-svg-components/left-sidebar-icons/KnowledgeBaseIcon";
import CustomLogo from "../../common/static-components/custom-logo/CustomLogo";
//МОДУЛИ ДЛЯ РАБОТЫ
import { ListType } from "../../commonTypes.interface";
import { PropsIcon } from "../../assets/icons-svg-components/props.interface";
import { leftSidebarData } from "./data";
//МОДУЛИ ДЛЯ РЕНДЕРА
import SearchInput from "./left-sidebar-components/search-input/SearchInput";
import DropListWrapper from "./left-sidebar-components/drop-list-wrapper/DropListWrapper";
import SettingsDropMenu from "./left-sidebar-components/drop-and-context-menus/settings-drop-menu/SettingsDropMenu";
//СТИЛИ
import styles from "./left_sidebar.module.scss";

export interface leftSidebarDataType {
  id: number;
  url: string;
  icon: FC<PropsIcon>;
  text: string;
  dropMenuItem?: ListType[];
}

const LeftSidebar: FC = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleLiClick = (itemId: number) => {
    setActiveItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  useEffect(() => {
    if (leftSidebarData.length > 0 && activeItemId === null) {
      setActiveItemId(leftSidebarData[0].id);
    }
  }, [activeItemId]);

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_logo}>
        <CustomLogo display="block" />
      </div>
      <div>
        <SearchInput />
      </div>
      <ul className={styles.subdiv_list}>
        <li className={classNames(styles.main_list)}>
          <a href="#">
            <div>
              <ControlPanelIcon color="#fff" />
            </div>
            <h4>Панель управления</h4>
          </a>
        </li>
        <li className={classNames(styles.main_list)}>
          <a href="#">
            <div>
              <ShopIcon color="#fff" />
            </div>
            <h4>Магазин</h4>
          </a>
        </li>
        <li className={classNames(styles.main_list)}>
          <a href="#">
            <div>
              <TransactionsIcon color="#fff" />
            </div>
            <h4>Транзакции</h4>
          </a>
        </li>
        <li className={classNames(styles.main_list)}>
          <a href="#">
            <div>
              <UsersIcon color="#fff" />
            </div>
            <h4>Пользователи</h4>
          </a>
        </li>
        <li className={classNames(styles.main_list)}>
          <a href="#">
            <div>
              <ReservationsIcon color="#fff" />
            </div>
            <h4>Бронирования</h4>
          </a>
        </li>
        <li className={classNames(styles.main_list)}>
          <DropListWrapper id={1} dropMenuComponents={SettingsDropMenu}>
            <div>
              <HistoryIcon color="#fff" />
            </div>
            <h4>История</h4>
          </DropListWrapper>
        </li>
        <li className={classNames(styles.main_list)}>
          <a href="#">
            <div>
              <StatisticsIcon color="#fff" />
            </div>
            <h4>Статистика</h4>
          </a>
        </li>
        <li className={classNames(styles.main_list)}>
          <DropListWrapper id={2} dropMenuComponents={SettingsDropMenu}>
            <div>
              <SettingsIcon color="#fff" />
            </div>
            <h4>Настройки</h4>
          </DropListWrapper>
        </li>
        <li className={classNames(styles.main_list)}>
          <a href="#">
            <div>
              <MessagesIcon color="#fff" />
            </div>
            <h4>Сообщения</h4>
          </a>
        </li>
        <li className={classNames(styles.main_list)}>
          <a href="#">
            <div>
              <NotificationsIcons color="#fff" />
            </div>
            <h4>Уведомления</h4>
          </a>
        </li>
        <li className={classNames(styles.main_list)}>
          <a href="#">
            <div>
              <KnowledgeBaseIcon color="#fff" />
            </div>
            <h4>База знаний</h4>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
