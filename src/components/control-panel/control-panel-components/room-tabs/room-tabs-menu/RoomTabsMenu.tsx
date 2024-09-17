// RoomTabsMenu.tsx
import { FC } from "react";
import { useAppSelector } from "../../../../../features/redux/hooks/reduxRootHooks";

import EditFill from "../../../../../assets/icons/EditFill.svg";
import CustomCenterModalOpenWrapper from "../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";

import styles from "./room_tabs_menu.module.scss";
import RenameRoomTabsModalWindow from "./room-tabs-menu-modal-winodws/rename-room-tabs-modal-window/RenameRoomTabsModalWindow";
import DeleteRoomTabsModalWindow from "./room-tabs-menu-modal-winodws/delete-room-tabs-modal-window/DeleteRoomTabsModalWindow";

interface RoomTabsMenu {
  title: string;
  tabId: string | number;
}

const RoomTabsMenu: FC<RoomTabsMenu> = ({ title, tabId }) => {
  const isGetModalId = useAppSelector(
    (state) => state.saveDynamicNumber.dynamicNumberStates[tabId]
  );

  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <CustomCenterModalOpenWrapper
          redaxStateKey={`renameRoomTabs${isGetModalId}`}
          openComponents={() => (
            <RenameRoomTabsModalWindow
              redaxStateKey={`renameRoomTabs${isGetModalId}`}
              title={title}
              specialText="Standart"
            />
          )}
        >
          <img src={EditFill} alt="Edit icon" />
          <p>Переименовать</p>
        </CustomCenterModalOpenWrapper>
      </div>
      <div className={styles.subdiv}>
        <CustomCenterModalOpenWrapper
          redaxStateKey={`deleteRoomTab${isGetModalId}`}
          openComponents={() => (
            <DeleteRoomTabsModalWindow
              redaxStateKey={`deleteRoomTab${isGetModalId}`}
              title="Удаление комнаты"
              specialText={title}
              descritpion="Вы уверены что хотите удалить данную комнату?"
              rightButton="Удалить"
            />
          )}
        >
          <img src={EditFill} alt="Edit icon" />
          <p>Удалить</p>
        </CustomCenterModalOpenWrapper>
      </div>
    </div>
  );
};

export default RoomTabsMenu;
