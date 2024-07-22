// RoomTabsMenu.tsx
import { FC } from "react";

import EditFill from "../../../../../assets/icons/EditFill.svg";
import CustomCenterModalOpenWrapper from "../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CutomModalWindowType1 from "../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-type1/CutomModalWindowType1";
import CutomModalWindowType2 from "../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-type2/CutomModalWindowType2";

import styles from "./room_tabs_menu.module.scss";

const RoomTabsMenu: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <CustomCenterModalOpenWrapper
          redaxStateKey="roomTabsMenuRenameModalWindow"
          openComponents={() => (
            <CutomModalWindowType1
              redaxStateKey="roomTabsMenuRenameModalWindow"
              title="GOG1"
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
          redaxStateKey="roomTabsMenuDeleteModalWindow"
          openComponents={() => (
            <CutomModalWindowType2
              redaxStateKey="roomTabsMenuDeleteModalWindow"
              title="Удаление комнаты"
              specialText="Gaming"
              descritpion="Вы уверены что хотите удалить данную комнату? "
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
