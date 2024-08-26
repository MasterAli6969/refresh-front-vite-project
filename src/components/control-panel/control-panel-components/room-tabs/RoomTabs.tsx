import { FC } from "react";

import classNames from "classnames";

import CustomPcIcon from "../../../../common/static-components/custom-pc-icon/CustomPcIcon";
import RoomTabsMenu from "./room-tabs-menu/RoomTabsMenu";

import styles from "./room_tabs.module.scss";

interface RoomTabsPropsType {
  id: number | string;
  title: string;
}

const RoomTabs: FC<RoomTabsPropsType> = ({ title, id }) => {
  return (
    <div className={classNames(styles.subdiv_rooms_tabs)}>
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
      {id != 1 && (
        <div className={styles._room_tab_menu_visible}>
          <RoomTabsMenu tabId={id} title={title} />
        </div>
      )}
    </div>
  );
};

export default RoomTabs;
