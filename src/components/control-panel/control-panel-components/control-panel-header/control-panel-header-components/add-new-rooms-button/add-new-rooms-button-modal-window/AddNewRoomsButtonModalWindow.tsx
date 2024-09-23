import { FC, useState } from "react";
import { RedaxStateProps } from "../../../../../../../commonTypes.interface";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../features/redux/hooks/reduxRootHooks";
import { setStringDynamic } from "../../../../../../../features/redux/reducers/common-reducers/stringDynamicReduser";
import {
  resetOnClickDynamic,
  setOnClickDynamic,
} from "../../../../../../../features/redux/reducers/common-reducers/onClickDynamicReduser";
import {
  resetModals,
  setToggleDynamic,
} from "../../../../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
import CutomModalWindowUniversal from "../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomInput from "../../../../../../../common/static-components/custom-input/CustomInput";
import CustomDualButtonYesNo from "../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import ChooseColourRoom from "../../../../../../../common/special-componet/choose-colour-room/ChooseColourRoom";
import { getNewId } from "../../../../../../../features/utils/arrayUtils";
import { addNewTab } from "../../../../../../../features/redux/reducers/special-reducers/control-panel-reducers/roomTabsEditReducer";
//ИКОНКИ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ

export interface AddNewRoomsButtonModalWindowPropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
}

const AddNewRoomsButtonModalWindow: FC<
  AddNewRoomsButtonModalWindowPropsType
> = ({ redaxStateKey, title, specialText }) => {
  const stateAddInput = useAppSelector(
    (state) => state.stringDynamic.stringStatesDynamic[redaxStateKey]
  );
  const dispatch = useAppDispatch();

  const roomTabs = useAppSelector((state) => state.roomTabsEdit.roomTabs);

  const newId = getNewId(roomTabs);

  const [localInputValue, setLocalInputValue] = useState<string>(stateAddInput);
  const [chooseColor, setChooseColor] = useState<string>("");

  const handleInputChange = (value: string) => {
    setLocalInputValue(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      addNewTab({ id: newId, name: localInputValue, color: chooseColor })
    );

    dispatch(
      setStringDynamic({
        key: redaxStateKey,
        value: localInputValue,
      })
    );

    dispatch(
      setOnClickDynamic({
        key: redaxStateKey,
        value: true,
      }),
      resetOnClickDynamic()
    );

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
        buttonRightText="Сохранить"
        isSubmit={true}
      />
    </CutomModalWindowUniversal>
  );
};

export default AddNewRoomsButtonModalWindow;
