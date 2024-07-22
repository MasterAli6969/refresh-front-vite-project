import { FC, useState, useRef } from "react";
import AddNewRoomsButton from "./control-panel-header-components/add-new-rooms-button/AddNewRoomsButton";
import LayoutEdingButton from "./control-panel-header-components/layout-eding-button/LayoutEdingButton";
import RoomTabs from "./control-panel-header-components/room-tabs/RoomTabs";
import ControlPanelPcIcons from "../control-panel-pc-icons/ControlPanelPcIcons";

import { pcIconData } from "../control-panel-pc-icons/data";

import styles from "./contro_panel_header.module.scss";

interface RoomTabObjectItem {
  id: number;
  name: string;
  roomTabs: (name: string) => JSX.Element;
  pcPanel: () => JSX.Element;
}

const ControlPanelHeader: FC = () => {
  const [roomTabs, setRoomTabs] = useState<RoomTabObjectItem[]>([
    {
      id: 1,
      name: "Room 1",
      roomTabs: (name) => <RoomTabs title={name} />,
      pcPanel: () => <ControlPanelPcIcons pcIconData={pcIconData} />,
    },
    {
      id: 2,
      name: "Room 2",
      roomTabs: (name) => <RoomTabs title={name} />,
      pcPanel: () => <ControlPanelPcIcons />,
    },
  ]);
  const [activePanelId, setActivePanelId] = useState<number | null>(null);

  const handleRoomTabClick = (id: number) => {
    setActivePanelId(id);
  };

  const renderActivePanel = () => {
    const activeTab = roomTabs.find((tab) => tab.id === activePanelId);
    return activeTab ? activeTab.pcPanel() : null;
  };

  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.div}>
      <h2>Панель управления ПК</h2>
      <div className={styles.subdiv}>
        <div className={styles.rooms_tabs_container}>
          {roomTabs.map((item) => (
            <div key={item.id} onClick={() => handleRoomTabClick(item.id)}>
              {item.roomTabs(item.name)}
            </div>
          ))}
        </div>
        <div className={styles.subdiv_rooms_control}>
          <AddNewRoomsButton />
          <LayoutEdingButton />
        </div>
      </div>
      <div ref={panelRef} className={styles.pc_panel_container}>
        {renderActivePanel()}
      </div>
    </div>
  );
};

export default ControlPanelHeader;
