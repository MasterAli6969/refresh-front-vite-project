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
import { setClick } from "../../features/redux/reducers/common-reducers/onClickReduser";
import { setInput } from "../../features/redux/reducers/common-reducers/inputReduser";
import { setSaveNumber } from "../../features/redux/reducers/common-reducers/saveNumberReduser";

interface RoomTabObjectItem {
  id: number;
  name: string;
  renderRoomTab: (name: string, id: number) => JSX.Element;
  renderPcPanel: () => JSX.Element;
}

const ControlPanel: FC = () => {
  const [roomTabs, setRoomTabs] = useState<RoomTabObjectItem[]>([
    {
      id: 1,
      name: "Room 1",
      renderRoomTab: (name, id) => (
        <RoomTabs
          redaxStateKey={`roomTabsMenuDeleteModalWindow${id}`}
          id={id}
          title={name}
        />
      ),
      renderPcPanel: () => <ControlPanelPcIcons pcIconData={pcIconData} />,
    },
  ]);
  const dispatch = useAppDispatch();

  const [activePanelId, setActivePanelId] = useState<number | null>(null);
  //вызов имени из модального окна новой вкладки
  const newTabsName = useAppSelector(
    (state) => state.input["addNewRoomsButtonModalWindow"]
  );
  //значение события кнопки добавления новой вкладки
  const isClickAdd = useAppSelector(
    (state) => state.click["addNewRoomsButtonModalWindow"]
  );

  // получение текушего id удаляемой вкладки
  const isGetIdModalDelete = useAppSelector(
    (state) => state.number["roomTabsMenuDeleteModalWindow"]
  );

  //значение события кнопки удаления конкретной вкладки
  const isClickDelete = useAppSelector(
    (state) => state.click[`roomTabsMenuDeleteModalWindow${isGetIdModalDelete}`]
  );

  useEffect(() => {
    if (roomTabs.length > 0) {
      setActivePanelId(roomTabs[0].id);
    }
  }, [roomTabs]);

  useEffect(() => {
    //обработка событий для добавления новой вкладки в массив
    if (isClickAdd) {
      const newId =
        roomTabs.length > 0
          ? Math.max(...roomTabs.map((tab) => tab.id)) + 1
          : 1;
      const newRoomTab = {
        id: newId,
        name: newTabsName,
        renderRoomTab: (name: string, id: number) => (
          <RoomTabs
            redaxStateKey={`roomTabsMenuDeleteModalWindow${newId}`}
            id={id}
            title={name}
          />
        ),
        renderPcPanel: () => <ControlPanelPcIcons />,
      };
      setRoomTabs((prevTabs) => [...prevTabs, newRoomTab]);
      dispatch(
        setClick({
          key: "addNewRoomsButtonModalWindow",
          value: false,
        })
      );
      dispatch(
        setInput({
          key: "addNewRoomsButtonModalWindow",
          value: "",
        })
      );

      dispatch(
        setSaveNumber({
          key: "roomTabsMenuDeleteModalWindow",
          value: newId,
        })
      );
    }
  }, [isClickAdd, newTabsName, roomTabs, dispatch]);

  useEffect(() => {
    //обработка событий для удаления вкладки из массива
    if (isClickDelete) {
      const updatedTabs = roomTabs.filter(
        (tab) => tab.id !== isGetIdModalDelete
      );
      setRoomTabs(updatedTabs);
      dispatch(
        setClick({
          key: `roomTabsMenuDeleteModalWindow${isGetIdModalDelete}`,
          value: false,
        })
      );
      dispatch(
        setSaveNumber({
          key: "roomTabsMenuDeleteModalWindow",
          value: null,
        })
      );
    }
  }, [isClickDelete, isGetIdModalDelete, roomTabs, dispatch]);

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
