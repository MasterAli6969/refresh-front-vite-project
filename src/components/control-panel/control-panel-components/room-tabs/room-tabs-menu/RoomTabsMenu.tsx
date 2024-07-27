// RoomTabsMenu.tsx
import { FC } from "react";
import { useAppSelector } from "../../../../../features/redux/hooks/reduxRootHooks";
import { DynamicNumberStatesType } from "../../../../../features/redux/reducers/common-reducers/dynamic-component-reducers/saveNumberDynamicReduser";

import EditFill from "../../../../../assets/icons/EditFill.svg";
import CustomCenterModalOpenWrapper from "../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CutomModalWindowType1 from "../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-type1/CutomModalWindowType1";
import CutomModalWindowType2 from "../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-type2/CutomModalWindowType2";

import styles from "./room_tabs_menu.module.scss";

interface RoomTabsMenu {
  title: string;
  tabId: string | number;
}

const RoomTabsMenu: FC<RoomTabsMenu> = ({ title, tabId }) => {
  const isGetModalId = useAppSelector(
    (state) =>
      state.saveDynamicNumber.roomTabsMenuDeleteModalWindow[
        tabId as keyof DynamicNumberStatesType["roomTabsMenuDeleteModalWindow"]
      ]
  );

  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <CustomCenterModalOpenWrapper
          type="single"
          redaxStateKey={`roomTabsMenuRenameModalWindow`}
          openComponents={() => (
            <CutomModalWindowType1
              redaxStateKey={`roomTabsMenuRenameModalWindow`}
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
          type="dynamic"
          redaxStateKey={isGetModalId}
          openComponents={() => (
            <CutomModalWindowType2
              redaxStateKey={isGetModalId}
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
