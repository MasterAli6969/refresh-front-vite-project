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
import RoomTabs from "./control-panel-components/room-tabs/RoomTabs";
import ControlPanelPcIcons from "./control-panel-components/control-panel-pc-icons/ControlPanelPcIcons";
import { setDynamicInput } from "../../features/redux/reducers/common-reducers/inputDynamicReduser";
import { setSaveDynamicNumber } from "../../features/redux/reducers/common-reducers/saveNumberDynamicReduser";
import ControlPanelHeader from "./control-panel-components/control-panel-header/ControlPanelHeader";

import { resetOnClickDynamic } from "../../features/redux/reducers/common-reducers/onClickDynamicReduser";
import { addNewPcIcons } from "../../features/redux/reducers/special-reducers/control-panel-reducers/pcIconEditReducer";
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

  const newId = getNewId(roomTabs);

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

  const pcIconsNewRooms = useAppSelector((state) => state.pcIconEdit.pcIcons);

  const handleDeafaultRender = useCallback(() => {
    if (roomTabs.length > 0 && !activePanelId) {
      setActivePanelId(roomTabs[0].id);
    }
    dispatch(addNewPcIcons({ key: `pcIconsData${1}`, icons: pcIconData }));
  }, [dispatch, roomTabs, activePanelId]);

  const handleRoomTabClick = useCallback((id: number | string) => {
    setActivePanelId(id);
  }, []);

  const handleAddNewTab = useCallback(() => {
    if (isClickAdd) {
      dispatch(addNewTab({ id: newId, name: newTabsName }));
      dispatch(addNewPcIcons({ key: `pcIconsData${newId}`, icons: [] }));
      dispatch(resetOnClickDynamic());
      dispatch(
        setDynamicInput({ key: "addNewRoomsButtonModalWindow", value: "" })
      );
      dispatch(setSaveDynamicNumber({ key: newId, value: newId }));
      setActivePanelId(newId);
    }
  }, [isClickAdd, newTabsName, dispatch, newId]);

  const handleDeleteTab = useCallback(() => {
    if (isDelete) {
      dispatch(removeTab(isGetModalId));
      if (activePanelId === isGetModalId) {
        const remainingTabs = roomTabs.filter((tab) => tab.id !== isGetModalId);
        setActivePanelId(remainingTabs.length ? remainingTabs[0].id : "");
      }
    }
  }, [isDelete, isGetModalId, dispatch, activePanelId]);

  const handleRenameTab = useCallback(() => {
    if (isReneme) {
      dispatch(nameTab({ id: activePanelId, newName: remaneTabName }));
    }
  }, [isReneme, activePanelId, remaneTabName, dispatch]);

  useEffect(() => {
    handleDeafaultRender();
  }, [handleDeafaultRender]);

  useEffect(() => {
    if (isClickAdd) {
      handleAddNewTab();
    }
  }, [handleAddNewTab, isClickAdd]);

  useEffect(() => {
    if (isDelete) {
      handleDeleteTab();
    }
  }, [handleDeleteTab, isDelete]);

  useEffect(() => {
    if (isReneme) {
      handleRenameTab();
    }
  }, [handleRenameTab, isReneme]);

  const renderActivePanel = useCallback(() => {
    const pcIcons =
      activePanelId === 1
        ? pcIconsNewRooms[`pcIconsData${1}`]
        : pcIconsNewRooms[`pcIconsData${activePanelId}`];
    return activePanelId ? (
      <ControlPanelPcIcons pcIconData={pcIcons || []} />
    ) : null;
  }, [activePanelId, pcIconsNewRooms]);

  return (
    <div className={styles.div}>
      <h2>Панель управления ПК</h2>
      <div className={styles.subdiv}>
        <ControlPanelHeader />
        <div className={styles.rooms_tabs_container}>
          {roomTabs.map((item: RoomTabObjectTypes) => (
            <div key={item.id} onClick={() => handleRoomTabClick(item.id)}>
              <RoomTabs
                activeId={activePanelId}
                id={item.id}
                title={item.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.pc_panel_container}>{renderActivePanel()}</div>
    </div>
  );
};

export default ControlPanel;
