import { FC, useCallback, useEffect } from "react";
//ИКОНКИ
import GetContextMenuIcon from "../../../../../../assets/icons-svg-components/common-tabs-dynamic-icon/GetContextMenuIcon";
//МОДУЛИ ДЛЯ РАБОТЫ
import { useAppDispatch } from "../../../../../../features/redux/hooks/reduxRootHooks";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomContexMenuOpenUniversalWrapper from "../../../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
import CustomCenterModalOpenWrapper from "../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import DeleteModalWindow from "./pc-room-context-menu-modal-windows/delete-modal-window/DeleteModalWindow";
import { pcRoomsSaveColor } from "../../../../../../features/redux/reducers/special-reducers/control-panel-reducers/pc-rooms-reducers/pcRoomsSaveColorReducer";
import RenameModalWindow from "./pc-room-context-menu-modal-windows/rename-modal-window/RenameModalWindow";

interface PcRoomContextMenuPropsType {
  pcRoomId: number;
  roomName: string;
  color: string;
}

const PcRoomContextMenu: FC<PcRoomContextMenuPropsType> = ({
  pcRoomId,
  roomName,
  color,
}) => {
  const dispatch = useAppDispatch();
  //ПЕРЕДАЧА ЦВЕТА ВЫБРАННОЙ КОМНАТЫ С ОТКРЫТЫМ МЕНЮ
  const handleFixNameColor = useCallback(() => {
    dispatch(pcRoomsSaveColor(color));
  }, [dispatch, color]);

  useEffect(() => {
    handleFixNameColor();
  }, [handleFixNameColor]);

  return (
    <CustomContexMenuOpenUniversalWrapper
      dropPosition="right"
      dropMenuItems={[
        () => (
          <CustomCenterModalOpenWrapper
            redaxStateKey={`RenameModalWindow${pcRoomId}`}
            openComponents={() => (
              <RenameModalWindow
                pcRoomId={pcRoomId}
                redaxStateKey={`RenameModalWindow${pcRoomId}`}
                title="Переименовать комнату"
                specialText={roomName}
              />
            )}
          >
            Переименовать
          </CustomCenterModalOpenWrapper>
        ),
        () => (
          <CustomCenterModalOpenWrapper
            redaxStateKey={`DeleteModalWindow${pcRoomId}`}
            openComponents={() => (
              <DeleteModalWindow
                pcRoomId={pcRoomId}
                redaxStateKey={`DeleteModalWindow${pcRoomId}`}
                title="Удаление комнаты"
                specialText={roomName}
              />
            )}
          >
            Удалить
          </CustomCenterModalOpenWrapper>
        ),
      ]}
    >
      <GetContextMenuIcon color="#fff" />
    </CustomContexMenuOpenUniversalWrapper>
  );
};

export default PcRoomContextMenu;
