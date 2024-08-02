import { FC, useState, useCallback, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../features/redux/hooks/reduxRootHooks";
import { getNewId } from "../../features/utils/arrayUtils";
import {
  addNewTab,
  nameTab,
  removeTab,
  RoomTabObjectTypes,
} from "../../features/redux/reducers/special-reducers/control-panel-reducers/roomTabsEditReducer";
import AddNewRoomsButton from "./control-panel-components/add-new-rooms-button/AddNewRoomsButton";
import LayoutEdingButton from "./control-panel-components/layout-eding-button/LayoutEdingButton";
import RoomTabs from "./control-panel-components/room-tabs/RoomTabs";
import ControlPanelPcIcons from "./control-panel-components/control-panel-pc-icons/ControlPanelPcIcons";
import { setDynamicInput } from "../../features/redux/reducers/common-reducers/inputDynamicReduser";
import { setSaveDynamicNumber } from "../../features/redux/reducers/common-reducers/saveNumberDynamicReduser";
import { resetOnClickDynamic } from "../../features/redux/reducers/common-reducers/onClickDynamicReduser";
import { pcIconData } from "./testData";
import styles from "./control_panel.module.scss";

const ControlPanel: FC = () => {
  const [activePanelId, setActivePanelId] = useState<number | string>("");
  const dispatch = useAppDispatch();

  const roomTabs = useAppSelector((state) => state.roomTabsEdit.roomTabs);

  const isGetModalId = useAppSelector(
    (state) => state.saveDynamicNumber.dynamicNumberStates[activePanelId]
  );

  const isClickAdd = useAppSelector(
    (state) =>
      state.onClickDynamic.onClickStates["addNewRoomsButtonModalWindow"]
  );

  const isDelete = useAppSelector(
    (state) =>
      state.onClickDynamic.onClickStates[`deleteRoomTab${isGetModalId}`]
  );

  const newTabsName = useAppSelector(
    (state) =>
      state.inputDynamic.inputStatesDynamic["addNewRoomsButtonModalWindow"]
  );

  const remaneTabName = useAppSelector(
    (state) =>
      state.inputDynamic.inputStatesDynamic[`renameRoomTabs${activePanelId}`]
  );

  const isReneme = useAppSelector(
    (state) =>
      state.onClickDynamic.onClickStates[`renameRoomTabs${activePanelId}`]
  );

  const handleRoomTabClick = useCallback((id: number | string) => {
    setActivePanelId(id);
  }, []);

  const handleAddNewTab = useCallback(() => {
    if (isClickAdd) {
      const newId = getNewId(roomTabs);
      dispatch(addNewTab({ id: newId, name: newTabsName }));
      dispatch(resetOnClickDynamic());
      dispatch(
        setDynamicInput({ key: "addNewRoomsButtonModalWindow", value: "" })
      );
      dispatch(setSaveDynamicNumber({ key: newId, value: newId }));
      setActivePanelId(newId);
    }
  }, [isClickAdd, newTabsName, dispatch, roomTabs]);

  const handleDeleteTab = useCallback(() => {
    if (isDelete) {
      dispatch(removeTab(isGetModalId));
      if (activePanelId === isGetModalId) {
        const remainingTabs = roomTabs.filter((tab) => tab.id !== isGetModalId);
        setActivePanelId(remainingTabs.length ? remainingTabs[0].id : "");
      }
    }
  }, [isDelete, isGetModalId, dispatch, activePanelId, roomTabs]);

  const handleRenameTab = useCallback(() => {
    if (isReneme) {
      dispatch(nameTab({ id: activePanelId, newName: remaneTabName }));
    }
  }, [isReneme, activePanelId, remaneTabName, dispatch]);

  useEffect(() => {
    if (roomTabs.length > 0 && !activePanelId) {
      setActivePanelId(roomTabs[0].id);
    }
  }, [roomTabs, activePanelId]);

  useEffect(() => {
    handleAddNewTab();
  }, [handleAddNewTab]);

  useEffect(() => {
    handleDeleteTab();
  }, [handleDeleteTab]);

  useEffect(() => {
    handleRenameTab();
  }, [handleRenameTab]);

  const renderActivePanel = () => {
    const activeTab = roomTabs.find((tab) => tab.id === activePanelId);
    const shouldShowIcons = activeTab?.id === 1;
    return activeTab ? (
      <ControlPanelPcIcons
        pcIconData={shouldShowIcons ? pcIconData : undefined}
      />
    ) : null;
  };

  return (
    <div className={styles.div}>
      <h2>Панель управления ПК</h2>
      <div className={styles.subdiv}>
        <div className={styles.rooms_tabs_container}>
          {roomTabs.map((item: RoomTabObjectTypes) => (
            <div key={item.id} onClick={() => handleRoomTabClick(item.id)}>
              <RoomTabs id={item.id} title={item.name} />
            </div>
          ))}
        </div>
        <div className={styles.subdiv_rooms_control}>
          <LayoutEdingButton />
          <AddNewRoomsButton />
        </div>
      </div>
      <div className={styles.pc_panel_container}>{renderActivePanel()}</div>
    </div>
  );
};

export default ControlPanel;
