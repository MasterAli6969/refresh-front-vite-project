import { FC } from "react";
import { RedaxStateProps } from "../../../../../../../../commonTypes.interface";

import CustomSelect from "../../../../../../../../common/static-components/custom-select/CustomSelect";

import CustomDualButtonYesNo from "../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CutomModalWindowUniversal from "../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomInput from "../../../../../../../../common/static-components/custom-input/CustomInput";

const selectData = [
  {
    id: 1,
    selectItem: "PC1",
  },
  {
    id: 2,
    selectItem: "PC92",
  },
  {
    id: 3,
    selectItem: "PC9222",
  },
];

export interface ChangeLocationModalWindowPropsType extends RedaxStateProps {}

const ChangeLocationModalWindow: FC<ChangeLocationModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title="Сменить место"
    >
      <CustomInput label="Новое место" placeholder="PC9" isReadOnly={true} />
      <CustomSelect
        title="Новое место"
        selectTitle="Выберите ПК для смены места"
        customSelectData={selectData}
      />
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Выполнить"
      />
    </CutomModalWindowUniversal>
  );
};

export default ChangeLocationModalWindow;
