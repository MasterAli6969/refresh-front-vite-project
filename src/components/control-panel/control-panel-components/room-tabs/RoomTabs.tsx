import { FC, useState } from "react";
import classNames from "classnames";

import CustomPcIcon from "../../../../common/static-components/custom-pc-icon/CustomPcIcon";
import RoomTabsMenu from "./room-tabs-menu/RoomTabsMenu";

import styles from "./room_tabs.module.scss";

interface RoomTabsPropsType {
  id: number;
  title: string;
}

const RoomTabs: FC<RoomTabsPropsType> = ({ title, id }) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveTabId(id);
  };
  return (
    <div
      className={classNames(styles.subdiv_rooms_tabs)}
      onClick={() => handleClick(id)}
    >
      <p>{title}</p>
      <ul>
        <li>
          <CustomPcIcon number={9} status="No Active" />
        </li>
        <li>
          <CustomPcIcon number={9} status="Active" />
        </li>
        <li>
          <CustomPcIcon number={9} status="Included" />
        </li>
        <li>
          <CustomPcIcon number={9} status="Servicing" />
        </li>
      </ul>
      <div className={styles._room_tab_menu_visible}>
        <RoomTabsMenu />
      </div>
    </div>
  );
};

export default RoomTabs;
