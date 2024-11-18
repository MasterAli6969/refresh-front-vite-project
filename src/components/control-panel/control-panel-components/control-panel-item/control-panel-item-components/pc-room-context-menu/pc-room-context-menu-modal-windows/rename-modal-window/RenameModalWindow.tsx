import { FC, useState } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
import { useAppDispatch } from "../../../../../../../../features/redux/hooks/reduxRootHooks";
import { RedaxStateProps } from "../../../../../../../../commonTypes.interface";
import { renameRoom } from "../../../../../../../../features/redux/reducers/special-reducers/control-panel-reducers/pc-rooms-reducers/pcRoomsEditReducer";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CutomModalWindowUniversal from "../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomInput from "../../../../../../../../common/static-components/inputs/custom-input/CustomInput";
import ChooseColourRoom from "../../../../../../../../common/special-componet/choose-colour-room/ChooseColourRoom";
import CustomDualButtonYesNo from "../../../../../../../../common/static-components/buttons/custom-dual-button-yes-no/CustomDualButtonYesNo";
import {
  resetModals,
  setToggleDynamic,
} from "../../../../../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
import { pcRoomsSaveColor } from "../../../../../../../../features/redux/reducers/special-reducers/control-panel-reducers/pc-rooms-reducers/pcRoomsSaveColorReducer";

export interface RenameModalWindowPropsType extends RedaxStateProps {
  pcRoomId: number;
  title: string;
  specialText?: string;
}

const RenameModalWindow: FC<RenameModalWindowPropsType> = ({
  redaxStateKey,
  pcRoomId,
  title,
  specialText,
}) => {
  const dispatch = useAppDispatch();
  const [localInputValue, setLocalInputValue] = useState<string>("");
  const [chooseColor, setChooseColor] = useState<string>("");

  const handleInputChange = (value: string) => {
    setLocalInputValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //ОТПРАВКА ДАННЫХ ДЛЯ ПЕРЕИМЕНОВАНИЯ ОКНА
    dispatch(
      renameRoom({
        id: pcRoomId,
        newName: localInputValue,
        newColor: chooseColor,
      })
    );
    // СБРОС СОСТОЯНИЯ ОТКРЫТИЯ ОКНА
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
      <CustomInput
        label="Название комнаты"
        placeholder="Введите новое название комнаты"
        value={localInputValue || ""}
        onChange={handleInputChange}
      />
      <ChooseColourRoom
        chooseColor={chooseColor}
        setChooseColor={setChooseColor}
      />
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Изменить"
        isSubmit={true}
      />
    </CutomModalWindowUniversal>
  );
};

export default RenameModalWindow;
