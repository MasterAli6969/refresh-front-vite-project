import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
import { CutomModalWindowUniversalDefaultPropsType } from "../../../../../../../../../../../../../commonTypes.interface";
import { useAppSelector } from "../../../../../../../../../../../../../features/redux/hooks/reduxRootHooks";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CutomModalWindowUniversal from "../../../../../../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomInput from "../../../../../../../../../../../../../common/static-components/custom-input/CustomInput";
import CustomSelect from "../../../../../../../../../../../../../common/static-components/custom-select/CustomSelect";
import CustomDualButtonYesNo from "../../../../../../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

export interface ChangeLocationModalWindowPropsType
  extends CutomModalWindowUniversalDefaultPropsType {
  comp_id: number;
}

const ChangeLocationModalWindow: FC<ChangeLocationModalWindowPropsType> = ({
  redaxStateKey,
  comp_id,
  title,
}) => {
  const roomData = useAppSelector((state) => state.pcRoomsEdit.pcRooms);

  return (
    <CutomModalWindowUniversal redaxStateKey={redaxStateKey} title={title}>
      <CustomInput label="Действующее место" value={`${comp_id}`} />
      <CustomSelect
        selectTitle="Новое место"
        customSelectData={["1", "2", "33"]}
      />
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Выполнить"
      />
    </CutomModalWindowUniversal>
  );
};

export default ChangeLocationModalWindow;
