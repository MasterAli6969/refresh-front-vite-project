import { FC, useState } from "react";
import classNames from "classnames";
//ИКОНКИ
import GetContextMenuIcon from "../../../../assets/icons/GetContextMenuIcon.svg";
//МОДУЛИ ДЛЯ РАБОТЫ
import RoomTabsMenu from "./room-tabs-menu/RoomTabsMenu";

import styles from "./room_tabs.module.scss";

interface RoomTabsPropsType {
  id: number | string;
  activeId: number | string;
  title: string;
}

const RoomTabs: FC<RoomTabsPropsType> = ({ title, id }) => {
  const [isActiveRoomTabsMenu, setIsActiveRoomTabsMenu] =
    useState<boolean>(false);

  const handleClickMenuVisble = () => {
    setIsActiveRoomTabsMenu(!isActiveRoomTabsMenu);
  };

  return (
    <div className={classNames(styles.subdiv_rooms_tabs)}>
      <p>{title}</p>
      {id != 1 && (
        <>
          <img onClick={handleClickMenuVisble} src={GetContextMenuIcon} />
          {isActiveRoomTabsMenu && (
            <div className={styles._room_tab_menu_visible}>
              <RoomTabsMenu tabId={id} title={title} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RoomTabs;