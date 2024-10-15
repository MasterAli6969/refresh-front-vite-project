import { FC, useState } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import classNames from "classnames";
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";
//ИКОНКИ
import GetContextMenuIcon from "../../../../assets/icons-svg-components/common-tabs-dynamic-icon/GetContextMenuIcon";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomContexMenuOpenUniversalWrapper from "../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
import CustomCenterModalOpenWrapper from "../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import RenameRoomTabsModalWindow from "./room-tabs-modal-windows/rename-room-tabs-modal-window/RenameRoomTabsModalWindow";
import DeleteRoomTabsModalWindow from "./room-tabs-modal-windows/delete-room-tabs-modal-window/DeleteRoomTabsModalWindow";
//СТИЛИ
import styles from "./room_tabs.module.scss";

interface RoomTabsPropsType {
  id: number | string;
  title: string;
  color: string;
}

const RoomTabs: FC<RoomTabsPropsType> = ({ id, title, color }) => {
  const isGetModalId = useAppSelector(
    (state) => state.saveDynamicNumber.dynamicNumberStates[id]
  );

  const [isHovered, setIsHovered] = useState<number | string>("");

  const handleMouseEnter = (itemId: number | string) => {
    setIsHovered(itemId);
  };

  const handleMouseLeave = () => {
    setIsHovered("");
  };

  return (
    <div className={classNames(styles.subdiv_rooms_tab)}>
      <h4 style={{ color: `${color}` }}>{title}</h4>
      {id != 1 && (
        <CustomContexMenuOpenUniversalWrapper
          dropPosition="bottom"
          dropMenuItems={[
            () => (
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
                <h4>Переименовать</h4>
              </CustomCenterModalOpenWrapper>
            ),
            () => (
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
                <h4>Удалить</h4>
              </CustomCenterModalOpenWrapper>
            ),
          ]}
        >
          <div
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
          >
            <GetContextMenuIcon color={isHovered === id ? "#FFF" : "#949496"} />
          </div>
        </CustomContexMenuOpenUniversalWrapper>
      )}
    </div>
  );
};

export default RoomTabs;
