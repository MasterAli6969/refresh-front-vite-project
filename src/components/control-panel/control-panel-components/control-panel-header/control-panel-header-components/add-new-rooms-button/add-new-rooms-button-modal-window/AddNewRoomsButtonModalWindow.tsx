import { FC, useState } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { RedaxStateProps } from "../../../../../../../commonTypes.interface";
import { getNewId } from "../../../../../../../features/utils/arrayUtils";
import { addNewRoom } from "../../../../../../../features/redux/reducers/special-reducers/control-panel-reducers/pc-rooms-reducers/pcRoomsEditReducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../features/redux/hooks/reduxRootHooks";
import {
  resetModals,
  setToggleDynamic,
} from "../../../../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CutomModalWindowUniversal from "../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomInput from "../../../../../../../common/static-components/custom-input/CustomInput";
import CustomDualButtonYesNo from "../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import ChooseColourRoom from "../../../../../../../common/special-componet/choose-colour-room/ChooseColourRoom";
import { addNewPcIcons } from "../../../../../../../features/redux/reducers/special-reducers/control-panel-reducers/pc-icon-reducers/pcIconEditReducer";

export interface AddNewRoomsButtonModalWindowPropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
}

const AddNewRoomsButtonModalWindow: FC<
  AddNewRoomsButtonModalWindowPropsType
> = ({ redaxStateKey, title, specialText }) => {
  //ИНИЦИАЛИЗАЦИЯ ЛОКАЛЬНЫХ СОСТОЯНИЙ ДЛЯ СБОРА ДАННЫХ С ФОРМЫ
  const [localInputValue, setLocalInputValue] = useState<string>("");
  const [chooseColor, setChooseColor] = useState<string>("");
  //ИНИЦИАЛИЗАЦИЯ РЕДАКС ДИСПАТЧА
  const dispatch = useAppDispatch();
  //ВЫЗОВ МАССИВА КОМНАТ ИЗ ХРАНИЛИЩА РЕДАКС ДЛЯ СОЗДАНИЯ УНИКАЛЬНЫХ АЙДИ
  const pcRooms = useAppSelector((state) => state.pcRoomsEdit.pcRooms);
  //СОЗДАНИЕ УНИКАЛЬНОГО АЙДИ ДЛЯ КОМНАТЫ НА ОСНОВЕ МАССИВА КОМНАТ
  const newRoomId = getNewId(pcRooms);
  //СБОР ДАННЫХ ИЗ ФОРМЫ ИМЕНИ КОМНАТЫ
  const handleInputChange = (value: string) => {
    setLocalInputValue(value);
  };
  // ОТПРАВКА ДАННЫХ ПОСЛЕ ОТРБОТКИ САБМИТА ФОРМЫ
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //ОТПРАВКА ДАННЫХ ОБЪЕКТОМ В МАССИВ КОММНАТ ПОД ЭКШЕНУ СРЕЗА
    dispatch(
      addNewRoom({ id: newRoomId, name: localInputValue, color: chooseColor })
    );
    //ИНИЦИАЛИЗАЦИЯ ОТПРАВКА ПУСТОГО МАССИВА ИКОНОК ПУ ПО УНИКАЛЬНОМУ АЙДИ ДЛЯ КАЖДОЙ ОТДЕЛЬНОЙ КОМНАТЫ
    dispatch(addNewPcIcons({ key: newRoomId, icons: [] }));
    //ЗАКРЫТИЕ И СБРОС МОДАЛЬНОГО ОКНА
    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: false,
      }),
      resetModals()
    );
    console.log("pcRooms pcRooms pcRooms", pcRooms);
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
        buttonRightText="Сохранить"
        isSubmit={true}
      />
    </CutomModalWindowUniversal>
  );
};

export default AddNewRoomsButtonModalWindow;
