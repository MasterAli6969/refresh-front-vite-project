import { FC, useCallback, useEffect, useState } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";
import { testMapPcEndpoint } from "../../testData";

//МОДУЛИ ДЛЯ РЕНДЕРА
import PcRoomContextMenu from "./control-panel-item-components/pc-room-context-menu/PcRoomContextMenu";
import PcIcons from "./control-panel-item-components/pc-icons/PcIcons";
//СТИЛИ
import styles from "./control_panel_item.module.scss";
import classNames from "classnames";

const ControlPanelItem: FC = () => {
  //ПЕРВИЧНЫЕ ИСХОДНЫЕ ДАННЫЕ КОМНАТ
  const pcRooms = useAppSelector((state) => state.pcRoomsEdit.pcRooms);
  //ЛОКАЛЬНОЕ СОСТОЯНИЕ ПЕРЕКЛЮЧЕНИЯ АКТИВНЫХ КОМНАТ
  const [activeRoom, setActiveRoom] = useState<number>(1);
  //ВЫЗОВ СЕЛЕКТОРА С МАССИВОМ ДАННЫХ ПО АЙДИ КОМНАТ ДЛЯ РЕНДЕРА ИКОНОК ПК
  const pcRoomsPcIcpns = useAppSelector(
    (state) => state.pcIconEdit.pcIcons[activeRoom]
  );

  const handleClickActiveRoom = (id: number) => {
    setActiveRoom(id);
  };

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_rooms}>
        {pcRooms.map((item) => {
          return (
            <div key={item.id}>
              <div
                className={classNames(styles.room, {
                  [styles._active_room]: activeRoom === item.id,
                })}
                onClick={() => handleClickActiveRoom(item.id)}
              >
                <h4 style={{ color: `${item.color}` }}>{item.name}</h4>
                {item.id !== 1 && (
                  <PcRoomContextMenu
                    pcRoomId={item.id}
                    roomName={item.name}
                    color={item.color}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.pc_icons_container}>
        <PcIcons
          pcIconData={activeRoom === 1 ? testMapPcEndpoint : pcRoomsPcIcpns}
        />
      </div>
    </div>
  );
};

export default ControlPanelItem;
