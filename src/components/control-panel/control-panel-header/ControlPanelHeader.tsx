import { FC } from "react";

import CustomPcIcon from "../../../common/static-components/custom-pc-icon/CustomPcIcon";
import RoomTabsMenu from "./control-panel-header-components/room-tabs-menu/RoomTabsMenu";

import styles from "./contro_panel_header.module.scss";

const ControlPanelHeader: FC = () => {
  return (
    <div className={styles.div}>
      <h2>Панель управления ПК</h2>
      <div className={styles.subdiv}>
        <div className={styles.subdiv_rooms_tabs}>
          <p>Все</p>
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
        <div className={styles.subdiv_rooms_control}>
          <button>ЗАГ</button>
          <button>ЗАГ</button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanelHeader;
