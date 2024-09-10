import { FC } from "react";
import { RedaxStateProps } from "../../../../../../../../commonTypes.interface";

import CustomCounterInput from "../../../../../../../../common/static-components/custom-counter-input/CustomCounterInput";
import CustomSelect from "../../../../../../../../common/static-components/custom-select/CustomSelect";
import CustomDualButtonYesNo from "../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

import CutomModalWindowUniversal from "../../../../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-universal/CutomModalWindowUniversal";

interface EditPcModalWindowPropsType extends RedaxStateProps {}

const dataSelect = [
  {
    id: 1,
    selectItem: "Select1",
  },
  {
    id: 2,
    selectItem: "Select2",
  },
  {
    id: 3,
    selectItem: "Select3",
  },
  {
    id: 4,
    selectItem: "Select4",
  },
];

const EditPcModalWindow: FC<EditPcModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title="Редактирование"
      specialText="ПК-13"
    >
      <CustomCounterInput label="Номер компьютера" />
      <CustomSelect
        customSelectData={dataSelect}
        title="Группа ПК"
        selectTitle="Выберите группу для данного ПК"
      />
      <CustomSelect
        customSelectData={dataSelect}
        title="Отнести ПК к комнате"
        selectTitle="Выберите комнату для данного ПК"
      />
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Готово"
      />
    </CutomModalWindowUniversal>
  );
};

export default EditPcModalWindow;
