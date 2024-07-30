import { FC, useState, useEffect, useRef } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../features/redux/hooks/reduxRootHooks";
import AddNewRoomsButton from "./control-panel-components/add-new-rooms-button/AddNewRoomsButton";
import LayoutEdingButton from "./control-panel-components/layout-eding-button/LayoutEdingButton";
import RoomTabs from "./control-panel-components/room-tabs/RoomTabs";
import ControlPanelPcIcons from "./control-panel-components/control-panel-pc-icons/ControlPanelPcIcons";
import { pcIconData } from "./testData";
import styles from "./control_panel.module.scss";
import { setDynamicInput } from "../../features/redux/reducers/common-reducers/inputDynamicReduser";
import {
  DynamicNumberStatesType,
  setSaveDynamicNumber,
} from "../../features/redux/reducers/common-reducers/saveNumberDynamicReduser";

import {
  resetOnClickDynamic,
  setOnClickDynamic,
} from "../../features/redux/reducers/common-reducers/onClickDynamicReduser";
import { setSelectorData } from "../../features/redux/reducers/common-reducers/selectorDataReduscer";

interface RoomTabObjectItem {
  id: number;
  name: string;
  renderRoomTab: (name: string, id: number) => JSX.Element;
  renderPcPanel: () => JSX.Element;
}

const ControlPanel: FC = () => {
  //состояние айди таба который выбрали в данный момент
  const [activePanelId, setActivePanelId] = useState<number | string>("");

  const [roomTabs, setRoomTabs] = useState<RoomTabObjectItem[]>([
    {
      id: 1,
      name: "Все",
      renderRoomTab: (name, id) => <RoomTabs id={id} title={name} />,
      renderPcPanel: () => <ControlPanelPcIcons pcIconData={pcIconData} />,
    },
  ]);
  const dispatch = useAppDispatch();

  //вызов имени из модального окна новой вкладки
  const newTabsName = useAppSelector(
    (state) =>
      state.inputDynamic.inputStatesDynamic["addNewRoomsButtonModalWindow"]
  );
  //значение события кнопки добавления новой вкладки
  const isClickAdd = useAppSelector(
    (state) =>
      state.onClickDynamic.onClickStates["addNewRoomsButtonModalWindow"]
  );

  //значение свежей айди новых объектов
  const isGetModalId = useAppSelector(
    (state) =>
      state.saveDynamicNumber.roomTabsMenuDeleteModalWindow[
        activePanelId as keyof DynamicNumberStatesType["roomTabsMenuDeleteModalWindow"]
      ]
  );

  //значение события кнопки удаления конкретной вкладки
  const isDelete = useAppSelector(
    (state) => state.onClickDynamic.onClickStates[isGetModalId]
  );

  useEffect(() => {
    if (roomTabs.length > 0) {
      setActivePanelId(roomTabs[0].id);
    }
  }, [roomTabs]);

  useEffect(() => {
    if (isClickAdd) {
      const newId =
        roomTabs.length > 0
          ? Math.max(...roomTabs.map((tab) => tab.id)) + 1
          : 1;
      const newRoomTab = {
        id: newId,
        name: newTabsName,
        renderRoomTab: (name: string, id: number) => (
          <RoomTabs id={id} title={name} />
        ),
        renderPcPanel: () => <ControlPanelPcIcons />,
      };
      setRoomTabs((prevTabs) => [...prevTabs, newRoomTab]);

      dispatch(
        setOnClickDynamic({
          key: "addNewRoomsButtonModalWindow",
          value: false,
        }),
        resetOnClickDynamic()
      );
      dispatch(
        setDynamicInput({
          key: "addNewRoomsButtonModalWindow",
          value: "",
        })
      );
      dispatch(
        setSaveDynamicNumber({
          key: newId,
          value: newId,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClickAdd, newTabsName, dispatch]);

  useEffect(() => {
    if (isDelete) {
      const updatedTabs = roomTabs.filter((tab) => tab.id !== isGetModalId);
      setRoomTabs(updatedTabs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDelete, isGetModalId, dispatch]);

  const handleRoomTabClick = (id: number) => {
    setActivePanelId(id);
  };

  const renderActivePanel = () => {
    const activeTab = roomTabs.find((tab) => tab.id === activePanelId);
    return activeTab ? activeTab.renderPcPanel() : null;
  };

  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.div}>
      <h2>Панель управления ПК</h2>
      <div className={styles.subdiv}>
        <div className={styles.rooms_tabs_container}>
          {roomTabs.map((item) => (
            <div key={item.id} onClick={() => handleRoomTabClick(item.id)}>
              {item.renderRoomTab(item.name, item.id)}
            </div>
          ))}
        </div>
        <div className={styles.subdiv_rooms_control}>
          <LayoutEdingButton />
          <AddNewRoomsButton />
        </div>
      </div>
      <div ref={panelRef} className={styles.pc_panel_container}>
        {renderActivePanel()}
      </div>
    </div>
  );
};

export default ControlPanel;
