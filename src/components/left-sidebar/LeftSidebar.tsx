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
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleLiClick = (itemId: number) => {
    setActiveItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  const handleMouseEnter = (itemId: number) => {
    setIsHovered(itemId);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  useEffect(() => {
    setActiveItemId(1);
  }, []);

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_logo}>
        <CustomLogo display="block" />
      </div>
      <div>
        <SearchInput />
      </div>
      <div className={styles.subdiv_title}>
        <h5>Меню</h5>
      </div>
      <ul className={styles.subdiv_list}>
        <li
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLiClick(1)}
          className={classNames({ [styles.active]: activeItemId === 1 })}
        >
          <a href="#">
            <div>
              <ControlPanelIcon
                color={
                  isHovered === 1 || activeItemId === 1 ? "#FFF" : "#949496"
                }
              />
            </div>
            <h3>Панель управления</h3>
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLiClick(2)}
          className={classNames({ [styles.active]: activeItemId === 2 })}
        >
          <a href="shop">
            <div>
              <ShopIcon
                color={`${
                  isHovered === 2 || activeItemId === 2 ? "#FFF" : "#949496"
                }`}
              />
            </div>
            <h3>Магазин</h3>
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLiClick(3)}
          className={classNames({ [styles.active]: activeItemId === 3 })}
        >
          <a href="transactions">
            <div>
              <TransactionsIcon
                color={`${
                  isHovered === 3 || activeItemId === 3 ? "#FFF" : "#949496"
                }`}
              />
            </div>
            <h3>Транзакции</h3>
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLiClick(4)}
          className={classNames({ [styles.active]: activeItemId === 4 })}
        >
          <a href="#">
            <div>
              <UsersIcon
                color={`${
                  isHovered === 4 || activeItemId === 4 ? "#FFF" : "#949496"
                }`}
              />
            </div>
            <h3>Пользователи</h3>
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLiClick(5)}
          className={classNames({ [styles.active]: activeItemId === 5 })}
        >
          <a href="#">
            <div>
              <ReservationsIcon
                color={`${
                  isHovered === 5 || activeItemId === 5 ? "#FFF" : "#949496"
                }`}
              />
            </div>
            <h3>Бронирования</h3>
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLiClick(6)}
          className={classNames({ [styles.active]: activeItemId === 6 })}
        >
          <a href="#">
            <div>
              <HistoryIcon
                color={`${
                  isHovered === 6 || activeItemId === 5 ? "#FFF" : "#949496"
                }`}
              />
            </div>
            <h3>История</h3>
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(7)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLiClick(7)}
          className={classNames({ [styles.active]: activeItemId === 7 })}
        >
          <a href="#">
            <div>
              <StatisticsIcon
                color={`${
                  isHovered === 7 || activeItemId === 7 ? "#FFF" : "#949496"
                }`}
              />
            </div>
            <h3>Статистика</h3>
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(8)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLiClick(8)}
          className={classNames({ [styles.active]: activeItemId === 8 })}
        >
          <a href="settings">
            <div>
              <SettingsIcon
                color={`${
                  isHovered === 8 || activeItemId === 8 ? "#FFF" : "#949496"
                }`}
              />
            </div>
            <h3>Настройки</h3>
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(9)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLiClick(9)}
          className={classNames({ [styles.active]: activeItemId === 9 })}
        >
          <a href="#">
            <div>
              <MessagesIcon
                color={`${
                  isHovered === 9 || activeItemId === 9 ? "#FFF" : "#949496"
                }`}
              />
            </div>
            <h3>Сообщения</h3>
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(10)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLiClick(10)}
          className={classNames({ [styles.active]: activeItemId === 10 })}
        >
          <a href="#">
            <div>
              <NotificationsIcons
                color={`${
                  isHovered === 10 || activeItemId === 10 ? "#FFF" : "#949496"
                }`}
              />
            </div>
            <h3>Уведомления</h3>
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(11)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLiClick(11)}
          className={classNames({ [styles.active]: activeItemId === 11 })}
        >
          <a href="#">
            <div>
              <KnowledgeBaseIcon
                color={`${
                  isHovered === 11 || activeItemId === 11 ? "#FFF" : "#949496"
                }`}
              />
            </div>
            <h3>База знаний</h3>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
