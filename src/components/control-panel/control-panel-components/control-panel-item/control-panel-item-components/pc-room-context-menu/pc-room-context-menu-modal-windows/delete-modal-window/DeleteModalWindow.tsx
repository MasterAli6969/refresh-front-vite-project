import { FC, useState } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
import { useAppDispatch } from "../../../../../../../../features/redux/hooks/reduxRootHooks";
import { RedaxStateProps } from "../../../../../../../../commonTypes.interface";
import { removeRoom } from "../../../../../../../../features/redux/reducers/special-reducers/pc-rooms-reducers/pcRoomsEditReducer";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CutomModalWindowUniversal from "../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomDualButtonYesNo from "../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import {
  resetModals,
  setToggleDynamic,
} from "../../../../../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";

export interface DeleteModalWindowPropsType extends RedaxStateProps {
  pcRoomId: number;
  title: string;
  specialText?: string;
}

const DeleteModalWindow: FC<DeleteModalWindowPropsType> = ({
  redaxStateKey,
  pcRoomId,
  title,
  specialText,
}) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(removeRoom(pcRoomId));
    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: false,
      }),
      resetModals()
    );
  };

  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title={title}
      specialText={specialText}
      onSubmit={handleSubmit}
    >
      <div>
        <h4>Вы действительно хотите удалить комнату?</h4>
      </div>
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Удалить"
        isSubmit={true}
      />
    </CutomModalWindowUniversal>
  );
};

export default DeleteModalWindow;
